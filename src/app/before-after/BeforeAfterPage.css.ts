import { style } from "@vanilla-extract/css";
import {
  breakpoints,
  vw,
  mvw,
} from "../../shared/styles/responsive.css";

// 페이지 전체 컨테이너
export const beforeAfterPage = style({
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
});

// ========== 헤더 섹션 ==========
export const headerSection = style({
  width: "100%",
  padding: `${vw(120)} 0 ${vw(80)} 0`,
  backgroundColor: "#73D5FA",
  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(80)} 0 ${mvw(60)} 0`,
    },
  },
});

export const headerContainer = style({
  width: vw(1920),
  margin: "0 auto",
  padding: `0 ${vw(60)}`,
  textAlign: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1920px",
      padding: "0 60px",
    },
    [breakpoints.desktop]: {
      width: "100%",
      maxWidth: "1200px",
      padding: "0 40px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      padding: `0 ${mvw(24)}`,
    },
  },
});

export const pageTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(48),
  fontWeight: 700,
  lineHeight: "120%",
  color: "#000000",
  marginBottom: vw(16),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "48px",
      marginBottom: "16px",
    },
    [breakpoints.desktop]: {
      fontSize: "42px",
      marginBottom: "14px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(32),
      marginBottom: mvw(12),
    },
  },
});

export const pageSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(20),
  fontWeight: 400,
  lineHeight: "150%",
  color: "#000000",
  opacity: 0.8,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
    },
    [breakpoints.desktop]: {
      fontSize: "18px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
    },
  },
});

// ========== 카테고리 섹션 ==========
export const categorySection = style({
  width: "100%",
  padding: `${vw(60)} 0`,
  backgroundColor: "#FFFFFF",
  borderBottom: "1px solid #E5E5E5",
  position: "sticky",
  top: 0,
  zIndex: 100,
  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(40)} 0`,
    },
  },
});

export const categoryContainer = style({
  width: vw(1920),
  margin: "0 auto",
  padding: `0 ${vw(60)}`,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1920px",
      padding: "0 60px",
    },
    [breakpoints.desktop]: {
      width: "100%",
      maxWidth: "1200px",
      padding: "0 40px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      padding: `0 ${mvw(24)}`,
      overflowX: "auto",
    },
  },
});

export const categoryTabs = style({
  display: "flex",
  gap: vw(24),
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "24px",
    },
    [breakpoints.desktop]: {
      gap: "20px",
    },
    [breakpoints.mobile]: {
      gap: mvw(16),
      justifyContent: "flex-start",
    },
  },
});

export const categoryTab = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(18),
  fontWeight: 400,
  lineHeight: "150%",
  color: "#999999",
  background: "none",
  border: "none",
  padding: `${vw(12)} ${vw(24)}`,
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderRadius: vw(24),
  whiteSpace: "nowrap",
  ":hover": {
    color: "#333333",
    backgroundColor: "#F5F5F5",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      padding: "12px 24px",
      borderRadius: "24px",
    },
    [breakpoints.desktop]: {
      fontSize: "16px",
      padding: "10px 20px",
      borderRadius: "20px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      padding: `${mvw(10)} ${mvw(20)}`,
      borderRadius: mvw(20),
    },
  },
});

export const categoryTabActive = style({
  fontWeight: 600,
  color: "#FFFFFF",
  backgroundColor: "#14AEFF",
  ":hover": {
    color: "#FFFFFF",
    backgroundColor: "#14AEFF",
  },
});

// ========== 콘텐츠 섹션 ==========
export const contentSection = style({
  width: "100%",
  padding: `${vw(80)} 0`,
  backgroundColor: "#FFFFFF",
  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(60)} 0`,
    },
  },
});

export const contentContainer = style({
  width: vw(1920),
  margin: "0 auto",
  padding: `0 ${vw(60)}`,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1920px",
      padding: "0 60px",
    },
    [breakpoints.desktop]: {
      width: "100%",
      maxWidth: "1200px",
      padding: "0 40px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      padding: `0 ${mvw(24)}`,
    },
  },
});

export const beforeAfterGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: vw(40),
  marginBottom: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "40px",
      marginBottom: "80px",
    },
    [breakpoints.desktop]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "30px",
      marginBottom: "60px",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gap: mvw(30),
      marginBottom: mvw(60),
    },
  },
});

export const beforeAfterCard = style({
  backgroundColor: "#FFFFFF",
  borderRadius: vw(16),
  overflow: "hidden",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "16px",
    },
    [breakpoints.desktop]: {
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      borderRadius: mvw(12),
    },
  },
});

export const cardHeader = style({
  padding: vw(24),
  borderBottom: "1px solid #F0F0F0",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "24px",
    },
    [breakpoints.desktop]: {
      padding: "20px",
    },
    [breakpoints.mobile]: {
      padding: mvw(20),
    },
  },
});

export const cardCategory = style({
  display: "inline-block",
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(14),
  fontWeight: 500,
  lineHeight: "150%",
  color: "#14AEFF",
  backgroundColor: "#E8F7FF",
  padding: `${vw(4)} ${vw(12)}`,
  borderRadius: vw(12),
  marginBottom: vw(8),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "14px",
      padding: "4px 12px",
      borderRadius: "12px",
      marginBottom: "8px",
    },
    [breakpoints.desktop]: {
      fontSize: "13px",
      padding: "3px 10px",
      borderRadius: "10px",
      marginBottom: "6px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(12),
      padding: `${mvw(3)} ${mvw(10)}`,
      borderRadius: mvw(10),
      marginBottom: mvw(6),
    },
  },
});

export const cardTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(20),
  fontWeight: 600,
  lineHeight: "150%",
  color: "#000000",
  marginBottom: vw(4),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      marginBottom: "4px",
    },
    [breakpoints.desktop]: {
      fontSize: "18px",
      marginBottom: "3px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      marginBottom: mvw(3),
    },
  },
});

export const cardDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(16),
  fontWeight: 400,
  lineHeight: "150%",
  color: "#666666",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px",
    },
    [breakpoints.desktop]: {
      fontSize: "14px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(13),
    },
  },
});

export const sliderWrapper = style({
  width: "100%",
  padding: vw(24),
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "24px",
    },
    [breakpoints.desktop]: {
      padding: "20px",
    },
    [breakpoints.mobile]: {
      padding: mvw(20),
    },
  },
});

// ========== 더보기 버튼 ==========
export const loadMoreContainer = style({
  display: "flex",
  justifyContent: "center",
  marginTop: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "60px",
    },
    [breakpoints.desktop]: {
      marginTop: "50px",
    },
    [breakpoints.mobile]: {
      marginTop: mvw(40),
    },
  },
});

export const loadMoreButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(18),
  fontWeight: 500,
  lineHeight: "150%",
  color: "#14AEFF",
  backgroundColor: "#FFFFFF",
  border: `2px solid #14AEFF`,
  borderRadius: vw(30),
  padding: `${vw(16)} ${vw(60)}`,
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    color: "#FFFFFF",
    backgroundColor: "#14AEFF",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
      borderRadius: "30px",
      padding: "16px 60px",
    },
    [breakpoints.desktop]: {
      fontSize: "16px",
      borderRadius: "25px",
      padding: "14px 50px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      borderRadius: mvw(25),
      padding: `${mvw(14)} ${mvw(50)}`,
    },
  },
});

// ========== CTA 섹션 ==========
export const ctaSection = style({
  width: "100%",
  padding: `${vw(120)} 0`,
  backgroundColor: "#73D5FA",
  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(80)} 0`,
    },
  },
});

export const ctaContainer = style({
  width: vw(1920),
  margin: "0 auto",
  padding: `0 ${vw(60)}`,
  textAlign: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "1920px",
      padding: "0 60px",
    },
    [breakpoints.desktop]: {
      width: "100%",
      maxWidth: "1200px",
      padding: "0 40px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      padding: `0 ${mvw(24)}`,
    },
  },
});

export const ctaTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(36),
  fontWeight: 600,
  lineHeight: "150%",
  color: "#000000",
  marginBottom: vw(40),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "36px",
      marginBottom: "40px",
    },
    [breakpoints.desktop]: {
      fontSize: "32px",
      marginBottom: "35px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(24),
      marginBottom: mvw(30),
    },
  },
});

export const ctaButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(20),
  fontWeight: 600,
  lineHeight: "150%",
  color: "#FFFFFF",
  backgroundColor: "#000000",
  border: "none",
  borderRadius: vw(30),
  padding: `${vw(20)} ${vw(80)}`,
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#333333",
    transform: "scale(1.05)",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      borderRadius: "30px",
      padding: "20px 80px",
    },
    [breakpoints.desktop]: {
      fontSize: "18px",
      borderRadius: "25px",
      padding: "18px 70px",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      borderRadius: mvw(25),
      padding: `${mvw(16)} ${mvw(60)}`,
    },
  },
});