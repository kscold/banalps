import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/shared/styles/responsive.css";

<<<<<<< Updated upstream
// 스크롤 스냅 컨테이너
=======
// 스크롤 스냅 컨테이너 - 성능 최적화
>>>>>>> Stashed changes
export const container = style({
  height: "100vh",
  overflowY: "scroll",
  scrollSnapType: "y proximity",
  scrollBehavior: "smooth",
  WebkitOverflowScrolling: "touch",
  backgroundColor: "#000",
<<<<<<< Updated upstream
  zIndex: 1, // 낮은 z-index로 설정하여 모달이 위에 표시되도록
  "@media": {
    [breakpoints.mobile]: {
      scrollSnapType: "none", // 모바일에서는 스크롤 스냅 비활성화
=======
  zIndex: 1,
  willChange: "scroll-position", // 스크롤 성능 최적화
  contain: "layout style paint", // 렌더링 최적화
  "@media": {
    [breakpoints.mobile]: {
      scrollSnapType: "none",
>>>>>>> Stashed changes
    },
  },
});

<<<<<<< Updated upstream
// 각 섹션 - 풀스크린 스냅
=======
// 각 섹션 - 풀스크린 스냅 with GPU 가속
>>>>>>> Stashed changes
export const section = style({
  height: "100vh",
  width: "100%",
  scrollSnapAlign: "start",
  position: "relative",
<<<<<<< Updated upstream
  "@media": {
    [breakpoints.mobile]: {
      scrollSnapAlign: "none", // 모바일에서는 스냅 비활성화
=======
  transform: "translateZ(0)", // GPU 가속
  backfaceVisibility: "hidden", // 깜빡임 방지
  willChange: "transform, opacity", // 전환 애니메이션 최적화
  "@media": {
    [breakpoints.mobile]: {
      scrollSnapAlign: "none",
>>>>>>> Stashed changes
    },
  },
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
  "@media": {
    [breakpoints.mobile]: {
      scrollSnapAlign: "none", // 모바일에서는 스냅 비활성화
    },
  },
});
