"use client";

<<<<<<< Updated upstream
import React, { useState, useEffect, useRef } from "react";
=======
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
>>>>>>> Stashed changes

import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";
import * as styles from "./FullPageMain.css";

const FullPageMain = () => {
  const [currentSection, setCurrentSection] = useState<0 | 1 | 2>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
<<<<<<< Updated upstream
=======
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);
  const lastScrollTopRef = useRef(0); // 마지막 스크롤 위치
  const isProgrammaticScrollRef = useRef(false); // 프로그래밍 방식 스크롤 플래그
>>>>>>> Stashed changes

  // 초기 설정 - 강제로 Hero 섹션으로 스크롤
  useEffect(() => {
    if (containerRef.current && heroRef.current) {
      // 스크롤을 맨 위로 강제 이동
      containerRef.current.scrollTop = 0;
<<<<<<< Updated upstream
=======
      lastScrollTopRef.current = 0;
>>>>>>> Stashed changes

      // 추가로 Hero 섹션으로 scrollIntoView (즉시)
      heroRef.current.scrollIntoView({ behavior: "instant" });
    }
  }, []);

<<<<<<< Updated upstream
  // 스크롤 스냅 기능
=======
  // 스크롤 스냅 함수 - useCallback으로 메모이제이션
  const snapToNearestSection = useCallback(() => {
    const container = containerRef.current;
    if (!container || !heroRef.current || !videoRef.current || !contentRef.current) return;

    const scrollTop = container.scrollTop;
    const heroTop = heroRef.current.offsetTop;
    const videoTop = videoRef.current.offsetTop;
    const contentTop = contentRef.current.offsetTop;

    // Content(블루섹션) 영역에 도달했으면 스냅 비활성화
    if (scrollTop >= contentTop) {
      return;
    }

    // 최소 이동 거리 (10px 이상 이동했을 때만 스냅)
    const scrollDiff = Math.abs(scrollTop - lastScrollTopRef.current);
    if (scrollDiff < 10) {
      return;
    }

    let targetSection: HTMLDivElement | null = null;

    // Hero와 Video 사이
    if (scrollTop < videoTop) {
      const midPoint = (heroTop + videoTop) / 2;
      targetSection = scrollTop < midPoint ? heroRef.current : videoRef.current;
    }
    // Video와 Content 사이
    else if (scrollTop >= videoTop && scrollTop < contentTop) {
      const midPoint = (videoTop + contentTop) / 2;
      targetSection = scrollTop < midPoint ? videoRef.current : contentRef.current;
    }

    if (targetSection) {
      isProgrammaticScrollRef.current = true; // 프로그래밍 방식 스크롤 시작
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        isProgrammaticScrollRef.current = false; // 1초 후 플래그 해제
      }, 1000);
    }
  }, []);

  // 스크롤 핸들러 - useCallback으로 메모이제이션
  const handleScroll = useCallback(() => {
    // 프로그래밍 방식 스크롤이면 무시
    if (isProgrammaticScrollRef.current) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // 현재 스크롤 위치 저장
    const currentScrollTop = container.scrollTop;
    lastScrollTopRef.current = currentScrollTop;

    isScrollingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      snapToNearestSection();
    }, 150); // 200ms -> 150ms로 더 빠른 반응
  }, [snapToNearestSection]);

  // 스크롤 이벤트 리스너 등록
>>>>>>> Stashed changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

<<<<<<< Updated upstream
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;

    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);

      // 스크롤이 멈춘 후 200ms 대기
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        snapToNearestSection();
      }, 200);
    };

    const snapToNearestSection = () => {
      if (!heroRef.current || !videoRef.current || !contentRef.current) return;

      const scrollTop = container.scrollTop;

      // 각 섹션의 위치 계산
      const heroTop = heroRef.current.offsetTop;
      const videoTop = videoRef.current.offsetTop;
      const contentTop = contentRef.current.offsetTop;

      // Content(블루섹션) 영역에 도달했으면 스냅 비활성화
      if (scrollTop >= contentTop) {
        return; // 블루섹션/화이트섹션에서는 자유 스크롤
      }

      // 현재 스크롤 위치 기준으로 가장 가까운 섹션 찾기
      let targetSection: HTMLDivElement | null = null;

      // Hero와 Video 사이
      if (scrollTop < videoTop) {
        const midPoint = (heroTop + videoTop) / 2;
        targetSection = scrollTop < midPoint ? heroRef.current : videoRef.current;
      }
      // Video와 Content 사이 (블루섹션 진입 전)
      else if (scrollTop >= videoTop && scrollTop < contentTop) {
        const midPoint = (videoTop + contentTop) / 2;
        targetSection = scrollTop < midPoint ? videoRef.current : contentRef.current;
      }

      // 가장 가까운 섹션으로 스크롤
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Intersection Observer로 현재 섹션 추적
  useEffect(() => {
    const options = {
      root: containerRef.current,
      rootMargin: "-45% 0px -45% 0px", // 화면 중앙 10% 영역에서만 감지
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("[IntersectionObserver] 섹션 변경:", entry.target);
          if (entry.target === heroRef.current) {
            console.log("[IntersectionObserver] Hero 섹션으로 이동");
            setCurrentSection(0);
          } else if (entry.target === videoRef.current) {
            console.log("[IntersectionObserver] Video 섹션으로 이동");
            setCurrentSection(1);
          } else if (entry.target === contentRef.current) {
            console.log("[IntersectionObserver] Content 섹션으로 이동");
            setCurrentSection(2);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (heroRef.current) observer.observe(heroRef.current);
    if (videoRef.current) observer.observe(videoRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
=======
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // IntersectionObserver 옵션 - useMemo로 메모이제이션
  const observerOptions = useMemo(() => ({
    root: containerRef.current,
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0,
  }), []);

  // IntersectionObserver 콜백 - useCallback으로 메모이제이션
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === heroRef.current) {
          setCurrentSection(0);
        } else if (entry.target === videoRef.current) {
          setCurrentSection(1);
        } else if (entry.target === contentRef.current) {
          setCurrentSection(2);
        }
      }
    });
  }, []);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const currentHeroRef = heroRef.current;
    const currentVideoRef = videoRef.current;
    const currentContentRef = contentRef.current;

    if (currentHeroRef) observer.observe(currentHeroRef);
    if (currentVideoRef) observer.observe(currentVideoRef);
    if (currentContentRef) observer.observe(currentContentRef);
>>>>>>> Stashed changes

    return () => {
      observer.disconnect();
    };
<<<<<<< Updated upstream
  }, []);

  // Hero 완료 핸들러
  const handleHeroComplete = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 비디오 종료 핸들러
  const handleVideoEnd = () => {
    console.log("[FullPageMain] 비디오 종료 - 블루섹션으로 이동");
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
=======
  }, [handleIntersection, observerOptions]);

  // Hero 완료 핸들러 - useCallback으로 메모이제이션
  const handleHeroComplete = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // 비디오 종료 핸들러 - useCallback으로 메모이제이션
  const handleVideoEnd = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
>>>>>>> Stashed changes

  return (
    <div ref={containerRef} className={styles.container} suppressHydrationWarning>
      <div ref={heroRef} className={styles.heroSection} suppressHydrationWarning>
        <HeroSection
          onTextComplete={handleHeroComplete}
          isActive={currentSection === 0}
          initialTextIndex={0}
        />
      </div>

      <div ref={videoRef} className={styles.videoSection} suppressHydrationWarning>
        {currentSection >= 1 && (
          <VideoSection
            showVideoSection={true}
            onVideoEnd={handleVideoEnd}
            onVideoReady={() => {}}
          />
        )}
      </div>

      <div ref={contentRef} className={styles.contentSection} suppressHydrationWarning>
        {currentSection >= 2 && (
          <>
            <BlueSection isActive={true} />
            <WhiteSection />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default FullPageMain;
