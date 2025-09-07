import { style } from "@vanilla-extract/css"
import { fontFamily, fontWeight } from "../../shared/styles/fonts.css"
import { tokens } from "../../shared/styles/tokens.css"

// 메인 컨테이너 - 100vh 고정
export const heroContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: tokens.viewport.height, // 100vh
  zIndex: tokens.zIndex.base,
  overflow: "hidden",
})

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
})

// 비디오 컨테이너
export const vimeoContainer = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: tokens.zIndex.base,
  overflow: "hidden",
})

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
})

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
})

// 비디오 오버레이
export const videoOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: tokens.zIndex.video,
})

// 파란색 섹션 오버레이 - 비디오 이후 스크롤 시 표시
export const blueSectionOverlay = style({
  position: "relative",
  width: "100%",
  zIndex: tokens.zIndex.video + 10, // 비디오보다 훨씬 위에 표시
  backgroundColor: "transparent",
})

// 콘텐츠 래퍼 - 피그마 디자인 위치에 고정 (오른쪽 아래쪽)
export const contentWrapper = style({
  position: "absolute",
  top: "50%",
  right: "10%", // 오른쪽에서 10% 위치
  transform: "translateY(-50%)", // 수직 중앙 정렬
  zIndex: tokens.zIndex.content,
  width: "auto",
  maxWidth: "600px",
  display: "flex",
  alignItems: "flex-end", // 하단 정렬
  justifyContent: "flex-end", // 오른쪽 정렬
  padding: "0 2rem",
  "@media": {
    [`screen and (max-width: ${tokens.breakpoints.desktop})`]: {
      right: "5%",
      maxWidth: "500px",
    },
    [`screen and (max-width: 1024px)`]: {
      position: "fixed",
      top: "240px",
      left: "16px",
      right: "auto",
      transform: "none",
      width: "343px",
      height: "184px",
      maxWidth: "none",
      padding: 0,
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    [`screen and (max-width: ${tokens.breakpoints.mobile})`]: {
      position: "fixed",
      top: "240px",
      left: "16px",
      right: "auto",
      transform: "none",
      width: "343px",
      height: "184px",
      maxWidth: "none",
      padding: 0,
    },
  },
})

// 텍스트 콘텐츠 컨테이너 - 피그마 디자인 크기
export const textContent = style({
  width: "439px",
  height: "570px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: tokens.zIndex.content,
  alignItems: "flex-end", // 오른쪽 정렬
  justifyContent: "center", // 중앙 정렬
  "@media": {
    [`screen and (max-width: ${tokens.breakpoints.desktop})`]: {
      width: "100%",
      maxWidth: "439px",
      alignItems: "flex-end",
    },
    [`screen and (max-width: 1024px)`]: {
      width: "100%",
      height: "100%",
      maxWidth: "none",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    [`screen and (max-width: ${tokens.breakpoints.mobile})`]: {
      width: "100%",
      height: "100%",
      maxWidth: "none",
      alignItems: "flex-start",
    },
  },
})

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
    [`screen and (max-width: 1024px)`]: {
      position: "relative",
      top: "auto",
      right: "auto",
      transform: "none",
      width: "100%",
      height: "auto",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  },
})

// 스토리 텍스트 - S-Core Dream, Regular (200)
export const storyText = style({
  fontFamily: fontFamily.scdream,
  fontSize: "20px",
  lineHeight: "150%", // 30px
  color: tokens.colors.white, // 흰색

  letterSpacing: "0%",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
  margin: 0,
  position: "relative",
  zIndex: tokens.zIndex.text,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textAlign: "right", // 오른쪽 정렬
  display: "block",
  width: "100%",

  "@media": {
    [`screen and (max-width: 1024px)`]: {
      textAlign: "left", // 모바일에서 왼쪽 정렬
      fontSize: "18px",
      lineHeight: "27px",
    },
    [`screen and (max-width: ${tokens.breakpoints.mobile})`]: {
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "left",
    },
  },
})
