import { style } from "@vanilla-extract/css"
import { breakpoints, vw } from "../../../shared/styles/responsive.css"

export const mapContainer = style({
  width: "100%",
  display: "flex",
  gap: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
    },
    [breakpoints.desktop]: {
      flexDirection: "column",
      gap: "16px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "12px",
    },
  },
})

export const mapWrapper = style({
  position: "relative",
  width: "100%",
  height: "100%",
  minHeight: vw(500),
  backgroundColor: "#F5F5F5",
  borderRadius: vw(20),
  overflow: "hidden",
  "@media": {
    [breakpoints.desktopLarge]: {
      minHeight: "500px",
      borderRadius: "20px",
    },
    [breakpoints.desktop]: {
      minHeight: "450px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      minHeight: "300px",
      borderRadius: "12px",
    },
  },
})

export const mapIframe = style({
  width: "100%",
  height: "100%",
  display: "block",
  border: "none",
})

export const loadingOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F5F5F5",
  zIndex: 1,
})

export const loadingText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  color: "#666",
})

export const mapButtons = style({
  display: "flex",
  gap: vw(20),
  marginTop: vw(100),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      marginTop: "100px",
    },
    [breakpoints.desktop]: {
      gap: "16px",
      marginTop: "80px",
    },
    [breakpoints.mobile]: {
      gap: "12px",
      marginTop: "60px",
    },
  },
})

const buttonBase = style({
  padding: `${vw(9)} ${vw(16)}`,
  fontSize: vw(16),
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  border: "none",
  borderRadius: vw(24),
  cursor: "pointer",
  transition: "all 0.2s ease",
  minWidth: vw(125),
  height: vw(42),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  letterSpacing: 0,
  lineHeight: vw(24),
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "9px 16px",
      fontSize: "16px",
      borderRadius: "24px",
      minWidth: "125px",
      height: "42px",
      lineHeight: "24px",
    },
    [breakpoints.desktop]: {
      padding: "8px 14px",
      fontSize: "14px",
      borderRadius: "20px",
      minWidth: "110px",
      height: "38px",
      lineHeight: "22px",
    },
    [breakpoints.mobile]: {
      padding: "7px 12px",
      fontSize: "14px",
      borderRadius: "18px",
      minWidth: "100px",
      height: "36px",
      lineHeight: "20px",
    },
  },
})

export const kakaoButton = style([
  buttonBase,
  {
    backgroundColor: "#F3E362",
    color: "#272727",
    minWidth: vw(129),
    "@media": {
      [breakpoints.desktopLarge]: {
        minWidth: "129px",
      },
      [breakpoints.desktop]: {
        minWidth: "115px",
      },
      [breakpoints.mobile]: {
        minWidth: "105px",
      },
    },
  },
])

export const naverButton = style([
  buttonBase,
  {
    backgroundColor: "#58A54B",
    color: "#FFFFFF",
    minWidth: vw(125),
    "@media": {
      [breakpoints.desktopLarge]: {
        minWidth: "125px",
      },
      [breakpoints.desktop]: {
        minWidth: "110px",
      },
      [breakpoints.mobile]: {
        minWidth: "100px",
      },
    },
  },
])
