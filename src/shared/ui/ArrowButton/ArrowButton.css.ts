import { style } from "@vanilla-extract/css"

// 기본 버튼 스타일
export const arrowButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  width: "166px",
  height: "44px",
  padding: "16px 16px 16px 24px",
  border: "none",
  borderRadius: "100px",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "100%",
  letterSpacing: "0",
  textDecoration: "none",
  outline: "none",
  position: "relative",
  overflow: "hidden",
  color: "#272727",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",

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
    "screen and (max-width: 768px)": {
      minWidth: "160px",
      height: "50px",
      padding: "12px 12px 12px 20px",
      fontSize: "18px",
      gap: "12px",
    },
    "screen and (max-width: 480px)": {
      minWidth: "140px",
      height: "44px",
      padding: "10px 10px 10px 16px",
      fontSize: "16px",
      gap: "10px",
    },
  },
})

// 버튼 텍스트
export const buttonText = style({
  flex: "1",
  color: "#272727",
  transition: "color 0.3s ease",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "100%",
  letterSpacing: "0",
  whiteSpace: "nowrap",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "16px",
    },
  },
})

// 화살표 컨테이너
export const arrowContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  background: "#14AEFF",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  flexShrink: 0,
  boxShadow: "0 4px 12px rgba(20, 174, 255, 0.25)",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "32px",
      height: "32px",
    },
    "screen and (max-width: 480px)": {
      width: "28px",
      height: "28px",
    },
  },
})

// 화살표 아이콘
export const arrowIcon = style({
  width: "18px",
  height: "18px",
  color: "#FFFFFF",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  strokeWidth: "2",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "16px",
      height: "16px",
    },
    "screen and (max-width: 480px)": {
      width: "14px",
      height: "14px",
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
  padding: "12px 16px 12px 16px",
  fontSize: "16px",
  gap: "12px",
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
