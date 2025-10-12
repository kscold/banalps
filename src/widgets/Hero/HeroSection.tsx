'use client';

import { useState, useEffect } from 'react';

import { TextContentRenderer } from './TextContentRenderer';
import { useVideoPreloader } from '@/utils/videoOptimizer';

import * as styles from './HeroSection.css';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

interface HeroSectionProps {
  onTextComplete?: () => void;
  initialTextIndex?: number;
  isActive?: boolean;
}

export default function HeroSection({ initialTextIndex = 0, onTextComplete, isActive = true }: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(initialTextIndex);
  const [virtualScrollY, setVirtualScrollY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // 전환 중 플래그
  const [isCompleted, setIsCompleted] = useState(false); // 히어로 섹션 완료 플래그
  const totalTexts = 5; // 텍스트 개수 5개로 변경

  // 모바일 감지 (410px 이하만 모바일 비디오 사용)
  const isMobile = useMediaQuery('screen and (max-width: 394px)');

  // 동영상 최적화 적용
  const desktopVideoConfig = useVideoPreloader('HERO_BACKGROUND');
  const mobileVideoConfig = useVideoPreloader('HERO_MOBILE_BACKGROUND');

  // VideoSection(About 페이지) 비디오 미리 로드
  const videoSectionDesktopConfig = useVideoPreloader('VIDEO_SECTION_BACKGROUND');
  const videoSectionMobileConfig = useVideoPreloader('VIDEO_SECTION_MOBILE_BACKGROUND');

  // VideoSection 비디오 백그라운드 preload (Hero 로딩 후)
  useEffect(() => {
    // VideoSection 비디오 DNS prefetch 및 preconnect 추가
    // About 페이지로 이동할 때 빠른 로딩을 위해 미리 연결
    const addVideoSectionPreload = () => {
      // Vimeo 도메인 preconnect (이미 추가되지 않았다면)
      if (!document.querySelector('link[href="https://player.vimeo.com"]')) {
        const preconnectLink = document.createElement('link');
        preconnectLink.rel = 'preconnect';
        preconnectLink.href = 'https://player.vimeo.com';
        preconnectLink.crossOrigin = 'anonymous';
        document.head.appendChild(preconnectLink);
      }

      // VideoSection iframe preload (낮은 우선순위로 백그라운드 로드)
      const videoSectionUrl = isMobile ? videoSectionMobileConfig.url : videoSectionDesktopConfig.url;
      if (!document.querySelector(`link[href="${videoSectionUrl}"]`)) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'prefetch'; // prefetch로 변경하여 낮은 우선순위로 로드
        preloadLink.as = 'document';
        preloadLink.href = videoSectionUrl;
        document.head.appendChild(preloadLink);
      }
    };

    // 3초 후에 VideoSection 비디오 preload 시작 (Hero 비디오 로딩 후)
    const preloadTimer = setTimeout(addVideoSectionPreload, 3000);

    return () => clearTimeout(preloadTimer);
  }, [isMobile, videoSectionDesktopConfig.url, videoSectionMobileConfig.url]);

  // 텍스트 스크롤 로직 - KB사이트처럼 깊이 기반 전환
  useEffect(() => {
    if (!isActive) return;

    // 모바일에서는 스크롤 깊이를 줄여서 빠른 전환 (Android 환경 최적화)
    const textScrollDepth = isMobile ? 500 : 1200; // 모바일: 500px (충분한 텍스트 전환 시간), 데스크톱: 1200px (더 빠른 전환)
    const totalScrollHeight = textScrollDepth * totalTexts; // 전체 스크롤 높이

    // 클로저 내부에서 사용할 로컬 변수들
    let scrollY = virtualScrollY;
    let localCurrentTextIndex = currentTextIndex;
    let localIsTransitioning = isTransitioning;

    // 이벤트를 통과시킬지 확인하는 함수
    const shouldPassThrough = (target: HTMLElement): boolean => {
      // z-index가 50 이상인 요소들 (헤더, 플로팅 버튼, 모달 등)은 모두 통과
      let element: HTMLElement | null = target;
      while (element && element !== document.body) {
        const zIndex = window.getComputedStyle(element).zIndex;
        if (zIndex !== 'auto' && parseInt(zIndex) >= 50) {
          return true; // 높은 z-index를 가진 요소는 통과
        }

        // 또한 특정 클래스를 가진 요소들도 통과
        if (
          element.closest('header') ||
          element.closest('[class*="header"]') ||
          element.closest('[class*="Header"]') ||
          element.closest('[class*="floating"]') ||
          element.closest('[class*="Float"]') ||
          element.closest('[class*="modal"]') ||
          element.closest('[class*="Modal"]') ||
          element.closest('[class*="dropdown"]') ||
          element.closest('[class*="Dropdown"]') ||
          element.closest('[class*="menu"]') ||
          element.closest('[class*="Menu"]') ||
          element.closest('[class*="nav"]') ||
          element.closest('[class*="Nav"]')
        ) {
          return true;
        }
        element = element.parentElement as HTMLElement;
      }
      return false;
    };

    const handleWheel = (e: WheelEvent) => {
      // HeroSection이 활성화되어 있고, 실제로 스크롤 영역 내에 있을 때만 preventDefault
      if (!isActive) return;

      // 히어로 섹션이 완료되었으면 모든 이벤트 통과
      if (isCompleted) return;

      // 텍스트 선택 중인지 확인
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        return; // 텍스트 선택 중에는 스크롤 처리하지 않음
      }

      // 터치 대상이 헤더나 플로팅 버튼이 아닌 경우에만 처리
      const target = e.target as HTMLElement;
      if (shouldPassThrough(target)) {
        return; // 헤더나 플로팅 버튼, 메뉴는 통과
      }

      const deltaY = e.deltaY;

      // 마지막 텍스트에 도달했고 아래로 스크롤 시 이벤트 통과 (영역 간 스크롤 허용)
      // 모바일에서는 더 넉넉한 임계값 적용 (0.1 → 0.3)
      const scrollEndThreshold = isMobile ? 0.3 : 0.1;
      if (
        localCurrentTextIndex === totalTexts - 1 &&
        scrollY >= totalScrollHeight - textScrollDepth * scrollEndThreshold &&
        deltaY > 0
      ) {
        // 이벤트를 통과시켜 페이지 스크롤이 일어나도록 함
        if (onTextComplete && !localIsTransitioning) {
          localIsTransitioning = true;
          setIsTransitioning(true);
          setIsCompleted(true); // 히어로 섹션 완료 표시
          // setTimeout 제거하여 즉시 전환 - 스크롤 걸림 현상 방지
          onTextComplete();
        }
        return; // preventDefault 하지 않고 리턴
      }

      // 첫 번째 텍스트에서 위로 스크롤 시 이벤트 통과
      // 모바일에서는 더 넉넉한 임계값 적용
      const scrollStartThreshold = isMobile ? textScrollDepth * 0.2 : 0;
      if (localCurrentTextIndex === 0 && scrollY <= scrollStartThreshold && deltaY < 0) {
        return; // preventDefault 하지 않고 리턴
      }

      e.preventDefault();
      e.stopPropagation(); // 이벤트 버블링 방지

      // 스크롤 이벤트 처리
      const scrollSpeed = isMobile ? 4.5 : 1.0; // 모바일: 4.5 (Android 최적화), 데스크톱: 1.0 (더 느리게)
      scrollY += deltaY * scrollSpeed;

      // 스크롤 범위 제한
      scrollY = Math.max(0, Math.min(scrollY, totalScrollHeight));
      setVirtualScrollY(scrollY);

      // 스크롤 위치에 따른 텍스트 인덱스 계산
      const newIndex = Math.floor(scrollY / textScrollDepth);
      const clampedIndex = Math.max(0, Math.min(newIndex, totalTexts - 1));

      // 텍스트 인덱스 업데이트
      if (localCurrentTextIndex !== clampedIndex) {
        localCurrentTextIndex = clampedIndex;
        setCurrentTextIndex(clampedIndex);
      }
    };

    // 터치 이벤트 처리 - 스크롤 위치 기반
    let touchStartY = 0;
    let touchStartScrollY = 0;
    let isTouching = false;

    const handleTouchStart = (e: TouchEvent) => {
      // 히어로 섹션이 완료되었으면 모든 이벤트 통과
      if (isCompleted) return;

      // 터치 대상이 헤더나 플로팅 버튼이면 통과
      const target = e.target as HTMLElement;
      if (shouldPassThrough(target)) {
        return;
      }

      touchStartY = e.touches[0].clientY;
      touchStartScrollY = scrollY;
      isTouching = true;

      // 모바일에서 스크롤 방지
      e.preventDefault();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching) return;

      // 히어로 섹션이 완료되었으면 모든 이벤트 통과
      if (isCompleted) {
        isTouching = false;
        return;
      }

      // 터치 대상이 헤더나 플로팅 버튼이면 통과
      const target = e.target as HTMLElement;
      if (shouldPassThrough(target)) {
        isTouching = false;
        return;
      }

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;

      // 마지막 텍스트에 도달했고 아래로 스크롤 시 이벤트 통과 (영역 간 스크롤 허용)
      // 모바일에서는 더 넉넉한 임계값 적용 (0.1 → 0.3)
      const scrollEndThreshold = isMobile ? 0.3 : 0.1;
      if (
        localCurrentTextIndex === totalTexts - 1 &&
        scrollY >= totalScrollHeight - textScrollDepth * scrollEndThreshold &&
        deltaY > 0
      ) {
        // 이벤트를 통과시켜 페이지 스크롤이 일어나도록 함
        if (onTextComplete && !localIsTransitioning) {
          localIsTransitioning = true;
          setIsTransitioning(true);
          setIsCompleted(true); // 히어로 섹션 완료 표시
          // setTimeout 제거하여 즉시 전환 - 스크롤 걸림 현상 방지
          onTextComplete();
        }
        isTouching = false;
        return; // preventDefault 하지 않고 리턴
      }

      // 첫 번째 텍스트에서 위로 스크롤 시 이벤트 통과
      // 모바일에서는 더 넉넉한 임계값 적용
      const scrollStartThreshold = isMobile ? textScrollDepth * 0.2 : 0;
      if (localCurrentTextIndex === 0 && scrollY <= scrollStartThreshold && deltaY < 0) {
        isTouching = false;
        return; // preventDefault 하지 않고 리턴
      }

      e.preventDefault(); // 기본 스크롤 동작 방지

      // 모바일에서 드래그처럼 즉각적인 반응 (Android 환경 최적화)
      // 모바일은 감도를 적절히 조절하여 자연스러운 텍스트 전환
      const sensitivity = isMobile ? 4.0 : 3.0; // 모바일 감도 조정 (10.0 → 4.0, 스크롤 속도 감소)
      const newScrollY = touchStartScrollY + deltaY * sensitivity;

      // 스크롤 범위 제한
      scrollY = Math.max(0, Math.min(newScrollY, totalScrollHeight));
      setVirtualScrollY(scrollY);

      // 스크롤 위치에 따른 텍스트 인덱스 계산
      const newIndex = Math.floor(scrollY / textScrollDepth);
      const clampedIndex = Math.max(0, Math.min(newIndex, totalTexts - 1));

      // 텍스트 인덱스 업데이트
      if (localCurrentTextIndex !== clampedIndex) {
        localCurrentTextIndex = clampedIndex;
        setCurrentTextIndex(clampedIndex);
      }
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    window.addEventListener('wheel', handleWheel, {
      passive: false,
      capture: false, // capture를 false로 변경하여 버블링 단계에서 처리
    });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: false });
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isActive, onTextComplete, totalTexts, isMobile, isCompleted]); // 안정적인 의존성만 유지

  // isActive가 true로 다시 돌아올 때 상태 초기화 (딜레이 추가)
  useEffect(() => {
    if (isActive && isCompleted) {
      // 300ms 딜레이 후 초기화 (fade out 애니메이션과 동기화)
      const timer = setTimeout(() => {
        setIsCompleted(false);
        setIsTransitioning(false);
        setVirtualScrollY(0);
        setCurrentTextIndex(0);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isActive, isCompleted]);

  // initialTextIndex가 변경되면 currentTextIndex 업데이트
  useEffect(() => {
    setCurrentTextIndex(initialTextIndex);
  }, [initialTextIndex]);

  // 텍스트 인덱스 상태 관리

  // 가상 스크롤 진행률 계산 (텍스트 페이드용)
  // 모바일과 데스크톱에서 각각 다른 textScrollDepth 사용
  const textScrollDepth = isMobile ? 500 : 1000;
  const scrollProgress = (virtualScrollY / (textScrollDepth * totalTexts)) * 100;

  return (
    <>
      {/* 가상 스크롤 높이를 위한 더미 엘리먼트 (스크롤바 표시용) */}
      {isActive && (
        <div
          style={{
            height: `${totalTexts * 100}vh`,
            position: 'absolute',
            width: '1px',
            pointerEvents: 'none',
            opacity: 0,
          }}
          suppressHydrationWarning
        />
      )}

      <section className={styles.heroContainer} suppressHydrationWarning>
        <div className={styles.backgroundVideo}>
          <iframe
            title="vimeo-player"
            src={isMobile ? mobileVideoConfig.url : desktopVideoConfig.url}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 'max(177.77vh, 100vw)', // 16:9 비율 유지하며 화면 꽉 채우기
              height: 'max(56.25vw, 100vh)', // 16:9 비율 유지하며 화면 꽉 채우기
              transform: 'translate(-50%, -50%)',
              border: 'none',
              pointerEvents: 'none', // iframe이 스크롤 이벤트를 차단하지 않도록
            }}
            loading="eager"
            suppressHydrationWarning
          />
        </div>
        {/* 콘텐츠 */}
        <div
          className={styles.contentWrapper}
          style={{
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
          }}
        >
          <TextContentRenderer
            currentTextIndex={currentTextIndex}
            scrollProgress={scrollProgress / 100}
            isMobile={isMobile}
          />
        </div>
      </section>
    </>
  );
}
