import {
  responsiveContainer,
  responsiveFont,
} from "./../../styles/responsive.css"
import { breakpoints, vw } from "@/shared/styles/responsive.css"
import { style } from "@vanilla-extract/css"

// Footer Section - Figma 디자인 기반
export const footerSection = style({
  backgroundColor: "#73d5fa", // Figma와 일치하는 파란색
  padding: "50px 20px",
  color: "#ffffff",
})

export const footerContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "30px",
      textAlign: "center",
    },
  },
})

export const footerMain = style({
  display: "flex",
  gap: "60px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "20px",
    },
  },
})

export const footerColumn = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
})

export const footerInfo = style({
  marginBottom: "8px",
})

export const footerClinicName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0 0 4px 0",
  color: "#ffffff",
})

export const footerRepresentative = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
})

export const footerCopyright = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
})

export const footerAddress = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0 0 4px 0",
  color: "#ffffff",
})

export const footerLinks = style({
  display: "flex",
  gap: "12px",
  "@media": {
    "screen and (max-width: 768px)": {
      justifyContent: "center",
    },
  },
})

export const footerLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  color: "#ffffff",
  textDecoration: "none",
  transition: "opacity 0.3s ease",
  ":hover": {
    opacity: 0.8,
  },
})

export const footerPhone = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
})

export const footerLogo = style({
  display: "flex",
  alignItems: "center",
})

export const footerLogoContainer = style({
  width: "158px",
  height: "37px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const footerLogoText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "24px",
  letterSpacing: "0.1em",
  color: "#ffffff",
})

// // Footer Section
// export const footerSection = style({
//   backgroundColor: "#73D5FA", // 피그마 정확한 색상
//   padding: vw(48),
//   position: "relative",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       padding: "48px",
//     },
//   },
// })

// export const footerContent = style({
//   ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   "@media": {
//     [breakpoints.tablet]: {
//       flexDirection: "column",
//       gap: "30px",
//     },
//     [breakpoints.mobile]: {
//       flexDirection: "column",
//       gap: "20px",
//     },
//   },
// })

// export const footerLeft = style({
//   display: "flex",
//   gap: vw(40), // 1920px 기준 40px
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       gap: "40px",
//     },
//     [breakpoints.tablet]: {
//       flexDirection: "column",
//       gap: "20px",
//     },
//     [breakpoints.mobile]: {
//       flexDirection: "column",
//       gap: "15px",
//     },
//   },
// })

// export const footerCompanyInfo = style({
//   display: "flex",
//   flexDirection: "column",
//   gap: vw(20),
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       gap: "20px",
//     },
//   },
// })

// export const footerCompanyDetails = style({
//   display: "flex",
//   flexDirection: "column",
//   gap: vw(4),
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       gap: "4px",
//     },
//   },
// })

// export const footerCompanyName = style({
//   fontFamily: "'S-Core Dream', sans-serif",
//   fontWeight: 400,
//   ...responsiveFont(14), // 피그마 정확한 크기
//   lineHeight: vw(20),
//   color: "#FFFFFF",
//   margin: "0",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       lineHeight: "20px",
//     },
//   },
// })

// export const footerCEO = style({
//   fontFamily: "'S-Core Dream', sans-serif",
//   fontWeight: 400,
//   ...responsiveFont(14),
//   lineHeight: vw(20),
//   color: "#FFFFFF",
//   margin: "0",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       lineHeight: "20px",
//     },
//   },
// })

// export const footerCopyright = style({
//   fontFamily: "Poppins",
//   fontWeight: 400,
//   ...responsiveFont(14),
//   lineHeight: vw(20),
//   color: "#FFFFFF",
//   margin: "0",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       lineHeight: "20px",
//     },
//   },
// })

// export const footerAddress = style({
//   display: "flex",
//   flexDirection: "column",
//   gap: vw(4),
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       gap: "4px",
//     },
//   },
// })

// export const footerAddressText = style({
//   fontFamily: "'S-Core Dream', sans-serif",
//   fontWeight: 400,
//   ...responsiveFont(14),
//   lineHeight: vw(20),
//   color: "#FFFFFF",
//   margin: "0",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       lineHeight: "20px",
//     },
//   },
// })

// export const footerLinks = style({
//   display: "flex",
//   gap: vw(12), // 링크 사이 간격
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       gap: "12px",
//     },
//   },
// })

// export const footerLink = style({
//   fontFamily: "'S-Core Dream', sans-serif",
//   fontWeight: 400,
//   ...responsiveFont(14),
//   lineHeight: vw(20),
//   color: "#FFFFFF",
//   cursor: "pointer",
//   textDecoration: "none",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       lineHeight: "20px",
//     },
//   },
//   ":hover": {
//     textDecoration: "underline",
//   },
// })

// export const footerPhone = style({
//   fontFamily: "'S-Core Dream', sans-serif",
//   fontWeight: 400,
//   ...responsiveFont(14),
//   lineHeight: vw(20),
//   color: "#FFFFFF",
//   margin: "0",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       lineHeight: "20px",
//     },
//   },
// })

// export const footerRight = style({
//   display: "flex",
//   alignItems: "center",
// })

// export const footerLogo = style({
//   width: vw(158), // 피그마 로고 너비
//   height: vw(37), // 피그마 로고 높이
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       width: "158px",
//       height: "37px",
//     },
//   },
// })

// export const floatingButton = style({
//   position: "absolute",
//   top: vw(-30), // 푸터 위로 올라감
//   right: vw(160), // 피그마 위치
//   width: vw(60),
//   height: vw(60),
//   backgroundColor: "#FFFFFF",
//   borderRadius: "50%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
//   cursor: "pointer",
//   "@media": {
//     [breakpoints.desktopLarge]: {
//       top: "-30px",
//       right: "160px",
//       width: "60px",
//       height: "60px",
//     },
//     [breakpoints.mobile]: {
//       right: "20px",
//       top: "-30px",
//     },
//   },
//   ":hover": {
//     transform: "translateY(-2px)",
//     boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
//   },
// })
