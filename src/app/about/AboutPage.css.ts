import { style, keyframes } from "@vanilla-extract/css";
import {
  breakpoints,
  vw,
  responsiveFont,
  responsiveContainer,
  mvw,
} from "../../shared/styles/responsive.css";

// 페이지 전체 스타일
export const aboutPage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
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
  padding: `${vw(240)} 0 ${vw(120)} 0`, // 1920px 기준
  background: "#73D5FA",
  animation: `${fadeInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "240px 0 120px 0", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      padding: "120px 0 60px 0",
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
  gap: vw(60), // 1920px 기준
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "60px",
    },
    [breakpoints.mobile]: {
      gap: "30px",
    },
  },
});

export const heroContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: vw(618), // 피그마 기준 텍스트 영역 너비
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "618px",
    },
  },
});

export const heroQuote = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(36),
  lineHeight: "140%",
  color: "#272727",
  margin: `0 0 ${vw(30)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      margin: "0 0 30px 0",
    },
  },
});

export const heroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  ...responsiveFont(36),
  lineHeight: "140%",
  color: "#272727",
  margin: 0,
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
  },
});

export const illustrationImage = style({
  width: "100%",
  height: "auto",
  maxWidth: vw(1571), // 피그마 기준
  maxHeight: vw(582), // 피그마 기준 높이
  objectFit: "contain",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1571px",
      maxHeight: "582px",
    },
    [breakpoints.mobile]: {
      maxHeight: "300px",
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
      padding: "60px 0",
    },
  },
});

export const valuesContainer = style({
  ...responsiveContainer(1600),
  display: "flex",
  alignItems: "flex-start",
  gap: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "80px",
    },
    [breakpoints.mobile]: {
      gap: "40px",
    },
  },
});

export const valuesContent = style({
  flex: "0 0 385px", // 피그마 기준 너비
});

export const valuesMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: "120%",
  letterSpacing: "-1.8px",
  color: "#272727",
  margin: `0 0 ${vw(32)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      margin: "0 0 32px 0",
    },
  },
});

export const valuesDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(24),
  lineHeight: "150%",
  color: "#6B7280",
  margin: 0,
});

export const valuesCards = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// Values 카드 SVG 이미지 스타일
export const valueCardsImage = style({
  width: "100%",
  maxWidth: vw(957), // 피그마 기준 너비
  height: "auto",
  objectFit: "contain",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "957px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
    },
  },
});

// 페이드인 상승 애니메이션 (RE.YOU 섹션용)
const reYouFadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(80px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

// RE.YOU Section - 깔끔한 레이아웃
export const reYouSection = style({
  width: "100%",
  background: "#73D5FA",
  // padding: `${vw(120)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      // padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "0",
      marginBottom: "0",
    },
  },
});

export const reYouContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "100vw",
  overflowX: "hidden", 
  height: "auto", // 모바일에서 auto로 변경
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "1220px",
    },
    [breakpoints.mobile]: {
      height: "auto",
      padding: "40px 0",
    },
  },
});

// 이미지 카드들 컨테이너 - 전체 너비 사용 (1920px 기준)
export const reYouImageCards = style({
  position: "relative",
  width: "100%",
  maxWidth: "100vw",
  overflowX: "hidden",
  height: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "none",
    },
    [breakpoints.mobile]: {
      position: "static",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "0 20px",
      maxWidth: "100vw",
    },
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
  animation: `${reYouFadeInUp} 500ms ease-out forwards`,
  animationDelay: "0ms",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "560px",
      height: "850px",
      borderRadius: "15px",
    },
    "screen and (max-width: 1023px)": {
      // 375px ~ 1023px 통합
      position: "static",
      width: "100%",
      height: "300px",
      margin: "0 0 20px 0",
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
  animation: `${reYouFadeInUp} 500ms ease-out forwards`,
  animationDelay: "200ms",
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "700px",
      bottom: "180px",
      width: "410px",
      height: "610px",
      borderRadius: "15px",
    },
    "screen and (max-width: 1023px)": {
      // 375px ~ 1023px 통합
      position: "static",
      width: "100%",
      height: "300px",
      margin: "0 0 20px 0",
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
  animation: `${reYouFadeInUp} 500ms ease-out forwards`,
  animationDelay: "400ms",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {},
  },
});

// 네 번째 카드 - 오른쪽 끝 안경 쓴 의사 이미지
export const reYouCard4 = style({
  position: "absolute",
  right: 0, // 완전히 오른쪽 끝에 붙임
  top: vw(200),
  width: vw(600),
  height: vw(900),
  borderRadius: vw(15),
  overflow: "hidden",
  opacity: 0,
  animation: `${reYouFadeInUp} 500ms ease-out forwards`,
  animationDelay: "600ms",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {},
  },
});

// 공통 카드 이미지 스타일
export const reYouCardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 300ms ease",
  ":hover": {
    transform: "scale(1.05)",
  },
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
      position: "static",
      textAlign: "center",
      margin: "0 0 40px 0",
    },
  },
});

export const reYouContent = style({
  position: "relative",
  zIndex: 3,
});

export const reYouTitle = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  ...responsiveFont(70),
  lineHeight: "100%",
  color: "#FFFFFF", // 흰색으로 변경
  margin: `0 0 ${vw(20)} 0`,
  "@media": {
    [breakpoints.desktopLarge]: {
      margin: "0 0 20px 0",
    },
  },
});

export const reYouSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(20),
  lineHeight: "140%",
  color: "#FFFFFF", // 흰색으로 변경
  margin: 0,
});

// 바날이 잘하는 일 섹션 - 피그마 디자인 정확히 매칭
export const strengthsSection = style({
  padding: `${vw(240)} 0`,
  marginTop: `${vw(240)}`,
  backgroundColor: "#FFFFFF", // 화이트 배경으로 변경
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
});

export const strengthsContainer = style({
  ...responsiveContainer(1600),
});

export const strengthsContent = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vw(156), // 간격 줄임
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "60px",
    },
  },
});

// 왼쪽 영역 - 타이틀 + SVG (끝과 끝에 배치)
export const strengthsLeftSection = style({
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between", // 양 끝에 배치
  position: "relative",
  maxWidth: vw(400),
  height: "100%", // 전체 높이 차지
  minHeight: vw(600), // 최소 높이 보장
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      minHeight: "auto",
      justifyContent: "flex-start", // 모바일에서는 기본 배치
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
  margin: 0, // margin 제거로 space-between 효과 극대화
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
    },
    [breakpoints.mobile]: {
      fontSize: "40px",
      marginBottom: "40px", // 모바일에서만 margin 유지
    },
  },
});

export const strengthsGraffiti = style({
  width: vw(320), // 크기 조정
  height: "auto",
  display: "block",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "320px",
    },
    [breakpoints.mobile]: {
      width: "240px",
    },
  },
});

// 오른쪽 영역 - 깔끔한 리스트 (피그마 디자인 정확히 매칭)
export const strengthsList = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0,
  backgroundColor: "transparent", // 배경 투명
});

export const strengthItem = style({
  display: "flex",
  flexDirection: "row", // 가로 배치로 변경
  alignItems: "flex-start",
  gap: vw(32), // 간격 늘림
  padding: `${vw(32)} 0`,
  borderBottom: "2px solid #14AEFF", // 파란색 굵은 선
  ":last-child": {
    borderBottom: "2px solid #14AEFF", // 마지막에도 선 유지
  },
  backgroundColor: "transparent",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "32px",
      padding: "32px 0",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "12px",
      padding: "24px 0",
    },
  },
});

export const strengthNumber = style({
  flex: "0 0 auto",
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  ...responsiveFont(24), // 크기 증가
  color: "#272727", // 검은색으로 변경
  minWidth: vw(60), // 번호 영역 너비
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      minWidth: "60px",
    },
    [breakpoints.mobile]: {
      fontSize: "20px",
      minWidth: "40px",
    },
  },
});

export const strengthItemTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  ...responsiveFont(20),
  lineHeight: "140%",
  color: "#272727", // 검은색으로 변경
  margin: 0,
  flex: "0 0 auto",
  minWidth: vw(280), // 제목 영역 고정 너비
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      minWidth: "280px",
    },
    [breakpoints.mobile]: {
      fontSize: "18px",
      minWidth: "auto",
    },
  },
});

export const strengthDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(16),
  lineHeight: "150%",
  color: "#272727", // 검은색으로 변경
  margin: 0,
  whiteSpace: "pre-line",
  flex: 1, // 나머지 공간 차지
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
    },
    [breakpoints.mobile]: {
      fontSize: "14px",
    },
  },
});

// Gallery Section - 바날 둘러보기 (피그마 디자인)
export const gallerySection = style({
  padding: `${vw(120)} 0`,
  backgroundColor: "#FFFFFF", // 화이트 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
});

export const galleryContainer = style({
  ...responsiveContainer(1600),
  display: "flex",
  flexDirection: "column", // 세로 배치로 변경
  gap: vw(80), // 상단과 하단 사이 간격
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "80px",
    },
    [breakpoints.mobile]: {
      gap: "40px",
    },
  },
});

// 상단 섹션: 타이틀 + 큰 이미지 (피그마 Frame 224, 1600x580)
export const galleryTopSection = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: vw(20), // 790px + 20px + 790px = 1600px
  height: vw(580), // 피그마 정확한 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      height: "580px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      height: "auto",
      gap: "30px",
    },
  },
});

// 갤러리 타이틀 영역 (피그마 정확한 790px)
export const galleryTitleSection = style({
  flex: "0 0 auto",
  width: "100%",
  maxWidth: "100vw",
  height: "auto",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "790px",
      height: "144px",
      maxWidth: "790px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
    },
  },
});

// 메인 이미지 (Frame 15392, 790x580)
export const galleryMainImage = style({
  flex: "0 0 auto",
  width: "100%",
  maxWidth: "100vw",
  height: "auto",
  aspectRatio: "790 / 580",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "790px",
      height: "580px",
      maxWidth: "790px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
      aspectRatio: "790 / 580",
    },
  },
});

export const galleryTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500, // 피그마 Medium (500)
  ...responsiveFont(60), // 피그마 정확한 폰트 크기
  lineHeight: vw(72), // 피그마 정확한 라인 높이 (72px)
  letterSpacing: "0", // 피그마 letterSpacing 0
  color: "#272727", // 피그마 정확한 색상
  textAlign: "left", // LEFT 정렬
  margin: 0,
  width: "100%", // 전체 너비 차지
  height: "100%", // 전체 높이 차지
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 상단 시작
  alignItems: "flex-start", // 왼쪽 시작
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    [breakpoints.mobile]: {
      fontSize: "40px",
      lineHeight: "48px",
      textAlign: "left", // 모바일에서도 왼쪽 정렬 유지
    },
  },
});

// 하단 복합 그리드 - 피그마 Frame 219, 220, 223 정확한 레이아웃
export const galleryGrid = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(20), // 세로 간격
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
    },
    [breakpoints.mobile]: {
      gap: "15px",
    },
  },
});

// Row 1: Frame 219 (1600x925) - 왼쪽 큰 이미지 + 오른쪽 2개 스택
export const galleryRow1 = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto",
  gap: "20px",
  width: "100%",
  maxWidth: "100vw",
  "@media": {
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: "790px 790px",
      gridTemplateRows: "925px",
      gap: "20px",
      height: "925px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "300px 150px 150px",
      height: "auto",
      gap: "15px",
    },
  },
});

// Row 2: Frame 220 (1600x925) - 2개 나란히
export const galleryRow2 = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto",
  gap: "20px",
  width: "100%",
  maxWidth: "100vw",
  "@media": {
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: "790px 790px",
      gridTemplateRows: "925px",
      gap: "20px",
      height: "925px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "300px 300px",
      height: "auto",
      gap: "15px",
    },
  },
});

// Row 3: Frame 223 (1600x1395) - 왼쪽 2개 스택 + 오른쪽 2개 스택
export const galleryRow3 = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto",
  gap: "20px",
  width: "100%",
  maxWidth: "100vw",
  "@media": {
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: "790px 790px",
      gridTemplateRows: "1395px",
      gap: "20px",
      height: "1395px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(4, 200px)",
      height: "auto",
      gap: "15px",
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
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      gridColumn: "1",
      gridRow: "1",
    },
  },
});

// 오른쪽 위 (Frame 219 - 790x455)
export const galleryRightTop = style({
  gridColumn: "2",
  gridRow: "1",
  height: vw(455), // 정확한 높이
  alignSelf: "start",
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  },
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
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  },
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
    },
  },
});

// 일반 그리드 아이템 (Frame 220)
export const galleryGridItem = style({
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "16px",
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
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "455px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      height: "200px",
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
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "925px",
      borderRadius: "16px",
    },
    [breakpoints.mobile]: {
      height: "200px",
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
  ":hover": {
    transform: "scale(1.05)",
  },
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
