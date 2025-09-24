import { style } from "@vanilla-extract/css";

// 컨테이너 스타일
export const container = style({
  width: "100%",
  height: "100%",
});

// 스크롤 인디케이터 컨테이너
export const scrollIndicator = style({
  position: "fixed",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "8px",
});

// 스크롤 인디케이터 점
export const indicatorDot = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  transition: "all 0.3s ease",
});

// 활성화된 스크롤 인디케이터 점
export const indicatorDotActive = style({
  width: "32px",
  height: "8px",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  transition: "all 0.3s ease",
});
