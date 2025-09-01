import { style, keyframes } from "@vanilla-extract/css"

// 페이드인 상승 애니메이션
const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(80px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
})

// 메인 파란색 섹션
export const blueSection = style({
  width: "100%",
  background: "#73D5FA",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)",
})

// 보이기 상태
export const visible = style({
  opacity: 1,
  transform: "translateY(0)",
})

// 이미지 카드 섹션 - 중앙 컨테이너
export const imageCardsSection = style({
  position: "relative",
  width: "100%",
  maxWidth: "1600px",
  aspectRatio: "1600 / 950",
  margin: "240px auto",
  "@media": {
    "screen and (max-width: 1600px)": {
      width: "calc(100% - 320px)",
      margin: "240px auto",
    },
    "screen and (max-width: 1024px)": {
      width: "100%",
      height: "auto",
      margin: "80px 0",
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      overflow: "visible",
    },
  },
})

// 이미지 카드 1 - 왼쪽 상단
export const imageCard1 = style({
  position: "absolute",
  width: "27.5625%", // 441/1600
  aspectRatio: "441 / 641",
  left: "27.25%", // 436/1600
  top: "0%",
  borderRadius: "15px",
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "0ms",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "20px auto",
      width: "90%",
      maxWidth: "400px",
      height: "auto",
      aspectRatio: "441 / 641",
    },
  },
})

// 이미지 카드 2 - 오른쪽 (가장 큰 카드)
export const imageCard2 = style({
  position: "absolute",
  width: "29.375%", // 470/1600
  aspectRatio: "470 / 689",
  top: "27.26%", // 259/950
  left: "57.875%", // 926/1600
  borderRadius: "15px",
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "400ms",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "relative",
      top: "auto",
      right: "auto",
      margin: "20px auto",
      width: "90%",
      maxWidth: "400px",
      height: "auto",
      aspectRatio: "470 / 689",
    },
  },
})

// 이미지 카드 3 - 왼쪽 하단 (작은 가로 카드)
export const imageCard3 = style({
  position: "absolute",
  width: "20.4375%", // 327/1600
  aspectRatio: "327 / 267",
  top: "71.68%", // 681/950
  left: "13.125%", // 210/1600
  borderRadius: "15px",
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "800ms",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "20px auto",
      width: "90%",
      maxWidth: "400px",
      height: "auto",
      aspectRatio: "327 / 267",
    },
  },
})

// 이미지 카드 4 - 중앙 하단
export const imageCard4 = style({
  position: "absolute",
  width: "19.8125%", // 317/1600
  aspectRatio: "317 / 468",
  top: "80.63%", // 766/950
  left: "35.875%", // 574/1600
  borderRadius: "15px",
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "1200ms",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "relative",
      bottom: "auto",
      left: "auto",
      margin: "20px auto",
      width: "90%",
      maxWidth: "400px",
      height: "auto",
      aspectRatio: "317 / 468",
    },
  },
})

// 카드 내부 이미지
export const cardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "15px",
})

// 카드 하단 텍스트
export const cardText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "14px",
  fontWeight: "500",
  color: "#FFFFFF",
  textAlign: "center",
  opacity: 0.95,
  letterSpacing: "0.3px",
  marginTop: "auto",
  padding: "8px 0 4px",
})

// 카드 번호 (핑크색 원)
export const cardNumber = style({
  position: "absolute",
  top: "-15px",
  left: "-15px",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "#FF1493",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "700",
  boxShadow: "0 4px 12px rgba(255, 20, 147, 0.4)",
  zIndex: 2,
})

// 이전 스타일 호환성을 위한 더미 export
export const imageGridContainer = style({
  display: "none",
})

export const imageGrid = style({
  display: "none",
})

export const imageCard = style({
  display: "none",
})

export const imageItem = style({
  display: "none",
})

export const gridImage = style({
  display: "none",
})

export const imageText = style({
  display: "none",
})

export const imageGridSection = style({
  display: "none",
})

// RE.YOU 텍스트 섹션
export const reYouSection = style({
  position: "relative",
  width: "100%",
  height: "748px",
  maxWidth: "1600px",
  minHeight: "748px",
  margin: "120px auto 240px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "20px",
  "@media": {
    "screen and (max-width: 1024px)": {
      margin: "0 20px 80px",
      minHeight: "auto",
      padding: "60px 0",
    },
  },
})

// RE.YOU 타이틀
export const reYouTitle = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  fontSize: "70px",
  lineHeight: "100%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  position: "relative",
  zIndex: 1,
  textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "36px",
    },
  },
})

// 한글 서브타이틀
export const reYouSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  opacity: 0.95,
  position: "relative",
  zIndex: 1,
  textShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "16px",
    },
  },
})

// 그래피티 배경 이미지
export const graffitiBackground = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  marginTop: "48px",
  top: 0,
  left: 0,
  objectFit: "contain",
  objectPosition: "center",
  pointerEvents: "none",
  zIndex: 0,
})
