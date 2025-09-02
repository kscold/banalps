import { style, keyframes } from "@vanilla-extract/css"

// 페이지 전체 스타일
export const aboutPage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
})

// About Hero Section
export const aboutHeroSection = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#73D5FA",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

// About Hero Background
export const aboutHeroBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  pointerEvents: "none",
})

// About Hero Graffiti
export const aboutHeroGraffiti = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  opacity: 0.15,
  zIndex: 1,
})

// About Hero Content
export const aboutHeroContent = style({
  position: "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: "1200px",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

// About Hero Text
export const aboutHeroText = style({
  textAlign: "center",
  color: "#272727",
})

// About Hero Main Title
export const aboutHeroMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "36px",
  lineHeight: "1.4",
  letterSpacing: "0",
  margin: "0 0 20px 0",
  color: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
      lineHeight: "1.3",
      margin: "0 0 16px 0",
    },
    "screen and (max-width: 480px)": {
      fontSize: "24px",
      lineHeight: "1.2",
      margin: "0 0 12px 0",
    },
  },
})

// About Hero Sub Title
export const aboutHeroSubTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "1.4",
  letterSpacing: "0",
  margin: "0",
  color: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
      lineHeight: "1.3",
    },
    "screen and (max-width: 480px)": {
      fontSize: "24px",
      lineHeight: "1.2",
    },
  },
})

// Hero Section
export const heroSection = style({
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  padding: "120px 20px 80px",
  backgroundColor: "#F8F9FA",
  position: "relative",
  zIndex: 1,
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      padding: "100px 20px 60px",
      minHeight: "auto",
    },
  },
})

export const heroContent = style({
  flex: 1,
  maxWidth: "600px",
  paddingRight: "60px",
  "@media": {
    "screen and (max-width: 768px)": {
      paddingRight: 0,
      marginBottom: "40px",
      textAlign: "center",
    },
  },
})

export const heroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "120%",
  letterSpacing: "-1.8px",
  color: "#272727",
  margin: "0 0 32px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
      letterSpacing: "-1.2px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "40px",
      letterSpacing: "-1px",
    },
  },
})

export const heroDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#6B7280",
  margin: "0 0 48px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "18px",
    },
  },
})

export const heroButton = style({
  display: "flex",
  gap: "16px",
  "@media": {
    "screen and (max-width: 768px)": {
      justifyContent: "center",
    },
  },
})

export const heroImage = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
})

// Mission Section
export const missionSection = style({
  padding: "120px 20px",
  backgroundColor: "#FFFFFF",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "80px 20px",
    },
  },
})

export const missionContent = style({
  display: "flex",
  alignItems: "center",
  gap: "80px",
  maxWidth: "1200px",
  margin: "0 auto",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "40px",
    },
  },
})

export const missionText = style({
  flex: 1,
  "@media": {
    "screen and (max-width: 768px)": {
      textAlign: "center",
    },
  },
})

export const missionTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "120%",
  letterSpacing: "-1.8px",
  color: "#272727",
  margin: "0 0 32px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
      letterSpacing: "-1.2px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "40px",
      letterSpacing: "-1px",
    },
  },
})

export const missionDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "20px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#6B7280",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "16px",
    },
  },
})

export const missionImage = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

// Values Section
export const valuesSection = style({
  padding: "120px 20px",
  backgroundColor: "#F8F9FA",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "80px 20px",
    },
  },
})

export const valuesContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
})

export const valuesTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "120%",
  letterSpacing: "-1.8px",
  color: "#272727",
  margin: "0 0 80px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
      letterSpacing: "-1.2px",
      marginBottom: "60px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "40px",
      letterSpacing: "-1px",
      marginBottom: "40px",
    },
  },
})

export const valuesGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "40px",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "32px",
    },
  },
})

export const valueCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 20px",
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
  },
})

export const valueIcon = style({
  width: "80px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F3F4F6",
  borderRadius: "50%",
  marginBottom: "24px",
  fontSize: "32px",
})

export const valueTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 16px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "22px",
    },
  },
})

export const valueDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#6B7280",
  margin: 0,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "15px",
    },
  },
})

// Contact Section
export const contactSection = style({
  padding: "120px 20px",
  backgroundColor: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "80px 20px",
    },
  },
})

export const contactContent = style({
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
})

export const contactTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "120%",
  letterSpacing: "-1.8px",
  color: "#FFFFFF",
  margin: "0 0 32px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
      letterSpacing: "-1.2px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "40px",
      letterSpacing: "-1px",
    },
  },
})

export const contactDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "20px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#D1D5DB",
  margin: "0 0 48px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "16px",
    },
  },
})

export const contactButtons = style({
  display: "flex",
  gap: "24px",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "16px",
      alignItems: "center",
    },
  },
})

// 공통 플레이스홀더 이미지
export const placeholderImage = style({
  width: "100%",
  maxWidth: "500px",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F3F4F6",
  borderRadius: "16px",
  border: "2px dashed #D1D5DB",
  color: "#9CA3AF",
  fontSize: "18px",
  fontWeight: 500,
  "@media": {
    "screen and (max-width: 768px)": {
      height: "300px",
      fontSize: "16px",
    },
    "screen and (max-width: 480px)": {
      height: "250px",
      fontSize: "14px",
    },
  },
})
