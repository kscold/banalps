import { style } from "@vanilla-extract/css"
import {
  vw,
  responsiveFont,
  responsiveContainer,
  responsiveProperty,
  breakpoints,
} from "../../shared/styles/responsive.css"

// 메인 섹션 컨테이너 (1920px 기준) - BlueSection과 동일하게
export const whiteSection = style({
  width: "100%",
  backgroundColor: "#FFFFFF",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  ...responsiveProperty("paddingBottom", 120), // 1920px 기준 120px
})

// 상단 히어로 이미지 컨테이너 (1920px 기준)
export const heroImageContainer = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  aspectRatio: "1600 / 400", // 적당한 비율 설정
  overflow: "hidden",
  borderRadius: vw(12),
  marginTop: vw(240), // 1920px 기준 80px
  marginBottom: vw(240), // 1920px 기준 80px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "240px",
      marginBottom: "240px",
      borderRadius: "12px",
    },
  },
})

// 히어로 이미지 (1920px 기준)
export const heroImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
})

// 내부 컨테이너 - BlueSection과 동일하게
export const container = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
})

// 메인 타이틀 (1920px 기준)
export const mainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60), // 1920px 기준 60px
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  ...responsiveProperty("marginBottom", 80), // 1920px 기준 80px
})

// 메인 콘텐츠 영역 (1920px 기준) - 헤더와 동일한 간단한 방식
export const mainContent = style({
  ...responsiveContainer(1600), // 헤더와 동일한 컨테이너 적용
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  gap: vw(12), // 12px gap 추가
  height: vw(628), // 1920px 기준 628px 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "628px",
      gap: "12px",
    },
    [breakpoints.mobile]: {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
  },
})

// 카드 그리드 (1920px 기준) - 왼쪽 2x2 그리드
export const cardGrid = style({
  flex: "1", // 남은 공간 차지
  display: "flex",
  flexDirection: "column",
  gap: vw(12), // 1920px 기준 12px gap
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      gap: "20px",
    },
  },
})

// 상단 행 (1920px 기준)
export const topRow = style({
  display: "flex",
  gap: vw(12), // 1920px 기준 12px
  height: vw(308), // 1920px 기준 308px
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
      height: "308px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      height: "auto",
      gap: "20px",
    },
  },
})

// 하단 행 (1920px 기준)
export const bottomRow = style({
  display: "flex",
  gap: vw(12), // 1920px 기준 12px
  height: vw(304), // 1920px 기준 304px
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
      height: "304px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      height: "auto",
      gap: "20px",
    },
  },
})

// 서비스 카드 공통 (1920px 기준)
export const serviceCard = style({
  position: "relative",
  borderRadius: vw(8),
  overflow: "hidden",
  backgroundColor: "#F5F5F5",
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "300px",
      aspectRatio: "auto",
    },
  },

  // 카드 크기 비율 적용 (56% : 44%)
  selectors: {
    [`${topRow} &:first-child`]: {
      flex: "0 0 56%", // 상단 첫 번째 카드
    },
    [`${topRow} &:last-child`]: {
      flex: "0 0 calc(44% - ${vw(12)})", // 상단 두 번째 카드 (gap 고려)
    },
    [`${bottomRow} &:first-child`]: {
      flex: "0 0 calc(44% - ${vw(12)})", // 하단 첫 번째 카드 (gap 고려)
    },
    [`${bottomRow} &:last-child`]: {
      flex: "0 0 56%", // 하단 두 번째 카드
    },
  },
})

// 카드 이미지 (1920px 기준)
export const cardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
})

// 카드 버튼 (1920px 기준)
export const cardButton = style({
  position: "absolute",
  bottom: vw(20), // 1920px 기준 20px
  left: vw(20), // 1920px 기준 20px
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "20px",
      left: "20px",
    },
    [breakpoints.mobile]: {
      bottom: "20px",
      left: "20px",
    },
  },
})

// Other Medical Service 박스 (1920px 기준)
export const otherServiceBox = style({
  position: "relative",
  width: vw(390), // 1920px 기준 390px
  height: "100%",
  borderRadius: vw(8),
  overflow: "hidden",
  flexShrink: 0, // 크기 고정
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "390px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "300px",
      marginTop: "20px",
    },
  },
})

// Other Service 타이틀 (1920px 기준)
export const otherServiceTitle = style({
  position: "absolute",
  top: vw(40),
  left: vw(40),
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32), // 1920px 기준 32px
  lineHeight: "100%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  zIndex: 2,
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "40px",
      left: "40px",
    },
  },
})

// View More 버튼 (1920px 기준)
export const viewMoreButton = style({
  position: "absolute",
  bottom: vw(20), // 1920px 기준 20px
  left: vw(20), // 1920px 기준 20px
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "20px",
      left: "20px",
    },
    [breakpoints.mobile]: {
      bottom: "20px",
      left: "20px",
    },
  },
})

// 카드 번호 배지 (1920px 기준) - 피그마 디자인 기준
export const cardNumber = style({
  position: "absolute",
  top: vw(16), // 1920px 기준 16px (피그마에서 확인한 위치)
  left: vw(16), // 1920px 기준 16px
  width: vw(36), // 1920px 기준 36px
  height: vw(36), // 1920px 기준 36px
  borderRadius: "50%",
  backgroundColor: "#BD4AF3",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 700,
  ...responsiveFont(20), // 1920px 기준 20px
  letterSpacing: "-0.6px",
  zIndex: 10,
  border: `${vw(4)} solid #FFFFFF`, // 흰색 테두리 추가
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "16px",
      left: "16px",
      width: "36px",
      height: "36px",
      border: "4px solid #FFFFFF",
    },
  },
})

// Service 번호 배지 (Other Medical Service용) (1920px 기준)
export const serviceNumber = style({
  position: "absolute",
  bottom: vw(56), // 1920px 기준 56px
  left: vw(20), // 1920px 기준 20px
  width: vw(36), // 1920px 기준 36px
  height: vw(36), // 1920px 기준 36px
  borderRadius: "50%",
  backgroundColor: "#BD4AF3",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 700,
  ...responsiveFont(20), // 1920px 기준 20px
  letterSpacing: "-0.6px",
  zIndex: 2,
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "56px",
      left: "20px",
      width: "36px",
      height: "36px",
    },
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
