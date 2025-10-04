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
<<<<<<< Updated upstream
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
=======
<<<<<<< Updated upstream
  const getCurrentText = () => {
    switch (currentTextIndex) {
      case 0:
        return (
          <motion.div
            key="text-0"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              x: 100, // 오른쪽에서 시작
              y: 0,
            }}
            animate={{
              opacity: 1,
              x: 0, // 중앙으로 이동
              y: 0,
            }}
            exit={{
              opacity: 0,
              x: -100, // 왼쪽으로 사라짐
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              어느 밤, 침대에 기대앉아 아이들에게
              <br />
              그림책을 읽어 주고 있었습니다. 그리고 책장 한 귀퉁이에서 마주한
              문장.
            </motion.p>
          </motion.div>
        )
      case 1:
        return (
          <motion.div
            key="text-1"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              x: 100, // 오른쪽에서 시작
              y: 0,
            }}
            animate={{
              opacity: 1,
              x: 0, // 중앙으로 이동
              y: 0,
            }}
            exit={{
              opacity: 0,
              x: -100, // 왼쪽으로 사라짐
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              "나는 바람 부는 날도 좋아요."
            </motion.p>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="text-2"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              x: 100, // 오른쪽에서 시작
              y: 0,
            }}
            animate={{
              opacity: 1,
              x: 0, // 중앙으로 이동
              y: 0,
            }}
            exit={{
              opacity: 0,
              x: -100, // 왼쪽으로 사라짐
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              참 듣기 좋은 말이었습니다.
            </motion.p>
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            key="text-3"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              x: 100, // 오른쪽에서 시작
              y: 0,
            }}
            animate={{
              opacity: 1,
              x: 0, // 중앙으로 이동
              y: 0,
            }}
            exit={{
              opacity: 0,
              x: -100, // 왼쪽으로 사라짐
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              힘든 순간이 있어도 괜찮아질 거라는
              <br />
              위로를 건네는 말 같았습니다.
            </motion.p>
          </motion.div>
        )
      case 4:
        return (
          <motion.div
            key="text-4"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              x: 100, // 오른쪽에서 시작
              y: 0,
            }}
            animate={{
              opacity: 1,
              x: 0, // 중앙으로 이동
              y: 0,
            }}
            exit={{
              opacity: 0,
              x: -100, // 왼쪽으로 사라짐
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              그리고 문득, 수술이 잘되어서 고맙다고 찾아오시는
              <br />
              분들의 그 말이 떠올랐습니다.
            </motion.p>
          </motion.div>
        )
      case 5:
        return (
          <motion.div
            key="text-4"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              x: 100, // 오른쪽에서 시작
              y: 0,
            }}
            animate={{
              opacity: 1,
              x: 0, // 중앙으로 이동
              y: 0,
            }}
            exit={{
              opacity: 0,
              x: -100, // 왼쪽으로 사라짐
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              "이제 바람 부는 날도 좋아요."
              <br />이 말은 언제든 들어도 기분이 좋습니다.
            </motion.p>
          </motion.div>
        )

      case 6:
        // 비디오 섹션이 활성화될 때는 아무것도 표시하지 않음
        return null
      default:
        return null
    }
>>>>>>> Stashed changes
  }
=======
  const hero = useHeroTranslations();
>>>>>>> Stashed changes

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
    const lines = text.content.split("\n");
    let content;

    if (index === 1 || text.content.includes("이제 바람부는 날도 좋아요")) {
      // text-1 또는 "이제 바람부는 날도 좋아요" 텍스트는 특별한 스타일 적용 + 이중 따옴표 사용
      const firstLine = lines[0].replace(/[""](.+?)[""]/, '"$1"');
      content = (
        <>
          <span className={styles.specialQuoteText}>
            {"\u201C"}
            {firstLine.replace(/[""]/g, "")}
            {"\u201D"}
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
              opacity,
              transform: `translateY(${translateY}px)`,
              transition: `opacity ${isMobile ? "0.3s" : "0.6s"} cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${isMobile ? "0.3s" : "0.6s"} cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
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
