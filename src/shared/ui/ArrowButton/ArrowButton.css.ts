import { style, keyframes } from "@vanilla-extract/css"

import { responsiveProperty, breakpoints } from "../../styles/responsive.css"

// 화살표 순환 애니메이션 - 오른쪽으로 사라진 후 왼쪽에서 다시 나타나며 원래 위치로 돌아옴
const arrowSlide = keyframes({
  "0%": { 
    transform: "translateX(0)",
    opacity: "1"
  },
  "40%": { 
    transform: "translateX(20px)",
    opacity: "0"
  },
  "50%": { 
    transform: "translateX(-20px)",
    opacity: "0"
  },
  "90%": { 
    transform: "translateX(0)",
    opacity: "1"
  },
  "100%": { 
    transform: "translateX(0)",
    opacity: "1"
  },
})

// 기본 버튼 스타일 (1920px 기준 반응형) - 텍스트 길이에 따라 자동 조정
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
  // width 제거 - 텍스트 길이에 따라 자동 조정
  minWidth: "auto", // 최소 너비 자동
  width: "auto", // 자동 너비
  gap: "8px !important", // 텍스트와 화살표 간격 항상 8px 고정
  // 화살표 동그라미 기준 고정 패딩 - !important로 강제 적용
  paddingTop: "12px !important", // 상하 8px 완전 고정
  paddingBottom: "12px !important", // 상하 8px 완전 고정
  paddingLeft: "16px !important", // 왼쪽 8px 완전 고정
  paddingRight: "8px !important", // 오른쪽 8px 완전 고정 (화살표 동그라미 기준)
  // 높이는 동그라미(28px) + 패딩(8px*2) = 44px로 고정
  minHeight: "44px", // 최소 높이 고정
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
    [breakpoints.mobile]: {
      // 모바일에서도 패딩은 8px 고정 유지 - !important로 강제
      paddingTop: "8px !important", // 8px 완전 고정
      paddingBottom: "8px !important", // 8px 완전 고정
      paddingLeft: "8px !important", // 8px 완전 고정
      paddingRight: "8px !important", // 8px 완전 고정 (화살표 기준)
      fontSize: "14px", // 20px * 0.7
      gap: "8px !important", // 8px 완전 고정
    },
  },
})

// 버튼 텍스트 (1920px 기준 반응형)
export const buttonText = style({
  color: "#272727",
  transition: "color 0.3s ease",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  letterSpacing: "0",
  whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
  lineHeight: "100%",
  flexShrink: 0, // 텍스트가 줄어들지 않도록
  ...responsiveProperty("fontSize", 20), // 1920px 기준 20px

  "@media": {
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
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  strokeWidth: "2",
  ...responsiveProperty("width", 18), // 1920px 기준 18px
  ...responsiveProperty("height", 18), // 1920px 기준 18px

  // 호버시 화살표 이동 애니메이션
  selectors: {
    [`${arrowButton}:hover &`]: {
      animation: `${arrowSlide} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    },
  },

  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      width: "13px", // 18px * 0.7
      height: "13px",
    },
  },
})

// Color Variant 스타일들
export const white = style({
  backgroundColor: "#FFFFFF",
  color: "#272727",
  ":hover": {
    backgroundColor: "#F8F9FA",
  },
})

export const blue = style({
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  ":hover": {
    backgroundColor: "#0EA5E9",
  },
})

// Style Variant 스타일들
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

// Color별 텍스트 스타일
export const whiteText = style({
  color: "#272727",
})

export const blueText = style({
  color: "#FFFFFF",
})

// Color별 화살표 컨테이너 스타일
export const whiteArrowContainer = style({
  backgroundColor: "#14AEFF", // 흰색 버튼에는 파란 동그라미
  // 호버 시 배경색 변화 제거
})

export const blueArrowContainer = style({
  backgroundColor: "#FFFFFF", // 파란색 버튼에는 흰 동그라미
  // 호버 시 배경색 변화 제거
})

// Color별 화살표 아이콘 스타일
export const whiteArrowIcon = style({
  color: "#FFFFFF", // 파란 동그라미 안에 흰 화살표
})

export const blueArrowIcon = style({
  color: "#14AEFF", // 흰 동그라미 안에 파란 화살표
})

// Secondary variant의 화살표 컨테이너 스타일 (기존)
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
  // medium 사이즈도 8px 패딩 고정 - 기본 arrowButton 스타일이 우선 적용되도록 패딩 제거
  // 패딩은 기본 arrowButton에서 8px로 고정되어 있음
  ...responsiveProperty("fontSize", 16), // 1920px 기준 16px만 유지

  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서는 패딩 오버라이드 금지 - fontSize만 조정
      fontSize: "11px", // 16px * 0.7
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

// 호버 시 화살표 애니메이션 (배경색 변화 제거)
export const arrowContainerHover = style({
  // 배경색 변화 제거 - 화살표 모션만 유지
})

