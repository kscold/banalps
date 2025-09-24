"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";

const FullPageSimple = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Framer Motion 스크롤 추적
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // 섹션별 표시/숨김 설정
  // 히어로: 0-30%에서 보임
  const heroDisplay = useTransform(scrollYProgress, [0, 0.29, 0.3], [1, 1, 0]);

  // 비디오: 30-40%에서 보임
  const videoDisplay = useTransform(
    scrollYProgress,
    [0.29, 0.3, 0.39, 0.4],
    [0, 1, 1, 0]
  );

  // 콘텐츠: 40% 이후 보임
  const contentDisplay = useTransform(scrollYProgress, [0.39, 0.4], [0, 1]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", minHeight: "400vh" }}
    >
      {/* 고정 레이어 - 히어로와 비디오 */}
      <div className="fixed top-0 left-0 w-full h-screen" style={{ zIndex: 1 }}>
        {/* 히어로 섹션 */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{
            opacity: heroDisplay,
            zIndex: 1,
          }}
        >
          <HeroSection
            onTextComplete={() => {}}
            initialTextIndex={currentTextIndex}
          />
        </motion.div>

        {/* 비디오 섹션 */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{
            opacity: videoDisplay,
            zIndex: 2,
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

      {/* 섹션 3: 콘텐츠 (블루+화이트+푸터) */}
      <motion.div
        className="relative bg-white"
        style={{
          opacity: contentDisplay,
          zIndex: 10,
          minHeight: "100vh",
          marginTop: "310vh", // 뷰포트 높이만큼 위로 올려서 40% 지점에서 정확히 시작
        }}
      >
        <BlueSection isActive={true} />
        <WhiteSection />
        <Footer />
      </motion.div>
    </div>
  );
};

export default FullPageSimple;
