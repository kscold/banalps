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
  maxWidth: "1600px",
  aspectRatio: "1600 / 748",
  margin: "120px auto 240px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "20px",
  "@media": {
    "screen and (max-width: 1600px)": {
      width: "calc(100% - 320px)",
      padding: "0",
    },
    "screen and (max-width: 1024px)": {
      width: "calc(100% - 40px)",
      margin: "80px 20px",
      aspectRatio: "auto",
      minHeight: "auto",
      padding: "60px 20px",
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

// What Banal Does 섹션
export const whatBanalSection = style({
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto 120px",
  "@media": {
    "screen and (max-width: 1600px)": {
      padding: "0 80px",
    },
    "screen and (max-width: 1024px)": {
      padding: "0 20px",
      margin: "0 auto 80px",
    },
  },
})

export const whatBanalContent = style({
  display: "flex",
  gap: "120px",
  alignItems: "flex-start",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      gap: "60px",
    },
  },
})

export const whatBanalText = style({
  flex: "0 0 520px",
  "@media": {
    "screen and (max-width: 1024px)": {
      flex: "none",
      width: "100%",
    },
  },
})

export const whatBanalTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: "80px",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "36px",
    },
  },
})

export const whatBanalDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontStyle: "5 Medium",
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 40px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
  },
})

export const whatBanalSubDescription = style({
  fontFamily: "'Pretendard', sans-serif",
  fontWeight: 300,
  fontStyle: "Light",
  fontSize: "23px",
  lineHeight: "35px",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: "80px",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
  },
})

export const featuresList = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "24px",
})

export const featureItem = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "24px",
  padding: "16px 0",
  borderBottom: "1px solid #14aeff",
  ":last-child": {
    borderBottom: "none",
  },
})

export const featureNumber = style({
  flex: "0 0 114px",
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      flex: "0 0 80px",
      fontSize: "18px",
    },
  },
})

export const featureContent = style({
  flex: 1,
})

export const featureTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 8px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
  },
})

export const featureDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "16px",
  lineHeight: "160%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  whiteSpace: "pre-line",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
    },
  },
})

// Specialist 섹션
export const specialistSection = style({
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto 120px",
  padding: "0 160px",
  "@media": {
    "screen and (max-width: 1600px)": {
      padding: "0 80px",
    },
    "screen and (max-width: 1024px)": {
      padding: "0 20px",
      margin: "0 auto 80px",
    },
  },
})

export const specialistContent = style({
  display: "flex",
  gap: "120px",
  alignItems: "flex-start",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      gap: "60px",
    },
  },
})

export const specialistText = style({
  flex: "0 0 520px",
  "@media": {
    "screen and (max-width: 1024px)": {
      flex: "none",
      width: "100%",
    },
  },
})

export const specialistTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 24px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "36px",
    },
  },
})

export const specialistDescription = style({
  fontFamily: "'Pretendard', sans-serif",
  fontWeight: 300,
  fontSize: "23px",
  lineHeight: "152%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 40px 0",
  whiteSpace: "pre-line",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
  },
})

export const doctorsGrid = style({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "40px",
  "@media": {
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      gap: "30px",
    },
  },
})

// 신승규 원장 - 첫 번째 (상단)
export const doctorCard1 = style({
  position: "absolute",
  left: "0",
  top: "0",
  width: "417px",
  height: "556px",
  zIndex: 3,
  overflow: "visible",
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "relative",
      width: "100%",
      height: "400px",
    },
  },
})

// 박수호 원장 - 두 번째 (중앙 오른쪽)
export const doctorCard2 = style({
  position: "absolute",
  right: "0",
  top: "266px",
  width: "495px",
  height: "626px",
  zIndex: 2,
  overflow: "visible",
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "relative",
      width: "100%",
      height: "400px",
      top: "auto",
      right: "auto",
    },
  },
})

// 김나래 원장 - 세 번째 (하단)
export const doctorCard3 = style({
  position: "absolute",
  left: "0",
  bottom: "0",
  width: "423px",
  height: "564px",
  zIndex: 1,
  overflow: "visible",
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "relative",
      width: "100%",
      height: "400px",
      bottom: "auto",
      left: "auto",
    },
  },
})

// 기존 레거시 스타일들 (사용하지 않지만 호환성을 위해 유지)
export const doctorCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
})

export const doctorNameOverlay = style({
  position: "absolute",
  bottom: "20px",
  right: "20px",
  color: "#FFFFFF",
  textAlign: "right",
  textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
})

export const doctorEnglishName = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  fontSize: "28px",
  lineHeight: "100%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "24px",
    },
  },
})

// 바날 로컬 위치 정보 카드
export const locationCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
})

export const locationImage = style({
  width: "100%",
  maxWidth: "400px",
  aspectRatio: "1 / 1",
  borderRadius: "8px",
  overflow: "hidden",
  marginBottom: "24px",
  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "300px",
    },
  },
})

export const locationInfo = style({
  textAlign: "center",
})

export const locationName = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "140px",
  lineHeight: "80%",
  letterSpacing: "-4.2px",
  color: "#FFFFFF",
  margin: "0 0 16px 0",
  textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "80px",
      letterSpacing: "-2px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "60px",
      letterSpacing: "-1px",
    },
  },
})

export const locationAddress = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 8px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
  },
})

export const locationDetail = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "20px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
  },
})

// 새로운 간결한 위치 섹션 - 피그마 디자인 기반
export const locationSection = style({
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto 120px",
  padding: "120px 160px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 1600px)": {
      padding: "80px 80px",
    },
    "screen and (max-width: 1024px)": {
      padding: "60px 20px",
      margin: "0 auto 80px",
    },
  },
})

export const locationContent = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "60px",
})

export const locationHeader = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
})

export const locationQuote = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "36px",
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "24px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "20px",
    },
  },
})

export const hospitalName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "24px",
    },
  },
})

export const mapContainer = style({
  width: "100%",
  maxWidth: "1571px",
  aspectRatio: "1571 / 582",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
})

export const mapImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
})

// 의료진 소개 섹션 - 피그마 디자인 기반
export const doctorsSection = style({
  position: "relative",
  width: "100%",
  maxWidth: "1600px",
  height: "auto",
  aspectRatio: "1600 / 950",
  margin: "0 auto 120px",
  // padding: "120px 160px",
  "@media": {
    "screen and (max-width: 1600px)": {
      padding: "80px 80px",
    },
    "screen and (max-width: 1024px)": {
      padding: "60px 20px",
      margin: "0 auto 80px",
    },
  },
})

export const doctorsContent = style({
  display: "flex",
  gap: "120px",
  alignItems: "flex-start",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      gap: "60px",
    },
  },
})

export const doctorsTextSection = style({
  flex: "0 0 520px",
  "@media": {
    "screen and (max-width: 1024px)": {
      flex: "none",
      width: "100%",
    },
  },
})

export const doctorsMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 24px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "36px",
    },
  },
})

export const doctorsSubTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 16px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
  },
})

export const doctorsDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "18px",
  lineHeight: "160%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 40px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "16px",
    },
  },
})

export const doctorsImageGrid = style({
  // flex: 1,
  position: "relative",
  width: "100%",
  maxWidth: "1059px",
  height: "1298px",
  "@media": {
    "screen and (max-width: 1024px)": {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
  },
})

// 둘러싸는 이미지 컨테이너 (모든 의료진 공통)
export const doctorImageContainer = style({
  // position: "relative",
  //   aspectRatio: "1 / 1",
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  overflow: "visible", // 텍스트가 잘리지 않도록
})

// 신승규 원장 이름 오버레이 (전체 그리드 기준)
export const doctorNameOverlay1 = style({
  position: "absolute",
  left: "250px",
  top: "54px",
  width: "718px",
  zIndex: 10,
  "@media": {
    "screen and (max-width: 1024px)": {
      left: "40px",
      top: "40px",
      width: "auto",
    },
  },
})

// 박수호 원장 이름 오버레이 (전체 그리드 기준)
export const doctorNameOverlay2 = style({
  position: "absolute",
  left: "416px",
  top: "668px",
  width: "467px",
  zIndex: 10,
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "absolute",
      left: "40px",
      bottom: "40px",
      top: "auto",
      width: "auto",
    },
  },
})

// 김나래 원장 이름 오버레이 (전체 그리드 기준)
export const doctorNameOverlay3 = style({
  position: "absolute",
  right: "0px",
  bottom: "0px",
  width: "415px",
  textAlign: "right",
  zIndex: 10,
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "absolute",
      right: "40px",
      top: "40px",
      bottom: "auto",
      width: "auto",
    },
  },
})

export const doctorImage1 = style({
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  display: "block",
  zIndex: 1,
})

export const doctorImage2 = style({
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  display: "block",
  zIndex: 1,
})

export const doctorImage3 = style({
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  display: "block",
  zIndex: 1,
})

// 신승규 원장 영어 이름
export const doctorEnglishName1 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "140px",
  lineHeight: "80%",
  letterSpacing: "-4.2px",
  color: "#FFFFFF",
  margin: 0,
  whiteSpace: "nowrap",
  "@media": {
    "screen and (max-width: 1024px)": {
      fontSize: "80px",
      letterSpacing: "-2.4px",
    },
    "screen and (max-width: 768px)": {
      fontSize: "60px",
      letterSpacing: "-1.8px",
    },
  },
})

// 박수호 원장 영어 이름
export const doctorEnglishName2 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "140px",
  lineHeight: "80%",
  letterSpacing: "-4.2px",
  color: "#FFFFFF",
  margin: 0,
  whiteSpace: "nowrap",
  "@media": {
    "screen and (max-width: 1024px)": {
      fontSize: "80px",
      letterSpacing: "-2.4px",
    },
    "screen and (max-width: 768px)": {
      fontSize: "60px",
      letterSpacing: "-1.8px",
    },
  },
})

// 김나래 원장 영어 이름
export const doctorEnglishName3 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "140px",
  lineHeight: "80%",
  letterSpacing: "-4.2px",
  color: "#FFFFFF",
  margin: 0,
  whiteSpace: "nowrap",
  "@media": {
    "screen and (max-width: 1024px)": {
      fontSize: "80px",
      letterSpacing: "-2.4px",
    },
    "screen and (max-width: 768px)": {
      fontSize: "60px",
      letterSpacing: "-1.8px",
    },
  },
})

// 한국어 이름 컨테이너들
export const doctorKoreanNameContainer1 = style({
  position: "absolute",
  left: "270px",
  top: "319px",
  zIndex: 10,
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "static",
      marginTop: "20px",
      paddingLeft: "40px",
    },
  },
})

export const doctorKoreanNameContainer2 = style({
  position: "absolute",
  right: "233px",
  top: "739px",
  zIndex: 10,
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "static",
      marginTop: "20px",
      paddingLeft: "40px",
    },
  },
})

export const doctorKoreanNameContainer3 = style({
  position: "absolute",
  left: "270px",
  top: "1078px",
  zIndex: 10,
  "@media": {
    "screen and (max-width: 1024px)": {
      position: "static",
      marginTop: "20px",
      paddingLeft: "40px",
    },
  },
})

// 한국어 이름 스타일
export const doctorKoreanName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "18px",
    },
  },
})

// 의료진 섹션 후 구분선
export const doctorsSectionDivider = style({
  width: "100%",
  maxWidth: "1600px",
  height: "1px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  margin: "0 auto 120px",
  "@media": {
    "screen and (max-width: 1024px)": {
      margin: "0 auto 80px",
    },
  },
})

// 신승규 원장 아래 구분선
export const doctorDivider1 = style({
  position: "absolute",
  left: "0",
  top: "555px", // 신승규 사진 아래
  width: "100%",
  height: "2px",
  backgroundColor: "#FFFFFF",
  zIndex: 5,
})

// 박수호 원장 아래 구분선
export const doctorDivider2 = style({
  position: "absolute",
  right: "0",
  top: "891px", // 박수호 사진 아래
  width: "100%",
  maxWidth: "642px",
  height: "2px",
  backgroundColor: "#FFFFFF",
  zIndex: 5,
})
