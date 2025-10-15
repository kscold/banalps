import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
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

    // Vercel Blob Storage에 업로드
    const blob = await put(`slide/${category}/${type}-${Date.now()}-${file.name}`, file, {
      access: 'public',
    });

    return NextResponse.json({
      success: true,
      path: blob.url,
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
