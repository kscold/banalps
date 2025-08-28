import { style, keyframes } from "@vanilla-extract/css"

const fadeInUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
})

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
})

const scrollPulse = keyframes({
  "0%, 100%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
})

export const heroContainer = style({
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const backgroundImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
  transition: "opacity 0.5s ease",
})

export const backgroundImageNext = style({
  objectFit: "cover",
  objectPosition: "center",
  width: "100%",
  height: "100%",
})

export const vimeoContainer = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
})

export const vimeoIframe = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100vw",
  height: "56.25vw", // 16:9 비율
  minHeight: "100vh",
  minWidth: "177.77vh", // 16:9 비율 유지
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
})

export const hidden = style({
  opacity: 0,
})

export const overlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0)",
  zIndex: 3,
})

export const videoSection = style({
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const videoOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 2,
})

export const contentWrapper = style({
  position: "relative",
  zIndex: 4,
  width: "100%",
  maxWidth: "1200px",
  padding: "0 2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 1rem",
    },
  },
})

export const textContent = style({
  width: "100%",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "1.5rem",
    },
  },
})

export const textBlock = style({
  opacity: 0,
  transform: "translateY(30px)",
  transition: "all 0.8s ease-out",
  selectors: {
    "&.visible": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
})

export const quoteLine = style({
  opacity: 0,
  transform: "translateY(30px)",
  transition: "all 1s ease-out",
  padding: "1.5rem 0",
  selectors: {
    "&.visible": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
})

export const storyText = style({
  fontSize: "1.1rem",
  lineHeight: "1.8",
  color: "white",
  fontWeight: "400",
  letterSpacing: "0.02em",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
      lineHeight: "1.6",
    },
    "screen and (max-width: 480px)": {
      fontSize: "0.9rem",
      lineHeight: "1.5",
    },
  },
})

export const mainQuote = style({
  fontSize: "2.5rem",
  fontWeight: "600",
  color: "#14AEFF",
  lineHeight: "1.4",
  textShadow: "0 2px 8px rgba(20, 174, 255, 0.3)",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "2rem",
    },
    "screen and (max-width: 480px)": {
      fontSize: "1.5rem",
    },
  },
})

export const finalQuote = style({
  borderTop: "2px solid rgba(20, 174, 255, 0.3)",
  borderBottom: "2px solid rgba(20, 174, 255, 0.3)",
  padding: "2rem 0",
  marginTop: "2rem",
})

export const finalQuoteText = style({
  fontSize: "2rem",
  fontWeight: "600",
  color: "#14AEFF",
  lineHeight: "1.4",
  textShadow: "0 2px 8px rgba(20, 174, 255, 0.3)",
  margin: "0 0 1rem 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.5rem",
    },
    "screen and (max-width: 480px)": {
      fontSize: "1.2rem",
    },
  },
})

export const quoteSubtext = style({
  fontSize: "1.1rem",
  color: "white",
  fontWeight: "400",
  opacity: 0.9,
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
})

export const scrollIndicator = style({
  position: "absolute",
  bottom: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  color: "white",
  animation: `${scrollPulse} 2s infinite`,
})

export const scrollArrow = style({
  width: "24px",
  height: "24px",
  opacity: 0.8,
})

export const scrollText = style({
  fontSize: "0.8rem",
  fontWeight: "400",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  opacity: 0.8,
})

export const visible = style({
  // 애니메이션 클래스
})
