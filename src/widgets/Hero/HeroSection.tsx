"use client";

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

  // 모바일 감지
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  // 텍스트 스크롤 로직 - KB사이트처럼 깊이 기반 전환
  useEffect(() => {
    if (!isActive) return;

    // 모바일에서는 스크롤 깊이를 적절히 조정
    const textScrollDepth = 2000; // 모바일: 800px로 증가, 데스크톱: 2000px
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
    let isTouching = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartScrollY = scrollY;
      isTouching = true;

      // 모바일에서 스크롤 방지
      e.preventDefault();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching) return;

      e.preventDefault(); // 기본 스크롤 동작 방지

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;

      // 모바일에서 더 부드러운 스크롤을 위해 감도 조정
      // 모바일은 감도를 적절히 조정 (너무 높으면 텍스트가 빨리 넘어감)
      const sensitivity = isMobile ? 1.5 : 2.5; // 모바일 감도를 더 낮춤
      const newScrollY = touchStartScrollY + deltaY * sensitivity;

      // 스크롤 범위 제한
      scrollY = Math.max(0, Math.min(newScrollY, totalScrollHeight));
      setVirtualScrollY(scrollY);

      // 스크롤 위치에 따른 텍스트 인덱스 계산
      const newIndex = Math.floor(scrollY / textScrollDepth);
      const clampedIndex = Math.max(0, Math.min(newIndex, totalTexts - 1));

      // 텍스트 인덱스 업데이트
      setCurrentTextIndex(clampedIndex);

      // 디버깅 로그
      console.log(
        `[모바일 터치] scrollY: ${scrollY}/${totalScrollHeight}, textIndex: ${clampedIndex}/${
          totalTexts - 1
        }, depth: ${textScrollDepth}`
      );

      // 마지막 텍스트에 도달했을 때 다음 섹션으로
      if (
        clampedIndex === totalTexts - 1 &&
        scrollY >= totalScrollHeight - textScrollDepth / 2
      ) {
        if (onTextComplete) {
          console.log("[모바일] 마지막 텍스트 도달 - 비디오로 전환");
          setTimeout(() => {
            onTextComplete();
          }, 300);
        }
      }
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: false,
    });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: false });
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isActive, onTextComplete, totalTexts, virtualScrollY, isMobile]);

  // initialTextIndex가 변경되면 currentTextIndex 업데이트
  useEffect(() => {
    setCurrentTextIndex(initialTextIndex);
  }, [initialTextIndex]);

  console.log(
    `[HeroSection/텍스트인덱스] ${currentTextIndex}, 스크롤: ${virtualScrollY}`
  );

  // 가상 스크롤 진행률 계산 (텍스트 페이드용)
  const scrollProgress = (virtualScrollY / (2000 * totalTexts)) * 100;

  return (
    <>
      {/* 가상 스크롤 높이를 위한 더미 엘리먼트 (스크롤바 표시용) */}
      {isActive && (
        <div
          style={{
            height: `${totalTexts * 100}vh`, // 각 텍스트당 100vh씩
            position: "absolute",
            width: "1px",
            pointerEvents: "none",
            opacity: 0,
          }}
        />
      )}

      <section className={styles.heroContainer}>
        {/* <Image
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
        /> */}

        <div className={styles.backgroundVideo}>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              transform: "translate(-50%, -50%) scale(1.2)",
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
              border: "none",
            }}
          />
        </div>

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
