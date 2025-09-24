"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";

const FullPageMain = () => {
  const [heroCompleted, setHeroCompleted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const totalTexts = 6; // 텍스트 총 개수

  // 초기 스크롤 위치를 0으로 설정
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring으로 부드러운 스크롤 효과
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 텍스트 인덱스 계산 - 스크롤 위치에 따라 텍스트 변경 (정확한 매칭)
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const unsubscribe = smoothProgress.on("change", (value) => {
      // 텍스트 인덱스 결정 - 정확한 경계선 기준
      let targetIndex = 0;

      // 스크롤 위치와 텍스트 인덱스 정확한 매핑
      // 각 텍스트가 차지하는 정확한 구간:
      // 텍스트 0: 0.00 ~ 0.05 (5%)
      // 텍스트 1: 0.05 ~ 0.10 (5%)
      // 텍스트 2: 0.10 ~ 0.15 (5%)
      // 텍스트 3: 0.15 ~ 0.20 (5%)
      // 텍스트 4: 0.20 ~ 0.25 (5%)
      // 텍스트 5: 0.25 ~ 0.30 (5%)
      // 비디오: 0.30 ~ 0.40 (10%)
      // 콘텐츠: 0.40 ~ 1.00 (60%)

      if (value >= 0 && value < 0.05) {
        targetIndex = 0;
      } else if (value >= 0.05 && value < 0.1) {
        targetIndex = 1;
      } else if (value >= 0.1 && value < 0.15) {
        targetIndex = 2;
      } else if (value >= 0.15 && value < 0.2) {
        targetIndex = 3;
      } else if (value >= 0.2 && value < 0.25) {
        targetIndex = 4;
      } else if (value >= 0.25 && value < 0.3) {
        targetIndex = 5;
      } else {
        targetIndex = -1; // 비디오 및 콘텐츠 섹션에서는 텍스트 없음
      }

      setCurrentTextIndex(targetIndex);

      // heroCompleted 상태 관리
      if (value >= 0.3 && !heroCompleted) {
        setHeroCompleted(true);
      } else if (value < 0.3 && heroCompleted) {
        setHeroCompleted(false);
      }

      // 스크롤 정지 감지 및 정확한 위치로 스냅
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        // 각 텍스트의 시작 위치로 스냅
        const textStartPositions = [
          0, // 텍스트 0 시작
          0.05, // 텍스트 1 시작
          0.1, // 텍스트 2 시작
          0.15, // 텍스트 3 시작
          0.2, // 텍스트 4 시작
          0.25, // 텍스트 5 시작
        ];

        // 현재 텍스트 인덱스에 해당하는 정확한 위치 찾기
        let targetPosition =
          targetIndex >= 0 ? textStartPositions[targetIndex] : null;

        // 비디오 섹션인 경우 (30-40%)
        if (value >= 0.3 && value < 0.4) {
          // 비디오 섹션 내에서 더 세밀한 스냅 포인트
          if (value < 0.33) {
            targetPosition = 0.3; // 비디오 시작
          } else if (value < 0.37) {
            targetPosition = 0.35; // 비디오 중간
          } else {
            targetPosition = 0.4; // 비디오 끝 / 블루섹션 시작 준비 (수정됨: 0.1 -> 0.4)
          }
        }
        // 콘텐츠 섹션 시작 (40%) - 블루섹션으로 정확히 이동
        else if (value >= 0.4 && value < 0.42) {
          targetPosition = 0.4; // 블루섹션 시작 위치로 강제 스냅
        } else if (value >= 0.42) {
          // 나머지 콘텐츠는 스냅하지 않음
          return;
        }

        if (targetPosition === null) return;

        // 현재 위치와 목표 위치의 차이가 작은 경우만 스냅
        const distance = Math.abs(value - targetPosition);

        // 블루섹션으로 전환할 때는 더 엄격한 조건 적용
        const isBlueSectionTransition = targetPosition === 0.4;
        const isVideoSection = value >= 0.3 && value < 0.4;
        const minDistance = isBlueSectionTransition
          ? 0.001
          : isVideoSection
          ? 0.002
          : 0.003;
        const maxDistance = isBlueSectionTransition
          ? 0.01
          : isVideoSection
          ? 0.015
          : 0.02;

        if (distance > minDistance && distance < maxDistance) {
          const targetScroll =
            targetPosition * (containerRef.current?.scrollHeight || 0);
          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });
        }
      }, 150); // 비디오 섹션을 위한 더 긴 대기 시간
    });

    return () => {
      unsubscribe();
      clearTimeout(scrollTimeout);
    };
  }, [smoothProgress, heroCompleted]);

  // 히어로 섹션 - 텍스트 애니메이션 구간 (0~30% 텍스트)
  const heroOpacity = useTransform(smoothProgress, [0, 0.28, 0.3], [1, 1, 0]);

  // 비디오 섹션 - 히어로 텍스트 완료 후 시작 (30~40%)
  const videoOpacity = useTransform(
    smoothProgress,
    [0.28, 0.3, 0.38, 0.4],
    [0, 1, 1, 0]
  );

  // 콘텐츠 섹션 - 비디오 후 시작 (40~100%)
  // 블루섹션이 맨 위부터 시작되도록 타이밍 조정
  const contentOpacity = useTransform(
    smoothProgress,
    [0.38, 0.4, 0.41],
    [0, 1, 1]
  );

  // 텍스트 애니메이션 완료 핸들러
  const handleTextComplete = () => {
    console.log("[FullPageMain] 텍스트 애니메이션 완료");
    setHeroCompleted(true);
  };

  // 비디오 종료 핸들러
  const handleVideoEnd = () => {
    console.log("[FullPageMain] 비디오 종료");
  };

  // 비디오 준비 핸들러
  const handleVideoReady = () => {
    console.log("[FullPageMain] 비디오 준비 완료");
  };

  // 비디오 로딩 상태 체크
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (value) => {
      if (value > 0.3 && !showVideo) {
        setShowVideo(true);
      } else if (value <= 0.3 && showVideo) {
        setShowVideo(false);
      }
    });
    return () => unsubscribe();
  }, [smoothProgress, showVideo]);

  // 스크롤 방지/허용 제어 - 제거 (자유 스크롤 허용)
  useEffect(() => {
    // 항상 스크롤 허용
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 블루섹션으로 전환 시 정확한 스크롤 위치 보장
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      // 블루섹션 시작 지점(40%) 근처에서 정확한 위치로 스냅
      if (scrollProgress >= 0.38 && scrollProgress <= 0.42) {
        const targetScroll =
          0.4 * (document.documentElement.scrollHeight - window.innerHeight);
        const currentScroll = window.scrollY;
        const distance = Math.abs(currentScroll - targetScroll);

        // 더 엄격한 조건으로 정확한 위치로 스냅
        if (distance > 10 && distance < 100) {
          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });
        }
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
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
            onTextComplete={handleTextComplete}
            initialTextIndex={currentTextIndex}
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
          }}
        >
          {showVideo && (
            <VideoSection
              showVideoSection={true}
              onVideoEnd={handleVideoEnd}
              onVideoReady={handleVideoReady}
            />
          )}
        </motion.div>
      </div>

      {/* 스페이서 - 텍스트(30%) + 비디오(10%) = 40% = 120vh */}
      {/* 콘텐츠 섹션은 스크롤 40% 지점에서 시작 */}
      <div style={{ height: "120vh" }}>
        {/* 정확한 텍스트 위치별 스냅 포인트 */}
        {/* 텍스트 0-5: 각 5% (0-30%) = 90vh */}
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-text="0"
        />
        <div style={{ height: "15vh" }} />
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-text="1"
        />
        <div style={{ height: "15vh" }} />
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-text="2"
        />
        <div style={{ height: "15vh" }} />
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-text="3"
        />
        <div style={{ height: "15vh" }} />
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-text="4"
        />
        <div style={{ height: "15vh" }} />
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-text="5"
        />
        <div style={{ height: "15vh" }} />
        {/* 비디오: 10% (30-40%) = 30vh */}
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-video="start"
        />
        <div style={{ height: "10vh" }} />
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-video="middle1"
        />
        <div style={{ height: "10vh" }} />
        <div
          style={{ height: "0vh", scrollSnapAlign: "start" }}
          data-video="middle2"
        />
        <div style={{ height: "10vh" }} />
      </div>

      {/* 콘텐츠 섹션 - 스크롤 40%에서 시작 */}
      <div
        style={{ height: "300vh", scrollSnapAlign: "start" }}
        data-content="start"
      />
      <motion.div
        className="relative"
        style={{
          opacity: contentOpacity,
          zIndex: 10,
          backgroundColor: "white",
          willChange: "opacity",
          pointerEvents: contentOpacity.get() > 0.3 ? "auto" : "none",
          marginTop: 0, // 블루섹션이 처음부터 시작
        }}
      >
        <BlueSection isActive={true} />
        <WhiteSection />
        <Footer />
      </motion.div>
    </div>
  );
};

export default FullPageMain;
