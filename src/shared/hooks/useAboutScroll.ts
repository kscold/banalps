import { useState, useEffect } from "react";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export interface UseAboutScrollReturn {
  showMainContent: boolean;
  videoActive: boolean;
  contentActive: boolean;
  currentSection: number;
}

export function useAboutScroll(): UseAboutScrollReturn {
  const [showMainContent, setShowMainContent] = useState(false);
  const [currentSection, setCurrentSection] = useState(0); // 0: video, 1: content
  const [videoActive, setVideoActive] = useState(true);
  const [contentActive, setContentActive] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    console.log("[useAboutScroll/초기화] About 스크롤 훅 초기화 완료");

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    let lastScrollTime = 0;
    const scrollDebounceTime = 500; // 스크롤 간격을 500ms로 설정

    const handleWheel = (e: WheelEvent) => {
      const deltaY = e.deltaY;

      // 메인 콘텐츠가 표시된 상태에서
      if (showMainContent) {
        // 위로 스크롤하고 페이지 최상단에 있으면 비디오로 복귀
        if (deltaY < 0 && window.scrollY <= 10) {
          e.preventDefault();
          console.log("[useAboutScroll/휠업] 메인 콘텐츠 → 비디오로 복귀");

          // 동일한 전환 모션 적용
          setCurrentSection(0); // 먼저 섹션 변경

          setTimeout(() => {
            setVideoActive(true);
          }, 100);

          setTimeout(() => {
            setContentActive(false);
            setShowMainContent(false);
          }, 400);

          // 스크롤 위치 초기화
          window.scrollTo(0, 0);
        }
        return;
      }

      e.preventDefault(); // 비디오 상태에서만 스크롤 방지

      // 스크롤 디바운싱 체크
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollDebounceTime) {
        console.log("[useAboutScroll/휠이벤트] 스크롤 디바운싱 - 무시");
        return;
      }

      console.log(
        `[useAboutScroll/휠이벤트] showMainContent: ${showMainContent}, isScrolling: ${isScrolling}, deltaY: ${e.deltaY}`
      );

      // 이미 스크롤 중이면 무시
      if (isScrolling) {
        console.log("[useAboutScroll/휠이벤트] 스크롤 중 - 무시");
        return;
      }

      // 최소 스크롤 임계값 설정 (너무 작은 움직임 무시)
      if (Math.abs(deltaY) < 30) {
        console.log("[useAboutScroll/휠이벤트] 임계값 미달 - 무시");
        return;
      }

      // 스크롤 잠금 및 시간 기록
      isScrolling = true;
      lastScrollTime = currentTime;

      // 아래로 스크롤할 때만 메인 콘텐츠 표시
      if (deltaY > 0) {
        console.log("[useAboutScroll/휠다운] 비디오 → 메인 콘텐츠 전환");

        // 먼저 섹션 변경 (scale 애니메이션 시작)
        setCurrentSection(1);

        // 메인 페이지와 동일한 부드러운 전환 효과
        setTimeout(() => {
          setVideoActive(false);
        }, 300);

        setTimeout(() => {
          setContentActive(true);
          setShowMainContent(true);
        }, 500);
      }

      // 이전 타이머가 있으면 취소
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // 스크롤 쿨다운
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        scrollTimeout = null;
      }, 300);
    };

    // 키보드 이벤트 처리
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      // 메인 콘텐츠 상태에서 위 화살표
      if (showMainContent && e.key === "ArrowUp" && window.scrollY <= 10) {
        e.preventDefault();
        isScrolling = true;

        console.log("[useAboutScroll/키보드업] 메인 콘텐츠 → 비디오로 복귀");

        // 동일한 전환 모션 적용
        setCurrentSection(0);

        setTimeout(() => {
          setVideoActive(true);
        }, 100);

        setTimeout(() => {
          setContentActive(false);
          setShowMainContent(false);
        }, 400);

        window.scrollTo(0, 0);

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          scrollTimeout = null;
        }, 300);
      }
      // 비디오 상태에서 아래 화살표
      else if (!showMainContent && e.key === "ArrowDown") {
        e.preventDefault();
        isScrolling = true;

        console.log("[useAboutScroll/키보드다운] 비디오 → 메인 콘텐츠 전환");

        // 먼저 섹션 변경
        setCurrentSection(1);

        setTimeout(() => {
          setVideoActive(false);
        }, 300);

        setTimeout(() => {
          setContentActive(true);
          setShowMainContent(true);
        }, 500);

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          scrollTimeout = null;
        }, 300);
      }
    };

    // 터치 이벤트 처리 - 모바일용
    let startY = 0;
    let startX = 0;
    let isTouchMoving = false;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      isTouchMoving = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startY || !startX) return;
      if (isScrolling) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const deltaY = startY - currentY;
      const deltaX = Math.abs(startX - currentX);

      // 수직 스와이프 감지 (수평 이동보다 수직 이동이 큰 경우)
      if (Math.abs(deltaY) > deltaX && Math.abs(deltaY) > 10) {
        isTouchMoving = true;

        // 비디오 섹션에서 아래로 스와이프(deltaY > 0)할 때만 처리
        if (!showMainContent && deltaY > 80 && !isScrolling) {
          e.preventDefault(); // 전환 시에만 preventDefault
          isScrolling = true;
          console.log("[useAboutScroll/터치무브] 비디오 → 메인 콘텐츠 전환");

          setCurrentSection(1);

          setTimeout(() => {
            setVideoActive(false);
          }, 300);

          setTimeout(() => {
            setContentActive(true);
            setShowMainContent(true);
          }, 500);

          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
            scrollTimeout = null;
          }, 500);
        }
        // 메인 콘텐츠에서 위로 스와이프(deltaY < 0)하고 스크롤 최상단일 때
        else if (
          showMainContent &&
          deltaY < -80 &&
          window.scrollY <= 10 &&
          !isScrolling
        ) {
          e.preventDefault(); // 전환 시에만 preventDefault
          isScrolling = true;
          console.log("[useAboutScroll/터치무브] 메인 콘텐츠 → 비디오로 복귀");

          setCurrentSection(0);

          setTimeout(() => {
            setVideoActive(true);
          }, 100);

          setTimeout(() => {
            setContentActive(false);
            setShowMainContent(false);
          }, 400);

          window.scrollTo(0, 0);

          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
            scrollTimeout = null;
          }, 500);
        }
      }
    };

    const handleTouchEnd = () => {
      startY = 0;
      startX = 0;
      isTouchMoving = false;
    };

    // 이벤트 리스너 등록
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // 모바일에서만 터치 이벤트 등록
    if (isMobile) {
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);

      if (isMobile) {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      }

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [showMainContent, isMobile]);

  return {
    showMainContent,
    videoActive,
    contentActive,
    currentSection,
  };
}
