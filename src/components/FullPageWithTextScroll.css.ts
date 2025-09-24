import { style } from "@vanilla-extract/css";

// 컨테이너 스타일
export const container = style({
  position: "relative",
  minHeight: "400vh",
  overflow: "hidden",
});

// 디버그 정보 스타일
export const debugInfo = style({
  position: "fixed",
  top: "16px",
  left: "16px",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  color: "#FFFFFF",
  padding: "12px",
  borderRadius: "8px",
  zIndex: 50,
  fontSize: "12px",
  fontFamily: "monospace",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

// 고정 레이어 스타일
export const fixedLayer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  overflow: "hidden",
});

// 히어로 섹션 스타일
export const heroSection = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

// 비디오 섹션 스타일
export const videoSection = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

// 스페이서 스타일
export const spacer = style({
  height: "160vh",
});

// 콘텐츠 섹션 스타일
export const contentSection = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#FFFFFF",
  overflow: "auto",
  height: "100vh",
  marginTop: 0,
});

// 콘텐츠 래퍼 스타일
export const contentWrapper = style({
  minHeight: "100vh",
});

// 실제 스크롤을 위한 공간
export const scrollSpace = style({
  height: "240vh",
});
