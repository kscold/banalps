import { style } from "@vanilla-extract/css";
import {
  breakpoints,
  vw,
  responsiveFont,
  responsiveContainer,
  responsiveSplitContainer,
  responsiveLeftContent,
  responsiveAbsoluteImageContainer,
  responsiveAbsoluteImage,
  responsiveRightContent,
} from "../../../shared/styles/responsive.css";

// Section 1: 피그마 디자인에 맞는 레이아웃
export const scarSection1 = style({
  padding: `${vw(120)} 0`,
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
});

export const scarSection1Content = style({
  ...responsiveSplitContainer(), // 1920px 기준 좌우 분할 레이아웃 (전체 너비 사용)
});

export const scarSection1Left = style({
  ...responsiveLeftContent(), // 헤더와 완벽한 정렬
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  paddingLeft: "0",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작 (피그마 레이아웃에 맞게)
  // paddingTop: vw(80), // 제목이 오른쪽 이미지와 수평 맞춤을 위해 상단 패딩 추가
  "@media": {
    [breakpoints.desktopLarge]: {
      // paddingTop: "80px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      padding: "0 20px",
    },
  },
});

export const scarSection1Number = style({
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  ...responsiveFont(200),
  lineHeight: vw(240),
  color: "#272727",
  marginBottom: vw(-40),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "240px",
      marginBottom: "-40px",
    },
    [breakpoints.mobile]: {
      fontSize: "120px",
      lineHeight: "144px",
      marginBottom: "-24px",
    },
  },
});

export const scarSection1Text = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(32),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "32px",
    },
    [breakpoints.mobile]: {
      gap: "24px",
    },
  },
});

export const scarSection1Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40),
  lineHeight: vw(56),
  color: "#272727",
  marginBottom: vw(32),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
      marginBottom: "32px",
    },
    [breakpoints.mobile]: {
      marginBottom: "24px",
    },
  },
});

export const scarSection1Description = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20),
  lineHeight: vw(30),
  color: "#272727",
  maxWidth: vw(400),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
      maxWidth: "400px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
    },
  },
});

export const scarSection1Right = style({
  ...responsiveAbsoluteImageContainer(810), // 810px 높이로 설정
  position: "relative",
  width: "100%",
  maxWidth: "100%", // 1920px+ 에서도 스케일링 방지
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
    },
  },
});

export const scarSection1Image = style({
  position: "absolute",
  right: "0",
  top: vw(80), // 제목과 수평 맞춤
  width: vw(950), // 1920px 기준 950px 고정 너비
  height: vw(660), // 1920px 기준 660px 고정 높이
  borderRadius: vw(24),
  objectFit: "cover",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "950px", // 1920px+ 고정 크기
      height: "660px",
      top: "80px",
      borderRadius: "24px",
    },
    [breakpoints.mobile]: {
      borderRadius: "16px",
      position: "relative",
      width: "100%",
      height: "300px",
      top: "auto",
      right: "auto",
    },
  },
});

// Section 2: 흉터 줄이는 과정 섹션 (진단부터 봉합까지)
export const scarProcessSection = style({
  padding: `${vw(120)} 0`,
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
});

export const scarProcessContent = style({
  ...responsiveContainer(1600),
  display: "flex",
  flexDirection: "column",
  gap: vw(120),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "120px",
    },
    [breakpoints.mobile]: {
      gap: "80px",
    },
  },
});

export const processStep = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vw(140),
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "140px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "40px",
    },
  },
});

// 홀수 step (1, 3, 5) - 숫자가 왼쪽, 콘텐츠가 오른쪽
export const processStepOdd = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vw(140),
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "140px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "40px",
    },
  },
});

// 짝수 step (2, 4, 6) - 콘텐츠가 왼쪽, 숫자가 오른쪽
export const processStepEven = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vw(140),
  position: "relative",
  flexDirection: "row-reverse", // 순서 뒤바꿈
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "140px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "40px",
    },
  },
});

export const stepNumber = style({
  flex: "0 0 auto",
  width: vw(292),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // start 정렬로 변경
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "292px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      alignItems: "flex-start",
    },
  },
});

// 검은색 배경 제거하고 이미지만 사용
export const stepImage = style({
  width: vw(292),
  height: vw(198), // 현재 높이 유지
  objectFit: "cover",
  borderRadius: vw(8),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "292px",
      height: "198px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: "80px",
      height: "120px",
      borderRadius: "4px",
    },
  },
});

// 숫자 오버레이
export const stepNumberOverlay = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  ...responsiveFont(80),
  color: "#FFFFFF",
  zIndex: 2,
  "@media": {
    [breakpoints.mobile]: {
      fontSize: "40px",
    },
  },
});

// 피그마 디자인에 맞는 민트색 카테고리 텍스트
export const stepCategory = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32),
  color: "#14AEFF", // 바날 민트색
  marginBottom: vw(16),
  textAlign: "left", // start 정렬로 변경
  lineHeight: "150%",
  letterSpacing: "0%",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      marginBottom: "12px",
    },
  },
});

// 숫자를 이미지 박스 위에 배치하는 스타일
export const stepNumberText = style({
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  ...responsiveFont(80),
  color: "#272727",
  marginBottom: vw(90), // 100px 간격으로 변경
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      fontSize: "40px",
      marginBottom: "40px", // 모바일에서는 적절한 비율로 조정
    },
  },
});

export const stepContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // 수직 중앙 정렬
  gap: vw(32), // 간격을 늘려서 높이 확보
  minHeight: vw(288), // 이미지 높이와 비슷하게 최소 높이 설정 (198px + 90px gap)
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "32px",
      minHeight: "288px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      gap: "20px",
      minHeight: "200px",
    },
  },
});

export const stepTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40), // 폰트 크기를 조금 줄임
  lineHeight: vw(52), // 라인 높이 조정
  color: "#272727",
  margin: 0, // 마진 제거해서 gap으로만 간격 조정
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "52px",
    },
  },
});

export const stepSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 300,
  ...responsiveFont(24),
  lineHeight: vw(36),
  color: "#272727",
  marginBottom: vw(32),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "36px",
      marginBottom: "32px",
    },
    [breakpoints.mobile]: {
      marginBottom: "20px",
    },
  },
});

export const stepDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20),
  lineHeight: vw(32), // 라인 높이를 조금 늘림
  color: "#272727",
  margin: 0, // 마진 제거해서 gap으로만 간격 조정
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "32px",
    },
  },
});

// Section 3 스타일들
export const scarSection3 = style({
  padding: `${vw(120)} 0`,
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
});

export const scarSection3Content = style({
  ...responsiveSplitContainer(), // 1920px 기준 좌우 분할 레이아웃
});

export const scarSection3Left = style({
  ...responsiveRightContent(), // 헤더와 완벽한 정렬
  position: "relative",
  width: "100%",
  height: vw(740), // 이미지 높이 + 패딩 (660px + 80px)
  display: "flex",
  paddingLeft: "0",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작
  paddingTop: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "740px", // 1920px+ 고정
      paddingTop: "80px",
    },
    [breakpoints.mobile]: {
      padding: "0 20px",
      height: "400px", // 모바일에서 적절한 높이
    },
  },
});

export const scarSection3Right = style({
  ...responsiveLeftContent(), // 헤더와 완벽한 정렬
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  paddingLeft: "0",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작
  paddingTop: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "80px",
    },
    [breakpoints.mobile]: {
      padding: "0 20px",
      justifyContent: "flex-start",
    },
  },
});

export const scarSection3Image = style({
  position: "absolute",
  borderRadius: vw(24),
  objectFit: "cover",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      borderRadius: "16px",
      position: "relative",
      width: "100%",
      height: "300px",
      top: "auto",
      left: "auto", // right에서 left로 변경
    },
  },
});

export const scarSection3Text = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 위에서부터 시작
  gap: vw(40), // 간격을 늘려서 높이 확보
  minHeight: vw(580), // 이미지 높이(660px)와 비슷하게 최소 높이 설정
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
      minHeight: "580px", // 1920px+ 고정
    },
    [breakpoints.mobile]: {
      gap: "24px",
      minHeight: "280px",
      justifyContent: "flex-start",
    },
  },
});

export const scarSection3NumberBg = style({
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  ...responsiveFont(200),
  lineHeight: vw(240),
  color: "#272727",
  marginBottom: vw(-40),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "240px",
      marginBottom: "-40px",
    },
    [breakpoints.mobile]: {
      fontSize: "120px",
      lineHeight: "144px",
      marginBottom: "-24px",
    },
  },
});

export const scarSection3Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40),
  lineHeight: vw(56),
  color: "#272727",
  marginBottom: vw(32),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
      marginBottom: "32px",
    },
    [breakpoints.mobile]: {
      marginBottom: "24px",
    },
  },
});

export const scarSection3Description = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20),
  lineHeight: vw(30),
  color: "#272727",
  maxWidth: vw(400),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
      maxWidth: "400px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
    },
  },
});

// Section3 이미지 컨테이너 (950x660 고정 크기)
export const scarSection3ImageContainer = style({
  width: vw(950), // 950px 너비
  height: vw(660), // 660px 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "950px",
      height: "660px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "300px",
    },
  },
});

export const scarSection3ImageContent = style({
  width: "100%",
  height: "100%",
  borderRadius: vw(8),
  objectFit: "cover",
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      borderRadius: "4px",
    },
  },
});
