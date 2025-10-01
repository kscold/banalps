import { style } from "@vanilla-extract/css";
import {
  responsiveContainer,
  vw,
  responsiveFont,
  responsiveSplitContainer,
  responsiveLeftContent,
  responsiveRightContent,
  responsiveAbsoluteImageContainer,
  responsiveAbsoluteImage,
  breakpoints,
} from "@/shared/styles/responsive.css";
import { mvw } from "@/shared/styles/responsive.utils";
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
    // 추가적인 모바일 브레이크포인트들
    "screen and (max-width: 768px)": {
      padding: `0 ${mvw(20)}`,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    "screen and (max-width: 480px)": {
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
  width: "1750px", // 헤더와 완전히 동일한 최대 너비
  maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한 (양쪽 160px 마진)
  top: "50%", // SVG일 때는 50%
  transform: "translateY(-50%)",
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1750px", // 고정 너비
      height: "765px", // 고정 높이
      left: "0 !important", // 왼쪽부터 시작 (강제 적용)
      maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한
    },
    [breakpoints.desktop]: {
      left: "0 !important", // 데스크탑에서도 왼쪽부터 시작
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
  top: "46%",
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
  whiteSpace: "pre-line", // 줄바꿈(\n)을 인식하도록 설정
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
      whiteSpace: "pre-line", // 데스크톱에서도 줄바꿈 인식
    },
    [breakpoints.mobile]: {
      fontSize: mvw(40),
      lineHeight: mvw(48),
      textAlign: "left",
      display: "block",
      whiteSpace: "normal", // 모바일에서는 기존대로
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
      width: mvw(10),
      height: mvw(10),
      marginLeft: mvw(4),
      marginBottom: 0, // 하단 여백 제거
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
  selectors: {
    'html[data-language="JP"] &': {},
  },
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
      left: mvw(0),
      bottom: mvw(0),
      selectors: {
        'html[data-language="JP"] &': {
          left: mvw(-3),
          bottom: mvw(-4),
        },
      },
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
  top: "43%", // 일반 이미지일 때는 43%
  transform: "translateY(-50%)",
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1750px", // 고정 너비
      height: "765px", // 고정 높이
      left: "0", // 왼쪽부터 시작
      maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

// SVG 전용 heroIllustration 스타일 (top: 50%)
export const heroIllustrationSvg = style({
  position: "absolute",
  left: "0", // 1920px 컨테이너의 맨 왼쪽부터 시작
  width: "1750px", // 헤더와 완전히 동일한 최대 너비
  maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한 (양쪽 160px 마진)
  top: "50%", // SVG일 때는 50%
  transform: "translateY(-50%)",
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1750px", // 고정 너비
      height: "765px", // 고정 높이
      left: "0", // 왼쪽부터 시작
      maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한
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
  marginTop: vw(120), // 1920px 기준 120px 상단 마진
  marginBottom: vw(120), // 1920px 기준 120px 하단 마진
  height: vw(800), // 1920px 기준 800px 높이
  backgroundColor: "#FFFDF7", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "120px", // 1920px+ 고정
      marginBottom: "120px", // 1920px+ 고정
      height: "800px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      padding: `${mvw(120)} 0  ${mvw(60)} 0`, // 모바일은 패딩 유지
      margin: 0, // 모바일 마진 제거
      height: "auto", // 모바일 높이 자동
    },
  },
});

export const section1Content = style({
  position: "relative", // absolute 포지셔닝을 위해 추가
  "@media": {
    [breakpoints.desktopLarge]: {
      ...responsiveSplitContainer(), // 1920px 기준 좌우 분할 레이아웃 (전체 너비 사용)
    },
    [breakpoints.desktop]: {
      ...responsiveSplitContainer(), // 1920px 기준 좌우 분할 레이아웃 (전체 너비 사용)
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: `0 ${mvw(16)}`,
      // minHeight: mvw(800),
    },
  },
});

export const section1Left = style({
  position: "relative",

  width: vw(655),
  height: vw(770),
  display: "flex",

  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작 (피그마 레이아웃에 맞게)
  // paddingTop: vw(80), // 제목이 오른쪽 이미지와 수평 맞춤을 위해 상단 패딩 추가
  "@media": {
    [breakpoints.desktopLarge]: {
      ...responsiveLeftContent(), // 헤더와 완벽한 정렬
      width: "655px",
      height: "770px",
      // paddingTop: "80px", // 1920px+ 고정
      paddingBottom: "0", // 명시적 0 패딩
      paddingLeft: "0",
      paddingRight: "0",
    },
    [breakpoints.desktop]: {
      ...responsiveLeftContent(), // 헤더와 완벽한 정렬
      paddingLeft: "0",
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 기본적으로 위에서부터 시작 (이미지 마진 적용)
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingLeft: "0",
    },
    [breakpoints.mobile]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start", // 모바일에서는 위에서부터 배치
    },
  },
});

export const section1TitleMobileWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
});

export const section1Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40, 28), // 1920px 기준 40px, 모바일 28px
  lineHeight: vw(56), // 1920px 기준 56px
  letterSpacing: "0",
  margin: `0 0 ${vw(40)} 0`, // 1920px 기준 40px 마진
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "40px", // 1920px+ 고정
      lineHeight: "56px", // 1920px+ 고정
      margin: "0 0 40px 0", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      display: "block", // Changed to block for natural text flow
      width: "100%", // Full width
      textAlign: "left", // Center align text
      fontSize: mvw(20),
      margin: `0 0 ${mvw(40)} 0`,
      lineHeight: mvw(28), // Better line height for mobile
      letterSpacing: "0",
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(24),
          fontWeight: 700,
        },
      },
    },
  },
});

export const section1Image = style({
  // 피그마 디자인에 맞게 텍스트 아래에 자연스럽게 배치
  width: "auto", // 너비를 auto로 설정하여 이미지 크기에 따라 조정
  height: "auto", // 비율 유지
  marginTop: vw(80), // 제목과의 간격
  marginBottom: vw(80), // 설명과의 간격
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "80px",
      marginBottom: "80px",
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
  height: "auto",
  borderRadius: "8px",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "100%", // 1920px+에서도 컨테이너에 맞춤
      height: "auto",
      maxWidth: "100%",
    },
    [breakpoints.mobile]: {
      height: "100%",
    },
  },
});

export const section1MobileIllustration = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: `calc(100vw - var(--scrollbar-width, 0px))`,
      marginLeft: mvw(-16),
      marginRight: mvw(-16),
      marginBottom: mvw(40),
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
  ...responsiveFont(20, 16), // 1920px 기준 20px, 모바일 16px
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  maxWidth: vw(540), // 텍스트 최대 너비 설정 (가독성 향상)
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px", // 1920px+ 고정
      lineHeight: "30px", // 1920px+ 고정
      maxWidth: "540px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      fontFamily: fontFamily.scdream,
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
      maxWidth: "100%",
      width: "100%",
      fontWeight: 400,
      marginBottom: mvw(40),
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(20),
        },
      },
    },
  },
});

export const section1Number = style({
  position: "absolute",
  fontFamily: fontFamily.nordnet,
  fontStyle: "Regular",
  fontWeight: 400,
  letterSpacing: "0%",
  color: "#272727",
  zIndex: 3,
  fontSize: vw(200),
  lineHeight: vw(240),

  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.nordnet,
    },
  },

  "@media": {
    [breakpoints.desktopLarge]: {
      top: "-40px",
      left: "260px",
      transform: "translateX(calc(-50% + 350px))", // 고정값
      fontSize: "200px",
      lineHeight: "240px",
    },
    [breakpoints.desktop]: {
      top: vw(-40),
      left: vw(545),
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
  ...responsiveAbsoluteImageContainer(770), // 810px 높이로 설정
  position: "relative",
  width: "100%",
  maxWidth: "100%", // 1920px+ 에서도 스케일링 방지
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "none", // maxWidth 제한 제거 - inline style로 제어
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

// 헤어라인 페이지 전용 section1Image 스타일 (marginTop: 67)
export const section1ImageHairline = style({
  // 피그마 디자인에 맞게 텍스트 아래에 자연스럽게 배치
  width: "auto", // 너비를 auto로 설정하여 이미지 크기에 따라 조정
  height: "auto", // 비율 유지
  marginTop: vw(67), // 헤어라인: 상단 67px
  marginBottom: vw(67), // 헤어라인: 하단 67px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "67px", // 1920px+ 고정
      marginBottom: "67px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      marginTop: mvw(67), // 모바일에서도 67 적용
      marginBottom: mvw(40),
    },
  },
});

// 피그마 Frame 2463 (600x660) - 대형 이미지 (오른쪽 상단)
export const section1Image1 = style({
  ...responsiveAbsoluteImage({
    position: { right: "0", top: vw(80) }, // 제목과 수평 맞춤
    width: "50%", // 컨테이너 대비 50% 크기
    aspectRatio: "600 / 660", // 피그마 비율 유지
    maxWidth: 600, // 최대 너비 600px
  }),
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "80px", // 1920px+ 고정 - section1Left의 paddingTop과 일치
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
  ...responsiveAbsoluteImage({
    position: { left: vw(80), bottom: vw(130) }, // 왼쪽에서 더 안쪽, 하단에서 더 위에 배치
    width: "35%", // 컨테이너 대비 35% 크기로 증가
    aspectRatio: "350 / 315", // 피그마 비율 유지
    maxWidth: 400, // 최대 너비를 400px로 증가
  }),
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "0px", // 1920px+ 고정 (더 안쪽으로)
      bottom: "100px", // 하단에서 더 위로
    },
    [breakpoints.mobile]: {
      position: "static",
      // width: "100%",
      height: "auto",
      aspectRatio: "350 / 315", // Keep aspect ratio
      // maxWidth: "100%",
      marginLeft: 0,
      marginRight: 0,
      left: "auto",
      bottom: "auto",
      // borderRadius: mvw(12),
      // overflow: "hidden",
      marginTop: mvw(40),
      display: "block",
    },
  },
});

export const section1ImageContent = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  "@media": {
    [breakpoints.mobile]: {
      objectFit: "cover",
      borderRadius: "8px",
    },
  },
});

export const section1ImageContent2 = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
  "@media": {
    [breakpoints.mobile]: {
      objectFit: "cover",
      borderRadius: 0,
    },
  },
});

// Section 2: 빼곡하고 자연스럽게
export const section2 = style({
  paddingTop: vw(200), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(200),

  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "200px", // 1920px+ 고정
      paddingBottom: "200px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      paddingTop: mvw(60),
      paddingBottom: mvw(60),
      minHeight: "auto",
      overflow: "visible",
    },
  },
});

export const section2Content = style({
  ...responsiveSplitContainer(),
  alignItems: "flex-start",
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: `0 ${mvw(16)}`,
      minHeight: "auto",
      overflow: "visible",
    },
  },
});

export const section2Left = style({
  ...responsiveAbsoluteImageContainer(810), // section1과 동일한 높이
  position: "relative",
  width: "100%",
  maxWidth: "960px",
  maxHeight: "696px",
  marginLeft: "max(calc((100vw - 1920px) / 2), 0px)", // 1920px 이상에서 중앙 정렬
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "960px",
      marginLeft: "max(calc((100vw - 1920px) / 2), 0px)",
      padding: "0", // 명시적 0 패딩
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
      maxHeight: "100%",
      overflow: "visible",
    },
  },
});

export const section2Image = style({
  position: "absolute",
  borderRadius: mvw(12),
  left: "0",
  top: 0, // 상단부터 시작
  width: vw(830), // 1920px 기준 830px 너비
  height: vw(600), // 1920px 기준 600px 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "830px", // 1920px+ 고정
      height: "600px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      position: "relative",
      width: `calc(100vw - ${mvw(32)})`, // Account for padding on both sides
      height: mvw(305),
      borderRadius: "8px",
      marginBottom: mvw(20),
      display: "block",
      overflow: "hidden",
    },
  },
});

export const section2ImageContent = style({
  height: "100%",

  objectFit: "cover",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: "8px",
      objectFit: "cover",
      width: "100%",
      // overflow: "hidden",
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
      justifyContent: "center",
      position: "relative",
      width: "100%", // Default width
      maxWidth: "none", // Allow full width expansion
    },
  },
});

export const section2Right = style({
  ...responsiveRightContent(), // 헤더와 정확히 정렬되는 오른쪽 콘텐츠
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작
  paddingTop: 0, // 상단 패딩 완전 제거
  paddingBottom: 0, // 하단 패딩도 제거

  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "0", // 1920px+에서도 상단 패딩 제거
      paddingBottom: "0",
      paddingLeft: "0",
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

// Crown 페이지 전용 section2Right 사이즈 제한
export const section2RightCrown = style({
  ...responsiveRightContent(),
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: 0,
  marginLeft: vw(90),
  maxWidth: vw(655), // 크라운 페이지에서만 최대 너비 제한
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "0",
      paddingBottom: "0",
      paddingLeft: "0",
      paddingRight: "0",
      marginLeft: "90px",
      maxWidth: "655px", // 1920px+에서도 고정 크기
    },
    [breakpoints.mobile]: {
      order: 1,
      position: "static",
      paddingTop: "0",
      width: "100%",
      padding: "0",
      alignItems: "center",
      textAlign: "center",
      maxWidth: "none", // 모바일에서는 제한 없음
    },
  },
});

// Section 2 숫자 2 스타일 (피그마 스펙: Nordnet Sans Mono, 200px, #272727)
export const section2NumberBg = style({
  position: "absolute",
  top: vw(-40), // section2Right의 paddingTop과 일치 (제목과 같은 높이)
  right: vw(0), // responsiveRightContent() 내에서 오른쪽으로 살짝 나가도록
  fontFamily: fontFamily.nordnet,
  fontWeight: 400,
  ...responsiveFont(200), // 1920px 기준 200px 반응형 폰트 (피그마 스펙)
  lineHeight: vw(240), // 1920px 기준 240px (피그마 스펙)
  color: "#272727", // 피그마 스펙: 일반 색상, opacity 없음
  zIndex: 3, // 배경 뒤가 아닌 앞으로
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.nordnet,
    },
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "-40px",
      right: "0px", // 고정값
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

export const section2TextScarReduction = style({
  position: "relative", // For absolute positioned SVGs
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  left: vw(290),
  margin: 0,
  padding: 0,
  gap: 0,
  alignItems: "stretch",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "290px", // 데스크탑에서 왼쪽으로 이동 (scar reduction 페이지만
    },
    [breakpoints.mobile]: {
      left: 0, // Reset left position for mobile
      height: "auto",
      justifyContent: "flex-start",
      width: "100%",
      alignItems: "center", // Center align for mobile
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
      fontSize: "40px", // 1920px+ 고정
      lineHeight: "56px", // 1920px+ 고정
      margin: "0 0 40px 0", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      display: "block", // Changed from flex to block to allow line breaks
      fontSize: mvw(20),
      lineHeight: "150%",
      margin: `0 0 ${mvw(40)} 0`,
      textAlign: "left",
      width: "100%",
      whiteSpace: "pre-line", // Allow line breaks from \n
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(24),
          fontWeight: 700,
        },
      },
    },
  },
});

// scar-reduction 페이지 전용 section2Title (데스크탑 marginBottom: 120px)
export const section2TitleScarReduction = style({
  margin: `0 0 ${vw(120)} 0`, // 데스크탑 하단 120px 간격
  "@media": {
    [breakpoints.desktopLarge]: {
      margin: "0 0 120px 0", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      margin: `0 0 ${mvw(40)} 0`, // 모바일은 기본값 유지
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
  whiteSpace: "nowrap",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px", // 1920px+ 고정
      lineHeight: "30px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      width: "100%",
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
      fontWeight: 400,
      margin: `${mvw(40)} 0`,
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(20),
        },
      },
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
    [breakpoints.desktopLarge]: {
      width: "418px", // 1920px+에서 고정 크기
      height: "188px", // 1920px+에서 고정 크기
      maxWidth: "418px",
      maxHeight: "188px",
    },
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
    "(max-width: 1500px)": {
      bottom: vw(-20), // 더 아래로 이동
      right: vw(-60), // 왼쪽으로 조금 이동
    },
    // 1320px 이하에서 글자와 겹치지 않도록 조정
    "(max-width: 1200px)": {
      bottom: vw(-20), // 더 아래로 이동
      right: vw(-100), // 왼쪽으로 조금 이동
    },
    [breakpoints.desktopLarge]: {
      bottom: "0px",
      right: "0px",
      width: "200px",
    },
    [breakpoints.mobile]: {
      bottom: "-30px",
      right: "0px",
      width: "120px",
    },
  },
});

export const section2Quote = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500, // 피그마 스펙: Regular = 400 (동일)
  fontSize: vw(20), // 1920px 기준 20px 반응형 (피그마 스펙, 동일)
  lineHeight: "150%", // 1920px 기준 30px (피그마 스펙, 동일)
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
      fontSize: "20px", // 1920px+ 고정
      lineHeight: "30px", // 1920px+ 고정
      "::before": {
        fontSize: "28px", // 1920px+ 고정
        lineHeight: "30px", // 1920px+ 고정
      },
      "::after": {
        fontSize: "28px", // 1920px+ 고정
        lineHeight: "30px", // 1920px+ 고정
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
      whiteSpace: "pre-line",
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(20),
          fontWeight: 700,
        },
      },
    },
  },
});

export const section2Conclusion = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  ...responsiveFont(20, 16),
  lineHeight: vw(30),
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px", // 1920px+ 고정
      lineHeight: "30px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
      fontWeight: 400,
      marginBottom: mvw(40),
    },
  },
});

// Section 3: 결국, 고객이 원하는 디자인이 좋은 디자인입니다
export const section3 = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(60),
  backgroundColor: "#FFFDF7", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "120px",
      paddingBottom: "60px",
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
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start", // center -> flex-start로 변경하여 위쪽 정렬
  gap: vw(40),
  position: "relative",
  ...responsiveContainer(1600),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1600px", // 1920px+ 고정
      maxWidth: "1600px", // 1920px+ 고정
      margin: "0 auto", // 중앙 정렬
      gap: "40px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: `0 ${mvw(16)}`,
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
      width: "1600px", // 1920px+ 고정
      maxWidth: "1600px", // 1920px+ 고정
      margin: "0 auto", // 중앙 정렬
      gap: "100px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: `0 ${mvw(16)}`,
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
  flex: "0 0 auto",
  marginLeft: "auto", // 오른쪽으로 밀기
  "@media": {
    [breakpoints.desktopLarge]: {
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
      fontSize: "40px", // 1920px+ 고정
      lineHeight: "56px", // 1920px+ 고정
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
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(24),
          fontWeight: 700,
        },
      },
    },
  },
});

export const section3Description = style({
  fontFamily: fontFamily.scdream, // 피그마 스펙: S-Core Dream
  fontWeight: 400, // 400으로 변경
  ...responsiveFont(20, 16), // 1920px 기준 20px, 모바일 16px
  lineHeight: vw(30), // 1920px 기준 30px (피그마 스펙)
  letterSpacing: "0", // 피그마 스펙: 0
  margin: "0",
  color: "#272727", // 피그마 스펙: #272727
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px", // 1920px+ 고정
      lineHeight: "30px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
      fontWeight: 400,
      marginBottom: mvw(40),
    },
  },
});

export const section3Number = style({
  zIndex: 3, // 앞에 표시
  fontFamily: fontFamily.nordnet, // 피그마 스펙
  position: "absolute",
  fontWeight: 400, // 피그마 스펙: Regular
  ...responsiveFont(200), // 1920px 기준 200px 반응형 폰트 (피그마 스펙)
  lineHeight: vw(240), // 1920px 기준 240px (피그마 스펙)
  color: "#272727", // 피그마 스펙: #272727
  textAlign: "right", // 피그마 스펙: 우측 정렬
  width: vw(118), // 피그마 너비
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.nordnet,
    },
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "-40px",
      left: "650px", // 피그마 x: 537 기준 위치
      fontSize: "200px", // 고정 폰트 크기
      lineHeight: "240px", // 고정 라인 높이
      width: "118px", // 고정 너비
    },
    [breakpoints.desktop]: {
      top: vw(-40), // section3Left의 paddingTop과 맞춤
      left: vw(650), // 피그마 x: 537 기준 위치
    },
    // 1024px~1200px 구간에서만 더 왼쪽으로 이동
    "(min-width: 1024px) and (max-width: 1200px)": {
      left: vw(500), // 더 왼쪽으로 이동
    },
    [breakpoints.mobile]: {
      position: "absolute",
      fontSize: mvw(60),
      width: mvw(36),
      height: mvw(72),
      top: mvw(0),
      right: mvw(16),
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
  flex: "1",
  minHeight: vw(810),
  "@media": {
    [breakpoints.desktopLarge]: {
      minHeight: "810px",
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
  flex: "1",
  // paddingTop: vw(80),
  "@media": {
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
      // marginTop: mvw(40),
      // marginBottom: mvw(40),
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
      // top: "400px", // 1920px+ 고정
      // width: "449px", // 1920px+ 고정
      // height: "286px",
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
  transform: "translateY(0)", // 상단 정렬 (transform 제거)
  "@media": {
    [breakpoints.desktopLarge]: {
      position: "absolute",
      right: "0",
      top: "0",
      width: "610px", // 1920px+에서 고정 크기
      height: "550px", // 1920px+에서 고정 크기
      maxWidth: "610px",
      maxHeight: "550px",
    },
    [breakpoints.desktop]: {
      ...responsiveAbsoluteImage({
        position: { right: "0", top: "0" }, // top을 0으로 변경하여 최상단 정렬
        width: "80%", // 컨테이너 대비 80% 크기
        aspectRatio: "610 / 550", // 피그마 비율 (Frame 15409)
        maxWidth: 610, // 최대 너비 610px
      }),
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
      borderRadius: "8px",
    },
  },
});

// Before & After Section
export const beforeAfterSection = style({
  // paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  // paddingBottom: vw(120),
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      // paddingTop: "120px", // 1920px+ 고정
      // paddingBottom: "120px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      padding: `${mvw(120)} ${mvw(16)}`,
    },
  },
});

export const beforeAfterContent = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  "@media": {
    [breakpoints.mobile]: {
      padding: 0,
      margin: 0,
      width: "100%",
    },
  },
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0,
    },
  },
});

export const beforeAfterLink = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
      display: "flex",
    },
  },
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
