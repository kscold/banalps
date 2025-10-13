import { NextRequest, NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
import path from 'path';
import connectDB from '@/lib/mongodb';
import BeforeAfter from '@/models/BeforeAfter';
import { verifyAdminToken } from '@/lib/admin-auth';

// GET: 전체 조회 (공개 API - 인증 불필요)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const id = searchParams.get('id');

    // 단일 조회
    if (id) {
      const item = await BeforeAfter.findOne({ id: Number(id) });
      if (!item) {
        return NextResponse.json(
          {
            success: false,
            error: '데이터를 찾을 수 없습니다.',
          },
          { status: 404 },
        );
      }
      return NextResponse.json({
        success: true,
        data: item,
      });
    }

    // 전체 조회 (카테고리별 필터링 가능)
    const query = category ? { category } : {};
    const items = await BeforeAfter.find(query).sort({ category: 1, order: 1 });

    return NextResponse.json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    console.error('[조회 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '데이터 조회 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// POST: 생성
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

    const body = await request.json();

    // 새 ID 생성 (마지막 ID + 1)
    const lastItem = await BeforeAfter.findOne().sort({ id: -1 });
    const newId = lastItem ? lastItem.id + 1 : 1;

    const newItem = await BeforeAfter.create({
      ...body,
      id: newId,
    });

    return NextResponse.json({
      success: true,
      message: '데이터가 성공적으로 생성되었습니다.',
      data: newItem,
    });
  } catch (error) {
    console.error('[생성 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '데이터 생성 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// PUT: 수정
export async function PUT(request: NextRequest) {
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

    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'ID가 필요합니다.',
        },
        { status: 400 },
      );
    }

    // 현재 아이템 정보 가져오기
    const currentItem = await BeforeAfter.findOne({ id: Number(id) });

    if (!currentItem) {
      return NextResponse.json(
        {
          success: false,
          error: '데이터를 찾을 수 없습니다.',
        },
        { status: 404 },
      );
    }

    // 순서가 변경되었는지 확인
    if (updateData.order !== undefined && updateData.order !== currentItem.order) {
      const oldOrder = currentItem.order;
      const newOrder = updateData.order;
      const category = currentItem.category;

      // 같은 카테고리의 다른 아이템들 순서 조정
      if (newOrder < oldOrder) {
        // 순서를 앞으로 당기는 경우 (예: 16 → 1)
        // 기존 1~15번을 2~16번으로 밀기
        await BeforeAfter.updateMany(
          {
            category: category,
            order: { $gte: newOrder, $lt: oldOrder },
          },
          {
            $inc: { order: 1 },
          }
        );
      } else if (newOrder > oldOrder) {
        // 순서를 뒤로 미루는 경우 (예: 1 → 16)
        // 기존 2~16번을 1~15번으로 당기기
        await BeforeAfter.updateMany(
          {
            category: category,
            order: { $gt: oldOrder, $lte: newOrder },
          },
          {
            $inc: { order: -1 },
          }
        );
      }
    }

    // 현재 아이템 업데이트
    const updatedItem = await BeforeAfter.findOneAndUpdate({ id: Number(id) }, updateData, {
      new: true,
    });

    return NextResponse.json({
      success: true,
      message: '데이터가 성공적으로 수정되었습니다.',
      data: updatedItem,
    });
  } catch (error) {
    console.error('[수정 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '데이터 수정 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// DELETE: 삭제
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

    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'ID가 필요합니다.',
        },
        { status: 400 },
      );
    }

    // 먼저 아이템 조회
    const item = await BeforeAfter.findOne({ id: Number(id) });

    if (!item) {
      return NextResponse.json(
        {
          success: false,
          error: '데이터를 찾을 수 없습니다.',
        },
        { status: 404 },
      );
    }

    // DB에서 삭제
    await BeforeAfter.findOneAndDelete({ id: Number(id) });

    // 실제 파일 삭제 시도
    try {
      const beforeImagePath = path.join(process.cwd(), 'public', item.beforeImage);
      const afterImagePath = path.join(process.cwd(), 'public', item.afterImage);

      await unlink(beforeImagePath).catch(() => {
        console.log(`Before 이미지 삭제 실패 (파일 없음): ${beforeImagePath}`);
      });
      await unlink(afterImagePath).catch(() => {
        console.log(`After 이미지 삭제 실패 (파일 없음): ${afterImagePath}`);
      });
    } catch (error) {
      console.error('[파일 삭제 에러]:', error);
      // 파일 삭제 실패해도 DB는 이미 삭제되었으므로 성공 응답
    }

    return NextResponse.json({
      success: true,
      message: '데이터가 성공적으로 삭제되었습니다.',
    });
  } catch (error) {
    console.error('[삭제 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '데이터 삭제 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
