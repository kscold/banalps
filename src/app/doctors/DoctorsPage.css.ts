import { style, keyframes } from "@vanilla-extract/css"
import {
  breakpoints,
  vw,
  responsiveFont,
  responsiveContainer,
  responsiveLeftContent,
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
      padding: "80px 0",
    },
  },
})

export const medicalTeamContainer = style({
  ...responsiveLeftContent(),
  //   ...responsiveContainer(1600),
  padding: vw(0),
  display: "flex",
  flexDirection: "column",
  //   gap: vw(120),
  "@media": {
    [breakpoints.desktopLarge]: {
      //   gap: "120px",
    },
    [breakpoints.mobile]: {
      gap: "80px",
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
      flexDirection: "column",
      height: "auto",
      gap: "40px",
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
      position: "relative",
      top: "0",
      right: "0",
      width: "100%",
      height: "150px",
      margin: "20px 0",
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
      left: "20px",
      bottom: "20px",
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
  backgroundColor: "#73D5FA", // 파란 배경
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
      width: "100%",
      height: "auto",
      padding: "20px",
      margin: "40px auto",
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
      position: "relative",
      flexDirection: "column",
      gap: "40px",
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
      position: "relative",
      flexDirection: "column",
      gap: "40px",
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
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      overflowX: "auto",
      position: "relative",
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
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      overflowX: "auto",
      position: "relative",
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
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      overflowX: "auto",
      position: "relative",
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

// 연도 선택 부분
export const yearSelection = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "80px",
    },
    [breakpoints.mobile]: {
      marginBottom: "60px",
    },
  },
})

export const yearButtons = style({
  display: "flex",
  gap: vw(24),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "24px",
    },
    [breakpoints.mobile]: {
      gap: "16px",
    },
  },
})

export const yearButton = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24),
  lineHeight: vw(30),
  letterSpacing: "0",
  color: "#BBBBBB",
  backgroundColor: "transparent",
  border: "none",
  padding: `${vw(16)} ${vw(32)}`,
  borderRadius: vw(12),
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      lineHeight: "30px",
      padding: "16px 32px",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      fontSize: "18px",
      lineHeight: "24px",
      padding: "12px 24px",
    },
  },
  ":hover": {
    color: "#14AEFF",
    backgroundColor: "rgba(20, 174, 255, 0.1)",
  },
})

export const yearButtonActive = style({
  color: "#14AEFF !important",
  backgroundColor: "rgba(20, 174, 255, 0.1)",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: vw(-8),
    left: "50%",
    transform: "translateX(-50%)",
    width: "60%",
    height: vw(3),
    backgroundColor: "#14AEFF",
    borderRadius: vw(2),
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      "::after": {
        bottom: "-8px",
        height: "3px",
        borderRadius: "2px",
      },
    },
  },
})

// 연혁 콘텐츠
export const historyContent = style({
  width: "100%",
})

export const historyGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: vw(120),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "120px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gap: "60px",
    },
  },
})

// 섹션 타이틀 (학회 발표, 논문)
export const sectionTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32),
  lineHeight: vw(40),
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "32px",
      lineHeight: "40px",
      marginBottom: "40px",
    },
    [breakpoints.mobile]: {
      fontSize: "24px",
      lineHeight: "30px",
      marginBottom: "30px",
    },
  },
})

// 학회 발표 섹션
export const presentationSection = style({
  width: "100%",
})

export const presentationList = style({
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

export const presentationItem = style({
  display: "flex",
  gap: vw(24),
  padding: vw(24),
  backgroundColor: "#F8F9FA",
  borderRadius: vw(16),
  borderLeft: `${vw(4)} solid #14AEFF`,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "24px",
      padding: "24px",
      borderRadius: "16px",
      borderLeft: "4px solid #14AEFF",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "16px",
      padding: "20px",
    },
  },
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  },
})

export const presentationDate = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  ...responsiveFont(16),
  lineHeight: vw(20),
  color: "#14AEFF",
  minWidth: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "20px",
      minWidth: "80px",
    },
    [breakpoints.mobile]: {
      minWidth: "auto",
    },
  },
})

export const presentationContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: vw(8),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "8px",
    },
  },
})

export const presentationTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(18),
  lineHeight: vw(24),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      lineHeight: "24px",
    },
  },
})

export const presentationDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(14),
  lineHeight: vw(20),
  color: "#666666",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
})

// 논문 섹션
export const paperSection = style({
  width: "100%",
})

export const paperList = style({
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

export const paperItem = style({
  display: "flex",
  gap: vw(24),
  padding: vw(24),
  backgroundColor: "#F8F9FA",
  borderRadius: vw(16),
  borderLeft: `${vw(4)} solid #FF6B6B`,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "24px",
      padding: "24px",
      borderRadius: "16px",
      borderLeft: "4px solid #FF6B6B",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "16px",
      padding: "20px",
    },
  },
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  },
})

export const paperDate = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  ...responsiveFont(16),
  lineHeight: vw(20),
  color: "#FF6B6B",
  minWidth: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "20px",
      minWidth: "80px",
    },
    [breakpoints.mobile]: {
      minWidth: "auto",
    },
  },
})

export const paperContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: vw(8),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "8px",
    },
  },
})

export const paperTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(18),
  lineHeight: vw(24),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      lineHeight: "24px",
    },
  },
})

export const paperJournal = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(14),
  lineHeight: vw(20),
  color: "#14AEFF",
  margin: 0,
  fontStyle: "italic",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
})

export const paperAuthors = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(14),
  lineHeight: vw(20),
  color: "#666666",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
})
