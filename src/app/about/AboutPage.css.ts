import { style, keyframes } from "@vanilla-extract/css";
import {
  breakpoints,
  vw,
  responsiveFont,
  responsiveContainer,
  mvw,
} from "../../shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

// 페이지 전체 스타일
export const aboutPage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFDF7",
  width: "100%",
  maxWidth: "100vw",
  overflowX: "hidden",
});

// 페이드 인 애니메이션 키프레임
const fadeInUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(50px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

// Hero Section - 피그마의 첫 번째 섹션
export const heroSection = style({
  padding: `${vw(240)} 0 ${vw(120)} 0`,
  background: "#73D5FA",
  // animation: `${fadeInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "240px 0 120px 0",
    },
    [breakpoints.mobile]: {
      display: "flex", // 명시적으로 flex 설정

      padding: `${mvw(120)} 0 ${mvw(120)} 0`,
      minHeight: "100vh", // 최소 화면 높이 설정
    },
  },
});

export const heroContainer = style({
  ...responsiveContainer(1600),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "100%",
  gap: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      gap: mvw(60),
      width: "100vw",
      padding: 0,
      maxWidth: "100%",
    },
  },
});

export const heroContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: vw(715), // 피그마 기준 텍스트 영역 너비
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "715px",
    },
  },
});

export const heroQuoteMobile = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  margin: `0 0 ${mvw(48)} 0`,
});

export const heroQuote = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  ...responsiveFont(36),
  lineHeight: "140%",
  letterSpacing: "0%",
  color: "#000000",
  margin: `0 0 ${vw(30)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      margin: "0 0 30px 0",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      minWidth: mvw(203),
      fontSize: mvw(16),
      lineHeight: "140%",
      color: "#272727",
      margin: 0,
    },
  },
});

export const heroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  ...responsiveFont(36),
  lineHeight: "140%",
  color: "#000000",
  margin: 0,
  "@media": {
    [breakpoints.mobile]: {
      minWidth: mvw(135),
      fontSize: mvw(20),
      lineHeight: "140%",
      color: "#000000",
      fontWeight: 500,
    },
  },
});

export const heroIllustration = style({
  width: "100%",
  maxWidth: vw(1571), // 피그마 기준 일러스트 너비
  display: "flex",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1571px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
      padding: `0 ${mvw(20)}`,
    },
  },
});

export const heroIllustrationMobile = style({
  width: "100%",
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  padding: `0 ${mvw(20)}`,
  "@media": {
    [breakpoints.desktopLarge]: {
      display: "none",
    },
    [breakpoints.desktop]: {
      display: "none",
    },
  },
});

export const illustrationImage = style({
  width: "100%",
  height: "auto",
  maxWidth: vw(1571),
  maxHeight: vw(582),
  objectFit: "contain",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1571px",
      maxHeight: "582px",
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

// Values Section - 가치 섹션
export const valuesSection = style({
  padding: `${vw(120)} 0`,
  background: "#73D5FA",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: 0,
      background: "#73D5FA",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export const valuesContainer = style({
  ...responsiveContainer(1600),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "80px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      flexDirection: "column",
      gap: mvw(80),
      padding: `0 ${mvw(20)} ${mvw(120)} ${mvw(20)}`,
      alignItems: "left",
      justifyContent: "left",
      maxWidth: "100%",
    },
  },
});

export const valuesContent = style({
  flex: "0 0 385px",
  "@media": {
    [breakpoints.mobile]: {
      flex: "0 0 auto",
      textAlign: "left",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "left",
    },
  },
});

export const valuesMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: "120%",
  letterSpacing: "-1.8px",
  color: "#000000",
  margin: `0 0 ${vw(80)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      margin: "0 0 80px 0",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(36),
      lineHeight: "120%",
      margin: `0 0 ${mvw(80)} 0`,
      textAlign: "left",
      letterSpacing: "0em",
      color: "#000000",
    },
  },
});

export const valuesDescription = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  ...responsiveFont(24),
  lineHeight: "150%",
  color: "#000000",
  margin: 0,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: "150%",
      textAlign: "left",
      color: "#000000",
      whiteSpace: "pre-line",
    },
  },
});

export const valuesCards = style({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  maxWidth: vw(957),
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "957px",
    },
    [breakpoints.mobile]: {
      flex: "0 0 auto",
      height: mvw(318),
      width: mvw(342),
      justifyContent: "center",
      maxWidth: mvw(342),
      // marginTop: mvw(60),
    },
  },
});

// Values 카드 SVG 이미지 스타일
export const valueCardsImage = style({
  width: "100%",
  maxWidth: vw(990),
  height: "auto",
  objectFit: "contain",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "990px",
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const valueCardsImageMobile = style({
  display: "none",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      display: "block",
      width: mvw(342),
      height: mvw(318),
      objectFit: "contain",
      maxWidth: "100%",
    },
  },
});

// RE.YOU Section - 깔끔한 레이아웃
export const reYouSection = style({
  width: "100%",
  background: "#73D5FA",
  position: "relative", // overflow 제거를 위해 relative 추가
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      padding: "0",
      marginBottom: "0",
    },
  },
});

export const reYouContainer = style({
  position: "relative",
  width: "100%", // 전체 너비 사용
  height: vw(1220), // 피그마 기준 높이
  maxWidth: "none", // 최대 너비 제한 없음
  margin: 0, // 중앙 정렬 제거
  "@media": {
    [breakpoints.desktopLarge]: {},

    [breakpoints.mobile]: {
      height: "auto",
      overflow: "hidden",
    },
  },
});

// 이미지 카드들 컨테이너 - 전체 너비 사용 (1920px 기준)
export const reYouImageCards = style({
  position: "relative",
  width: "100%", // 전체 너비 사용
  height: "100%",
  maxWidth: "none", // 최대 너비 제한 없음
  "@media": {
    [breakpoints.mobile]: {
      position: "static",
      display: "flex",
      flexDirection: "column",
      gap: "0px",
      maxWidth: "100vw",
      height: "auto",
    },
  },
});

// 페이드인 애니메이션 for 이미지 카드
const cardFadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(40px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

// 첫 번째 카드 - 왼쪽 큰 수술 이미지
export const reYouCard1 = style({
  position: "absolute",
  left: 0,
  top: 0, // RE.YOU 텍스트 아래
  width: vw(550),
  height: vw(830),
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${cardFadeInUp} 500ms ease-out forwards`,
  animationDelay: "0ms",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "560px",
      height: "850px",
      borderRadius: "15px",
    },
    [breakpoints.mobile]: {
      position: "static",
      width: "100vw",
      height: mvw(260),
      margin: 0,
      borderRadius: 0,
      opacity: 0,
      animation: `${cardFadeInUp} 500ms ease-out forwards`,
      animationDelay: "0ms",
    },
  },
});

// 두 번째 카드 - 중앙 하단 김나래 이미지
export const reYouCard2 = style({
  position: "absolute",
  left: vw(725),
  top: vw(318),
  width: vw(410),
  height: vw(610),
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${cardFadeInUp} 500ms ease-out forwards`,
  animationDelay: "400ms",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "700px",
      bottom: "180px",
      width: "410px",
      height: "610px",
      borderRadius: "15px",
    },
    [breakpoints.mobile]: {
      position: "static",
      width: "100vw",
      height: mvw(260),
      margin: 0,
      borderRadius: 0,
      opacity: 0,
      animation: `${cardFadeInUp} 500ms ease-out forwards`,
      animationDelay: "400ms",
    },
  },
});

// 세 번째 카드 - 하단 작은 모발 확대 이미지
export const reYouCard3 = style({
  position: "absolute",
  left: vw(300),
  top: vw(1036),
  width: vw(490),
  height: vw(330),
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${cardFadeInUp} 500ms ease-out forwards`,
  animationDelay: "800ms",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      position: "static",
      width: "100vw",
      height: mvw(260),
      margin: 0,
      borderRadius: 0,
      opacity: 0,
      animation: `${cardFadeInUp} 500ms ease-out forwards`,
      animationDelay: "800ms",
    },
  },
});

// 네 번째 카드 - 오른쪽 끝 안경 쓴 의사 이미지
export const reYouCard4 = style({
  position: "absolute",
  right: 0, // 완전히 오른쪽 끝에 붙임
  top: vw(200), // 아래로 내려서 흰색 영역에 걸치도록
  width: vw(600),
  height: vw(900),
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${cardFadeInUp} 500ms ease-out forwards`,
  animationDelay: "1200ms",
  zIndex: 10, // 다른 섹션 위에 표시
  "@media": {
    [breakpoints.mobile]: {
      position: "static",
      width: "100vw",
      height: mvw(260),
      margin: 0,
      borderRadius: 0,
      opacity: 0,
      animation: `${cardFadeInUp} 500ms ease-out forwards`,
      animationDelay: "1200ms",
      zIndex: 1,
    },
  },
});

// 공통 카드 이미지 스타일
export const reYouCardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 300ms ease",
});

// RE.YOU 텍스트 섹션 - absolute 포지셔닝
export const reYouTextSection = style({
  position: "absolute",
  left: vw(700), // 피그마 기준 위치
  top: vw(100),
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      padding: `0 ${mvw(20)}`,
      position: "static",
      textAlign: "center",
      margin: `0 0 ${mvw(80)} 0`,
    },
  },
});

export const reYouContent = style({
  position: "relative",
  zIndex: 3,
});

export const reYouTitle = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  ...responsiveFont(70),
  lineHeight: "100%",
  color: "#FFFFFF", // 흰색으로 변경
  margin: `0 0 ${vw(20)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      margin: "0 0 20px 0",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(48),
      textAlign: "left",
      color: "#FFFFFF", // 흰색으로 변경
      margin: `0 0 ${mvw(12)} 0`,
    },
  },
});

export const reYouSubtitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  ...responsiveFont(20),
  lineHeight: "140%",
  color: "#FFFFFF", // 흰색으로 변경
  margin: 0,
  "@media": {
    [breakpoints.mobile]: {
      textAlign: "left",
      fontSize: mvw(18),
      color: "#FFFFFF", // 흰색으로 변경
    },
  },
});

// 바날이 잘하는 일 섹션 - 피그마 디자인 정확히 매칭
export const strengthsSection = style({
  paddingTop: vw(240),

  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "240px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      padding: `${mvw(120)} ${mvw(16)}`,
      marginTop: 0,
      backgroundColor: "#FFFDF7",
    },
  },
});

export const strengthsContainer = style({
  ...responsiveContainer(1600),
  "@media": {
    [breakpoints.mobile]: {
      padding: 0,
      width: "100%",
      maxWidth: "100%",
    },
  },
});

export const strengthsContent = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vw(156),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: mvw(40),
      width: "100%",
    },
  },
});

// 왼쪽 영역 - 타이틀 + SVG (끝과 끝에 배치)
export const strengthsLeftSection = style({
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  position: "relative",
  maxWidth: vw(400),
  height: "100%",
  minHeight: vw(600),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      minHeight: "auto",
      maxWidth: "100%",
      alignItems: "flex-start",
      textAlign: "left",
      gap: mvw(32),
      justifyContent: "flex-start",
    },
  },
});

export const strengthsTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  ...responsiveFont(60),
  lineHeight: "120%",
  letterSpacing: "-0.03em",
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(36),
      lineHeight: "120%",
      fontWeight: 500,
      textAlign: "left",
      alignSelf: "flex-start",
    },
  },
});

export const strengthsGraffiti = style({
  width: vw(320),
  height: "auto",
  display: "block",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "320px",
    },
    [breakpoints.mobile]: {
      width: mvw(343),
      marginBottom: mvw(48),
      alignSelf: "center",
    },
  },
});

// 오른쪽 영역 - 깔끔한 리스트 (피그마 디자인 정확히 매칭)
export const strengthsList = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0,
  backgroundColor: "transparent",
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
    backgroundColor: "#14AEFF",
  },
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
      "::after": {
        display: "none",
      },
    },
  },
});

export const strengthItem = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: vw(60),
  padding: `${vw(32)} 0`,
  borderTop: "1px solid #14AEFF",
  backgroundColor: "transparent",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "60px",
      padding: "32px 0",
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const strengthItemMobile = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "row",
      gap: mvw(12),
      padding: `${mvw(32)} 0`,
      borderTop: "1px solid #14AEFF",
      width: "100%",
      boxSizing: "border-box",
      ":last-child": {
        borderBottom: "1px solid #14AEFF",
      },
    },
  },
});

export const strengthNumber = style({
  flex: "0 0 auto",
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(24),
  lineHeight: vw(29),
  color: "#272727",
  minWidth: vw(60),
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      lineHeight: "29px",
      minWidth: "60px",
    },
  },
});

export const strengthNumberMobile = style({
  "@media": {
    [breakpoints.mobile]: {
      flex: "0 0 auto",
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 500,
      color: "#000000",
      fontSize: mvw(18),
      minWidth: mvw(106),
      marginBottom: 0,
    },
  },
});

// strengthItemContent 스타일 추가
export const strengthItemContent = style({
  flex: "1 1 auto",
  display: "contents", // 자식 요소들을 부모의 직접 자식으로 만듦
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 auto",
      minWidth: 0,
      gap: mvw(8),
      width: "100%",
      overflow: "hidden",
    },
  },
});

// strengthItemContent 스타일 추가
export const strengthItemContentMobile = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  width: mvw(225),
  gap: mvw(24),
});

export const strengthItemTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: vw(20),
  lineHeight: vw(28),
  color: "#272727",
  margin: 0,
  flex: "0 0 auto",
  minWidth: vw(200),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "28px",

      minWidth: "200px",
    },
  },
});

export const strengthItemTitleMobile = style({
  display: "block",
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: mvw(20),
  lineHeight: "140%",
  color: "#000000",
  whiteSpace: "pre-line",
  wordBreak: "keep-all",
  margin: 0,
});

export const strengthDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  fontSize: vw(16),
  lineHeight: vw(24),
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  whiteSpace: "pre-line",
  flex: "1 1 auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
});

export const strengthDescriptionMobile = style({
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      fontWeight: 400,
      lineHeight: "150%",
      color: "#272727",
      whiteSpace: "pre-line",
      wordBreak: "keep-all",
      overflowWrap: "break-word",
    },
  },
});

// Gallery Section - 바날 둘러보기 (피그마 디자인)
export const gallerySection = style({
  padding: `${vw(240)} 0`,
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "240px 0",
    },
    [breakpoints.mobile]: {
      padding: 0,
    },
  },
});

export const galleryContainer = style({
  ...responsiveContainer(1600),
  display: "flex",
  flexDirection: "column",
  gap: vw(15),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "100%",
      gap: mvw(16),
      padding: `0 ${mvw(16)}`,
      marginBottom: mvw(120),
    },
  },
});

// 상단 섹션: 타이틀 + 큰 이미지 (피그마 Frame 224, 1600x580)
export const galleryTopSection = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: vw(20),
  height: vw(580),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      height: "580px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      height: "auto",
      gap: mvw(30),
    },
  },
});

// 갤러리 타이틀 영역 (피그마 정확한 50% - gap 고려)
export const galleryTitleSection = style({
  flex: "1 1 50%",
  maxWidth: `calc(50% - ${vw(10)})`,
  height: vw(144),
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "calc(50% - 10px)",
      height: "144px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
      width: "100%",
      height: "auto",
      flex: "none",
    },
  },
});

// 메인 이미지 (Frame 15392, 50% 영역)
export const galleryMainImage = style({
  flex: "1 1 50%",
  maxWidth: `calc(50% - ${vw(10)})`,
  height: vw(580),
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "calc(50% - 10px)",
      height: "580px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
      width: "100%",
      height: mvw(200),
      borderRadius: mvw(8),
      flex: "none",
    },
  },
});

export const galleryTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(72),
  letterSpacing: "0",
  color: "#272727",
  textAlign: "left",
  margin: 0,
  // width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(40),
      lineHeight: "120%",
      textAlign: "left",
    },
  },
});

// 하단 복합 그리드 - 피그마 Frame 219, 220, 223 정확한 레이아웃
export const galleryGrid = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(20),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
    },
    [breakpoints.mobile]: {
      gap: mvw(16),
    },
  },
});

// Row 1: Frame 219 (1600x925) - 왼쪽 큰 이미지 + 오른쪽 2개 스택
export const galleryRow1 = style({
  display: "grid",
  gridTemplateColumns: `repeat(2, calc(50% - ${vw(10)}))`,
  gridTemplateRows: vw(925),
  gap: vw(20),
  height: vw(925),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: "repeat(2, calc(50% - 10px))",
      gridTemplateRows: "925px",
      gap: "20px",
      height: "925px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: `${mvw(250)} ${mvw(150)} ${mvw(150)}`,
      height: "auto",
      gap: mvw(16),
    },
  },
});

// Row 2: Frame 220 (1600x925) - 2개 나란히
export const galleryRow2 = style({
  display: "grid",
  gridTemplateColumns: `repeat(2, calc(50% - ${vw(10)}))`,
  gridTemplateRows: vw(925),
  gap: vw(20),
  height: vw(925),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: "repeat(2, calc(50% - 10px))",
      gridTemplateRows: "925px",
      gap: "20px",
      height: "925px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: `${mvw(250)} ${mvw(250)}`,
      height: "auto",
      gap: mvw(16),
    },
  },
});

// Row 3: Frame 223 (1600x1395) - 왼쪽 2개 스택 + 오른쪽 2개 스택
export const galleryRow3 = style({
  display: "grid",
  gridTemplateColumns: `repeat(2, calc(50% - ${vw(10)}))`,
  gridTemplateRows: vw(1395),
  gap: vw(20),
  height: vw(1395),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: "repeat(2, calc(50% - 10px))",
      gridTemplateRows: "1395px",
      gap: "20px",
      height: "1395px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: `repeat(4, ${mvw(180)})`,
      height: "auto",
      gap: mvw(16),
    },
  },
});

// 왼쪽 큰 이미지 (Frame 219)
export const galleryLeftLarge = style({
  gridColumn: "1",
  gridRow: "1",
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  // ":hover": {
  //   transform: "translateY(-8px)",
  //   boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  // },
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      gridColumn: "1",
      gridRow: "1",
      borderRadius: mvw(8),
    },
  },
});

// 오른쪽 위 (Frame 219 - 790x455)
export const galleryRightTop = style({
  gridColumn: "2",
  gridRow: "1",
  height: vw(455),
  alignSelf: "start",
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  // ":hover": {
  //   transform: "translateY(-8px)",
  //   boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  // },
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "455px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      gridColumn: "1",
      gridRow: "2",
      height: "auto",
      alignSelf: "stretch",
      borderRadius: mvw(8),
    },
  },
});

// 오른쪽 아래 (Frame 219 - 790x455)
export const galleryRightBottom = style({
  gridColumn: "2",
  gridRow: "1",
  height: vw(455),
  alignSelf: "end",
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  // ":hover": {
  //   transform: "translateY(-8px)",
  //   boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  // },
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "455px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      gridColumn: "1",
      gridRow: "3",
      height: "auto",
      alignSelf: "stretch",
      borderRadius: mvw(8),
    },
  },
});

// 일반 그리드 아이템 (Frame 220)
export const galleryGridItem = style({
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  // ":hover": {
  //   transform: "translateY(-8px)",
  //   boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  // },
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      borderRadius: mvw(8),
    },
  },
});

// Frame 223 왼쪽 컬럼 컨테이너
export const galleryLeftColumn = style({
  gridColumn: "1",
  gridRow: "1",
  display: "flex",
  flexDirection: "column",
  gap: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
    },
    [breakpoints.mobile]: {
      gridColumn: "1",
      gridRow: "1 / 3",
      gap: "15px",
    },
  },
});

// Frame 223 오른쪽 컬럼 컨테이너
export const galleryRightColumn = style({
  gridColumn: "2",
  gridRow: "1",
  display: "flex",
  flexDirection: "column",
  gap: vw(20),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
    },
    [breakpoints.mobile]: {
      gridColumn: "1",
      gridRow: "3 / 5",
      gap: "15px",
    },
  },
});

// Frame 223 - 작은 이미지 (790x455)
export const gallerySmallImage = style({
  height: vw(455),
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  // ":hover": {
  //   transform: "translateY(-8px)",
  //   boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  // },
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "455px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      height: mvw(180),
      borderRadius: mvw(8),
    },
  },
});

// Frame 223 - 큰 이미지 (790x925)
export const galleryLargeImage = style({
  height: vw(925),
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  // ":hover": {
  //   transform: "translateY(-8px)",
  //   boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  // },
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "925px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      height: mvw(180),
      borderRadius: mvw(8),
    },
  },
});

// 갤러리 이미지 공통 스타일
export const galleryImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  transition: "transform 0.3s ease",
  // ":hover": {
  //   transform: "scale(1.05)",
  // },
});

export const galleryPlaceholder = style({
  width: "100%",
  height: vw(400),
  backgroundColor: "#E5E7EB",
  borderRadius: vw(16),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9CA3AF",
  fontSize: vw(18),
  fontWeight: 500,
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "400px",
      borderRadius: "16px",
      fontSize: "18px",
    },
    [breakpoints.mobile]: {
      height: "250px",
    },
  },
});
