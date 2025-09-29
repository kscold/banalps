"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";
import { videoPreloader } from "../utils/videoPreloader";
import { verifyCaching } from "../utils/verifyCaching";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import * as styles from "./FullPageMain.css";

const FullPageMain = () => {
  const [currentSection, setCurrentSection] = useState<0 | 1 | 2>(0); // 0: hero, 1: video, 2: content
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoMinTimeElapsed, setVideoMinTimeElapsed] = useState(false);
  const [hasSeenHero, setHasSeenHero] = useState(false); // Hero를 한번 봤는지 추적
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  // 초기 스크롤 위치를 0으로 설정 및 비디오 프리로딩
  useEffect(() => {
    window.scrollTo(0, 0);

    // 비디오 프리로딩 시작
    console.log("[FullPageMain] 비디오 캐싱 시작...");
    videoPreloader.addPrefetchTags();
    videoPreloader
      .preloadAllVideos()
      .then(() => {
        console.log("[FullPageMain] ✅ 모든 비디오 프리로딩 완료");

        // Service Worker 상태 확인
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.ready.then((registration) => {
            console.log(
              "[FullPageMain] ✅ Service Worker 활성화:",
              registration.active?.state
            );
          });
        }

        // 3초 후 캐싱 검증 실행
        setTimeout(() => {
          verifyCaching();
        }, 3000);
      })
      .catch((error) => {
        console.error("[FullPageMain] ❌ 비디오 프리로딩 실패:", error);
      });
  }, []);

  // 섹션별 스크롤바 제어
  useEffect(() => {
    if (currentSection === 0) {
      document.body.classList.add("show-scrollbar");
    } else {
      document.body.classList.remove("show-scrollbar");
    }

    return () => {
      document.body.classList.remove("show-scrollbar");
    };
  }, [currentSection]);

  // 섹션별 body overflow 제어
  useEffect(() => {
    if (currentSection === 1) {
      // 비디오 섹션에서는 스크롤 잠금
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      // 모바일에서 추가 스타일
      if (isMobile) {
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
      }
    } else if (currentSection === 2) {
      // 콘텐츠 섹션에서는 스크롤 허용
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      // 모바일에서 fixed 해제
      if (isMobile) {
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.height = "";
        // iOS Safari 스크롤 활성화
        (document.body.style as any).webkitOverflowScrolling = "touch";
      }
      // 초기 전환시에만 스크롤 위치 리셋
      if (window.scrollY === 0) {
        window.scrollTo(0, 0);
      }
    } else {
      // Hero 섹션
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      if (isMobile) {
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.height = "";
        (document.body.style as any).webkitOverflowScrolling = "touch";
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
      (document.body.style as any).webkitOverflowScrolling = "";
    };
  }, [currentSection, isMobile]);

  // Hero에서 비디오로 전환 핸들러
  const handleHeroComplete = useCallback(() => {
    if (isTransitioning) return;
    console.log("[FullPageMain] Hero 완료 - 비디오로 전환");

    setIsTransitioning(true);
    setHasSeenHero(true); // Hero를 봤다고 표시
    setCurrentSection(1);
    setHeroTextIndex(4); // 마지막 텍스트 인덱스로 설정

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

  // 비디오에서 콘텐츠로 전환 핸들러
  const handleVideoComplete = useCallback(() => {
    if (isTransitioning) return;
    console.log("[FullPageMain] 비디오 종료 - 콘텐츠로 전환");

    setIsTransitioning(true);
    window.scrollTo(0, 0);
    setCurrentSection(2);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

  // 비디오 종료 핸들러
  const handleVideoEnd = useCallback(() => {
    console.log("[FullPageMain] 비디오 종료");
    handleVideoComplete();
  }, [handleVideoComplete]);

  // 비디오 준비 핸들러
  const handleVideoReady = useCallback(() => {
    console.log("[FullPageMain] 비디오 준비 완료");
  }, []);

  // 비디오 섹션 활성화 시 타이머 시작
  useEffect(() => {
    if (currentSection === 1) {
      setVideoMinTimeElapsed(false);

      const timer = setTimeout(() => {
        setVideoMinTimeElapsed(true);
      }, 2000); // 최소 2초

      return () => clearTimeout(timer);
    } else {
      setVideoMinTimeElapsed(false);
    }
  }, [currentSection]);

  // 섹션 간 전환 처리
  useEffect(() => {
    const handleSectionScroll = (e: WheelEvent) => {
      console.log(
        `[FullPageMain/스크롤] currentSection: ${currentSection}, deltaY: ${e.deltaY}, isTransitioning: ${isTransitioning}`
      );

      if (isTransitioning) return;

      // 콘텐츠 섹션에서 위로 스크롤 시 비디오로 돌아가기
      if (currentSection === 2) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // 블루섹션 최상단 근처(50px 이내)에서만 위로 스크롤 시 비디오로 전환
        if (e.deltaY < 0 && scrollTop < 50) {
          e.preventDefault();
          e.stopPropagation();

          console.log(
            "[FullPageMain] 콘텐츠 → 비디오 섹션 전환 (hasSeenHero:",
            hasSeenHero,
            ")"
          );

          setIsTransitioning(true);
          window.scrollTo(0, 0);

          // 항상 비디오 섹션으로만 전환
          setCurrentSection(1);
          setVideoMinTimeElapsed(false); // 비디오 타이머 리셋

          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
        return;
      }

      // 비디오 섹션에서 스크롤 처리
      if (currentSection === 1) {
        const scrollThreshold = Math.abs(e.deltaY) > 30;
        if (!scrollThreshold) return;

        // 스크롤 이벤트를 실제로 처리할 때만 preventDefault
        e.preventDefault();
        e.stopPropagation();

        // 최소 시간이 지나지 않았으면 아래로 스크롤 무시
        if (!videoMinTimeElapsed && e.deltaY > 0) {
          console.log("[FullPageMain] 비디오 최소 시간 미경과");
          return;
        }

        if (e.deltaY > 0 && videoMinTimeElapsed) {
          // 아래로 스크롤 - 콘텐츠로
          handleVideoComplete();
        } else if (e.deltaY < 0) {
          // 위로 스크롤 - Hero로
          setIsTransitioning(true);
          setCurrentSection(0);
          setHeroTextIndex(4);

          console.log("[FullPageMain] 비디오 → Hero");

          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
      }

      // 히어로 섹션에서 스크롤 처리
      if (currentSection === 0) {
        // HeroSection의 내부 스크롤 로직이 작동하도록 함
        return;
      }
    };

    // 터치 이벤트 핸들러 추가 (모바일 지원)
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const scrollThreshold = Math.abs(deltaY) > 50; // 50px 이상 스와이프

      if (!scrollThreshold) return;

      // 비디오 섹션에서 터치 처리
      if (currentSection === 1) {
        // 최소 시간이 지나지 않았으면 아래로 스크롤 무시
        if (!videoMinTimeElapsed && deltaY > 0) {
          console.log("[FullPageMain] 비디오 최소 시간 미경과");
          return;
        }

        if (deltaY > 0 && videoMinTimeElapsed) {
          // 위로 스와이프 - 콘텐츠로
          handleVideoComplete();
        } else if (deltaY < 0) {
          // 아래로 스와이프 - Hero로
          setIsTransitioning(true);
          setCurrentSection(0);
          setHeroTextIndex(4);

          console.log("[FullPageMain] 비디오 → Hero");

          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
      }

      // 콘텐츠 섹션에서 터치 처리
      if (currentSection === 2) {
        if (deltaY < 0 && window.scrollY <= 0) {
          // 아래로 스와이프 - 비디오로
          e.preventDefault();

          console.log(
            "[FullPageMain] 콘텐츠 → 비디오 섹션 전환 (hasSeenHero:",
            hasSeenHero,
            ")"
          );

          setIsTransitioning(true);
          window.scrollTo(0, 0);

          // 항상 비디오 섹션으로만 전환
          setCurrentSection(1);
          setVideoMinTimeElapsed(false); // 비디오 타이머 리셋

          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
      }
    };

    window.addEventListener("wheel", handleSectionScroll, {
      passive: false,
      capture: true,
    });

    // 모바일 터치 이벤트 리스너 추가
    if (isMobile) {
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleSectionScroll, {
        capture: true,
      });
      if (isMobile) {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentSection, videoMinTimeElapsed, isTransitioning, hasSeenHero, isMobile, handleVideoComplete]);

  // Framer Motion transition
  const pageTransition = {
    type: "tween" as const,
    ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
    duration: 0.8,
  };

  return (
    <div ref={containerRef} className={styles.container}>
      {/* 고정 레이어 - 히어로와 비디오 */}
      <div
        className={styles.fixedLayer}
        style={{
          zIndex: currentSection === 2 ? -1 : 10, // Much lower than header (50) and floating buttons (10000)
          // fixedLayer는 항상 pointer-events: none (CSS에서 설정)
          visibility: currentSection === 2 ? "hidden" : "visible",
        }}
      >
        <AnimatePresence mode="wait">
          {/* 히어로 섹션 */}
          {currentSection === 0 && (
            <motion.div
              key="hero"
              className={styles.sectionWrapper}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={pageTransition}
              style={{
                zIndex: 5, // Much lower than header (50)
                transformOrigin: "center center",
                pointerEvents: "none", // 헤더와 플로팅 버튼 터치 통과
              }}
            >
              <HeroSection
                onTextComplete={handleHeroComplete}
                isActive={true}
                initialTextIndex={heroTextIndex}
              />
            </motion.div>
          )}

          {/* 비디오 섹션 */}
          {currentSection === 1 && (
            <motion.div
              key="video"
              className={styles.sectionWrapper}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={pageTransition}
              style={{
                zIndex: 8, // Much lower than header (50)
                transformOrigin: "center center",
              }}
            >
              <VideoSection
                showVideoSection={true}
                onVideoEnd={handleVideoEnd}
                onVideoReady={handleVideoReady}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 콘텐츠 섹션 */}
      <AnimatePresence>
        {currentSection === 2 && (
          <motion.div
            key="content"
            className={styles.contentSection}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={pageTransition}
            style={{
              zIndex: 2, // Higher than hidden fixed layer (1) but lower than header (50)
              pointerEvents: "auto",
              isolation: "isolate", // Create new stacking context
            }}
          >
            <BlueSection isActive={true} />
            <WhiteSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FullPageMain;
