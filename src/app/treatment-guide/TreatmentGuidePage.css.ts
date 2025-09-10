import { responsiveLeftContent } from "./../../shared/styles/responsive.css"
import { style } from "@vanilla-extract/css"
import {
  breakpoints,
  vw,
  responsiveFont,
  responsiveContainer,
} from "../../shared/styles/responsive.css"

// 페이지 전체 스타일
export const treatmentGuidePage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFDF7",
})

// Hero Section
export const heroSection = style({
  position: "relative",
  paddingTop: vw(255),
  paddingBottom: vw(340),
  minHeight: vw(1200),
  overflow: "visible",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "255px",
      paddingBottom: "340px",
      minHeight: "1200px",
    },
    [breakpoints.desktop]: {
      paddingTop: "180px",
      paddingBottom: "240px",
      minHeight: "900px",
    },
    [breakpoints.mobile]: {
      paddingTop: "120px",
      paddingBottom: "160px",
      minHeight: "auto",
    },
  },
})

export const heroContainer = style({
  display: "flex",
  gap: vw(248),
  alignItems: "flex-start",
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "248px",
    },
    [breakpoints.desktop]: {
      gap: "120px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "60px",
    },
  },
})

// 왼쪽 타이틀
export const heroLeft = style({
  ...responsiveLeftContent(),
  width: vw(587),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "587px",
    },
    [breakpoints.desktop]: {
      width: "400px",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
})

export const heroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(72),
  color: "#272727",
  paddingTop: vw(245),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
      paddingTop: "245px",
    },
    [breakpoints.desktop]: {
      fontSize: "48px",
      lineHeight: "58px",
      paddingTop: "160px",
    },
    [breakpoints.mobile]: {
      fontSize: "36px",
      lineHeight: "44px",
      paddingTop: "0",
    },
  },
})

// 오른쪽 콘텐츠
export const heroRight = style({
  position: "absolute",
  top: 0,
  right: 0,
  width: vw(1085),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1085px",
    },
    [breakpoints.desktop]: {
      width: "700px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      width: "100%",
    },
  },
})

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
      height: "600px",
      marginBottom: "120px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      height: "400px",
      marginBottom: "80px",
      borderRadius: "12px",
    },
  },
})

export const heroImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

// 바날하우스 텍스트 오버레이
export const heroOverlay = style({
  position: "absolute",
  bottom: vw(60),
  right: vw(60),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "60px",
      right: "60px",
      gap: "20px",
    },
    [breakpoints.desktop]: {
      bottom: "40px",
      right: "40px",
      gap: "16px",
    },
    [breakpoints.mobile]: {
      bottom: "24px",
      right: "24px",
      gap: "12px",
    },
  },
})

export const heroOverlayText = style({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  fontSize: vw(15),
  lineHeight: vw(20),
  color: "#FFFFFF",
  textAlign: "right",
  textShadow: "0px 2px 8px rgba(0, 0, 0, 0.3)",
  selectors: {
    "&:last-child": {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 700,
      fontSize: vw(32),
      lineHeight: vw(40),
    },
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "15px",
      lineHeight: "20px",
      selectors: {
        "&:last-child": {
          fontSize: "32px",
          lineHeight: "40px",
        },
      },
    },
    [breakpoints.desktop]: {
      fontSize: "14px",
      lineHeight: "18px",
      selectors: {
        "&:last-child": {
          fontSize: "28px",
          lineHeight: "36px",
        },
      },
    },
    [breakpoints.mobile]: {
      fontSize: "12px",
      lineHeight: "16px",
      selectors: {
        "&:last-child": {
          fontSize: "20px",
          lineHeight: "28px",
        },
      },
    },
  },
})

export const heroSubtitle = style({
  position: "absolute",
  bottom: vw(-100),
  left: vw(0),
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(78),
  color: "#14AEFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "78px",
      bottom: "-100px",
      left: "0px",
    },
    [breakpoints.desktop]: {
      fontSize: "48px",
      lineHeight: "62px",
      bottom: "-80px",
      left: "0px",
    },
    [breakpoints.mobile]: {
      fontSize: "36px",
      lineHeight: "46px",
      position: "static",
      marginTop: "40px",
    },
  },
})

// Contact Section
export const contactSection = style({
  ...responsiveContainer(1920),
  paddingBottom: vw(240),
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingBottom: "240px",
    },
    [breakpoints.desktop]: {
      paddingBottom: "180px",
    },
    [breakpoints.mobile]: {
      paddingBottom: "120px",
    },
  },
})

export const contactContainer = style({
  display: "flex",
  gap: vw(155),
  alignItems: "flex-start",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "155px",
    },
    [breakpoints.desktop]: {
      gap: "100px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "60px",
    },
  },
})

// 지도 컨테이너
export const mapContainer = style({
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
      width: "700px",
      height: "450px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "300px",
      borderRadius: "12px",
    },
  },
})

// 연락처 정보
export const contactInfo = style({
  width: vw(458),
  paddingTop: vw(0),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "458px",
      paddingTop: "0",
    },
    [breakpoints.desktop]: {
      width: "400px",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
})

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
      gap: "16px",
      marginBottom: "48px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "12px",
      marginBottom: "36px",
    },
  },
})

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
      fontSize: "20px",
      lineHeight: "28px",
      width: "115px",
    },
    [breakpoints.desktop]: {
      fontSize: "18px",
      lineHeight: "26px",
      width: "100px",
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "24px",
      width: "auto",
    },
  },
})

export const contactValue = style({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: vw(32),
  lineHeight: vw(32),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "32px",
      lineHeight: "32px",
    },
    [breakpoints.desktop]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [breakpoints.mobile]: {
      fontSize: "24px",
      lineHeight: "24px",
    },
  },
})

export const contactSchedule = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(20),
  lineHeight: vw(30),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
    [breakpoints.desktop]: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

export const contactAddress = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
    },
    [breakpoints.desktop]: {
      gap: "16px",
    },
    [breakpoints.mobile]: {
      gap: "12px",
    },
  },
})

export const addressMain = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(20),
  lineHeight: vw(30),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
    [breakpoints.desktop]: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    [breakpoints.mobile]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

export const subwayInfo = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: vw(26),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "26px",
    },
    [breakpoints.desktop]: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    [breakpoints.mobile]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
})
