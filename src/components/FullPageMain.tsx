"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";

type SectionType = "hero" | "video" | "content";

const FullPageMain = () => {
  const [currentSection, setCurrentSection] = useState<SectionType>("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousSection, setPreviousSection] = useState<SectionType | null>(
    null
  );
  const [isVideoPreloaded, setIsVideoPreloaded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [heroCompleted, setHeroCompleted] = useState(false);
  const [videoSectionTime, setVideoSectionTime] = useState(0);
  const videoPreloadRef = useRef<boolean>(false);

  // 섹션 변경 추적
  useEffect(() => {
    console.log(
      `[FullPageMain/섹션변경] 현재 섹션: ${currentSection}, 이전 섹션: ${previousSection}`
    );

    // 비디오 섹션에 진입하면 타이머 시작
    if (currentSection === "video") {
      const timer = setInterval(() => {
        setVideoSectionTime((prev) => prev + 100);
      }, 100);

      return () => {
        clearInterval(timer);
        setVideoSectionTime(0); // 비디오 섹션을 떠나면 리셋
      };
    }
  }, [currentSection, previousSection]);

  // 비디오 프리로드 - 컴포넌트 마운트 시 즉시 시작
  useEffect(() => {
    if (!videoPreloadRef.current) {
      console.log("[FullPageMain/비디오프리로드] 비디오 프리로드 시작");
      videoPreloadRef.current = true;

      // Vimeo Player API 스크립트 프리로드
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href =
        "https://player.vimeo.com/video/1026757305?h=e9b3fc8dd8&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0&background=1";
      link.as = "document";
      document.head.appendChild(link);

      setIsVideoPreloaded(true);
    }
  }, []);

  // 텍스트가 완료되었을 때 비디오 섹션으로 이동
  const handleTextComplete = () => {
    console.log(
      `[FullPageMain/텍스트완료] 텍스트 완료 - 현재 섹션: ${currentSection} → 비디오 섹션으로 이동`
    );
    setHeroCompleted(true); // 히어로 섹션 완료 표시
    setIsTransitioning(true);
    // 비디오 준비 상태 리셋
    setIsVideoReady(false);
    setTimeout(() => {
      console.log("[FullPageMain/텍스트완료] 비디오 섹션으로 전환 시작");
      setCurrentSection("video");
      setIsTransitioning(false);
    }, 300);
  };

  // 비디오가 준비되었을 때 호출
  const handleVideoReady = () => {
    console.log(
      "[FullPageMain/비디오준비] 비디오가 렌더링 완료되어 스크롤 가능"
    );
    setIsVideoReady(true);
  };

  // 비디오가 끝났을 때 다음 섹션으로 이동
  const handleVideoEnd = () => {
    console.log(
      `[FullPageMain/비디오종료] 비디오 재생 완료 - 현재 섹션: ${currentSection} → 콘텐츠 섹션으로 이동`
    );
    // 즉시 콘텐츠 섹션으로 전환 (전환 효과 없이)
    setPreviousSection("video");
    setCurrentSection("content");
    console.log("[FullPageMain/비디오종료] 콘텐츠 섹션으로 전환 완료");
  };

  // 블루섹션에서 비디오로 복귀
  const handleBackToVideo = () => {
    console.log(
      `[FullPageMain/비디오복귀] 블루섹션에서 비디오로 복귀 - 현재 섹션: ${currentSection}`
    );
    setIsTransitioning(true);
    setTimeout(() => {
      console.log("[FullPageMain/비디오복귀] 비디오 섹션으로 전환 시작");
      setCurrentSection("video");
      setIsTransitioning(false);
    }, 300);
  };

  // 섹션별 스크롤 이벤트 처리
  useEffect(() => {
    // Hero 섹션에서는 스크롤 이벤트 처리하지 않음 (HeroSection 컴포넌트가 자체적으로 처리)
    if (currentSection === "hero") {
      console.log(
        `[FullPageMain/스크롤비활성화] Hero 섹션 - 스크롤 이벤트 비활성화`
      );
      return;
    }

    let isScrolling = false;
    let lastScrollTime = 0;
    let scrollAccumulator = 0; // 스크롤 누적값
    let scrollResetTimeout: NodeJS.Timeout | null = null;
    const scrollCooldown = 1200; // 스크롤 간 최소 간격 증가
    const scrollDebounceTime = 1500; // debounce 시간 증가
    const scrollThreshold = 4; // 스크롤 누적 임계값

    // 모바일 터치 이벤트 처리
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      // 최소 스와이프 거리 체크
      if (Math.abs(deltaY) < 50) return;

      switch (currentSection as SectionType) {
        case "content":
          if (deltaY < -50 && window.scrollY === 0) {
            // 아래로 스와이프 (위로 스크롤) - 정확히 최상단일 때만
            console.log("[FullPageMain/터치] 콘텐츠에서 비디오로 (scrollY: " + window.scrollY + ")");
            setIsVideoReady(false);
            setPreviousSection("content");
            setIsTransitioning(true);
            setCurrentSection("video");
            setTimeout(() => {
              setIsTransitioning(false);
            }, 500);
          }
          break;

        case "hero":
          if (deltaY > 0 && heroCompleted) {
            // 위로 스와이프 (아래로 스크롤 - 비디오로)
            console.log("[FullPageMain/터치] 히어로에서 비디오로");
            setPreviousSection("hero");
            setCurrentSection("video");
          }
          break;

        case "video":
          if (deltaY > 0) {
            // 위로 스와이프 (아래로 스크롤 - 블루섹션으로)
            // 비디오 섹션에서 최소 1초는 있어야 함
            if (videoSectionTime < 1000) {
              console.log(
                `[FullPageMain/터치] 비디오 섹션 최소 시간 미달: ${videoSectionTime}ms/1000ms`
              );
              return;
            }
            console.log("[FullPageMain/터치] 비디오에서 콘텐츠(블루섹션)로");
            setPreviousSection("video");
            setCurrentSection("content");
          } else if (deltaY < 0) {
            // 아래로 스와이프 (위로 스크롤 - 히어로로)
            console.log("[FullPageMain/터치] 비디오에서 히어로로");
            setPreviousSection("video");
            setHeroCompleted(false); // 히어로로 돌아갈 때 리셋
            setCurrentSection("hero");
          }
          break;

        default:
          // TypeScript exhaustive check - 모든 케이스를 처리했음을 보장
          break;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const deltaY = e.deltaY;

      // 콘텐츠 섹션에서는 페이지 최상단에서 위로 스크롤할 때만 비디오로 복귀
      if (currentSection === "content") {
        console.log(
          `[FullPageMain/콘텐츠스크롤] 콘텐츠 섹션에서 스크롤 감지 - deltaY: ${deltaY}, scrollY: ${window.scrollY}, isVideoReady: ${isVideoReady}`
        );

        if (deltaY < 0 && window.scrollY === 0) {
          e.preventDefault();

          // 트랜지션 중이거나 쿨다운 중이면 무시
          if (isTransitioning || now - lastScrollTime < scrollCooldown) {
            return;
          }

          lastScrollTime = now;
          console.log(
            `[FullPageMain/위스크롤] ${currentSection} → 비디오 섹션 (scrollY: ${window.scrollY})`
          );
          // 비디오 준비 상태 리셋
          setIsVideoReady(false);
          setPreviousSection("content");
          setIsTransitioning(true);
          setCurrentSection("video");

          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
        return;
      }

      // 비디오 섹션에서는 스크롤 방지
      e.preventDefault();

      // 트랜지션 중이면 무시
      if (isTransitioning) return;

      // 스크롤 누적값 업데이트
      scrollAccumulator += Math.abs(deltaY);

      // 스크롤 리셋 타이머 관리
      if (scrollResetTimeout) {
        clearTimeout(scrollResetTimeout);
      }

      scrollResetTimeout = setTimeout(() => {
        scrollAccumulator = 0;
        scrollResetTimeout = null;
      }, 300);

      // 누적값이 임계값 미만이면 무시 (빠른 스크롤 방지)
      if (scrollAccumulator < scrollThreshold) {
        console.log(
          `[FullPageMain/스크롤누적] 누적값 부족: ${scrollAccumulator}/${scrollThreshold}`
        );
        return;
      }

      // 쿨다운 체크
      if (now - lastScrollTime < scrollCooldown || isScrolling) {
        console.log(`[FullPageMain/쿨다운] 스크롤 쿨다운 중`);
        return;
      }

      // 최소 스크롤 임계값 체크
      if (Math.abs(deltaY) < 30) return;

      isScrolling = true;
      lastScrollTime = now;
      scrollAccumulator = 0; // 스크롤 처리 후 누적값 리셋

      if (deltaY > 0) {
        // 아래로 스크롤
        console.log(`[FullPageMain/아래스크롤] ${currentSection} → 다음 섹션`);
        if (currentSection === "video") {
          // 비디오 섹션에서 최소 1초는 있어야 함
          if (videoSectionTime < 1000) {
            console.log(
              `[FullPageMain/비디오최소시간] 비디오 섹션 최소 시간 미달: ${videoSectionTime}ms/1000ms`
            );
            return;
          }
          console.log(
            "[FullPageMain/비디오스크롤] 비디오에서 콘텐츠 섹션으로 이동 시작"
          );
          setPreviousSection("video");
          setCurrentSection("content");
          console.log("[FullPageMain/비디오스크롤] 콘텐츠 섹션으로 전환 완료");
        }
      } else if (deltaY < 0) {
        // 위로 스크롤
        console.log(`[FullPageMain/위스크롤] ${currentSection} → 이전 섹션`);
        if (currentSection === "video") {
          console.log("[FullPageMain/비디오스크롤] 비디오에서 텍스트로 복귀");
          setPreviousSection("video");
          setHeroCompleted(false); // 히어로로 돌아갈 때 리셋
          setCurrentSection("hero");
        }
      }

      setTimeout(() => {
        isScrolling = false;
      }, scrollDebounceTime);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      // 콘텐츠 섹션에서는 키보드로 위로 스크롤할 때만 비디오로 복귀
      if (currentSection === "content") {
        if (e.key === "ArrowUp" && window.scrollY === 0) {
          e.preventDefault();
          console.log(
            `[FullPageMain/키보드위] ${currentSection} → 비디오 섹션 (scrollY: ${window.scrollY})`
          );
          // 비디오 준비 상태 리셋
          setIsVideoReady(false);
          setPreviousSection("content");
          setIsTransitioning(true);
          setCurrentSection("video");

          setTimeout(() => {
            setIsTransitioning(false);
          }, 500); // 전환 지연 시간 추가
        }
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        console.log(`[FullPageMain/키보드아래] ${currentSection} → 다음 섹션`);
        if (currentSection === "video") {
          setPreviousSection("video");
          setCurrentSection("content");
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        console.log(`[FullPageMain/키보드위] ${currentSection} → 이전 섹션`);
        if (currentSection === "video") {
          setPreviousSection("video");
          setHeroCompleted(false); // 히어로로 돌아갈 때 리셋
          setCurrentSection("hero");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollResetTimeout) {
        clearTimeout(scrollResetTimeout);
      }
    };
  }, [
    currentSection,
    isTransitioning,
    heroCompleted,
    isVideoReady,
    videoSectionTime,
  ]);

  const renderSection = () => {
    switch (currentSection) {
      case "hero":
        return (
          <div>
            <HeroSection
              onTextComplete={handleTextComplete}
              initialTextIndex={
                previousSection === "video" || previousSection === "content"
                  ? 5
                  : 0
              }
            />
            {/* 비디오 프리로드 - 숨겨진 상태로 항상 렌더링 */}
            <div
              style={{
                position: "absolute",
                top: "-9999px",
                left: "-9999px",
                opacity: 0,
                pointerEvents: "none",
              }}
            >
              <VideoSection
                showVideoSection={false}
                onVideoEnd={handleVideoEnd}
                onVideoReady={handleVideoReady}
              />
            </div>
          </div>
        );
      case "video":
        return (
          <VideoSection
            showVideoSection={true}
            onVideoEnd={handleVideoEnd}
            onVideoReady={handleVideoReady}
          />
        );
      case "content":
        return (
          <div>
            <BlueSection
              isActive={true}
              onTransitionToVideo={handleBackToVideo}
            />
            <WhiteSection />
            <Footer />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative w-full ${
        currentSection === "content"
          ? "min-h-screen"
          : "h-screen overflow-hidden"
      }`}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSection}
          initial={
            currentSection === "content" && previousSection === "video"
              ? { opacity: 1, y: 0 }
              : currentSection === "video" && previousSection === "content"
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            currentSection === "video" && previousSection === "content"
              ? { opacity: 1, y: 0 }
              : currentSection === "content" && previousSection === "video"
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{
            duration:
              (currentSection === "content" && previousSection === "video") ||
              (currentSection === "video" && previousSection === "content")
                ? 0.3
                : 0.6,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FullPageMain;
