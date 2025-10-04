'use client';

import { useEffect, useRef, useState } from 'react';

import * as styles from './HeroSection.css';

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

  // 클라이언트 사이드에서만 실행 + 비디오 프리로드
  useEffect(() => {
    setIsClient(true);

    // 비디오 iframe 프리팩치
    if (!isVideoLoaded) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'document';
      preloadLink.href =
        'https://player.vimeo.com/video/1121423051?h=5c69b41058&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=0&controls=0';
      document.head.appendChild(preloadLink);
    }
  }, [isVideoLoaded]);

  const handleVimeoLoad = () => {
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
      } else {
        console.warn('[VideoSection/Vimeo경고] Vimeo Player API가 로드되지 않음');
      }
    } catch (error) {
      console.error('[VideoSection/Vimeo에러] 비디오 로드 에러:', error);
    }
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
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        opacity: showVideoSection ? 1 : 0,
        pointerEvents: showVideoSection ? 'auto' : 'none',
      }}
    >
      <div className={styles.vimeoContainer}>
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1121423051?h=5c69b41058&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=0&controls=0"
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
          onLoad={handleVimeoLoad}
          onError={() => {
            console.error('[VideoSection/Vimeo에러] iframe 로드 실패');
          }}
        />
      </div>
    </div>
  );
}
