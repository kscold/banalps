import { style } from "@vanilla-extract/css";
import { vw, mvw, breakpoints } from "../../../shared/styles/responsive.css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
});

export const containerBlue = style({
  position: "relative",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
});

export const imageContainer = style({
  position: "relative",
  width: "100%",
  flexGrow: 1,
  overflow: "hidden",
  borderRadius: vw(12),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      borderRadius: mvw(12),
      boxShadow: "none",
    },
  },
});

export const fullImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const labelsContainer = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: vw(20),
  padding: "12px 0",
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "20px",
    },
  },
});

export const labelsContainerBlue = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "0",
  paddingTop: vw(32),
  paddingBottom: "12px",
  backgroundColor: "#D5FEFF",
  borderBottomLeftRadius: vw(12),
  borderBottomRightRadius: vw(12),
  marginBottom: "0",
  "::before": {
    content: '""',
    position: "absolute",
    top: vw(-20),
    left: "0",
    right: "0",
    height: vw(20),
    // backgroundColor: "#D5FEFF",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "32px",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      "::before": {
        top: "-20px",
        height: "20px",
      },
    },
  },
});

export const label = style({
  fontFamily: "'S-Core Dream', 'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(20),
  lineHeight: vw(20),
  color: "#272727",
  margin: "0",
  textAlign: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
  },
});
