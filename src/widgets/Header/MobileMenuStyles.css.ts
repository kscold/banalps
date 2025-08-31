import { style, keyframes } from "@vanilla-extract/css"

// 슬라이드 애니메이션
const slideIn = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
})

// 배경 오버레이
export const mobileMenuOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9998,
  transition: "opacity 300ms ease, visibility 300ms ease",
})

// 메뉴 패널 (오른쪽에서 슬라이드) - 전체 화면
export const mobileMenuPanel = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0, // 전체 화면 덮기
  width: "100%",
  backgroundColor: "#FFFFFF",
  zIndex: 9999,
  transition: "transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
})

// 메뉴 콘텐츠
export const mobileMenuContent = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "36px 16px 26px 24px",
})

// 메뉴 헤더
export const mobileMenuHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "60px",
})

// LOGIN 버튼
export const mobileLoginBtn = style({
  fontFamily: "Poppins, sans-serif",
  fontSize: "20px",
  fontWeight: "600",
  fontStyle: "normal",
  lineHeight: "100%",
  letterSpacing: "0",
  color: "#14AEFF",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "opacity 200ms ease",
  ":hover": {
    opacity: 0.9,
  },
})

// 닫기 버튼
export const mobileCloseBtn = style({
  fontSize: "24px",
  color: "#272727",
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  transition: "opacity 200ms ease",
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    opacity: 0.6,
  },
})

// 네비게이션
export const mobileNav = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "40px",
})

// 네비게이션 아이템
export const mobileNavItem = style({
  display: "flex",
  flexDirection: "column",
})

// 메인 메뉴
export const mobileNavMain = style({
  display: "block",
  textDecoration: "none",
  cursor: "default",
})

// 메인 메뉴 텍스트
export const mobileNavMainText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "20px",
  fontWeight: "500",
  color: "#14AEFF",
  lineHeight: "150%", // 30px
  letterSpacing: "0",
})

// 화살표
export const mobileNavArrow = style({
  fontSize: "12px",
  color: "#1AA4F4",
  transition: "transform 200ms ease",
  display: "inline-block",
})

// 서브메뉴 컨테이너
export const mobileNavSub = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: "20px",
  paddingLeft: "0",
  animation: "slideDown 200ms ease-out",
})

// 슬라이드 다운 애니메이션
const slideDown = keyframes({
  from: {
    opacity: 0,
    maxHeight: "0",
  },
  to: {
    opacity: 1,
    maxHeight: "500px",
  },
})

// 서브메뉴 링크
export const mobileNavSubLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  fontWeight: "200", // 4 Regular 스타일
  color: "#444444", // Colors-Text-Subtle
  textDecoration: "none",
  lineHeight: "150%", // 24px
  letterSpacing: "0",
  transition: "color 200ms ease",
  ":hover": {
    color: "#14AEFF",
  },
})

// 서브메뉴 활성 상태
export const mobileNavSubLinkActive = style({
  color: "#14AEFF",
  fontWeight: "400",
})

// 푸터
export const mobileMenuFooter = style({
  display: "flex",
  justifyContent: "flex-start", // 왼쪽 정렬로 변경
  paddingTop: "24px",
})

// 언어 선택 버튼
export const mobileLangBtn = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "Poppins, sans-serif",
  fontSize: "20px",
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: "100%",
  letterSpacing: "0",
  textAlign: "left",
  color: "#272727",
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  transition: "color 200ms ease",
  ":hover": {
    color: "#272727",
  },
})

// 언어 화살표
export const mobileLangArrow = style({
  fontSize: "14px",
  color: "#6B7280",
  display: "inline-block",
  transition: "transform 200ms ease",
})

// 언어 선택 컨테이너
export const mobileLangContainer = style({
  position: "relative",
  display: "inline-block",
})

// 언어 드롭다운
export const mobileLangDropdown = style({
  position: "absolute",
  bottom: "100%",
  left: 0,
  marginBottom: "12px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E7EB",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  overflow: "hidden",
  minWidth: "60px",
  zIndex: 10,
})

// 언어 옵션
export const mobileLangOption = style({
  display: "block",
  width: "100%",
  padding: "12px 20px",
  fontFamily: "Poppins, sans-serif",
  fontSize: "18px",
  fontWeight: "400",
  color: "#6B7280",
  backgroundColor: "transparent",
  border: "none",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 200ms ease",
  ":hover": {
    backgroundColor: "#F9FAFB",
    color: "#111827",
  },
})

// 언어 옵션 활성 상태
export const mobileLangOptionActive = style({
  backgroundColor: "transparent",
  color: "#111827",
  fontWeight: "500",
})
