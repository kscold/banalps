import { style } from "@vanilla-extract/css";
import {
  responsiveContainer,
  vw,
  mvw,
  responsiveFont,
  responsiveSplitContainer,
  responsiveLeftContent,
  responsiveRightContent,
  responsiveAbsoluteImageContainer,
  responsiveAbsoluteImage,
  breakpoints,
} from "../../shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

// 페이지 전체 스타일
export const HairTransplantPage = style({
  minHeight: "100vh",
  backgroundColor: "#ffffff", // 헤어라인 페이지는 흰색 배경
});

// Hairline Hero Section
export const HairTransplantHeroSection = style({
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

export const HairTransplantHeroContainer = style({
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
  "@media": {
    [breakpoints.desktopLarge]: {
      display: "none",
    },
    [breakpoints.desktop]: {
      display: "none",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "100%",
      marginTop: mvw(80),
    },
  },
});

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
export const HairTransplantHeroTitle = style({
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
      width: mvw(14),
      height: mvw(14),
      marginLeft: mvw(14),
    },
  },
});

// Section 1: 얼굴 윤곽의 완성은 헤어라인입니다
export const HairTransplantSection1 = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),
  backgroundColor: "#ffffff", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "120px", // 1920px+ 고정 (좌우 패딩 제거)
      paddingBottom: "120px",
    },
    [breakpoints.mobile]: {
      padding: `${mvw(100)} 0`, // 좌우 패딩 제거
    },
  },
});

export const section1Content = style({
  "@media": {
    [breakpoints.desktopLarge]: {
      ...responsiveSplitContainer(), // 1920px 기준 좌우 분할 레이아웃 (전체 너비 사용)
    },
    [breakpoints.desktop]: {
      ...responsiveSplitContainer(), // 1920px 기준 좌우 분할 레이아웃 (전체 너비 사용)
    },
    [breakpoints.mobile]: {
      position: "relative",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: `0 ${mvw(20)}`,
    },
  },
});

export const section1Left = style({
  position: "relative",

  width: vw(655),
  height: vw(810),
  display: "flex",

  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작 (피그마 레이아웃에 맞게)
  paddingTop: vw(80), // 제목이 오른쪽 이미지와 수평 맞춤을 위해 상단 패딩 추가
  "@media": {
    [breakpoints.desktopLarge]: {
      ...responsiveLeftContent(), // 헤더와 완벽한 정렬
      paddingTop: "80px", // 1920px+ 고정
      paddingLeft: "0",
    },
    [breakpoints.desktop]: {
      ...responsiveLeftContent(), // 헤더와 완벽한 정렬
      paddingLeft: "0",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "100%",
      position: "static",
      paddingTop: "0",
      padding: "0",
      order: 2,
      alignItems: "center",
      textAlign: "center",
    },
  },
});

export const section1Text = style({
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingLeft: "0",
    },
  },
});

export const section1TitleMobileWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
});

export const section1Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40, 28), // 1920px 기준 40px, 모바일 28px
  lineHeight: vw(56), // 1920px 기준 56px
  letterSpacing: "0",
  margin: `0 0 ${vw(40)} 0`, // 1920px 기준 40px 마진
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
      margin: "0 0 40px 0",
    },
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      width: mvw(166),
      height: mvw(77),
      textAlign: "left",
      fontSize: mvw(20),
      margin: `0 0 ${mvw(30)} 0`,
      lineHeight: "150%",
      letterSpacing: "0%",
    },
  },
});

export const section1Image = style({
  // 피그마 디자인에 맞게 텍스트 아래에 자연스럽게 배치
  width: vw(400), // 너비를 줄여서 적절한 크기로 조정
  height: "auto", // 비율 유지
  marginTop: vw(40), // 제목과의 간격
  marginBottom: vw(40), // 설명과의 간격
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "400px", // 1920px+ 고정
      marginTop: "40px",
      marginBottom: "40px",
    },
    [breakpoints.mobile]: {
      width: mvw(375),
      height: mvw(290),
      margin: `${mvw(30)} 0`,
    },
  },
});

export const section1Illustration = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  "@media": {
    [breakpoints.mobile]: {
      height: "100%",
    },
  },
});

export const section3CenterIllustrationImage = style({
  width: "100%",
  height: "auto",
  objectFit: "contain",
});

export const section1Description = style({
  // 피그마 디자인에 맞게 일러스트 아래에 자연스럽게 배치
  fontFamily: fontFamily.scdream,
  fontWeight: 200,
  ...responsiveFont(20, 16), // 1920px 기준 20px, 모바일 16px
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  maxWidth: vw(500), // 텍스트 최대 너비 설정 (가독성 향상)
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
      maxWidth: "500px",
    },
    [breakpoints.mobile]: {
      fontFamily: fontFamily.scdream,
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
      maxWidth: "100%",
    },
  },
});

export const section1Number = style({
  position: "absolute",
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontStyle: "Regular",
  fontWeight: 400,
  letterSpacing: "0%",
  color: "#272727",
  zIndex: 3,

  "@media": {
    [breakpoints.desktopLarge]: {
      top: "80px",
      left: "700px",
      fontSize: "200px",
      lineHeight: "240px",
    },
    [breakpoints.desktop]: {
      top: vw(80),
      left: vw(700),
      fontSize: vw(200),
      lineHeight: vw(240),
    },
    [breakpoints.mobile]: {
      position: "absolute",
      fontSize: mvw(60),
      width: "auto",
      height: "auto",
      top: mvw(0),
      right: mvw(16),
      lineHeight: mvw(72),
      textAlign: "center",
      zIndex: 1,
    },
  },
});

export const section1Right = style({
  ...responsiveAbsoluteImageContainer(810), // 810px 높이로 설정
  position: "relative",
  width: "100%",
  maxWidth: "100%", // 1920px+ 에서도 스케일링 방지
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "960px",
    },
    [breakpoints.mobile]: {
      order: 1,
      display: "flex",
      flexDirection: "column",
      gap: mvw(20),
      alignItems: "center",
      minHeight: "auto",
      width: "100%",
    },
  },
});

// 피그마 Frame 2463 (600x660) - 대형 이미지 (오른쪽 상단)
export const section1Image1 = style({
  ...responsiveAbsoluteImage({
    position: { right: "0", top: vw(80) }, // 제목과 수평 맞춤
    width: "50%", // 컨테이너 대비 50% 크기
    aspectRatio: "600 / 660", // 피그마 비율 유지
    maxWidth: 600, // 최대 너비 600px
  }),
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "80px", // 1920px+ 고정 - section1Left의 paddingTop과 일치
    },
    [breakpoints.mobile]: {
      position: "static",
      width: "100%",
      height: mvw(305),
      maxWidth: mvw(375),
      top: "auto",
      right: "auto",
      aspectRatio: "auto",
      borderRadius: mvw(12),
      overflow: "hidden",
      marginBottom: mvw(40),
      display: "block",
    },
  },
});

// 피그마 Frame 15407 (350x315) - 소형 이미지 (왼쪽 하단)
export const section1Image2 = style({
  ...responsiveAbsoluteImage({
    position: { left: vw(80), bottom: vw(130) }, // 왼쪽에서 더 안쪽, 하단에서 더 위에 배치
    width: "35%", // 컨테이너 대비 35% 크기로 증가
    aspectRatio: "350 / 315", // 피그마 비율 유지
    maxWidth: 400, // 최대 너비를 400px로 증가
  }),
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "0px", // 1920px+ 고정 (더 안쪽으로)
      bottom: "100px", // 하단에서 더 위로
    },
    [breakpoints.mobile]: {
      position: "static",
      width: "100vw",
      height: mvw(382),
      maxWidth: "100vw",
      marginLeft: mvw(-20),
      marginRight: mvw(-20),
      left: "auto",
      bottom: "auto",
      aspectRatio: "auto",
      borderRadius: mvw(12),
      overflow: "hidden",
      marginTop: mvw(40),
      display: "block",
    },
  },
});

export const section1ImageContent = style({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: mvw(12),
    },
  },
});

// Section 2: 빼곡하고 자연스럽게
export const section2 = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),

  backgroundColor: "#ffffff", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      paddingTop: mvw(100),
      paddingBottom: 0,
      overflow: "hidden",
    },
  },
});

export const section2Content = style({
  ...responsiveSplitContainer(),
  alignItems: "flex-start",
  position: "relative",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      minHeight: mvw(1050),
      gap: 0,
      padding: `0 ${mvw(20)}`,
      alignItems: "flex-start",
      position: "relative",
    },
  },
});

export const section2Left = style({
  ...responsiveAbsoluteImageContainer(810), // section1과 동일한 높이
  position: "relative",
  width: "100%",
  maxWidth: "960px",
  marginLeft: "max(calc((100vw - 1920px) / 2), 0px)", // 1920px 이상에서 중앙 정렬
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "960px",
      marginLeft: "max(calc((100vw - 1920px) / 2), 0px)",
    },
    [breakpoints.mobile]: {
      position: "static",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      alignItems: "flex-start",
      height: "auto",
      width: "100%",
      padding: 0,
      marginLeft: 0,
      maxWidth: "100%",
    },
  },
});

export const section2Image = style({
  position: "absolute",
  left: "0",
  top: 0, // 상단부터 시작
  width: vw(830), // 1920px 기준 830px 너비
  height: vw(600), // 1920px 기준 600px 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "830px", // 1920px+ 고정
      height: "600px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      position: "static",
      width: "100vw",
      height: mvw(305),
      marginLeft: mvw(-20),
      marginRight: mvw(-20),
      borderRadius: mvw(12),
      overflow: "hidden",
      marginBottom: mvw(20),
      display: "block",
    },
  },
});

export const section2ImageContent = style({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: mvw(12),
    },
  },
});

// Section 2 모바일 일러스트레이션
export const section2Illustration = style({
  width: "100%",
  height: "auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      display: "none",
    },
    [breakpoints.desktop]: {
      display: "none",
    },
    [breakpoints.mobile]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: mvw(320),
      marginTop: mvw(60),
      marginBottom: mvw(-100),
    },
  },
});

export const section2IllustrationContent = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const section2Right = style({
  ...responsiveRightContent(), // 헤더와 정확히 정렬되는 오른쪽 콘텐츠
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작
  paddingTop: 0, // 상단 패딩 완전 제거
  paddingBottom: 0, // 하단 패딩도 제거

  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: 0, // 1920px+에서도 상단 패딩 제거
    },
    [breakpoints.mobile]: {
      order: 1,
      position: "static",
      paddingTop: "0",
      width: "100%",
      padding: "0",
      alignItems: "center",
      textAlign: "center",
    },
  },
});

// Section 2 숫자 2 스타일 (피그마 스펙: Nordnet Sans Mono, 200px, #272727)
export const section2NumberBg = style({
  position: "absolute",
  top: vw(0), // section2Right의 paddingTop과 일치 (제목과 같은 높이)
  right: vw(0), // responsiveRightContent() 내에서 오른쪽으로 살짝 나가도록
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  ...responsiveFont(200), // 1920px 기준 200px 반응형 폰트 (피그마 스펙)
  lineHeight: vw(240), // 1920px 기준 240px (피그마 스펙)
  color: "#272727", // 피그마 스펙: 일반 색상, opacity 없음
  zIndex: 3, // 배경 뒤가 아닌 앞으로
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      position: "absolute",
      fontSize: mvw(60),
      width: "auto",
      height: "auto",
      top: mvw(0),
      right: mvw(16),
      lineHeight: mvw(72),
      textAlign: "center",
      zIndex: 1,
    },
  },
});

export const section2Text = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: 0,
  padding: 0,
  gap: 0,
  alignItems: "stretch",
  "@media": {
    [breakpoints.desktopLarge]: {
      // 데스크톱 스타일 유지
    },
    [breakpoints.mobile]: {
      height: "auto",
      justifyContent: "flex-start",
      width: "100%",
      alignItems: "flex-start",
    },
  },
});

export const section2Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40, 28),
  lineHeight: vw(56),
  letterSpacing: "0",
  margin: `0 0 ${vw(40)} 0`,
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
      margin: "0 0 40px 0",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(20),
      lineHeight: "150%",
      margin: `0 0 ${mvw(30)} 0`,
      textAlign: "left",
      width: mvw(140),
    },
  },
});

export const section2AccentDescription = style({
  fontFamily: "'Pretendard', sans-serif", // 피그마 스펙: Pretendard
  fontWeight: 400, // 피그마 스펙: Regular = 400
  ...responsiveFont(20), // 1920px 기준 20px 반응형 (피그마 스펙)
  lineHeight: vw(30), // 1920px 기준 30px (피그마 스펙)
  letterSpacing: "0", // 피그마 스펙: 0
  margin: "0",
  color: "#272727", // 피그마 스펙: #272727
  "@media": {
    [breakpoints.mobile]: {
      lineHeight: "28px",
    },
  },
});

export const section2Description = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 200,
  ...responsiveFont(20, 16),
  lineHeight: vw(30),
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
    },
  },
});

export const section2Quote = style({
  fontFamily: "'Pretendard', sans-serif", // 피그마 스펙: Pretendard (동일)
  fontWeight: 400, // 피그마 스펙: Regular = 400 (동일)
  ...responsiveFont(20), // 1920px 기준 20px 반응형 (피그마 스펙, 동일)
  lineHeight: vw(30), // 1920px 기준 30px (피그마 스펙, 동일)
  letterSpacing: "0", // 피그마 스펙: 0 (동일)
  color: "#272727", // 피그마 스펙: #272727 (동일)
  position: "relative",
  display: "inline",

  // 피그마 디자인에 맞는 더 큰 따옴표
  "::before": {
    content: '"\u201d"', // 시작 따옴표 (유니코드 사용)
    color: "#272727",
    fontSize: vw(28), // 더 큰 따옴표 크기
    fontWeight: 500, // 약간 더 굵게
    lineHeight: vw(30),
  },

  "::after": {
    content: '"\u201d"', // 끝 따옴표 (유니코드 사용)
    color: "#272727",
    fontSize: vw(28), // 더 큰 따옴표 크기
    fontWeight: 500, // 약간 더 굵게
    lineHeight: vw(30),
  },

  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
      "::before": {
        fontSize: "28px",
        lineHeight: "30px",
      },
      "::after": {
        fontSize: "28px",
        lineHeight: "30px",
      },
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      ":before": {
        display: "none",
      },
      ":after": {
        display: "none",
      },
      lineHeight: "28px",
    },
  },
});

// Section 3: 결국, 고객이 원하는 디자인이 좋은 디자인입니다
export const section3 = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),
  paddingLeft: vw(20), // 1920px 기준 20px 좌우 패딩
  paddingRight: vw(20),
  backgroundColor: "#ffffff", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 20px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      position: "relative",
      paddingTop: mvw(100),
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      overflow: "hidden",
    },
  },
});

export const section3Content = style({
  ...responsiveSplitContainer(), // section1/section2와 동일한 좌우 분할 컨테이너
  position: "relative", // 중앙 SVG를 절대 위치로 배치하기 위해
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "100%",
      maxWidth: "1920px",
      margin: "0 auto",
    },
    [breakpoints.mobile]: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: `0 ${mvw(20)}`,
      gap: mvw(20),
      width: "100%",
    },
  },
});

export const section3Left = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템 (헤더와 완벽 정렬)
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작
  paddingTop: vw(10), // 제목을 위쪽에서 시작하도록
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "100%",
      height: "100%",
      position: "static",
      paddingTop: "0",
      padding: "0",
      order: 2,
      alignItems: "center",
      textAlign: "center",
    },
  },
});

// Section 3 숫자 3 스타일 (피그마 스펙: Nordnet Sans Mono, 200px, #272727, 우측 정렬)
export const section3NumberBg = style({
  position: "absolute",
  //   top: vw(45), // section2NumberBg와 동일한 높이
  right: vw(0), // 텍스트 영역 왼쪽으로 살짝 나가도록 (section2와 대칭)
  fontFamily: "'Nordnet Sans Mono', monospace", // Nordnet Sans Mono 글꼴 적용
  fontWeight: 400,
  ...responsiveFont(200), // 1920px 기준 200px 반응형 폰트 (피그마 스펙)
  lineHeight: vw(240), // 1920px 기준 240px (피그마 스펙)
  color: "#272727", // 피그마 스펙: 일반 색상, opacity 없음
  textAlign: "left", // 왼쪽 정렬로 변경 (section2와 대칭)
  zIndex: 3, // 배경 뒤가 아닌 앞으로
  "@media": {
    [breakpoints.desktopLarge]: {
      //   top: "45px",
      //   left: "-50px",
      lineHeight: "240px",
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김
    },
  },
});

export const section3Text = style({
  position: "relative",
  marginBottom: "40px",
  width: vw(790),
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
      marginBottom: 0,
    },
  },
});

// 모바일에서 숫자와 제목을 함께 배치하는 컨테이너
export const section3TitleContainer = style({
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "flex-start",
      gap: mvw(12),
      marginBottom: mvw(30),
    },
  },
});

export const section3Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40, 28), // 1920px 기준 40px, 모바일 28px
  lineHeight: vw(56), // 1920px 기준 56px
  letterSpacing: "0",
  margin: `0 0 ${vw(120)} 0`, // 1920px 기준 40px 마진
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
    },
    [breakpoints.mobile]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      width: mvw(204),
      height: mvw(106),
      textAlign: "left",
      fontSize: mvw(20),
      margin: `0 0 ${mvw(30)} 0`,
      lineHeight: "150%",
      letterSpacing: "0%",
    },
  },
});

export const section3Description = style({
  fontFamily: "'S-Core Dream', sans-serif", // 피그마 스펙: S-Core Dream
  fontWeight: 200, // 피그마 스펙: 4 Regular = 200
  ...responsiveFont(20, 16), // 1920px 기준 20px, 모바일 16px
  lineHeight: vw(30), // 1920px 기준 30px (피그마 스펙)
  letterSpacing: "0", // 피그마 스펙: 0
  margin: "0",
  color: "#272727", // 피그마 스펙: #272727
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(28),
      textAlign: "left",
    },
  },
});

export const section3Number = style({
  zIndex: 3, // 앞에 표시

  fontFamily: "'Nordnet Sans Mono', monospace", // 피그마 스펙
  position: "absolute",
  top: vw(125), // section3Left의 paddingTop과 맞춤
  fontWeight: 400, // 피그마 스펙: Regular
  ...responsiveFont(200), // 1920px 기준 200px 반응형 폰트 (피그마 스펙)
  lineHeight: vw(240), // 1920px 기준 240px (피그마 스펙)
  color: "#272727", // 피그마 스펙: #272727
  textAlign: "right", // 피그마 스펙: 우측 정렬
  width: vw(118), // 피그마 너비
  "@media": {
    [breakpoints.desktopLarge]: {
      left: vw(750), // 피그마 x: 537 기준 위치
    },
    [breakpoints.desktop]: {
      left: vw(750), // 피그마 x: 537 기준 위치
    },
    [breakpoints.mobile]: {
      position: "absolute",
      fontSize: mvw(60),
      width: mvw(36),
      height: mvw(72),
      top: mvw(0),

      right: mvw(20),
      lineHeight: mvw(72),
      textAlign: "center",
      zIndex: 1,
    },
  },
});

export const section3Right = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템 (헤더와 완벽 정렬)
  position: "relative",
  display: "flex",
  justifyContent: "flex-end", // 오른쪽 정렬
  alignItems: "center",
  minHeight: vw(810), // section1/section2와 동일한 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      minHeight: "810px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      order: 1,
      display: "flex",
      flexDirection: "column",
      gap: mvw(20),
      alignItems: "center",
      minHeight: "auto",
      width: "100%",
    },
  },
});

// Section 3 중앙 일러스트 스타일 (피그마 위치: x:425, y:400 기준으로 배치)
export const section3CenterIllustration = style({
  position: "absolute",
  top: vw(450), // 피그마 y: 400 기준
  left: vw(850),
  transform: "translateX(-50%)", // 좌우만 중앙 정렬, 세로는 고정
  width: vw(449), // 피그마 일러스트 너비 (Frame 401)
  height: vw(286), // 피그마 일러스트 높이 (Frame 401)
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2, // 좌우 컨텐츠 위에 배치
  "@media": {
    [breakpoints.desktopLarge]: {
      // top: "400px", // 1920px+ 고정
      // width: "449px", // 1920px+ 고정
      // height: "286px",
    },
    [breakpoints.mobile]: {
      position: "static",
      transform: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: mvw(320),
      marginTop: mvw(60),
      marginBottom: mvw(-100),
    },
  },
});

export const section3Image = style({
  transform: "translateY(-50%)", // 수직 중앙 정렬
  "@media": {
    [breakpoints.desktopLarge]: {
      ...responsiveAbsoluteImage({
        position: { right: "0", top: "50%" },
        width: "80%", // 컨테이너 대비 80% 크기
        aspectRatio: "610 / 550", // 피그마 비율 (Frame 15409)
        maxWidth: 610, // 최대 너비 610px
      }),
    },
    [breakpoints.desktop]: {
      ...responsiveAbsoluteImage({
        position: { right: "0", top: "50%" },
        width: "80%", // 컨테이너 대비 80% 크기
        aspectRatio: "610 / 550", // 피그마 비율 (Frame 15409)
        maxWidth: 610, // 최대 너비 610px
      }),
    },
    [breakpoints.mobile]: {
      position: "static",
      width: "100%",
      height: mvw(305),
      maxWidth: mvw(375),
      top: "auto",
      right: "auto",
      aspectRatio: "auto",
      borderRadius: mvw(12),
      overflow: "hidden",
      marginBottom: mvw(40),
      display: "block",
      transform: "none",
    },
  },
});

export const section3ImageContent = style({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: 0,
    },
  },
});

// Before & After Section
export const beforeAfterSection = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),
  paddingLeft: vw(20), // 1920px 기준 20px 좌우 패딩
  paddingRight: vw(20),
  backgroundColor: "#ffffff", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 20px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      padding: `${mvw(100)} ${mvw(20)}`,
    },
  },
});

export const beforeAfterContent = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템
  textAlign: "center",
});

export const beforeAfterHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // 피그마: 좌우 분리 배치
  width: "100%",
  maxWidth: vw(790), // 슬라이더와 동일한 너비
  margin: "0 auto",
  marginBottom: vw(48), // 피그마 정확한 간격
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "790px",
      marginBottom: "48px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      marginBottom: mvw(48),
      gap: "15px",
      alignItems: "center",
      textAlign: "center",
      margin: "0 auto",
    },
  },
});

export const beforeAfterCategory = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vw(8)} ${vw(35)}`,
  backgroundColor: "#14AEFF", // 피그마 Badge 배경색
  borderRadius: "999px", // 완전 둥근 모서리
  fontFamily: "'S-Core Dream', sans-serif", // 피그마 스펙
  fontWeight: 500,
  ...responsiveFont(24), // 피그마 정확한 크기
  lineHeight: vw(36),
  letterSpacing: "0",
  color: "#FFFFFF", // 흰색 텍스트
  margin: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "8px 35px",
      lineHeight: "36px",
    },
    [breakpoints.mobile]: {
      width: mvw(170),
      height: mvw(42),
      fontSize: mvw(18),
      lineHeight: mvw(28),
    },
  },
});

export const beforeAfterTitle = style({
  fontFamily: "'S-Core Dream', sans-serif", // 피그마 스펙
  fontWeight: 500,
  ...responsiveFont(24), // 피그마 정확한 크기
  lineHeight: vw(36),
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  whiteSpace: "nowrap",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "36px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      lineHeight: mvw(28),
      whiteSpace: "nowrap",
    },
  },
});

export const beforeAfterSliderWrapper = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "40px",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
});

export const beforeAfterSlider = style({
  maxWidth: vw(790), // 피그마 Frame 362 너비
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "790px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
    },
  },
});

export const beforeAfterActions = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
      padding: `0 ${mvw(20)}`,
    },
  },
});

// Features Section
export const featuresSection = style({
  paddingTop: vw(120), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(120),
  backgroundColor: "#ffffff", // 흰색 배경
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      height: mvw(1752),
      padding: `0 ${mvw(20)} ${mvw(120)} ${mvw(20)}`, // 하단 여백 늘리기
    },
  },
});

export const featuresContent = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템
});

export const featuresHeader = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: vw(100), // 피그마 정확한 간격
  minHeight: vw(160), // 따옴표 간격을 위해 높이 증가
  "@media": {
    [breakpoints.desktopLarge]: {
      minHeight: "160px",
    },
    [breakpoints.mobile]: {
      minHeight: mvw(204),
      marginBottom: mvw(60),
    },
  },
});

export const featuresIcon = style({
  color: "#2d74ff",
});

export const featuresMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32, 24), // 피그마 정확한 크기, 모바일 24px
  lineHeight: vw(48), // 1.5 line height
  color: "#272727",
  margin: "0",
  textAlign: "center",
  position: "relative",
  zIndex: 2, // 따옴표 위에 표시
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "48px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(24),
      lineHeight: mvw(36),
    },
  },
});

// SVG 따옴표 스타일 - 세로 배치 (상단 중앙)
export const quotationStart = style({
  position: "absolute",
  top: vw(-35), // 제목에서 더 멀리 띄워서 배치
  left: "50%", // 수평 중앙 정렬
  transform: "translateX(-50%)", // 완전한 중앙 정렬
  width: vw(40), // 피그마 디자인에 맞는 크기
  height: vw(40),
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "40px",
      height: "40px",
      top: "-35px",
    },
    [breakpoints.mobile]: {
      width: "28px",
      height: "28px",
      top: "-24px",
    },
  },
});

// SVG 따옴표 스타일 - 세로 배치 (하단 중앙)
export const quotationEnd = style({
  position: "absolute",
  bottom: vw(-35), // 제목에서 더 멀리 띄워서 배치
  left: "50%", // 수평 중앙 정렬
  transform: "translateX(-50%)", // 완전한 중앙 정렬
  width: vw(40), // 피그마 디자인에 맞는 크기
  height: vw(40),
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "40px",
      height: "40px",
      bottom: "-35px",
    },
    [breakpoints.mobile]: {
      width: "28px",
      height: "28px",
      bottom: "-24px",
    },
  },
});

export const featuresGrid = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: vw(1600), // 피그마 Frame 346 너비와 일치
  margin: "0 auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1600px",
    },
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: mvw(20),
      alignItems: "center",
      padding: 0,
    },
  },
});

export const featureCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  textAlign: "center",
  width: vw(400), // 피그마 정확한 크기
  height: vw(400), // 피그마 정확한 크기
  backgroundColor: "#D5FEFF", // 피그마 정확한 배경색
  borderRadius: "50%", // 완전한 원형
  position: "relative",
  padding: vw(40), // 내부 패딩
  paddingBottom: vw(80), // 하단 텍스트용 패딩 증가
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(213, 254, 255, 0.6)",
  },

  "@media": {
    [breakpoints.desktopLarge]: {
      width: "400px",
      height: "400px",
      padding: "40px",
      paddingBottom: "80px",
    },
    [breakpoints.mobile]: {
      width: mvw(343),
      height: mvw(343),
      aspectRatio: "1/1",
      borderRadius: "50%",
      padding: mvw(18),
      paddingBottom: mvw(64),
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      ":hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 10px 20px rgba(213, 254, 255, 0.6)",
      },
    },
  },
});

export const featureIconContainer = style({
  position: "absolute",
  top: "35%", // 원의 중앙 상단 부분에 위치 (피그마 디자인 기준)
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: vw(220), // SVG 아이콘 컨테이너 크기 증대
  height: vw(175),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "220px",
      height: "175px",
    },
    [breakpoints.mobile]: {
      width: mvw(210),
      height: mvw(210),
      top: "45%",
    },
  },
});

export const featureIcon = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#14AEFF", // SVG 아이콘 색상
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(210),
      height: mvw(210),
    },
  },
});

export const featureTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200, // 피그마 스펙: 4 Regular = 200
  ...responsiveFont(20, 12), // 피그마 정확한 크기, 모바일 12px
  lineHeight: vw(30), // 피그마 정확한 라인 높이
  letterSpacing: "0", // 피그마 스펙
  color: "#272727", // 피그마 정확한 색상
  textAlign: "center", // 피그마 스펙: CENTER
  margin: "0",

  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(18),
    },
  },
});

export const featureText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20), // 1920px 기준 20px 반응형
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: "0",
  margin: "0",
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      lineHeight: "28px",
    },
  },
});
