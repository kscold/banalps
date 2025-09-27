import { fontFamily } from "@/shared/styles/fonts.css";
import { breakpoints, mvw, vw } from "@/shared/styles/responsive.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "100%",
  cursor: "ew-resize",
  userSelect: "none",
});

export const imageContainer = style({
  position: "relative",
  width: "100%",
  aspectRatio: "790 / 430", // 이미지 영역만의 비율 (라벨 제외)
  overflow: "hidden",
  borderRadius: "8px",
  "@media": {
    [breakpoints.mobile]: {
      borderRadius: "8px",
      height: mvw(200),
    },
  },
});

export const afterImageWrapper = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

export const beforeImageWrapper = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

// 모바일용 라벨 스타일
export const labelsContainerMobile = style({
  position: "absolute",
  bottom: "16px",
  left: "0",
  right: "0",
  display: "flex",
  justifyContent: "space-around",
  pointerEvents: "none",
  zIndex: 10,
  padding: "0 20px",
});

export const labelMobile = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "20px",
  color: "#FFFFFF",
  margin: "0",
  textAlign: "center",
  flex: "0 0 auto",
});

// 데스크탑용 라벨 스타일
export const labelsContainerDesktop = style({
  position: "relative",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  marginTop: "20px",
  padding: "12px 0",
});

export const labelDesktop = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 500,
  fontSize: vw(20),
  lineHeight: "20px",
  color: "#272727",
  margin: "0",
  textAlign: "center",
  flex: "0 0 auto",
});

export const labelsContainerDesktopBlue = style({
  position: "relative",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  marginTop: "0",
  paddingTop: "32px",
  paddingBottom: "12px",
  backgroundColor: "#D5FEFF",
  borderBottomLeftRadius: "12px",
  borderBottomRightRadius: "12px",
  "::before": {
    content: '""',
    position: "absolute",
    top: "-20px",
    left: "0",
    right: "0",
    height: "20px",
    // backgroundColor: "#D5FEFF",
  },
});

// 좌우 페이드 오버레이
export const leftFadeOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "15%",
  height: "100%",
  // background: "linear-gradient(to right, rgba(255, 255, 255, 0.4), transparent)",
  pointerEvents: "none",
});

export const rightFadeOverlay = style({
  position: "absolute",
  top: 0,
  right: 0,
  width: "15%",
  height: "100%",
  // background: "linear-gradient(to left, rgba(255, 255, 255, 0.4), transparent)",
  pointerEvents: "none",
});

// 슬라이더 라인 컨테이너
export const sliderLineContainer = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "2px",
  transform: "translateX(-50%)",
  pointerEvents: "none",
});

// 원 위쪽 선
export const sliderLineTop = style({
  position: "absolute",
  top: 0,
  bottom: `calc(50% + ${vw(32)})`, // 원 반지름(32px) 만큼 아래에서 멈춤
  width: "2px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  "@media": {
    [breakpoints.mobile]: {
      bottom: `calc(50% + ${mvw(15)})`, // 모바일 원 크기에 맞춤
    },
  },
});

// 원 아래쪽 선
export const sliderLineBottom = style({
  position: "absolute",
  top: `calc(50% + ${vw(32)})`, // 원 반지름(32px) 만큼 위에서 시작
  bottom: 0,
  width: "2px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  "@media": {
    [breakpoints.mobile]: {
      top: `calc(50% + ${mvw(15)})`, // 모바일 원 크기에 맞춤
    },
  },
});

// 기존 sliderLine 제거 (사용 안함)
export const sliderLine = style({
  display: "none",
});

export const sliderHandle = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: vw(64),
  height: vw(64),
  backgroundColor: "transparent", // 완전 투명 배경
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid #FFFFFF", // 흰색 테두리만
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)", // 미세한 외곽선
  cursor: "ew-resize",
  pointerEvents: "auto",
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(30),
      height: mvw(30),
      border: "2px solid #FFFFFF",
    },
  },

  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // 호버 시 아주 미세한 배경
    transform: "translate(-50%, -50%) scale(1.05)",
    boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.15)",
  },

  ":active": {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // 클릭 시만 약간의 배경
    transform: "translate(-50%, -50%) scale(0.95)",
  },
});
