"use client";

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
  const [virtualScrollY, setVirtualScrollY] = useState(0);
  const totalTexts = 5; // 텍스트 개수 5개로 변경

  // 텍스트 스크롤 로직 - KB사이트처럼 깊이 기반 전환
  useEffect(() => {
    if (!isActive) return;

    const textScrollDepth = 2000; // 각 텍스트당 스크롤 깊이 증가 (2000px - KB사이트 수준)
    const totalScrollHeight = textScrollDepth * totalTexts; // 전체 스크롤 높이
    let scrollY = virtualScrollY;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const deltaY = e.deltaY;
      scrollY += deltaY * 0.8; // 스크롤 감도 조정 (더 천천히)

      // 스크롤 범위 제한
      scrollY = Math.max(0, Math.min(scrollY, totalScrollHeight));
      setVirtualScrollY(scrollY);

      // 스크롤 위치에 따른 텍스트 인덱스 계산
      const newIndex = Math.floor(scrollY / textScrollDepth);
      const clampedIndex = Math.max(0, Math.min(newIndex, totalTexts - 1));

      // 텍스트 인덱스 업데이트
      setCurrentTextIndex(clampedIndex);

      // 마지막 텍스트에 도달했을 때 다음 섹션으로
      if (
        clampedIndex === totalTexts - 1 &&
        scrollY >= totalScrollHeight - textScrollDepth / 2
      ) {
        if (onTextComplete) {
          setTimeout(() => {
            onTextComplete();
          }, 300);
        }
      }
    };

    // 터치 이벤트 처리 - 스크롤 위치 기반
    let touchStartY = 0;
    let touchStartScrollY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartScrollY = scrollY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      const newScrollY = touchStartScrollY + deltaY * 1.2; // 터치 감도 적절히 조정

      // 스크롤 범위 제한
      scrollY = Math.max(0, Math.min(newScrollY, totalScrollHeight));
      setVirtualScrollY(scrollY);

      // 스크롤 위치에 따른 텍스트 인덱스 계산
      const newIndex = Math.floor(scrollY / textScrollDepth);
      const clampedIndex = Math.max(0, Math.min(newIndex, totalTexts - 1));

      // 텍스트 인덱스 업데이트
      setCurrentTextIndex(clampedIndex);

      // 마지막 텍스트에 도달했을 때 다음 섹션으로
      if (
        clampedIndex === totalTexts - 1 &&
        scrollY >= totalScrollHeight - textScrollDepth / 2
      ) {
        if (onTextComplete) {
          setTimeout(() => {
            onTextComplete();
          }, 300);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: false,
    });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: false });
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isActive, onTextComplete, totalTexts, virtualScrollY]);

  // initialTextIndex가 변경되면 currentTextIndex 업데이트
  useEffect(() => {
    setCurrentTextIndex(initialTextIndex);
  }, [initialTextIndex]);

  console.log(`[HeroSection/텍스트인덱스] ${currentTextIndex}, 스크롤: ${virtualScrollY}`);

  // 가상 스크롤 진행률 계산 (텍스트 페이드용)
  const scrollProgress = (virtualScrollY / (2000 * totalTexts)) * 100;

  return (
    <>
      {/* 가상 스크롤 높이를 위한 더미 엘리먼트 (스크롤바 표시용) */}
      {isActive && (
        <div
          style={{
            height: `${totalTexts * 100}vh`, // 각 텍스트당 100vh씩
            position: 'absolute',
            width: '1px',
            pointerEvents: 'none',
            opacity: 0,
          }}
        />
      )}

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
          <TextContentRenderer
            currentTextIndex={currentTextIndex}
            scrollProgress={scrollProgress / 100}
          />
        </div>
      </section>
    </>
  );
}
