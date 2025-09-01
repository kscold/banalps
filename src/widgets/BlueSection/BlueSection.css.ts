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
  minHeight: "100vh",
  background: "#73D5FA",
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  overflow: "auto",
  paddingTop: "240px",
  paddingBottom: "240px",
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
  width: "calc(100% - 320px)", // 양쪽 160px씩
  maxWidth: "1600px", // 1920 - 320 = 1600
  minHeight: "1200px", // 최소 높이 설정
  margin: "0 160px",
  "@media": {
    "screen and (max-width: 1024px)": {
      width: "100%",
      height: "auto",
      margin: "0",
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
  },
})

// 이미지 카드 1 - 왼쪽 상단
export const imageCard1 = style({
  position: "absolute",
  width: "441px",
  height: "641px",
  left: "436px",
  top: "0px",
  borderRadius: "15px",
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "0ms",
  "@media": {
    "screen and (max-width: 1400px)": {
      width: "380px",
      height: "550px",
    },
    "screen and (max-width: 1280px)": {
      width: "350px",
      height: "500px",
    },
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

// 이미지 카드 2 - 오른쪽 하단 (가장 큰 카드)
export const imageCard2 = style({
  position: "absolute",
  width: "470px",
  height: "689px",
  top: "259px",
  left: "926px",
  borderRadius: "15px",
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "400ms",
  "@media": {
    "screen and (max-width: 1400px)": {
      width: "420px",
      height: "620px",
    },
    "screen and (max-width: 1280px)": {
      width: "380px",
      height: "560px",
    },
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

// 이미지 카드 3 - 오른쪽 상단 (작은 카드)
export const imageCard3 = style({
  position: "absolute",
  width: "327px",
  height: "267px",
  top: "681px",
  left: "210px",
  borderRadius: "15px",
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "800ms",
  "@media": {
    "screen and (max-width: 1400px)": {
      right: "250px",
    },
    "screen and (max-width: 1280px)": {
      width: "280px",
      height: "220px",
      right: "200px",
    },
    "screen and (max-width: 1024px)": {
      position: "relative",
      top: "auto",
      right: "auto",
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
  width: "317px",
  height: "468px",
  top: "766px",
  left: "574px",
  borderRadius: "15px",
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "1200ms",
  "@media": {
    "screen and (max-width: 1400px)": {
      left: "300px",
    },
    "screen and (max-width: 1280px)": {
      width: "270px",
      height: "400px",
      left: "250px",
    },
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
