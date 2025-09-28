"use client";

import * as styles from "./HeroSection.css";
import { useHeroTranslations } from "@/hooks/useAllPagesTranslations";

interface TextContentRendererProps {
  currentTextIndex: number;
  scrollProgress?: number;
  isMobile?: boolean;
}

export function TextContentRenderer({
  currentTextIndex,
  scrollProgress = 0,
  isMobile = false,
}: TextContentRendererProps) {
  const hero = useHeroTranslations();
  // 디버그용 - 각 텍스트의 전환 포인트 확인
  if (isMobile) {
    const scrollPosition = scrollProgress * 5;
    console.log(
      `[TextContentRenderer] 스크롤 위치: ${scrollPosition.toFixed(
        2
      )}, 현재 인덱스: ${currentTextIndex}, 진행율: ${(
        scrollProgress * 100
      ).toFixed(1)}%`
    );
  }

  // 각 텍스트의 페이드 효과를 위한 opacity 계산 (KB 스타일)
  const getTextOpacity = (textIndex: number) => {
    // 스크롤 진행에 따라 0~5 범위로 변환 (5개 텍스트)
    const scrollPosition = scrollProgress * 5;

    // 모바일에서는 균등한 간격으로 텍스트 전환
    const fadeInRange = isMobile ? 0.1 : 0.3; // 페이드인: 모바일 0.1, 데스크톱 0.3
    const fadeOutRange = isMobile ? 0.1 : 0.3; // 페이드아웃: 모바일 0.1, 데스크톱 0.3
    const visibleRange = isMobile ? 0.3 : 0.3; // 완전히 보이는 구간: 모바일 0.3 (균등), 데스크톱 0.3

    // 각 텍스트가 보이는 구간 설정 (균등한 간격)
    const startFadeIn = textIndex - fadeInRange;
    const fullVisible = textIndex;
    const startFadeOut = textIndex + visibleRange;
    const fullyHidden = startFadeOut + fadeOutRange;

    if (scrollPosition < startFadeIn) return 0;
    if (scrollPosition >= startFadeIn && scrollPosition < fullVisible) {
      return (scrollPosition - startFadeIn) / fadeInRange;
    }
    if (scrollPosition >= fullVisible && scrollPosition <= startFadeOut) {
      return 1;
    }
    if (scrollPosition > startFadeOut && scrollPosition < fullyHidden) {
      return 1 - (scrollPosition - startFadeOut) / fadeOutRange;
    }
    return 0;
  };

  // 텍스트 Y 위치 계산 (스크롤에 따라 부드럽게 이동)
  const getTextTransform = (textIndex: number) => {
    const opacity = getTextOpacity(textIndex);
    // 텍스트가 나타날 때는 아래에서 위로, 사라질 때는 위로 올라감
    if (opacity === 0) return 30;
    if (opacity === 1) return 0;
    return (1 - opacity) * 30;
  };

  // JSON에서 텍스트 가져오기
  const textContents = hero.texts.map((text, index) => {
    // 줄바꿈 처리
    const lines = text.content.split("\n");
    let content;

    if (index === 1) {
      // text-1은 특별한 스타일 적용 + 일반 따옴표 사용
      const firstLine = lines[0].replace(/[""](.+?)[""]/, '"$1"');
      content = (
        <>
          <span className={styles.specialQuoteText}>
            "{firstLine.replace(/[""]/g, "")}"
          </span>
          {lines[1] && (
            <>
              <br />
              {lines[1]}
            </>
          )}
        </>
      );
    } else {
      content = (
        <>
          {lines.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < lines.length - 1 && <br />}
            </span>
          ))}
        </>
      );
    }

    return {
      key: text.key,
      content,
    };
  });

  // 모든 텍스트를 렌더링하되 opacity로 제어 (KB 방식)
  return (
    <div className={styles.textContent}>
      {textContents.map((text, index) => {
        const opacity = getTextOpacity(index);
        const translateY = getTextTransform(index);

        return (
          <div
            key={text.key}
            className={styles.textBlock}
            style={{
              position: "absolute",
              opacity: opacity,
              transform: `translateY(${translateY}px)`,
              transition: isMobile
                ? "opacity 0.1s ease-out, transform 0.1s ease-out" // 모바일: 0.1초 (즉시 전환)
                : "opacity 0.4s ease-out, transform 0.4s ease-out", // 데스크톱: 0.4초
              pointerEvents: opacity > 0 ? "auto" : "none",
            }}
          >
            <p className={styles.storyText}>{text.content}</p>
          </div>
        );
      })}
    </div>
  );
}
