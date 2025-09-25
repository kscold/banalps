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
  pointerEvents: "none",
});

// Visible state for buttons with stagger animation
export const visibleButtons = style({
  opacity: 1,
  pointerEvents: "auto",
});

// 버튼 포포퐁 애니메이션
export const buttonWrapper = style({
  transformOrigin: "center bottom",
  transition: "all 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55)", // spring effect
});

// 버튼 숨김 상태 (아래에 숨김)
export const buttonWrapperHidden = style({
  opacity: 0,
  transform: "translateY(40px) scale(0.3)",
});

// 버튼 표시 상태 (위로 튀어오름)
export const buttonWrapperVisible = style({
  opacity: 1,
  transform: "translateY(0) scale(1)",
});

// 개별 버튼 딜레이 (아래에서부터 위로 포포퐁)
export const buttonStagger1 = style({
  transitionDelay: "300ms", // 맨 위 버튼이 마지막에
});

export const buttonStagger2 = style({
  transitionDelay: "240ms",
});

export const buttonStagger3 = style({
  transitionDelay: "180ms",
});

export const buttonStagger4 = style({
  transitionDelay: "120ms",
});

export const buttonStagger5 = style({
  transitionDelay: "60ms",
});

export const buttonStagger6 = style({
  transitionDelay: "0ms", // 맨 아래 버튼(인스타그램)이 처음에
});

// 닫기 시 역방향 애니메이션
export const buttonWrapperClosing = style({
  transition: "all 250ms cubic-bezier(0.4, 0, 1, 1)", // faster closing
});

// 닫기 시 개별 버튼 딜레이 (위에서부터 아래로)
export const buttonStaggerClose1 = style({
  transitionDelay: "0ms", // 맨 위가 먼저 사라짐
});

export const buttonStaggerClose2 = style({
  transitionDelay: "30ms",
});

export const buttonStaggerClose3 = style({
  transitionDelay: "60ms",
});

export const buttonStaggerClose4 = style({
  transitionDelay: "90ms",
});

export const buttonStaggerClose5 = style({
  transitionDelay: "120ms",
});

export const buttonStaggerClose6 = style({
  transitionDelay: "150ms", // 맨 아래가 마지막에 사라짐
});
