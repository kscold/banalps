import { NextRequest, NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';
import connectDB from '@/lib/mongodb';
import BeforeAfter, { Category } from '@/models/BeforeAfter';

// 한국어 -> 일본어 번역 함수 (프론트엔드와 동일한 규칙)
function translateToJapanese(title: string): string {
  if (!title) return '';

  let translatedTitle = title;

  // 1. 기간 번역 (띄어쓰기 없음)
  translatedTitle = translatedTitle.replace(/(\d+)년경과/g, '$1年経過');
  translatedTitle = translatedTitle.replace(/(\d+)개월경과/g, '$1カ月経過');
  translatedTitle = translatedTitle.replace(/(\d+)일경과/g, '$1日経過');

  // 2. 수술 타입 번역 (단어별로 쪼개기)
  translatedTitle = translatedTitle.replace(/이마/g, '額');
  translatedTitle = translatedTitle.replace(/축소/g, '縮小');
  translatedTitle = translatedTitle.replace(/흉터/g, '傷跡');
  translatedTitle = translatedTitle.replace(/재수술/g, '再手術');
  translatedTitle = translatedTitle.replace(/헤어라인/g, 'ヘアライン');
  translatedTitle = translatedTitle.replace(/정수리/g, '頭頂部');

  // 3. 모(毛) 번역 - 숫자 + 모 패턴
  translatedTitle = translatedTitle.replace(/(\d+)모/g, '$1毛');

  // 4. 성별 번역
  translatedTitle = translatedTitle.replace(/\(남\)/g, '（男）');
  translatedTitle = translatedTitle.replace(/\(여\)/g, '（女）');

  // 5. 구분자 번역 (언더스코어는 전각으로)
  translatedTitle = translatedTitle.replace(/_/g, '＿');

  return translatedTitle;
}

// 파일명에서 타이틀 추출 함수
function extractTitleFromFilename(filename: string): string | undefined {
  // 1. 확장자 제거
  const withoutExt = filename.replace(/\.jpg$/i, '');

  // 2. "숫자-1" 또는 "숫자-2" 패턴 제거 (띄어쓰기 없음)
  // 예: "1-14000모(남)_1년경과" -> "4000모(남)_1년경과"
  // 예: "31-1" -> ""
  const withoutPrefix = withoutExt.replace(/^\d+-[12]/, '');

  // 3. 빈 문자열이면 undefined 반환
  if (!withoutPrefix) {
    return undefined;
  }

  return withoutPrefix;
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    // public/before-after 폴더 경로
    const baseDir = path.join(process.cwd(), 'public', 'before-after');

    // 카테고리 정의 (정수리는 공백 포함)
    const categoryFolders: { name: Category; folder: string }[] = [
      { name: '이마축소', folder: '이마축소' },
      { name: '흉터&재수술', folder: '흉터&재수술' },
      { name: '헤어라인(남성)', folder: '헤어라인(남성)' },
      { name: '헤어라인(여성)', folder: '헤어라인(여성)' },
      { name: '정수리', folder: '정수리 ' }, // 공백 포함
    ];

    const allData: any[] = [];
    let globalId = 1;

    // 각 카테고리별로 처리
    for (const { name: category, folder } of categoryFolders) {
      const categoryPath = path.join(baseDir, folder);

      try {
        const files = await readdir(categoryPath);

        // -1로 시작하는 모든 before 이미지 필터링
        // 예: "1-1.jpg", "10-1 이마축소(여) _ 6개월경과.jpg" 모두 포함
        const beforeFiles = files
          .filter((f) => f.match(/^(\d+)-1.*\.jpg$/i))
          .sort((a, b) => {
            // 파일명 앞의 숫자로 정렬
            const numA = parseInt(a.match(/^(\d+)-/)?.[1] || '0');
            const numB = parseInt(b.match(/^(\d+)-/)?.[1] || '0');
            return numA - numB;
          });

        let categoryOrder = 1;

        for (const beforeFile of beforeFiles) {
          // "-1"을 "-2"로 교체 (파일명 중간에 있을 수도 있음)
          const afterFile = beforeFile.replace(/-1(.*\.jpg)$/i, '-2$1');

          // after 파일이 존재하는지 확인
          if (files.includes(afterFile)) {
            const title = extractTitleFromFilename(beforeFile);
            const titleJp = title ? translateToJapanese(title) : undefined;

            allData.push({
              id: globalId++,
              category,
              title,
              titleJp,
              beforeImage: `/before-after/${folder}/${beforeFile}`,
              afterImage: `/before-after/${folder}/${afterFile}`,
              order: categoryOrder++,
            });
          }
        }
      } catch (error) {
        console.error(`[${category}] 폴더 읽기 실패:`, error);
      }
    }

    // 기존 데이터 삭제
    await BeforeAfter.deleteMany({});

    // 새 데이터 삽입
    const result = await BeforeAfter.insertMany(allData);

    // 카테고리별 개수 계산
    const breakdown = {
      이마축소: allData.filter((d) => d.category === '이마축소').length,
      '흉터&재수술': allData.filter((d) => d.category === '흉터&재수술').length,
      '헤어라인(남성)': allData.filter((d) => d.category === '헤어라인(남성)').length,
      '헤어라인(여성)': allData.filter((d) => d.category === '헤어라인(여성)').length,
      정수리: allData.filter((d) => d.category === '정수리').length,
    };

    return NextResponse.json({
      success: true,
      message: `${result.length}개의 데이터가 성공적으로 마이그레이션되었습니다.`,
      count: result.length,
      breakdown,
      samples: {
        total: allData.length,
        withTitle: allData.filter((d) => d.title).length,
        withTitleJp: allData.filter((d) => d.titleJp).length,
        first5: allData.slice(0, 5).map((d) => ({
          id: d.id,
          category: d.category,
          title: d.title || '(타이틀 없음)',
          titleJp: d.titleJp || '(타이틀 없음)',
          order: d.order,
        })),
        last5: allData.slice(-5).map((d) => ({
          id: d.id,
          category: d.category,
          title: d.title || '(타이틀 없음)',
          titleJp: d.titleJp || '(타이틀 없음)',
          order: d.order,
        })),
      },
    });
  } catch (error) {
    console.error('[마이그레이션 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '마이그레이션 중 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
