"use client";

import React, { useState, useEffect, useRef } from "react";

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

  // 초기 설정 - 강제로 Hero 섹션으로 스크롤
  useEffect(() => {
    if (containerRef.current && heroRef.current) {
      // 스크롤을 맨 위로 강제 이동
      containerRef.current.scrollTop = 0;

      // 추가로 Hero 섹션으로 scrollIntoView (즉시)
      heroRef.current.scrollIntoView({ behavior: "instant" });
    }
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

    return () => {
      observer.disconnect();
    };
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

  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={heroRef} className={styles.heroSection}>
        <HeroSection
          onTextComplete={handleHeroComplete}
          isActive={currentSection === 0}
          initialTextIndex={0}
        />
      </div>

      <div ref={videoRef} className={styles.videoSection}>
        {currentSection >= 1 && (
          <VideoSection
            showVideoSection={true}
            onVideoEnd={handleVideoEnd}
            onVideoReady={() => {}}
          />
        )}
      </div>

      <div ref={contentRef} className={styles.contentSection}>
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
