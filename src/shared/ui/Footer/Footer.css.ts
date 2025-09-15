import {
  responsiveContainer,
  responsiveFont,
} from "./../../styles/responsive.css"
import { breakpoints, vw, mvw } from "@/shared/styles/responsive.css"
import { style } from "@vanilla-extract/css"

// Footer Section - 1920px 기준 피그마 디자인 기반
export const footerSection = style({
  backgroundColor: "#73d5fa",
  padding: vw(48),
  color: "#ffffff",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "48px",
    },
    [breakpoints.mobile]: {
      padding: `${mvw(40)} ${mvw(20)}`,
      backgroundColor: "#73D5FA",
    },
  },
})

export const footerContent = style({
  ...responsiveContainer(1600),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  height: vw(104),
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "104px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      height: "auto",
      gap: "20px",
      alignItems: "flex-start",
    },
  },
})

export const footerLeft = style({
  display: "flex",
  gap: vw(135),
  "@media": {
    [breakpoints.desktopLarge]: {
      // gap: "250px",
    },
    [breakpoints.mobile]: {
      // gap: "20px",
      // flexDirection: "column",
    },
  },
})

export const footerLeftFirst = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
    },
  },
})

export const footerCompanyInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(4),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "4px",
    },
  },
})

export const footerClinicName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "20px",
    },
  },
})

export const footerRepresentative = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "20px",
    },
  },
})

export const footerCopyright = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 400,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "20px",
    },
  },
})

export const footerRightSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(4),
  "@media": {
    [breakpoints.desktopLarge]: {},
  },
})

export const footerAddress = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "20px",
    },
  },
})

export const footerLinksContainer = style({
  display: "flex",
  gap: vw(12),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
    },
  },
})

export const footerLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: "0",
  color: "#ffffff",
  textDecoration: "none",
  cursor: "pointer",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "20px",
    },
  },
  ":hover": {
    textDecoration: "underline",
  },
})

export const footerPhone = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "20px",
    },
  },
})

export const footerRight = style({
  display: "flex",
  alignItems: "center",
})

export const footerLogoContainer = style({
  width: vw(158),
  height: vw(37),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "158px",
      height: "37px",
    },
  },
})

// 데스크탑 레이아웃 컨테이너
export const desktopLayout = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
})

// 모바일 레이아웃 컨테이너
export const mobileLayout = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 0,
      width: "100%",
    },
  },
})

// 모바일 로고
export const mobileLogo = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: mvw(24),
      fontSize: mvw(28),
      fontWeight: 600,
      color: "#FFFFFF",
      fontFamily: "'Poppins', sans-serif",
    },
  },
})

// 모바일 클리닉 정보
export const mobileInfo = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: mvw(4),
      marginBottom: mvw(24),
    },
  },
})

export const mobileClinicName = style({
  "@media": {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 400,
      fontSize: mvw(13),
      lineHeight: "150%",
      color: "#FFFFFF",
      margin: 0,
    },
  },
})

export const mobileRepresentative = style({
  "@media": {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 400,
      fontSize: mvw(13),
      lineHeight: "150%",
      color: "#FFFFFF",
      margin: 0,
    },
  },
})

// 모바일 연락처
export const mobileContact = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: mvw(8),
      marginBottom: mvw(32),
    },
  },
})

export const mobileAddress = style({
  "@media": {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 400,
      fontSize: mvw(13),
      lineHeight: "150%",
      color: "#FFFFFF",
      margin: 0,
    },
  },
})

export const mobilePhone = style({
  "@media": {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 400,
      fontSize: mvw(13),
      lineHeight: "150%",
      color: "#FFFFFF",
      margin: 0,
    },
  },
})

// 모바일 링크
export const mobileLinks = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "center",
      gap: mvw(12),
      marginBottom: mvw(24),
    },
  },
})

export const mobileLinkItem = style({
  "@media": {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 400,
      fontSize: mvw(12),
      lineHeight: "150%",
      color: "#FFFFFF",
      textDecoration: "underline",
      cursor: "pointer",
      ":hover": {
        opacity: 0.8,
      },
    },
  },
})

export const mobileLinkDivider = style({
  "@media": {
    [breakpoints.mobile]: {
      width: "1px",
      height: mvw(12),
      backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
  },
})

// 모바일 카피라이트
export const mobileCopyright = style({
  "@media": {
    [breakpoints.mobile]: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: mvw(11),
      lineHeight: "150%",
      color: "#FFFFFF",
      margin: 0,
      opacity: 0.8,
    },
  },
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
