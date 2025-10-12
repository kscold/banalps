import { NextRequest, NextResponse } from 'next/server';

import dbConnect from '@/lib/dbConnect';
import AcademicActivity from '@/models/AcademicActivity';
import { verifyAdminToken } from '@/lib/admin-auth';

// GET: 모든 학술 활동 조회 (연도별 정렬)
export async function GET() {
  try {
    await dbConnect();

    const activities = await AcademicActivity.find().sort({ year: -1, order: 1 }).lean();

    return NextResponse.json({
      success: true,
      data: activities,
    });
  } catch (error) {
    console.error('[API/학술활동/조회에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '학술 활동 조회 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// POST: 새로운 학술 활동 생성
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
    const { year, date, type, event, title } = body;

    // 유효성 검사
    if (!year || !date || !type || !event || !title) {
      return NextResponse.json(
        {
          success: false,
          message: '필수 필드가 누락되었습니다.',
        },
        { status: 400 },
      );
    }

    // 마지막 ID 가져오기
    const lastActivity = await AcademicActivity.findOne().sort({ id: -1 }).lean();
    const newId = lastActivity ? lastActivity.id + 1 : 1;

    // 새로운 학술 활동 생성 (order는 0으로 고정, 날짜순 정렬)
    const newActivity = await AcademicActivity.create({
      id: newId,
      year,
      date,
      type,
      event,
      title,
      order: 0,
    });

    return NextResponse.json({
      success: true,
      data: newActivity,
    });
  } catch (error) {
    console.error('[API/학술활동/생성에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '학술 활동 생성 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// PUT: 학술 활동 수정
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
    const { id, year, date, type, event, title, order } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID가 필요합니다.',
        },
        { status: 400 },
      );
    }

    const updatedActivity = await AcademicActivity.findOneAndUpdate(
      { id },
      {
        year,
        date,
        type,
        event,
        title,
        order,
      },
      { new: true },
    );

    if (!updatedActivity) {
      return NextResponse.json(
        {
          success: false,
          message: '학술 활동을 찾을 수 없습니다.',
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedActivity,
    });
  } catch (error) {
    console.error('[API/학술활동/수정에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '학술 활동 수정 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}

// DELETE: 학술 활동 삭제
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

    const deletedActivity = await AcademicActivity.findOneAndDelete({ id: parseInt(id) });

    if (!deletedActivity) {
      return NextResponse.json(
        {
          success: false,
          message: '학술 활동을 찾을 수 없습니다.',
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: '학술 활동이 삭제되었습니다.',
    });
  } catch (error) {
    console.error('[API/학술활동/삭제에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '학술 활동 삭제 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
