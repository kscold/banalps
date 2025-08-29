import { style } from "@vanilla-extract/css"

// 메인 컨테이너 - 스크롤 시 고정
export const heroContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  zIndex: 1,
})

// 배경 이미지 - 고정
export const backgroundImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  zIndex: 1,
})

// 비디오 컨테이너
export const vimeoContainer = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
})

// 비디오 iframe
export const vimeoIframe = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100vw",
  height: "56.25vw",
  minHeight: "100vh",
  minWidth: "177.77vh",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  zIndex: 1001,
})

// 비디오 섹션 - Hero 섹션과 같은 z-index에서 이어붙임
export const videoSection = style({
  position: "fixed", // fixed로 변경하여 Hero 섹션과 같은 위치에 겹침
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1, // Hero 섹션과 같은 z-index로 자연스러운 이어붙임
  backgroundColor: "#000",
})

// 비디오 오버레이
export const videoOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
})

// 콘텐츠 래퍼 - 피그마 디자인 위치에 고정 (오른쪽 아래쪽)
export const contentWrapper = style({
  position: "absolute",
  top: "50%",
  right: "10%", // 오른쪽에서 10% 위치
  transform: "translateY(-50%)", // 수직 중앙 정렬
  zIndex: 1000,
  width: "auto",
  maxWidth: "600px",
  display: "flex",
  alignItems: "flex-end", // 하단 정렬
  justifyContent: "flex-end", // 오른쪽 정렬
  padding: "0 2rem",
  "@media": {
    "screen and (max-width: 1024px)": {
      right: "5%",
      maxWidth: "500px",
    },
    "screen and (max-width: 768px)": {
      right: "2rem",
      padding: "0 1rem",
      maxWidth: "400px",
    },
  },
})

// 텍스트 콘텐츠 컨테이너 - 피그마 디자인 크기
export const textContent = style({
  width: "439px",
  height: "570px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: 1001,
  alignItems: "flex-end", // 오른쪽 정렬
  justifyContent: "center", // 중앙 정렬
  "@media": {
    "screen and (max-width: 1024px)": {
      width: "100%",
      maxWidth: "439px",
      alignItems: "flex-end",
    },
    "screen and (max-width: 768px)": {
      maxWidth: "90%",
    },
  },
})

// 텍스트 블록 - 기본 상태 (애니메이션 없음)
export const textBlock = style({
  position: "absolute", // 절대 위치
  top: "50%", // 중앙 정렬
  right: "0px",
  transform: "translateY(-50%)", // 수직 중앙 정렬
  opacity: 1, // 기본적으로 보임
  zIndex: 1002,
  width: "100%",
  textAlign: "right", // 오른쪽 정렬
})

// 인용문 라인 - 기본 상태 (애니메이션 없음)
export const quoteLine = style({
  position: "absolute", // 절대 위치
  top: "50%", // 중앙 정렬
  right: "0px",
  transform: "translateY(-50%)", // 수직 중앙 정렬
  opacity: 1, // 기본적으로 보임
  padding: "1.5rem 0",
  zIndex: 1002,
  width: "100%",
  textAlign: "right", // 오른쪽 정렬
})

// 스토리 텍스트 - S-Core Dream, Regular (200)
export const storyText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "20px",
  lineHeight: "150%", // 30px
  color: "#FFFFFF",
  fontWeight: "200",
  letterSpacing: "0%",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
  margin: 0,
  position: "relative",
  zIndex: 1003,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textAlign: "right", // 오른쪽 정렬
  display: "block",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

// 메인 인용문 - Pretendard, Light (300)
export const mainQuote = style({
  fontFamily: "'Pretendard', sans-serif",
  fontSize: "20px",
  fontWeight: "300",
  color: "#FFFFFF", // 흰색
  lineHeight: "30px",
  letterSpacing: "0%",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
  margin: 0,
  position: "relative",
  zIndex: 1003,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textAlign: "right", // 오른쪽 정렬
  display: "block",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

// 최종 인용문 컨테이너
export const finalQuote = style({
  borderTop: "2px solid rgba(255, 255, 255, 0.3)", // 흰색 테두리
  borderBottom: "2px solid rgba(255, 255, 255, 0.3)", // 흰색 테두리
  padding: "2rem 0",
  marginTop: "2rem",
})

// 최종 인용문 텍스트 - Pretendard, Light (300)
export const finalQuoteText = style({
  fontFamily: "'Pretendard', sans-serif",
  fontSize: "20px",
  fontWeight: "300",
  color: "#FFFFFF", // 흰색
  lineHeight: "30px",
  letterSpacing: "0%",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
  margin: "0 0 1rem 0",
  position: "relative",
  zIndex: 1003,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textAlign: "right", // 오른쪽 정렬
  display: "block",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

// 인용문 서브텍스트 - S-Core Dream, Regular (200)
export const quoteSubtext = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "20px",
  color: "#FFFFFF",
  fontWeight: "200",
  lineHeight: "150%", // 30px
  letterSpacing: "0%",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
  opacity: 1,
  margin: 0,
  position: "relative",
  zIndex: 1003,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textAlign: "right", // 오른쪽 정렬
  display: "block",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
  },
})

// 스크롤 화살표
export const scrollArrow = style({
  width: "24px",
  height: "24px",
  opacity: 0.8,
})

// 스크롤 텍스트
export const scrollText = style({
  fontSize: "0.8rem",
  fontWeight: "400",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  opacity: 0.8,
})

// 숨김 상태
export const hidden = style({
  opacity: 0,
})

// 오버레이
export const overlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
})
