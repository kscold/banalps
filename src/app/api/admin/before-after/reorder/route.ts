import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BeforeAfter from '@/models/BeforeAfter';
import { verifyAdminToken } from '@/lib/admin-auth';

// POST: 카테고리별 순서 재정렬 (중복 제거)
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

    await connectDB();

    const { category } = await request.json();

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          error: '카테고리가 필요합니다.',
        },
        { status: 400 },
      );
    }

    // 해당 카테고리의 모든 항목을 order 순으로 가져오기
    const items = await BeforeAfter.find({ category }).sort({ order: 1, id: 1 });

    // 순서 재정렬 (1부터 시작)
    const updates = items.map((item, index) => ({
      updateOne: {
        filter: { id: item.id },
        update: { $set: { order: index + 1 } },
      },
    }));

    if (updates.length > 0) {
      await BeforeAfter.bulkWrite(updates);
    }

    return NextResponse.json({
      success: true,
      message: `${category} 카테고리의 순서가 재정렬되었습니다.`,
      count: updates.length,
    });
  } catch (error) {
    console.error('[순서 재정렬 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '순서 재정렬 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
