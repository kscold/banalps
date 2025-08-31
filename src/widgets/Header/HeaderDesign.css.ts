import { style } from "@vanilla-extract/css"

export const header = style({
  position: "fixed",
  top: "20px",
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
    "screen and (max-width: 1024px)": { // 1024px로 변경
      top: "0",
      width: "100%",
      borderRadius: "0",
      height: "92px",
      background: "#FFFFFF",
      boxShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
    },
  },
})

// 헤더 뒤쪽에 나타나는 흰색 커튼 효과 - 전체 화면 커버
export const headerCurtain = style({
  position: "fixed",
  top: "0", // 화면 맨 위부터 시작
  left: 0,
  right: 0,
  zIndex: 45,
  width: "100%",
  height: "0",
  maxHeight: "0",
  background: "#FFFFFF",
  transition: "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease",
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
      maxHeight: "350px", // 헤더 높이 + 서브메뉴 높이 + 추가 여백 (85px + 240px + 25px)
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      transition: "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 0ms",
    },
    "&:hover": {
      height: "auto",
      maxHeight: "350px",
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      transition: "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 0ms",
    },
  },
})

// 서브메뉴 컨테이너 - 헤더 네비게이션과 정확히 수직 정렬
export const submenuContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "0",
  width: "100%",
  paddingTop: "125px", // 헤더 top(20px) + 헤더 height(85px) + gap(20px)
  paddingBottom: "40px",
  paddingLeft: "60px",
  paddingRight: "60px",
  "@media": {
    "screen and (max-width: 1680px)": {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    "screen and (max-width: 1280px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
})

// 서브메뉴 내부 래퍼 - 네비게이션과 동일한 위치
export const submenuInnerWrapper = style({
  position: "relative",
  display: "flex",
  gap: "0",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "875px",
  "@media": {
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

// 서브메뉴 그룹 - 각 네비게이션 아이템 아래 정확히 위치
export const submenuGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
  flex: "1 1 0",
  padding: "0",
})

// 서브메뉴 타이틀 (사용하지 않음 - 피그마 디자인에 없음)
export const submenuTitle = style({
  display: "none",
})

// 드롭다운 아이템
export const dropdownItem = style({
  fontFamily: "'S-Core Dream', 'Pretendard', Inter, sans-serif",
  fontSize: "16px", // Figma 디자인 기준
  fontWeight: "200",
  lineHeight: "24px",
  letterSpacing: "-0.01em",
  color: "#333333",
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

// 드롭다운 아이템 플레이스홀더 (서브메뉴가 없는 경우)
export const dropdownItemPlaceholder = style({
  height: "1.5rem",
  visibility: "hidden",
})

export const container = style({
  maxWidth: "1600px",
  width: "100%",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  alignItems: "center",
  paddingRight: "160px", // Figma 그리드 offset
  paddingLeft: "160px", // Figma 그리드 offset
  "@media": {
    "screen and (max-width: 1680px)": {
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    "screen and (max-width: 1280px)": {
      paddingLeft: "40px",
      paddingRight: "40px",
    },
    "screen and (max-width: 768px)": {
      paddingLeft: "16px",
      paddingRight: "16px",
      paddingTop: "1rem",
      paddingBottom: "1rem",
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
  "@media": {
    "screen and (max-width: 1024px)": {
      display: "flex",
      justifyContent: "space-between",
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

// logoImage 스타일 제거 (더 이상 사용하지 않음)

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
      fontSize: "16px", // 중간 사이즈
      lineHeight: "24px",
    },
    "screen and (max-width: 1024px)": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
      color: "#333333", // 모바일에서 검정색
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
    "screen and (min-width: 1024px)": { // 1024px로 변경
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

// 네비게이션 아이템 래퍼 (링크 + 드롭다운 포함)
export const navItemWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

// 드롭다운 콘텐츠 (각 네비게이션 아이템 아래에 위치)
export const dropdownContent = style({
  position: "absolute",
  top: "calc(100% + 30px)", // 네비게이션 링크 아래
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  padding: "20px 0",
  minWidth: "150px",
  opacity: 0,
  visibility: "hidden",
  transition: "all 300ms ease",
  pointerEvents: "none",
  selectors: {
    [`${header}:hover &`]: {
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
    },
  },
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

// 네비게이션 링크 활성 상태
export const navLinkActive = style({
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  color: "#FFFFFF",
  fontWeight: "600",
})

export const navItem = style({
  position: "relative",
  display: "inline-block",
})

export const dropdown = style({
  position: "absolute",
  top: "100%",
  left: "0",
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
  padding: "0.5rem 0",
  minWidth: "200px",
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(-10px)",
  transition: "all 300ms ease",
  zIndex: 100,
  selectors: {
    [`${navItem}:hover &`]: {
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)",
    },
  },
})

// 중복 제거 - 위에 이미 dropdownItem이 정의되어 있음

export const actionButtons = style({
  display: "none",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "0.5rem",
  height: "100%",
  "@media": {
    "screen and (min-width: 1024px)": { // 1024px로 변경
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
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none", // 모바일에서 숨김
    },
  },
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
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none", // 모바일에서 숨김
    },
  },
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
    "screen and (min-width: 1024px)": { // 1024px로 변경
      display: "none",
    },
  },
})

export const menuToggle = style({
  color: "#FFFFFF",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  cursor: "pointer",
  padding: "0.75rem",
  borderRadius: "12px",
  transition: "all 200ms ease",
  backdropFilter: "blur(10px)",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "translateY(-1px)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      color: "#333333",
      backgroundColor: "transparent",
      border: "none",
      padding: "0.5rem",
    },
  },
})

export const menuIcon = style({
  height: "1.5rem",
  width: "1.5rem",
})

export const mobileMenu = style({
  display: "block",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  zIndex: 9998,
  backgroundColor: "#FFFFFF",
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
  paddingTop: "92px", // 모바일 헤더 높이
  paddingLeft: "20px",
  paddingRight: "20px",
})

export const mobileNavLink = style({
  display: "block",
  padding: "16px 0",
  color: "#333333",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "30px",
  borderBottom: "1px solid #E5E7EB",
  transition: "all 200ms ease",
  ":hover": {
    color: "#14AEFF",
  },
})

export const mobileActions = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  padding: "1.5rem 2rem 1rem",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  marginTop: "1rem",
})

export const mobileLoginButton = style({
  color: "#FFFFFF",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  fontSize: "1rem",
  fontWeight: "500",
  padding: "0.75rem 1.5rem",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 200ms ease",
  textAlign: "center",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
})

export const mobileConsultButton = style({
  backgroundColor: "#FFFFFF",
  color: "#1AA4F4",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "12px",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 200ms ease",
  textAlign: "center",
  ":hover": {
    backgroundColor: "#F8FAFC",
  },
})
