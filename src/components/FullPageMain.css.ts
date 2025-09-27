import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/shared/styles/responsive.css";

export const container = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "visible", // 스크롤 허용
});

export const fixedLayer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  // 중요: 헤더(50)와 플로팅 버튼(10000)보다 훨씬 낮은 z-index
  zIndex: 10,
  // 터치 이벤트를 통과시키도록 설정
  pointerEvents: "none",
  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서 터치 이벤트가 제대로 작동하도록
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      pointerEvents: "none", // 모바일에서도 터치 이벤트 통과
      // 모바일에서 스크롤과 터치가 가능하도록
      WebkitOverflowScrolling: "touch",
    },
  },
});

export const sectionWrapper = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  // 섹션 내부의 터치 이벤트는 통과시킴
  pointerEvents: "none",
});

export const contentSection = style({
  position: "relative",
  backgroundColor: "white",
  minHeight: "100vh",
  paddingTop: 0,
  marginTop: 0,
  top: 0,
  width: "100%",
  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서 스크롤 최적화
      WebkitOverflowScrolling: "touch",
      overflowY: "auto",
    },
  },
});