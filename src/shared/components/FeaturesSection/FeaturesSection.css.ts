import { style, globalStyle } from "@vanilla-extract/css";
import { vw, mvw } from "../../styles/responsive.utils";
import {
  breakpoints,
  responsiveContainer,
  responsiveFont,
} from "../../styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

// Features Section
export const featuresSection = style({
  paddingTop: vw(320), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(240),
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "320px",
      paddingBottom: "240px",
    },
    [breakpoints.mobile]: {
      // height: mvw(1752),
      padding: `0 ${mvw(16)} ${mvw(120)} ${mvw(16)}`, // 하단 여백 늘리기
    },
  },
});

export const featuresContent = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템

  "@media": {
    [breakpoints.mobile]: {
      padding: 0,
      margin: 0,
      width: "100%",
    },
  },
});

export const featuresHeader = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: vw(100), // 피그마 정확한 간격
  gap: vw(20), // Space between quotation marks and title
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "100px",
      gap: "20px",
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(80),
      gap: mvw(24),
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

// SVG 따옴표 스타일 - 상단
export const quotationStart = style({
  width: vw(40), // 피그마 디자인에 맞는 크기
  height: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "40px",
      height: "40px",
    },
    [breakpoints.mobile]: {
      width: mvw(28),
      height: mvw(28),
    },
  },
});

// SVG 따옴표 스타일 - 하단
export const quotationEnd = style({
  width: vw(40), // 피그마 디자인에 맞는 크기
  height: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "40px",
      height: "40px",
    },
    [breakpoints.mobile]: {
      width: mvw(28),
      height: mvw(28),
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
  justifyContent: "center",
  gap: vw(24), // Gap between icon and title
  textAlign: "center",
  width: vw(400), // 피그마 정확한 크기
  height: vw(400), // 피그마 정확한 크기
  backgroundColor: "#D5FEFF", // 피그마 정확한 배경색
  borderRadius: "50%", // 완전한 원형
  position: "relative",
  padding: vw(40), // 내부 패딩
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "@media": {
    [breakpoints.desktopLarge]: {
      width: "400px",
      height: "400px",
      padding: "40px",
      gap: "24px",
    },
    [breakpoints.mobile]: {
      width: mvw(343),
      height: mvw(343),
      aspectRatio: "1/1",
      borderRadius: "50%",
      padding: mvw(18),
      gap: mvw(24),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      ":hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 10px 20px rgba(213, 254, 255, 0.6)",
      },
    },
  },
});

export const featureIconContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  height: "auto",
  "@media": {
    [breakpoints.mobile]: {
      width: "auto",
      height: "auto",
    },
  },
});

export const featureIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#14AEFF", // SVG 아이콘 색상
});

// Individual icon styles with specific heights
export const featureIconImg = style({
  width: "auto",
  objectFit: "contain",
});

export const featureIconFirst = style([
  featureIconImg,
  {
    width: vw(217),
    height: vw(174),
    "@media": {
      [breakpoints.desktopLarge]: {
        width: "217px",
        height: "141px",
      },
      [breakpoints.mobile]: {
        width: mvw(176),
        height: mvw(141),
      },
    },
  },
]);

export const featureIconSecond = style([
  featureIconImg,
  {
    width: vw(262),
    height: vw(153),
    "@media": {
      [breakpoints.desktopLarge]: {
        width: "262px",
        height: "153px",
      },
      [breakpoints.mobile]: {
        width: mvw(212),
        height: mvw(124),
      },
    },
  },
]);

export const featureIconThird = style([
  featureIconImg,
  {
    width: vw(272),
    height: vw(183),
    "@media": {
      [breakpoints.desktopLarge]: {
        width: "272px",
        height: "183px",
      },
      [breakpoints.mobile]: {
        width: mvw(220),
        height: mvw(148),
      },
    },
  },
]);

export const featureIconFourth = style([
  featureIconImg,
  {
    width: vw(214),
    height: vw(181),
    "@media": {
      [breakpoints.desktopLarge]: {
        width: "214px",
        height: "181px",
      },
      [breakpoints.mobile]: {
        width: mvw(189),
        height: mvw(160),
      },
    },
  },
]);

export const featureTitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400, // 피그마 스펙: 4 Regular = 200
  ...responsiveFont(20, 16), // 피그마 정확한 크기, 모바일 12px
  lineHeight: "150%",
  letterSpacing: "0", // 피그마 스펙
  color: "#272727", // 피그마 정확한 색상
  textAlign: "center", // 피그마 스펙: CENTER
  margin: "0",
  wordBreak: "keep-all",
  whiteSpace: "normal",

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
    },
    [breakpoints.mobile]: {
      fontWeight: 200, // S-Core Dream 4 Regular
      fontSize: mvw(16),
      minHeight: mvw(48),
      lineHeight: "150%",
      whiteSpace: "normal",
      wordBreak: "keep-all",
      padding: 0,
      margin: 0,
    },
  },
});

// Add spacing between lines in mobile feature titles
globalStyle(`${featureTitle} span`, {
  "@media": {
    [breakpoints.mobile]: {
      display: "inline-block",
      marginBottom: mvw(8),
    },
  },
});

globalStyle(`${featureTitle} span:last-child`, {
  "@media": {
    [breakpoints.mobile]: {
      marginBottom: 0,
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
