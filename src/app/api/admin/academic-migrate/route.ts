import { NextRequest, NextResponse } from 'next/server';

import dbConnect from '@/lib/dbConnect';
import AcademicActivity from '@/models/AcademicActivity';
import { academicActivitiesByYear } from '@/data/academicActivities';
import { verifyAdminToken } from '@/lib/admin-auth';

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

    // 기존 데이터 모두 삭제
    await AcademicActivity.deleteMany({});

    // 데이터 변환 및 삽입
    let id = 1;
    let order = 0;
    const activities = [];

    for (const [yearStr, yearActivities] of Object.entries(academicActivitiesByYear)) {
      const year = parseInt(yearStr);
      order = 0;

      for (const activity of yearActivities) {
        // title이 비어있는 경우 event를 title로 사용
        const title = {
          ko: activity.title.ko || activity.event.ko,
          jp: activity.title.jp || activity.event.jp,
        };

        activities.push({
          id: id++,
          year,
          date: activity.date,
          type: activity.type,
          event: activity.event,
          title,
          order: order++,
        });
      }
    }

    // MongoDB에 삽입
    const result = await AcademicActivity.insertMany(activities);

    return NextResponse.json({
      success: true,
      message: '마이그레이션이 완료되었습니다.',
      count: result.length,
      samples: activities.slice(0, 3),
    });
  } catch (error) {
    console.error('[API/학술활동마이그레이션/에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '마이그레이션 중 오류가 발생했습니다.',
        error: String(error),
      },
      { status: 500 },
    );
  }
}
