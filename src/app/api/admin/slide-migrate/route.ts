import { NextRequest, NextResponse } from 'next/server';

import dbConnect from '@/lib/dbConnect';
import Slide from '@/models/Slide';
import { verifyAdminToken } from '@/lib/admin-auth';

interface SlideData {
  category: string;
  beforeImage: string;
  afterImage: string;
  scale: number;
  order: number;
}

// 하드코딩된 슬라이드 데이터
const slideData: SlideData[] = [
  {
    category: 'forehead/hair-transplant',
    beforeImage: '/forehead/hair-transplant/slide/before.jpg',
    afterImage: '/forehead/hair-transplant/slide/after.jpg',
    scale: 1.0,
    order: 1,
  },
  {
    category: 'forehead/scar-reduction',
    beforeImage: '/forehead/scar-reduction/slide/before.jpg',
    afterImage: '/forehead/scar-reduction/slide/after.png',
    scale: 1.0,
    order: 2,
  },
  {
    category: 'hair-transplant/crown',
    beforeImage: '/hair-transplant/crown/slide/before.png',
    afterImage: '/hair-transplant/crown/slide/after.png',
    scale: 1.0,
    order: 3,
  },
  {
    category: 'hair-transplant/hairline',
    beforeImage: '/hair-transplant/hairline/slide/before.jpg',
    afterImage: '/hair-transplant/hairline/slide/after.jpg',
    scale: 1.0,
    order: 4,
  },
  {
    category: 'hair-transplant/incision',
    beforeImage: '/hair-transplant/incision/slide/before.jpg',
    afterImage: '/hair-transplant/incision/slide/after.jpg',
    scale: 1.0,
    order: 5,
  },
  {
    category: 'hair-transplant/reoperation',
    beforeImage: '/hair-transplant/reoperation/slide/before.png',
    afterImage: '/hair-transplant/reoperation/slide/after.png',
    scale: 1.0,
    order: 6,
  },
];

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

    // 기존 슬라이드 데이터 삭제
    await Slide.deleteMany({});

    // 새로운 슬라이드 데이터 삽입
    const slides = slideData.map((slide, index) => ({
      id: index + 1,
      ...slide,
    }));

    await Slide.insertMany(slides);

    return NextResponse.json({
      success: true,
      message: `${slides.length}개의 슬라이드가 마이그레이션되었습니다.`,
      data: slides,
    });
  } catch (error) {
    console.error('[API/슬라이드/마이그레이션에러]', error);
    return NextResponse.json(
      {
        success: false,
        message: '슬라이드 마이그레이션 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
