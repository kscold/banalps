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

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: '파일이 필요합니다.',
        },
        { status: 400 },
      );
    }

    // 파일 버퍼 생성
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 파일 저장 경로 (public/popup/)
    const uploadDir = path.join(process.cwd(), 'public', 'popup');

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

    // 웹 경로 반환
    const webPath = `/popup/${filename}`;

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
