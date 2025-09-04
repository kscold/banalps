import { style } from "@vanilla-extract/css"
import { responsiveProperty, breakpoints } from "../../styles/responsive.css"

// 기본 버튼 스타일 (1920px 기준 반응형)
export const arrowButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "none",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  letterSpacing: "0",
  textDecoration: "none",
  outline: "none",
  position: "relative",
  overflow: "hidden",
  color: "#272727",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
  lineHeight: "100%",
  ...responsiveProperty("gap", 10), // 1920px 기준 10px
  ...responsiveProperty("width", 166), // 1920px 기준 166px
  ...responsiveProperty("height", 44), // 1920px 기준 44px
  ...responsiveProperty("paddingTop", 16), // 1920px 기준 16px
  ...responsiveProperty("paddingBottom", 16), // 1920px 기준 16px
  ...responsiveProperty("paddingLeft", 24), // 1920px 기준 24px
  ...responsiveProperty("paddingRight", 16), // 1920px 기준 16px
  ...responsiveProperty("borderRadius", 100), // 1920px 기준 100px
  ...responsiveProperty("fontSize", 20), // 1920px 기준 20px

  ":hover": {
    backgroundColor: "#F8F9FA",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  },

  ":active": {
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
  },

  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
  },

  "@media": {
    [breakpoints.tablet]: {
      // 태블릿에서 80% 크기
      width: "133px", // 166px * 0.8
      height: "35px", // 44px * 0.8
      paddingTop: "13px",
      paddingBottom: "13px", 
      paddingLeft: "19px",
      paddingRight: "13px",
      fontSize: "16px", // 20px * 0.8
      gap: "8px", // 10px * 0.8
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      width: "116px", // 166px * 0.7
      height: "31px", // 44px * 0.7
      paddingTop: "11px",
      paddingBottom: "11px",
      paddingLeft: "17px", 
      paddingRight: "11px",
      fontSize: "14px", // 20px * 0.7
      gap: "7px", // 10px * 0.7
    },
  },
})

// 버튼 텍스트 (1920px 기준 반응형)
export const buttonText = style({
  flex: "1",
  color: "#272727",
  transition: "color 0.3s ease",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  letterSpacing: "0",
  whiteSpace: "nowrap",
  lineHeight: "100%",
  ...responsiveProperty("fontSize", 20), // 1920px 기준 20px

  "@media": {
    [breakpoints.tablet]: {
      // 태블릿에서 80% 크기
      fontSize: "16px", // 20px * 0.8
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "14px", // 20px * 0.7
    },
  },
})

// 화살표 컨테이너 (1920px 기준 반응형)
export const arrowContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: "#14AEFF",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  flexShrink: 0,
  boxShadow: "0 4px 12px rgba(20, 174, 255, 0.25)",
  ...responsiveProperty("width", 28), // 1920px 기준 28px
  ...responsiveProperty("height", 28), // 1920px 기준 28px

  "@media": {
    [breakpoints.tablet]: {
      // 태블릿에서 80% 크기
      width: "22px", // 28px * 0.8
      height: "22px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      width: "20px", // 28px * 0.7
      height: "20px",
    },
  },
})

// 화살표 아이콘 (1920px 기준 반응형)
export const arrowIcon = style({
  color: "#FFFFFF",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  strokeWidth: "2",
  ...responsiveProperty("width", 18), // 1920px 기준 18px
  ...responsiveProperty("height", 18), // 1920px 기준 18px

  "@media": {
    [breakpoints.tablet]: {
      // 태블릿에서 80% 크기
      width: "14px", // 18px * 0.8
      height: "14px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      width: "13px", // 18px * 0.7
      height: "13px",
    },
  },
})

// Variant 스타일들
export const primary = style({
  borderColor: "#8B5CF6",
  color: "#272727",
})

export const secondary = style({
  borderColor: "#6B7280",
  color: "#6B7280",

  ":hover": {
    backgroundColor: "rgba(107, 114, 128, 0.05)",
    borderColor: "#4B5563",
  },
})

// Secondary variant의 화살표 컨테이너 스타일
export const secondaryArrowContainer = style({
  backgroundColor: "#6B7280",
})

// Size 스타일들
export const small = style({
  padding: "12px 20px",
  fontSize: "14px",
  gap: "8px",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "10px 16px",
      fontSize: "12px",
      gap: "6px",
    },
  },
})

export const medium = style({
  ...responsiveProperty("paddingTop", 12), // 1920px 기준 12px
  ...responsiveProperty("paddingBottom", 12), // 1920px 기준 12px
  ...responsiveProperty("paddingLeft", 16), // 1920px 기준 16px
  ...responsiveProperty("paddingRight", 16), // 1920px 기준 16px
  ...responsiveProperty("fontSize", 16), // 1920px 기준 16px
  ...responsiveProperty("gap", 12), // 1920px 기준 12px

  "@media": {
    [breakpoints.tablet]: {
      // 태블릿에서 80% 크기
      paddingTop: "10px", // 12px * 0.8
      paddingBottom: "10px",
      paddingLeft: "13px", // 16px * 0.8
      paddingRight: "13px",
      fontSize: "13px", // 16px * 0.8
      gap: "10px", // 12px * 0.8
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      paddingTop: "8px", // 12px * 0.7
      paddingBottom: "8px",
      paddingLeft: "11px", // 16px * 0.7
      paddingRight: "11px",
      fontSize: "11px", // 16px * 0.7
      gap: "8px", // 12px * 0.7
    },
  },
})

export const large = style({
  padding: "20px 32px",
  fontSize: "18px",
  gap: "16px",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "18px 28px",
      fontSize: "16px",
      gap: "14px",
    },
  },
})

// Size별 화살표 컨테이너 스타일
export const smallArrowContainer = style({
  width: "22px",
  height: "22px",
})

export const smallArrowIcon = style({
  width: "11px",
  height: "11px",
})

export const largeArrowContainer = style({
  width: "32px",
  height: "32px",
})

export const largeArrowIcon = style({
  width: "16px",
  height: "16px",
})

// 호버 시 화살표 애니메이션
export const arrowContainerHover = style({
  ":hover": {
    background: "#0EA5E9",
    boxShadow: "0 6px 16px rgba(20, 174, 255, 0.35)",
  },
  selectors: {
    [`${arrowButton}:hover &`]: {
      background: "#0EA5E9",
      boxShadow: "0 6px 16px rgba(20, 174, 255, 0.35)",
    },
  },
})

// 화살표 호버 시 이동 애니메이션
export const arrowIconHover = style({
  selectors: {
    [`${arrowContainer}:hover &`]: {
      transform: "translateX(4px)",
    },
  },
})
