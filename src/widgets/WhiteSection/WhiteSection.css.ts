import { style } from "@vanilla-extract/css"

// 메인 섹션 컨테이너
export const whiteSection = style({
  width: "100%",
  backgroundColor: "#FFFFFF",
  position: "relative",
})

// 내부 컨테이너
export const container = style({
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 60px",
  "@media": {
    "screen and (max-width: 1024px)": {
      padding: "0 40px",
    },
    "screen and (max-width: 768px)": {
      padding: "0 20px",
    },
  },
})

// Hero 섹션
export const heroSection = style({
  padding: "120px 0",
  position: "relative",
})

export const mainTitle = style({
  fontSize: "60px",
  fontWeight: "500",
  lineHeight: "1.2",
  color: "#000000",
  marginBottom: "80px",
  fontFamily: "'S-Core Dream', sans-serif",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
      marginBottom: "60px",
    },
  },
})

// 서비스 카드 그리드
export const serviceCards = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "30px",
  marginBottom: "40px",
  "@media": {
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "screen and (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const serviceCard = style({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  backgroundColor: "#F5F5F5",
})

export const cardImage = style({
  width: "100%",
  aspectRatio: "4 / 5",
  overflow: "hidden",
  position: "relative",
})

export const cardButton = style({
  width: "calc(100% - 32px)",
  margin: "16px",
  padding: "10px 16px",
  backgroundColor: "#FFFFFF",
  border: "none",
  borderRadius: "42px",
  fontSize: "20px",
  fontWeight: "500",
  fontFamily: "'S-Core Dream', sans-serif",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#14AEFF",
    color: "#FFFFFF",
  },
})

// Other Service Box
export const otherServiceBox = style({
  backgroundColor: "#F0F0F0",
  borderRadius: "20px",
  padding: "40px",
  marginTop: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const otherServiceTitle = style({
  fontSize: "32px",
  fontWeight: "500",
  lineHeight: "1.2",
  fontFamily: "'Poppins', sans-serif",
})

export const viewMoreButton = style({
  padding: "12px 16px",
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "8px",
  fontSize: "20px",
  fontWeight: "500",
  fontFamily: "'Poppins', sans-serif",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#0EA5E9",
  },
})

// Ready 섹션
export const readySection = style({
  padding: "160px 0",
  display: "flex",
  gap: "80px",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      padding: "120px 0",
    },
  },
})

export const readyContent = style({
  flex: "1",
  maxWidth: "600px",
})

export const readyTitle = style({
  fontSize: "60px",
  fontWeight: "500",
  lineHeight: "1.3",
  marginBottom: "80px",
  fontFamily: "'Poppins', sans-serif",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
      marginBottom: "60px",
    },
  },
})

export const readyDescription = style({
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "#333333",
  fontFamily: "'S-Core Dream', sans-serif",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
  },
})

export const readyImage = style({
  flex: "1",
  maxWidth: "700px",
  borderRadius: "24px",
  overflow: "hidden",
  backgroundColor: "#F5F5F5",
  aspectRatio: "16 / 10",
})

// 위치 섹션
export const locationSection = style({
  padding: "120px 0",
  borderTop: "1px solid #E0E0E0",
})

export const locationTitle = style({
  fontSize: "60px",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "80px",
  fontFamily: "'S-Core Dream', sans-serif",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
      marginBottom: "60px",
    },
  },
})

export const locationContent = style({
  display: "flex",
  gap: "60px",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
    },
  },
})

export const mapArea = style({
  flex: "1",
  minHeight: "500px",
})

export const mapPlaceholder = style({
  width: "100%",
  height: "500px",
  backgroundColor: "#F0F0F0",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  color: "#999",
})

export const locationInfo = style({
  flex: "1",
  maxWidth: "500px",
})

export const infoBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  marginBottom: "40px",
})

export const infoItem = style({
  display: "flex",
  gap: "20px",
})

export const infoLabel = style({
  width: "115px",
  fontSize: "20px",
  fontWeight: "500",
  color: "#000000",
  flexShrink: 0,
  fontFamily: "'S-Core Dream', sans-serif",
})

export const infoValue = style({
  flex: "1",
  fontSize: "20px",
  lineHeight: "1.5",
  color: "#333333",
  fontFamily: "'S-Core Dream', sans-serif",
})

export const infoValueParagraph = style({
  margin: 0,
  marginBottom: "8px",
})

export const subwayInfo = style({
  marginTop: "20px",
  fontSize: "16px",
  color: "#666666",
})

export const mapButtons = style({
  display: "flex",
  gap: "16px",
})

export const mapButton = style({
  padding: "9px 16px",
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#0EA5E9",
  },
})

// 푸터 이미지
export const footerImage = style({
  position: "relative",
  width: "100vw",
  marginLeft: "-60px",
  marginRight: "-60px",
  height: "540px",
  marginTop: "120px",
  backgroundColor: "#F5F5F5",
  backgroundImage: "url('/main/footer-bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px 8px 0 0",
})

export const footerOverlay = style({
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  padding: "80px 60px",
  background: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(10px)",
})

export const footerTitle = style({
  fontSize: "20px",
  fontWeight: "400",
  lineHeight: "1.3",
  color: "#FFFFFF",
  marginBottom: "180px",
  fontFamily: "'Poppins', sans-serif",
})

export const footerCopyright = style({
  fontSize: "14px",
  fontWeight: "400",
  color: "#FFFFFF",
  fontFamily: "'Poppins', sans-serif",
})

// Legacy styles (keeping for compatibility)
export const gradientBackground = style({
  display: "none",
})

export const titleSection = style({
  display: "none",
})

export const titleLine1 = style({
  display: "none",
})

export const titleLine2 = style({
  display: "none",
})

export const subtitle = style({
  display: "none",
})

export const contentSection = style({
  display: "none",
})

export const imageArea = style({
  display: "none",
})

export const mainImage = style({
  display: "none",
})

export const textArea = style({
  display: "none",
})

export const sectionTitle = style({
  display: "none",
})

export const highlight = style({
  display: "none",
})

export const description = style({
  display: "none",
})

export const featuresList = style({
  display: "none",
})

export const featureCard = style({
  display: "none",
})

export const featureNumber = style({
  display: "none",
})

export const featureTitle = style({
  display: "none",
})

export const featureDesc = style({
  display: "none",
})

export const beforeAfterSection = style({
  display: "none",
})

export const galleryTitle = style({
  display: "none",
})

export const galleryGrid = style({
  display: "none",
})

export const beforeAfterCard = style({
  display: "none",
})

export const beforeImage = style({
  display: "none",
})

export const afterImage = style({
  display: "none",
})

export const caseLabel = style({
  display: "none",
})

export const topSection = style({
  display: "none",
})

export const imageWrapper = style({
  display: "none",
})

export const imagePlaceholder = style({
  display: "none",
})

export const textContent = style({
  display: "none",
})

export const title = style({
  display: "none",
})

export const features = style({
  display: "none",
})

export const featureItem = style({
  display: "none",
})

export const featureIcon = style({
  display: "none",
})

export const featureText = style({
  display: "none",
})

export const gallerySection = style({
  display: "none",
})

export const galleryItem = style({
  display: "none",
})