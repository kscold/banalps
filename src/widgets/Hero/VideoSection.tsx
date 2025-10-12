'use client';

import { useEffect, useRef, useState } from 'react';

import * as styles from './HeroSection.css';
import { useVideoPreloader } from '@/utils/videoOptimizer';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

interface VideoSectionProps {
  showVideoSection: boolean;
  onVideoEnd?: () => void;
  onVideoReady?: () => void;
}

interface VimeoPlayer {
  play: () => Promise<void>;
  pause: () => Promise<void>;
  setCurrentTime: (seconds: number) => Promise<number>;
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback?: () => void) => void;
}

export function VideoSection({ showVideoSection, onVideoEnd, onVideoReady }: VideoSectionProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoEndedRef = useRef(false);
  const [isClient, setIsClient] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const playerRef = useRef<VimeoPlayer | null>(null);

  // 모바일 감지 (394px 이하만 모바일 비디오 사용)
  const isMobileVideo = useMediaQuery('screen and (max-width: 394px)');

  // 동영상 최적화 적용
  const desktopVideoConfig = useVideoPreloader('VIDEO_SECTION_BACKGROUND');
  const mobileVideoConfig = useVideoPreloader('VIDEO_SECTION_MOBILE_BACKGROUND');

  // 현재 디바이스에 맞는 비디오 URL
  const currentVideoUrl = isMobileVideo ? mobileVideoConfig.url : desktopVideoConfig.url;

  // 클라이언트 사이드에서만 실행 + 비디오 프리로드 + Vimeo Player API 로드
  useEffect(() => {
    setIsClient(true);

    // Vimeo Player API 스크립트 로드
    if (!(window as Window & { Vimeo?: unknown }).Vimeo) {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // 비디오 iframe 프리팩치
    if (!isVideoLoaded) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'document';
      preloadLink.href = currentVideoUrl;
      document.head.appendChild(preloadLink);
    }
  }, [isVideoLoaded, currentVideoUrl]);

  const handleVimeoLoad = () => {
    // Vimeo Player API가 로드될 때까지 재시도
    const tryInitializePlayer = (retryCount = 0) => {
      try {
        // 이미 비디오가 로드되었다면 재사용
        if (isVideoLoaded && playerRef.current) {
          const player = playerRef.current;

          // 비디오 섹션이 표시될 때 0초부터 재생
          if (showVideoSection) {
            player.setCurrentTime(0).catch((error: unknown) => {
              console.error('[VideoSection/비디오리셋에러] 비디오 리셋 실패:', error);
            });
          }
          return;
        }

        // Vimeo Player API를 사용하여 비디오 이벤트 리스너 등록
        if (
          iframeRef.current &&
          (
            window as Window & {
              Vimeo?: { Player: new (element: HTMLElement) => VimeoPlayer };
            }
          ).Vimeo
        ) {
          const iframe = iframeRef.current;
          const player = new (
            window as Window & {
              Vimeo?: { Player: new (element: HTMLElement) => VimeoPlayer };
            }
          ).Vimeo!.Player(iframe);
          playerRef.current = player; // 플레이어 참조 저장

          player.on('ended', () => {
            videoEndedRef.current = true;
            // 비디오가 끝나면 처음부터 다시 재생 (루프)
            player
              .setCurrentTime(0)
              .then(() => {
                player.play().catch((error: unknown) => {
                  console.error('[VideoSection/비디오재생에러] 비디오 재생 실패:', error);
                });
              })
              .catch((error: unknown) => {
                console.error('[VideoSection/비디오리셋에러] 비디오 리셋 실패:', error);
              });

            if (onVideoEnd) {
              onVideoEnd();
            }
          });

          player.on('play', () => {
            videoEndedRef.current = false;
            // 비디오 재생이 시작되면 스크롤 가능
            if (onVideoReady) {
              onVideoReady();
            }
          });

          // 비디오 로드 완료 표시
          setIsVideoLoaded(true);

          // 비디오 섹션이 표시될 때 0초부터 재생
          if (showVideoSection) {
            player.setCurrentTime(0).catch((error: unknown) => {
              console.error('[VideoSection/비디오리셋에러] 비디오 리셋 또는 재생 실패:', error);
            });
          }
        } else if (retryCount < 10) {
          // Vimeo API가 아직 로드되지 않았으면 100ms 후 재시도
          setTimeout(() => tryInitializePlayer(retryCount + 1), 100);
        } else {
          console.warn('[VideoSection/Vimeo경고] Vimeo Player API가 로드되지 않음 (최대 재시도 도달)');
        }
      } catch (error) {
        console.error('[VideoSection/Vimeo에러] 비디오 로드 에러:', error);
      }
    };

    tryInitializePlayer();
  };

  // 비디오 섹션이 표시될 때마다 상태 리셋 및 0초로 리셋
  useEffect(() => {
    if (showVideoSection) {
      videoEndedRef.current = false;

      // 비디오를 0초로 리셋
      if (playerRef.current) {
        const player = playerRef.current;

        player.setCurrentTime(0).catch((error: unknown) => {
          console.error('[VideoSection/비디오리셋에러] 비디오 리셋 또는 재생 실패:', error);
        });
      }
    }
  }, [showVideoSection, isVideoLoaded]);

  return (
    <div className={styles.vimeoContainer}>
      <iframe
        ref={iframeRef}
        src={currentVideoUrl}
        className={styles.vimeoIframe}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 'max(177.77vh, 100vw)',
          height: 'max(56.25vw, 100vh)',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          pointerEvents: 'none',
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="eager"
        suppressHydrationWarning
        onLoad={handleVimeoLoad}
        onError={() => {
          console.error('[VideoSection/Vimeo에러] iframe 로드 실패');
        }}
      />
    </div>
  );
}
