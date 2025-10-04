import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/shared/styles/responsive.css";

// 스크롤 컨테이너 - 성능 최적화 (스냅 제거)
export const container = style({
  height: "100vh",
  overflowY: "scroll",
  scrollBehavior: "smooth",
  WebkitOverflowScrolling: "touch",
  backgroundColor: "#000",
  zIndex: 1,
  willChange: "scroll-position", // 스크롤 성능 최적화
  contain: "layout style paint", // 렌더링 최적화
});

// 각 섹션 - 풀스크린 with GPU 가속 (스냅 제거)
export const section = style({
  height: "100vh",
  width: "100%",
  position: "relative",
  transform: "translateZ(0)", // GPU 가속
  backfaceVisibility: "hidden", // 깜빡임 방지
  willChange: "transform, opacity", // 전환 애니메이션 최적화
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
  position: "relative",
  backgroundColor: "white",
  zIndex: 1,
});
