import { style } from "@vanilla-extract/css";
import {
  vw,
  breakpoints,
  responsiveProperty,
  mvw,
} from "../../shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

export const header = style({
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 50,
  width: "calc(100% - 320px)", // 1024px+ 에서 양쪽 160px 마진 (BlueSection과 동일)
  maxWidth: "1600px", // 1920px 기준 최대 너비
  background: "#14AEFF",
  // backdropFilter: "blur(10px)",
  transition: "all 300ms ease",
  ...responsiveProperty("top", 50), // 1920px 기준 50px
  ...responsiveProperty("height", 85), // 1920px 기준 85px
  ...responsiveProperty("borderRadius", 128), // 1920px 기준 128px
  "@media": {
    [breakpoints.mobile]: {
      // 모바일: 365px~767px (BlueSection과 동일)
      top: "36px",
      width: `calc(100% - ${mvw(32)})`, // 양쪽 20px 마진
      borderRadius: "48px",
      height: mvw(56),
    },
  },
});

// 헤더 뒤쪽에 나타나는 커튼 스타일 배경 (responsiveProperty로 정확한 1920px 기준 구현)
export const headerCurtain = style({
  position: "fixed",
  top: "0",
  left: 0,
  right: 0,
  zIndex: 45,
  width: "100%",
  height: "0",
  maxHeight: "0",
  background: "#FDFCF8", // Ivory 색상
  transition:
    "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  opacity: 0,
  visibility: "hidden",
  pointerEvents: "none",
  selectors: {
    [`${header}:hover ~ &`]: {
      height: "auto",
      maxHeight: vw(450), // 1920px 기준 450px (정확한 비례 계산)
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      transition:
        "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 0ms",
      "@media": {
        [breakpoints.desktopLarge]: {
          maxHeight: "450px", // 1920px+ 고정
        },
      },
    },
    "&:hover": {
      height: "auto",
      maxHeight: vw(450), // 1920px 기준 450px
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      transition:
        "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 0ms",
      "@media": {
        [breakpoints.desktopLarge]: {
          maxHeight: "450px", // 1920px+ 고정
        },
      },
    },
  },
  "@media": {},
});

// 서브메뉴 컨테이너 (responsiveProperty로 정확한 1920px 기준 구현)
export const submenuContainer = style({
  background: "#FFFDF7",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "0",
  width: "100%",
  ...responsiveProperty("height", 410), // 1920px 기준 450px
  ...responsiveProperty("paddingTop", 135), // 1920px 기준 140px (헤더top 50px + 헤더높이 85px + 간격 5px)
  ...responsiveProperty("paddingBottom", 40), // 1920px 기준 40px
  ...responsiveProperty("paddingLeft", 160), // 1920px 기준 160px
  ...responsiveProperty("paddingRight", 160), // 1920px 기준 160px
  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서는 숨김
      display: "none",
    },
  },
});

// 드롭다운 아이템 - 1920px 기준 적용
export const dropdownItem = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(16), // 1920px 기준 16px
  fontWeight: "400",
  fontStyle: "4 Regular",
  lineHeight: "140%",
  letterSpacing: "0%",
  color: "#272727",
  textDecoration: "none",
  display: "block",
  height: vw(26),
  textAlign: "center",
  transition: "color 200ms ease",
  whiteSpace: "nowrap",
  ":hover": {
    color: "#14AEFF",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      fontSize: "16px",
      height: "26px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "11px",
      padding: "6px 0",
    },
  },
});

// 드롭다운 아이템 활성 상태
export const dropdownItemActive = style({
  color: "#14AEFF",
  fontWeight: "400", // weight 차이 없이 색상만 변경
});

export const container = style({
  maxWidth: "1600px", // BlueSection과 동일한 maxWidth
  width: "100%",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  alignItems: "center",
  position: "relative", // relative 추가
  ...responsiveProperty("paddingLeft", 60), // 1920px 기준 60px
  ...responsiveProperty("paddingRight", 60), // 1920px 기준 60px
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    [breakpoints.mobile]: {
      // 모바일: 365px~767px (BlueSection과 동일)
      paddingLeft: mvw(28),
      paddingRight: mvw(28),
    },
  },
});

export const headerContent = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  position: "relative",
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
    },
    [breakpoints.mobile]: {
      // 모바일에서는 space-between으로 처리
      gap: "0",
    },
  },
});

export const logoWrapper = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
  flexShrink: 0, // 로고가 줄어들지 않도록
  minWidth: vw(150), // 최소 너비 보장
  position: "relative",
  zIndex: 10, // 다른 요소보다 위에 표시
  "@media": {
    [breakpoints.desktopLarge]: {
      minWidth: "150px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      minWidth: mvw(100), // 모바일에서 mvw 사용
    },
  },
});

export const logoLink = style({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  height: "100%",
  pointerEvents: "auto", // 클릭 가능하도록 명시
  cursor: "pointer",
});

// 로고 이미지 스타일 추가
export const logoImage = style({
  height: vw(24), // 1920px 기준 24px
  width: vw(178), // 1920px 기준 178px
  minHeight: "20px", // 최소 높이
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "24px",
      width: "178px",
    },
    [breakpoints.mobile]: {
      height: mvw(20),
      width: mvw(148),
    },
  },
});

export const logoText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(20), // 1920px 기준 20px
  fontWeight: "600",
  fontStyle: "normal",
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: "-0.02em",
  color: "#FFFFFF",
  textDecoration: "none",
  transition: "all 200ms ease",
  position: "relative",
  whiteSpace: "nowrap",
  ":hover": {
    opacity: 0.9,
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      // fontSize: "20px",
      // lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: mvw(20),
      lineHeight: "21px",
      fontWeight: "500",
    },
  },
});

export const desktopNav = style({
  display: "none",
  alignItems: "center",
  justifyContent: "center", // center로 변경해서 고정된 간격 유지
  flex: 1, // 남은 공간 차지
  maxWidth: vw(875), // 최대 너비 875px
  ...responsiveProperty("height", 35), // 1920px 기준 35px
  marginLeft: vw(40), // 간격 줄임
  marginRight: vw(40), // 간격 줄임
  gap: 0, // 간격 제거 (각 아이템이 175px로 고정)
  overflow: "visible", // ::after가 보이도록 추가
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
    },
    // 1439px 이하에서 마진 제거
    "screen and (max-width: 1439px)": {
      marginLeft: "0",
      marginRight: "0",
    },
    [breakpoints.desktopLarge]: {
      maxWidth: "875px", // 1920px 이상에서 최대 너비
      marginLeft: "40px",
      marginRight: "40px",
    },
  },
});

// 네비게이션 아이템 래퍼
export const navItemWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: "1", // 균등 분배
  maxWidth: vw(175), // 최대 너비 175px
  overflow: "visible", // ::after가 보이도록 추가
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "175px", // 1920px 이상에서 고정
    },
    "screen and (max-width: 1400px)": {
      maxWidth: "140px", // 작은 화면에서 줄임
    },
  },
});

// 드롭다운 콘텐츠 (1920px 기준 비례 스케일링)
export const dropdownContent = style({
  position: "absolute",
  top: vw(75), // 헤더 바로 아래 붙이기
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  opacity: 1,
  visibility: "visible",
  pointerEvents: "auto",
  zIndex: 1000,
  transition: "opacity 150ms ease, transform 150ms ease", // 더 빠른 페이드인
  ...responsiveProperty("gap", 12), // 1920px 기준 12px
  // ...responsiveProperty("paddingTop", 35), // 1920px 기준 35px (40px에서 축소)
  ...responsiveProperty("paddingLeft", 20), // 1920px 기준 20px
  ...responsiveProperty("paddingRight", 20), // 1920px 기준 20px
  // ...responsiveProperty("paddingBottom", 30), // 1920px 기준 30px
  ...responsiveProperty("minWidth", 160), // 1920px 기준 160px
});

export const navLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: "400",
  letterSpacing: "-0.01em",
  padding: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 200ms ease",
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  whiteSpace: "nowrap",
  flexShrink: 0, // 크기 고정
  width: vw(175), // 175px로 고정
  overflow: "visible", // ::after가 보이도록 추가
  ...responsiveProperty("fontSize", 16), // 1920px 기준 16px
  ...responsiveProperty("lineHeight", 24), // 1920px 기준 24px
  ...responsiveProperty("borderRadius", 12), // 1920px 기준 12px
  ":hover": {
    opacity: 0.8,
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "175px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "11px",
      lineHeight: "17px",
      borderRadius: "8px",
      width: "56px", // 80px * 0.7
    },
  },
});

// 네비게이션 링크 텍스트
export const navLinkText = style({
  position: "relative",
  display: "inline-block",
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: "150%",
  letterSpacing: "0%",
  textAlign: "center",

  "::after": {
    content: '""',
    position: "absolute",
    bottom: "-4px", // 텍스트 아래에 위치
    left: "0",
    right: "0",
    width: "100%",
    height: "2px",
    backgroundColor: "#FFFDF7",
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 200ms ease",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
    },
  },
});

// 활성 상태 네비게이션 링크
export const navLinkActive = style({
  [`& .${navLinkText}::after`]: {
    transform: "scaleX(1)", // 언더라인 표시
  },
});

export const actionButtons = style({
  display: "none",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",
  flexShrink: 0, // 버튼 영역 크기 고정
  position: "relative", // absolute 제거, relative로 변경
  marginLeft: vw(40), // 자동 마진 대신 고정값 사용
  gap: vw(32), // 1920px 기준 32px 간격 (맞음)
  minWidth: vw(140), // width 대신 minWidth 사용
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
    },
    // 1439px 이하에서 왼쪽 마진 제거
    "screen and (max-width: 1439px)": {
      marginLeft: "0",
    },
    [breakpoints.desktopLarge]: {
      minWidth: "140px", // 1920px 이상에서 고정
      marginLeft: "40px",
      gap: "32px",
    },
  },
});

export const loginButton = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontStyle: "Medium",
  fontSize: vw(20),
  lineHeight: vw(24),
  letterSpacing: "0%",
  // text-align: right;

  color: "#FFFFFF",
  backgroundColor: "transparent",
  border: "none",
  // padding: `${vw(12)} ${vw(28)}`, // 1920px 기준 패딩 - 여유공간 추가
  cursor: "pointer",
  transition: "all 300ms ease",
  position: "relative",
  overflow: "visible", // overflow 수정
  whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
  "@media": {
    // 1024-1919px 구간에서 패딩 줄임
    [breakpoints.desktop]: {},
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      fontSize: "20px",
      lineHeight: "24px",
      padding: "12px 24px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "11px",
      lineHeight: "17px",
      padding: "8px 17px",
    },
  },
});

export const consultButton = style({
  fontFamily: "'Poppins', sans-serif",
  color: "#FFFFFF",

  fontSize: vw(20), // 1920px 기준 16px
  fontWeight: "500",
  fontStyle: "Medium",
  lineHeight: vw(24), // 1920px 기준 24px
  letterSpacing: "0%",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  transition: "all 300ms ease",
  position: "relative",
  overflow: "visible", // 드롭다운 화살표가 보이도록
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // 가운데 정렬
  gap: vw(4), // 1920px 기준 4px (텍스트와 화살표 간격 줄임)
  whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
  "@media": {
    [breakpoints.desktop]: {},
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      gap: "4px",
    },
  },
});

export const dropdownArrow = style({
  fontSize: vw(10), // 1920px 기준 10px (작게 조정)
  marginLeft: vw(2), // 1920px 기준 2px
  transition: "transform 200ms ease",
  display: "inline-block",
  lineHeight: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      fontSize: "10px",
      marginLeft: "2px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "8px",
      marginLeft: "3px",
    },
  },
});

// 드롭다운 화살표 회전 상태
export const dropdownArrowRotated = style({
  transform: "rotate(180deg)",
});

export const mobileMenuButton = style({
  display: "flex",
  alignItems: "center",
  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
    [breakpoints.desktopLarge]: {
      display: "none",
    },
  },
});

export const menuIcon = style({
  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
    [breakpoints.mobile]: {
      height: mvw(24),
      width: mvw(24),
    },
  },
});

// 모바일 메뉴
export const mobileMenu = style({
  display: "block",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  zIndex: 9998,
  backgroundColor: "#FFFDF7",
  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
  },
});

export const mobileMenuContent = style({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "80px",
  paddingLeft: "32px",
  paddingRight: "32px",
  paddingBottom: "32px",
  overflowY: "auto",
  "@media": {
    [breakpoints.mobile]: {
      paddingTop: "72px",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "24px",
    },
  },
});

export const mobileMenuNavigation = style({
  display: "flex",
  flexDirection: "column",
  gap: "0",
  flex: 1,
  marginTop: "20px",
});

export const mobileNavLink = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 0",
  color: "#1AA4F4", // 파란색 메인 메뉴
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "27px",
  transition: "all 200ms ease",
  fontFamily: "'S-Core Dream', sans-serif",
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "16px",
      lineHeight: "24px",
      padding: "16px 0",
    },
  },
});

export const mobileNavLinkActive = style({
  color: "#0EA5E9", // 더 진한 파란색
  fontWeight: "700",
});

export const mobileSubmenu = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingLeft: "0",
  paddingTop: "8px",
  paddingBottom: "12px",
  overflow: "hidden",
  animation: "slideDown 200ms ease-out",
});

export const mobileSubmenuItem = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "15px",
  fontWeight: "400",
  color: "#666666",
  textDecoration: "none",
  lineHeight: "22px",
  padding: "10px 0 10px 20px",
  transition: "all 200ms ease",
  display: "block",
  ":hover": {
    color: "#1AA4F4",
    backgroundColor: "rgba(26, 164, 244, 0.05)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      lineHeight: "20px",
      padding: "8px 0 8px 20px",
    },
  },
});

export const mobileActions = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "8px",
    },
  },
});

export const mobileLoginButton = style({
  color: "#272727",
  backgroundColor: "#FFFDF7",
  border: "1px solid #DEDEDE",
  fontSize: "16px",
  fontWeight: "500",
  padding: "14px 24px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 200ms ease",
  textAlign: "center",
  fontFamily: "'S-Core Dream', sans-serif",
  ":hover": {
    backgroundColor: "#F8F8F8",
    borderColor: "#1AA4F4",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      padding: "12px 20px",
    },
  },
});

export const mobileConsultButton = style({
  backgroundColor: "#1AA4F4",
  color: "#FFFFFF",
  border: "none",
  padding: "14px 24px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 200ms ease",
  textAlign: "center",
  fontFamily: "'S-Core Dream', sans-serif",
  ":hover": {
    backgroundColor: "#0EA5E9",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      padding: "12px 20px",
    },
  },
});

// 모바일 메뉴 아이템 래퍼
export const mobileMenuItemWrapper = style({
  borderBottom: "1px solid rgba(39, 39, 39, 0.1)",
  ":last-child": {
    borderBottom: "none",
  },
});

// 모바일 메뉴 화살표
export const mobileMenuArrow = style({
  fontSize: "14px",
  color: "#1AA4F4",
  transition: "transform 200ms ease",
  display: "inline-block",
});

// 모바일 메뉴 헤더
export const mobileMenuHeader = style({
  display: "flex",
  justifyContent: "flex-end",
  paddingBottom: "20px",
});

// 모바일 메뉴 닫기 버튼
export const mobileMenuClose = style({
  backgroundColor: "transparent",
  border: "none",
  fontSize: "24px",
  color: "#272727",
  cursor: "pointer",
  padding: "8px",
  transition: "opacity 200ms ease",
  ":hover": {
    opacity: 0.6,
  },
});

// 모바일 메뉴 푸터
export const mobileMenuFooter = style({
  marginTop: "auto",
  paddingTop: "32px",
  borderTop: "1px solid rgba(39, 39, 39, 0.1)",
});

// 모바일 언어 선택 래퍼
export const mobileLanguageWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

// 모바일 언어 버튼
export const mobileLanguageButton = style({
  backgroundColor: "transparent",
  border: "none",
  color: "#272727",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "'S-Core Dream', sans-serif",
  transition: "color 200ms ease",
  ":hover": {
    color: "#1AA4F4",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
    },
  },
});

// 언어 화살표
export const languageArrow = style({
  fontSize: "12px",
  color: "inherit",
});

// 서브메뉴 활성 상태
export const mobileSubmenuItemActive = style({
  color: "#1AA4F4",
  fontWeight: "500",
  backgroundColor: "rgba(26, 164, 244, 0.1)",
});

// 모바일 메뉴 액션 (LOGIN과 KR 버튼 컨테이너)
export const mobileMenuActions = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "8px",
    },
  },
});

// 모바일 메뉴 상단바
export const mobileMenuTopBar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "24px",
  borderBottom: "1px solid rgba(39, 39, 39, 0.1)",
  marginBottom: "16px",
});

// 모바일 상단 LOGIN 버튼
export const mobileTopLoginButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  fontWeight: "500",
  color: "#1AA4F4",
  backgroundColor: "transparent",
  border: "none",
  padding: "8px 16px",
  cursor: "pointer",
  transition: "opacity 200ms ease",
  ":hover": {
    opacity: 0.7,
  },
});

// 모바일 메뉴 닫기 버튼
export const mobileMenuCloseButton = style({
  fontSize: "20px",
  color: "#272727",
  backgroundColor: "transparent",
  border: "none",
  padding: "8px",
  cursor: "pointer",
  transition: "opacity 200ms ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    opacity: 0.6,
  },
});

// 모바일 메뉴 아이템 컨테이너
export const mobileMenuItemContainer = style({
  borderBottom: "1px solid rgba(39, 39, 39, 0.1)",
  ":last-child": {
    borderBottom: "none",
  },
});

// 모바일 메뉴 아이템
export const mobileMenuItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "18px 0",
  cursor: "pointer",
  transition: "opacity 200ms ease",
  ":hover": {
    opacity: 0.8,
  },
});

// 모바일 메뉴 아이템 텍스트
export const mobileMenuItemText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  color: "#1AA4F4",
  lineHeight: "24px",
});

// 모바일 메뉴 아이템 활성 상태
export const mobileMenuItemActive = style({
  opacity: 1,
});

// 모바일 메뉴 아이템 화살표
export const mobileMenuItemArrow = style({
  fontSize: "12px",
  color: "#1AA4F4",
  transition: "transform 200ms ease",
  display: "inline-block",
});

// 모바일 서브메뉴 컨테이너
export const mobileSubmenuContainer = style({
  paddingBottom: "12px",
  animation: "slideDown 200ms ease-out",
});

// 모바일 서브메뉴 링크
export const mobileSubmenuLink = style({
  display: "block",
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "14px",
  fontWeight: "400",
  color: "#666666",
  textDecoration: "none",
  lineHeight: "20px",
  padding: "10px 0 10px 24px",
  transition: "all 200ms ease",
  ":hover": {
    color: "#1AA4F4",
    backgroundColor: "rgba(26, 164, 244, 0.05)",
  },
});

// 모바일 서브메뉴 링크 활성 상태
export const mobileSubmenuLinkActive = style({
  color: "#1AA4F4",
  fontWeight: "500",
  backgroundColor: "rgba(26, 164, 244, 0.08)",
});

// 모바일 메뉴 하단바
export const mobileMenuBottomBar = style({
  position: "absolute",
  bottom: "24px",
  right: "24px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

// 모바일 언어 선택기
export const mobileLanguageSelector = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "14px",
  fontWeight: "500",
  color: "#272727",
  backgroundColor: "transparent",
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  transition: "color 200ms ease",
  ":hover": {
    color: "#1AA4F4",
  },
});

// 언어 드롭다운 아이콘
export const languageDropdownIcon = style({
  fontSize: "10px",
  color: "inherit",
});

// 데스크탑 언어 버튼 래퍼
export const languageButtonWrapper = style({
  position: "relative",
});

// 데스크탑 언어 드롭다운 컨테이너
export const languageDropdownContainer = style({
  position: "absolute",
  top: "calc(100% + 10px)",
  right: 0,
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  zIndex: 1000,
  minWidth: "120px",
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(-10px)",
  transition: "all 0.2s ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      minWidth: "120px",
    },
  },
});

// 언어 드롭다운 활성 상태
export const languageDropdownActive = style({
  opacity: 1,
  visibility: "visible",
  transform: "translateY(0)",
});

// 언어 옵션 아이템
export const languageOption = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vw(12)} ${vw(16)}`,
  cursor: "pointer",
  fontSize: vw(16),
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  color: "#272727",
  backgroundColor: "transparent",
  border: "none",
  width: "100%",
  textAlign: "left",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "#F3F4F6",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "12px 16px",
      fontSize: "16px",
    },
  },
});

// 언어 옵션 활성 상태
export const languageOptionActive = style({
  fontWeight: 500,
});

// 체크 아이콘
export const languageCheckIcon = style({
  display: "inline-block",
  width: vw(16),
  height: vw(16),
  marginLeft: vw(8),
  color: "#14AEFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "16px",
      height: "16px",
      marginLeft: "8px",
    },
  },
});
