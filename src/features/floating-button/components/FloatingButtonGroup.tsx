"use client";

import { useState, useEffect } from "react";
import FloatingButton from "./FloatingButton";
import * as styles from "./FloatingButtonGroup.css";

export interface FloatingButtonGroupProps {
  className?: string;
  onButtonClick?: (variant: string) => void;
}

export default function FloatingButtonGroup({
  className,
  onButtonClick,
}: FloatingButtonGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 클라이언트 사이드에서만 윈도우 크기 확인
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // 스크롤 위치에 따른 실제 Footer 컴포넌트와의 충돌 감지
  useEffect(() => {
    const handleScroll = () => {
      // 메인 페이지에서 Hero 섹션 상태 확인 (텍스트/비디오 영역에서는 푸터 감지 무시)
      const isMainPage = window.location.pathname === "/";
      if (isMainPage) {
        // BlueSection이 보이지 않으면 (텍스트/비디오 영역) 푸터 감지 무시
        const blueSectionOverlay = document.querySelector(
          '[class*="blueSectionOverlay"]'
        );
        const isBlueSectionVisible =
          blueSectionOverlay &&
          window.getComputedStyle(blueSectionOverlay).display !== "none";

        if (!isBlueSectionVisible) {
          console.log(
            "[FloatingButtonGroup/푸터감지] 메인페이지 텍스트/비디오 영역 - 푸터 감지 무시"
          );
          setIsAboveFooter(false);
          return;
        }
      }

      // Footer 컴포넌트를 더 정확하게 찾기 (실제 Footer.tsx 컴포넌트)
      const footer = document.querySelector('footer[data-footer="true"]');

      if (!footer) {
        // Footer 컴포넌트가 없다면 항상 기본 위치
        setIsAboveFooter(false);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 푸터가 실제로 화면에 보이기 시작할 때만 플로팅 버튼 이동
      const shouldMoveAboveFooter =
        footerRect.top > 0 && footerRect.top < windowHeight - 100;

      console.log(
        "[FloatingButtonGroup/푸터감지] isMainPage:",
        isMainPage,
        "footerTop:",
        footerRect.top,
        "shouldMove:",
        shouldMoveAboveFooter
      );

      setIsAboveFooter(shouldMoveAboveFooter);
    };

    // 스크롤 이벤트에 throttle 적용 (성능 최적화)
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // 초기 위치 설정
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  const handleButtonClick = (variant: string) => {
    console.log(`[FloatingButtonGroup] ${variant} 버튼 클릭됨`);

    if (variant === "close") {
      setIsExpanded(false);
    } else if (variant === "brand") {
      setIsExpanded(!isExpanded);
    } else {
      // 소셜 미디어 링크 처리
      const links: Record<string, string> = {
        navercalender:
          "https://map.naver.com/p/entry/place/1675437206?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202509220229&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0184587&lat=37.5132272&c=15.00,0,0,0,dh",
        kakao: "http://pf.kakao.com/_dTLxnxj",
        naverBlog: "https://blog.naver.com/banal_ps",
        youtube: "https://www.youtube.com/@banalps",
        line: "https://line.me/R/ti/p/@banalps",
        instagram: "https://www.instagram.com/banal_psooho",
      };

      if (links[variant]) {
        window.open(links[variant], "_blank");
      }
    }

    onButtonClick?.(variant);
  };

  return (
    <div
      className={`${styles.floatingButtonContainer} ${
        isAboveFooter ? styles.aboveFooter : ""
      } ${className || ""}`}
      style={{
        bottom: isAboveFooter
          ? isMobile
            ? "calc(120px + 20px)" // 모바일: 푸터 높이 120px + 여백 20px
            : "calc(200px + 40px)" // 데스크탑: 푸터 높이 200px + 여백 40px
          : isMobile
          ? "20px" // 모바일 기본 위치
          : "40px", // 데스크탑 기본 위치
        transition: "bottom 300ms ease-in-out",
      }}
    >
      {/* 확장 가능한 버튼 리스트 */}
      <div
        className={`${styles.expandableList} ${
          isExpanded ? styles.visibleButtons : styles.hiddenButtons
        }`}
      >
        {/* 소셜 미디어 버튼들 */}
        <FloatingButton
          variant="navercalender"
          onClick={() => handleButtonClick("navercalender")}
        />
        <FloatingButton
          variant="kakao"
          onClick={() => handleButtonClick("kakao")}
        />
        <FloatingButton
          variant="naverBlog"
          onClick={() => handleButtonClick("naverBlog")}
        />
        <FloatingButton
          variant="youtube"
          onClick={() => handleButtonClick("youtube")}
        />
        <FloatingButton
          variant="line"
          onClick={() => handleButtonClick("line")}
        />
        <FloatingButton
          variant="instagram"
          isActive={true}
          onClick={() => handleButtonClick("instagram")}
        />
      </div>

      {/* 메인 토글 버튼 (Brand 또는 Close) - 항상 흰색 배경 */}
      <FloatingButton
        variant={isExpanded ? "close" : "brand"}
        isActive={false} // 항상 false로 설정하여 흰색 배경 유지
        onClick={() => handleButtonClick(isExpanded ? "close" : "brand")}
      />
    </div>
  );
}
