import { style, keyframes } from "@vanilla-extract/css"

// 페이지 전체 스타일
export const hairlinePage = style({
  minHeight: "100vh",
  backgroundColor: "#fffdf7", // Figma 디자인과 일치하는 크림색
})

// Hairline Hero Section
export const hairlineHeroSection = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  maxWidth: "1920px",
})

export const hairlineHeroContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  margin: "0 auto",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      justifyContent: "center",
      gap: "40px",
      padding: "0 15px",
    },
  },
})

export const hairlineHeroIllustration = style({
  position: "absolute",
  left: "0",
  top: "50%",
  transform: "translateY(-50%)",
  width: "auto",
  height: "762px",
  zIndex: 1,
  "@media": {
    "screen and (max-width: 768px)": {
      position: "relative",
      left: "auto",
      top: "auto",
      transform: "none",
      height: "400px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    "screen and (max-width: 480px)": {
      height: "300px",
    },
  },
})

export const heroIllustrationImage = style({
  width: "100%",
  height: "auto",
  objectFit: "contain",
})

export const hairlineHeroTitleContainer = style({
  position: "absolute",
  left: "0",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  zIndex: 3,
  "@media": {
    "screen and (max-width: 768px)": {
      position: "relative",
      left: "auto",
      top: "auto",
      transform: "none",
    },
  },
})

// Hairline Hero Title - Figma 디자인에 맞게 60px
export const hairlineHeroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500, // Figma에서 Medium weight
  fontSize: "60px", // Figma에서 60px
  letterSpacing: "0", // Figma에서 0
  lineHeight: "72px", // Figma에서 72px
  color: "#272727",
  margin: "0",
  textAlign: "left",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
      lineHeight: "58px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "36px",
      lineHeight: "44px",
    },
  },
})

export const hairlineHeroTitleDot = style({
  fontSize: "60px",
  width: "12px",
  height: "12px",
  backgroundColor: "#14AEFF",
  borderRadius: "50%",
  flexShrink: 0,
  marginTop: "8px", // 텍스트와 정렬을 위한 조정
})

// Section 1: 얼굴 윤곽의 완성은 헤어라인입니다
export const section1 = style({
  padding: "120px 20px",
  backgroundColor: "#fffdf7",
})

export const section1Content = style({
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
    },
  },
})

export const section1Left = style({
  position: "relative",
})

export const section1Text = style({
  marginBottom: "40px",
})

export const section1Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "40px",
  lineHeight: "56px",
  letterSpacing: "0",
  margin: "0 0 40px 0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "32px",
      lineHeight: "44px",
    },
  },
})

export const section1Image = style({
  margin: "40px 0",
})

export const section1Illustration = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
})

export const section1Description = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
})

export const section1Number = style({
  position: "absolute",
  top: "0",
  right: "-60px",
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  fontSize: "200px",
  lineHeight: "240px",
  color: "#272727",
  opacity: 0.1,
  zIndex: -1,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
})

export const section1Right = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
})

export const section1Images = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
})

export const section1Image1 = style({
  gridColumn: "1 / 2",
  gridRow: "1 / 3",
})

export const section1Image2 = style({
  gridColumn: "2 / 3",
  gridRow: "2 / 4",
})

export const section1ImageContent = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
})

// Section 2: 빼곡하고 자연스럽게
export const section2 = style({
  padding: "120px 20px",
  backgroundColor: "#fffdf7",
})

export const section2Content = style({
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
    },
  },
})

export const section2Left = style({
  order: 1,
  "@media": {
    "screen and (max-width: 768px)": {
      order: 2,
    },
  },
})

export const section2Image = style({
  width: "100%",
})

export const section2ImageContent = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
})

export const section2Right = style({
  position: "relative",
  order: 2,
  "@media": {
    "screen and (max-width: 768px)": {
      order: 1,
    },
  },
})

export const section2Text = style({
  marginBottom: "40px",
})

export const section2Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "40px",
  lineHeight: "56px",
  letterSpacing: "0",
  margin: "0 0 40px 0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "32px",
      lineHeight: "44px",
    },
  },
})

export const section2Description = style({
  fontFamily: "'Pretendard', sans-serif",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
})

export const section2Number = style({
  position: "absolute",
  top: "0",
  left: "-60px",
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  fontSize: "200px",
  lineHeight: "240px",
  color: "#272727",
  opacity: 0.1,
  zIndex: -1,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
})

// Section 3: 결국, 고객이 원하는 디자인이 좋은 디자인입니다
export const section3 = style({
  padding: "120px 20px",
  backgroundColor: "#fffdf7",
})

export const section3Content = style({
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
    },
  },
})

export const section3Left = style({
  position: "relative",
})

export const section3Text = style({
  marginBottom: "40px",
})

export const section3Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "40px",
  lineHeight: "56px",
  letterSpacing: "0",
  margin: "0 0 40px 0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "32px",
      lineHeight: "44px",
    },
  },
})

export const section3Description = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
})

export const section3Number = style({
  position: "absolute",
  top: "0",
  right: "-60px",
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  fontSize: "200px",
  lineHeight: "240px",
  color: "#272727",
  opacity: 0.1,
  zIndex: -1,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
})

export const section3Right = style({
  display: "flex",
  justifyContent: "center",
})

export const section3Image = style({
  width: "100%",
  maxWidth: "610px",
})

export const section3ImageContent = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
})

// Before & After Section
export const beforeAfterSection = style({
  padding: "120px 20px",
  backgroundColor: "#fffdf7",
})

export const beforeAfterContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
})

export const beforeAfterHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  marginBottom: "60px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "10px",
    },
  },
})

export const beforeAfterBadge = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "36px",
  letterSpacing: "0",
  color: "#ffffff",
  backgroundColor: "#14aeff",
  padding: "4px 20px",
  borderRadius: "999px",
  display: "inline-block",
})

export const beforeAfterTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "36px",
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
})

export const beforeAfterImages = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
  marginBottom: "60px",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
  },
})

export const beforeImage = style({
  position: "relative",
})

export const afterImage = style({
  position: "relative",
})

export const beforeAfterImage = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
})

export const beforeAfterLabel = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "20px",
  letterSpacing: "0",
  margin: "20px 0 0 0",
  color: "#272727",
  textAlign: "center",
})

export const viewMoreButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "36px",
  letterSpacing: "0",
  color: "#ffffff",
  backgroundColor: "#14aeff",
  border: "none",
  borderRadius: "48px",
  padding: "15px 30px",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#0d8bcc",
    transform: "translateY(-2px)",
  },
})

export const buttonArrow = style({
  width: "44px",
  height: "44px",
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#14aeff",
})

// Features Section
export const featuresSection = style({
  padding: "120px 20px",
  backgroundColor: "#fffdf7",
})

export const featuresContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
})

export const featuresHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  marginBottom: "80px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "10px",
    },
  },
})

export const featuresIcon = style({
  color: "#2d74ff",
})

export const featuresTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "32px",
  lineHeight: "48px",
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
})

export const featuresGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "40px",
  "@media": {
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const featureCard = style({
  backgroundColor: "#d5feff",
  borderRadius: "999px",
  padding: "60px 40px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  minHeight: "400px",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "40px 20px",
      minHeight: "300px",
    },
  },
})

export const featureText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
})

// Footer Section - Figma 디자인 기반
export const footerSection = style({
  backgroundColor: "#73d5fa", // Figma와 일치하는 파란색
  padding: "50px 20px",
  color: "#ffffff",
})

export const footerContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "30px",
      textAlign: "center",
    },
  },
})

export const footerMain = style({
  display: "flex",
  gap: "60px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "20px",
    },
  },
})

export const footerColumn = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
})

export const footerInfo = style({
  marginBottom: "8px",
})

export const footerClinicName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0 0 4px 0",
  color: "#ffffff",
})

export const footerRepresentative = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
})

export const footerCopyright = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
})

export const footerAddress = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0 0 4px 0",
  color: "#ffffff",
})

export const footerLinks = style({
  display: "flex",
  gap: "12px",
  "@media": {
    "screen and (max-width: 768px)": {
      justifyContent: "center",
    },
  },
})

export const footerLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  color: "#ffffff",
  textDecoration: "none",
  transition: "opacity 0.3s ease",
  ":hover": {
    opacity: 0.8,
  },
})

export const footerPhone = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "19.6px",
  letterSpacing: "0",
  margin: "0",
  color: "#ffffff",
})

export const footerLogo = style({
  display: "flex",
  alignItems: "center",
})

export const footerLogoContainer = style({
  width: "158px",
  height: "37px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const footerLogoText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "24px",
  letterSpacing: "0.1em",
  color: "#ffffff",
})
