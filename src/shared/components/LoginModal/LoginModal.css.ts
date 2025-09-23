import { style, keyframes } from "@vanilla-extract/css";
import { vw, mvw, breakpoints } from "@/shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

const slideInAnimation = keyframes({
  "0%": {
    transform: "translate(100%, -50%)",
    opacity: 0,
  },
  "100%": {
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});

const slideInMobileAnimation = keyframes({
  "0%": {
    transform: "translateX(100%)",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
});

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
  animation: "fadeIn 0.3s ease",
});

export const modalContainer = style({
  position: "fixed",
  top: 0,
  left: "auto",
  right: 0,
  bottom: 0,
  transform: "none",
  width: "85%",
  maxWidth: vw(700),
  zIndex: 1000,
  "@media": {
    [breakpoints.mobile]: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: mvw(350),
      maxWidth: "90%",
    },
  },
});

export const slideIn = style({
  animation: `${slideInMobileAnimation} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
  "@media": {
    [breakpoints.mobile]: {
      animation: `${slideInAnimation} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    },
  },
});

export const modal = style({
  backgroundColor: "#FFFDF7",
  borderRadius: 0,
  width: "100%",
  height: "100%",
  maxHeight: "100vh",
  overflow: "auto",
  position: "relative",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: mvw(20),
      width: "100%",
      height: "auto",
      maxHeight: "90vh",
    },
  },
});

export const closeButton = style({
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(32),
  height: vw(32),
  transition: "transform 0.2s",

  "@media": {
    [breakpoints.mobile]: {
      width: mvw(28),
      height: mvw(28),
    },
  },
});

export const modalHeader = style({
  padding: `${vw(40)} ${vw(50)} ${vw(20)}`,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: vw(50),
    right: vw(50),
    height: "2px",
    backgroundColor: "#272727",
  },
  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(32)} ${mvw(24)} ${mvw(16)}`,
      "::after": {
        left: mvw(24),
        right: mvw(24),
      },
    },
  },
});

export const headerContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(8),
  "@media": {
    [breakpoints.mobile]: {
      gap: mvw(6),
    },
  },
});

export const title = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 700,
  fontSize: vw(20),
  letterSpacing: vw(2),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(20),
      letterSpacing: mvw(1.5),
    },
  },
});

export const modalBody = style({
  padding: vw(50),
  display: "flex",
  flexDirection: "column",
  gap: vw(32),
  "@media": {
    [breakpoints.mobile]: {
      padding: mvw(24),
      gap: mvw(24),
    },
  },
});

export const loginSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(24),
  "@media": {
    [breakpoints.mobile]: {
      gap: mvw(16),
    },
  },
});

export const loginTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(20),
  color: "#272727",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
    },
  },
});

export const userIcon = style({
  width: vw(20),
  height: vw(20),
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(18),
      height: mvw(18),
    },
  },
});

export const socialButtons = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(12),
  "@media": {
    [breakpoints.mobile]: {
      gap: mvw(10),
    },
  },
});

export const loginRow = style({
  display: "flex",
  alignItems: "center",
  gap: vw(12),
  marginBottom: vw(12),
  "@media": {
    [breakpoints.mobile]: {
      gap: mvw(10),
      marginBottom: mvw(8),
    },
  },
});

export const iconSquare = style({
  width: vw(60),
  height: vw(60),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vw(8),
  flexShrink: 0,
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(50),
      height: mvw(50),
      borderRadius: mvw(6),
    },
  },
});

export const loginButton = style({
  flex: 1,
  height: vw(60),
  backgroundColor: "#FFFDF7",
  border: "1px solid #E5E5E5",
  borderRadius: vw(8),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
  fontFamily: "'Pretendard', sans-serif",
  fontSize: vw(14),
  fontWeight: 500,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  "@media": {
    [breakpoints.mobile]: {
      height: mvw(50),
      borderRadius: mvw(6),
      fontSize: mvw(14),
    },
  },
});

export const iconImage = style({
  width: vw(24),
  height: vw(24),
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(20),
      height: mvw(20),
    },
  },
});

export const socialText = style({
  color: "#666666",
  fontSize: vw(14),
  fontWeight: 500,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(14),
    },
  },
});

export const illustrationSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: vw(200),
  "@media": {
    [breakpoints.mobile]: {
      minHeight: mvw(150),
    },
  },
});

export const illustrationImage = style({
  width: "100%",
  height: "auto",
  maxHeight: vw(200),
  objectFit: "contain",
  "@media": {
    [breakpoints.mobile]: {
      maxHeight: mvw(150),
    },
  },
});

export const illustration = style({
  width: "100%",
  height: "auto",
  maxWidth: vw(300),
  "@media": {
    [breakpoints.mobile]: {
      maxWidth: mvw(200),
    },
  },
});

export const iconButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: vw(4),
  marginLeft: vw(8),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.2s",
  ":hover": {
    transform: "scale(1.1)",
  },
  "@media": {
    [breakpoints.mobile]: {
      padding: mvw(4),
      marginLeft: mvw(8),
    },
  },
});

export const signupSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(30),
  alignItems: "center",
  justifyContent: "center",
  padding: vw(40),
  "@media": {
    [breakpoints.mobile]: {
      gap: mvw(24),
      padding: mvw(24),
    },
  },
});

export const signupTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(24),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(20),
    },
  },
});

export const signupText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 300,
  fontSize: vw(18),
  lineHeight: 1.6,
  color: "#14AEFF",
  textAlign: "center",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
    },
  },
});

export const backButton = style({
  padding: `${vw(12)} ${vw(24)}`,
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  border: "none",
  borderRadius: vw(8),
  fontFamily: "'Pretendard', sans-serif",
  fontSize: vw(14),
  fontWeight: 500,
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#0096E4",
  },
  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(10)} ${mvw(20)}`,
      fontSize: mvw(14),
      borderRadius: mvw(6),
    },
  },
});

export const illustrationPlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F5F5F5",
  borderRadius: vw(8),
  color: "#999",
  fontSize: vw(14),
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(12),
      borderRadius: mvw(6),
    },
  },
});
