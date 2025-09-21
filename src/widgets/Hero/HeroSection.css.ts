import { style } from "@vanilla-extract/css";

import { fontFamily } from "../../shared/styles/fonts.css";
import { tokens } from "../../shared/styles/tokens.css";
import { breakpoints, vw } from "../../shared/styles/responsive.css";
import { mvw } from "@/shared/styles/responsive.utils";

// 메인 컨테이너 - 100vh 고정
export const heroContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: tokens.viewport.height, // 100vh
  zIndex: tokens.zIndex.base,
  overflow: "hidden",
  "@media": {
    [breakpoints.mobile]: {
      position: "relative", // 모바일에서는 relative로 변경
      overflow: "hidden", // 모바일에서도 overflow hidden
      height: "100vh", // 명시적으로 100vh 설정
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#000", // 배경 검은색 추가
    },
  },
});

// 배경 이미지 - 고정
export const backgroundImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  zIndex: tokens.zIndex.base,
  "@media": {
    [breakpoints.mobile]: {
      position: "absolute",
      height: "100%",
    },
  },
});

// 비디오 컨테이너
export const vimeoContainer = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: tokens.zIndex.base,
  overflow: "hidden",
});

// 비디오 iframe
export const vimeoIframe = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  height: "56.25vw",
  minHeight: "100vh",
  minWidth: "177.77vh",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  zIndex: tokens.zIndex.video,
});

// 비디오 섹션 - 전체 화면 차지
export const videoSection = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: tokens.zIndex.video,
  backgroundColor: tokens.colors.black,
  "@media": {
    [breakpoints.mobile]: {
      position: "relative",
      overflow: "visible",
      minHeight: "100vh",
    },
  },
});

// 비디오 오버레이
export const videoOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: tokens.zIndex.video,
});

// 파란색 섹션 오버레이 - 비디오 이후 스크롤 시 표시
export const blueSectionOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  zIndex: tokens.zIndex.video + 10, // 비디오보다 훨씬 위에 표시
  backgroundColor: "transparent",
  overflow: "hidden", // 스크롤을 BlueSection 내부에서 처리
  "@media": {
    [breakpoints.mobile]: {
      position: "relative",
      height: "auto",
      overflow: "visible", // 모바일에서 스크롤 가능
    },
  },
});

// 콘텐츠 래퍼 - 피그마 디자인 위치에 고정 (오른쪽 아래쪽)
export const contentWrapper = style({
  position: "absolute",
  top: "50%",
  right: vw(192), // 1920px 기준 오른쪽에서 192px (10%)
  transform: "translateY(-50%)", // 수직 중앙 정렬
  zIndex: tokens.zIndex.content,
  width: "auto",
  maxWidth: vw(600), // 1920px 기준 600px
  display: "flex",
  alignItems: "flex-end", // 하단 정렬
  justifyContent: "flex-end", // 오른쪽 정렬
  padding: `0 ${vw(32)}`, // 1920px 기준 32px
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      position: "absolute", // absolute로 변경
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // 중앙 정렬
      right: "auto",
      width: "90%",
      maxWidth: "none",
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

// 텍스트 콘텐츠 컨테이너 - 피그마 디자인 크기
export const textContent = style({
  width: vw(439),
  height: vw(570),
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: tokens.zIndex.content,
  alignItems: "flex-end", // 오른쪽 정렬
  justifyContent: "center", // 중앙 정렬
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      width: "auto",
      height: "auto",
      maxWidth: "none",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

// 텍스트 블록 - 기본 상태 (애니메이션 없음)
export const textBlock = style({
  position: "absolute", // 절대 위치
  top: "50%", // 중앙 정렬
  right: "0px",
  transform: "translateY(-50%)", // 수직 중앙 정렬
  opacity: 1, // 기본적으로 보임
  zIndex: tokens.zIndex.text,
  width: "100%",
  textAlign: "right", // 오른쪽 정렬
  "@media": {
    [breakpoints.mobile]: {
      position: "relative",
      top: 0,
      right: 0,
      transform: "none",
      width: "100%",
      height: "auto",
      textAlign: "center", // 중앙 정렬
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  },
});

// 스토리 텍스트 - S-Core Dream, Regular (200)
export const storyText = style({
  fontFamily: fontFamily.scdream,
  fontSize: vw(20),
  lineHeight: "150%", // 30px
  color: tokens.colors.white, // 흰색
  letterSpacing: "0%",
  margin: 0,
  position: "relative",
  zIndex: tokens.zIndex.text,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textAlign: "right", // 오른쪽 정렬
  display: "block",
  width: "100%",

  "@media": {
    [breakpoints.mobile]: {
      textAlign: "left", // 모바일에서 왼쪽 정렬
      fontSize: mvw(16),
      lineHeight: mvw(24),
    },
  },
});
