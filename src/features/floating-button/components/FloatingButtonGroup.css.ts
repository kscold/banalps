import { style } from "@vanilla-extract/css";

import { vw, breakpoints, mvw } from "../../../shared/styles/responsive.css";

// Floating button group container - responsiveContainer(1600) 따르도록 수정
export const floatingButtonContainer = style({
  position: "fixed",
  bottom: vw(40), // 기본 위치: 화면 하단에서 40px
  right: vw(160), // 1600px 컨테이너 기준 160px (좌우 여백과 일치)
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vw(12), // 1920px 기준 12px
  zIndex: 10000, // 푸터보다 높은 z-index
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      bottom: "40px", // 기본 위치
      right: "160px", // 1600px 컨테이너의 우측 여백
      gap: "12px",
    },
    // 1600px 이하에서 동적 계산
    // [`screen and (max-width: 1600px)`]: {
    //   right: "calc((100vw - min(100vw - 320px, 1600px)) / 2 + 40px)", // 컨테이너 우측 여백 + 40px
    // },
    [breakpoints.mobile]: {
      right: mvw(16),
      bottom: "20px", // 모바일 기본 위치
      gap: "8px",
    },
  },
});

// 푸터 위에 있을 때의 추가 스타일
export const aboveFooter = style({
  // 인라인 스타일로 동적 처리하므로 빈 스타일
});

// Expandable button list - 1920px 기준 적용
export const expandableList = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(12), // 1920px 기준 12px
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      gap: "8px", // 모바일에서 더 작게
    },
  },
});

// Hidden state for buttons
export const hiddenButtons = style({
  opacity: 0,
  transform: "translateY(20px) scale(0.8)",
  pointerEvents: "none",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
});

// Visible state for buttons
export const visibleButtons = style({
  opacity: 1,
  transform: "translateY(0) scale(1)",
  pointerEvents: "auto",
});
