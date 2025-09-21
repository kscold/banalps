import { style } from "@vanilla-extract/css";
import {
  breakpoints,
  responsiveContainer,
} from "@/shared/styles/responsive.css";
import { vw, mvw } from "@/shared/styles/responsive.utils";

// Section 2: 흉터 줄이는 과정 섹션 (진단부터 봉합까지) - ScarReductionPage.css에서 복사
export const scarProcessSection = style({
  padding: `${vw(120)} 0`,
  backgroundColor: "#FFFFFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: `${mvw(80)} 0`,
    },
  },
});

export const scarProcessContent = style({
  ...responsiveContainer(1600),
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vw(120),
  paddingLeft: vw(135),
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1600px",
      gap: "120px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      padding: `0 ${mvw(20)}`,
      gap: mvw(80),
    },
  },
});

// 모든 step - 이미지가 왼쪽, 콘텐츠가 오른쪽
export const processStepOdd = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vw(380),
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "380px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: mvw(24),
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
      gap: mvw(40),
    },
  },
});

export const stepNumber = style({
  flex: "0 0 auto",
  width: vw(292),
  height: vw(418),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "292px",
      height: "418px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

// 숫자 텍스트를 이미지 박스 위에 배치
export const stepNumberText = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "400",
  fontSize: vw(80),
  lineHeight: 1,
  color: "#272727",
  marginBottom: vw(90), // 100px 간격으로 변경
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "80px",
      marginBottom: "90px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(48),
      marginBottom: 0,
      fontWeight: "600",
    },
  },
});

// 모바일에서 숫자와 카테고리를 감싸는 컨테이너
export const stepHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // marginBottom: vw(90),
  "@media": {
    [breakpoints.desktopLarge]: {
      // marginBottom: "90px",
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(20),
      width: "100%",
    },
  },
});

// 이미지 스타일
export const stepImage = style({
  width: "100%",
  height: "auto",
  maxWidth: vw(292),
  maxHeight: vw(248), // 418 - 80(숫자) - 90(마진)
  objectFit: "cover",
  borderRadius: vw(8),
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "292px",
      maxHeight: "248px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      maxWidth: "none",
      height: mvw(208),
      maxHeight: "none",
      borderRadius: mvw(8),
    },
  },
});

export const stepContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // 수직 중앙 정렬
  gap: vw(32),
  width: vw(655),
  height: vw(406),
  minHeight: vw(288), // 이미지 높이와 비슷하게 최소 높이 설정
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "32px",
      minHeight: "288px",
    },
    [breakpoints.mobile]: {
      gap: mvw(16),
      minHeight: "auto",
      width: "100%",
      position: "relative",
    },
  },
});

// 피그마 디자인에 맞는 민트색 카테고리 텍스트
export const stepCategory = style({
  fontWeight: "500",
  fontSize: vw(32),
  color: "#14AEFF", // 바날 민트색
  marginBottom: vw(16),
  textAlign: "left",
  lineHeight: "150%",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "32px",
      marginBottom: "16px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(24),
      marginBottom: 0,
      lineHeight: mvw(48),
      fontWeight: "500",
    },
  },
});

export const stepTitle = style({
  fontWeight: "500",
  fontSize: vw(40),
  lineHeight: vw(52),
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "40px",
      lineHeight: "52px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(24),
      lineHeight: mvw(32),
    },
  },
});

export const stepDescription = style({
  fontWeight: "400",
  fontSize: vw(20),
  lineHeight: vw(32),
  color: "#5A5A5A",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "32px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: mvw(24),
    },
  },
});
