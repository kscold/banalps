import { NextRequest, NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
import path from 'path';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function DELETE(request: NextRequest) {
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

    const { searchParams } = new URL(request.url);
    const imagePath = searchParams.get('path');

    if (!imagePath) {
      return NextResponse.json(
        {
          success: false,
          error: '이미지 경로가 필요합니다.',
        },
        { status: 400 },
      );
    }

    // public 폴더 기준 절대 경로 생성
    const fullPath = path.join(process.cwd(), 'public', imagePath);

    try {
      await unlink(fullPath);
      return NextResponse.json({
        success: true,
        message: '이미지가 성공적으로 삭제되었습니다.',
      });
    } catch (error) {
      console.error('[파일 삭제 에러]:', error);
      return NextResponse.json(
        {
          success: false,
          error: '이미지 파일을 찾을 수 없거나 삭제할 수 없습니다.',
        },
        { status: 404 },
      );
    }
  } catch (error) {
    console.error('[삭제 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '이미지 삭제 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
