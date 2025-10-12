import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  try {
    const isAdmin = await verifyAdminToken(request);

    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: '인증이 필요합니다.',
        },
        { status: 401 },
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;
    const type = formData.get('type') as 'before' | 'after'; // 'before' 또는 'after'

    if (!file || !category || !type) {
      return NextResponse.json(
        {
          success: false,
          error: '파일, 카테고리, 타입이 필요합니다.',
        },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 파일 확장자 추출
    const ext = path.extname(file.name);

    // 저장 경로: public/{category}/slide/{type}.{ext}
    const dirPath = path.join(process.cwd(), 'public', category, 'slide');
    const fileName = `${type}${ext}`;
    const filePath = path.join(dirPath, fileName);

    // 디렉토리 생성 (없으면)
    await mkdir(dirPath, { recursive: true });

    // 파일 저장
    await writeFile(filePath, buffer);

    // 반환 경로
    const publicPath = `/${category}/slide/${fileName}`;

    return NextResponse.json({
      success: true,
      path: publicPath,
      message: '파일이 업로드되었습니다.',
    });
  } catch (error) {
    console.error('[슬라이드 업로드 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '파일 업로드 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
