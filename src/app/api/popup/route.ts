import { NextRequest, NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
import path from 'path';
import connectDB from '@/lib/mongodb';
import Popup from '@/models/Popup';
import { verifyAdminToken } from '@/lib/admin-auth';

// GET: 팝업 조회
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const activeOnly = searchParams.get('activeOnly') === 'true';

    // activeOnly가 false거나 없으면 관리자 전용 (대시보드)
    if (!activeOnly) {
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
    }

    await connectDB();

    // 단일 조회
    if (id) {
      const item = await Popup.findOne({ id: Number(id) });
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

    // 전체 조회 (활성화된 것만 또는 전체)
    let query: any = {};

    if (activeOnly) {
      query = { isActive: true };
    }

    const items = await Popup.find(query).sort({ order: 1 });

    return NextResponse.json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    console.error('[팝업 조회 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '데이터 조회 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// POST: 팝업 생성
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
    const lastItem = await Popup.findOne().sort({ id: -1 });
    const newId = lastItem ? lastItem.id + 1 : 1;

    const newItem = await Popup.create({
      ...body,
      id: newId,
    });

    return NextResponse.json({
      success: true,
      message: '팝업이 성공적으로 생성되었습니다.',
      data: newItem,
    });
  } catch (error) {
    console.error('[팝업 생성 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '팝업 생성 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// PUT: 팝업 수정
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

    // 기존 아이템 조회
    const existingItem = await Popup.findOne({ id: Number(id) });
    if (!existingItem) {
      return NextResponse.json(
        {
          success: false,
          error: '데이터를 찾을 수 없습니다.',
        },
        { status: 404 },
      );
    }

    // 순서가 변경되었는지 확인
    const oldOrder = existingItem.order;
    const newOrder = updateData.order;
    const oldPosition = existingItem.position;
    const newPosition = updateData.position || oldPosition;

    // 순서 또는 위치가 변경된 경우 다른 항목들의 순서 재조정
    if (oldOrder !== newOrder || oldPosition !== newPosition) {
      // 같은 위치의 팝업들 조회
      const itemsInSamePosition = await Popup.find({
        position: newPosition,
        id: { $ne: Number(id) }, // 현재 수정 중인 항목 제외
      }).sort({ order: 1 });

      // 새 순서에 맞춰 다른 항목들 재정렬
      for (const item of itemsInSamePosition) {
        if (item.order >= newOrder) {
          await Popup.findOneAndUpdate({ id: item.id }, { order: item.order + 1 });
        }
      }
    }

    // 현재 항목 업데이트
    const updatedItem = await Popup.findOneAndUpdate({ id: Number(id) }, updateData, {
      new: true,
    });

    return NextResponse.json({
      success: true,
      message: '팝업이 성공적으로 수정되었습니다.',
      data: updatedItem,
    });
  } catch (error) {
    console.error('[팝업 수정 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '팝업 수정 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// DELETE: 팝업 삭제
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
    const item = await Popup.findOne({ id: Number(id) });

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
    await Popup.findOneAndDelete({ id: Number(id) });

    // 이미지 파일 삭제 시도
    if (item.imageUrl) {
      try {
        const imagePath = path.join(process.cwd(), 'public', item.imageUrl);
        await unlink(imagePath).catch(() => {
          console.log(`이미지 삭제 실패 (파일 없음): ${imagePath}`);
        });
      } catch (error) {
        console.error('[이미지 삭제 에러]:', error);
        // 파일 삭제 실패해도 DB는 이미 삭제되었으므로 성공 응답
      }
    }

    return NextResponse.json({
      success: true,
      message: '팝업이 성공적으로 삭제되었습니다.',
    });
  } catch (error) {
    console.error('[팝업 삭제 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '팝업 삭제 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
