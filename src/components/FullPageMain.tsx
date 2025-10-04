"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

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
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);
  const lastScrollTopRef = useRef(0); // 마지막 스크롤 위치
  const isProgrammaticScrollRef = useRef(false); // 프로그래밍 방식 스크롤 플래그

  // 초기 설정 - 강제로 Hero 섹션으로 스크롤
  useEffect(() => {
    if (containerRef.current && heroRef.current) {
      // 스크롤을 맨 위로 강제 이동
      containerRef.current.scrollTop = 0;
      lastScrollTopRef.current = 0;

      // 추가로 Hero 섹션으로 scrollIntoView (즉시)
      heroRef.current.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  // 스크롤 스냅 비활성화 - Video와 Content는 자연스럽게 연결

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

    return () => {
      observer.disconnect();
    };
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
        <VideoSection
          showVideoSection={true}
          onVideoEnd={handleVideoEnd}
          onVideoReady={() => {}}
        />
      </div>

      <div ref={contentRef} className={styles.contentSection} suppressHydrationWarning>
        <BlueSection isActive={true} />
        <WhiteSection />
        <Footer />
      </div>
    </div>
  );
};

export default FullPageMain;
