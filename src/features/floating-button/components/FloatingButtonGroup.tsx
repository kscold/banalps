"use client";

import { useState, useEffect, memo, useMemo, useCallback } from "react";
import FloatingButton from "./FloatingButton";
import * as styles from "./FloatingButtonGroup.css";
import { floatingButtonValues } from "@/shared/styles/responsive.constants";

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

  // 스크롤 위치에 따른 실제 Footer 컴포넌트와의 충돌 감지
  useEffect(() => {
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

      // 현재 뷰포트 크기를 기준으로 반응형 값 계산
      const viewportWidth = window.innerWidth;

      // 반응형 값 계산 함수
      const calculateResponsiveValue = (desktopPx: number, mobilePx: number) => {
        if (viewportWidth >= 1920) {
          return desktopPx; // 1920px+ 고정
        } else if (viewportWidth >= 1024) {
          return (desktopPx / 1920) * viewportWidth; // 데스크탑 비례
        } else if (viewportWidth >= 375) {
          return (mobilePx / 375) * viewportWidth; // 모바일 비례
        } else {
          return mobilePx; // 375px 미만 고정
        }
      };

      // 반응형 계산된 값들
      const floatingButtonHeight = calculateResponsiveValue(200, 120);
      const bottomOffset = calculateResponsiveValue(15, 20); // 데스크탑 bottom을 15px로 조정
      const threshold = calculateResponsiveValue(20, 20); // 푸터 만나기 전 여백 20px로 통일

      // 푸터가 화면에 보이기 시작하고 플로팅 버튼과 충돌할 때 감지
      const footerTop = footerRect.top;
      const floatingButtonBottom = windowHeight - bottomOffset;
      const floatingButtonTop = floatingButtonBottom - floatingButtonHeight;

      // 푸터의 상단이 플로팅 버튼 영역에 접근할 때 이동
      const shouldMoveAboveFooter = footerTop < floatingButtonBottom + threshold;

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
  }, [isMobile]);

  // 링크 데이터 메모이제이션
  const socialLinks = useMemo(
    () => ({
      navercalender:
        "https://map.naver.com/p/entry/place/1675437206?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202509220229&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0184587&lat=37.5132272&c=15.00,0,0,0,dh",
      kakao: "http://pf.kakao.com/_dTLxnxj",
      naverBlog: "https://blog.naver.com/banal_ps",
      youtube: "https://www.youtube.com/@banalps",
      line: "https://line.me/R/ti/p/@banalps",
      instagram: "https://www.instagram.com/banal_psooho",
    }),
    []
  );

  // 버튼 클릭 핸들러 메모이제이션
  const handleButtonClick = useCallback(
    (variant: string) => {
      if (variant === "close" || variant === "brand") {
        setIsAnimating(true);
        setTimeout(() => {
          setIsExpanded((prev) => !prev);
          setIsAnimating(false);
        }, 150);
      } else if (socialLinks[variant as keyof typeof socialLinks]) {
        window.open(socialLinks[variant as keyof typeof socialLinks], "_blank");
      }

      onButtonClick?.(variant);
    },
    [onButtonClick, socialLinks]
  );

  return (
    <div
      className={`${styles.floatingButtonContainer} ${
        isAboveFooter ? styles.aboveFooter : ""
      } ${className || ""}`}
      style={{
        bottom: (() => {
          if (!isAboveFooter) {
            // 기본 위치
            return isMobile
              ? floatingButtonValues.bottom.mobile
              : floatingButtonValues.bottom.desktop;
          }

          // 푸터 위에 위치할 때 - 반응형 계산
          const viewportWidth = window.innerWidth;

          if (viewportWidth >= 1920) {
            // 1920px+ 고정값
            return isMobile ? "576px" : "220px"; // 푸터 높이(200) + 여백(20)
          } else if (viewportWidth >= 1024) {
            // 데스크탑 비례 (1024-1919px)
            const footerHeight = (200 / 1920) * viewportWidth;
            const padding = (20 / 1920) * viewportWidth; // 여백 20px
            return `${footerHeight + padding}px`;
          } else if (viewportWidth >= 375) {
            // 모바일 비례 (375-1023px)
            const footerHeight = (556 / 375) * viewportWidth;
            const padding = (20 / 375) * viewportWidth; // 여백 20px
            return `${footerHeight + padding}px`;
          } else {
            // 375px 미만 고정
            return "576px"; // 556 + 20
          }
        })(),
        transition: "bottom 300ms cubic-bezier(0.4, 0, 0.2, 1)",
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
            isExpanded
              ? styles.buttonWrapperVisible
              : styles.buttonWrapperHidden
          } ${isExpanded ? styles.buttonStagger1 : styles.buttonStaggerClose1}`}
        >
          <FloatingButton
            variant="navercalender"
            onClick={() => handleButtonClick("navercalender")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded
              ? styles.buttonWrapperVisible
              : styles.buttonWrapperHidden
          } ${isExpanded ? styles.buttonStagger2 : styles.buttonStaggerClose2}`}
        >
          <FloatingButton
            variant="kakao"
            onClick={() => handleButtonClick("kakao")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded
              ? styles.buttonWrapperVisible
              : styles.buttonWrapperHidden
          } ${isExpanded ? styles.buttonStagger3 : styles.buttonStaggerClose3}`}
        >
          <FloatingButton
            variant="naverBlog"
            onClick={() => handleButtonClick("naverBlog")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded
              ? styles.buttonWrapperVisible
              : styles.buttonWrapperHidden
          } ${isExpanded ? styles.buttonStagger4 : styles.buttonStaggerClose4}`}
        >
          <FloatingButton
            variant="youtube"
            onClick={() => handleButtonClick("youtube")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded
              ? styles.buttonWrapperVisible
              : styles.buttonWrapperHidden
          } ${isExpanded ? styles.buttonStagger5 : styles.buttonStaggerClose5}`}
        >
          <FloatingButton
            variant="line"
            onClick={() => handleButtonClick("line")}
          />
        </div>
        <div
          className={`${styles.buttonWrapper} ${
            isExpanded
              ? styles.buttonWrapperVisible
              : styles.buttonWrapperHidden
          } ${isExpanded ? styles.buttonStagger6 : styles.buttonStaggerClose6}`}
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
