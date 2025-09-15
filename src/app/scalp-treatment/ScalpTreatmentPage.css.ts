import { style } from "@vanilla-extract/css"
import {
  vw,
  responsiveFont,
  responsiveContainer,
  responsiveSplitContainer,
  responsiveLeftContent,
  responsiveRightContent,
  breakpoints,
} from "../../shared/styles/responsive.css"

// Hairline Hero Section
export const HairTransplantHeroSection = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  // Hero 섹션은 전체 1920px 사용
})

export const HairTransplantHeroContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px", // Hero는 1920px 전체 사용
  margin: "0 auto",
  height: "100vh",
  "@media": {
    [breakpoints.mobile]: {
      padding: "0 20px", // 모바일에서 좌우 패딩
    },
  },
})

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
      position: "relative",
      left: "auto",
      right: "auto",
      width: "100%",
      maxWidth: "100%",
      top: "auto",
      transform: "none",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
    },
  },
})

export const heroIllustrationImage = style({
  width: "100%",
  height: "100%", // 컨테이너 높이에 맞춤
  objectFit: "cover", // contain에서 cover로 변경하여 전체 영역을 채움
  objectPosition: "center right", // 이미지를 오른쪽으로 정렬하여 헤더와 맞춤
})

export const HairTransplantHeroTitleWrapper = style({
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
      position: "relative",
      justifyContent: "center",
      paddingRight: "0",
    },
  },
})

export const HairTransplantHeroTitleContainer = style({
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
      position: "relative",
      top: "auto",
      transform: "none",
      textAlign: "center",
      marginRight: "0",
      paddingLeft: "0",
      paddingRight: "0",
      right: "auto",
    },
  },
})

// Hairline Hero Title - Figma 디자인에 맞게 60px
export const HairTransplantHeroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500, // Figma에서 Medium weight
  ...responsiveFont(60), // 1920px 기준 60px 반응형
  letterSpacing: "0", // Figma에서 0
  lineHeight: vw(72), // Figma에서 72px
  color: "#272727",
  margin: "0",
  textAlign: "left",

  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "72px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      lineHeight: "44px",
    },
  },
})

export const HairTransplantHeroTitleDot = style({
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
      width: "12px",
      height: "12px",
      marginLeft: "12px",
    },
  },
})

// 메인 페이지 컨테이너
export const scalpTreatmentPage = style({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
})

// Hero Section
export const heroSection = style({
  width: "100%",
  height: "100vh",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFFFFF",
  "@media": {
    [breakpoints.mobile]: {
      height: "80vh",
    },
  },
})

export const heroContainer = style({
  width: "100%",
  maxWidth: "100%", // 전체 너비 사용
  margin: "0 auto",
  padding: "0 20px", // 좌우 최소 패딩
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "0 160px", // 1920px+ 좌우 160px 패딩
    },
    [breakpoints.mobile]: {
      padding: "0 20px", // 모바일 좌우 20px 패딩
    },
  },
})

export const heroContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vw(60),
  width: "100%",
  height: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "60px",
    },
    [breakpoints.mobile]: {
      gap: "40px",
    },
  },
})

export const heroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60), // 1920px 기준 60px
  lineHeight: vw(72),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "72px",
    },
  },
})

// Hero 섹션 전용 대형 비디오 컨테이너 - 전체 화면 크기
export const videoContainer = style({
  position: "relative",
  width: "100%", // 전체 너비
  maxWidth: "1600px", // 최대 1600px
  height: vw(900), // 1920px 기준 900px 높이
  margin: "0 auto", // 중앙 정렬
  backgroundColor: "#000000",
  borderRadius: vw(20),
  overflow: "hidden",
  boxShadow: `0 ${vw(20)} ${vw(60)} rgba(0, 0, 0, 0.15)`,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1600px", // 1920px+ 고정 1600px
      height: "900px",
      borderRadius: "20px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
    },
    [breakpoints.mobile]: {
      width: "calc(100% - 40px)", // 모바일 좌우 여백
      height: "500px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    },
  },
})

export const videoText = style({
  fontFamily: "'Pretendard', sans-serif",
  fontWeight: 600,
  ...responsiveFont(50),
  color: "#666666",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: "30px",
    },
  },
})

// Vimeo iframe 스타일 - 컨테이너 완전히 채우기
export const vimeoIframe = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  border: "none",
  borderRadius: vw(20), // 컨테이너와 일치하는 borderRadius
  objectFit: "cover", // 비디오가 컨테이너를 완전히 채우도록
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "20px",
    },
    [breakpoints.mobile]: {
      borderRadius: "16px",
    },
  },
})

// Section 1: 소개 섹션
export const introSection = style({
  padding: `${vw(120)} 0`,
  backgroundColor: "#FFFFFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
})

export const introContainer = style({
  ...responsiveSplitContainer(), // 좌우 분할 레이아웃
})

export const introTextContent = style({
  ...responsiveLeftContent(), // 헤더와 완벽한 정렬
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
    },
    [breakpoints.mobile]: {
      gap: "30px",
      marginBottom: "40px",
    },
  },
})

export const introImageContent = style({
  ...responsiveLeftContent(), // 이미지를 오른쪽에 붙이기 위해 leftContent 사용
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end", // 오른쪽 정렬
  paddingLeft: "0", // 왼쪽 패딩 제거
  marginLeft: "0", // 왼쪽 마진 제거
})

// Section 1 전용 이미지 컨테이너 - 975x718 크기
export const introImageContainer = style({
  width: vw(975), // 1920px 기준 975px 너비
  height: vw(718), // 1920px 기준 718px 높이
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: `0 ${vw(8)} ${vw(24)} rgba(0, 0, 0, 0.1)`,
  marginLeft: "auto", // 자동으로 오른쪽에 붙이기
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "975px", // 1920px+ 고정 975px
      height: "718px", // 1920px+ 고정 718px
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
    [breakpoints.mobile]: {
      width: "100%", // 모바일에서 전체 너비
      height: "280px", // 모바일 적절한 높이
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      marginLeft: "0", // 모바일에서 마진 리셋
    },
  },
})

export const introImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
})

// Section 3-6용 작은 비디오 컨테이너
export const smallVideoContainer = style({
  width: "100%",
  maxWidth: vw(500), // 1920px 기준 500px 최대 너비
  height: vw(350), // 1920px 기준 350px 높이
  backgroundColor: "#000000",
  borderRadius: vw(12),
  overflow: "hidden",
  boxShadow: `0 ${vw(8)} ${vw(24)} rgba(0, 0, 0, 0.1)`,
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "500px",
      height: "350px",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
      height: "250px",
      borderRadius: "8px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    },
  },
})

export const smallVideoText = style({
  fontFamily: "'Pretendard', sans-serif",
  fontWeight: 600,
  ...responsiveFont(24), // Hero보다 작은 폰트
  color: "#666666",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: "18px",
    },
  },
})

export const introTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40),
  lineHeight: vw(56),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
    },
  },
})

export const introDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(20),
  lineHeight: vw(35),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "35px",
    },
  },
})

// Section 2: 치료방법 카드들
export const treatmentCardsSection = style({
  padding: `${vw(80)} 0`,
  backgroundColor: "#FFFFFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "80px 0",
    },
    [breakpoints.mobile]: {
      padding: "60px 0",
    },
  },
})

export const treatmentCardsContainer = style({
  ...responsiveContainer(1600),
  display: "grid",
  gridTemplateColumns: `repeat(5, ${vw(250)})`,
  gap: vw(87.5),
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: "repeat(5, 250px)",
      gap: "87.5px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },
  },
})

export const treatmentCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vw(24),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "24px",
    },
    [breakpoints.mobile]: {
      gap: "16px",
    },
  },
})

export const treatmentCardImage = style({
  width: vw(250),
  height: vw(250),
  backgroundColor: "#F5F5F5",
  borderRadius: vw(12),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "250px",
      height: "250px",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      aspectRatio: "1",
      borderRadius: "8px",
    },
  },
})

export const treatmentCardTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24),
  lineHeight: vw(36),
  color: "#272727",
  textAlign: "center",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "36px",
    },
  },
})

// Section 3-6: 치료방법 상세 섹션들
export const treatmentDetailSection = style({
  padding: `${vw(100)} 0`,
  backgroundColor: "#FFFFFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "100px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
})

export const treatmentDetailSectionReverse = style([
  treatmentDetailSection,
  {
    backgroundColor: "#F8F9FA",
  },
])

export const treatmentDetailContainer = style({
  ...responsiveSplitContainer(),
})

export const treatmentVideoContent = style({
  ...responsiveLeftContent(),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const treatmentTextContent = style({
  ...responsiveRightContent(),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
    },
    [breakpoints.mobile]: {
      gap: "30px",
      marginTop: "40px",
    },
  },
})

export const treatmentTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32),
  lineHeight: vw(48),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "48px",
    },
  },
})

export const treatmentSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40),
  lineHeight: vw(56),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
    },
  },
})

export const treatmentDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(24),
  lineHeight: vw(36),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "36px",
    },
  },
})

// Footer Features Section
export const featuresSection = style({
  padding: `${vw(120)} 0`,
  backgroundColor: "#FFFFFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
})

export const featuresContainer = style({
  ...responsiveContainer(1600),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "80px",
    },
    [breakpoints.mobile]: {
      gap: "60px",
    },
  },
})

export const featuresTitle = style({
  textAlign: "center",
})

export const featuresGrid = style({
  display: "grid",
  gridTemplateColumns: `repeat(4, ${vw(400)})`,
  gap: vw(0),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gridTemplateColumns: "repeat(4, 400px)",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gap: "30px",
    },
  },
})

export const featureCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vw(40),
  padding: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
      padding: "40px",
    },
    [breakpoints.mobile]: {
      gap: "30px",
      padding: "20px",
    },
  },
})

export const featureIcon = style({
  width: vw(180),
  height: vw(180),
  backgroundColor: "#F5F5F5",
  borderRadius: "50%",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "180px",
      height: "180px",
    },
    [breakpoints.mobile]: {
      width: "120px",
      height: "120px",
    },
  },
})

export const featureTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(20),
  lineHeight: vw(30),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
    },
  },
})
