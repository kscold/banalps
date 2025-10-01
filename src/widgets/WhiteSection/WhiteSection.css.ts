import { style } from "@vanilla-extract/css";

import {
  vw,
  mvw,
  responsiveFont,
  responsiveContainer,
  responsiveProperty,
  breakpoints,
} from "../../shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

// 메인 섹션 컨테이너 (1920px 기준) - BlueSection과 동일하게
export const whiteSection = style({
  width: "100%",
  backgroundColor: "#FFFDF7",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  ...responsiveProperty("paddingBottom", 120), // 1920px 기준 120px
  "@media": {
    [breakpoints.mobile]: {
      display: "flex", // 명시적으로 flex 설정
      paddingBottom: mvw(120),
      minHeight: "100vh", // 최소 화면 높이 설정
      backgroundColor: "#FFFDF7", // 배경색 명시적 설정
    },
  },
});

// 상단 히어로 이미지 컨테이너 (1920px 기준)
export const heroImageContainer = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  aspectRatio: "1600 / 540", // 적당한 비율 설정
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
    [breakpoints.mobile]: {
      width: "100vw", // 뷰포트 전체 너비
      maxWidth: "100vw", // 최대 너비 100vw
      padding: 0, // 패딩 제거
      margin: "0", // 마진 초기화
      marginTop: "0", // 상단 마진 제거
      marginBottom: "40px", // 하단 마진만 유지
      marginLeft: "calc(-50vw + 50%)", // 전체 화면 너비로 확장
      marginRight: "calc(-50vw + 50%)", // 전체 화면 너비로 확장
      borderRadius: 0, // 보더 라디우스 제거
      aspectRatio: "375 / 600", // 모바일 비율
      height: mvw(686), // 명시적 높이 설정
    },
  },
});

// 히어로 이미지 (1920px 기준)
export const heroImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  "@media": {
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 기본 이미지 숨김
    },
  },
});

// 모바일 히어로 이미지
export const heroImageMobile = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
});

// 내부 컨테이너 - BlueSection과 동일하게
export const container = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  "@media": {
    [breakpoints.mobile]: {
      display: "flex", // 명시적으로 flex 설정
      flexDirection: "column",
      width: "100%",
      padding: "0 16px", // 좌우 패딩 설정
    },
  },
});

// 메인 타이틀 (1920px 기준)
export const mainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(60), // 1920px 기준 60px, vw로 스케일링
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  marginBottom: vw(80), // 1920px 기준 80px
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px", // 1920px 이상에서 60px 고정
      marginBottom: "80px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      fontSize: mvw(36), // 모바일에서 더 큰 폰트 사이즈 (BlueSection과 동일)
      lineHeight: "110%",
      marginBottom: mvw(32),
      margin: `${mvw(120)} 0 ${mvw(80)} 0`,
    },
  },
});

// 메인 콘텐츠 영역 - flex로 처리
export const mainContent = style({
  width: "100%", // 컨테이너 전체 너비 사용
  display: "flex",
  gap: vw(12), // 12px gap
  height: vw(628), // 전체 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "628px",
      gap: "12px",
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서는 데스크탑 콘텐츠 숨김 (mobileCardList 사용)
    },
  },
});

// 카드 그리드 (1920px 기준) - 왼쪽 2x2 그리드
export const cardGrid = style({
  flex: "1", // 남은 공간 모두 차지
  display: "flex",
  flexDirection: "column",
  gap: vw(12), // 12px gap
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "12px",
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 카드 그리드 숨김
    },
  },
});

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
});

// 하단 행 (1920px 기준)
export const bottomRow = style({
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
});

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
      display: "none", // 모바일에서 데스크탑 서비스 카드 숨김
    },
  },

  // 각 카드의 flex 크기 지정 - 피그마 디자인에 맞게
  selectors: {
    [`${topRow} &:first-child`]: {
      flex: "0 0 calc(56% - 6px)", // 상단 왼쪽 (큰 카드) - gap의 절반
    },
    [`${topRow} &:last-child`]: {
      flex: "0 0 calc(44% - 6px)", // 상단 오른쪽 (작은 카드) - gap의 절반
    },
    [`${bottomRow} &:first-child`]: {
      flex: "0 0 calc(44% - 6px)", // 하단 왼쪽 (작은 카드) - gap의 절반
    },
    [`${bottomRow} &:last-child`]: {
      flex: "0 0 calc(56% - 6px)", // 하단 오른쪽 (큰 카드) - gap의 절반
    },
  },
});

// 카드 이미지 (1920px 기준)
export const cardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

// 카드 버튼 (1920px 기준)
export const cardButton = style({
  position: "absolute",
  bottom: vw(20), // 1920px 기준 20px
  left: vw(20), // 1920px 기준 20px
  textDecoration: "none",
  display: "inline-block",
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
});

// 넓은 카드용 버튼 (왼쪽 정렬)
export const cardButtonWide = style({
  position: "absolute",
  bottom: vw(20), // 1920px 기준 20px
  left: vw(20), // 왼쪽 정렬
  right: "auto", // 오른쪽 초기화
  textDecoration: "none",
  display: "inline-block",
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "20px",
      left: "20px",
    },
    [breakpoints.mobile]: {
      bottom: "20px",
      left: "20px",
      right: "auto",
    },
  },
});

// 넓은 카드 스타일
export const serviceCardWide = style({
  flex: "1.5", // 더 넓은 너비
});

// Other Medical Service 박스 (1920px 기준) - 5번째 카드
export const otherServiceBox = style({
  position: "relative",
  width: vw(390), // 390px 고정 너비
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
    },
  },
});

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
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.poppins,
    },
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "40px",
      left: "40px",
    },
  },
});

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
      display: "none", // 모바일에서는 숨김 (별도 모바일 버튼 사용)
    },
  },
});

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
});

// 기존 ready 스타일들 정리됨 - We're Ready When You Are 섹션으로 교체

// 위치 섹션 - 1920px 기준 responsiveContainer 적용
export const locationSection = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  ...responsiveProperty("paddingTop", 120), // 1920px 기준 120px
  ...responsiveProperty("paddingBottom", 120),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // 왼쪽 정렬
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
      padding: `0 ${mvw(16)} 0 ${mvw(16)}`, // 상단 40px, 좌우 20px, 하단 120px
    },
  },
});

// 위치 섹션 타이틀 - 1920px 기준
export const locationTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(60), // 1920px 기준 60px, vw로 스케일링
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  textAlign: "left",
  width: "100%",
  marginBottom: vw(80), // 1920px 기준 80px
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px", // 1920px 이상에서 60px 고정
      marginBottom: "80px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      fontSize: mvw(40),
      marginBottom: mvw(80),
    },
  },
});

// Frame 320 - 메인 콘텐츠 영역 (1600x500)
export const locationContent = style({
  width: "100%",
  display: "flex",
  gap: vw(40),
  height: vw(500), // 피그마 디자인 높이 500px
  boxSizing: "border-box", // 패딩 포함한 너비 계산
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "500px",
      gap: "40px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      flexDirection: "column",
      height: "auto",
      gap: mvw(40),
    },
  },
});

// Frame 311 - 왼쪽 이미지+지도 영역 (1121.29 x 500)
export const leftContentArea = style({
  width: vw(1121.29),
  display: "flex",
  ...responsiveProperty("gap", 20.29), // Frame 416과 Mask group 사이 간격
  height: vw(500), // 명시적 높이 설정
  minWidth: 0, // flex shrink를 위해 필요
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "500px", // 명시적 높이로 변경
      gap: "20.29px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      flexDirection: "column",
      height: "auto", // 모바일에서는 자동 높이
      gap: mvw(40),
    },
  },
});

// Frame 416 - 왼쪽 이미지 영역 (385 x 500)
export const locationImageArea = style({
  width: vw(385), // 385 / 1121.29 ≈ 34.3% (비례적 크기)
  height: vw(500), // 500px 높이
  borderRadius: vw(8),
  overflow: "hidden",
  position: "relative",
  flexShrink: 0, // 크기 유지
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "385px", // 고정값
      height: "500px", // 고정값
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: mvw(478),
      // borderRadius: mvw(8),
    },
  },
});

// 왼쪽 이미지
export const locationImage = style({
  width: "100%",
  height: "100%",
  // objectFit: "cover",
  display: "block",
});

// Mask group - 지도 영역 (724.29 x 500)
export const mapArea = style({
  width: vw(724.29),
  height: vw(500), // 명시적 높이 설정
  borderRadius: vw(8),
  overflow: "hidden",
  position: "relative",
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "500px", // 고정 높이
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: "100vw", // 화면 전체 너비
      height: mvw(404), // TreatmentGuidePage와 동일한 높이
      marginLeft: mvw(-20), // 부모 패딩 상쇄
      marginRight: mvw(-20), // 부모 패딩 상쇄
      borderRadius: 0, // 모바일에서는 radius 제거
    },
  },
});

// Frame 318 - 오른쪽 정보 영역 (430.71 x 500)
export const locationInfo = style({
  width: vw(350), // vw 단위로 변경
  height: vw(500), // locationContent와 동일한 500px 높이
  minHeight: vw(500), // 최소 높이 보장
  flexShrink: 0, // 크기 유지
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // infoBox와 MapButtons 사이 간격 최대화

  "@media": {
    [breakpoints.desktopLarge]: {
      width: "350px",
      height: "500px", // 1920px 이상에서 500px 고정
      minHeight: "500px",
    },
    [`screen and (max-width: 1400px)`]: {
      width: "300px", // 중간 크기 화면에서 더 작게
      height: vw(500), // vw로 스케일링 유지
      minHeight: vw(500),
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto", // 모바일에서는 자동 높이
      minHeight: "auto",
      justifyContent: "flex-start", // 모바일에서는 위쪽 정렬
      gap: 0, // gap 제거
    },
  },
});

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
});

export const infoBox = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(0), // TreatmentGuidePage처럼 gap 대신 각 항목의 marginBottom 사용
  width: vw(430),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: 0,
      width: "430px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      marginBottom: 0, // 모바일에서는 마진 제거
      gap: 0, // gap 0으로 설정
    },
  },
});

export const infoItem = style({
  display: "flex",
  gap: vw(20),
  marginBottom: vw(58),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      marginBottom: "58px",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      flexDirection: "row",
      gap: mvw(12),
      marginBottom: mvw(40),
      alignItems: "flex-start",
    },
  },
});

export const infoItemPhone = style({
  display: "flex",
  gap: vw(20),
  marginBottom: vw(58),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "20px",
      marginBottom: "58px",
    },
    [breakpoints.desktop]: {
      gap: vw(20),
      marginBottom: vw(58),
    },
    [breakpoints.mobile]: {
      gap: mvw(12),
      marginBottom: mvw(40),
      alignItems: "flex-start",
    },
  },
});

export const infoLabel = style({
  width: vw(115),
  fontSize: vw(20),
  fontWeight: 500,
  color: "#272727",
  flexShrink: 0,
  lineHeight: vw(28),
  letterSpacing: 0,
  fontFamily: fontFamily.scdream,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "115px",
      fontSize: "20px",
      lineHeight: "28px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: mvw(24),
      width: mvw(106),
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
  },
});

export const infoNumber = style({
  flex: "1",
  fontSize: vw(32),
  color: "#272727",
  fontFamily: fontFamily.poppins,
  fontWeight: 500,
  lineHeight: vw(32),
  letterSpacing: 0,

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "32px",
      lineHeight: "32px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(24),
      lineHeight: mvw(32),
    },
  },
});

export const infoValue = style({
  flex: "1",
  fontSize: vw(20),
  color: "#272727",
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  lineHeight: vw(30),
  letterSpacing: 0,
  display: "flex",
  flexDirection: "column",
  gap: vw(12),

  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "30px",
      gap: "12px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: "130%",
      gap: 0,
      fontWeight: 400,
    },
  },
});

export const infoValueParagraph = style({
  margin: 0,
  marginBottom: 0,
  lineHeight: "inherit",
  fontWeight: 400,
  fontFamily: fontFamily.scdream,
  fontSize: vw(20),
  color: "#272727",
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: 0,
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: mvw(24),
      marginBottom: 0,
    },
  },
});

export const subwayInfo = style({
  marginTop: vw(20),
  fontSize: vw(20),
  color: "#272727",
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  lineHeight: vw(30),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "20px",
      fontSize: "20px",
      lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      marginTop: mvw(12),
      fontSize: mvw(14),
      lineHeight: mvw(20),
      display: "flex",
      flexDirection: "column",
      gap: 0,
      fontWeight: 400,
    },
  },
});

// Ready Section - 헤어라인 페이지와 유사한 구조
export const readySection = style({
  position: "relative",
  width: "100%",
  height: vw(780),
  overflow: "hidden",
  backgroundColor: "#FFFDF7",
  marginTop: vw(240),
  marginBottom: vw(120),
  maxWidth: "1920px", // Hero는 1920px 전체 사용
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      marginTop: mvw(120),
      marginBottom: mvw(120),
      display: "flex",
      flexDirection: "column",
      padding: 0, // 패딩 제거
      minHeight: mvw(724),
    },
  },
});

export const readySectionContainer = style({
  position: "relative",
  width: "100%",

  minHeight: vw(785),
  "@media": {
    [breakpoints.desktopLarge]: {
      minHeight: "785px",
    },
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      padding: 0, // 패딩 제거
      minHeight: "auto",
    },
  },
});

// 일러스트 - 왼쪽 끝부터 헤더 컨테이너의 오른쪽 끝까지 (responsiveContainer와 정확히 동일한 계산)
export const readyHeroIllustration = style({
  position: "absolute",
  left: "0", // 화면 왼쪽부터 시작
  width: vw(1760), // 헤더와 동일한 최대 너비 (패딩 제외한 1750px)
  maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한 (양쪽 160px 마진)
  top: "50%",
  transform: "translateY(-50%)",
  height: vw(785), // 1920px 기준 600px 높이로 축소 (디자인에 맞게)
  zIndex: 1,
  objectFit: "cover",
  objectPosition: "right center", // 이미지를 오른쪽에 정렬
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1760px", // 1920px 이상에서 고정
      height: "785px", // 600px로 축소
    },
    [breakpoints.mobile]: {
      position: "relative",
      width: "100vw", // 뷰포트 전체 너비
      maxWidth: "100vw",
      marginLeft: "calc(-50vw + 50%)", // 전체 화면 너비로 확장
      marginRight: "calc(-50vw + 50%)", // 전체 화면 너비로 확장
      left: "auto",
      right: "auto",
      top: "auto",
      transform: "none",
      height: mvw(360), // 이미지 비율에 맞춰 높이 증가 (375x360 비율)
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // 세로 중앙 정렬 추가
      order: 2, // 모바일에서 두 번째로 표시
      marginTop: mvw(80),
      marginBottom: 0,
      overflow: "visible", // 이미지가 잘리지 않도록
    },
  },
});

export const readyIllustrationImage = style({
  width: "100%",
  height: "100%", // 컨테이너 높이에 맞춤
  objectFit: "contain", // contain으로 변경하여 이미지 전체가 보이도록
  objectPosition: "center right", // 이미지를 오른쪽으로 정렬하여 헤더와 맞춤
  "@media": {
    [breakpoints.mobile]: {
      objectFit: "contain", // 모바일에서도 contain 사용
      objectPosition: "center center", // 중앙 정렬
      width: "100%", // 100vw 대신 100% 사용
      height: "100%",
    },
  },
});

// 타이틀 래퍼 - 1600px 컨테이너 내부에서 헤더 왼쪽 시작점에 정렬
export const readyTitleWrapper = style({
  ...responsiveContainer(1600), // 헤더와 동일한 1600px 컨테이너
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "50%", // 중앙 정렬을 위한 기준점
  transform: "translateX(-50%)", // 중앙 정렬
  display: "flex",
  alignItems: "center",
  "@media": {
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      bottom: "auto",
      left: "auto",
      transform: "none",
      order: 1, // 모바일에서 첫 번째로 표시
      padding: `0 ${mvw(20)}`, // 좌우 패딩
      width: "100%",
      maxWidth: "100%",
    },
  },
});

export const readyTitleContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // 왼쪽 정렬
  textAlign: "left", // 왼쪽 텍스트 정렬
  gap: vw(80),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "80px",
    },
    [breakpoints.mobile]: {
      gap: mvw(24),
      alignItems: "left", // 모바일에서만 중앙 정렬
      textAlign: "left",
      paddingLeft: "0", // 모바일에서는 패딩 제거
    },
  },
});

// 메인 타이틀 - Figma: Poppins Medium 60px, #14AEFF
export const readyMainTitle = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(60), // 1920px 기준 60px, vw로 스케일링
  lineHeight: "130%",
  letterSpacing: "0",
  color: "#14AEFF",
  margin: 0,
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(40),
      lineHeight: "120%",
      textAlign: "left",
    },
  },
});

// 설명 컨테이너
export const readyDescription = style({
  display: "flex",
  flexDirection: "column",
  gap: vw(24),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "24px",
    },
    [breakpoints.mobile]: {
      gap: "20px",
    },
  },
});

// 설명 텍스트 - Figma: S-Core Dream Regular 24px, #14AEFF
export const readyDescriptionText = style({
  fontFamily: fontFamily.scdream,

  fontWeight: 400,
  ...responsiveFont(24),
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#14AEFF",
  margin: 0,
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: "150%",
      textAlign: "left",
    },
  },
});

// 모바일 카드 리스트 컨테이너
export const mobileCardList = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: mvw(16),
      padding: 0, // 패딩 제거
      marginTop: mvw(24), // 상단 마진 줄이기
      width: "100%",
      minHeight: "400px", // 최소 높이 설정
    },
  },
});

// 모바일 서비스 카드
export const mobileServiceCard = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      position: "relative",
      width: "100%",
      borderRadius: mvw(12), // 둥근 모서리
      overflow: "hidden", // 이미지가 모서리를 벗어나지 않도록
      backgroundColor: "#F8F9FA",
    },
  },
});

// 모바일 카드 이미지
export const mobileCardImage = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
      height: mvw(220),
      objectFit: "cover",
    },
  },
});

// 모바일 카드 버튼
export const mobileCardButton = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      position: "absolute",
      bottom: mvw(16),
      left: mvw(16),
      right: mvw(16),
      width: `calc(100% - ${mvw(32)}) !important`, // 좌우 16px씩 제외한 전체 너비
      justifyContent: "center !important", // 텍스트 가운데 정렬
    },
  },
});

// 모바일 Other Service 박스
export const mobileOtherServiceBox = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      position: "relative",
      width: "100%", // 전체 너비
      borderRadius: mvw(12), // 둥근 모서리
      overflow: "hidden",
      backgroundColor: "#B3E5FC",
      minHeight: mvw(220),
    },
  },
});

// 모바일 Other Service 이미지
export const mobileOtherServiceImage = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
      height: mvw(220),
      objectFit: "cover",
    },
  },
});

// 모바일 View More 버튼
export const mobileViewMoreButton = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "inline-flex",
      position: "absolute",
      bottom: mvw(20),
      left: mvw(20),
      right: mvw(20),
      width: `calc(100% - ${mvw(40)}) !important`, // 좌우 16px씩 제외한 전체 너비
      justifyContent: "center !important", // 텍스트 가운데 정렬
      backgroundColor: "#FFFDF7",
      // width와 maxWidth 제거 - ArrowButton에서 자체 처리
      fontSize: mvw(14), // 폰트 크기 명시
      fontWeight: 500, // 폰트 굵기
    },
  },
});
