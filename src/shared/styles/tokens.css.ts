import { style } from "@vanilla-extract/css"

// 반응형 12 그리드 시스템 기반 전역 토큰
export const tokens = {
  // 뷰포트 단위
  viewport: {
    height: "100vh",
    width: "100vw",
  },

  // 스크롤 섹션 높이 (실제 요소 높이 기반)
  scroll: {
    // 기본 스크롤 단위: 100px (12 그리드의 1/12)
    unit: "100px",
    // Hero 섹션 총 높이: 600px (6개 텍스트 × 100px)
    heroTotal: "600px",
    // 컨테이너 높이: 실제 요소 높이만큼만 (600px)
    containerHeight: "600px", // 실제 요소 높이에 맞춤
  },

  // 반응형 12 그리드 시스템 (375px 최소 ~ 데스크탑)
  grid: {
    columns: 12,
    gap: "1rem",

    // 모바일 (375px ~ 1023px) - 태블릿 포함
    mobile: {
      min: "375px",
      max: "1023px",
      col1: "31.25px", // 375px ÷ 12 = 31.25px
      col2: "62.5px", // 31.25px × 2
      col3: "93.75px", // 31.25px × 3
      col4: "125px", // 31.25px × 4
      col5: "156.25px", // 31.25px × 5
      col6: "187.5px", // 31.25px × 6
      col7: "218.75px", // 31.25px × 7
      col8: "250px", // 31.25px × 8
      col9: "281.25px", // 31.25px × 9
      col10: "312.5px", // 31.25px × 10
      col11: "343.75px", // 31.25px × 11
      col12: "375px", // 31.25px × 12
    },


    // 데스크탑 (1024px+)
    desktop: {
      min: "1024px",
      col1: "85.33px", // 1024px ÷ 12 = 85.33px
      col2: "170.67px", // 85.33px × 2
      col3: "256px", // 85.33px × 3
      col4: "341.33px", // 85.33px × 4
      col5: "426.67px", // 85.33px × 5
      col6: "512px", // 85.33px × 6
      col7: "597.33px", // 85.33px × 7
      col8: "682.67px", // 85.33px × 8
      col9: "768px", // 85.33px × 9
      col10: "853.33px", // 85.33px × 10
      col11: "938.67px", // 85.33px × 11
      col12: "1024px", // 85.33px × 12
    },
  },

  // Z-Index 레이어 (헤더가 항상 최상위)
  zIndex: {
    base: 1,
    video: 2,
    overlay: 3,
    content: 1000,
    text: 1003,
    header: 9999, // 헤더는 항상 최상위
  },

  // 애니메이션 지속시간
  animation: {
    fast: "0.3s",
    normal: "0.6s",
    slow: "0.8s",
    verySlow: "1.2s",
  },

  // 색상
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent",
  },

  // 반응형 브레이크포인트
  breakpoints: {
    mobile: "375px",
    desktop: "1024px",
  },
}

// 유틸리티 클래스들
export const utilities = {
  // 뷰포트 높이 유틸리티
  vh100: style({ height: "100vh" }),
  vh200: style({ height: "200vh" }),
  vh300: style({ height: "300vh" }),
  vh400: style({ height: "400vh" }),
  vh500: style({ height: "500vh" }),
  vh600: style({ height: "600vh" }),

  // 실제 요소 높이 유틸리티
  h600: style({ height: "600px" }), // 12 그리드 기반 실제 높이

  // 반응형 그리드 컬럼 유틸리티
  // 모바일 (375px 기준)
  col1: style({ width: tokens.grid.mobile.col1 }),
  col2: style({ width: tokens.grid.mobile.col2 }),
  col3: style({ width: tokens.grid.mobile.col3 }),
  col4: style({ width: tokens.grid.mobile.col4 }),
  col5: style({ width: tokens.grid.mobile.col5 }),
  col6: style({ width: tokens.grid.mobile.col6 }),
  col7: style({ width: tokens.grid.mobile.col7 }),
  col8: style({ width: tokens.grid.mobile.col8 }),
  col9: style({ width: tokens.grid.mobile.col9 }),
  col10: style({ width: tokens.grid.mobile.col10 }),
  col11: style({ width: tokens.grid.mobile.col11 }),
  col12: style({ width: tokens.grid.mobile.col12 }),

  // 위치 유틸리티
  fixed: style({ position: "fixed" }),
  relative: style({ position: "relative" }),
  absolute: style({ position: "absolute" }),

  // z-index 유틸리티
  z1: style({ zIndex: tokens.zIndex.base }),
  z2: style({ zIndex: tokens.zIndex.video }),
  z3: style({ zIndex: tokens.zIndex.overlay }),
  z1000: style({ zIndex: tokens.zIndex.content }),
  z1003: style({ zIndex: tokens.zIndex.text }),
  z9999: style({ zIndex: tokens.zIndex.header }),
}
