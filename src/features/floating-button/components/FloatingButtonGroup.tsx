"use client";

import { useState, useEffect, memo, useMemo, useCallback } from "react";
import FloatingButton from "./FloatingButton";
import * as styles from "./FloatingButtonGroup.css";

export interface FloatingButtonGroupProps {
  className?: string;
  onButtonClick?: (variant: string) => void;
}

function FloatingButtonGroupComponent({
  className,
  onButtonClick,
}: FloatingButtonGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  // 메인 페이지 여부 캐싱
  const isMainPage = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.location.pathname === "/";
  }, []);

  // 스크롤 위치에 따른 실제 Footer 컴포넌트와의 충돌 감지
  useEffect(() => {
    // 메인 페이지에서는 푸터 감지 비활성화
    if (isMainPage) {
      setIsAboveFooter(false);
      return;
    }

    const handleScroll = () => {
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
  }, [isMainPage]);

  // 링크 데이터 메모이제이션
  const socialLinks = useMemo(() => ({
    navercalender:
      "https://map.naver.com/p/entry/place/1675437206?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202509220229&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0184587&lat=37.5132272&c=15.00,0,0,0,dh",
    kakao: "http://pf.kakao.com/_dTLxnxj",
    naverBlog: "https://blog.naver.com/banal_ps",
    youtube: "https://www.youtube.com/@banalps",
    line: "https://line.me/R/ti/p/@banalps",
    instagram: "https://www.instagram.com/banal_psooho",
  }), []);

  // 버튼 클릭 핸들러 메모이제이션
  const handleButtonClick = useCallback((variant: string) => {
    if (variant === "close" || variant === "brand") {
      setIsAnimating(true);
      setTimeout(() => {
        setIsExpanded(prev => !prev);
        setIsAnimating(false);
      }, 150);
    } else if (socialLinks[variant as keyof typeof socialLinks]) {
      window.open(socialLinks[variant as keyof typeof socialLinks], "_blank");
    }

    onButtonClick?.(variant);
  }, [onButtonClick, socialLinks]);

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
        {/* 소셜 미디어 버튼들 - 포포퐁 애니메이션 적용 */}
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded ? styles.buttonWrapperVisible : styles.buttonWrapperHidden
          } ${
            isExpanded ? styles.buttonStagger1 : styles.buttonStaggerClose1
          }`}
        >
          <FloatingButton
            variant="navercalender"
            onClick={() => handleButtonClick("navercalender")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded ? styles.buttonWrapperVisible : styles.buttonWrapperHidden
          } ${
            isExpanded ? styles.buttonStagger2 : styles.buttonStaggerClose2
          }`}
        >
          <FloatingButton
            variant="kakao"
            onClick={() => handleButtonClick("kakao")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded ? styles.buttonWrapperVisible : styles.buttonWrapperHidden
          } ${
            isExpanded ? styles.buttonStagger3 : styles.buttonStaggerClose3
          }`}
        >
          <FloatingButton
            variant="naverBlog"
            onClick={() => handleButtonClick("naverBlog")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded ? styles.buttonWrapperVisible : styles.buttonWrapperHidden
          } ${
            isExpanded ? styles.buttonStagger4 : styles.buttonStaggerClose4
          }`}
        >
          <FloatingButton
            variant="youtube"
            onClick={() => handleButtonClick("youtube")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded ? styles.buttonWrapperVisible : styles.buttonWrapperHidden
          } ${
            isExpanded ? styles.buttonStagger5 : styles.buttonStaggerClose5
          }`}
        >
          <FloatingButton
            variant="line"
            onClick={() => handleButtonClick("line")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded ? styles.buttonWrapperVisible : styles.buttonWrapperHidden
          } ${
            isExpanded ? styles.buttonStagger6 : styles.buttonStaggerClose6
          }`}
        >
          <FloatingButton
            variant="instagram"
            isActive={true}
            onClick={() => handleButtonClick("instagram")}
          />
        </div>
      </div>

      {/* 메인 토글 버튼 (Brand 또는 Close) - 항상 흰색 배경 */}
      <FloatingButton
        variant={isExpanded ? "close" : "brand"}
        isActive={false} // 항상 false로 설정하여 흰색 배경 유지
        isAnimating={isAnimating}
        onClick={() => handleButtonClick(isExpanded ? "close" : "brand")}
      />
    </div>
  );
}

// React.memo로 컴포넌트 메모이제이션
export default memo(FloatingButtonGroupComponent);
