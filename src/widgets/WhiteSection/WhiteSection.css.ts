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
      flexDirection: "column",
      height: "auto",
      gap: "20px",
    },
  },
})

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

// 기존 ready 스타일들 정리됨 - We're Ready When You Are 섹션으로 교체

// 위치 섹션 - 1920px 기준 responsiveContainer 적용
export const locationSection = style({
  width: "100%",
  ...responsiveProperty("paddingTop", 120), // 1920px 기준 120px
  ...responsiveProperty("paddingBottom", 120),
  borderTop: "1px solid #E0E0E0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

// 위치 섹션 타이틀 - 1920px 기준
export const locationTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60), // 1920px 기준 60px
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  textAlign: "left",
  width: "100%",
  maxWidth: "1600px",
  marginLeft: "auto",
  marginRight: "auto",
  ...responsiveProperty("marginBottom", 80), // 1920px 기준 80px
  "@media": {
    [`screen and (max-width: 1600px)`]: {
      paddingLeft: "160px",
      paddingRight: "160px",
    },
    [breakpoints.mobile]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
})

// Frame 320 - 메인 콘텐츠 영역 (1600x500)
export const locationContent = style({
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto",
  display: "flex",
  ...responsiveProperty("gap", 78.7), // 피그마에서 Frame 311과 Frame 318 사이 간격
  height: vw(500), // 피그마 디자인 높이 500px
  boxSizing: "border-box", // 패딩 포함한 너비 계산
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "500px",
    },
    [`screen and (max-width: 1600px)`]: {
      width: "calc(100% - 320px)", // 좌우 160px 여백
      paddingLeft: "0",
      paddingRight: "0",
    },
    [breakpoints.mobile]: {
      width: "100%",
      padding: "0 20px", // 모바일 좌우 20px 여백
      flexDirection: "column",
      height: "auto",
      gap: "40px",
    },
  },
})

// Frame 311 - 왼쪽 이미지+지도 영역 (1121.29 x 500)
export const leftContentArea = style({
  flex: "1", // flex로 유연하게 크기 조정 (남은 공간 대부분 차지)
  display: "flex",
  ...responsiveProperty("gap", 20.29), // Frame 416과 Mask group 사이 간격
  minHeight: vw(500),
  minWidth: 0, // flex shrink를 위해 필요
  "@media": {
    [breakpoints.desktopLarge]: {
      minHeight: "500px",
      gap: "20.29px",
    },
    [breakpoints.mobile]: {
      flex: "1",
      flexDirection: "column",
      minHeight: "auto",
      gap: "20px",
    },
  },
})

// Frame 416 - 왼쪽 이미지 영역 (385 x 500)
export const locationImageArea = style({
  width: "34.3%", // 385 / 1121.29 ≈ 34.3% (비례적 크기)
  aspectRatio: "385 / 500", // 비율 유지
  borderRadius: vw(8),
  overflow: "hidden",
  backgroundColor: "#F5F5F5",
  position: "relative",
  flexShrink: 0, // 크기 유지
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      aspectRatio: "16 / 10", // 모바일에서 더 넓은 비율
    },
  },
})

// 왼쪽 이미지
export const locationImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
})

// Mask group - 지도 영역 (724.29 x 500)
export const mapArea = style({
  flex: "1", // 남은 공간 모두 사용 (724.29 / 1121.29 ≈ 64.6%)
  aspectRatio: "724.29 / 500", // 비율 유지
  borderRadius: vw(8),
  overflow: "hidden",
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      aspectRatio: "16 / 10", // 모바일에서 더 넓은 비율
    },
  },
})

// Frame 318 - 오른쪽 정보 영역 (430.71 x 500)
export const locationInfo = style({
  width: "350px", // 고정 너비로 변경 (430.71px는 너무 크므로 350px로 조정)
  minHeight: vw(500),
  flexShrink: 0, // 크기 유지
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // infoBox와 MapButtons 사이 간격 최대화
  "@media": {
    [breakpoints.desktopLarge]: {
      minHeight: "500px",
    },
    [`screen and (max-width: 1400px)`]: {
      width: "300px", // 중간 크기 화면에서 더 작게
    },
    [breakpoints.mobile]: {
      width: "100%",
      minHeight: "auto",
      justifyContent: "flex-start", // 모바일에서는 위쪽 정렬
      gap: "30px", // 모바일에서 간격
    },
  },
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

export const infoBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  flex: "1", // 위쪽 공간 모두 차지
  "@media": {
    [breakpoints.mobile]: {
      marginBottom: "0", // 모바일에서는 마진 제거
    },
  },
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

// ==================== WE'RE READY WHEN YOU ARE SECTION ====================

// Ready Section - 헤어라인 페이지와 유사한 구조
export const readySection = style({
  position: "relative",
  width: "100%",
  // minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: "#FFFFFF",
  paddingTop: vw(120),
  paddingBottom: vw(120),
  marginBottom: vw(120),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      paddingTop: "80px",
      paddingBottom: "80px",
    },
  },
})

export const readySectionContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "1920px", // Hero는 1920px 전체 사용
  margin: "0 auto",
  minHeight: vw(600),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      padding: "0 20px", // 모바일에서 좌우 패딩
      minHeight: "auto",
    },
  },
})

// 일러스트 - 왼쪽 끝부터 헤더 컨테이너의 오른쪽 끝까지 (responsiveContainer와 정확히 동일한 계산)
export const readyHeroIllustration = style({
  position: "absolute",
  left: "0", // 1920px 컨테이너의 맨 왼쪽부터 시작
  width: "1600px", // 헤더와 완전히 동일한 최대 너비
  maxWidth: "calc(100% - 160px)", // 헤더와 동일한 제한 (양쪽 160px 마진)
  top: "50%",
  transform: "translateY(-50%)",
  height: vw(800), // 1920px 기준 800px 높이로 조정 (더 적절한 비율)
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      position: "relative",
      left: "auto",
      right: "auto",
      width: "100%",
      maxWidth: "100%",
      top: "auto",
      transform: "none",
      height: "250px",
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
    },
  },
})

export const readyIllustrationImage = style({
  width: "100%",
  height: "100%", // 컨테이너 높이에 맞춤
  objectFit: "cover", // contain에서 cover로 변경하여 전체 영역을 채움
  objectPosition: "center right", // 이미지를 오른쪽으로 정렬하여 헤더와 맞춤
})

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
    },
  },
})

export const readyTitleContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // 왼쪽 정렬
  textAlign: "left", // 왼쪽 텍스트 정렬
  gap: vw(40),
  width: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      gap: "30px",
      alignItems: "center", // 모바일에서만 중앙 정렬
      textAlign: "center",
      paddingLeft: "0", // 모바일에서는 패딩 제거
    },
  },
})

// 메인 타이틀 - Figma: Poppins Medium 60px, #14AEFF
export const readyMainTitle = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(78),
  letterSpacing: "0",
  color: "#14AEFF",
  margin: 0,
  textAlign: "left",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px",
      lineHeight: "78px",
    },
    [breakpoints.mobile]: {
      fontSize: "36px",
      lineHeight: "48px",
    },
  },
})

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
})

// 설명 텍스트 - Figma: S-Core Dream Regular 24px, #14AEFF
export const readyDescriptionText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(24),
  lineHeight: vw(36),
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
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
})
