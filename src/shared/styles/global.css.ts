import { globalStyle } from "@vanilla-extract/css";
import { breakpoints } from "./responsive.css";

// 1920px 이상에서 vw 단위 고정을 위한 전역 설정
globalStyle("html", {
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 최대 너비 제한
      maxWidth: "none !important",
      width: "100% !important",
    },
  },
});

// 전역 CSS 변수 설정
globalStyle(":root", {
  // 1920px 기준 디자인 변수
  "--design-base-width": "1920",
  
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서는 모든 vw 계산을 px로 고정
      fontSize: "16px !important", // 기본 폰트 크기 고정
    },
  },
});

// 모든 요소에 대한 기본 설정
globalStyle("*", {
  boxSizing: "border-box",
});

// 바디 기본 설정  
globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily: "'S-Core Dream', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      maxWidth: "none !important",
    },
  },
});