import { style, keyframes } from "@vanilla-extract/css";
import { vw, mvw, breakpoints } from "@/shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";
import { Poppins } from "next/font/google";

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
      width: mvw(343),
      maxWidth: mvw(343),
      height: mvw(520),
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
  width: "100%",
  height: "100%",
  maxHeight: "100vh",
  // overflow: "auto",
  position: "relative",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: "8px",
      width: "100%",
      height: "100%",
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
  // padding: `${vw(40)} ${vw(50)} ${vw(20)}`,
  padding: "3.75rem 3rem 0.75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "3rem", // 패딩과 동일하게 설정하여 LOGIN 텍스트 시작점에 맞춤
    right: "3rem", // 패딩과 동일하게 설정하여 X 버튼 끝점에 맞춤
    height: "1px",
    backgroundColor: "#C6C6C6",
  },
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
      padding: `${mvw(28)} ${mvw(32)} ${mvw(8)} ${mvw(32)}`,
      "::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: mvw(32), // 모바일 패딩과 동일하게 설정
        right: mvw(32), // 모바일 패딩과 동일하게 설정
        height: "1px",
        backgroundColor: "#272727",
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
  margin: 0,
  fontFamily: fontFamily.poppins,
  fontWeight: 600,
  lineHeight: "normal",
  fontSize: "1.25rem",
  // fontSize: vw(20),
  // lineHeight: "100%",
  letterSpacing: "0",
  color: "#272727",

  "@media": {
    [breakpoints.mobile]: {
      fontWeight: 600,
      fontSize: "1.25rem",
      letterSpacing: "0",
    },
  },
});

export const modalBody = style({
  // padding: `0 ${vw(50)} 0 ${vw(50)}`,
  padding: "0 3rem",
  display: "flex",
  flexDirection: "column",
  gap: vw(32),
  height: "calc(100% - 92px)",
  justifyContent: "space-between",
  "@media": {
    [breakpoints.mobile]: {
      // padding: mvw(24),
      height: `calc(100% - ${mvw(66)})`,
      padding: "2.5rem 2rem 1.75rem 2rem",
      gap: mvw(24),
    },
  },
});

export const loginSection = style({
  display: "flex",
  flexDirection: "column",
  // gap: vw(32),
  gap: "1.5rem",
  padding: "7.5rem 5rem",
  flex: "1",
  height: vw(648),
  minHeight: vw(648),
  "@media": {
    [breakpoints.mobile]: {
      // gap: mvw(20),
      gap: "1.38rem",
      padding: 0,
      height: "auto",
    },
  },
});

export const loginTitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(24),
  lineHeight: "150%",
  letterSpacing: "0%",
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
      // marginBottom: 0,
    },
  },
});

export const iconSquare = style({
  width: vw(60),
  height: vw(60),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(50),
      height: mvw(50),
    },
  },
});

export const loginButton = style({
  flex: 1,
  height: vw(60),
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E5E5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontFamily: "'Pretendard', sans-serif",
  fontSize: vw(14),
  fontWeight: 500,
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
  color: "#707070",
  fontFamily: fontFamily.scdream,
  fontSize: vw(14),
  lineHeight: "140%",
  fontWeight: 400,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: "140%",
    },
  },
});

export const illustrationSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: vw(270),
  marginTop: "auto",
  marginBottom: "3.75rem",
  width: "100%",
  "@media": {
    [breakpoints.mobile]: {
      height: mvw(120),
      // marginBottom: mvw(30),
      marginBottom: 0,
    },
  },
});

export const illustrationImage = style({
  width: "100%",
  height: "100%",
  maxHeight: vw(270),
  objectFit: "contain",
  objectPosition: "center",
  "@media": {
    [breakpoints.mobile]: {
      maxHeight: mvw(162),
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
  alignItems: "flex-start",
  justifyContent: "flex-start",

  padding: `${vw(124)} ${vw(80)} ${vw(80)} 0`,
  "@media": {
    [breakpoints.mobile]: {
      gap: mvw(24),
      // padding: mvw(24),
    },
  },
});

export const signupTitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(24),
  lineHeight: "150%",
  letterSpacing: "0%",
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(20),
    },
  },
});

export const signupText = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(20),
  lineHeight: "150%",
  letterSpacing: "0%",
  color: "#14AEFF",
  textAlign: "left",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(20),
    },
  },
});

export const backButton = style({
  padding: `${vw(12)} ${vw(24)}`,
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  border: "none",
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
  color: "#999",
  fontSize: vw(14),
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(12),
      borderRadius: mvw(6),
    },
  },
});
