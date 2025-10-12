import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Slide from '@/models/Slide';
import { verifyAdminToken } from '@/lib/admin-auth';

// 기존 슬라이드 데이터의 스키마를 수정하는 엔드포인트
export async function POST(request: NextRequest) {
  try {
    const isAdmin = await verifyAdminToken(request);

    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          message: '인증이 필요합니다.',
        },
        { status: 401 },
      );
    }

    await dbConnect();

    // MongoDB collection에 직접 접근
    const db = (Slide as any).db;
    const collection = db.collection('slides');

    // 1. cropSettings 필드 제거
    const unsetResult = await collection.updateMany(
      { cropSettings: { $exists: true } },
      { $unset: { cropSettings: '' } }
    );

    // 2. scale 필드가 없는 문서에 scale: 1.0 추가
    const setResult = await collection.updateMany(
      { scale: { $exists: false } },
      { $set: { scale: 1.0 } }
    );

    console.log('Unset cropSettings:', unsetResult.modifiedCount);
    console.log('Set scale:', setResult.modifiedCount);

    return NextResponse.json({
      success: true,
      message: `cropSettings 제거: ${unsetResult.modifiedCount}개, scale 추가: ${setResult.modifiedCount}개`,
      unsetCount: unsetResult.modifiedCount,
      setCount: setResult.modifiedCount,
    });
  } catch (error) {
    console.error('[API/슬라이드/스키마수정에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '슬라이드 스키마 수정 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
