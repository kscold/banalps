import { style } from "@vanilla-extract/css"
import { tokens } from "../../shared/styles/tokens.css"

// 메인 헤더 - 네비게이션 바
export const header = style({
  position: "fixed",
  top: 0, // 상단에 고정
  left: 0,
  right: 0,
  zIndex: tokens.zIndex.header, // 9999
  backgroundColor: "#FFFFFF",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  width: "100%",
  height: "85px",
})

export const container = style({
  maxWidth: "1600px",
  width: "100%",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "28px",
  paddingRight: "60px",
  paddingBottom: "28px",
  paddingLeft: "60px",
  "@media": {
    "screen and (max-width: 1680px)": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    "screen and (max-width: 768px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
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
  height: "35px",
})

export const logoWrapper = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
})

export const logoImage = style({
  height: "35px",
  width: "auto",
})

export const logoText = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#14AEFF",
  textDecoration: "none",
})

export const desktopNav = style({
  display: "none",
  alignItems: "center",
  gap: "2rem",
  height: "100%",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
    },
  },
})

export const navLink = style({
  color: "#374151",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "500",
  padding: "0.75rem 1.25rem",
  borderRadius: "8px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  ":hover": {
    color: "#14AEFF",
    backgroundColor: "rgba(20, 174, 255, 0.05)",
  },
})

// 전체 드롭다운 메뉴 컨테이너 (3열 그리드)
export const dropdownContainer = style({
  position: "fixed",
  top: "165px", // 헤더 아래 (80px + 85px)
  left: 0,
  right: 0,
  backgroundColor: "#FFFFFF",
  borderTop: "1px solid #E5E7EB",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  zIndex: tokens.zIndex.header - 1,
  padding: "2rem 0",
  opacity: 1,
  visibility: "visible",
  transform: "translateY(0)",
  transition: "all 0.3s ease",
})

// 3열 그리드 레이아웃
export const dropdownGrid = style({
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 60px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "3rem",
  "@media": {
    "screen and (max-width: 1680px)": {
      padding: "0 2rem",
    },
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "2rem",
    },
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },
})

// 드롭다운 그룹
export const dropdownGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
})

// 드롭다운 그룹 제목
export const dropdownGroupTitle = style({
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#14AEFF",
  marginBottom: "0.5rem",
  paddingBottom: "0.5rem",
  borderBottom: "2px solid rgba(20, 174, 255, 0.2)",
})

// 드롭다운 아이템
export const dropdownItem = style({
  color: "#374151",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: "500",
  padding: "0.5rem 0",
  transition: "all 0.2s ease",
  ":hover": {
    color: "#14AEFF",
    paddingLeft: "0.5rem",
  },
})

// 드롭다운 아이템 플레이스홀더 (서브메뉴가 없는 경우)
export const dropdownItemPlaceholder = style({
  height: "1.5rem", // 드롭다운 아이템과 동일한 높이
  visibility: "hidden",
})

// 드롭다운 아이템 활성 상태
export const dropdownItemActive = style({
  color: "#14AEFF",
  fontWeight: "600",
})

export const actionButtons = style({
  display: "none",
  alignItems: "center",
  gap: "1rem",
  height: "100%",
  minWidth: "180px", // 최소 너비 확보로 버튼들이 충분한 공간을 가지도록
  justifyContent: "flex-end", // 오른쪽 정렬
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
    },
  },
})

export const loginButton = style({
  color: "#374151",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "1rem",
  fontWeight: "500",
  padding: "0.75rem 1.5rem", // 패딩 더 증가
  borderRadius: "6px",
  cursor: "pointer",
  minWidth: "80px", // 최소 너비 증가
  textAlign: "center",
  "@media": {
    "screen and (min-width: 1024px) and (max-width: 1919px)": {
      fontSize: "1.1rem", // 폰트 크기 증가
      padding: "0.8rem 1.75rem", // 더 큰 패딩
      minWidth: "90px",
    },
    "screen and (min-width: 1920px)": {
      fontSize: "1.1rem", // 폰트 크기 증가
      padding: "0.8rem 2rem", // 1920px+ 에서 가장 큰 패딩
      minWidth: "100px",
    },
  },
  ":hover": {
    color: "#14AEFF",
    backgroundColor: "rgba(20, 174, 255, 0.05)",
  },
})

export const consultButton = style({
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 1px 2px 0 rgb(20 174 255 / 0.1)",
  ":hover": {
    backgroundColor: "#0EA5E9",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px 0 rgb(20 174 255 / 0.2)",
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

export const menuToggle = style({
  color: "#374151",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "0.5rem",
  borderRadius: "6px",
  ":hover": {
    color: "#14AEFF",
    backgroundColor: "rgba(20, 174, 255, 0.05)",
  },
})

export const menuIcon = style({
  height: "1.5rem",
  width: "1.5rem",
})

export const mobileMenu = style({
  display: "block",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "none",
    },
  },
})

export const mobileMenuContent = style({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  backgroundColor: "#FFFFFF",
  borderTop: "1px solid #E5E7EB",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  padding: "1rem 0",
})

export const mobileNavLink = style({
  display: "block",
  padding: "0.75rem 2rem",
  color: "#374151",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "500",
  ":hover": {
    color: "#14AEFF",
    backgroundColor: "rgba(20, 174, 255, 0.05)",
  },
})

// 모바일 네비게이션 링크 활성 상태
export const mobileNavLinkActive = style({
  color: "#14AEFF",
  backgroundColor: "rgba(20, 174, 255, 0.05)",
})

export const mobileActions = style({
  display: "flex",
  gap: "0.5rem",
  padding: "1rem 2rem 0.5rem",
  borderTop: "1px solid #E5E7EB",
  marginTop: "1rem",
})

export const mobileLoginButton = style({
  color: "#374151",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "1rem",
  fontWeight: "500",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  cursor: "pointer",
  ":hover": {
    color: "#14AEFF",
    backgroundColor: "rgba(20, 174, 255, 0.05)",
  },
})

export const mobileConsultButton = style({
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  fontSize: "0.9rem",
  fontWeight: "600",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#0EA5E9",
  },
})

// 드롭다운 화살표
export const dropdownArrow = style({
  marginLeft: "0.5rem",
  fontSize: "0.8rem",
  transition: "transform 0.2s ease",
  selectors: {
    [`${consultButton}:hover &`]: {
      transform: "rotate(180deg)",
    },
  },
})

// 헤더 뒤쪽 흰색 커튼 효과 (드롭다운 메뉴)
export const headerCurtain = style({
  position: "fixed",
  top: "85px", // 헤더 아래
  left: 0,
  right: 0,
  backgroundColor: "#FFFFFF",
  borderTop: "1px solid #E5E7EB",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  zIndex: tokens.zIndex.header - 1,
  padding: "2rem 0",
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(-20px)",
  transition: "all 0.4s ease",
  selectors: {
    "&:hover": {
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)",
    },
  },
})

// 5열 그리드 레이아웃 (헤더 링크와 완벽하게 일치)
export const submenuContainer = style({
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 60px",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)", // 5개 카테고리
  gap: "2rem", // 헤더 링크 간격과 동일
  "@media": {
    "screen and (max-width: 1680px)": {
      padding: "0 2rem",
    },
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
    },
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },
})

// 드롭다운 그룹 (각 헤더 링크 아래에 정확히 정렬)
export const submenuGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  alignItems: "flex-start", // 왼쪽 정렬로 변경
  justifyContent: "flex-start", // 상단 정렬
})

// 드롭다운 그룹 제목
export const submenuTitle = style({
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#14AEFF",
  marginBottom: "0.5rem",
  paddingBottom: "0.5rem",
  borderBottom: "2px solid rgba(20, 174, 255, 0.2)",
})
