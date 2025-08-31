import { style } from "@vanilla-extract/css"

export const header = style({
  position: "fixed",
  top: "50px", // 데스크톱: 50px
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 50,
  width: "calc(100% - 320px)", // 160px * 2 padding
  maxWidth: "1600px",
  height: "85px",
  background: "#1AA4F4D9",
  boxShadow: "0 4px 20px rgba(26, 164, 244, 0.3)",
  backdropFilter: "blur(10px)",
  borderRadius: "128px",
  transition: "all 300ms ease",
  "@media": {
    "screen and (max-width: 1680px)": {
      width: "calc(100% - 120px)", // 60px * 2
    },
    "screen and (max-width: 1280px)": {
      width: "calc(100% - 80px)", // 40px * 2
      borderRadius: "64px",
    },
    "screen and (max-width: 1024px)": {
      top: "38px", // 모바일: 38px
      width: "calc(100% - 40px)", // 20px * 2
      borderRadius: "64px",
      height: "72px",
      // 파란색 배경 유지
    },
    "screen and (max-width: 768px)": {
      top: "38px", // 모바일: 38px 유지
      width: "calc(100% - 32px)", // 16px * 2
      borderRadius: "48px",
      height: "64px",
    },
    "screen and (max-width: 480px)": {
      top: "38px", // 모바일: 38px 유지
      width: "calc(100% - 24px)", // 12px * 2
      borderRadius: "40px",
      height: "56px",
    },
  },
})

// 헤더 뒤쪽에 나타나는 커튼 스타일 배경
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
      maxHeight: "350px",
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      transition:
        "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 0ms",
    },
    "&:hover": {
      height: "auto",
      maxHeight: "350px",
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      transition:
        "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 0ms",
    },
  },
})

// 서브메뉴 컨테이너
export const submenuContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "0",
  height: "600px",
  width: "100%",
  paddingTop: "125px",
  paddingBottom: "40px",
  paddingLeft: "160px",
  paddingRight: "160px",
  "@media": {
    "screen and (max-width: 1680px)": {
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    "screen and (max-width: 1280px)": {
      paddingLeft: "40px",
      paddingRight: "40px",
    },
    "screen and (max-width: 1024px)": {
      display: "none",
    },
  },
})

// 드롭다운 아이템
export const dropdownItem = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  fontWeight: "200",
  fontStyle: "4 Regular",
  lineHeight: "160%",
  letterSpacing: "0%",
  color: "#272727",
  textDecoration: "none",
  display: "block",
  padding: "8px 0",
  textAlign: "center",
  transition: "color 200ms ease",
  whiteSpace: "nowrap",
  ":hover": {
    color: "#14AEFF",
  },
  "@media": {
    "screen and (max-width: 1680px)": {
      fontSize: "15px",
      lineHeight: "23px",
    },
    "screen and (max-width: 1440px)": {
      fontSize: "14px",
      lineHeight: "21px",
    },
    "screen and (max-width: 1280px)": {
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
})

// 드롭다운 아이템 활성 상태
export const dropdownItemActive = style({
  color: "#14AEFF",
  fontWeight: "600",
})

export const container = style({
  maxWidth: "1600px",
  width: "100%",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  alignItems: "center",
  paddingRight: "160px",
  paddingLeft: "160px",
  "@media": {
    "screen and (max-width: 1680px)": {
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    "screen and (max-width: 1280px)": {
      paddingLeft: "40px",
      paddingRight: "40px",
    },
    "screen and (max-width: 1024px)": {
      paddingLeft: "28px",  // 태블릿: 28px
      paddingRight: "28px",
    },
    "screen and (max-width: 768px)": {
      paddingLeft: "28px",  // 모바일: 28px
      paddingRight: "28px",
    },
    "screen and (max-width: 480px)": {
      paddingLeft: "28px",  // 작은 모바일: 28px
      paddingRight: "28px",
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
  fontSize: "20px",
  fontWeight: "600",
  fontStyle: "normal",
  lineHeight: "30px",
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
    "screen and (max-width: 1280px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
    "screen and (max-width: 1024px)": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
      // 모바일에서도 흰색 유지
    },
    "screen and (max-width: 768px)": {
      fontSize: "16px",
      lineHeight: "21px",
    },
  },
})

export const desktopNav = style({
  display: "none",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "875px",
  height: "35px",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
    },
    "screen and (max-width: 1680px)": {
      maxWidth: "750px",
    },
    "screen and (max-width: 1440px)": {
      maxWidth: "650px",
    },
    "screen and (max-width: 1280px)": {
      maxWidth: "550px",
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

// 드롭다운 콘텐츠
export const dropdownContent = style({
  position: "absolute",
  top: "calc(100% + 20px)",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  padding: "16px 20px",
  minWidth: "160px",
  opacity: 1,
  visibility: "visible",
  pointerEvents: "auto",
  zIndex: 1000,
  transition: "opacity 200ms ease 300ms, transform 200ms ease 300ms",
})

export const navLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.01em",
  padding: "0",
  flex: "1 1 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  transition: "all 200ms ease",
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  whiteSpace: "nowrap",
  ":hover": {
    opacity: 0.8,
  },
  "@media": {
    "screen and (max-width: 1680px)": {
      fontSize: "15px",
      lineHeight: "23px",
    },
    "screen and (max-width: 1440px)": {
      fontSize: "14px",
      lineHeight: "21px",
    },
    "screen and (max-width: 1280px)": {
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
})

export const actionButtons = style({
  display: "none",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "0.5rem",
  height: "100%",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
    },
  },
})

export const loginButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.01em",
  backgroundColor: "transparent",
  border: "none",
  padding: "0.75rem 1.5rem",
  cursor: "pointer",
  transition: "all 300ms ease",
  position: "relative",
  overflow: "hidden",
})

export const consultButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  padding: "0.5rem 1.5rem",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.01em",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  transition: "all 300ms ease",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const dropdownArrow = style({
  fontSize: "12px",
  marginLeft: "0.25rem",
  transition: "transform 200ms ease",
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
  gap: "24px",
  flex: 1,
})

export const mobileNavLink = style({
  display: "block",
  padding: "20px 0",
  color: "#272727",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "27px",
  borderBottom: "1px solid rgba(39, 39, 39, 0.1)",
  transition: "all 200ms ease",
  fontFamily: "'S-Core Dream', sans-serif",
  ":hover": {
    color: "#1AA4F4",
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
  color: "#1AA4F4",
  fontWeight: "600",
})

export const mobileSubmenu = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  paddingLeft: "24px",
  paddingTop: "12px",
  paddingBottom: "8px",
})

export const mobileSubmenuItem = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "14px",
  fontWeight: "400",
  color: "#666666",
  textDecoration: "none",
  lineHeight: "21px",
  transition: "color 200ms ease",
  ":hover": {
    color: "#1AA4F4",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
})

export const mobileActions = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "auto",
  paddingTop: "32px",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "8px",
      paddingTop: "24px",
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
