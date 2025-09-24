"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";

const FullPageSlide = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0); // 0: hero, 1: video, 2: content
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastScrollTime = useRef(Date.now());
  const scrollThreshold = 500; // 최소 스크롤 간격 (ms)

  // Framer Motion 스크롤 추적
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 섹션별 전환 제어
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // 전환 중이면 무시
      if (isTransitioning) return;

      // 스크롤 쿨다운 체크
      const now = Date.now();
      if (now - lastScrollTime.current < scrollThreshold) return;
      lastScrollTime.current = now;

      const direction = e.deltaY > 0 ? 1 : -1;
      const progress = scrollYProgress.get();

      // 현재 섹션 확인
      let targetProgress = progress;

      if (direction > 0) {
        // 아래로 스크롤
        if (progress < 0.28) {
          // 히어로에서 비디오로
          targetProgress = 0.3;

          setCurrentSection(1);
        } else if (progress >= 0.3 && progress < 0.38) {
          // 비디오에서 콘텐츠로
          targetProgress = 0.4;
          setCurrentSection(2);
        }
      } else {
        // 위로 스크롤
        if (progress > 0.4) {
          // 콘텐츠에서 비디오로
          targetProgress = 0.35;
          setCurrentSection(1);
        } else if (progress > 0.3 && progress <= 0.4) {
          // 비디오에서 히어로로
          targetProgress = 0.15;
          setCurrentSection(0);
        }
      }

      // 스크롤 애니메이션
      if (targetProgress !== progress) {
        setIsTransitioning(true);
        const targetScroll =
          targetProgress *
          (containerRef.current?.scrollHeight! - window.innerHeight);

        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });

        scrollTimeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [scrollYProgress, isTransitioning]);

  // 텍스트 인덱스 업데이트
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // 히어로 섹션 (0-30%)
      if (progress < 0.3) {
        const textProgress = progress / 0.3;
        const index = Math.floor(textProgress * 6);
        setCurrentTextIndex(Math.min(5, index));
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // 슬라이드 전환 효과를 위한 transform
  // 히어로 섹션 - Y축 슬라이드
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.28, 0.3],
    ["0%", "0%", "-100%"]
  );
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28, 0.3], [1, 1, 1]);

  // 비디오 섹션 - Y축 슬라이드
  const videoY = useTransform(
    scrollYProgress,
    [0.28, 0.3, 0.38, 0.4],
    ["100%", "0%", "0%", "-100%"]
  );
  const videoOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.3, 0.38, 0.4],
    [1, 1, 1, 1]
  );

  // 콘텐츠 섹션 - Y축 슬라이드
  const contentY = useTransform(scrollYProgress, [0.38, 0.4], ["100%", "0%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.4, 1],
    [0, 1, 1]
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "400vh",
        overflow: "hidden",
      }}
    >
      {/* 고정 레이어 - 히어로와 비디오 */}
      <div
        className="fixed top-0 left-0 w-full h-screen overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* 히어로 섹션 - 슬라이드 효과 */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{
            y: heroY,
            opacity: heroOpacity,
            zIndex: currentSection === 0 ? 3 : 1,
          }}
        >
          <HeroSection
            onTextComplete={() => {}}
            initialTextIndex={currentTextIndex}
          />
        </motion.div>

        {/* 비디오 섹션 - 슬라이드 효과 */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{
            y: videoY,
            opacity: videoOpacity,
            zIndex: currentSection === 1 ? 3 : 2,
          }}
        >
          <VideoSection
            showVideoSection={true}
            onVideoEnd={() => {}}
            onVideoReady={() => {}}
          />
        </motion.div>
      </div>

      {/* 스페이서 - 히어로(120vh) + 비디오(40vh) = 160vh */}
      <div style={{ height: "160vh" }} />

      {/* 섹션 3: 콘텐츠 (블루+화이트+푸터) - 슬라이드 효과 */}
      <motion.div
        className="fixed top-0 left-0 w-full bg-white overflow-auto"
        style={{
          y: contentY,
          opacity: contentOpacity,
          zIndex: currentSection === 2 ? 10 : 0,
          height: "100vh",
          marginTop: 0,
        }}
      >
        <div style={{ minHeight: "100vh" }}>
          <BlueSection isActive={currentSection === 2} />
          <WhiteSection />
          <Footer />
        </div>
      </motion.div>

      {/* 실제 스크롤을 위한 공간 */}
      <div style={{ height: "240vh" }} />
    </div>
  );
};

export default FullPageSlide;
