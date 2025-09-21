import { style } from "@vanilla-extract/css"
import { breakpoints, vw, mvw } from "../../shared/styles/responsive.css"

export const scrollVideoContainer = style({
  position: "relative",
  width: "100%",
  height: "300vh",
  
  "@media": {
    [breakpoints.mobile]: {
      height: "300vh",
    },
  },
})

export const videoWrapper = style({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  "@media": {
    [breakpoints.mobile]: {
      height: mvw(600),
    },
  },
})

export const video = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
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
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 10,
})

export const loadingSpinner = style({
  color: "#ffffff",
  fontSize: vw(18),
  fontWeight: 600,
  
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
    },
  },
})