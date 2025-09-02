import { style, keyframes } from "@vanilla-extract/css"

// 페이지 전체 스타일
export const hairlinePage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
})

// Hairline Hero Section
export const hairlineHeroSection = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
})

// Hairline Hero Background
export const hairlineHeroBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
})

// Hairline Hero SVG
export const hairlineHeroSVG = style({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
})

// Hairline Hero Title (for SVG)
export const hairlineHeroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "48px",
  letterSpacing: "-0.02em",
  fill: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "36px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "28px",
    },
  },
})

// Hairline Hero Description (for SVG)
export const hairlineHeroDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: "20px",
  letterSpacing: "-0.01em",
  fill: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "16px",
    },
  },
})

// Hairline Info Section
export const hairlineInfoSection = style({
  padding: "120px 20px",
  backgroundColor: "#FFFFFF",
})

export const hairlineInfoContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "80px",
  alignItems: "center",

  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "40px",
      padding: "80px 20px",
    },
  },
})

export const hairlineInfoText = style({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
})

export const hairlineInfoTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "1.3",
  letterSpacing: "-0.02em",
  margin: "0",
  color: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
    },
  },
})

export const hairlineInfoDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "1.7",
  letterSpacing: "-0.01em",
  margin: "0",
  color: "#666666",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "15px",
    },
  },
})

export const hairlineInfoFeatures = style({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
})

export const hairlineFeature = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  padding: "24px",
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  border: "1px solid #E9ECEF",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
  transition: "all 0.3s ease",

  ":hover": {
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transform: "translateY(-2px)",
  },
})

export const featureIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  backgroundColor: "#F0F8FF",
  borderRadius: "12px",
  flexShrink: 0,
})

export const featureContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
})

export const hairlineFeatureTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "1.4",
  letterSpacing: "-0.01em",
  margin: "0",
  color: "#272727",
})

export const hairlineFeatureDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  margin: "0",
  color: "#666666",
})

export const hairlineInfoImage = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const hairlineImageContainer = style({
  width: "100%",
  height: "500px",
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
})

export const hairlineImagePlaceholder = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#73D5FA",
  background: "linear-gradient(135deg, #73D5FA 0%, #4FC3F7 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
})

export const hairlineImageContent = style({
  textAlign: "center",
  color: "#FFFFFF",
  zIndex: 2,
})

export const hairlineImageTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "28px",
  lineHeight: "1.3",
  letterSpacing: "-0.02em",
  margin: "0 0 12px 0",
  color: "#FFFFFF",
})

export const hairlineImageSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "1.4",
  letterSpacing: "-0.01em",
  margin: "0 0 20px 0",
  color: "#FFFFFF",
  opacity: 0.9,
})

export const hairlineImageDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  margin: "0",
  color: "#FFFFFF",
  opacity: 0.8,
})

// Procedure Section
export const procedureSection = style({
  padding: "120px 20px",
  backgroundColor: "#F8F9FA",
})

export const procedureContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
})

export const procedureTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "1.3",
  letterSpacing: "-0.02em",
  margin: "0 0 60px 0",
  color: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
      margin: "0 0 40px 0",
    },
  },
})

export const procedureSteps = style({
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

export const procedureStep = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "32px 24px",
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
})

export const stepNumber = style({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#73D5FA",
  color: "#FFFFFF",
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "60px",
  textAlign: "center",
  margin: "0 0 24px 0",
})

export const stepContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
})

export const stepTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "1.4",
  letterSpacing: "-0.01em",
  margin: "0",
  color: "#272727",
})

export const stepDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  margin: "0",
  color: "#666666",
})

// Results Section
export const resultsSection = style({
  padding: "120px 20px",
  backgroundColor: "#FFFFFF",
})

export const resultsContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
})

export const resultsTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "1.3",
  letterSpacing: "-0.02em",
  margin: "0 0 60px 0",
  color: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
      margin: "0 0 40px 0",
    },
  },
})

export const resultsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "40px",

  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "32px",
    },
  },
})

export const resultCard = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#F8F9FA",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
})

export const resultImage = style({
  width: "100%",
  height: "300px",
  backgroundColor: "#E9ECEF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const resultInfo = style({
  padding: "24px",
  textAlign: "center",
})

export const resultTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "1.4",
  letterSpacing: "-0.01em",
  margin: "0 0 12px 0",
  color: "#272727",
})

export const resultDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  margin: "0",
  color: "#666666",
})

// Contact Section
export const contactSection = style({
  padding: "120px 20px",
  backgroundColor: "#73D5FA",
  textAlign: "center",
})

export const contactContent = style({
  maxWidth: "800px",
  margin: "0 auto",
  color: "#272727",
})

export const contactTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "1.3",
  letterSpacing: "-0.02em",
  margin: "0 0 24px 0",
  color: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
    },
  },
})

export const contactDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  margin: "0 0 40px 0",
  color: "#272727",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "16px",
    },
  },
})

export const contactButtons = style({
  display: "flex",
  gap: "20px",
  justifyContent: "center",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    },
  },
})

// Placeholder Image
export const placeholderImage = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#E9ECEF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#666666",
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  borderRadius: "8px",
})
