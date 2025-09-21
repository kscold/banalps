import { useState, useEffect, useCallback } from "react";

export type SectionType = "hero" | "video" | "blue" | "white";

export interface SectionState {
  currentSection: SectionType;
  isTransitioning: boolean;
  canScroll: boolean;
}

export interface UseSectionManagerReturn {
  sectionState: SectionState;
  goToSection: (section: SectionType) => void;
  goToNextSection: () => void;
  goToPreviousSection: () => void;
  enableScroll: () => void;
  disableScroll: () => void;
}

const SECTION_ORDER: SectionType[] = ["hero", "video", "blue", "white"];

export function useSectionManager(): UseSectionManagerReturn {
  const [currentSection, setCurrentSection] = useState<SectionType>("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [canScroll, setCanScroll] = useState(true);

  const goToSection = useCallback(
    (section: SectionType) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setCurrentSection(section);

      // 전환 애니메이션 시간 후 상태 리셋
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    },
    [isTransitioning]
  );

  const goToNextSection = useCallback(() => {
    const currentIndex = SECTION_ORDER.indexOf(currentSection);
    if (currentIndex < SECTION_ORDER.length - 1) {
      goToSection(SECTION_ORDER[currentIndex + 1]);
    }
  }, [currentSection, goToSection]);

  const goToPreviousSection = useCallback(() => {
    const currentIndex = SECTION_ORDER.indexOf(currentSection);
    if (currentIndex > 0) {
      goToSection(SECTION_ORDER[currentIndex - 1]);
    }
  }, [currentSection, goToSection]);

  const enableScroll = useCallback(() => {
    setCanScroll(true);
  }, []);

  const disableScroll = useCallback(() => {
    setCanScroll(false);
  }, []);

  // 스크롤 이벤트 처리
  useEffect(() => {
    if (!canScroll) return;

    let isScrolling = false;
    const scrollDebounceTime = 1000;

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning || isScrolling) return;

      e.preventDefault();
      isScrolling = true;

      if (e.deltaY > 0) {
        // 아래로 스크롤
        goToNextSection();
      } else if (e.deltaY < 0) {
        // 위로 스크롤
        goToPreviousSection();
      }

      // 스크롤 쿨다운
      setTimeout(() => {
        isScrolling = false;
      }, scrollDebounceTime);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        goToNextSection();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        goToPreviousSection();
      }
    };

    // 터치 이벤트 처리
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          goToNextSection();
        } else {
          goToPreviousSection();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [canScroll, isTransitioning, goToNextSection, goToPreviousSection]);

  return {
    sectionState: {
      currentSection,
      isTransitioning,
      canScroll,
    },
    goToSection,
    goToNextSection,
    goToPreviousSection,
    enableScroll,
    disableScroll,
  };
}
