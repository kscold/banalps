import { style } from "@vanilla-extract/css";
import { vw, mvw } from "../../styles/responsive.utils";
import {
  breakpoints,
  responsiveContainer,
  responsiveFont,
} from "../../styles/responsive.css";

// Features Section
export const featuresSection = style({
  paddingTop: vw(280), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(240),
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "280px",
      paddingBottom: "240px",
    },
    [breakpoints.mobile]: {
      height: mvw(1752),
      padding: `0 ${mvw(20)} ${mvw(120)} ${mvw(20)}`, // 하단 여백 늘리기
    },
  },
});

export const featuresContent = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템
});

export const featuresHeader = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: vw(100), // 피그마 정확한 간격
  minHeight: vw(160), // 따옴표 간격을 위해 높이 증가
  "@media": {
    [breakpoints.desktopLarge]: {
      minHeight: "160px",
    },
    [breakpoints.mobile]: {
      minHeight: mvw(204),
      marginBottom: mvw(60),
    },
  },
});

export const featuresIcon = style({
  color: "#2d74ff",
});

export const featuresMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32, 24), // 피그마 정확한 크기, 모바일 24px
  lineHeight: vw(48), // 1.5 line height
  color: "#272727",
  margin: "0",
  textAlign: "center",
  position: "relative",
  zIndex: 2, // 따옴표 위에 표시
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "48px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(24),
      lineHeight: mvw(36),
    },
  },
});

// SVG 따옴표 스타일 - 세로 배치 (상단 중앙)
export const quotationStart = style({
  position: "absolute",
  top: vw(-35), // 제목에서 더 멀리 띄워서 배치
  left: "50%", // 수평 중앙 정렬
  transform: "translateX(-50%)", // 완전한 중앙 정렬
  width: vw(40), // 피그마 디자인에 맞는 크기
  height: vw(40),
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "40px",
      height: "40px",
      top: "-35px",
    },
    [breakpoints.mobile]: {
      width: "28px",
      height: "28px",
      top: "-24px",
    },
  },
});

// SVG 따옴표 스타일 - 세로 배치 (하단 중앙)
export const quotationEnd = style({
  position: "absolute",
  bottom: vw(-35), // 제목에서 더 멀리 띄워서 배치
  left: "50%", // 수평 중앙 정렬
  transform: "translateX(-50%)", // 완전한 중앙 정렬
  width: vw(40), // 피그마 디자인에 맞는 크기
  height: vw(40),
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "40px",
      height: "40px",
      bottom: "-35px",
    },
    [breakpoints.mobile]: {
      width: "28px",
      height: "28px",
      bottom: "-24px",
    },
  },
});

export const featuresGrid = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: vw(1600), // 피그마 Frame 346 너비와 일치
  margin: "0 auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1600px",
    },
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: mvw(20),
      alignItems: "center",
      padding: 0,
    },
  },
});

export const featureCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  textAlign: "center",
  width: vw(400), // 피그마 정확한 크기
  height: vw(400), // 피그마 정확한 크기
  backgroundColor: "#D5FEFF", // 피그마 정확한 배경색
  borderRadius: "50%", // 완전한 원형
  position: "relative",
  padding: vw(40), // 내부 패딩
  paddingBottom: vw(80), // 하단 텍스트용 패딩 증가
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(213, 254, 255, 0.6)",
  },

  "@media": {
    [breakpoints.desktopLarge]: {
      width: "400px",
      height: "400px",
      padding: "40px",
      paddingBottom: "80px",
    },
    [breakpoints.mobile]: {
      width: mvw(343),
      height: mvw(343),
      aspectRatio: "1/1",
      borderRadius: "50%",
      padding: mvw(18),
      paddingBottom: mvw(64),
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      ":hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 10px 20px rgba(213, 254, 255, 0.6)",
      },
    },
  },
});

export const featureIconContainer = style({
  position: "absolute",
  top: "35%", // 원의 중앙 상단 부분에 위치 (피그마 디자인 기준)
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: vw(220), // SVG 아이콘 컨테이너 크기 증대
  height: vw(175),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "220px",
      height: "175px",
    },
    [breakpoints.mobile]: {
      width: mvw(210),
      height: mvw(210),
      top: "45%",
    },
  },
});

export const featureIcon = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#14AEFF", // SVG 아이콘 색상
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(210),
      height: mvw(210),
    },
  },
});

export const featureIconImg = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const featureTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400, // 피그마 스펙: 4 Regular = 200
  ...responsiveFont(20, 12), // 피그마 정확한 크기, 모바일 12px
  lineHeight: "150%",

  letterSpacing: "0", // 피그마 스펙
  color: "#272727", // 피그마 정확한 색상
  textAlign: "center", // 피그마 스펙: CENTER
  margin: "0",

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(18),
    },
  },
});

export const featureText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20), // 1920px 기준 20px 반응형
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      lineHeight: "28px",
    },
  },
});
