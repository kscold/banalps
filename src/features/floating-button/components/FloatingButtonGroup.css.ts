import { style } from "@vanilla-extract/css"
import { vw, breakpoints } from "../../../shared/styles/responsive.css"

// Floating button group container - 1920px 기준 반응형 적용
export const floatingButtonContainer = style({
  position: "fixed",
  bottom: vw(40), // 1920px 기준 40px
  right: vw(40), // 1920px 기준 40px
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vw(12), // 1920px 기준 12px
  zIndex: 9999,
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      bottom: "40px",
      right: "40px",
      gap: "12px",
    },
    [breakpoints.tablet]: {
      bottom: "32px", // 태블릿에서 80% 크기
      right: "32px",
      gap: "10px",
    },
    [breakpoints.mobile]: {
      bottom: "20px", // 모바일에서 50% 크기
      right: "20px",
      gap: "8px",
    },
  },
})

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
    [breakpoints.tablet]: {
      gap: "10px", // 태블릿에서 조금 작게
    },
    [breakpoints.mobile]: {
      gap: "8px", // 모바일에서 더 작게
    },
  },
})

// Hidden state for buttons
export const hiddenButtons = style({
  opacity: 0,
  transform: "translateY(20px) scale(0.8)",
  pointerEvents: "none",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
})

// Visible state for buttons
export const visibleButtons = style({
  opacity: 1,
  transform: "translateY(0) scale(1)",
  pointerEvents: "auto",
})