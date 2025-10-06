import { NextRequest, NextResponse } from 'next/server';

// 동영상 최적화 API
export async function GET(request: NextRequest, context: { params: Promise<{ videoId: string }> }) {
  const { videoId } = await context.params;

  if (!videoId || typeof videoId !== 'string') {
    return NextResponse.json({ message: 'Video ID is required' }, { status: 400 });
  }

  try {
    // Vimeo API를 통한 동영상 정보 가져오기
    const vimeoResponse = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`, {
      headers: {
        'User-Agent': 'BanalPS-Video-Optimizer/1.0',
      },
    });

    if (!vimeoResponse.ok) {
      throw new Error('Failed to fetch video data');
    }

    const videoData = await vimeoResponse.json();

    // 최적화된 동영상 URL 생성
    const optimizedUrl = `https://player.vimeo.com/video/${videoId}?h=${videoData.video_id}&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0`;

    // 응답 데이터
    const responseData = {
      videoId,
      optimizedUrl,
      thumbnail: videoData.thumbnail_url,
      title: videoData.title,
      duration: videoData.duration,
      width: videoData.width,
      height: videoData.height,
    };

    // 캐시 헤더 설정과 함께 응답
    return NextResponse.json(responseData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Video optimization error:', error);
    return NextResponse.json(
      {
        message: 'Failed to optimize video',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
