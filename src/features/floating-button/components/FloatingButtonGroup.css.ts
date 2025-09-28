import { style } from "@vanilla-extract/css";
import { breakpoints, floatingButtonValues } from "../../../shared/styles/responsive.constants";

// Floating button group container - 완전 반응형 처리
export const floatingButtonContainer = style({
  position: "fixed",
  bottom: floatingButtonValues.bottom.desktop, // 기본 위치: 화면 하단에서 15px
  right: floatingButtonValues.right.desktop, // 헤더와 동일한 오른쪽 마진
  zIndex: 10000, // 푸터보다 높은 z-index
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      bottom: floatingButtonValues.bottom.desktopFixed, // 기본 위치
      right: floatingButtonValues.right.desktopFixed, // 헤더와 동일한 오른쪽 마진
    },
    [breakpoints.mobile]: {
      right: floatingButtonValues.right.mobile, // 모바일에서는 16px 마진
      bottom: floatingButtonValues.bottom.mobile, // 모바일 기본 위치
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
  flexDirection: "column", // 정상 순서
  gap: floatingButtonValues.gap.desktop, // 1920px 기준 12px
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  // 원래 위치에서 펼쳐지도록 설정
  position: "absolute",
  bottom: "calc(100% + 12px)", // 메인 버튼 위에 gap만큼 띄워서 시작
  left: "50%",
  transform: "translateX(-50%)",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: floatingButtonValues.gap.desktopFixed, // 1920px 이상에서 고정
      bottom: "calc(100% + 12px)", // 고정 gap
    },
    [breakpoints.mobile]: {
      gap: floatingButtonValues.gap.mobile, // 모바일에서 더 작게
      bottom: `calc(100% + ${floatingButtonValues.gap.mobile})`, // 모바일 gap
    },
  },
});

// Hidden state for buttons
export const hiddenButtons = style({
  opacity: 0,
  pointerEvents: "none",
  visibility: "hidden", // 추가: 완전히 숨김
  height: 0, // 추가: 높이도 0으로
  overflow: "hidden", // 추가: 오버플로우 숨김
});

// Visible state for buttons with stagger animation
export const visibleButtons = style({
  opacity: 1,
  pointerEvents: "auto",
  visibility: "visible", // 추가: visible로 복원
  height: "auto", // 추가: height 복원
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
