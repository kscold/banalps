'use client';

import * as styles from './HeroSection.css';
import { useHeroTranslations } from '@/hooks/useAllPagesTranslations';

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

  // 각 텍스트의 페이드 효과를 위한 opacity 계산 (KB 스타일)
  const getTextOpacity = (textIndex: number) => {
    // 스크롤 진행에 따라 0~5 범위로 변환 (5개 텍스트)
    const scrollPosition = scrollProgress * 5;

    // KB 사이트처럼 더 매끄러운 전환을 위한 범위 조정
    const fadeInRange = isMobile ? 0.2 : 0.4; // 페이드인 범위 증가
    const fadeOutRange = isMobile ? 0.3 : 0.5; // 페이드아웃 범위 증가
    const visibleRange = isMobile ? 0.2 : 0.3; // 완전히 보이는 구간

    // 각 텍스트가 보이는 구간 설정
    const startFadeIn = textIndex - fadeInRange;
    const fullVisible = textIndex;
    const startFadeOut = textIndex + visibleRange;
    const fullyHidden = startFadeOut + fadeOutRange;

    if (scrollPosition < startFadeIn) return 0;
    if (scrollPosition >= startFadeIn && scrollPosition < fullVisible) {
      // 더 부드러운 ease-out 곡선 적용
      const progress = (scrollPosition - startFadeIn) / fadeInRange;
      return progress * progress * (3 - 2 * progress); // smooth step function
    }
    if (scrollPosition >= fullVisible && scrollPosition <= startFadeOut) {
      return 1;
    }
    if (scrollPosition > startFadeOut && scrollPosition < fullyHidden) {
      // 페이드아웃도 더 자연스럽게
      const progress = (scrollPosition - startFadeOut) / fadeOutRange;
      const smoothProgress = progress * progress * (3 - 2 * progress);
      return 1 - smoothProgress;
    }
    return 0;
  };

  // 텍스트 Y 위치 계산 - KB 사이트처럼 페이드인만 적용
  const getTextTransform = (textIndex: number) => {
    const scrollPosition = scrollProgress * 5;
    const fadeInRange = isMobile ? 0.1 : 0.3;
    const startFadeIn = textIndex - fadeInRange;
    const fullVisible = textIndex;

    // 페이드인 시에만 아래에서 위로 올라오는 효과
    if (scrollPosition < startFadeIn) return 20;
    if (scrollPosition >= startFadeIn && scrollPosition < fullVisible) {
      const progress = (scrollPosition - startFadeIn) / fadeInRange;
      return (1 - progress) * 20; // 20px에서 0px로
    }
    // 완전히 보이거나 사라질 때는 Y축 변경 없이 그 자리에 유지
    return 0;
  };

  // JSON에서 텍스트 가져오기
  const textContents = hero.texts.map((text, index) => {
    // 줄바꿈 처리
    const lines = text.content.split('\n');
    let content;

    if (index === 1 || text.content.includes('이제 바람부는 날도 좋아요')) {
      // text-1 또는 "이제 바람부는 날도 좋아요" 텍스트는 특별한 스타일 적용 + 이중 따옴표 사용
      const firstLine = lines[0].replace(/[""](.+?)[""]/, '"$1"');
      content = (
        <>
          <span className={styles.specialQuoteText}>
            {'\u201C'}
            {firstLine.replace(/[""]/g, '')}
            {'\u201D'}
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
              position: 'absolute',
              opacity,
              transform: `translateY(${translateY}px)`,
              transition: `opacity ${isMobile ? '0.3s' : '0.6s'} cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${isMobile ? '0.3s' : '0.6s'} cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            }}
            suppressHydrationWarning
          >
            <p className={styles.storyText} suppressHydrationWarning>
              {text.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
