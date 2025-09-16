import { style } from "@vanilla-extract/css"
import {
  breakpoints,
  vw,
  mvw,
  responsiveFont,
  responsiveContainer,
} from "../../shared/styles/responsive.css"

// 메인 페이지 컨테이너
export const doctorIntroductionPage = style({
  width: "100%",
  maxWidth: "100vw",
  overflowX: "hidden",
  backgroundColor: "#FFFDF7",
  minHeight: "100vh",
  paddingTop: "20px",
  paddingBottom: "40px",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "40px",
      paddingBottom: "60px",
    },
  },
})

// 타이틀 섹션 - 데스크톱에서만 표시
export const titleSection = style({
  width: "100%",
  margin: "0 auto",
  marginBottom: "40px",
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1600px",
      padding: "0 160px",
      marginBottom: "60px",
    },

    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김
    },
  },
})

export const mainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  letterSpacing: "0",
  color: "#FFFFFF", // 흰색으로 변경
  margin: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "48px",
      lineHeight: "56px",
      color: "#272727", // 데스크톱에서는 검은색
    },
    [breakpoints.mobile]: {
      fontSize: mvw(36),
      lineHeight: mvw(43),
      whiteSpace: "pre-line",
    },
  },
})

// 의료진 섹션
export const doctorsSection = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "0",
    },
    [breakpoints.mobile]: {
      gap: "0",
    },
  },
})

// 모바일 타이틀 섹션
export const mobileTitle = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      padding: `${mvw(40)} ${mvw(16)} ${mvw(20)} ${mvw(16)}`,
      position: "relative",
      zIndex: 20,
    },
  },
})

export const mobileTitleText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: mvw(36),
  lineHeight: mvw(43),
  color: "#FFFFFF",
  margin: "0",
  "@media": {
    [breakpoints.mobile]: {
      whiteSpace: "pre-line",
    },
  },
})

// 개별 의료진 카드 - 파란색 배경
export const doctorCard = style({
  width: "100%",
  backgroundColor: "#73D5FA", // 파란색 배경 유지
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  position: "relative",
  "@media": {
    [breakpoints.mobile]: {
      minHeight: mvw(200), // 모바일에서 카드 높이
      "::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: "rgba(255, 255, 255, 0.4)", // 흰색 구분선
        zIndex: 2,
      },
    },
  },
  selectors: {
    "&:nth-child(1)": {
      "@media": {
        [breakpoints.mobile]: {
          zIndex: 1,
          marginBottom: mvw(-50), // 첫 번째 카드는 아래로 겹침
        },
      },
    },
    "&:nth-child(2)": {
      "@media": {
        [breakpoints.mobile]: {
          zIndex: 2,
          marginBottom: mvw(-50), // 두 번째 카드도 아래로 겹침
        },
      },
    },
    "&:nth-child(3)": {
      "@media": {
        [breakpoints.mobile]: {
          zIndex: 3,
        },
      },
    },
  },
})

// 의료진 프로필 섹션 - 피그마 디자인 기준 (이미지 왼쪽, 텍스트 오른쪽)
export const doctorProfile = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "400px",
      maxWidth: "1600px",
      margin: "0 auto",
      padding: "60px 160px",
      gap: "60px",
    },

    [breakpoints.mobile]: {
      padding: "0",
      maxWidth: "100%",
      height: mvw(200), // 모바일 카드 높이
      overflow: "visible",
      position: "relative",
      backgroundColor: "#73D5FA",
    },
  },
})

export const doctorImageArea = style({
  position: "relative",
  overflow: "visible",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "400px",
      height: "400px",
      flexShrink: 0,
    },

    [breakpoints.mobile]: {
      position: "absolute",
      bottom: 0,
      left: mvw(16),
      width: mvw(140),
      height: mvw(250), // 카드보다 높게 설정
      zIndex: 10,
    },
  },
})

export const doctorImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  "@media": {
    [breakpoints.mobile]: {
      objectPosition: "center bottom", // 모바일에서 하단 정렬
    },
  },
})

export const doctorInfo = style({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingLeft: "40px",
    },
    [breakpoints.mobile]: {
      position: "absolute",
      right: mvw(16),
      bottom: mvw(20),
      width: "auto",
      alignItems: "flex-end", // 모바일에서 오른쪽 정렬
      paddingLeft: "0",
    },
  },
})

export const doctorNameEn = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: "0",
  whiteSpace: "pre-line",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "80px",
      lineHeight: "72px",
      marginBottom: "20px",
      textAlign: "left",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(40),
      lineHeight: mvw(36),
      marginBottom: mvw(8),
      textAlign: "right", // 모바일에서 오른쪽 정렬
    },
  },
})

export const doctorDetails = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(4),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "4px",
      alignItems: "flex-start",
    },
    [breakpoints.mobile]: {
      gap: mvw(4),
      alignItems: "flex-end", // 모바일에서 오른쪽 정렬
    },
  },
})

export const doctorTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  color: "#272727",
  margin: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "left",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(12),
      lineHeight: mvw(16),
      textAlign: "right", // 모바일에서 오른쪽 정렬
    },
  },
})

export const doctorSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  color: "#272727",
  margin: "0",
  whiteSpace: "pre-line",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "left",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(12),
      lineHeight: mvw(16),
      textAlign: "right", // 모바일에서 오른쪽 정렬
    },
  },
})

export const doctorNameKo = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      lineHeight: "32px",
      textAlign: "left",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(22),
      textAlign: "right", // 모바일에서 오른쪽 정렬
    },
  },
})

// 명언 섹션
export const quoteSection = style({
  width: "100%",
  height: mvw(248),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#000000", // 검은 배경
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "248px",
    },
  },
})

export const quoteContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: vw(20),
  position: "relative",
  zIndex: 1,
  maxWidth: vw(240),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      maxWidth: "240px",
    },
    [breakpoints.mobile]: {
      gap: mvw(20),
      maxWidth: mvw(240),
    },
  },
})

export const quoteIcon = style({
  fontFamily: "serif",
  fontSize: vw(24),
  color: "#FFFFFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(24),
    },
  },
})

export const quoteTexts = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(12),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
    },
    [breakpoints.mobile]: {
      gap: mvw(12),
    },
  },
})

export const quoteText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: vw(24),
  color: "#FFFFFF",
  textAlign: "center",
  margin: "0",
  whiteSpace: "pre-line",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(24),
    },
  },
})

// 경력 섹션
export const credentialsSection = style({
  width: "100%",
  backgroundColor: "#FFFFFF", // 흰색 배경 추가
  paddingTop: mvw(40),
  paddingBottom: mvw(40),
  paddingLeft: "16px",
  paddingRight: "16px",
  display: "flex",
  flexDirection: "column",
  gap: mvw(12),
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "40px",
      paddingBottom: "40px",
      paddingLeft: "160px",
      paddingRight: "160px",
      gap: "12px",
      maxWidth: "1600px",
      margin: "0 auto",
    },
  },
})

export const credential = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: vw(24),
  color: "#272727",
  margin: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(24),
    },
  },
})

// 학술활동 섹션
export const academicSection = style({
  ...responsiveContainer(1600),
  marginTop: vw(80),
  marginBottom: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "80px",
      marginBottom: "60px",
    },
    [breakpoints.mobile]: {
      marginTop: mvw(80),
      marginBottom: mvw(60),
    },
  },
})

export const academicTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(36),
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  marginBottom: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "60px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(36),
      lineHeight: mvw(43),
      marginBottom: mvw(60),
    },
  },
})

export const academicTimeline = style({
  // 추후 구현
})

// 논문 발표 섹션
export const publicationSection = style({
  ...responsiveContainer(1600),
  marginBottom: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "80px",
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(80),
    },
  },
})

export const publicationTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: vw(27),
  color: "#272727",
  margin: "0",
  marginBottom: vw(24),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      lineHeight: "27px",
      marginBottom: "24px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      lineHeight: mvw(27),
      marginBottom: mvw(24),
    },
  },
})

export const publicationList = style({
  display: "flex",
  flexDirection: "column",
  border: `${vw(1)} solid #707070`,
  "@media": {
    [breakpoints.desktopLarge]: {
      border: "1px solid #707070",
    },
    [breakpoints.mobile]: {
      border: `${mvw(1)} solid #707070`,
    },
  },
})

export const publicationCard = style({
  display: "flex",
  borderBottom: `${vw(1)} solid #707070`,
  minHeight: vw(192),
  ":last-child": {
    borderBottom: "none",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      borderBottom: "1px solid #707070",
      minHeight: "192px",
    },
    [breakpoints.mobile]: {
      borderBottom: `${mvw(1)} solid #707070`,
      minHeight: mvw(192),
    },
  },
})

export const publicationLeft = style({
  width: vw(106),
  padding: vw(16),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vw(16),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "106px",
      padding: "16px",
      gap: "16px",
    },
    [breakpoints.mobile]: {
      width: mvw(106),
      padding: mvw(16),
      gap: mvw(16),
    },
  },
})

export const publicationBadge = style({
  width: vw(70),
  height: vw(70),
  borderRadius: "50%",
  border: `${vw(2)} solid #14AEFF`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "70px",
      height: "70px",
      border: "2px solid #14AEFF",
    },
    [breakpoints.mobile]: {
      width: mvw(70),
      height: mvw(70),
      border: `${mvw(2)} solid #14AEFF`,
    },
  },
})

export const publicationBadgeText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: vw(27),
  color: "#14AEFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      lineHeight: "27px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      lineHeight: mvw(27),
    },
  },
})

export const publicationDate = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(14),
  lineHeight: vw(18),
  color: "#272727",
  textAlign: "center",
  margin: "0",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "14px",
      lineHeight: "18px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: mvw(18),
    },
  },
})

export const publicationRight = style({
  flex: "1",
  padding: vw(16),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: vw(16),
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "16px",
      gap: "16px",
    },
    [breakpoints.mobile]: {
      padding: mvw(16),
      gap: mvw(16),
    },
  },
})

export const publicationConference = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(16),
  lineHeight: vw(22),
  color: "#272727",
  margin: "0",
  whiteSpace: "pre-line",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(22),
    },
  },
})

export const publicationTitleText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: vw(24),
  color: "#272727",
  margin: "0",
  whiteSpace: "pre-line",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(24),
    },
  },
})
