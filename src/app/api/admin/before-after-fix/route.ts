import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BeforeAfter from '@/models/BeforeAfter';
import { verifyAdminToken } from '@/lib/admin-auth';

// PATCH: titleJp의 전각 괄호를 반각 괄호로 치환
export async function PATCH(request: NextRequest) {
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

    // 모든 데이터 조회
    const items = await BeforeAfter.find({});

    let updatedCount = 0;
    const updates = [];

    // 각 아이템의 titleJp 치환
    for (const item of items) {
      if (item.titleJp) {
        // 전각 괄호를 반각 괄호로 치환
        const originalTitle = item.titleJp;
        const fixedTitle = item.titleJp
          .replace(/（男）/g, '(男)')
          .replace(/（女）/g, '(女)')
          .replace(/（男性）/g, '(男性)')
          .replace(/（女性）/g, '(女性)');

        // 변경사항이 있으면 업데이트
        if (originalTitle !== fixedTitle) {
          await BeforeAfter.findOneAndUpdate(
            { id: item.id },
            { titleJp: fixedTitle },
            { new: true }
          );
          updatedCount++;
          updates.push({
            id: item.id,
            original: originalTitle,
            fixed: fixedTitle,
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `${updatedCount}개의 데이터가 수정되었습니다.`,
      total: items.length,
      updatedCount,
      updates,
    });
  } catch (error) {
    console.error('[titleJp 치환 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'titleJp 치환 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
