import { style } from "@vanilla-extract/css";
import { breakpoints, vw, mvw } from "../../../shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

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
});

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
});

export const mapIframe = style({
  width: "100%",
  height: "100%",
  display: "block",
  border: "none",
});

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
});

export const loadingText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  color: "#666",
});

export const mapButtons = style({
  display: "flex",
  gap: vw(12),
  marginTop: "auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
    },
    [breakpoints.desktop]: {
      gap: vw(12),
    },
    [breakpoints.mobile]: {
      gap: mvw(20),
      marginTop: mvw(60),
      width: "100%",
    },
  },
});

const buttonBase = style({
  position: "relative",
  padding: `${vw(10)} ${vw(20)}`,
  fontSize: vw(14),
  fontFamily: fontFamily.poppins,
  fontWeight: 600,
  border: "none",
  borderRadius: vw(20),
  cursor: "pointer",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  minWidth: vw(120),
  height: vw(40),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  letterSpacing: 0,
  lineHeight: "100%",

  ":hover": {
    opacity: 0.85, // dim 효과
  },

  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "10px 20px",
      fontSize: "14px",
      borderRadius: "20px",
      minWidth: "120px",
      height: "40px",
      lineHeight: "20px",
    },
    [breakpoints.desktop]: {
      padding: `${vw(10)} ${vw(20)}`,
      fontSize: vw(14),
      borderRadius: vw(20),
      minWidth: vw(120),
      height: vw(40),
      lineHeight: vw(20),
    },
    [breakpoints.mobile]: {
      padding: `${mvw(16)} ${mvw(24)}`,
      fontSize: mvw(16),
      borderRadius: mvw(30),
      minWidth: "auto",
      height: mvw(40),
      lineHeight: mvw(24),
      flex: 1,
      fontWeight: 700,
    },
  },
});

export const kakaoButton = style([
  buttonBase,
  {
    backgroundColor: "#F3E362",
    color: "#272727",

    "@media": {
      [breakpoints.desktopLarge]: {
        minWidth: "120px",
      },
      [breakpoints.desktop]: {
        minWidth: vw(120),
        ":hover": {
          opacity: 0.8, // PC에서 hover시 dim 효과
        },
      },
      [breakpoints.mobile]: {
        fontSize: mvw(16),
        flex: 1,
        minWidth: "auto",
        ":hover": {
          opacity: 1, // 모바일에서는 hover 효과 제거
          transform: "none",
        },
      },
    },
  },
]);

export const naverButton = style([
  buttonBase,
  {
    backgroundColor: "#58A54B",
    color: "#272727",

    "@media": {
      [breakpoints.desktopLarge]: {
        minWidth: "120px",
      },
      [breakpoints.desktop]: {
        minWidth: vw(120),
        ":hover": {
          opacity: 0.8, // PC에서 hover시 dim 효과
        },
      },
      [breakpoints.mobile]: {
        flex: 1,
        minWidth: "auto",
        ":hover": {
          opacity: 1, // 모바일에서는 hover 효과 제거
          transform: "none",
        },
      },
    },
  },
]);
