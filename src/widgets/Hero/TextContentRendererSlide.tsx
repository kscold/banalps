"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as styles from "./HeroSection.css";
import * as textStyles from "./TextContentRendererSlide.css";

interface TextContentRendererProps {
  currentTextIndex?: number;
  onComplete?: () => void;
  onTextChange?: (index: number) => void;
  enableScroll?: boolean;
}

export function TextContentRenderer({
  currentTextIndex: externalIndex,
  onComplete,
  onTextChange,
  enableScroll = true,
}: TextContentRendererProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastScrollTime = useRef(Date.now());
  const containerRef = useRef<HTMLDivElement>(null);

  // 외부 인덱스가 있으면 사용, 없으면 내부 인덱스 사용
  const currentTextIndex =
    externalIndex !== undefined ? externalIndex : internalIndex;

  useEffect(() => {
    if (!enableScroll) return;

    const handleWheel = (e: WheelEvent) => {
      // 전환 중이면 무시
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      // 스크롤 쿨다운 (800ms) - 더 긴 쿨다운으로 한 번에 한 텍스트만 넘어가도록
      const now = Date.now();
      if (now - lastScrollTime.current < 800) {
        e.preventDefault();
        return;
      }

      // 최소 스크롤 거리 체크 (너무 작은 스크롤은 무시)
      if (Math.abs(e.deltaY) < 50) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentTextIndex + direction;

      // 범위 체크
      if (nextIndex < 0) {
        e.preventDefault();
        return;
      } else if (nextIndex > 5) {
        // 마지막 텍스트에서 아래로 스크롤 - 완료 콜백
        if (onComplete && currentTextIndex === 5) {
          onComplete();
        }
        return;
      }

      // 텍스트 전환
      e.preventDefault();
      setIsTransitioning(true);
      lastScrollTime.current = now;

      setTimeout(() => {
        if (externalIndex === undefined) {
          setInternalIndex(nextIndex);
        }
        if (onTextChange) {
          onTextChange(nextIndex);
        }
        setIsTransitioning(false);
      }, 100); // 전환 시간도 조금 늘림
    };

    // 터치 이벤트 핸들러
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      // 터치 쿨다운 체크
      const now = Date.now();
      if (now - lastScrollTime.current < 800) {
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      // 최소 스와이프 거리 100px (더 큰 거리로 설정)
      if (Math.abs(deltaY) < 100) return;

      const direction = deltaY > 0 ? 1 : -1;
      const nextIndex = currentTextIndex + direction;

      if (nextIndex < 0 || nextIndex > 5) {
        if (nextIndex > 5 && onComplete) {
          onComplete();
        }
        return;
      }

      setIsTransitioning(true);
      lastScrollTime.current = now;
      setTimeout(() => {
        if (externalIndex === undefined) {
          setInternalIndex(nextIndex);
        }
        if (onTextChange) {
          onTextChange(nextIndex);
        }
        setIsTransitioning(false);
      }, 100); // 전환 시간도 조금 늘림
    };

    // 이벤트 리스너 등록
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    currentTextIndex,
    isTransitioning,
    onComplete,
    onTextChange,
    externalIndex,
    enableScroll,
  ]);

  console.log(`[TextContentRenderer] 현재 텍스트 인덱스: ${currentTextIndex}`);

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
              그림책을 읽어 주고 있었습니다.
              <br />
              그리고 책장 한 귀퉁이에서 마주한 문장.
            </motion.p>
          </motion.div>
        );
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
              <b>&ldquo;나는 바람 부는 날도 좋아요.&rdquo;</b>
            </motion.p>
          </motion.div>
        );
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
        );
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
        );
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
        );
      case 5:
        return (
          <motion.div
            key="text-5"
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
              {"이제 바람 부는 날도 좋아요."}
              <br />이 말은 언제든 들어도 기분이 좋습니다.
            </motion.p>
          </motion.div>
        );
    }
  };

  return (
    <div ref={containerRef} className={textStyles.container}>
      {getCurrentText()}

      {/* 스크롤 인디케이터 */}
      {enableScroll && currentTextIndex <= 5 && (
        <div className={textStyles.scrollIndicator}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className={
                index === currentTextIndex
                  ? textStyles.indicatorDotActive
                  : textStyles.indicatorDot
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
