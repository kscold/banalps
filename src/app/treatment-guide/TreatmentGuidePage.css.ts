import { style } from "@vanilla-extract/css";
import { breakpoints, vw } from "../../shared/styles/responsive.css";
import { fontFamily } from "../../shared/styles/fonts.css";

// 페이지 전체 스타일
export const treatmentGuidePage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
});

// Hero Section
export const heroSection = style({
  position: "relative",
  width: "100%",
  paddingTop: vw(255),
  minHeight: vw(1511),
  overflow: "visible",
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
      paddingBottom: "160px",
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
      marginLeft: "20px",
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
  borderRadius: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "925px",
      marginBottom: "180px",
      borderRadius: "20px",
    },
    [breakpoints.desktop]: {
      height: vw(925),
      marginBottom: vw(180),
      borderRadius: vw(20),
    },
    [breakpoints.mobile]: {
      height: "400px",
      marginBottom: "80px",
      borderRadius: "12px",
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
  textShadow: "0px 2px 8px rgba(0, 0, 0, 0.3)",
  margin: 0,
  letterSpacing: "0%",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
});

// Banalhouse 브랜드 텍스트
export const heroOverlayBrand = style({
  position: "absolute",
  top: vw(430),
  left: vw(60),
  "@media": {
    [breakpoints.mobile]: {
      bottom: "24px",
      right: "24px",
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
  textShadow: "0px 2px 8px rgba(0, 0, 0, 0.3)",
  margin: 0,
  letterSpacing: "0%",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: "20px",
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
      fontSize: "36px",
      lineHeight: "46px",
      marginTop: "40px",
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
      paddingBottom: "120px",
      marginTop: "120px",
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
      gap: "60px",
      padding: "0 20px",
      paddingTop: "0",
      paddingBottom: "120px",
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
      width: "100%",
      height: "300px",
      borderRadius: "12px",
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
    },
  },
});

export const contactItem = style({
  display: "flex",
  gap: vw(20),
  marginBottom: vw(58),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      marginBottom: "58px",
    },
    [breakpoints.desktop]: {
      gap: vw(20), // 1024-1920px 구간에서 vw로 스케일링
      marginBottom: vw(58),
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "12px",
      marginBottom: "36px",
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
      fontSize: vw(20), // 1920px+ 에서도 vw로 스케일링 유지
      lineHeight: vw(28),
      width: vw(115),
    },
    [breakpoints.desktop]: {
      fontSize: vw(20), // 1024-1920px 구간에서 vw로 스케일링
      lineHeight: vw(28),
      width: vw(115),
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "24px",
      width: "auto",
    },
  },
});

export const contactValue = style({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: vw(32),
  lineHeight: vw(32),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: vw(32), // 1920px+ 에서도 vw로 스케일링 유지
      lineHeight: vw(32),
    },
    [breakpoints.desktop]: {
      fontSize: vw(32), // 1024-1920px 구간에서 vw로 스케일링
      lineHeight: vw(32),
    },
    [breakpoints.mobile]: {
      fontSize: "24px",
      lineHeight: "24px",
    },
  },
});

export const contactSchedule = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(20),
  lineHeight: vw(30),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: vw(20), // 1920px+ 에서도 vw로 스케일링 유지
      lineHeight: vw(30),
    },
    [breakpoints.desktop]: {
      fontSize: vw(20), // 1024-1920px 구간에서 vw로 스케일링
      lineHeight: vw(30),
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
});

export const contactAddress = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: vw(20), // 1920px+ 에서도 vw로 스케일링 유지
    },
    [breakpoints.desktop]: {
      gap: vw(20), // 1024-1920px 구간에서 vw로 스케일링
    },
    [breakpoints.mobile]: {
      gap: "12px",
    },
  },
});

export const addressMain = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(20),
  lineHeight: vw(30),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: vw(20), // 1920px+ 에서도 vw로 스케일링 유지
      lineHeight: vw(30),
    },
    [breakpoints.desktop]: {
      fontSize: vw(20), // 1024-1920px 구간에서 vw로 스케일링
      lineHeight: vw(30),
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
});

export const subwayInfo = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: vw(26),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: vw(16), // 1920px+ 에서도 vw로 스케일링 유지
      lineHeight: vw(26),
    },
    [breakpoints.desktop]: {
      fontSize: vw(16), // 1024-1920px 구간에서 vw로 스케일링
      lineHeight: vw(26),
    },
    [breakpoints.mobile]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
});
