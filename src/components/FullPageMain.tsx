'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

import HeroSection from '../widgets/Hero/HeroSection';
import { VideoSection } from '../widgets/Hero/VideoSection';
import BlueSection from '../widgets/BlueSection';
import WhiteSection from '../widgets/WhiteSection/WhiteSection';
import Footer from '../shared/ui/Footer/Footer';
import * as styles from './FullPageMain.css';

const FullPageMain = () => {
  const [currentSection, setCurrentSection] = useState<0 | 1 | 2>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // 초기 설정 - Hero 섹션으로 스크롤
  useEffect(() => {
    if (containerRef.current && heroRef.current) {
      containerRef.current.scrollTop = 0;
      heroRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, []);

  // IntersectionObserver 옵션 - useMemo로 메모이제이션
  const observerOptions = useMemo(
    () => ({
      root: containerRef.current,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0,
    }),
    [],
  );

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
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // 비디오 종료 핸들러 - 자동 스크롤 비활성화 (사용자가 수동으로 스크롤하도록)
  const handleVideoEnd = useCallback(() => {
    // 비디오가 끝나도 자동으로 스크롤하지 않음
    // 사용자가 원할 때 수동으로 스크롤하도록 함
  }, []);

  return (
    <div ref={containerRef} className={styles.container} suppressHydrationWarning>
      <div ref={heroRef} className={styles.heroSection} suppressHydrationWarning>
        <HeroSection onTextComplete={handleHeroComplete} isActive={currentSection === 0} initialTextIndex={0} />
      </div>

      <div ref={videoRef} className={styles.videoSection} suppressHydrationWarning>
        <VideoSection showVideoSection={true} onVideoEnd={handleVideoEnd} onVideoReady={() => {}} />
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
