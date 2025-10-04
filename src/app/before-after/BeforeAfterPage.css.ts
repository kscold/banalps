import { style, globalStyle } from "@vanilla-extract/css";
import {
  breakpoints,
  vw,
  responsiveContainer,
  responsiveFont,
} from "../../shared/styles/responsive.css";
import { mvw } from "../../shared/styles/responsive.utils";
import { fontFamily } from "../../shared/styles/fonts.css";

<<<<<<< Updated upstream
// 페이지 전체 컨테이너
=======
// 페이지 전체 컨테이너 - 성능 최적화
>>>>>>> Stashed changes
export const beforeAfterPage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFDF7",
  padding: 0,
<<<<<<< Updated upstream
=======
  transform: "translateZ(0)", // GPU 가속
  backfaceVisibility: "hidden", // 깜빡임 방지
  willChange: "transform, opacity", // 애니메이션 최적화
>>>>>>> Stashed changes
});

// ========== 메인 섹션 ==========
// 페이지 전체 스타일
export const page = style({
  minHeight: "100vh",
  backgroundColor: "#FFFDF7", // 헤어라인 페이지는 흰색 배경
});

// Hero Section Styles
export const HairTransplantHeroSection = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.mobile]: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: mvw(90),
    },
  },
});

export const HairTransplantHeroContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  margin: "0 auto",
  height: "100vh",
  "@media": {
    [breakpoints.mobile]: {
      padding: `0 ${mvw(20)}`,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
});

export const HairTransplantHeroIllustration = style({
  position: "absolute",
  left: "0", // 1920px 컨테이너의 맨 왼쪽부터 시작
  width: "1750px", // 헤더와 완전히 동일한 최대 너비
  maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한 (양쪽 160px 마진)
  top: "50%",
  transform: "translateY(-50%)",
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const HairTransplantHeroTitleWrapper = style({
  ...responsiveContainer(1600),
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: vw(60),
  zIndex: 2,
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingRight: "60px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "block",
      padding: "0",
      marginTop: mvw(80),
      width: "100%",
    },
  },
});

export const HairTransplantHeroTitleContainer = style({
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translateY(-50%)",
  textAlign: "left",
  zIndex: 3,
  right: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      marginRight: "160px",
      paddingLeft: "40px",
      paddingRight: "60px",
    },
    [breakpoints.desktop]: {
      marginRight: vw(160),
    },
    [breakpoints.mobile]: {
      width: "100%",
      position: "static",
      top: "0px",
      transform: "none",
      textAlign: "center",
      marginRight: "0",
      paddingLeft: "0",
      paddingRight: "0",
      right: "auto",
    },
  },
});

export const HairTransplantHeroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60, 40),
  letterSpacing: "0",
  lineHeight: vw(72),
  color: "#272727",
  margin: "0",
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(40),
      lineHeight: mvw(48),
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const HairTransplantHeroTitleDot = style({
  width: vw(12),
  height: vw(12),
  backgroundColor: "#14AEFF",
  borderRadius: "50%",
  marginLeft: vw(4),
  flexShrink: 0,
  alignSelf: "flex-end", // 모바일에서는 하단 정렬
  marginBottom: vw(12), // 약간의 하단 여백
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "12px",
      height: "12px",
      marginLeft: "4px",
      marginBottom: "12px",
    },
    [breakpoints.mobile]: {
      width: mvw(10),
      height: mvw(10),
      marginLeft: mvw(4),
      alignSelf: "flex-end", // 모바일에서는 하단 정렬
      marginBottom: mvw(6), // 약간의 하단 여백
    },
  },
});

// Hairline Hero Section
export const heroSection = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  // Hero 섹션은 전체 1920px 사용
  "@media": {
    [breakpoints.mobile]: {
      // minHeight: mvw(600), // 모바일 전체 높이 축소
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: mvw(90), // 상단 여백
    },
  },
});

export const heroContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px", // Hero는 1920px 전체 사용
  margin: "0 auto",
  height: "100vh",
  "@media": {
    [breakpoints.mobile]: {
      padding: `0 ${mvw(20)}`, // 모바일 좌우 패딩
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
});

export const heroIllustration = style({
  position: "absolute",
  left: "0", // 1920px 컨테이너의 맨 왼쪽부터 시작
  width: "1750px", // 헤더와 완전히 동일한 최대 너비
  maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한 (양쪽 160px 마진)
  top: "50%",
  transform: "translateY(-50%)",
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const heroIllustrationImage = style({
  width: "100%",
  height: "100%", // 컨테이너 높이에 맞춤
  objectFit: "cover", // contain에서 cover로 변경하여 전체 영역을 채움
  objectPosition: "center right", // 이미지를 오른쪽으로 정렬하여 헤더와 맞춤
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const heroIllustrationImageMobile = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
      height: "auto",
      marginTop: mvw(80),
    },
  },
});

export const heroTitleWrapper = style({
  ...responsiveContainer(1600), // 헤더와 일치하는 1600px 컨테이너
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end", // 오른쪽 정렬
  paddingRight: vw(60), // 헤더와 동일한 패딩
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingRight: "60px", // 헤더와 동일한 고정 패딩
    },
    [breakpoints.mobile]: {
      width: "100%",
      position: "relative",
      justifyContent: "center",
      paddingRight: "0",
      alignItems: "center",
      paddingTop: "0",
      top: "0px",
      zIndex: 10,
    },
  },
});

export const heroTitleContainer = style({
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translateY(-50%)",
  textAlign: "left",
  zIndex: 3,
  right: "0", // 오른쪽에서 시작
  "@media": {
    [breakpoints.desktopLarge]: {
      marginRight: "160px", // 1920px+ 고정 마진
      paddingLeft: "40px",
      paddingRight: "60px", // 헤더와 동일한 고정 패딩
    },
    [breakpoints.mobile]: {
      width: "100%",
      position: "static",
      top: "0px",
      transform: "none",
      textAlign: "center",
      marginRight: "0",
      paddingLeft: "0",
      paddingRight: "0",
      right: "auto",
    },
  },
});

// Hairline Hero Title - Figma 디자인에 맞게 60px
export const heroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500, // Figma에서 Medium weight
  ...responsiveFont(60, 40), // 1920px 기준 60px, 모바일 40px
  letterSpacing: "0", // Figma에서 0
  lineHeight: vw(72), // Figma에서 72px
  color: "#272727",
  margin: "0",
  textAlign: "left",

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      marginTop: mvw(58),
      lineHeight: mvw(48),
      fontSize: mvw(40),
    },
  },
});

export const heroContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "@media": {
    [breakpoints.mobile]: {
      padding: `0 ${mvw(20)}`,
    },
  },
});

export const heroSubtitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 300,
  ...responsiveFont(20, 16),
  lineHeight: vw(30),
  color: "#ffffff",
  marginTop: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
      marginTop: "20px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(24),
      marginTop: mvw(16),
    },
  },
});

export const heroTitleDot = style({
  display: "inline-block",
  width: vw(20),
  height: vw(20),
  backgroundColor: "#14AEFF",
  borderRadius: "50%",
  marginLeft: vw(20),
  flexShrink: 0,
  verticalAlign: "middle", // 텍스트와 수직 정렬
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "20px",
      height: "20px",
      marginLeft: "20px",
    },
    [breakpoints.mobile]: {
      width: mvw(14),
      height: mvw(14),
      marginLeft: mvw(14),
    },
  },
});

// ========== 캐러셀 섹션 ==========
export const carouselSection = style({
  width: "100%",
  height: "auto",
  paddingBottom: vw(120),
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingBottom: "120px",
    },
    [breakpoints.mobile]: {
      paddingBottom: mvw(120),
    },
  },
});

export const carouselHeader = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: vw(48),
  gap: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "48px",
      gap: "40px",
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(48),
      gap: mvw(24),
    },
  },
});

// 서브타이틀이 없을 때 사용 (gap 없음)
export const carouselHeaderNoSubtitle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: vw(48),
  gap: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "48px",
      gap: 0,
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(48),
      gap: 0,
    },
  },
});

export const categoryBadge = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: vw(228),
  height: vw(44),
  backgroundColor: "#73D5FA",
  color: "#FFFFFF",
  background: "#14AEFF",
  borderRadius: vw(30),
  fontFamily: fontFamily.scdream,
  fontSize: vw(18),
  fontWeight: 500,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "228px",
      height: "44px",
      borderRadius: "30px",
      fontSize: "18px",
    },
    [breakpoints.mobile]: {
      width: mvw(170),
      height: mvw(36),
      borderRadius: mvw(20),
      fontSize: mvw(16),
    },
  },
});

export const itemTitle = style({
  fontFamily: fontFamily.scdream,
  fontSize: vw(18),
  fontWeight: 500,
  color: "#14AEFF",
  lineHeight: "150%",
  minHeight: vw(27), // 타이틀이 없어도 높이 유지

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      minHeight: "27px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      minHeight: mvw(27),
    },
  },
});

// Custom height for BeforeAfterSlider in this page
export const customSliderHeight = style({});

// Apply custom height to imageContainer within customSliderHeight
globalStyle(`${customSliderHeight} div[class*="imageContainer"]`, {
  "@media": {
    [breakpoints.mobile]: {
      height: `${mvw(180)} !important`,
    },
  },
});

export const carouselContainer = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: vw(15), // 간격 15px (전체 290px - 275px 너비)
  justifyContent: "center",
  width: "100%",
  maxWidth: "1920px",
  margin: "0 auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
    },
    [breakpoints.mobile]: {
      gap: 0,
      justifyContent: "center",
      alignItems: "center",
      padding: `0 ${mvw(45)}`,
      height: mvw(180),
    },
  },
});

export const carouselViewport = style({
  flex: "0 0 auto",
  width: vw(790),
  height: vw(474),
  borderRadius: vw(12),
  backgroundColor: "#FFFDF7",
  margin: "0 auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "790px",
      height: "474px",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      maxWidth: "100%",
      height: "auto",
      borderRadius: mvw(12),
      backgroundColor: "transparent",
    },
  },
});

export const carouselTrack = style({
  display: "flex",
  transition: "transform 0.5s ease",
});

export const carouselSlide = style({
  flex: "0 0 100%",
  position: "relative",
});

export const mainSlide = style({
  width: "100%",
  position: "relative",
});

export const sidePreview = style({
  flex: "0 0 auto",
  width: vw(275),
  height: vw(474),
  position: "relative",
  // transition: "opacity 0.3s ease",
  overflow: "hidden",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "stretch",
  alignSelf: "stretch",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "275px",
      height: "474px",
    },
    [breakpoints.mobile]: {
      display: "none", // Hide side previews on mobile
    },
  },
});

export const sidePreviewLeft = style({});

export const sidePreviewLeftBlue = style({});

export const sidePreviewRight = style({});

export const sidePreviewRightBlue = style({});

export const sidePreviewImage = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  top: 0,
  borderRadius: "inherit",
  selectors: {
    [`${sidePreviewLeft} &`]: {
      right: 0, // Show right half for left preview
    },
    [`${sidePreviewRight} &`]: {
      left: 0, // Show left half for right preview
    },
  },
});

export const sidePreviewLabel = style({
  position: "absolute",
  bottom: vw(20),
  left: "50%",
  transform: "translateX(-50%)",
  fontFamily: fontFamily.scdream,
  fontSize: vw(14),
  fontWeight: 500,
  color: "#8B92A1",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: `${vw(6)} ${vw(12)}`,
  borderRadius: vw(6),
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "20px",
      fontSize: "14px",
      padding: "6px 12px",
      borderRadius: "6px",
    },
  },
});

export const sliderWrapper = style({
  width: "100%",
  position: "relative",
});

export const sliderLabels = style({
  position: "absolute",
  bottom: vw(20),
  left: vw(20),
  right: vw(20),
  display: "flex",
  justifyContent: "space-between",
  pointerEvents: "none",
  zIndex: 100,
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "20px",
      left: "20px",
      right: "20px",
    },
    [breakpoints.mobile]: {
      bottom: mvw(16),
      left: mvw(16),
      right: mvw(16),
    },
  },
});

export const beforeLabel = style({
  fontFamily: fontFamily.scdream,
  fontSize: vw(16),
  fontWeight: 600,
  color: "#333333",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: `${vw(4)} ${vw(12)}`,
  borderRadius: vw(4),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      padding: "4px 12px",
      borderRadius: "4px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      padding: `${mvw(3)} ${mvw(8)}`,
      borderRadius: mvw(3),
    },
  },
});

export const afterLabel = style({
  fontFamily: fontFamily.scdream,
  fontSize: vw(16),
  fontWeight: 600,
  color: "#333333",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: `${vw(4)} ${vw(12)}`,
  borderRadius: vw(4),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      padding: "4px 12px",
      borderRadius: "4px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      padding: `${mvw(3)} ${mvw(8)}`,
      borderRadius: mvw(3),
    },
  },
});

export const carouselArrow = style({
  position: "absolute",
  top: "calc(50% - 40px)",
  transform: "translateY(-50%)",
  width: vw(48),
  height: vw(48),
  borderRadius: vw(8),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  flexShrink: 0,
  color: "#73D5FA",
  zIndex: 20, // z-index 증가
  background: "transparent",
  border: "none",
  padding: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "48px",
      height: "48px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: mvw(12),
      height: mvw(22),
      borderRadius: 0,
      top: "50%",
    },
  },
});

export const carouselArrowLeft = style({
  left: vw(400),
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "400px",
    },
    [breakpoints.mobile]: {
      left: mvw(25),
    },
  },
});

export const carouselArrowRight = style({
  right: vw(400),
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "400px",
    },
    [breakpoints.mobile]: {
      right: mvw(25),
    },
  },
});

export const carouselDots = style({
  display: "flex",
  justifyContent: "center",
  gap: vw(8),
  marginTop: vw(24),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "8px",
      marginTop: "24px",
    },
    [breakpoints.mobile]: {
      gap: mvw(6),
      marginTop: mvw(16),
    },
  },
});

export const carouselDot = style({
  width: vw(8),
  height: vw(8),
  borderRadius: "50%",
  border: "none",
  backgroundColor: "#E0E0E0",
  cursor: "pointer",
  transition: "all 0.3s ease",
  padding: 0,
  ":hover": {
    backgroundColor: "#73D5FA",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "8px",
      height: "8px",
    },
    [breakpoints.mobile]: {
      width: mvw(6),
      height: mvw(6),
    },
  },
});

export const carouselDotActive = style({
  backgroundColor: "#73D5FA",
  width: vw(24),
  borderRadius: vw(4),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "24px",
      borderRadius: "4px",
    },
    [breakpoints.mobile]: {
      width: mvw(18),
      borderRadius: mvw(3),
    },
  },
});

// 로그인 오버레이 스타일
export const loginOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
  borderRadius: vw(12),
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      borderRadius: mvw(8),
    },
  },
});

export const loginOverlayContent = style({
  textAlign: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vw(16),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "16px",
    },
    [breakpoints.mobile]: {
      gap: mvw(12),
    },
  },
});

export const loginOverlayButton = style({
  fontFamily: fontFamily.poppins,
  fontSize: vw(16),
  fontWeight: 600,
  color: "#272727",
  backgroundColor: "#FFFFFF",
  borderRadius: "24px",
  textAlign: "center",
  cursor: "pointer",
  width: vw(150),
  height: vw(42),
  padding: `${vw(9)} ${vw(16)}`,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      width: "150px",
      height: "42px",
      padding: "9px 16px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(12),
      borderRadius: mvw(16),
      padding: `${mvw(6)} ${mvw(16)}`,
    },
  },
});

export const loginOverlayText = style({
  fontFamily: fontFamily.scdream,
  fontSize: vw(18),
  fontWeight: 500,
  color: "white",
  lineHeight: "150%",
  letterSpacing: "0%",
  textAlign: "center",

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(12),
    },
  },
});
