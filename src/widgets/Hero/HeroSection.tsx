"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import { TextContentRenderer } from "./TextContentRenderer";

import * as styles from "./HeroSection.css";

interface HeroSectionProps {
  onTextComplete?: () => void;
  initialTextIndex?: number;
}

export default function HeroSection({
  onTextComplete,
  initialTextIndex = 0,
}: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(initialTextIndex);
  const [isMobile, setIsMobile] = useState(false);
  const totalTexts = 6;

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 텍스트 스크롤 로직 (간단화)
  useEffect(() => {
    if (isMobile) {
      // 모바일에서는 스크롤 이벤트 비활성화
      return;
    }
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    const scrollDebounceTime = 1000;

    // 터치 이벤트 처리 (모바일)
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) { // 최소 50px 스와이프
        if (deltaY > 0) {
          // 위로 스와이프 (다음 텍스트)
          setCurrentTextIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            if (newIndex >= totalTexts && onTextComplete) {
              onTextComplete();
              return totalTexts - 1;
            }
            return Math.min(newIndex, totalTexts - 1);
          });
        } else {
          // 아래로 스와이프 (이전 텍스트)
          setCurrentTextIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // console.log(
      //   `[HeroSection/스크롤감지] deltaY: ${e.deltaY}, isScrolling: ${isScrolling}`
      // );

      if (isScrolling) return;

      e.preventDefault();
      isScrolling = true;

      const deltaY = e.deltaY;
      if (Math.abs(deltaY) < 30) {
        console.log("[HeroSection/스크롤무시] 스크롤량이 너무 작음");
        isScrolling = false;
        return;
      }

      if (deltaY > 0) {
        // 아래로 스크롤
        console.log("[HeroSection/아래스크롤] 아래로 스크롤 감지");
        setCurrentTextIndex((prevIndex) => {
          console.log(
            `[HeroSection/텍스트변경] ${prevIndex} → ${prevIndex + 1}`
          );
          if (prevIndex < totalTexts - 1) {
            return prevIndex + 1;
          } else if (prevIndex === totalTexts - 1) {
            // 마지막 텍스트(5번째)에서 추가 스크롤 시 비디오로 전환
            console.log(
              "[HeroSection/텍스트완료] 마지막 텍스트 완료 - 비디오로 전환"
            );
            // 상태 업데이트 후 콜백 호출을 지연시킴
            setTimeout(() => {
              if (onTextComplete) {
                onTextComplete();
              }
            }, 0);
            return prevIndex;
          }
          return prevIndex;
        });
      } else if (deltaY < 0) {
        // 위로 스크롤
        console.log("[HeroSection/위스크롤] 위로 스크롤 감지");
        setCurrentTextIndex((prevIndex) => {
          console.log(
            `[HeroSection/텍스트변경] ${prevIndex} → ${prevIndex - 1}`
          );
          if (prevIndex > 0) {
            return prevIndex - 1;
          }
          return prevIndex;
        });
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, scrollDebounceTime);
    };

    console.log("[HeroSection/이벤트등록] 스크롤 이벤트 리스너 등록");

    if (isMobile) {
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
    } else {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      console.log("[HeroSection/이벤트제거] 스크롤 이벤트 리스너 제거");
      if (isMobile) {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
      } else {
        window.removeEventListener("wheel", handleWheel);
      }
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [onTextComplete, isMobile, totalTexts]);

  console.log(`[HeroSection/텍스트인덱스] ${currentTextIndex}`);

  return (
    <section className={styles.heroContainer}>
      <Image
        src="/main/background/bg_sky.jpg"
        alt="바날 성형외과 배경"
        fill
        priority
        className={styles.backgroundImage}
        onLoad={() => {
          console.log("[HeroSection/배경이미지로드] 배경 이미지 로드 완료");
        }}
        onError={() => {
          console.error("[HeroSection/배경이미지에러] 배경 이미지 로드 실패");
        }}
      />

      {/* 콘텐츠 */}
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <AnimatePresence mode="wait">
            <TextContentRenderer currentTextIndex={currentTextIndex} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
