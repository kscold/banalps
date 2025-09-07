import { style } from "@vanilla-extract/css"
import {
  vw,
  breakpoints,
  responsiveProperty,
} from "../../shared/styles/responsive.css"

export const header = style({
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 50,
  width: "calc(100% - 320px)", // 1024px+ 에서 양쪽 160px 마진 (BlueSection과 동일)
  maxWidth: "1600px", // 1920px 기준 최대 너비
  background: "#1AA4F4D9",
  boxShadow: "0 4px 20px rgba(26, 164, 244, 0.3)",
  backdropFilter: "blur(10px)",
  transition: "all 300ms ease",
  ...responsiveProperty("top", 50), // 1920px 기준 50px
  ...responsiveProperty("height", 85), // 1920px 기준 85px
  ...responsiveProperty("borderRadius", 128), // 1920px 기준 128px
  "@media": {
    [breakpoints.mobile]: {
      // 모바일: 365px~767px (BlueSection과 동일)
      top: "36px",
      width: "calc(100% - 40px)", // 양쪽 20px 마진
      borderRadius: "48px",
      height: "64px",
    },
  },
})

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
  background: "#FFFFFF",
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
})

// 서브메뉴 컨테이너 (responsiveProperty로 정확한 1920px 기준 구현)
export const submenuContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "0",
  width: "100%",
  ...responsiveProperty("height", 450), // 1920px 기준 450px
  ...responsiveProperty("paddingTop", 140), // 1920px 기준 140px (헤더top 50px + 헤더높이 85px + 간격 5px)
  ...responsiveProperty("paddingBottom", 40), // 1920px 기준 40px
  ...responsiveProperty("paddingLeft", 160), // 1920px 기준 160px
  ...responsiveProperty("paddingRight", 160), // 1920px 기준 160px
  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서는 숨김
      display: "none",
    },
  },
})

// 드롭다운 아이템 - 1920px 기준 적용
export const dropdownItem = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(16), // 1920px 기준 16px
  fontWeight: "200",
  fontStyle: "4 Regular",
  lineHeight: "160%",
  letterSpacing: "0%",
  color: "#272727",
  textDecoration: "none",
  display: "block",
  padding: `${vw(8)} 0`, // 1920px 기준 8px
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
      padding: "8px 0",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "11px",
      padding: "6px 0",
    },
  },
})

// 드롭다운 아이템 활성 상태
export const dropdownItemActive = style({
  color: "#14AEFF",
  fontWeight: "600",
})

export const container = style({
  maxWidth: "1600px", // BlueSection과 동일한 maxWidth
  width: "100%",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  alignItems: "center",
  ...responsiveProperty("paddingLeft", 60), // 1920px 기준 60px
  ...responsiveProperty("paddingRight", 60), // 1920px 기준 60px
  "@media": {
    [breakpoints.mobile]: {
      // 모바일: 365px~767px (BlueSection과 동일)
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
})

export const headerContent = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  position: "relative",
  zIndex: 1,
  ...responsiveProperty("gap", 40), // 1920px 기준 40px 간격 (125px에서 크게 축소)
  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서는 space-between으로 처리
      gap: "0",
    },
  },
})

export const logoWrapper = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
})

export const logoLink = style({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  height: "100%",
})

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
      fontSize: "20px",
      lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "14px",
      lineHeight: "21px",
      fontWeight: "500",
    },
  },
})

export const desktopNav = style({
  display: "none",
  alignItems: "center",
  justifyContent: "center", // center로 변경해서 고정된 간격 유지
  flexShrink: 0, // 크기 고정
  ...responsiveProperty("height", 35), // 1920px 기준 35px
  ...responsiveProperty("marginLeft", 80), // 1920px 기준 80px 간격 (125px에서 축소)
  ...responsiveProperty("marginRight", 80), // 1920px 기준 80px 간격 (125px에서 축소)
  ...responsiveProperty("gap", 75), // 1920px 기준 75px 네비게이션 아이템 간격 (80px에서 축소)
  ...responsiveProperty("width", 580), // 1920px 기준 580px 고정 너비 (5개 링크 * 80px + 4개 간격 * 60px)
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
    },
  },
})

// 네비게이션 아이템 래퍼
export const navItemWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

// 드롭다운 콘텐츠 (1920px 기준 비례 스케일링)
export const dropdownContent = style({
  position: "absolute",
  top: "100%", // 헤더 바로 아래 붙이기
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
  ...responsiveProperty("paddingTop", 35), // 1920px 기준 35px (40px에서 축소)
  ...responsiveProperty("paddingLeft", 20), // 1920px 기준 20px
  ...responsiveProperty("paddingRight", 20), // 1920px 기준 20px
  ...responsiveProperty("paddingBottom", 30), // 1920px 기준 30px
  ...responsiveProperty("minWidth", 160), // 1920px 기준 160px
  "@media": {},
})

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
  ...responsiveProperty("fontSize", 16), // 1920px 기준 16px
  ...responsiveProperty("lineHeight", 24), // 1920px 기준 24px
  ...responsiveProperty("borderRadius", 12), // 1920px 기준 12px
  ...responsiveProperty("width", 80), // 1920px 기준 80px 고정 너비 (100px에서 축소)
  ":hover": {
    opacity: 0.8,
  },
  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "11px",
      lineHeight: "17px",
      borderRadius: "8px",
      width: "56px", // 80px * 0.7
    },
  },
})

export const actionButtons = style({
  display: "none",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",
  flexShrink: 0, // 버튼 영역 크기 고정
  ...responsiveProperty("gap", 8), // 1920px 기준 8px 간격
  ...responsiveProperty("width", 140), // 1920px 기준 140px 고정 너비
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
    },
  },
})

export const loginButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  fontSize: vw(16), // 1920px 기준 16px
  fontWeight: "400",
  lineHeight: vw(24), // 1920px 기준 24px
  letterSpacing: "-0.01em",
  backgroundColor: "transparent",
  border: "none",
  padding: `${vw(12)} ${vw(24)}`, // 1920px 기준 패딩
  cursor: "pointer",
  transition: "all 300ms ease",
  position: "relative",
  overflow: "hidden",
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      fontSize: "16px",
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
})

export const consultButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  padding: `${vw(8)} ${vw(24)}`, // 1920px 기준 패딩
  fontSize: vw(16), // 1920px 기준 16px
  fontWeight: "400",
  lineHeight: vw(24), // 1920px 기준 24px
  letterSpacing: "-0.01em",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  transition: "all 300ms ease",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  gap: vw(8), // 1920px 기준 8px
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      padding: "8px 24px",
      fontSize: "16px",
      lineHeight: "24px",
      gap: "8px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      padding: "6px 17px",
      fontSize: "11px",
      lineHeight: "17px",
      gap: "6px",
    },
  },
})

export const dropdownArrow = style({
  fontSize: vw(12), // 1920px 기준 12px
  marginLeft: vw(4), // 1920px 기준 4px (0.25rem ≈ 4px)
  transition: "transform 200ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      fontSize: "12px",
      marginLeft: "4px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: "8px",
      marginLeft: "3px",
    },
  },
})

export const mobileMenuButton = style({
  display: "flex",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "none",
    },
  },
})

export const menuIcon = style({
  height: "1.5rem",
  width: "1.5rem",
})

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
    "screen and (min-width: 1024px)": {
      display: "none",
    },
  },
})

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
    "screen and (max-width: 768px)": {
      paddingTop: "72px",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "24px",
    },
  },
})

export const mobileMenuNavigation = style({
  display: "flex",
  flexDirection: "column",
  gap: "0",
  flex: 1,
  marginTop: "20px",
})

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
})

export const mobileNavLinkActive = style({
  color: "#0EA5E9", // 더 진한 파란색
  fontWeight: "700",
})

export const mobileSubmenu = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingLeft: "0",
  paddingTop: "8px",
  paddingBottom: "12px",
  overflow: "hidden",
  animation: "slideDown 200ms ease-out",
})

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
})

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
})

export const mobileLoginButton = style({
  color: "#272727",
  backgroundColor: "#FFFFFF",
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
})

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
})

// 모바일 메뉴 아이템 래퍼
export const mobileMenuItemWrapper = style({
  borderBottom: "1px solid rgba(39, 39, 39, 0.1)",
  ":last-child": {
    borderBottom: "none",
  },
})

// 모바일 메뉴 화살표
export const mobileMenuArrow = style({
  fontSize: "14px",
  color: "#1AA4F4",
  transition: "transform 200ms ease",
  display: "inline-block",
})

// 모바일 메뉴 헤더
export const mobileMenuHeader = style({
  display: "flex",
  justifyContent: "flex-end",
  paddingBottom: "20px",
})

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
})

// 모바일 메뉴 푸터
export const mobileMenuFooter = style({
  marginTop: "auto",
  paddingTop: "32px",
  borderTop: "1px solid rgba(39, 39, 39, 0.1)",
})

// 모바일 언어 선택 래퍼
export const mobileLanguageWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
})

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
})

// 언어 화살표
export const languageArrow = style({
  fontSize: "12px",
  color: "inherit",
})

// 서브메뉴 활성 상태
export const mobileSubmenuItemActive = style({
  color: "#1AA4F4",
  fontWeight: "500",
  backgroundColor: "rgba(26, 164, 244, 0.1)",
})

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
})

// 모바일 메뉴 상단바
export const mobileMenuTopBar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "24px",
  borderBottom: "1px solid rgba(39, 39, 39, 0.1)",
  marginBottom: "16px",
})

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
})

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
})

// 모바일 메뉴 아이템 컨테이너
export const mobileMenuItemContainer = style({
  borderBottom: "1px solid rgba(39, 39, 39, 0.1)",
  ":last-child": {
    borderBottom: "none",
  },
})

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
})

// 모바일 메뉴 아이템 텍스트
export const mobileMenuItemText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  color: "#1AA4F4",
  lineHeight: "24px",
})

// 모바일 메뉴 아이템 활성 상태
export const mobileMenuItemActive = style({
  opacity: 1,
})

// 모바일 메뉴 아이템 화살표
export const mobileMenuItemArrow = style({
  fontSize: "12px",
  color: "#1AA4F4",
  transition: "transform 200ms ease",
  display: "inline-block",
})

// 모바일 서브메뉴 컨테이너
export const mobileSubmenuContainer = style({
  paddingBottom: "12px",
  animation: "slideDown 200ms ease-out",
})

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
})

// 모바일 서브메뉴 링크 활성 상태
export const mobileSubmenuLinkActive = style({
  color: "#1AA4F4",
  fontWeight: "500",
  backgroundColor: "rgba(26, 164, 244, 0.08)",
})

// 모바일 메뉴 하단바
export const mobileMenuBottomBar = style({
  position: "absolute",
  bottom: "24px",
  right: "24px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
})

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
})

// 언어 드롭다운 아이콘
export const languageDropdownIcon = style({
  fontSize: "10px",
  color: "inherit",
})
