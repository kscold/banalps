"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";

// 섹션 정의
const SECTIONS = {
  texts: [
    { index: 0, start: 0, end: 0.05 },
    { index: 1, start: 0.05, end: 0.1 },
    { index: 2, start: 0.1, end: 0.15 },
    { index: 3, start: 0.15, end: 0.2 },
    { index: 4, start: 0.2, end: 0.25 },
    { index: 5, start: 0.25, end: 0.3 }
  ],
  video: { start: 0.3, end: 0.4 },
  content: { start: 0.4, end: 1.0 }
};

// Variants 정의
const variants = {
  hero: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  },
  video: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  },
  content: {
    visible: { opacity: 1, visibility: "visible" as const },
    hidden: { opacity: 0, visibility: "hidden" as const }
  }
};

const FullPageMainFinal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [currentSection, setCurrentSection] = useState("text");

  // Motion Values
  const scrollY = useMotionValue(0);
  const scrollProgress = useMotionValue(0);

  // Spring for smooth animation
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform for opacity - 더 정확한 타이밍
  const heroOpacity = useTransform(
    smoothProgress,
    [0, 0.29, 0.3],  // 텍스트는 30%까지 완전히 보여야 함
    [1, 1, 0]
  );

  const videoOpacity = useTransform(
    smoothProgress,
    [0.29, 0.3, 0.39, 0.4],  // 30-40% 구간에서만 비디오
    [0, 1, 1, 0]
  );

  const contentOpacity = useTransform(
    smoothProgress,
    [0.39, 0.4, 1],  // 40%부터 콘텐츠
    [0, 1, 1]
  );

  // 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    if (!containerRef.current) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollTop = window.scrollY;
      const scrollHeight = container.scrollHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollTop / scrollHeight));

      // Motion value 업데이트
      scrollY.set(scrollTop);
      scrollProgress.set(progress);

      // 섹션별 상태 업데이트 - 더 정확한 경계
      if (progress >= 0 && progress < 0.3) {
        // 텍스트 섹션 (0-30%)
        const textProgress = progress / 0.3;
        const index = Math.floor(textProgress * 6);
        setCurrentTextIndex(Math.min(5, Math.max(0, index)));
        setShowVideo(false);
        setCurrentSection("text");
      }
      else if (progress >= 0.3 && progress < 0.4) {
        // 비디오 섹션 (30-40%)
        setCurrentTextIndex(-1);
        setShowVideo(true);
        setCurrentSection("video");
      }
      else if (progress >= 0.4) {
        // 콘텐츠 섹션 (40% 이상)
        setCurrentTextIndex(-1);
        setShowVideo(false);
        setCurrentSection("content");
      }
    };

    // 스냅 기능
    let scrollTimeout: NodeJS.Timeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const progress = scrollProgress.get();
        const snapPoints = [
          ...SECTIONS.texts.map(t => t.start),
          SECTIONS.video.start,
          SECTIONS.video.start + 0.05,
          SECTIONS.content.start
        ];

        // 가장 가까운 스냅 포인트 찾기
        let closest = snapPoints[0];
        let minDist = Math.abs(progress - snapPoints[0]);

        for (const point of snapPoints) {
          const dist = Math.abs(progress - point);
          if (dist < minDist) {
            minDist = dist;
            closest = point;
          }
        }

        // 스냅 실행
        if (minDist < 0.02 && minDist > 0.001) {
          const container = containerRef.current;
          if (!container) return;

          const scrollHeight = container.scrollHeight - window.innerHeight;
          const targetScroll = closest * scrollHeight;

          window.scrollTo({
            top: targetScroll,
            behavior: "smooth"
          });
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScrollEnd, { passive: true });

    // 초기 실행
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, [scrollY, scrollProgress]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: "400vh",
        willChange: "transform"
      }}
    >
      {/* 디버그 정보 */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div
          className="fixed top-4 right-4 bg-black/90 text-white p-3 rounded-lg z-50 text-xs font-mono space-y-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div>Progress: {(scrollProgress.get() * 100).toFixed(1)}%</div>
          <div>Section: {currentSection}</div>
          <div>Text: {currentTextIndex >= 0 ? currentTextIndex : "N/A"}</div>
          <div>Video: {showVideo ? "✓" : "✗"}</div>
        </motion.div>
      )}

      {/* 고정 레이어 */}
      <div className="fixed inset-0 w-full h-screen bg-black" style={{ zIndex: 1 }}>

        {/* 히어로 섹션 */}
        <motion.div
          className="absolute inset-0 will-change-opacity"
          style={{ opacity: heroOpacity }}
          variants={variants.hero}
        >
          <HeroSection
            onTextComplete={() => {}}
            initialTextIndex={Math.max(0, currentTextIndex)}
          />
        </motion.div>

        {/* 비디오 섹션 */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="absolute inset-0 will-change-opacity"
              style={{ opacity: videoOpacity }}
              variants={variants.video}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <VideoSection
                showVideoSection={true}
                onVideoEnd={() => {}}
                onVideoReady={() => {}}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 스페이서 (40%) */}
      <div style={{ height: "160vh", pointerEvents: "none" }} />

      {/* 콘텐츠 섹션 */}
      <motion.div
        className="relative bg-white will-change-opacity"
        style={{
          opacity: contentOpacity,
          zIndex: 10,
          minHeight: "240vh"
        }}
        variants={variants.content}
      >
        <BlueSection isActive={currentSection === "content"} />
        <WhiteSection />
        <Footer />
      </motion.div>
    </div>
  );
};

export default FullPageMainFinal;