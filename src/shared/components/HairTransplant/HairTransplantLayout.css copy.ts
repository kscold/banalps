import { style } from "@vanilla-extract/css";
import {
  responsiveContainer,
  vw,
  mvw,
  responsiveFont,
  breakpoints,
} from "@/shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

// 페이지 전체 스타일
export const page = style({
  minHeight: "100vh",
  backgroundColor: "#FFFDF7", // 헤어라인 페이지는 흰색 배경
});

// Hero Section Styles
export const HairTransplantHeroSection = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "visible",
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.mobile]: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: mvw(90),
    },
  },
});

export const HairTransplantHeroContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  margin: "0 auto",
  height: "100vh",
  "@media": {
    [breakpoints.mobile]: {
      padding: `0 ${mvw(20)}`,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
});

export const HairTransplantHeroIllustration = style({
  position: "absolute",
  left: "0", // 1920px 컨테이너의 맨 왼쪽부터 시작
  width: vw(1750), // 기본 width 설정
  top: "50%",
  transform: "translateY(-50%)",
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1750px", // 헤더와 완전히 동일한 최대 너비
      height: "765px", // 고정 높이
      left: "calc(50% - 800px)", // 1600px 컨테이너 기준 왼쪽 위치 고정
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const HairTransplantHeroTitleWrapper = style({
  ...responsiveContainer(1600),
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: vw(60),
  zIndex: 2,
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingRight: "60px",
      width: "1600px", // 고정 너비
      left: "50%", // 중앙 정렬
      transform: "translateX(-50%)", // 중앙 정렬
      right: "auto", // right 제거
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "block",
      padding: "0",
      marginTop: mvw(80),
      width: "100%",
    },
  },
});

export const HairTransplantHeroTitleContainer = style({
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translateY(-50%)",
  textAlign: "left",
  zIndex: 3,
  right: "0",
  marginRight: vw(160),
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "auto", // right: 0 제거하여 고정
      width: "calc(100% - 200px)", // 고정 너비
      maxWidth: "1400px", // 최대 너비 제한
      marginRight: "160px",
      paddingLeft: "40px",
      paddingRight: "60px",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      width: "100%",
      position: "static",
      top: "0px",
      transform: "none",
      textAlign: "center",
      marginRight: "0",
      paddingLeft: "0",
      paddingRight: "0",
      right: "auto",
    },
  },
});

export const HairTransplantHeroTitle = style({
  position: "relative", // 점의 부모가 되도록 relative 추가
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60, 40),
  letterSpacing: "0",
  lineHeight: vw(72),
  color: "#272727",
  margin: "0",
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(40),
      lineHeight: mvw(48),
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const HairTransplantHeroTitleDot = style({
  width: vw(12),
  height: vw(12),
  backgroundColor: "#14AEFF",
  borderRadius: "50%",
  marginLeft: vw(4),
  flexShrink: 0,
  alignSelf: "flex-end", // 모바일에서는 하단 정렬
  marginBottom: vw(12), // 약간의 하단 여백
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "12px",
      height: "12px",
      marginLeft: "4px",
      marginBottom: "12px",
    },
    [breakpoints.mobile]: {
      width: mvw(15),
      height: mvw(15),
      marginLeft: mvw(15),
      alignSelf: "flex-end", // 모바일에서는 하단 정렬
      marginBottom: mvw(10), // 약간의 하단 여백
    },
  },
});

// Absolute 방점
export const HairTransplantHeroTitleDotAbsolute = style({
  position: "absolute",
  width: vw(12),
  height: vw(12),
  backgroundColor: "#14AEFF",
  borderRadius: "50%",
  left: vw(235),
  bottom: vw(12),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "12px",
      height: "12px",
      left: "235px", // 부모 컨테이너 기준 고정 위치
      bottom: "12px",
    },
    [breakpoints.mobile]: {
      width: mvw(10),
      height: mvw(10),
      left: mvw(160),
      bottom: mvw(10),
    },
  },
});

// Hairline Hero Section
export const heroSection = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  // Hero 섹션은 전체 1920px 사용

  "@media": {
    [breakpoints.mobile]: {
      // minHeight: mvw(600), // 모바일 전체 높이 축소
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: mvw(90), // 상단 여백
    },
  },
});

export const heroContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px", // Hero는 1920px 전체 사용
  margin: "0 auto",
  height: "100vh",
  "@media": {
    [breakpoints.mobile]: {
      padding: `0 ${mvw(20)}`, // 모바일 좌우 패딩
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
});

export const heroIllustration = style({
  position: "absolute",
  left: "0", // 1920px 컨테이너의 맨 왼쪽부터 시작
  width: "1750px", // 헤더와 완전히 동일한 최대 너비
  maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한 (양쪽 160px 마진)
  top: "50%",
  transform: "translateY(-50%)",
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1750px", // 고정 너비
      height: "765px", // 고정 높이
      left: "85px", // 1920px 기준 고정 위치
      maxWidth: "1750px", // maxWidth 고정
      transform: "translateY(-50%)", // transform 유지
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const heroIllustrationImage = style({
  width: "100%",
  height: "100%", // 컨테이너 높이에 맞춤
  // objectFit: "cover", // contain에서 cover로 변경하여 전체 영역을 채움
  objectPosition: "center right", // 이미지를 오른쪽으로 정렬하여 헤더와 맞춤
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const heroIllustrationImageMobile = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
      height: "auto",
      marginTop: mvw(80),
    },
  },
});

export const heroTitleWrapper = style({
  ...responsiveContainer(1600), // 헤더와 일치하는 1600px 컨테이너
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end", // 오른쪽 정렬
  paddingRight: vw(60), // 헤더와 동일한 패딩
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingRight: "60px", // 헤더와 동일한 고정 패딩
    },
    [breakpoints.mobile]: {
      width: "100%",
      position: "relative",
      justifyContent: "center",
      paddingRight: "0",
      alignItems: "center",
      paddingTop: "0",
      top: "0px",
      zIndex: 10,
    },
  },
});

export const heroTitleContainer = style({
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translateY(-50%)",
  textAlign: "left",
  zIndex: 3,
  right: "0", // 오른쪽에서 시작
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "auto", // right: 0 제거하여 고정
      width: "calc(100% - 200px)", // 고정 너비
      maxWidth: "1400px", // 최대 너비 제한
      marginRight: "160px", // 1920px+ 고정 마진
      paddingLeft: "40px",
      paddingRight: "60px", // 헤더와 동일한 고정 패딩
    },
    [breakpoints.mobile]: {
      width: "100%",
      position: "static",
      top: "0px",
      transform: "none",
      textAlign: "center",
      marginRight: "0",
      paddingLeft: "0",
      paddingRight: "0",
      right: "auto",
    },
  },
});

// Hairline Hero Title - Figma 디자인에 맞게 60px
export const heroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500, // Figma에서 Medium weight
  ...responsiveFont(60, 40), // 1920px 기준 60px, 모바일 40px
  letterSpacing: "0", // Figma에서 0
  lineHeight: vw(72), // Figma에서 72px
  color: "#272727",
  margin: "0",
  textAlign: "left",

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      marginTop: mvw(58),
      lineHeight: mvw(48),
      fontSize: mvw(40),
    },
  },
});

export const heroContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "@media": {
    [breakpoints.mobile]: {
      padding: `0 ${mvw(20)}`,
    },
  },
});

export const heroSubtitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 300,
  ...responsiveFont(20, 16),
  lineHeight: vw(30),
  color: "#ffffff",
  marginTop: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
      marginTop: "20px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(24),
      marginTop: mvw(16),
    },
  },
});

export const heroTitleDot = style({
  display: "inline-block",
  width: vw(20),
  height: vw(20),
  backgroundColor: "#14AEFF",
  borderRadius: "50%",
  marginLeft: vw(20),
  flexShrink: 0,
  verticalAlign: "middle", // 텍스트와 수직 정렬
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "20px",
      height: "20px",
      marginLeft: "20px",
    },
    [breakpoints.mobile]: {
      width: mvw(14),
      height: mvw(14),
      marginLeft: mvw(14),
    },
  },
});

// Section 1: 얼굴 윤곽의 완성은 헤어라인입니다
export const section1 = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),
  backgroundColor: "#FFFDF7", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "120px", // 1920px+ 고정
      paddingBottom: "120px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      padding: `${mvw(120)} 0  ${mvw(60)} 0`, // 좌우 패딩 제거
    },
  },
});

export const section1Content = style({
  position: "relative",
  maxWidth: "1920px", // 1920px 이상에서 컨테이너 너비 제한
  margin: "0 auto", // 중앙 정렬
  display: "grid",
  gridTemplateColumns: "1fr 1fr", // 50:50 분할
  height: vw(810), // 1920px 기준 높이

  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1920px", // 명시적으로 최대 너비 제한
      width: "1920px", // 고정 너비
      height: "810px", // 고정 높이
    },
    [breakpoints.desktop]: {
      maxWidth: "100%", // 1024-1920px에서는 100%
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: `0 ${mvw(20)}`,
      // minHeight: mvw(800),
    },
  },
});

export const section1Left = style({
  position: "relative",
  width: vw(655),
  height: vw(810),
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작 (피그마 레이아웃에 맞게)
  paddingTop: vw(80), // 제목이 오른쪽 이미지와 수평 맞춤을 위해 상단 패딩 추가
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "655px", // 고정 너비
      height: "810px", // 고정 높이
      paddingTop: "80px", // 고정 패딩
      paddingLeft: "160px", // 고정 패딩
      paddingRight: "60px", // 고정 패딩
      paddingBottom: "0", // 고정 패딩
    },
    [breakpoints.desktop]: {
      paddingLeft: vw(60),
      paddingRight: vw(80),
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto", // Changed from 100% to auto for dynamic height
      minHeight: mvw(600), // Minimum height to prevent compression
      position: "static",
      paddingTop: "0",
      padding: "0",
      order: 2,
      alignItems: "center",
      textAlign: "center",
    },
  },
});

export const section1Text = style({
  width: vw(655), // 1920px 기준 너비
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "655px", // 고정 너비
      paddingLeft: "0",
    },
    [breakpoints.mobile]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
});

export const section1TitleMobileWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
});

export const section1Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(40), // 1920px 기준 40px
  lineHeight: vw(56), // 1920px 기준 56px
  letterSpacing: "0",
  margin: `0 0 ${vw(40)} 0`, // 1920px 기준 40px 마진
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "40px", // 고정 폰트
      lineHeight: "56px", // 고정 라인 높이
      margin: "0 0 40px 0", // 고정 마진
      letterSpacing: "0",
    },
    [breakpoints.mobile]: {
      display: "block", // Changed to block for natural text flow
      width: "100%", // Full width
      textAlign: "left", // Center align text
      fontSize: mvw(20),
      margin: `0 0 ${mvw(40)} 0`,
      lineHeight: mvw(28), // Better line height for mobile
      letterSpacing: "0",
    },
  },
});

export const section1Image = style({
  // 피그마 디자인에 맞게 텍스트 아래에 자연스럽게 배치
  width: vw(537), // 1920px 기준 너비
  height: vw(366), // 1920px 기준 높이
  marginTop: vw(40), // 제목과의 간격
  marginBottom: vw(40), // 설명과의 간격
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "537px", // 고정 너비
      height: "366px", // 고정 높이
      marginTop: "40px", // 고정 마진
      marginBottom: "40px", // 고정 마진
    },
    [breakpoints.mobile]: {
      width: "100%", // Changed to be responsive
      maxWidth: mvw(375),
      height: "auto",
      margin: `${mvw(30)} 0`,
    },
  },
});

export const section1Illustration = style({
  width: "100%",
  height: "100%",
  borderRadius: vw(8),
  objectFit: "contain",
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "8px", // 고정 border-radius
    },
    [breakpoints.mobile]: {
      height: "100%",
    },
  },
});

export const section1MobileIllustration = style({
  display: "none", // Hidden on desktop
  width: vw(537),
  height: vw(366),
  "@media": {
    [breakpoints.desktopLarge]: {
      display: "none",
    },
    [breakpoints.mobile]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%", // Full width of container
      marginTop: mvw(40),
      marginBottom: mvw(20),
    },
  },
});

export const section3CenterIllustrationImage = style({
  width: "100%",
  height: "auto",
  objectFit: "contain",
});

export const section1Description = style({
  // 피그마 디자인에 맞게 일러스트 아래에 자연스럽게 배치
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(20), // 1920px 기준 20px
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  maxWidth: vw(500), // 텍스트 최대 너비 설정 (가독성 향상)
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px", // 고정 폰트
      lineHeight: "30px", // 고정 라인 높이
      maxWidth: "500px", // 고정 최대 너비
      letterSpacing: "0",
    },
    [breakpoints.mobile]: {
      fontFamily: fontFamily.scdream,
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
      maxWidth: "100%",
      width: "100%",
      fontWeight: 400,
    },
  },
});

export const section1Number = style({
  position: "absolute",
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontStyle: "Regular",
  fontWeight: 400,
  letterSpacing: "0%",
  color: "#272727",
  zIndex: 3,
  fontSize: vw(200),
  lineHeight: vw(240),

  "@media": {
    [breakpoints.desktopLarge]: {
      top: "40px",
      left: "700px", // 절대값으로 고정
      fontSize: "200px",
      lineHeight: "240px",
      transform: "none",
    },
    [breakpoints.desktop]: {
      top: vw(40),
      left: vw(700),
      fontSize: vw(200),
      lineHeight: vw(240),
    },
    [breakpoints.mobile]: {
      position: "absolute",
      // left: "auto",
      // transform: "none",
      fontSize: mvw(60),
      width: "auto",
      height: "auto",
      top: mvw(0),
      right: mvw(16),
      lineHeight: mvw(72),
      textAlign: "center",
      zIndex: 1,
    },
  },
});

export const section1Right = style({
  position: "relative",
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      position: "relative", // 명시적 relative
      maxWidth: "960px", // 1920px 기준 고정 최대 너비
      width: "960px", // 고정 너비
      height: "810px", // 고정 높이
      marginLeft: "auto", // 오른쪽 정렬
    },
    [breakpoints.desktop]: {
      width: "100%",
      height: vw(810),
      maxWidth: vw(960),
    },
    [breakpoints.mobile]: {
      order: 1,
      display: "flex",
      flexDirection: "column",
      gap: mvw(20),
      alignItems: "center",
      height: "auto", // Dynamic height
      minHeight: "auto", // Remove minimum height
      width: "100%",
      position: "relative", // Keep relative positioning
    },
  },
});

// 피그마 Frame 2463 (600x660) - 대형 이미지 (오른쪽 상단)
export const section1Image1 = style({
  position: "absolute",
  right: "0",
  top: vw(80),
  width: vw(600),
  height: vw(660),
  maxWidth: vw(600),
  aspectRatio: "600 / 660",
  "@media": {
    [breakpoints.desktopLarge]: {
      position: "absolute",
      top: "80px",
      right: "0px",
      width: "600px", // !important 제거
      height: "660px", // !important 제거
      maxWidth: "600px",
      maxHeight: "660px",
      boxSizing: "border-box", // box-sizing 명시
    },
    [breakpoints.mobile]: {
      position: "static",
      // width: "100%",
      // height: "auto",
      // aspectRatio: "600 / 660", // Keep aspect ratio

      //피그마대로
      width: "100%",
      height: "19.75rem",
      aspectRatio: "546/425",
      maxWidth: "100%",
      top: "auto",
      alignItems: "center",
      right: "auto",
      borderRadius: mvw(12),
      overflow: "hidden",
      marginBottom: mvw(40),
      display: "block",
    },
  },
});

// 피그마 Frame 15407 (350x315) - 소형 이미지 (왼쪽 하단)
export const section1Image2 = style({
  position: "absolute",
  left: vw(80),
  bottom: vw(130),
  width: vw(350),
  height: vw(315),
  maxWidth: vw(350),
  aspectRatio: "350 / 315",
  "@media": {
    [breakpoints.desktopLarge]: {
      position: "absolute",
      left: "80px",
      bottom: "130px",
      width: "350px", // !important 제거
      height: "315px", // !important 제거
      maxWidth: "350px",
      maxHeight: "315px",
      boxSizing: "border-box",
    },
    [breakpoints.mobile]: {
      position: "static",
      width: "100vw",
      height: "auto",
      aspectRatio: "350 / 315", // Keep aspect ratio
      maxWidth: "100vw",
      marginLeft: mvw(-20),
      marginRight: mvw(-20),
      left: "auto",
      bottom: "auto",
      borderRadius: mvw(12),
      overflow: "hidden",
      marginTop: mvw(40),
      display: "block",
    },
  },
});

export const section1ImageContent = style({
  width: "100%",
  height: "100%",
  borderRadius: vw(8),
  objectFit: "cover",
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "8px", // 고정 border-radius
    },
    [breakpoints.mobile]: {
      borderRadius: mvw(12),
    },
  },
});

// Section 2: 빼곡하고 자연스럽게
export const section2 = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),

  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "120px", // 1920px+ 고정
      paddingBottom: "120px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      paddingTop: mvw(60),
      paddingBottom: mvw(60),
    },
  },
});

export const section2Content = style({
  position: "relative",
  maxWidth: "1920px", // 1920px 이상에서 컨테이너 너비 제한
  margin: "0 auto", // 중앙 정렬
  display: "grid",
  gridTemplateColumns: "1fr 1fr", // 50:50 분할
  alignItems: "flex-start",
  height: vw(810), // 1920px 기준 높이
  overflow: "hidden", // 넘치는 요소 숨김
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1920px", // 고정 너비
      maxWidth: "1920px",
      height: "810px", // 고정 높이
      overflow: "hidden", // 넘치는 요소 숨김
    },
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      // minHeight: mvw(1050),
      gap: 0,
      padding: `0 ${mvw(20)}`,
      alignItems: "flex-start",
      position: "relative",
    },
  },
});

export const section2Left = style({
  position: "relative",
  width: vw(960),
  height: vw(810),
  overflow: "hidden",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "960px", // 고정 너비
      height: "810px", // 고정 높이
      maxWidth: "960px",
      marginLeft: "0", // 좌측 마진 제거
      padding: "0", // 명시적 0 패딩
      overflow: "hidden",
    },
    [breakpoints.mobile]: {
      position: "static",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      alignItems: "flex-start",
      height: "auto",
      width: "100%",
      padding: 0,
      marginLeft: 0,
      maxWidth: "100%",
    },
  },
});

export const section2Image = style({
  position: "absolute",
  borderRadius: vw(12),
  left: "0",
  top: 0,
  width: vw(830),
  height: vw(600),
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "0px",
      top: "0px",
      width: "830px",
      height: "600px",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      width: "100vw",
      height: mvw(305),
      marginLeft: mvw(-20),
      //모서리
      borderRadius: mvw(15),

      marginRight: mvw(-20),
      marginBottom: mvw(20),
      display: "block",
      overflow: "hidden",
    },
  },
});

export const section2ImageContent = style({
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: mvw(15),
      objectFit: "contain",
      width: "100%",
      overflow: "hidden",
      // 강제로 borderRadius 적용
    },
  },
});

// Section 2 데스크탑 일러스트레이션 (absolute 포지셔닝 가능)
export const section2DesktopIllustration = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2, // 텍스트 위에 표시
  "@media": {
    [breakpoints.mobile]: {
      display: "none", // 모바일에서는 숨김
    },
  },
});

// Section 2 모바일 일러스트레이션
export const section2Illustration = style({
  width: "100%",
  height: "auto",
  position: "absolute",
  "@media": {
    [breakpoints.desktopLarge]: {
      display: "none",
    },
    [breakpoints.desktop]: {
      display: "none",
    },
    [breakpoints.mobile]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: mvw(320),
      marginTop: mvw(60),
      borderRadius: mvw(15),
      marginBottom: mvw(-100),
    },
  },
});

export const section2IllustrationContent = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  borderRadius: mvw(15),
});

export const section2MobileIllustration = style({
  display: "none", // Hidden on desktop
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "center",

      borderRadius: mvw(12),
    },
  },
});

export const section2Right = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작
  width: vw(960),
  height: vw(810),
  paddingTop: vw(80),
  paddingLeft: vw(100),

  "@media": {
    [breakpoints.desktopLarge]: {
      width: "960px", // 고정 너비
      height: "810px", // 고정 높이
      paddingTop: "80px", // 고정 패딩
      paddingLeft: "100px", // 고정 패딩
      paddingBottom: "0",
      paddingRight: "0",
    },
    [breakpoints.mobile]: {
      order: 1,
      position: "static",
      paddingTop: "0",
      width: "100%",
      padding: "0",
      alignItems: "center",
      textAlign: "center",
    },
  },
});

// Section 2 숫자 2 스타일 (피그마 스펙: Nordnet Sans Mono, 200px, #272727)
export const section2NumberBg = style({
  position: "absolute",
  top: vw(-40), // section2Right의 paddingTop과 일치 (제목과 같은 높이)
  right: vw(0), // responsiveRightContent() 내에서 오른쪽으로 살짝 나가도록
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  ...responsiveFont(200), // 1920px 기준 200px 반응형 폰트 (피그마 스펙)
  lineHeight: vw(240), // 1920px 기준 240px (피그마 스펙)
  color: "#272727", // 피그마 스펙: 일반 색상, opacity 없음
  zIndex: 3, // 배경 뒤가 아닌 앞으로
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "-40px",
      right: "100px", // 절대값으로 고정
      fontSize: "200px", // 고정 폰트 크기
      lineHeight: "240px", // 고정 라인 높이
    },
    [breakpoints.mobile]: {
      position: "absolute",
      fontSize: mvw(60),
      width: "auto",
      height: "auto",
      top: mvw(0),
      right: mvw(16),
      lineHeight: mvw(72),
      textAlign: "center",
      zIndex: 1,
    },
  },
});

export const section2Text = style({
  position: "relative", // For absolute positioned SVGs
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: 0,
  padding: 0,
  gap: 0,
  alignItems: "stretch",
  "@media": {
    [breakpoints.desktopLarge]: {
      // 데스크톱 스타일 유지
    },
    [breakpoints.mobile]: {
      height: "auto",
      justifyContent: "flex-start",
      width: "100%",
      alignItems: "flex-start",
    },
  },
});

export const section2Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40, 28),
  lineHeight: vw(56),
  letterSpacing: "0",
  margin: `0 0 ${vw(40)} 0`,
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
      margin: "0 0 40px 0",
    },
    [breakpoints.mobile]: {
      display: "flex", // Enable flexbox
      alignItems: "center", // Vertical center alignment
      justifyContent: "left", // Horizontal center alignment
      fontSize: mvw(20),
      lineHeight: "150%",
      margin: `0 0 ${mvw(40)} 0`,
      textAlign: "left", // Center text alignment
      width: "100%", // Full width instead of fixed
    },
  },
});

export const section2AccentDescription = style({
  fontFamily: "'Pretendard', sans-serif", // 피그마 스펙: Pretendard
  fontWeight: 400, // 피그마 스펙: Regular = 400
  ...responsiveFont(20), // 1920px 기준 20px 반응형 (피그마 스펙)
  lineHeight: vw(30), // 1920px 기준 30px (피그마 스펙)
  letterSpacing: "0", // 피그마 스펙: 0
  margin: "0",
  color: "#272727", // 피그마 스펙: #272727
  "@media": {
    [breakpoints.mobile]: {
      lineHeight: "28px",
    },
  },
});

export const section2Description = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  ...responsiveFont(20, 16),
  lineHeight: vw(30),
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
      fontWeight: 400,
    },
  },
});

// Section2 SVG 컨테이너 스타일 - 제목과 설명 사이에 배치
export const section2SvgContainer = style({
  display: "flex",
  justifyContent: "flex-start", // 왼쪽 정렬
  alignItems: "center",
  marginTop: vw(60),
  marginBottom: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "60px",
      marginBottom: "60px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "150px",
      marginTop: "40px",
      marginBottom: "40px",
    },
  },
});

export const section2SvgImage = style({
  width: vw(418), // 피그마 디자인 정확한 크기
  height: vw(188), // 피그마 디자인 정확한 크기
  maxWidth: "100%",
  "@media": {
    [breakpoints.mobile]: {
      width: "150px",
      height: "auto",
    },
  },
});

export const section2Svg2 = style({
  position: "absolute",
  bottom: vw(0), // 텍스트 영역 하단 밖으로 나가도록
  right: vw(0), // 텍스트 영역의 오른쪽 끝에 맞춤
  width: vw(200), // 피그마 디자인에 맞게 크기 설정
  height: "auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "0px", // 1920px+ 고정
      right: "0px", // 1920px+ 고정
      width: "200px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      bottom: "-30px",
      right: "0px",
      width: "120px",
    },
  },
});

export const section2Quote = style({
  fontFamily: fontFamily.pretendard,
  fontWeight: 700, // 피그마 스펙: Regular = 400 (동일)
  ...responsiveFont(20), // 1920px 기준 20px 반응형 (피그마 스펙, 동일)
  lineHeight: vw(30), // 1920px 기준 30px (피그마 스펙, 동일)
  letterSpacing: "0", // 피그마 스펙: 0 (동일)
  color: "#272727", // 피그마 스펙: #272727 (동일)
  position: "relative",
  display: "inline",

  // 피그마 디자인에 맞는 더 큰 따옴표
  "::before": {
    color: "#272727",
    fontSize: vw(28), // 더 큰 따옴표 크기
    fontWeight: 500, // 약간 더 굵게
    lineHeight: vw(30),
  },

  "::after": {
    color: "#272727",
    fontSize: vw(28), // 더 큰 따옴표 크기
    fontWeight: 500, // 약간 더 굵게
    lineHeight: vw(30),
  },

  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
      "::before": {
        fontSize: "28px",
        lineHeight: "30px",
      },
      "::after": {
        fontSize: "28px",
        lineHeight: "30px",
      },
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      ":before": {
        display: "none",
      },
      ":after": {
        display: "none",
      },
      lineHeight: "28px",
    },
  },
});

// Section 3: 결국, 고객이 원하는 디자인이 좋은 디자인입니다
export const section3 = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),
  backgroundColor: "#FFFDF7", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "120px",
      paddingBottom: "120px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      paddingTop: mvw(60),
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      overflow: "hidden",
    },
  },
});

export const section3Content = style({
  position: "relative",
  maxWidth: "1920px", // 1920px 이상에서 컨테이너 너빔 제한
  margin: "0 auto", // 중앙 정렬
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start", // center -> flex-start로 변경하여 위쪽 정렬
  gap: vw(40),
  height: vw(810), // 1920px 기준 높이
  overflow: "hidden", // 넘치는 요소 숨김
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1920px", // 고정 너비
      maxWidth: "1920px", // 1920px로 제한하여 숫자 위치 고정
      height: "810px", // 고정 높이
      margin: "0 auto",
      gap: "40px", // gap도 고정
      overflow: "hidden", // 넘치는 요소 숨김
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: `0 ${mvw(20)}`,
      gap: mvw(20),
      width: "100%",
    },
  },
});

export const section3ContentWithSvg = style({
  ...responsiveContainer(1600),
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: vw(100),
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "100%",
      maxWidth: "1600px",
      margin: "0 auto",
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: `0 ${mvw(20)}`,
      gap: mvw(20),
      width: "100%",
    },
  },
});

export const section3Left = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignSelf: "flex-start", // 자신을 상단에 정렬
  width: vw(790),
  height: vw(810),
  paddingLeft: vw(160),
  paddingTop: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "790px", // 고정 너비
      height: "810px", // 고정 높이
      paddingLeft: "160px", // 고정 패딩
      paddingTop: "80px", // 고정 패딩
      marginLeft: "0",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "100%",
      position: "static",
      paddingTop: "0",
      padding: "0",
      order: 2,
      alignItems: "center",
      textAlign: "center",
      marginLeft: "0",
    },
  },
});

export const section3LeftWithSvg = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flex: "0 0 auto",
  width: vw(500),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "500px",
      padding: "0", // 명시적 0 패딩
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "100%",
      position: "static",
      paddingTop: "0",
      padding: "0",
      order: 2,
      alignItems: "center",
      textAlign: "center",
    },
  },
});

export const section3Text = style({
  position: "relative",
  marginBottom: vw(40),
  width: vw(790),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // 내용을 오른쪽 정렬
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "40px",
      width: "790px",
    },
    "(min-width: 1024px) and (max-width: 1300px)": {
      width: vw(600), // 1200px 부근에서 너비를 줄임
    },
    [breakpoints.mobile]: {
      width: "100%",
      marginBottom: 0,
      alignItems: "left",
    },
  },
});

// 모바일에서 숫자와 제목을 함께 배치하는 컨테이너
export const section3TitleContainer = style({
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "flex-start",
      gap: mvw(12),
      marginBottom: mvw(30),
    },
  },
});

export const section3Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40, 28), // 1920px 기준 40px, 모바일 28px
  lineHeight: vw(56), // 1920px 기준 56px
  letterSpacing: "0",
  margin: `0 0 ${vw(120)} 0`, // 1920px 기준 120px 마진
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
      margin: "0 0 120px 0", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      justifyContent: "center",
      width: mvw(204),
      height: mvw(106),
      textAlign: "left",
      fontSize: mvw(20),
      margin: `0 0 ${mvw(30)} 0`,
      lineHeight: "150%",
      letterSpacing: "0%",
    },
  },
});

export const section3Description = style({
  fontFamily: "'S-Core Dream', sans-serif", // 피그마 스펙: S-Core Dream
  fontWeight: 400, // 400으로 변경
  ...responsiveFont(20, 16), // 1920px 기준 20px, 모바일 16px
  lineHeight: vw(30), // 1920px 기준 30px (피그마 스펙)
  letterSpacing: "0", // 피그마 스펙: 0
  margin: "0",
  color: "#272727", // 피그마 스펙: #272727
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
      fontWeight: 400,
    },
  },
});

export const section3Number = style({
  position: "absolute",
  top: vw(-40),
  left: vw(650),
  zIndex: 3,
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  fontSize: vw(200),
  lineHeight: vw(240),
  color: "#272727",
  textAlign: "right",
  width: vw(118),
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "-40px",
      left: "650px", // 절대값으로 고정
      fontSize: "200px",
      lineHeight: "240px",
      width: "118px",
    },
    [breakpoints.desktop]: {
      top: vw(-40),
      left: vw(650),
    },
    [breakpoints.mobile]: {
      position: "absolute",
      fontSize: mvw(60),
      width: mvw(36),
      height: mvw(72),
      top: mvw(0),
      right: mvw(20),
      lineHeight: mvw(72),
      textAlign: "center",
      zIndex: 1,
    },
  },
});

export const section3Right = style({
  position: "relative",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: vw(960),
  height: vw(810),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "960px", // 고정 너비
      height: "810px", // 고정 높이
      maxWidth: "960px", // 최대 너비 제한
    },
    [breakpoints.mobile]: {
      order: 1,
      display: "flex",
      flexDirection: "column",
      gap: mvw(20),
      alignItems: "center",
      minHeight: "auto",
      width: "100%",
    },
  },
});

export const section3RightWithSvg = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: vw(40),
  width: vw(960),
  height: vw(810),
  // paddingTop: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "960px", // 고정 너비
      height: "810px", // 고정 높이
      gap: "40px", // 1920px+ 고정
      maxWidth: "960px", // 최대 너비 제한
    },
    [breakpoints.mobile]: {
      order: 1,
      display: "flex",
      flexDirection: "column",
      gap: mvw(20),
      alignItems: "center",
      minHeight: "auto",
      width: "100%",
      paddingTop: 0,
    },
  },
});

// Section 3 데스크탑 일러스트레이션 (absolute 포지셔닝용)
export const section3DesktopIllustration = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 3, // 텍스트나 이미지 위에 표시
  "@media": {
    [breakpoints.mobile]: {
      display: "none", // 모바일에서는 숨김
    },
  },
});

// Section 3 모바일 일러스트레이션
export const section3MobileIllustration = style({
  display: "none", // 데스크탑에서는 숨김
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: mvw(40),
      marginBottom: mvw(40),
    },
  },
});

// Section 2 모바일 이미지들 컨테이너
export const section2MobileImages = style({
  display: "none", // 데스크탑에서는 숨김
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: "2.5rem",
      width: "100%",
      marginTop: mvw(40),
      marginBottom: mvw(40),
    },
  },
});

// Section 2 모바일 개별 이미지
export const section2MobileImage = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

// Section 3 중앙 일러스트 스타일 (피그마 위치: x:425, y:400 기준으로 배치)
export const section3CenterIllustration = style({
  position: "absolute",
  top: vw(450), // 피그마 y: 400 기준
  left: vw(850),
  transform: "translateX(-50%)", // 좌우만 중앙 정렬, 세로는 고정
  width: vw(449), // 피그마 일러스트 너비 (Frame 401)
  height: vw(286), // 피그마 일러스트 높이 (Frame 401)
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2, // 좌우 컨텐츠 위에 배치
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "450px", // 1920px+ 고정
      left: "850px", // 1920px+ 고정
      width: "449px", // 1920px+ 고정
      height: "286px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      position: "static",
      transform: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: mvw(320),
      marginTop: mvw(60),
      marginBottom: mvw(-100),
    },
  },
});

// SVG가 있을 때 이미지 위치 조정을 위한 스타일
export const section3CenterIllustrationWithSvg = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  gap: vw(60),
  paddingTop: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "60px", // 1920px+ 고정
      paddingTop: "80px", // 1920px+ 고정
      width: "100%", // 고정 너비
      maxWidth: "1600px", // 최대 너비 제한
    },
    [breakpoints.mobile]: {
      position: "static",
      transform: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: mvw(320),
      marginTop: mvw(60),
      marginBottom: mvw(-100),
      paddingTop: 0,
      flexDirection: "column",
      gap: mvw(20),
    },
  },
});

export const section3Image = style({
  position: "absolute",
  right: "0",
  top: "0",
  width: vw(610),
  height: vw(550),
  aspectRatio: "610 / 550",
  "@media": {
    [breakpoints.desktopLarge]: {
      position: "absolute",
      right: "0px",
      top: "0px",
      width: "610px",
      height: "550px",
    },
    [breakpoints.desktop]: {
      position: "absolute",
      right: "0",
      top: "0",
      width: vw(610),
      height: vw(550),
    },
    [breakpoints.mobile]: {
      position: "static",
      width: "100%",
      height: mvw(305),
      maxWidth: mvw(375),
      top: "auto",
      right: "auto",
      aspectRatio: "auto",
      borderRadius: mvw(12),
      overflow: "hidden",
      marginBottom: mvw(40),
      display: "block",
      transform: "none",
    },
  },
});

export const section3ImageContent = style({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: 0,
    },
  },
});

// Before & After Section
export const beforeAfterSection = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "120px", // 1920px+ 고정
      paddingBottom: "120px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      padding: `${mvw(100)} ${mvw(20)}`,
    },
  },
});

export const beforeAfterContent = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

export const beforeAfterHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // 피그마: 좌우 분리 배치
  width: "100%",
  maxWidth: vw(790), // 슬라이더와 동일한 너비
  margin: "0 auto",
  marginBottom: vw(48), // 피그마 정확한 간격
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "790px",
      marginBottom: "48px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      marginBottom: mvw(48),
      gap: "1.5rem",
      alignItems: "center",
      textAlign: "center",
      margin: "0 auto",
    },
  },
});

export const beforeAfterCategory = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vw(8)} ${vw(35)}`,
  backgroundColor: "#14AEFF", // 피그마 Badge 배경색
  borderRadius: "999px", // 완전 둥근 모서리
  fontFamily: "'S-Core Dream', sans-serif", // 피그마 스펙
  fontWeight: 500,
  ...responsiveFont(24), // 피그마 정확한 크기
  lineHeight: vw(36),
  letterSpacing: "0",
  color: "#FFFFFF", // 흰색 텍스트
  margin: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "8px 35px",
      lineHeight: "36px",
    },
    [breakpoints.mobile]: {
      width: mvw(170),
      height: mvw(42),
      fontSize: mvw(18),
      lineHeight: mvw(28),
    },
  },
});

export const beforeAfterTitle = style({
  fontFamily: "'S-Core Dream', sans-serif", // 피그마 스펙
  fontWeight: 500,
  ...responsiveFont(24), // 피그마 정확한 크기
  lineHeight: vw(36),
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  whiteSpace: "nowrap",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "36px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      lineHeight: mvw(28),
      whiteSpace: "nowrap",
    },
  },
});

export const beforeAfterSliderWrapper = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "40px",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
});

export const beforeAfterSlider = style({
  maxWidth: vw(790), // 피그마 Frame 362 너비
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "790px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
    },
  },
});

export const beforeAfterActions = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "60px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [breakpoints.desktop]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [breakpoints.mobile]: {
      width: "100%",
      padding: `0 ${mvw(60)}`,
    },
  },
});

export const beforeAfterLink = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
});

export const sidePreviewSection = style({
  paddingTop: vw(120),
  paddingBottom: vw(120),
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "120px",
      paddingBottom: "120px",
    },
    [breakpoints.mobile]: {
      paddingTop: mvw(80),
      paddingBottom: mvw(80),
    },
  },
});

export const sidePreviewContent = style({
  ...responsiveContainer(1600),
});

export const sidePreviewSlider = style({
  width: "100%",
  height: "100%",
});
