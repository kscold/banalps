import { style } from "@vanilla-extract/css"

// export const footer = style({
//   width: "100%",
//   backgroundColor: "#1A1A1A",
//   color: "#FFFFFF",
//   marginTop: "auto",
//   borderTop: "1px solid #333333",
// })

// export const container = style({
//   maxWidth: "1600px",
//   margin: "0 auto",
//   padding: "0 60px",
//   "@media": {
//     "screen and (max-width: 1024px)": {
//       padding: "0 40px",
//     },
//     "screen and (max-width: 768px)": {
//       padding: "0 20px",
//     },
//   },
// })

// export const content = style({
//   padding: "80px 0",
//   "@media": {
//     "screen and (max-width: 768px)": {
//       padding: "60px 0",
//     },
//   },
// })

// export const mainInfo = style({
//   display: "grid",
//   gridTemplateColumns: "1fr 1.5fr 1fr",
//   gap: "60px",
//   marginBottom: "60px",
//   "@media": {
//     "screen and (max-width: 1024px)": {
//       gridTemplateColumns: "1fr",
//       gap: "40px",
//     },
//   },
// })

// export const column = style({
//   display: "flex",
//   flexDirection: "column",
//   gap: "16px",
// })

// export const clinicInfo = style({
//   marginBottom: "24px",
// })

// export const clinicName = style({
//   fontSize: "18px",
//   fontWeight: "500",
//   marginBottom: "8px",
//   fontFamily: "'S-Core Dream', sans-serif",
// })

// export const representative = style({
//   fontSize: "14px",
//   fontWeight: "400",
//   color: "#B0B0B0",
//   fontFamily: "'S-Core Dream', sans-serif",
// })

// export const copyright = style({
//   fontSize: "14px",
//   fontWeight: "400",
//   color: "#B0B0B0",
//   fontFamily: "'Poppins', sans-serif",
// })

// export const address = style({
//   fontSize: "14px",
//   fontWeight: "400",
//   lineHeight: "1.6",
//   color: "#E0E0E0",
//   fontFamily: "'S-Core Dream', sans-serif",
// })

// export const links = style({
//   display: "flex",
//   alignItems: "center",
//   gap: "12px",
//   marginTop: "16px",
// })

// export const link = style({
//   fontSize: "14px",
//   fontWeight: "400",
//   color: "#B0B0B0",
//   textDecoration: "none",
//   fontFamily: "'S-Core Dream', sans-serif",
//   transition: "color 0.3s ease",
//   ":hover": {
//     color: "#14AEFF",
//   },
// })

// export const divider = style({
//   color: "#666666",
//   fontSize: "12px",
// })

// export const phone = style({
//   fontSize: "16px",
//   fontWeight: "500",
//   color: "#E0E0E0",
//   fontFamily: "'S-Core Dream', sans-serif",
// })

// export const logoSection = style({
//   paddingTop: "40px",
//   borderTop: "1px solid #333333",
// })

// export const logoContainer = style({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// })

// export const logoText = style({
//   fontSize: "48px",
//   fontWeight: "600",
//   fontFamily: "'Poppins', sans-serif",
//   letterSpacing: "0.1em",
//   background: "linear-gradient(90deg, #14AEFF 0%, #0EA5E9 100%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   backgroundClip: "text",
// })

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
