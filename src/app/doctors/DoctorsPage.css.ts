import { style, keyframes } from "@vanilla-extract/css"
import {
  breakpoints,
  vw,
  mvw,
  responsiveFont,
  responsiveContainer,
  responsiveLeftContent,
  responsiveImageContainer,
} from "../../shared/styles/responsive.css"

// 페이지 전체 스타일
export const doctorsPage = style({
  minHeight: "100vh",
  background: "#73D5FA",
})

// 로딩 스타일
export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
})

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const loadingSpinner = style({
  width: vw(40),
  height: vw(40),
  border: `${vw(4)} solid #f3f3f3`,
  borderTop: `${vw(4)} solid #14AEFF`,
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "40px",
      height: "40px",
      border: "4px solid #f3f3f3",
      borderTop: "4px solid #14AEFF",
    },
  },
})

// Medical Team Section - 피그마 의료진 소개
export const medicalTeamSection = style({
  padding: `${vw(120)} 0`,
  background: "#73D5FA",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: 0,
      background: "#FFFFFF",
    },
  },
})

export const medicalTeamContainer = style({
  ...responsiveLeftContent(),
  padding: vw(0),
  display: "flex",
  flexDirection: "column",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      padding: 0,
      width: "100%",
    },
  },
})

// 헤더 섹션 - Frame 234 (1920x1025)
export const medicalTeamHeader = style({
  height: vw(1025),
  position: "relative",
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "1025px",
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
})

// 왼쪽 타이틀 - Frame 323 (661x634)
export const medicalTeamTitleSection = style({
  flex: "0 0 auto",
  width: vw(661),
  height: vw(634),
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "661px",
      height: "634px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
      paddingLeft: "0",
    },
  },
})

export const medicalTeamMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(72),
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    [breakpoints.mobile]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },
})

// 인트로 이미지 1 - 오른쪽 상단
export const doctorsIntroImage1 = style({
  position: "absolute",
  top: vw(120),
  right: vw(0),
  width: vw(1085),
  height: vw(850),
  borderRadius: vw(12),
  objectFit: "cover",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      display: "none",
    },
  },
})

// Banal Medical Team 텍스트 - 인트로 이미지 위에 절대 위치
export const medicalTeamHeroSection = style({
  position: "absolute",
  left: vw(700), // 피그마 디자인 기준 위치
  bottom: vw(90), // 인트로 이미지 하단에서 32px 위
  zIndex: 20, // 인트로 이미지보다 위에
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      display: "none",
    },
  },
})

export const medicalTeamHeroText = style({
  padding: 0, // 패딩 제거
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: 0,
    },
    [breakpoints.mobile]: {
      padding: 0,
    },
  },
})

export const medicalTeamHeroTitle = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  ...responsiveFont(44),
  lineHeight: vw(46),
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "44px",
      lineHeight: "46px",
    },
    [breakpoints.mobile]: {
      fontSize: "24px",
      lineHeight: "28px",
    },
  },
})

// 의사 섹션들 - 파란 배경 (Frame 299: 1920x1221)
export const doctorSection = style({
  width: vw(1920),
  height: vw(1221),
  position: "relative",
  backgroundColor: "#73D5FA",
  borderRadius: vw(24),
  margin: `${vw(60)} auto`,
  padding: 0,
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1920px",
      height: "1221px",
      borderRadius: "24px",
      margin: "60px auto",
    },
    [breakpoints.mobile]: {
      width: "100vw",
      height: mvw(812),
      padding: 0,
      margin: 0,
      borderRadius: 0,
      backgroundColor: "#73D5FA",
      position: "relative",
      overflow: "hidden",
    },
  },
})

export const doctorContent = style({
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
})

// 박수호 원장용 역순 레이아웃
export const doctorContentReversed = style({
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  flexDirection: "row-reverse",
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
})

// 메인 이미지 컨테이너 (600x850) - 피그마 Frame 15400 위치 정확히 맞춤
export const doctorImageContainer = style({
  position: "absolute",
  left: 0, // 왼쪽 끝에 붙임
  top: vw(371), // 1572 - 1201 = 371px from top
  width: vw(600),
  height: vw(850),
  borderRadius: 0,
  overflow: "visible",
  zIndex: 10, // 텍스트보다 위에
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "0px",
      top: "371px",
      width: "600px",
      height: "850px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "100%",
      height: "400px",
    },
  },
})

export const doctorMainImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
})

// 박수호 원장용 이미지 컨테이너 - 오른쪽 위치 (Reversed 레이아웃)
export const doctorImageContainer2 = style({
  position: "absolute",
  right: 0, // 오른쪽 끝에 붙임 (박수호 원장은 reversed)
  top: vw(371),
  width: vw(600),
  height: vw(850),
  borderRadius: 0,
  overflow: "visible",
  zIndex: 10,
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "0px",
      top: "371px",
      width: "600px",
      height: "850px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      right: "auto",
      top: "auto",
      width: "100%",
      height: "400px",
    },
  },
})

// 박수호 원장용 텍스트 섹션 - 오른쪽에서 왼쪽으로
export const doctorTextSection2 = style({
  position: "absolute",
  right: vw(380), // reversed 레이아웃이므로 right 기준
  top: vw(382),
  width: vw(859),
  height: vw(840),
  display: "flex",
  flexDirection: "column",
  zIndex: 5,
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "380px",
      top: "382px",
      width: "859px",
      height: "840px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      right: "auto",
      top: "auto",
      width: "100%",
      height: "auto",
    },
  },
})

// 박수호 원장용 인포 섹션
export const doctorInfo2 = style({
  position: "absolute",
  right: vw(700),
  bottom: vw(0),
  width: vw(740),
  height: vw(314),
  display: "flex",
  flexDirection: "column",
  gap: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "700px",
      bottom: "0px",
      width: "740px",
      height: "314px",
      gap: "40px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      right: "auto",
      top: "auto",
      width: "100%",
      height: "auto",
      gap: "20px",
    },
  },
})

// 김나래 원장용 - 신승규와 동일한 레이아웃 (왼쪽 이미지, 오른쪽 텍스트)
export const doctorImageContainer3 = style({
  position: "absolute",
  left: 0,
  top: vw(371),
  width: vw(600),
  height: vw(850),
  borderRadius: 0,
  overflow: "visible",
  zIndex: 10,
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "0px",
      top: "371px",
      width: "600px",
      height: "850px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "100%",
      height: "400px",
    },
  },
})

export const doctorTextSection3 = style({
  position: "absolute",
  left: vw(380),
  top: vw(382),
  width: vw(859),
  height: vw(840),
  display: "flex",
  flexDirection: "column",
  zIndex: 5,
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "380px",
      top: "382px",
      width: "859px",
      height: "840px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "100%",
      height: "auto",
    },
  },
})

export const doctorInfo3 = style({
  position: "absolute",
  left: vw(700),
  bottom: vw(0),
  width: vw(740),
  height: vw(314),
  display: "flex",
  flexDirection: "column",
  gap: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "700px",
      bottom: "0px",
      width: "740px",
      height: "314px",
      gap: "40px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "100%",
      height: "auto",
      gap: "20px",
    },
  },
})

// 텍스트 섹션 - 피그마 기준 중앙 위치
// 텍스트 섹션 - 피그마 디자인 정확한 위치 (의사 사진과 겹치도록)
export const doctorTextSection = style({
  position: "absolute",
  left: vw(380), // 의사 사진과 겹치면서 시작 (피그마 -7304 기준)
  top: vw(382), // 1583 - 1201 = 382px from top
  width: vw(859),
  height: vw(840),
  display: "flex",
  flexDirection: "column",
  zIndex: 5, // 의사 사진보다 낮게
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "380px",
      top: "382px",
      width: "859px",
      height: "840px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "100%",
      height: "auto",
    },
  },
})

// 의사 이름 (Poppins 160px)
export const doctorName = style({
  marginBottom: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "80px",
    },
    [breakpoints.mobile]: {
      marginBottom: "40px",
    },
  },
})

export const doctorNameText = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  ...responsiveFont(160),
  lineHeight: vw(160),
  letterSpacing: "0",
  color: "#FFFFFF", // 하얀색 텍스트
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "160px",
      lineHeight: "160px",
    },
    [breakpoints.mobile]: {
      fontSize: "60px",
      lineHeight: "60px",
    },
  },
})

// 의사 정보 - 피그마 디자인 기준 absolute 위치
export const doctorInfo = style({
  position: "absolute",
  left: vw(700), // 텍스트 섹션과 동일한 시작점
  bottom: vw(0), // 의사 이름 아래쪽 위치
  width: vw(740), // 피그마 Frame 296 기준
  height: vw(314),
  display: "flex",
  flexDirection: "column",
  gap: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "700px",
      bottom: "0px",
      width: "740px",
      height: "314px",
      gap: "40px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "100%",
      height: "auto",
      gap: "20px",
    },
  },
})

export const doctorTitle = style({
  marginBottom: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "40px",
    },
    [breakpoints.mobile]: {
      marginBottom: "20px",
    },
  },
})

export const doctorSpecialty = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: "0",
  color: "#FFFFFF", // 하얀색 텍스트
  margin: `0 0 ${vw(12)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "14px",
      lineHeight: "20px",
      margin: "0 0 12px 0",
    },
  },
})

export const doctorPosition = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24),
  lineHeight: vw(36),
  letterSpacing: "0",
  color: "#FFFFFF", // 하얀색 텍스트
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
})

// 자격증 컨테이너 - 피그마 Frame 294 기준
export const doctorCredentials = style({
  display: "flex",
  gap: vw(64), // 두 컬럼 사이 간격
  width: "100%",
  height: vw(150), // 피그마 프레임 높이
  marginTop: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "64px",
      height: "150px",
      marginTop: "20px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "20px",
      height: "auto",
      marginTop: "15px",
    },
  },
})

// 자격증 컬럼 - 피그마 Frame 292/293 기준 (338px 너비)
export const credentialColumn = style({
  flex: "0 0 auto",
  width: vw(338), // 피그마 정확한 컬럼 너비
  height: vw(146), // 피그마 컬럼 높이
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "338px",
      height: "146px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
    },
  },
})

export const credentialList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  paddingLeft: vw(18),
  position: "relative",
  height: "100%",
  // 수직선 - 수평선에서 딱 끊기도록
  "::before": {
    content: '""',
    position: "absolute",
    left: vw(-1), // 선 중앙 위치 (2px 선의 중앙 = -1px)
    top: vw(-10), // 원 아래부터 시작
    bottom: 0, // 수평선에서 딱 끊김 (컨테이너 bottom과 일치)
    width: vw(2), // 얇은 선
    backgroundColor: "#FFFFFF",
    zIndex: 1,
  },
  // 위쪽 동그라미 - 수직선 정중앙에 맞춤
  "::after": {
    content: '""',
    position: "absolute",
    left: vw(-5.5), // 선 정중앙에 맞춤 (-1 - 10/2 = -6)
    top: vw(-15),
    width: vw(10),
    height: vw(10),
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    zIndex: 2,
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingLeft: "18px", // 1920px+ 고정
      "::before": {
        left: "-1px", // 선 중앙 고정
        top: "-10px",
        bottom: "0px", // 수평선에서 딱 끊김
        width: "2px", // 고정 두께
      },
      "::after": {
        left: "-5.5px", // 원 정중앙 맞춤 고정
        top: "-15px",
        width: "10px", // 고정 크기
        height: "10px",
      },
    },
    [breakpoints.mobile]: {
      paddingLeft: "12px",
      "::before": {
        left: "-0.5px", // 1px 선의 중앙
        top: "-8px",
        bottom: "0px",
        width: "1px",
      },
      "::after": {
        left: "-4.5px", // 원 정중앙
        top: "-12px",
        width: "8px",
        height: "8px",
      },
    },
  },
})

// li 요소를 위한 별도 스타일
export const credentialItem = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: vw(26),
  letterSpacing: "0",
  color: "#FFFFFF", // 하얀색 텍스트
  marginBottom: vw(16),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "26px",
      marginBottom: "16px",
    },
  },
})

// 의사 인용구 - 피그마 Frame 303 위치
export const doctorQuote1 = style({
  position: "absolute",
  left: vw(1240),
  top: vw(192),
  width: vw(445),
  height: vw(156),
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.1)", // 하얀색 반투명 배경
  borderRadius: vw(16),
  padding: vw(40),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease, backgroundColor 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "1240px",
      top: "192px",
      width: "445px",
      height: "156px",
      borderRadius: "16px",
      padding: "40px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "100%",
      height: "auto",
      padding: "20px",
    },
  },
})

export const doctorQuoteText1 = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20),
  lineHeight: vw(30),
  letterSpacing: "0",
  color: "#FFFFFF", // 하얀색 텍스트
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
  },
})

// 박수호/김나래 원장용 인용문
export const doctorQuote = style({
  position: "absolute",
  left: vw(60), // 왼쪽 위치에 배치
  bottom: vw(60),
  width: vw(445),
  height: vw(156),
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: vw(16),
  padding: vw(40),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease, backgroundColor 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "60px",
      bottom: "60px",
      width: "445px",
      height: "156px",
      borderRadius: "16px",
      padding: "40px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      bottom: "auto",
      width: "100%",
      height: "auto",
      padding: "20px",
    },
  },
})

export const doctorQuoteText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20),
  lineHeight: vw(30),
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
  },
})

// 서브 이미지들 컨테이너 - 맨 아래 1px 가로선 추가
export const doctorSubImages = style({
  position: "relative",
  width: "100%",
  height: "100%",
  // 컨테이너 맨 아래 1px 흰색 가로선
  "::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: vw(1),
    backgroundColor: "#FFFFFF",
    zIndex: 1,
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      "::after": {
        height: "1px",
      },
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김
    },
  },
})

// 첫 번째 서브 이미지 - 피그마 Frame 15393 위치 (-7352, 1201)
export const doctorSubImage = style({
  position: "absolute",
  left: vw(309), // -7352 - (-7661) = 309px from container left
  top: 0, // 1201 - 1201 = 0px from container top
  width: vw(360),
  height: vw(260),
  borderRadius: 0, // 테두리 제거
  overflow: "visible", // 실루엣이 보이도록
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "309px",
      top: "0px",
      width: "360px",
      height: "260px",
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "200px",
      height: "150px",
      flexShrink: 0,
    },
  },
})

// 두 번째 서브 이미지 - 피그마 Frame 15394 위치 (-6286, 1955)
export const doctorSubImage2 = style({
  position: "absolute",
  left: vw(1375), // -6286 - (-7661) = 1375px from container left
  top: vw(754), // 1955 - 1201 = 754px from container top
  width: vw(310),
  height: vw(190),
  borderRadius: 0, // 테두리 제거
  overflow: "visible", // 실루엣이 보이도록
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "1375px",
      top: "754px",
      width: "310px",
      height: "190px",
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "200px",
      height: "150px",
      flexShrink: 0,
    },
  },
})

export const doctorSubImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
})

// 박수호 원장용 서브 이미지 컨테이너 (reversed 레이아웃)
export const doctorSubImages2 = style({
  position: "relative",
  width: "100%",
  height: "100%",
  "::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: vw(1),
    backgroundColor: "#FFFFFF",
    zIndex: 1,
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      "::after": {
        height: "1px",
      },
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김
    },
  },
})

// 박수호 원장용 첫번째 서브 이미지 - 오른쪽 위치
export const doctorSubImagePark1 = style({
  position: "absolute",
  right: vw(309), // reversed 레이아웃이므로 right 사용
  top: 0,
  width: vw(360),
  height: vw(260),
  borderRadius: 0,
  overflow: "visible",
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "309px",
      top: "0px",
      width: "360px",
      height: "260px",
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: "relative",
      right: "auto",
      top: "auto",
      width: "200px",
      height: "150px",
      flexShrink: 0,
    },
  },
})

export const doctorSubImagePark2 = style({
  position: "absolute",
  right: vw(1375),
  top: vw(754),
  width: vw(310),
  height: vw(190),
  borderRadius: 0,
  overflow: "visible",
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "1375px",
      top: "754px",
      width: "310px",
      height: "190px",
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: "relative",
      right: "auto",
      top: "auto",
      width: "200px",
      height: "150px",
      flexShrink: 0,
    },
  },
})

// 김나래 원장용 서브 이미지 컨테이너 - 신승규와 동일
export const doctorSubImages3 = style({
  position: "relative",
  width: "100%",
  height: "100%",
  "::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: vw(1),
    backgroundColor: "#FFFFFF",
    zIndex: 1,
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      "::after": {
        height: "1px",
      },
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김
    },
  },
})

export const doctorSubImageKim1 = style({
  position: "absolute",
  left: vw(309),
  top: 0,
  width: vw(360),
  height: vw(260),
  borderRadius: 0,
  overflow: "visible",
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "309px",
      top: "0px",
      width: "360px",
      height: "260px",
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "200px",
      height: "150px",
      flexShrink: 0,
    },
  },
})

export const doctorSubImageKim2 = style({
  position: "absolute",
  left: vw(1375),
  top: vw(754),
  width: vw(310),
  height: vw(190),
  borderRadius: 0,
  overflow: "visible",
  transition: "transform 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "1375px",
      top: "754px",
      width: "310px",
      height: "190px",
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      top: "auto",
      width: "200px",
      height: "150px",
      flexShrink: 0,
    },
  },
})

// ==================== HISTORY SECTION ====================

// 연혁 섹션 - 전체 컨테이너
export const historySection = style({
  width: "100%",
  backgroundColor: "#FFFFFF", // 흰색 배경으로 의료진과 구분
  padding: `${vw(120)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
})

export const historyContainer = style({
  ...responsiveContainer(1600),
  display: "flex",
  flexDirection: "column",
  gap: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "80px",
    },
    [breakpoints.mobile]: {
      gap: "60px",
    },
  },
})

// 연혁 헤더
export const historyHeader = style({
  textAlign: "left",
  marginBottom: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "60px",
    },
    [breakpoints.mobile]: {
      marginBottom: "40px",
    },
  },
})

export const historyTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(72),
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    [breakpoints.mobile]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },
})

// 타임라인 레이아웃 - 2라인 구조
export const timelineLayout = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: vw(40),
  alignItems: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
    },
    [breakpoints.mobile]: {
      gap: "30px",
    },
  },
})

// 첫 번째 라인: 2011 - 화살표 - 첫 번째 이미지 (왼쪽 정렬)
export const timelineFirstRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // 요소들을 골고루 분배
  gap: vw(40), // 간격 조정
  width: "100%",
  maxWidth: "1600px", // responsiveContainer(1600)에 맞춤
  paddingLeft: 0,
  // paddingRight: vw(400), // 오른쪽 여백으로 균형 조정
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
      maxWidth: "1600px",
      // paddingLeft: "0",
      // paddingRight: "400px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "30px",
      maxWidth: "none",
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
})

// 두 번째 라인: 두 번째 이미지 - 파란색 원 - 2024 (오른쪽 정렬)
export const timelineSecondRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // 요소들을 골고루 분배
  gap: vw(20), // 간격 조정
  width: "100%",
  maxWidth: "1600px", // responsiveContainer(1600)에 맞춤
  "@media": {
    [breakpoints.desktopLarge]: {
      // paddingLeft: "400px",
      // paddingRight: "0",
    },
    [breakpoints.mobile]: {},
  },
})

export const timelineRow = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vw(60), // 간격 증가
  maxWidth: "1600px", // 전체 너비 증가
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "60px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "30px",
      maxWidth: "none",
    },
  },
})

// 2011년 그룹 - 피그마 디자인 기준 대형 사이즈
export const year2011Group = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(730), // 피그마 디자인 기준 730px
  height: vw(258), // 피그마 디자인 기준 258px
  flexShrink: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "730px",
      height: "258px",
    },
    [breakpoints.mobile]: {
      width: "300px",
      height: "120px",
    },
  },
})

export const year2011Image = style({
  width: "100%",
  height: "auto",
})

export const yearLabel2011 = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  ...responsiveFont(80),
  lineHeight: vw(96),
  color: "#14AEFF",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "80px",
      lineHeight: "96px",
    },
    [breakpoints.mobile]: {
      fontSize: "48px",
      lineHeight: "60px",
    },
  },
})

export const year2011Content = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(12),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
    },
  },
})

export const year2011Text = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(20),
  lineHeight: vw(28),
  color: "#666666",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

// 화살표 - 피그마 디자인 기준 크기
export const timelineArrow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(200), // 화살표 크기 증가
  height: vw(100),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "200px",
      height: "100px",
    },
    [breakpoints.mobile]: {
      width: "100px",
      height: "50px",
      transform: "rotate(90deg)",
    },
  },
})

// 타임라인 중앙 이미지 - 피그마 디자인 기준 대형 사이즈
export const timelineImage1 = style({
  width: vw(380), // 크기 대폭 증가
  height: vw(250),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vw(12), // 모서리 둥글게
  overflow: "hidden",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "380px",
      height: "250px",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      width: "160px",
      height: "120px",
      borderRadius: "8px",
    },
  },
})

// 타임라인 중앙 이미지 - 피그마 디자인 기준 대형 사이즈
export const timelineImage2 = style({
  width: vw(300), // 크기 대폭 증가
  height: vw(250),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vw(12), // 모서리 둥글게
  overflow: "hidden",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "300px",
      height: "250px",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      width: "160px",
      height: "120px",
      borderRadius: "8px",
    },
  },
})

export const timelineImageContent = style({
  width: "100%",
  height: "100%",
})

export const timelineArrowSvg = style({
  width: "100%",
  height: "100%",
})

// 흰색 프레임들
export const whiteFrame2011 = style({
  backgroundColor: "#FFFFFF",
  borderRadius: vw(12),
  width: vw(380),
  height: vw(250),
  padding: vw(32),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "12px",
      width: "380px",
      height: "250px",
      padding: "32px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
      padding: "24px",
    },
  },
})

export const whiteFrame2024 = style({
  backgroundColor: "#FFFFFF",
  borderRadius: vw(12),
  width: vw(300),
  height: vw(250),
  padding: vw(32),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "12px",
      width: "300px",
      height: "250px",
      padding: "32px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
      padding: "24px",
    },
  },
})

export const frameContent = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: vw(16),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "16px",
    },
  },
})

export const frameTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24),
  lineHeight: vw(30),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      fontSize: "20px",
      lineHeight: "26px",
    },
  },
})

export const frameText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 300,
  ...responsiveFont(16),
  lineHeight: vw(22),
  color: "#666666",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    [breakpoints.mobile]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
})

// 원형 아이콘 그룹 - 피그마 디자인 기준 크기
export const circleIconGroup = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(248), // blueCircle과 일치
  height: vw(248),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "248px",
      height: "248px",
    },
    [breakpoints.mobile]: {
      width: "150px",
      height: "150px",
    },
  },
})

export const circleIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(248), // 파란색 원과 같은 크기
  height: vw(248),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "248px",
      height: "248px",
    },
    [breakpoints.mobile]: {
      width: "150px",
      height: "150px",
    },
  },
})

export const circleIconSvg = style({
  width: vw(248), // 파란색 원과 같은 크기
  height: vw(248),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "248px",
      height: "248px",
    },
    [breakpoints.mobile]: {
      width: "150px",
      height: "150px",
    },
  },
})

// 파란색 원 - 피그마 디자인 기준
export const blueCircle = style({
  width: vw(248),
  height: vw(248),
  backgroundColor: "#73D5FA",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "248px",
      height: "248px",
    },
    [breakpoints.mobile]: {
      width: "150px",
      height: "150px",
    },
  },
})

// 2024년 그룹 - 피그마 디자인 기준 대형 사이즈
export const year2024Group = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(730), // 2011년과 동일한 크기
  height: vw(258),
  flexShrink: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "730px",
      height: "258px",
    },
    [breakpoints.mobile]: {
      width: "300px",
      height: "120px",
    },
  },
})

export const year2024Image = style({
  width: "100%",
  height: "auto",
})

export const yearLabel2024 = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  ...responsiveFont(80),
  lineHeight: vw(96),
  color: "#14AEFF",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "80px",
      lineHeight: "96px",
    },
    [breakpoints.mobile]: {
      fontSize: "48px",
      lineHeight: "60px",
    },
  },
})

export const year2024Content = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(12),
  textAlign: "right",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
    },
    [breakpoints.mobile]: {
      textAlign: "center",
    },
  },
})

export const year2024Text = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(20),
  lineHeight: vw(28),
  color: "#666666",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

// ==================== ACADEMIC ACTIVITIES SECTION ====================

// 학술활동 섹션 - 전체 컨테이너
export const academicActivitiesSection = style({
  width: "100%",
  backgroundColor: "#FFFFFF", // 흰색 배경
  padding: `${vw(120)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
})

export const academicActivitiesContainer = style({
  ...responsiveContainer(1600),
  display: "flex",
  flexDirection: "column",
  gap: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "80px",
    },
    [breakpoints.mobile]: {
      gap: "60px",
    },
  },
})

// 학술활동 헤더
export const academicActivitiesHeader = style({
  textAlign: "left",
  marginBottom: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "60px",
    },
    [breakpoints.mobile]: {
      marginBottom: "40px",
    },
  },
})

export const academicActivitiesTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(72),
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    [breakpoints.mobile]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },
})

// 콘텐츠 영역 - 왼쪽 필터 + 오른쪽 목록
export const academicActivitiesContent = style({
  display: "flex",
  gap: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "80px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "40px",
    },
  },
})

// 왼쪽 필터 사이드바
export const academicFilterSidebar = style({
  width: vw(240),
  flexShrink: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "240px",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
})

export const filterTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24),
  lineHeight: vw(32),
  color: "#272727",
  margin: `0 0 ${vw(32)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      lineHeight: "32px",
      margin: "0 0 32px 0",
    },
    [breakpoints.mobile]: {
      fontSize: "20px",
      lineHeight: "28px",
      margin: "0 0 24px 0",
    },
  },
})

export const filterOptions = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(16),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "16px",
    },
    [breakpoints.mobile]: {
      flexDirection: "row",
      gap: "12px",
      overflowX: "auto",
    },
  },
})

export const filterButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: vw(18),
  lineHeight: vw(24),
  color: "#666666",
  backgroundColor: "transparent",
  border: "none",
  padding: `${vw(12)} ${vw(16)}`,
  textAlign: "left",
  cursor: "pointer",
  borderRadius: vw(8),
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#F5F5F5",
    color: "#272727",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      lineHeight: "24px",
      padding: "12px 16px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "22px",
      padding: "10px 14px",
      borderRadius: "6px",
      textAlign: "center",
      whiteSpace: "nowrap",
    },
  },
})

export const active = style({
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  fontWeight: 500,
  ":hover": {
    backgroundColor: "#0EA5E9",
    color: "#FFFFFF",
  },
})

// 오른쪽 학술활동 목록
export const academicActivitiesList = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "60px",
    },
    [breakpoints.mobile]: {
      gap: "40px",
    },
  },
})

export const academicYearGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(32),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "32px",
    },
    [breakpoints.mobile]: {
      gap: "24px",
    },
  },
})

export const academicYear = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  ...responsiveFont(32),
  lineHeight: vw(40),
  color: "#14AEFF",
  margin: 0,
  paddingBottom: vw(16),
  borderBottom: `${vw(2)} solid #E5E5E5`,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "32px",
      lineHeight: "40px",
      paddingBottom: "16px",
      borderBottom: "2px solid #E5E5E5",
    },
    [breakpoints.mobile]: {
      fontSize: "28px",
      lineHeight: "36px",
      paddingBottom: "12px",
      borderBottom: "2px solid #E5E5E5",
    },
  },
})

export const academicItems = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
    },
    [breakpoints.mobile]: {
      gap: "32px",
    },
  },
})

export const academicItem = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(12),
  padding: vw(32),
  backgroundColor: "#FAFAFA",
  borderRadius: vw(16),
  border: `${vw(1)} solid #E5E5E5`,
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#F0F8FF",
    borderColor: "#14AEFF",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 20px rgba(20, 174, 255, 0.1)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
      padding: "32px",
      borderRadius: "16px",
      border: "1px solid #E5E5E5",
    },
    [breakpoints.mobile]: {
      gap: "10px",
      padding: "24px",
      borderRadius: "12px",
      border: "1px solid #E5E5E5",
    },
  },
})

export const academicDate = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(16),
  lineHeight: vw(22),
  color: "#14AEFF",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    [breakpoints.mobile]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
})

export const academicType = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(14),
  lineHeight: vw(18),
  color: "#FFFFFF",
  backgroundColor: "#14AEFF",
  padding: `${vw(6)} ${vw(12)}`,
  borderRadius: vw(20),
  display: "inline-block",
  width: "fit-content",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "14px",
      lineHeight: "18px",
      padding: "6px 12px",
      borderRadius: "20px",
    },
    [breakpoints.mobile]: {
      fontSize: "12px",
      lineHeight: "16px",
      padding: "4px 10px",
      borderRadius: "16px",
    },
  },
})

export const academicTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(20),
  lineHeight: vw(28),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
    [breakpoints.mobile]: {
      fontSize: "18px",
      lineHeight: "26px",
    },
  },
})

export const academicDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 300,
  ...responsiveFont(16),
  lineHeight: vw(24),
  color: "#666666",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [breakpoints.mobile]: {
      fontSize: "14px",
      lineHeight: "22px",
    },
  },
})

// Academic Activities Section - 새로운 피그마 디자인
export const academicActivitiesLayout = style({
  display: "flex",
  gap: vw(138),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "138px",
    },
    [breakpoints.desktop]: {
      flexDirection: "column",
      gap: "40px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "30px",
    },
  },
})

// 왼쪽 연도 필터
export const yearFilterSidebar = style({
  width: vw(132),
  height: vw(628), // 테이블과 동일한 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "132px",
      height: "628px",
    },
    [breakpoints.desktop]: {
      width: "100px",
      height: "auto",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
    },
  },
})

export const yearFilter = style({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  height: vw(688), // academicContent와 동일한 높이
  paddingTop: vw(20),
  paddingBottom: vw(20),
  justifyContent: "space-between", // 15개 연도를 균등 배치
  "::before": {
    content: '""',
    position: "absolute",
    left: vw(15), // yearCircle 중앙에 맞춤
    top: vw(30),
    bottom: vw(30),
    width: "1px",
    backgroundColor: "#DEDEDE",
    zIndex: 1,
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "688px",
      paddingTop: "20px",
      paddingBottom: "20px",
      justifyContent: "space-between",
      "::before": {
        left: "15px",
        top: "30px",
        bottom: "30px",
      },
    },
    [breakpoints.desktop]: {
      gap: "30px",
      height: "auto",
      "::before": {
        left: "12px",
        top: "12px",
        bottom: "12px",
      },
    },
    [breakpoints.mobile]: {
      gap: "25px",
      height: "auto",
      "::before": {
        left: "10px",
        top: "10px",
        bottom: "10px",
      },
    },
  },
})

export const yearFilterItem = style({
  width: vw(132),
  height: vw(14), // yearCircle과 동일한 높이
  display: "flex",
  alignItems: "center",
  gap: vw(34),
  cursor: "pointer",
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "132px",
      height: "14px",
      gap: "34px",
    },
    [breakpoints.desktop]: {
      width: "auto",
      height: "auto",
      gap: "8px",
      padding: "4px 0",
    },
    [breakpoints.mobile]: {
      width: "auto",
      height: "auto",
      gap: "6px",
      padding: "3px 0",
    },
  },
})

export const yearCircle = style({
  width: vw(14),
  height: vw(14),
  borderRadius: "50%",
  backgroundColor: "#F5F5F5", // 회색 배경
  border: "none",
  position: "absolute",
  left: vw(8), // 중앙 정렬을 위해 조정
  zIndex: 2, // 연결선보다 위에
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "14px",
      height: "14px",
      left: "8px",
    },
    [breakpoints.desktop]: {
      width: "14px",
      height: "14px",
      left: "8px",
    },
    [breakpoints.mobile]: {
      width: "14px",
      height: "14px",
      left: "8px",
    },
  },
})

export const activeCircle = style({
  width: vw(30),
  height: vw(30),
  backgroundColor: "transparent",
  borderRadius: "50%",
  border: "1px solid #14AEFF",
  position: "absolute",
  left: vw(0), // 회색 원의 중심에 맞춤
  top: vw(0),
  zIndex: 3,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // 내부 파란색 원
  "::after": {
    content: '""',
    position: "absolute",
    width: vw(14),
    height: vw(14),
    borderRadius: "50%",
    backgroundColor: "#14AEFF",
  },

  "@media": {
    [breakpoints.desktopLarge]: {
      width: "30px",
      height: "30px",
      left: "0px",
      top: "0px",
      "::after": {
        width: "14px",
        height: "14px",
      },
    },
    [breakpoints.desktop]: {
      width: "24px",
      height: "24px",
      left: "0px",
      top: "0px",
      "::after": {
        width: "12px",
        height: "12px",
      },
    },
    [breakpoints.mobile]: {
      width: "20px",
      height: "20px",
      left: "0px",
      top: "0px",
      "::after": {
        width: "10px",
        height: "10px",
      },
    },
  },
})

export const yearText = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32),
  color: "#707070",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "32px",
    },
    [breakpoints.desktop]: {
      fontSize: "24px",
    },
    [breakpoints.mobile]: {
      fontSize: "20px",
    },
  },
})

export const activeText = style({
  color: "#14AEFF !important",
  position: "absolute",
  left: vw(70),
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "70px",
    },
    [breakpoints.desktop]: {
      left: "50px",
    },
    [breakpoints.mobile]: {
      left: "40px",
    },
  },
})

export const hiddenText = style({
  visibility: "hidden",
})

export const activeYear = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: vw(42),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "42px",
    },
    [breakpoints.desktop]: {
      gap: "8px",
    },
    [breakpoints.mobile]: {
      gap: "6px",
    },
  },
})

// 오른쪽 학술활동 콘텐츠
export const academicContent = style({
  width: vw(1330),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1330px",
    },
    [breakpoints.desktop]: {
      width: "100%",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
})

export const academicContentTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24),
  lineHeight: vw(36),
  color: "#272727",
  margin: 0,
  marginBottom: vw(30),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.desktop]: {
      fontSize: "20px",
      lineHeight: "30px",
      marginBottom: "40px",
    },
    [breakpoints.mobile]: {
      fontSize: "18px",
      lineHeight: "28px",
      marginBottom: "30px",
    },
  },
})

export const academicTable = style({
  position: "relative",
  width: "100%",
  height: vw(628),
  maxHeight: vw(628),
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "628px",
      maxHeight: "628px",
    },
    [breakpoints.desktop]: {
      height: "auto",
      maxHeight: "628px",
    },
    [breakpoints.mobile]: {
      height: "auto",
      maxHeight: "400px",
    },
  },
})

export const academicTableContainer = style({
  width: vw(1255),
  height: "100%",
  maxHeight: vw(628),
  overflowY: "hidden",
  overflowX: "hidden",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1255px",
      height: "628px",
    },
    [breakpoints.desktop]: {
      width: "100%",
      height: "auto",
      overflowY: "visible",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
      overflowY: "visible",
    },
  },
})

// 첫 번째 행 스타일
export const firstRow = style({
  borderTop: "2px solid #707070",
})

// 마지막 행 스타일
export const lastRow = style({
  borderBottom: "2px solid #707070 !important",
})

export const academicTableRow = style({
  display: "flex",
  alignItems: "center",
  gap: vw(30),
  padding: `${vw(30)} 0`,
  borderBottom: "1px solid #707070",
  height: vw(104),
  minHeight: vw(104),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "30px",
      padding: "30px 0",
      height: "104px",
      minHeight: "104px",
    },
    [breakpoints.desktop]: {
      gap: "20px",
      padding: "28px 0",
      flexDirection: "column",
      alignItems: "flex-start",
      minHeight: "auto",
    },
    [breakpoints.mobile]: {
      gap: "16px",
      padding: "24px 0",
      flexDirection: "column",
      alignItems: "flex-start",
      minHeight: "auto",
    },
  },
})

export const academicRowDate = style({
  width: vw(120),
  flexShrink: 0,
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20),
  lineHeight: vw(30),
  color: "#272727",
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "120px",
      fontSize: "20px",
      lineHeight: "30px",
    },
    [breakpoints.desktop]: {
      width: "auto",
      fontSize: "18px",
      lineHeight: "27px",
    },
    [breakpoints.mobile]: {
      width: "auto",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

export const academicRowCategory = style({
  width: vw(150),
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "150px",
    },
    [breakpoints.desktop]: {
      width: "auto",
      justifyContent: "flex-start",
    },
    [breakpoints.mobile]: {
      width: "auto",
      justifyContent: "flex-start",
    },
  },
})

export const categoryBadge = style({
  width: vw(70),
  height: vw(70),
  borderRadius: "50%",
  border: "2px solid #14AEFF",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(20),
  lineHeight: vw(28),
  color: "#14AEFF",
  flexShrink: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "70px",
      height: "70px",
      fontSize: "20px",
      lineHeight: "28px",
    },
    [breakpoints.desktop]: {
      width: "56px",
      height: "56px",
      fontSize: "16px",
      lineHeight: "22px",
    },
    [breakpoints.mobile]: {
      width: "48px",
      height: "48px",
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
})

export const academicRowEvent = style({
  width: vw(320),
  flexShrink: 0,
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(20),
  lineHeight: vw(28),
  color: "#272727",
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "320px",
      fontSize: "20px",
      lineHeight: "28px",
    },
    [breakpoints.desktop]: {
      width: "100%",
      fontSize: "18px",
      lineHeight: "25px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
})

export const academicRowTitle = style({
  width: vw(485),
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(16),
  lineHeight: vw(25.6),
  color: "#272727",
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "485px",
      fontSize: "16px",
      lineHeight: "25.6px",
    },
    [breakpoints.desktop]: {
      width: "100%",
      fontSize: "16px",
      lineHeight: "24px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      fontSize: "14px",
      lineHeight: "22px",
    },
  },
})

export const scrollIndicator = style({
  position: "absolute",
  top: 0,
  right: 48,
  width: vw(27),
  height: vw(69),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  writingMode: "vertical-rl",
  gap: vw(0),
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.desktop]: {
      display: "none",
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
})

export const scrollText = style({
  position: "absolute",
  top: vw(5),
  left: vw(15),
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(18),
  lineHeight: vw(27),
  color: "#14AEFF",

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      lineHeight: "27px",
    },
    [breakpoints.desktop]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
})

export const scrollIcon = style({
  width: vw(12),
  height: vw(70),
  objectFit: "contain",

  "@media": {
    [breakpoints.desktopLarge]: {},
  },
})

// 타임라인 그래피티 섹션
export const timelineGraffitiSection = style({
  width: "100%",
  backgroundColor: "#FFFFFF",

  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {},
  },
})

// 타임라인 그래피티 이미지
export const timelineGraffiti = style({
  width: "100%",
  height: "auto",
  display: "block",
})

// ========== 모바일 전용 스타일 ==========

// 모바일 전용 컨테이너
export const doctorMobileContainer = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100vw",
      backgroundColor: "#73D5FA",
      position: "relative",
      overflow: "hidden",
    },
  },
})

// 모바일 헤더 (신승규 원장만)
export const doctorMobileHeader = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: `${mvw(80)} ${mvw(16)} ${mvw(60)} ${mvw(16)}`,
      backgroundColor: "#73D5FA",
    },
  },
})

// 모바일 타이틀
export const doctorMobileTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: mvw(36),
  lineHeight: "120%",
  color: "#000000",
  textAlign: "center",
  margin: 0,
  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
  },
})

// 모바일 의사 이미지 컨테이너
export const doctorMobileImage = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100vw",
      height: mvw(400),
      position: "relative",
      overflow: "hidden",
    },
  },
})

// 모바일 의사 이미지
export const doctorMobileImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center top",
})

// 모바일 의사 정보
export const doctorMobileInfo = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      padding: `${mvw(32)} ${mvw(24)}`,
      backgroundColor: "#73D5FA",
      gap: mvw(16),
      alignItems: "flex-start",
    },
  },
})

// 모바일 의사 이름
export const doctorMobileName = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: mvw(44),
  lineHeight: mvw(48),
  letterSpacing: "-0.02em",
  color: "#FFFFFF",
  margin: 0,
})

// 모바일 의사 직책
export const doctorMobilePosition = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 300,
  fontSize: mvw(14),
  lineHeight: mvw(20),
  color: "#000000",
  margin: 0,
  opacity: 0.8,
})

// 모바일 Quote 섹션
export const doctorMobileQuote = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
      padding: `${mvw(32)} ${mvw(24)}`,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: 0,
    },
  },
})

// 모바일 Quote 텍스트
export const doctorMobileQuoteText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 300,
  fontSize: mvw(16),
  lineHeight: mvw(24),
  color: "#000000",
  textAlign: "center",
  margin: 0,
})

// 모바일 자격사항 섹션
export const doctorMobileCredentials = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
      padding: `${mvw(40)} ${mvw(24)}`,
      backgroundColor: "#73D5FA",
    },
  },
})

// 모바일 자격사항 리스트
export const doctorMobileCredentialList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: mvw(12),
})

// 모바일 자격사항 아이템
export const doctorMobileCredentialItem = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 300,
  fontSize: mvw(14),
  lineHeight: mvw(20),
  color: "#FFFFFF",
  margin: 0,
  paddingLeft: mvw(16),
  position: "relative",
  "::before": {
    content: '"•"',
    position: "absolute",
    left: 0,
    color: "#FFFFFF",
  },
})
