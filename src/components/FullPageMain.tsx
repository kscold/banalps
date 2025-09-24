"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";

const FullPageMain = () => {
  const [currentSection, setCurrentSection] = useState(0); // 0: hero, 1: video, 2: content
  const [heroActive, setHeroActive] = useState(true);
  const [videoActive, setVideoActive] = useState(false);
  const [contentActive, setContentActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  // 초기 스크롤 위치를 0으로 설정
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hero에서 비디오로 전환 핸들러
  const handleHeroComplete = () => {
    console.log("[FullPageMain] Hero 완료 - 비디오로 전환");
    setHeroActive(false);
    setVideoActive(true);
    setCurrentSection(1);

    // 스크롤 위치는 그대로 유지 (비디오가 현재 위치에서 표시)
    console.log("[FullPageMain] 비디오 섹션 활성화됨");
  };

  // 비디오에서 콘텐츠로 전환 핸들러
  const handleVideoComplete = () => {
    console.log("[FullPageMain] 비디오 종료 - 콘텐츠로 전환");
    setVideoActive(false);
    setContentActive(true);
    setCurrentSection(2);

    // 블루섹션이 정확히 화면 상단에서 시작되도록 스크롤
    // 전체 스크롤 높이의 40% 지점으로 이동 (블루섹션 시작점)
    const totalScrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = totalScrollHeight * 0.4;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  // 비디오 섹션 최소 시간 설정
  const [videoMinTimeElapsed, setVideoMinTimeElapsed] = useState(false);

  // 비디오 섹션 활성화 시 타이머 시작
  useEffect(() => {
    if (currentSection === 1) {
      const timer = setTimeout(() => {
        setVideoMinTimeElapsed(true);
      }, 3000); // 최소 3초 동안 비디오 섹션 유지

      return () => clearTimeout(timer);
    } else {
      setVideoMinTimeElapsed(false);
    }
  }, [currentSection]);

  // 섹션 간 전환 처리
  useEffect(() => {
    let isTransitioning = false;

    const handleSectionScroll = (e: WheelEvent) => {
      if (isTransitioning) return;

      // 콘텐츠 섹션에서는 자유 스크롤
      if (currentSection === 2) {
        return;
      }

      // 비디오 섹션에서 스크롤 처리
      if (currentSection === 1) {
        e.preventDefault();

        // 최소 시간이 지나지 않았으면 스크롤 무시
        if (!videoMinTimeElapsed && e.deltaY > 0) {
          console.log("[FullPageMain] 비디오 최소 시간 미경과");
          return;
        }

        isTransitioning = true;

        if (e.deltaY > 0 && videoMinTimeElapsed) {
          // 아래로 스크롤 - 콘텐츠로
          handleVideoComplete();
        } else if (e.deltaY < 0) {
          // 위로 스크롤 - Hero로
          setVideoActive(false);
          setHeroActive(true);
          setCurrentSection(0);
          console.log("[FullPageMain] 비디오 → Hero");
        }

        setTimeout(() => {
          isTransitioning = false;
        }, 800);
      }
    };

    window.addEventListener("wheel", handleSectionScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleSectionScroll);
    };
  }, [currentSection, videoMinTimeElapsed]);

  // 섹션 별 opacity 처리
  const heroOpacity = heroActive ? 1 : 0;
  const videoOpacity = videoActive ? 1 : 0;

  // 비디오 종료 핸들러
  const handleVideoEnd = () => {
    console.log("[FullPageMain] 비디오 종료");
    handleVideoComplete();
  };

  // 비디오 준비 핸들러
  const handleVideoReady = () => {
    console.log("[FullPageMain] 비디오 준비 완료");
  };

  return (
    <div ref={containerRef} className="relative">
      {/* 고정 레이어 - 히어로와 비디오 */}
      <div className="fixed top-0 left-0 w-full h-screen" style={{ zIndex: 1 }}>
        {/* 백그라운드 레이어 제거 - 배경 이미지가 보이도록 */}

        {/* 히어로 섹션 */}
        <motion.div
          ref={heroRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            opacity: heroOpacity,
            zIndex: 2,
            willChange: "opacity",
          }}
        >
          <HeroSection
            onTextComplete={handleHeroComplete}
            isActive={heroActive}
          />
        </motion.div>

        {/* 비디오 섹션 */}
        <motion.div
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            opacity: videoOpacity,
            zIndex: 3,
            willChange: "opacity",
            backgroundColor: "#000", // 비디오 배경색 추가
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {videoActive && (
            <VideoSection
              showVideoSection={true}
              onVideoEnd={handleVideoEnd}
              onVideoReady={handleVideoReady}
            />
          )}
        </motion.div>
      </div>

      {/* 콘텐츠 섹션 - 비디오 완료 후에만 렌더링 */}
      {contentActive && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            zIndex: 10,
            backgroundColor: "white",
            // minHeight: "100vh",
            paddingTop: 0, // 상단 여백 제거
          }}
        >
          <BlueSection isActive={true} />
          <WhiteSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default FullPageMain;
