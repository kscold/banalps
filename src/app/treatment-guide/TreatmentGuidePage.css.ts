import { style } from "@vanilla-extract/css";
import { breakpoints, mvw, vw } from "../../shared/styles/responsive.css";
import { fontFamily } from "../../shared/styles/fonts.css";

// 페이지 전체 스타일
export const treatmentGuidePage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFDF7",
});

// Hero Section
export const heroSection = style({
  position: "relative",
  width: "100%",
  paddingTop: vw(255),
  minHeight: vw(1511),
  overflow: "visible",
  height: "auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "255px",
      minHeight: "1511px",
    },
    [breakpoints.desktop]: {
      paddingTop: vw(255),
      minHeight: vw(1511),
    },
    [breakpoints.mobile]: {
      paddingTop: "120px",
      minHeight: "auto",
    },
  },
});

export const heroContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  margin: "0 auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1920px",
    },
    [breakpoints.desktop]: {
      maxWidth: "1920px",
    },
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: "60px",
      alignItems: "flex-start",
      padding: "0 20px",
    },
  },
});

// 왼쪽 타이틀 컨테이너 - 헤더와 동일한 responsiveContainer 방식 사용
export const heroLeft = style({
  marginLeft: "max(calc((100vw - 1600px) / 2), 160px)", // 헤더와 동일한 마진
  width: vw(587),
  paddingTop: vw(245),
  zIndex: 3,
  "@media": {
    [breakpoints.desktopLarge]: {
      marginLeft: "160px",
      width: "587px",
      paddingTop: "245px",
    },
    [breakpoints.desktop]: {
      marginLeft: "max(calc((100vw - 1600px) / 2), 160px)",
      width: vw(587),
      paddingTop: vw(245),
    },
    [breakpoints.mobile]: {
      marginLeft: "0px",
      paddingLeft: "0",
      width: "100%",
      paddingTop: "0",
    },
  },
});

export const heroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(60),
  lineHeight: "120%",
  letterSpacing: "0%",
  color: "#272727",
  margin: 0,
  width: vw(267),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
      width: "267px",
    },
    [breakpoints.desktop]: {
      fontSize: vw(60),
      lineHeight: vw(72),
      width: vw(267),
    },
    [breakpoints.mobile]: {
      fontSize: "36px",
      lineHeight: "44px",
      width: "100%",
    },
  },
});

// 오른쪽 콘텐츠
export const heroRight = style({
  position: "absolute",
  top: 0,
  right: "0",
  width: vw(1085),
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1085px",
    },
    [breakpoints.desktop]: {
      width: vw(1085),
    },
    [breakpoints.mobile]: {
      position: "relative",
      width: "100%",
      top: "auto",
      right: "auto",
    },
  },
});

export const heroImageWrapper = style({
  position: "relative",
  width: "100%",
  height: vw(925),
  marginBottom: vw(180),
  overflow: "hidden",

  "@media": {
    [breakpoints.desktopLarge]: {
      height: "925px",
      marginBottom: "180px",
    },
    [breakpoints.desktop]: {
      height: vw(925),
      marginBottom: vw(180),
    },
    [breakpoints.mobile]: {
      height: mvw(478),
      marginBottom: "0px",
      borderRadius: mvw(8),
    },
  },
});

export const heroImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

// Power Your Organization's Potential With Banal House 텍스트
export const heroOverlayMain = style({
  position: "absolute",
  top: vw(60), // Banalhouse 텍스트 위쪽에 위치
  left: vw(60),
  "@media": {
    [breakpoints.mobile]: {
      bottom: "80px",
      right: "24px",
    },
  },
});

export const heroOverlayMainText = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 400,
  fontSize: vw(15),
  lineHeight: vw(20),
  color: "#FFFFFF",
  textAlign: "left",
  margin: 0,
  letterSpacing: "0%",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: "100%",
      fontFamily: fontFamily.poppins,
      fontWeight: 400,
      fontStyle: "Regular",
      letterSpacing: "0%",
    },
  },
});

// Banalhouse 브랜드 텍스트
export const heroOverlayBrand = style({
  position: "absolute",
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "430px",
      left: "60px",
    },
    [breakpoints.desktop]: {
      top: vw(430),
      left: vw(60),
    },
    [breakpoints.mobile]: {
      bottom: mvw(24),
      left: "50%",
      transform: "translateX(-50%)",
      right: "auto",
      width: "100%",
      top: "auto",
    },
  },
});

export const heroOverlayBrandText = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 600,
  fontSize: vw(50),
  lineHeight: vw(40),
  color: "#FFFFFF",
  textAlign: "right",
  margin: 0,
  letterSpacing: "0%",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(48),
      lineHeight: "28px",
    },
  },
});

export const heroSubtitle = style({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: vw(60),
  lineHeight: vw(78),
  color: "#14AEFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "78px",
    },
    [breakpoints.desktop]: {
      fontSize: vw(60),
      lineHeight: vw(78),
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

// Contact Section
export const contactSection = style({
  position: "relative",
  marginTop: 0,
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      marginTop: mvw(40),
    },
  },
});

export const contactContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  margin: "0 auto",
  display: "flex",
  gap: vw(155),
  alignItems: "flex-start",
  paddingTop: vw(240),
  paddingBottom: vw(240),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "155px",
      paddingTop: "240px",
      paddingBottom: "240px",
    },
    [breakpoints.desktop]: {
      gap: vw(155),
      paddingTop: vw(240),
      paddingBottom: vw(240),
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: mvw(40),
      padding: `0 ${mvw(20)}`,
      paddingTop: "0",
      paddingBottom: mvw(120),
    },
  },
});

// 지도 컨테이너
export const mapContainer = style({
  flex: "0 0 auto",
  width: vw(1085),
  height: vw(700),
  borderRadius: vw(20),
  overflow: "hidden",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1085px",
      height: "700px",
      borderRadius: "20px",
    },
    [breakpoints.desktop]: {
      width: vw(1085),
      height: vw(700),
      borderRadius: vw(20),
    },
    [breakpoints.mobile]: {
      width: "100vw",
      height: mvw(404),
      borderRadius: 0,
      marginLeft: mvw(-20), // 부모 컨테이너 패딩 상쇄
      marginRight: mvw(-20), // 부모 컨테이너 패딩 상쇄
    },
  },
});

// 연락처 정보
export const contactInfo = style({
  flex: "0 0 auto",
  width: vw(458),
  paddingTop: vw(0),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "458px",
    },
    [breakpoints.desktop]: {
      width: vw(458),
    },
    [breakpoints.mobile]: {
      width: "100%",
      paddingTop: mvw(20),
    },
  },
});

export const contactItem = style({
  display: "flex",
  gap: vw(20),
  marginBottom: vw(58),

  selectors: {
    "&:nth-child(3)": {
      marginBottom: vw(100),
    },
  },

  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      marginBottom: "58px",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      flexDirection: "row",
      gap: mvw(12),
      marginBottom: mvw(40),
      alignItems: "flex-start",
      selectors: {
        "&:nth-child(3)": {
          marginBottom: mvw(40),
        },
      },
    },
  },
});

export const contactItemPhone = style({
  display: "flex",
  gap: vw(20),
  marginBottom: vw(58),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      marginBottom: "58px",
    },
    [breakpoints.desktop]: {
      gap: vw(20),
      marginBottom: vw(58),
    },
    [breakpoints.mobile]: {
      gap: mvw(20),
      marginBottom: mvw(40),
      alignItems: "center",
    },
  },
});

export const contactLabel = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(20),
  lineHeight: vw(28),
  color: "#272727",
  width: vw(115),
  flexShrink: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: vw(20),
      lineHeight: vw(28),
      width: vw(115),
    },
    [breakpoints.desktop]: {
      fontSize: vw(20),
      lineHeight: vw(28),
      width: vw(115),
    },
    [breakpoints.mobile]: {
      whiteSpace: "nowrap",
      fontSize: mvw(14),
      lineHeight: mvw(24),
      width: mvw(106),
      flexShrink: 0,
    },
  },
});

export const contactValue = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 500,
  fontSize: vw(32),
  lineHeight: vw(32),
  color: "#272727",
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.poppins,
    },
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "32px",
      lineHeight: "32px",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      fontSize: mvw(24),
      lineHeight: mvw(32),
      selectors: {
        'html[data-language="JP"] &': {
          fontFamily: fontFamily.poppins,
          fontSize: mvw(24),
        },
      },
    },
  },
});

export const contactSchedule = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(20),
  lineHeight: vw(30),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(24),
      fontWeight: 400,
    },
  },
});

export const contactAddress = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: vw(20),
    },
    [breakpoints.desktop]: {
      gap: vw(20),
    },
    [breakpoints.mobile]: {
      gap: 0,
    },
  },
});

export const addressMain = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(20),
  lineHeight: vw(30),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: mvw(24),
      marginBottom: mvw(12),
    },
  },
});

export const subwayInfo = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(16),
  lineHeight: vw(26),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "26px",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: mvw(20),
      fontWeight: 400,
    },
  },
});
