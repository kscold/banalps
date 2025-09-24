"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import { TextContentRenderer } from "./TextContentRenderer";

import * as styles from "./HeroSection.css";

interface HeroSectionProps {
  onTextComplete?: () => void;
  initialTextIndex?: number;
  isActive?: boolean;
}

export default function HeroSection({
  initialTextIndex = 0,
  onTextComplete,
  isActive = true,
}: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(initialTextIndex);
  const totalTexts = 6;

  // 텍스트 스크롤 로직 - HeroSection이 활성화된 경우에만
  useEffect(() => {
    if (!isActive) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      e.preventDefault();
      isScrolling = true;

      const deltaY = e.deltaY;

      if (Math.abs(deltaY) < 30) {
        isScrolling = false;
        return;
      }

      if (deltaY > 0) {
        // 아래로 스크롤
        setCurrentTextIndex((prevIndex) => {
          if (prevIndex < totalTexts - 1) {
            return prevIndex + 1;
          } else if (prevIndex === totalTexts - 1) {
            // 마지막 텍스트에서 다음 섹션으로
            if (onTextComplete) {
              setTimeout(() => {
                onTextComplete();
              }, 300);
            }
            return prevIndex;
          }
          return prevIndex;
        });
      } else {
        // 위로 스크롤
        setCurrentTextIndex((prevIndex) => {
          if (prevIndex > 0) {
            return prevIndex - 1;
          }
          return prevIndex;
        });
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 400); // 빠른 반응을 위해 400ms
    };

    // 터치 이벤트 처리
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          // 위로 스와이프 (다음 텍스트)
          setCurrentTextIndex((prevIndex) => {
            if (prevIndex < totalTexts - 1) {
              return prevIndex + 1;
            } else if (prevIndex === totalTexts - 1 && onTextComplete) {
              onTextComplete();
              return prevIndex;
            }
            return prevIndex;
          });
        } else {
          // 아래로 스와이프 (이전 텍스트)
          setCurrentTextIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isActive, onTextComplete, totalTexts]);

  // initialTextIndex가 변경되면 currentTextIndex 업데이트
  useEffect(() => {
    setCurrentTextIndex(initialTextIndex);
  }, [initialTextIndex]);

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
