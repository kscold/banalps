import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

/**
 * Admin 계정 초기화 API (개발 환경 전용)
 *
 * MongoDB의 admins 컬렉션을 비워서 새 환경 변수로 로그인할 수 있게 합니다.
 *
 * 사용법:
 * curl http://localhost:3000/api/admin/reset
 */
export async function GET() {
  try {
    // 프로덕션 환경에서는 차단
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        {
          success: false,
          error: '프로덕션 환경에서는 사용할 수 없습니다.',
        },
        { status: 403 }
      );
    }

    await connectDB();

    // admins 컬렉션의 모든 문서 삭제
    const result = await Admin.deleteMany({});

    return NextResponse.json({
      success: true,
      message: `Admin 계정 초기화 완료. ${result.deletedCount}개 삭제됨`,
      info: '이제 새 환경 변수(ADMIN_USERNAME, ADMIN_PASSWORD)로 로그인하면 계정이 자동 생성됩니다.',
      credentials: {
        username: process.env.ADMIN_USERNAME || '환경 변수 없음',
        password: '***' + (process.env.ADMIN_PASSWORD?.slice(-4) || ''),
      },
    });
  } catch (error) {
    console.error('[Admin 초기화 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Admin 계정 초기화 중 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
