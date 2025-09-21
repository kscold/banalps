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
  backgroundColor: "#FFFFFF",
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
  // position: "absolute",
  // top: vw(20),
  // right: vw(20),
  // width: vw(32),
  // height: vw(32),
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  transition: "transform 0.2s",
  ":hover": {
    transform: "rotate(90deg)",
  },
  "@media": {
    [breakpoints.mobile]: {
      top: mvw(16),
      right: mvw(16),
      width: mvw(28),
      height: mvw(28),
    },
  },
});

export const modalHeader = style({
  padding: `${vw(40)} ${vw(50)} ${vw(20)}`,
  borderBottom: "1px solid #F0F0F0",
  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(32)} ${mvw(24)} ${mvw(16)}`,
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
  gap: vw(60),
  "@media": {
    [breakpoints.mobile]: {
      padding: mvw(24),
      flexDirection: "column",
      gap: mvw(40),
    },
  },
});

export const loginSection = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: vw(30),
  "@media": {
    [breakpoints.mobile]: {
      gap: mvw(24),
    },
  },
});

export const loginTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(20),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
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

export const socialButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vw(12),
  padding: `${vw(14)} ${vw(20)}`,
  borderRadius: vw(8),
  border: "none",
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
      padding: `${mvw(12)} ${mvw(16)}`,
      borderRadius: mvw(6),
      fontSize: mvw(14),
      gap: mvw(10),
    },
  },
});

export const kakaoIcon = style({
  fontSize: vw(20),
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
    },
  },
});

export const naverIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(24),
  height: vw(24),
  backgroundColor: "#FFFFFF",
  color: "#03C75A",
  fontFamily: "'Helvetica Neue', sans-serif",
  fontWeight: 900,
  fontSize: vw(16),
  borderRadius: vw(4),
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(20),
      height: mvw(20),
      fontSize: mvw(14),
      borderRadius: mvw(3),
    },
  },
});

export const googleIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(24),
  height: vw(24),
  fontFamily: "'Product Sans', 'Arial', sans-serif",
  fontWeight: 500,
  fontSize: vw(18),
  background: "linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(20),
      height: mvw(20),
      fontSize: mvw(16),
    },
  },
});

export const socialText = style({
  color: "#272727",
  flex: 1,
});

export const illustrationSection = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.mobile]: {
      minHeight: mvw(250),
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
  flex: 1,
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
