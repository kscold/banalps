"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import HeroSection from "../widgets/Hero/HeroSection";
import { VideoSection } from "../widgets/Hero/VideoSection";
import BlueSection from "../widgets/BlueSection";
import WhiteSection from "../widgets/WhiteSection/WhiteSection";
import Footer from "../shared/ui/Footer/Footer";

const FullPageMain = () => {
  const [currentSection, setCurrentSection] = useState(0); // 0: hero, 1: video, 2: content
  const [heroActive, setHeroActive] = useState(true);
  const [videoActive, setVideoActive] = useState(false);
  const [contentActive, setContentActive] = useState(false);
  const [heroTextIndex, setHeroTextIndex] = useState(0); // 히어로 섹션의 현재 텍스트 인덱스
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  // 초기 스크롤 위치를 0으로 설정
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 히어로 섹션 활성화 시 스크롤바 보이기
  useEffect(() => {
    if (heroActive) {
      document.body.classList.add("show-scrollbar");
    } else {
      document.body.classList.remove("show-scrollbar");
    }

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("show-scrollbar");
    };
  }, [heroActive]);

  // 콘텐츠 섹션 활성화 시 스크롤 위치 초기화
  useEffect(() => {
    if (contentActive) {
      // 콘텐츠가 활성화되면 스크롤을 맨 위로 설정
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, -90);

      // 추가로 requestAnimationFrame으로 다음 프레임에서도 리셋
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [contentActive]);

  // Hero에서 비디오로 전환 핸들러
  const handleHeroComplete = () => {
    console.log("[FullPageMain] Hero 완료 - 비디오로 전환");

    // 부드러운 전환을 위해 약간의 오버랩 시간 제공
    setTimeout(() => {
      setVideoActive(true);
    }, 100);

    setTimeout(() => {
      setHeroActive(false);
      setCurrentSection(1);
      setHeroTextIndex(4); // 마지막 텍스트 인덱스로 설정 (5개 텍스트이므로 인덱스는 0~4)
    }, 300);

    console.log("[FullPageMain] 비디오 섹션 활성화됨");
  };

  // 비디오에서 콘텐츠로 전환 핸들러
  const handleVideoComplete = () => {
    console.log("[FullPageMain] 비디오 종료 - 콘텐츠로 전환");

    // 즉시 스크롤 리셋 (전환 전에 먼저)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    // 먼저 섹션 변경 (scale 애니메이션 시작)
    setCurrentSection(2);

    // 부드러운 전환 효과
    setTimeout(() => {
      // 콘텐츠 활성화 직전에 한 번 더 리셋
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      setContentActive(true);
    }, 100);

    setTimeout(() => {
      setVideoActive(false);
      // 비디오가 사라진 후에도 한 번 더 리셋
      window.scrollTo(0, 0);
    }, 400);
  };

  // 비디오 섹션 최소 시간 설정
  const [videoMinTimeElapsed, setVideoMinTimeElapsed] = useState(false);

  // 비디오 섹션에서 body overflow 제어
  useEffect(() => {
    if (videoActive) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [videoActive]);

  // 비디오 섹션 활성화 시 타이머 시작
  useEffect(() => {
    if (currentSection === 1 && videoActive) {
      // 비디오 섹션이 활성화될 때마다 타이머 리셋
      setVideoMinTimeElapsed(false);

      const timer = setTimeout(() => {
        setVideoMinTimeElapsed(true);
      }, 2000); // 최소 2초로 단축 (기존 3초)

      return () => clearTimeout(timer);
    } else if (currentSection !== 1) {
      setVideoMinTimeElapsed(false);
    }
  }, [currentSection, videoActive]);

  // 섹션 간 전환 처리
  useEffect(() => {
    let isTransitioning = false;

    const handleSectionScroll = (e: WheelEvent) => {
      console.log(
        `[FullPageMain/스크롤] currentSection: ${currentSection}, deltaY: ${e.deltaY}, isTransitioning: ${isTransitioning}`
      );

      if (isTransitioning) return;

      // 콘텐츠 섹션에서 위로 스크롤 시 비디오로 돌아가기
      if (currentSection === 2) {
        // 현재 스크롤 위치 확인
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // 블루섹션 최상단 근처(50px 이내)에서만 위로 스크롤 시 비디오로 전환
        if (e.deltaY < 0 && scrollTop < 50) {
          // 위로 스크롤 - 비디오로 돌아가기
          e.preventDefault();
          e.stopPropagation(); // 이벤트 전파 중지
          isTransitioning = true;

          console.log("[FullPageMain] 콘텐츠 최상단 → 비디오");

          // 동일한 전환 모션 적용
          setCurrentSection(1); // 먼저 섹션 변경

          setTimeout(() => {
            setVideoActive(true);
          }, 100);

          setTimeout(() => {
            setContentActive(false);
          }, 400);

          // 스크롤 위치를 비디오 섹션으로 이동
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setTimeout(() => {
            isTransitioning = false;
          }, 800);
        }
        // 그 외의 경우는 자유 스크롤 허용
        return;
      }

      // 비디오 섹션에서 스크롤 처리
      if (currentSection === 1) {
        e.preventDefault();
        e.stopPropagation(); // 이벤트 전파 중지

        // 스크롤 감도 조정 - 작은 스크롤에도 반응
        const scrollThreshold = Math.abs(e.deltaY) > 30; // 30px 이상 스크롤 시 전환

        if (!scrollThreshold) {
          return;
        }

        // 최소 시간이 지나지 않았으면 스크롤 무시 (아래로 스크롤할 때만)
        if (!videoMinTimeElapsed && e.deltaY > 0) {
          console.log("[FullPageMain] 비디오 최소 시간 미경과");
          return;
        }

        isTransitioning = true;

        if (e.deltaY > 0 && videoMinTimeElapsed) {
          // 아래로 스크롤 - 콘텐츠로
          console.log("[FullPageMain] 비디오 → 콘텐츠 전환");
          handleVideoComplete();
        } else if (e.deltaY < 0) {
          // 위로 스크롤 - Hero로 (마지막 텍스트에서 시작) - 동일한 모션 적용
          setCurrentSection(0); // 먼저 섹션 변경 (scale 애니메이션 시작)

          setTimeout(() => {
            setHeroActive(true);
          }, 100);

          setTimeout(() => {
            setVideoActive(false);
            setHeroTextIndex(4); // 마지막 텍스트 인덱스로 설정 (5개 텍스트이므로 인덱스는 0~4)
          }, 400);

          console.log("[FullPageMain] 비디오 → Hero (마지막 텍스트)");
        }

        setTimeout(() => {
          isTransitioning = false;
        }, 600); // 전환 대기 시간도 단축
      }

      // 히어로 섹션에서 스크롤 처리 - 텍스트 내부 스크롤만 허용
      if (currentSection === 0) {
        // 히어로 섹션에서는 텍스트 내부 스크롤만 허용하고 섹션 전환은 차단
        // HeroSection의 내부 스크롤 로직이 작동하도록 함
        return;
      }
    };

    window.addEventListener("wheel", handleSectionScroll, {
      passive: false,
      capture: true,
    });

    return () => {
      window.removeEventListener("wheel", handleSectionScroll, {
        capture: true,
      });
    };
  }, [currentSection, videoMinTimeElapsed]);

  // 섹션 전환 애니메이션 상태
  const heroScale = heroActive ? 1 : 0.95;
  const heroOpacity = heroActive ? 1 : 0;
  // 비디오 섹션은 들어올 때 1.05→1, 나갈 때 1→0.95로 scale 변경
  const videoScale =
    currentSection === 1 ? 1 : currentSection === 0 ? 1.05 : 0.95;
  const videoOpacity = videoActive ? 1 : 0;

  // 비디오 종료 핸들러
  const handleVideoEnd = () => {
    console.log("[FullPageMain] 비디오 종료");
    handleVideoComplete();
  };

  // 비디오 준비 핸들러
  const handleVideoReady = () => {
    console.log("[FullPageMain] 비디오 준비 완료");
  };

  return (
    <div ref={containerRef} className="relative">
      {/* 고정 레이어 - 히어로와 비디오 */}
      <div
        className="fixed top-0 left-0 w-full h-screen"
        style={{
          zIndex: 1,
          pointerEvents: contentActive ? "none" : "auto" // 컨텐츠가 보이면 터치 비활성화
        }}
      >
        {/* 백그라운드 레이어 제거 - 배경 이미지가 보이도록 */}

        {/* 히어로 섹션 */}
        <motion.div
          ref={heroRef}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: heroOpacity,
            scale: heroScale,
          }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96], // cubic-bezier
          }}
          style={{
            zIndex: heroActive ? 3 : 2,
            transformOrigin: "center center",
          }}
        >
          <HeroSection
            onTextComplete={handleHeroComplete}
            isActive={heroActive}
            initialTextIndex={heroTextIndex}
          />
        </motion.div>

        {/* 비디오 섹션 */}
        <motion.div
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: videoOpacity,
            scale: videoScale,
          }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{
            zIndex: videoActive ? 4 : 3,
            backgroundColor: "#000",
            transformOrigin: "center center",
          }}
        >
          {videoActive && (
            <VideoSection
              showVideoSection={true}
              onVideoEnd={handleVideoEnd}
              onVideoReady={handleVideoReady}
            />
          )}
        </motion.div>
      </div>

      {/* 콘텐츠 섹션 - 비디오 완료 후에만 렌더링 */}
      {contentActive && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 100, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.2,
          }}
          style={{
            position: "relative",
            zIndex: 10,
            backgroundColor: "white",
            minHeight: "100vh",
            paddingTop: 0, // 상단 여백 제거
            marginTop: 0, // 상단 마진 제거
            top: 0, // 최상단에 위치
          }}
        >
          <BlueSection isActive={true} />
          <WhiteSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default FullPageMain;
