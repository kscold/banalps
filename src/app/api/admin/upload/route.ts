import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  try {
    // 관리자 인증 체크
    const isAdmin = await verifyAdminToken(request);
    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: '관리자 권한이 필요합니다.',
        },
        { status: 401 },
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: '파일이 필요합니다.',
        },
        { status: 400 },
      );
    }

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          error: '카테고리가 필요합니다.',
        },
        { status: 400 },
      );
    }

    // 파일 버퍼 생성
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 파일 저장 경로 (public/before-after/카테고리/)
    // 정수리 카테고리는 폴더명에 공백이 있음
    const folderName = category === '정수리' ? '정수리 ' : category;
    const uploadDir = path.join(process.cwd(), 'public', 'before-after', folderName);

    // 디렉토리 생성 (없으면)
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      // 디렉토리가 이미 존재하는 경우 무시
    }

    // 파일명 생성 (타임스탬프 + 원본 파일명)
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name}`;
    const filepath = path.join(uploadDir, filename);

    // 파일 저장
    await writeFile(filepath, buffer);

    // 웹 경로 반환 (폴더명 그대로)
    const webPath = `/before-after/${folderName}/${filename}`;

    return NextResponse.json({
      success: true,
      message: '파일이 성공적으로 업로드되었습니다.',
      path: webPath,
    });
  } catch (error) {
    console.error('[업로드 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '파일 업로드 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
