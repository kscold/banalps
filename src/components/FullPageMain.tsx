"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";

const FullPageMain = () => {
  const [currentSection, setCurrentSection] = useState<0 | 1 | 2>(0); // 0: hero, 1: video, 2: content
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoMinTimeElapsed, setVideoMinTimeElapsed] = useState(false);
  const [hasSeenHero, setHasSeenHero] = useState(false); // Hero를 한번 봤는지 추적
  const containerRef = useRef<HTMLDivElement>(null);

  // 초기 스크롤 위치를 0으로 설정
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 섹션별 스크롤바 제어
  useEffect(() => {
    if (currentSection === 0) {
      document.body.classList.add("show-scrollbar");
    } else {
      document.body.classList.remove("show-scrollbar");
    }

    return () => {
      document.body.classList.remove("show-scrollbar");
    };
  }, [currentSection]);

  // 섹션별 body overflow 제어
  useEffect(() => {
    if (currentSection === 1) {
      // 비디오 섹션에서는 스크롤 잠금
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else if (currentSection === 2) {
      // 콘텐츠 섹션에서는 스크롤 허용
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, 0);
    } else {
      // Hero 섹션
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [currentSection]);

  // Hero에서 비디오로 전환 핸들러
  const handleHeroComplete = () => {
    if (isTransitioning) return;
    console.log("[FullPageMain] Hero 완료 - 비디오로 전환");
    
    setIsTransitioning(true);
    setHasSeenHero(true); // Hero를 봤다고 표시
    setCurrentSection(1);
    setHeroTextIndex(4); // 마지막 텍스트 인덱스로 설정
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // 비디오에서 콘텐츠로 전환 핸들러
  const handleVideoComplete = () => {
    if (isTransitioning) return;
    console.log("[FullPageMain] 비디오 종료 - 콘텐츠로 전환");
    
    setIsTransitioning(true);
    window.scrollTo(0, 0);
    setCurrentSection(2);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // 비디오 종료 핸들러
  const handleVideoEnd = () => {
    console.log("[FullPageMain] 비디오 종료");
    handleVideoComplete();
  };

  // 비디오 준비 핸들러
  const handleVideoReady = () => {
    console.log("[FullPageMain] 비디오 준비 완료");
  };

  // 비디오 섹션 활성화 시 타이머 시작
  useEffect(() => {
    if (currentSection === 1) {
      setVideoMinTimeElapsed(false);
      
      const timer = setTimeout(() => {
        setVideoMinTimeElapsed(true);
      }, 2000); // 최소 2초

      return () => clearTimeout(timer);
    } else {
      setVideoMinTimeElapsed(false);
    }
  }, [currentSection]);

  // 섹션 간 전환 처리
  useEffect(() => {
    const handleSectionScroll = (e: WheelEvent) => {
      console.log(
        `[FullPageMain/스크롤] currentSection: ${currentSection}, deltaY: ${e.deltaY}, isTransitioning: ${isTransitioning}`
      );

      if (isTransitioning) return;

      // 콘텐츠 섹션에서 위로 스크롤 시 비디오로 돌아가기
      if (currentSection === 2) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // 블루섹션 최상단 근처(50px 이내)에서만 위로 스크롤 시 비디오로 전환
        if (e.deltaY < 0 && scrollTop < 50) {
          e.preventDefault();
          e.stopPropagation();
          
          console.log("[FullPageMain] 콘텐츠 → 비디오 섹션 전환 (hasSeenHero:", hasSeenHero, ")");
          
          setIsTransitioning(true);
          window.scrollTo(0, 0);
          
          // 항상 비디오 섹션으로만 전환
          setCurrentSection(1);
          setVideoMinTimeElapsed(false); // 비디오 타이머 리셋
          
          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
        return;
      }

      // 비디오 섹션에서 스크롤 처리
      if (currentSection === 1) {
        e.preventDefault();
        e.stopPropagation();

        const scrollThreshold = Math.abs(e.deltaY) > 30;
        if (!scrollThreshold) return;

        // 최소 시간이 지나지 않았으면 아래로 스크롤 무시
        if (!videoMinTimeElapsed && e.deltaY > 0) {
          console.log("[FullPageMain] 비디오 최소 시간 미경과");
          return;
        }

        if (e.deltaY > 0 && videoMinTimeElapsed) {
          // 아래로 스크롤 - 콘텐츠로
          handleVideoComplete();
        } else if (e.deltaY < 0) {
          // 위로 스크롤 - Hero로
          setIsTransitioning(true);
          setCurrentSection(0);
          setHeroTextIndex(4);
          
          console.log("[FullPageMain] 비디오 → Hero");
          
          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
      }

      // 히어로 섹션에서 스크롤 처리
      if (currentSection === 0) {
        // HeroSection의 내부 스크롤 로직이 작동하도록 함
        return;
      }
    };

    window.addEventListener("wheel", handleSectionScroll, {
      passive: false,
      capture: true,
    });

    return () => {
      window.removeEventListener("wheel", handleSectionScroll, {
        capture: true,
      });
    };
  }, [currentSection, videoMinTimeElapsed, isTransitioning, hasSeenHero]);

  // Framer Motion transition
  const pageTransition = {
    type: "tween" as const,
    ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
    duration: 0.8
  };

  return (
    <div ref={containerRef} className="relative">
      {/* 고정 레이어 - 히어로와 비디오 */}
      <div
        className="fixed top-0 left-0 w-full h-screen"
        style={{
          zIndex: currentSection === 2 ? 1 : 10,
          pointerEvents: currentSection === 2 ? "none" : "auto"
        }}
      >
        <AnimatePresence mode="wait">
          {/* 히어로 섹션 */}
          {currentSection === 0 && (
            <motion.div
              key="hero"
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={pageTransition}
              style={{
                zIndex: 3,
                transformOrigin: "center center",
              }}
            >
              <HeroSection
                onTextComplete={handleHeroComplete}
                isActive={true}
                initialTextIndex={heroTextIndex}
              />
            </motion.div>
          )}

          {/* 비디오 섹션 */}
          {currentSection === 1 && (
            <motion.div
              key="video"
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={pageTransition}
              style={{
                zIndex: 5,
                transformOrigin: "center center",
              }}
            >
              <VideoSection
                showVideoSection={true}
                onVideoEnd={handleVideoEnd}
                onVideoReady={handleVideoReady}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 콘텐츠 섹션 */}
      <AnimatePresence>
        {currentSection === 2 && (
          <motion.div
            key="content"
            className="relative"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={pageTransition}
            style={{
              position: "relative",
              zIndex: 10,
              backgroundColor: "white",
              minHeight: "100vh",
              paddingTop: 0,
              marginTop: 0,
              top: 0,
            }}
          >
            <BlueSection isActive={true} />
            <WhiteSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FullPageMain;