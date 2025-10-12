import { NextRequest, NextResponse } from 'next/server';

import dbConnect from '@/lib/dbConnect';
import Slide from '@/models/Slide';
import { verifyAdminToken } from '@/lib/admin-auth';

// GET: 모든 슬라이드 조회
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let query = {};
    if (category) {
      query = { category };
    }

    const slides = await Slide.find(query).sort({ category: 1, order: 1 }).lean();

    return NextResponse.json({
      success: true,
      data: slides,
    });
  } catch (error) {
    console.error('[API/슬라이드/조회에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '슬라이드 조회 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// POST: 새로운 슬라이드 생성
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

    const body = await request.json();
    const { category, beforeImage, afterImage, scale, order } = body;

    // 유효성 검사
    if (!category || !beforeImage || !afterImage) {
      return NextResponse.json(
        {
          success: false,
          message: '필수 필드가 누락되었습니다.',
        },
        { status: 400 },
      );
    }

    // 마지막 ID 가져오기
    const lastSlide = await Slide.findOne().sort({ id: -1 }).lean();
    const newId = lastSlide ? lastSlide.id + 1 : 1;

    // 새로운 슬라이드 생성
    const newSlide = await Slide.create({
      id: newId,
      category,
      beforeImage,
      afterImage,
      scale: scale || 1.0,
      order: order || 0,
    });

    return NextResponse.json({
      success: true,
      data: newSlide,
    });
  } catch (error) {
    console.error('[API/슬라이드/생성에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '슬라이드 생성 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// PUT: 슬라이드 수정
export async function PUT(request: NextRequest) {
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

    const body = await request.json();
    const { id, category, beforeImage, afterImage, scale, order } = body;

    console.log('[API/슬라이드/수정] 받은 데이터:', body);
    console.log('[API/슬라이드/수정] scale 값:', scale, typeof scale);

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID가 필요합니다.',
        },
        { status: 400 },
      );
    }

    // MongoDB collection에 직접 접근하여 업데이트
    const db = (Slide as any).db;
    const collection = db.collection('slides');

    // 먼저 cropSettings 제거
    await collection.updateOne(
      { id },
      {
        $unset: { cropSettings: '' },
        $set: {
          category,
          beforeImage,
          afterImage,
          scale: Number(scale),
          order: Number(order),
          updatedAt: new Date(),
        }
      }
    );

    // 업데이트된 문서 조회
    const updatedSlide = await Slide.findOne({ id });

    console.log('[API/슬라이드/수정] 업데이트 결과:', updatedSlide?.toObject());

    if (!updatedSlide) {
      return NextResponse.json(
        {
          success: false,
          message: '슬라이드를 찾을 수 없습니다.',
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedSlide,
    });
  } catch (error) {
    console.error('[API/슬라이드/수정에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '슬라이드 수정 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// DELETE: 슬라이드 삭제
export async function DELETE(request: NextRequest) {
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

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID가 필요합니다.',
        },
        { status: 400 },
      );
    }

    const deletedSlide = await Slide.findOneAndDelete({ id: parseInt(id) });

    if (!deletedSlide) {
      return NextResponse.json(
        {
          success: false,
          message: '슬라이드를 찾을 수 없습니다.',
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: '슬라이드가 삭제되었습니다.',
    });
  } catch (error) {
    console.error('[API/슬라이드/삭제에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '슬라이드 삭제 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
