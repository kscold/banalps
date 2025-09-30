import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/shared/styles/responsive.css";

// 스크롤 스냅 컨테이너
export const container = style({
  height: "100vh",
  overflowY: "scroll",
  scrollSnapType: "y proximity",
  scrollBehavior: "smooth",
  WebkitOverflowScrolling: "touch",
  backgroundColor: "#000",
});

// 각 섹션 - 풀스크린 스냅
export const section = style({
  height: "100vh",
  width: "100%",
  scrollSnapAlign: "start",
  position: "relative",
});

// Hero 섹션
export const heroSection = style([
  section,
  {
    zIndex: 1,
  },
]);

// Video 섹션
export const videoSection = style([
  section,
  {
    zIndex: 1,
  },
]);

// Content 섹션
export const contentSection = style({
  minHeight: "100vh",
  width: "100%",
  scrollSnapAlign: "start",
  position: "relative",
  backgroundColor: "white",
  zIndex: 1,
});
