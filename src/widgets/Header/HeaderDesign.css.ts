import { style } from "@vanilla-extract/css"

export const header = style({
  position: "fixed",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 50,
  width: "90%",
  maxWidth: "1600px",
  height: "85px",
  background: "#1AA4F4D9",
  boxShadow: "0 4px 20px rgba(26, 164, 244, 0.3)",
  backdropFilter: "blur(10px)",
  borderRadius: "128px",
  transition: "all 300ms ease",
  "@media": {
    "screen and (max-width: 1024px)": {
      width: "95%",
      borderRadius: "64px",
    },
    "screen and (max-width: 768px)": {
      width: "95%",
      borderRadius: "42px",
      height: "70px",
      top: "15px",
    },
  },
})

// 헤더 뒤쪽에 나타나는 흰색 커튼 효과
export const headerCurtain = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 45, // 헤더보다 낮은 z-index
  width: "100%",
  height: "0px",
  background: "#FFFFFF",
  transition: "all 400ms ease",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "140px", // 헤더 높이 + 여백
  overflow: "hidden", // 높이가 0일 때 내용 숨기기
  opacity: 0,
  visibility: "hidden",
  selectors: {
    [`${header}:hover ~ &`]: {
      height: "440px",
      opacity: 1,
      visibility: "visible",
    },
  },
})

// 서브메뉴 컨테이너
export const submenuContainer = style({
  display: "flex",
  justifyContent: "space-between", // space-between으로 균등 배치
  width: "100%",
  maxWidth: "1480px", // 헤더와 동일한 너비
  margin: "0 auto",
  padding: "0 60px",
  boxSizing: "border-box",
  opacity: 0,
  transform: "translateY(-20px)",
  transition: "all 300ms ease",
  selectors: {
    [`${header}:hover ~ ${headerCurtain} &`]: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@media": {
    "screen and (max-width: 1680px)": {
      padding: "0 40px",
    },
    "screen and (max-width: 1200px)": {
      padding: "0 30px",
    },
  },
})

// 서브메뉴 그룹
export const submenuGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  minWidth: "143px",
  flex: "0 0 auto",
})

// 서브메뉴 타이틀
export const submenuTitle = style({
  fontFamily: "'S-Core Dream', 'Pretendard', Inter, sans-serif",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "26px", // 160% of 16px
  letterSpacing: "0",
  color: "#333333",
  marginBottom: "12px",
  position: "relative",
  paddingBottom: "10px",
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "62px",
      height: "2px",
      backgroundColor: "#14AEFF",
    },
  },
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
  width: "1480px",
  height: "35px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
})

export const logoWrapper = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
})

export const logoImage = style({
  height: "35px",
  width: "auto",
  filter: "brightness(0) invert(1)", // 로고를 흰색으로 변경
})

export const logoText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "18px",
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: "27px",
  letterSpacing: "0",
  color: "#FFFFFF",
  textDecoration: "none",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "all 150ms ease",
  ":hover": {
    transform: "scale(1.02)",
    textShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
  },
  "@media": {
    "screen and (max-width: 1200px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
    "screen and (max-width: 1024px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      lineHeight: "21px",
    },
  },
})

export const desktopNav = style({
  display: "none",
  alignItems: "center",
  gap: "2.5rem",
  height: "100%",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
    },
  },
})

export const navLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "27px",
  letterSpacing: "0",
  padding: "0.75rem 1.25rem",
  borderRadius: "12px",
  transition: "all 200ms ease",
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 1200px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
    "screen and (max-width: 1024px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      lineHeight: "21px",
    },
  },
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

export const dropdownItem = style({
  display: "block",
  padding: "6px 0",
  color: "#666666",
  textDecoration: "none",
  fontFamily: "'S-Core Dream', 'Pretendard', Inter, sans-serif",
  fontSize: "16px",
  fontWeight: "200", // Regular weight for S-Core Dream
  lineHeight: "26px", // 160% of 16px
  letterSpacing: "0",
  transition: "all 200ms ease",
  ":hover": {
    color: "#14AEFF",
    transform: "translateX(3px)",
  },
})

export const actionButtons = style({
  display: "none",
  alignItems: "center",
  gap: "1rem",
  height: "100%",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
    },
  },
})

export const loginButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "27px",
  letterSpacing: "0",
  backgroundColor: "transparent",
  border: "none",
  padding: "0.75rem 1.5rem",
  cursor: "pointer",
  transition: "all 300ms ease",
  position: "relative",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 1200px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
    "screen and (max-width: 1024px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      lineHeight: "21px",
      padding: "0.5rem 1rem",
    },
  },
})

export const consultButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: "#FFFFFF",
  padding: "0.75rem 2rem",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "27px",
  letterSpacing: "0",
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
    "screen and (max-width: 1200px)": {
      fontSize: "18px",
      lineHeight: "27px",
    },
    "screen and (max-width: 1024px)": {
      fontSize: "16px",
      lineHeight: "24px",
      padding: "0.5rem 1.5rem",
    },
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      lineHeight: "21px",
      padding: "0.5rem 1rem",
    },
  },
})

export const dropdownArrow = style({
  fontSize: "14px",
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
  background: "linear-gradient(135deg, #1AA4F4F0 0%, #14AEFFF0 100%)",
  backdropFilter: "blur(20px)",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(26, 164, 244, 0.2)",
  padding: "1.5rem 0",
})

export const mobileNavLink = style({
  display: "block",
  padding: "1rem 2rem",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "500",
  transition: "all 200ms ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingLeft: "2.5rem",
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
