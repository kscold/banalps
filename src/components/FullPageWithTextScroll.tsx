"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";
import { TextContentRenderer } from "@/widgets/Hero/TextContentRenderer";
import * as styles from "./FullPageWithTextScroll.css";

const FullPageWithTextScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0); // 0: hero, 1: video, 2: content
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Framer Motion 스크롤 추적
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 히어로 텍스트 완료 시 비디오로 전환
  const handleTextComplete = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSection(1);

    // 비디오 섹션으로 스크롤
    const targetScroll =
      0.3 * (containerRef.current?.scrollHeight! - window.innerHeight);
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // 섹션 간 전환 제어
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // 히어로 섹션에서는 TextContentRenderer가 스크롤 처리
      if (currentSection === 0) {
        return;
      }

      // 전환 중이면 무시
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const progress = scrollYProgress.get();
      const direction = e.deltaY > 0 ? 1 : -1;
      let targetProgress = progress;

      // 비디오 섹션 (1)
      if (currentSection === 1) {
        if (direction > 0 && progress >= 0.38) {
          // 비디오에서 콘텐츠로
          e.preventDefault();
          setIsTransitioning(true);
          setCurrentSection(2);
          targetProgress = 0.4;
        } else if (direction < 0 && progress <= 0.31) {
          // 비디오에서 히어로로
          e.preventDefault();
          setIsTransitioning(true);
          setCurrentSection(0);
          targetProgress = 0.15;
        }
      }

      // 콘텐츠 섹션 (2)
      if (currentSection === 2) {
        if (direction < 0 && progress <= 0.41) {
          // 콘텐츠에서 비디오로
          e.preventDefault();
          setIsTransitioning(true);
          setCurrentSection(1);
          targetProgress = 0.35;
        }
        // 콘텐츠 내에서는 자유 스크롤
      }

      // 스크롤 애니메이션
      if (targetProgress !== progress) {
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
  }, [scrollYProgress, currentSection, isTransitioning]);

  // 섹션별 애니메이션
  // 히어로 섹션 - 슬라이드
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.28, 0.3],
    ["0%", "0%", "-100%"]
  );

  // 비디오 섹션 - 슬라이드
  const videoY = useTransform(
    scrollYProgress,
    [0.28, 0.3, 0.38, 0.4],
    ["100%", "0%", "0%", "-100%"]
  );

  // 콘텐츠 섹션 - 슬라이드
  const contentY = useTransform(scrollYProgress, [0.38, 0.4], ["100%", "0%"]);

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.4, 1],
    [0, 1, 1]
  );

  return (
    <div ref={containerRef} className={styles.container}>
      {/* 디버그 정보 */}
      {process.env.NODE_ENV === "development" && (
        <div className={styles.debugInfo}>
          <div>Section: {["Hero", "Video", "Content"][currentSection]}</div>
          <div>Progress: {(scrollYProgress.get() * 100).toFixed(1)}%</div>
          <div>Transitioning: {isTransitioning ? "✓" : "✗"}</div>
        </div>
      )}

      {/* 고정 레이어 - 히어로와 비디오 */}
      <div className={styles.fixedLayer} style={{ zIndex: 1 }}>
        {/* 히어로 섹션 - 텍스트 스크롤러 */}
        <motion.div
          className={styles.heroSection}
          style={{
            y: heroY,
            zIndex: currentSection === 0 ? 3 : 1,
          }}
        >
          {/* <TextContentRenderer
            onComplete={handleTextComplete}
            onTextChange={(index) => console.log("Text changed to:", index)}
          /> */}
        </motion.div>

        {/* 비디오 섹션 */}
        <motion.div
          className={styles.videoSection}
          style={{
            y: videoY,
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
      <div className={styles.spacer} />

      {/* 콘텐츠 섹션 - 슬라이드 효과 */}
      <motion.div
        className={styles.contentSection}
        style={{
          y: contentY,
          opacity: contentOpacity,
          zIndex: currentSection === 2 ? 10 : 0,
        }}
      >
        <div className={styles.contentWrapper}>
          <BlueSection isActive={currentSection === 2} />
          <WhiteSection />
          <Footer />
        </div>
      </motion.div>

      {/* 실제 스크롤을 위한 공간 */}
      <div className={styles.scrollSpace} />
    </div>
  );
};

export default FullPageWithTextScroll;
