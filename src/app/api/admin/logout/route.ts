import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json({
      success: true,
      message: '로그아웃 성공',
    });

    // 쿠키 삭제
    response.cookies.delete('admin_token');

    return response;
  } catch (error) {
    console.error('[로그아웃 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '로그아웃 중 오류가 발생했습니다.',
      },
      { status: 500 }
    );
  }
}
