/**
 * Responsive constants for vanilla-extract CSS files
 * These are plain values that can be imported by .css.ts files
 */

// Design base sizes
export const DESIGN_BASE_WIDTH = 1920
export const MOBILE_BASE_WIDTH = 375

// Common breakpoints
export const breakpoints = {
  mobile: "screen and (max-width: 1023px)",
  mobileSmall: "screen and (max-width: 767px)",
  tablet: "screen and (min-width: 768px) and (max-width: 1023px)",
  desktop: "screen and (min-width: 1024px) and (max-width: 1919px)",
  desktopLarge: "screen and (min-width: 1920px)",
} as const

// Header margins for alignment (calculated from header component)
export const headerMargins = {
  desktop: "160px", // Fixed margin for 1920px+
  mobile: "16px", // Fixed margin for mobile
} as const

// Pre-calculated responsive values for floating button positioning
export const floatingButtonValues = {
  // Right positioning (matches header right margin)
  right: {
    desktop: "160px", // 1024~1919px: 헤더와 동일하게 고정 160px
    desktopFixed: "160px", // 1920px+ fixed
    mobile: `${(16 / MOBILE_BASE_WIDTH) * 100}vw`, // 모바일: mvw(16) 헤더와 동일
  },
  // Bottom positioning
  bottom: {
    desktop: `${(80 / DESIGN_BASE_WIDTH) * 100}vw`, // 40px / 1920px * 100vw (높이 증가)
    desktopFixed: "80px", // 1920px+ fixed (높이 증가)
    mobile: `${(40 / MOBILE_BASE_WIDTH) * 100}vw`, // 40px / 375px * 100vw
  },
  // Gap between buttons
  gap: {
    desktop: `${(12 / DESIGN_BASE_WIDTH) * 100}vw`, // 12px / 1920px * 100vw
    desktopFixed: "12px", // 1920px+ fixed
    mobile: `${(8 / MOBILE_BASE_WIDTH) * 100}vw`, // 8px / 375px * 100vw
  },
  // Minimum height
  minHeight: {
    desktop: `${(200 / DESIGN_BASE_WIDTH) * 100}vw`, // 200px / 1920px * 100vw
    desktopFixed: "200px", // 1920px+ fixed
    mobile: `${(120 / MOBILE_BASE_WIDTH) * 100}vw`, // 120px / 375px * 100vw
  },
  // Button size (반응형 크기)
  buttonSize: {
    desktop: `${(60 / DESIGN_BASE_WIDTH) * 100}vw`, // 60px / 1920px * 100vw
    desktopFixed: "60px", // 1920px+ fixed
    mobile: `${(50 / MOBILE_BASE_WIDTH) * 100}vw`, // 50px / 375px * 100vw
  },
} as const
