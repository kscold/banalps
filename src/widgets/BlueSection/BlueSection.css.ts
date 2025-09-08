import { style, keyframes } from "@vanilla-extract/css"
import {
  vw,
  responsiveFont,
  responsiveContainer,
  responsiveCaptureContainer,
  responsiveProperty,
  breakpoints,
} from "../../shared/styles/responsive.css"

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
  opacity: 0,
  transform: "translateY(20px)",
  transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)",
})

// 보이기 상태
export const visible = style({
  opacity: 1,
  transform: "translateY(0)",
})

// 이미지 카드 섹션 - 중앙 컨테이너 (1920px 기준)
export const imageCardsSection = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  ...responsiveCaptureContainer(1600, 950), // 1600x950 캡처 컨테이너
  marginTop: vw(240), // 1920px 기준 240px
  marginBottom: vw(240),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "240px", // 1920px 이상에서 고정
      marginBottom: "240px",
    },
    [breakpoints.mobile]: {
      margin: "80px auto", // 상하 마진만 설정
    },
  },
})

// 이미지 카드 1 - 왼쪽 상단 (1920px 기준)
export const imageCard1 = style({
  position: "absolute",
  width: vw(441), // 1920px 기준 441px
  aspectRatio: "441 / 641",
  left: vw(436), // 1920px 기준 436px (1920 기준으로 컨테이너 중앙 맞춤)
  top: 0,
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "0ms",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "441px", // 1920px 이상에서 고정
      left: "436px",
      borderRadius: "15px",
    },
    [breakpoints.mobile]: {
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

// 이미지 카드 2 - 오른쪽 (가장 큰 카드) (1920px 기준)
export const imageCard2 = style({
  position: "absolute",
  width: vw(470), // 1920px 기준 470px
  aspectRatio: "470 / 689",
  top: vw(259), // 1920px 기준 259px
  left: vw(926), // 1920px 기준 926px (1920 기준으로 컨테이너 중앙 맞춤)
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "400ms",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "470px", // 1920px 이상에서 고정
      top: "259px",
      left: "926px",
      borderRadius: "15px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "20px auto",
      width: "90%",
      maxWidth: "400px",
      height: "auto",
      aspectRatio: "470 / 689",
    },
  },
})

// 이미지 카드 3 - 왼쪽 하단 (작은 가로 카드) (1920px 기준)
export const imageCard3 = style({
  position: "absolute",
  width: vw(327), // 1920px 기준 327px
  aspectRatio: "327 / 267",
  top: vw(681), // 1920px 기준 681px
  left: vw(210), // 1920px 기준 210px (1920 기준으로 컨테이너 중앙 맞춤)
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "800ms",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "327px", // 1920px 이상에서 고정
      top: "681px",
      left: "210px",
      borderRadius: "15px",
    },
    [breakpoints.mobile]: {
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

// 이미지 카드 4 - 중앙 하단 (1920px 기준)
export const imageCard4 = style({
  position: "absolute",
  width: vw(317), // 1920px 기준 317px
  aspectRatio: "317 / 468",
  top: vw(766), // 1920px 기준 766px
  left: vw(574), // 1920px 기준 574px (1920 기준으로 컨테이너 중앙 맞춤)
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${fadeInUp} 500ms ease-out forwards`,
  animationDelay: "1200ms",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "317px", // 1920px 이상에서 고정
      top: "766px",
      left: "574px",
      borderRadius: "15px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
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

// RE.YOU 텍스트 섹션 (1920px 기준) - 헤더와 완전 일치
export const reYouSection = style({
  position: "relative",
  ...responsiveContainer(1600), // 헤더와 동일한 컨테이너 시스템만 사용
  marginTop: vw(120), // 1920px 기준 120px
  marginBottom: vw(240), // 1920px 기준 240px
  minHeight: vw(748), // 최소 높이 설정 (이미지 컨테이너 대체)
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: vw(20), // 1920px 기준 20px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "120px", // 1920px 이상에서 고정
      marginBottom: "240px",
      minHeight: "748px", // 고정 높이
      gap: "20px",
    },
    [breakpoints.mobile]: {
      margin: "80px auto", // 상하 마진만 설정
      minHeight: "400px", // 모바일에서 작은 높이
      paddingTop: "60px", // 상단 패딩만 유지
      paddingBottom: "60px", // 하단 패딩만 유지
    },
  },
})

// RE.YOU 타이틀 (1920px 기준)
export const reYouTitle = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  ...responsiveFont(70), // 1920px 기준 70px
  lineHeight: "100%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  position: "relative",
  zIndex: 1,
  textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
})

// 한글 서브타이틀 (1920px 기준)
export const reYouSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(20), // 1920px 기준 20px
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  opacity: 0.95,
  position: "relative",
  zIndex: 1,
  textShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
})

// 그래피티 배경 이미지 (1920px 기준)
export const graffitiBackground = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  marginTop: vw(48), // 1920px 기준 48px
  top: 0,
  left: 0,
  objectFit: "contain",
  objectPosition: "center",
  pointerEvents: "none",
  zIndex: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "48px", // 1920px 이상에서 고정
    },
  },
})

// What Banal Does 섹션 (1920px 기준)
export const whatBanalSection = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  marginBottom: vw(120), // 1920px 기준 120px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "120px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      marginBottom: "80px",
    },
  },
})

export const whatBanalContent = style({
  display: "flex",
  gap: vw(120), // 1920px 기준 120px
  alignItems: "flex-start",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "120px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "60px",
    },
  },
})

export const whatBanalText = style({
  flex: `0 0 ${vw(520)}`, // 1920px 기준 520px
  "@media": {
    [breakpoints.desktopLarge]: {
      flex: "0 0 520px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      flex: "none",
      width: "100%",
    },
  },
})

export const whatBanalTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60), // 1920px 기준 60px
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(80), // 1920px 기준 80px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "80px", // 1920px 이상에서 고정
    },
  },
})

export const whatBanalDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontStyle: "5 Medium",
  ...responsiveFont(24), // 1920px 기준 24px
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(40), // 1920px 기준 40px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "40px", // 1920px 이상에서 고정
    },
  },
})

export const whatBanalSubDescription = style({
  fontFamily: "'Pretendard', sans-serif",
  fontWeight: 300,
  fontStyle: "Light",
  ...responsiveFont(23), // 1920px 기준 23px
  lineHeight: vw(35), // 1920px 기준 35px
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(80), // 1920px 기준 80px
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "35px", // 1920px 이상에서 고정
      marginBottom: "80px",
    },
  },
})

export const featuresList = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: vw(24), // 1920px 기준 24px
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "24px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      gap: "16px", // 모바일에서 더 작게
    },
  },
})

export const featureItem = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vw(24), // 1920px 기준 24px
  padding: `${vw(16)} 0`, // 1920px 기준 16px
  borderBottom: `${vw(1)} solid #14aeff`, // 1920px 기준 1px
  ":last-child": {
    borderBottom: "none",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "24px", // 1920px 이상에서 고정
      padding: "16px 0",
      borderBottom: "1px solid #14aeff",
    },
    [breakpoints.mobile]: {
      gap: "16px", // 모바일에서 더 작게
      padding: "12px 0",
    },
  },
})

export const featureNumber = style({
  flex: `0 0 ${vw(114)}`, // 1920px 기준 114px
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(20), // 1920px 기준 20px
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      flex: "0 0 114px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      flex: "0 0 80px",
    },
  },
})

export const featureContent = style({
  flex: 1,
})

export const featureTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24), // 1920px 기준 24px
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(8), // 1920px 기준 8px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "8px", // 1920px 이상에서 고정
    },
  },
})

export const featureDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(16), // 1920px 기준 16px
  lineHeight: "160%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  whiteSpace: "pre-line",
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

// 신승규 원장 - 1920px 기준 (imageCard1처럼)
export const doctorCard1 = style({
  position: "absolute",
  width: vw(280), // 1920px 기준 280px
  aspectRatio: "280 / 374",
  left: "0", // 1920px 기준 컨테이너 왼쪽 맞춤
  top: "0",
  borderRadius: vw(12),
  overflow: "hidden",
  zIndex: 3,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "280px", // 1920px 이상에서 고정
      left: "0",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "20px auto",
      width: "90%",
      maxWidth: "400px",
      height: "auto",
      aspectRatio: "280 / 374",
    },
  },
})

// 박수호 원장 - 1920px 기준 (imageCard2처럼)
export const doctorCard2 = style({
  position: "absolute",
  width: vw(332), // 1920px 기준 332px
  aspectRatio: "332 / 420",
  top: vw(190), // 1920px 기준 190px
  right: "0", // 1920px 기준 컨테이너 오른쪽 맞춤
  borderRadius: vw(12),
  overflow: "hidden",
  zIndex: 2,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "332px", // 1920px 이상에서 고정
      top: "190px",
      right: "0",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      right: "auto",
      margin: "20px auto",
      width: "90%",
      maxWidth: "400px",
      height: "auto",
      aspectRatio: "332 / 420",
    },
  },
})

// 김나래 원장 - 1920px 기준 (imageCard3처럼)
export const doctorCard3 = style({
  position: "absolute",
  width: vw(284), // 1920px 기준 284px
  aspectRatio: "284 / 403",
  bottom: "0", // 1920px 기준 컨테이너 하단 맞춤
  left: "0", // 1920px 기준 컨테이너 왼쪽 맞춤
  borderRadius: vw(12),
  overflow: "hidden",
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "284px", // 1920px 이상에서 고정
      bottom: "0",
      left: "0",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "20px auto",
      width: "90%",
      maxWidth: "400px",
      height: "auto",
      aspectRatio: "284 / 403",
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

// 의료진 소개 섹션 - 1920px 기준 반응형
export const doctorsSection = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  "@media": {
    [breakpoints.mobile]: {},
  },
})

export const doctorsContent = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between", // 양쪽 끝에 붙이기
  // minHeight: "50vw", // 최소 높이도 비례적으로
  "@media": {
    "screen and (min-width: 1600px)": {
      minHeight: "800px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "60px",
      // minHeight: "auto",
      justifyContent: "flex-start", // 모바일에서는 일반 레이아웃
    },
  },
})

export const doctorsTextSection = style({
  flexShrink: 0,
  ...responsiveProperty("flexBasis", 520), // 1920px 기준 520px 고정 너비
  "@media": {
    [breakpoints.mobile]: {
      flex: "none",
      width: "100%",
    },
  },
})

export const doctorsMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60), // 1920px 기준 60px
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  ...responsiveProperty("marginBottom", 24), // 1920px 기준 24px
})

export const doctorsSubTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(24), // 1920px 기준 24px
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  ...responsiveProperty("marginBottom", 16), // 1920px 기준 16px
})

export const doctorsDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(18), // 1920px 기준 18px
  lineHeight: "160%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  ...responsiveProperty("marginBottom", 40), // 1920px 기준 40px
})

export const doctorsImageGrid = style({
  ...responsiveCaptureContainer(700, 800), // 1920px 기준 700x800 캡처 컨테이너
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

// 신승규 원장 영어 이름 - 1920px 기준 정확한 비례 스케일링
export const doctorNameOverlay1 = style({
  position: "absolute",
  zIndex: 10,
  ...responsiveProperty("left", 300), // 1920px 기준 300px
  ...responsiveProperty("top", 30), // 1920px 기준 30px
  "@media": {
    [breakpoints.mobile]: {
      left: "40px",
      top: "40px",
    },
  },
})

// 박수호 원장 영어 이름 - 1920px 기준 정확한 비례 스케일링
export const doctorNameOverlay2 = style({
  position: "absolute",
  zIndex: 10,
  ...responsiveProperty("left", 230), // 1920px 기준 230px
  ...responsiveProperty("top", 380), // 1920px 기준 380px
  "@media": {
    [breakpoints.mobile]: {
      left: "40px",
      bottom: "40px",
      top: "auto",
    },
  },
})

// 김나래 원장 영어 이름 - 1920px 기준 정확한 비례 스케일링
export const doctorNameOverlay3 = style({
  position: "absolute",
  right: "0",
  textAlign: "right",
  zIndex: 10,
  ...responsiveProperty("bottom", 120), // 1920px 기준 120px
  "@media": {
    [breakpoints.mobile]: {
      right: "40px",
      top: "40px",
      bottom: "auto",
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

// 신승규 원장 영어 이름 - 1920px 기준
export const doctorEnglishName1 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(80), // 1920px 기준 80px
  lineHeight: "80%",
  letterSpacing: vw(-2.4), // 1920px 기준 -2.4px
  color: "#FFFFFF",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "80px",
      letterSpacing: "-2.4px",
    },
    [breakpoints.mobile]: {
      fontSize: "56px", // 모바일에서 70% 크기
      letterSpacing: "-1.7px",
    },
  },
})

// 박수호 원장 영어 이름 - 1920px 기준
export const doctorEnglishName2 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(80), // 1920px 기준 80px
  lineHeight: "80%",
  letterSpacing: vw(-2.4), // 1920px 기준 -2.4px
  color: "#FFFFFF",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "80px",
      letterSpacing: "-2.4px",
    },
    [breakpoints.mobile]: {
      fontSize: "56px", // 모바일에서 70% 크기
      letterSpacing: "-1.7px",
    },
  },
})

// 김나래 원장 영어 이름 - 1920px 기준
export const doctorEnglishName3 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(80), // 1920px 기준 80px
  lineHeight: "80%",
  letterSpacing: vw(-2.4), // 1920px 기준 -2.4px
  color: "#FFFFFF",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "80px",
      letterSpacing: "-2.4px",
    },
    [breakpoints.mobile]: {
      fontSize: "56px", // 모바일에서 70% 크기
      letterSpacing: "-1.7px",
    },
  },
})

// 신승규 원장 한국어 이름 - 1920px 기준
export const doctorKoreanNameContainer1 = style({
  position: "absolute",
  left: vw(300), // 1920px 기준 300px
  top: vw(180), // 1920px 기준 180px
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "300px",
      top: "180px",
    },
    [breakpoints.mobile]: {
      position: "static",
      marginTop: "20px",
      paddingLeft: "40px",
    },
  },
})

// 박수호 원장 한국어 이름 - 1920px 기준
export const doctorKoreanNameContainer2 = style({
  position: "absolute",
  right: vw(155), // 1920px 기준 155px
  top: vw(420), // 1920px 기준 420px
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "155px",
      top: "420px",
    },
    [breakpoints.mobile]: {
      position: "static",
      marginTop: "20px",
      paddingLeft: "40px",
    },
  },
})

// 김나래 원장 한국어 이름 - 1920px 기준
export const doctorKoreanNameContainer3 = style({
  position: "absolute",
  left: vw(300), // 1920px 기준 300px
  top: vw(620), // 1920px 기준 620px
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "300px",
      top: "620px",
    },
    [breakpoints.mobile]: {
      position: "static",
      marginTop: "20px",
      paddingLeft: "40px",
    },
  },
})

// 한국어 이름 스타일 - 1920px 기준
export const doctorKoreanName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(18), // 1920px 기준 18px
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
    },
    "screen and (max-width: 768px)": {
      fontSize: "16px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "14px",
    },
  },
})

// 신승규 원장 아래 구분선 - 1920px 기준
export const doctorDivider1 = style({
  position: "absolute",
  left: "0",
  top: vw(374), // 1920px 기준 374px
  width: vw(700), // 1920px 기준 700px
  height: vw(2),
  backgroundColor: "#FFFFFF",
  zIndex: 5,
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "374px",
      width: "700px",
      height: "2px",
    },
  },
})

// 박수호 원장 아래 구분선 - 1920px 기준
export const doctorDivider2 = style({
  position: "absolute",
  right: "0",
  top: vw(610), // 1920px 기준 610px
  width: vw(400), // 1920px 기준 400px
  height: vw(2),
  backgroundColor: "#FFFFFF",
  zIndex: 5,
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "610px",
      width: "400px",
      height: "2px",
    },
  },
})
