import { style } from "@vanilla-extract/css"

import { fontFamily } from "../../shared/styles/fonts.css"
import { tokens } from "../../shared/styles/tokens.css"
import { breakpoints, vw } from "../../shared/styles/responsive.css"
import { mvw } from "@/shared/styles/responsive.utils"

// 메인 컨테이너 - 100vh 고정
export const heroContainer = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  zIndex: 1,
  overflow: "hidden",
  // 모바일 터치 스크롤 최적화
  WebkitOverflowScrolling: "touch",
  "@media": {
    [breakpoints.mobile]: {
      position: "relative", // 모바일에서는 relative로 변경
      overflow: "hidden", // 모바일에서도 overflow hidden
      height: "100vh", // 명시적으로 100vh 설정
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#000" // 배경 검은색 추가
    },
  },
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
  "@media": {
    [breakpoints.mobile]: {
      position: "absolute",
      height: "100%",
    },
  },
})

// 배경 비디오 - Vimeo
export const backgroundVideo = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: 0,
  pointerEvents: "none", // 비디오 컨테이너도 이벤트 차단하지 않도록
  "@media": {
    [breakpoints.mobile]: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },
  },
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
  width: "177.77vh", // 16:9 비율 (100vh * 16/9)
  height: "100vh",
  minWidth: "100vw",
  minHeight: "100vh",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  zIndex: tokens.zIndex.video,
  "@media": {
    [breakpoints.mobile]: {
      width: "100vw",
      height: "56.25vw", // 모바일에서는 가로 기준
      minHeight: "100vh",
    },
  },
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
  "@media": {
    [breakpoints.mobile]: {
      position: "relative",
      overflow: "visible",
      minHeight: "100vh",
    },
  },
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
})

// 콘텐츠 래퍼 - 피그마 디자인 위치에 고정 (오른쪽 아래쪽)
export const contentWrapper = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)", // 수직 중앙 정렬
  zIndex: tokens.zIndex.content,
  width: "auto",
  display: "flex",
  pointerEvents: "none", // 텍스트 영역이 스크롤 이벤트를 차단하지 않도록
  alignItems: "flex-end", // 하단 정렬
  justifyContent: "flex-end", // 오른쪽 정렬
  right: vw(356), // vw로 비례 스케일링
  maxWidth: vw(600), // vw로 비례 스케일링
  padding: `0 ${vw(32)}`, // vw로 비례 스케일링

  "@media": {
    // desktopLarge: 1920px 이상 (고정 위치)
    [breakpoints.desktopLarge]: {
      right: "calc(50% - 960px + 192px)", // 화면 중앙 기준으로 1920px 컨테이너 내에서 192px
      maxWidth: "600px", // 고정 픽셀값
      padding: "0 32px", // 고정 픽셀값
    },
    // desktop: 1024px ~ 1919px (비례 스케일링)
    [breakpoints.desktop]: {},
    // mobile: max-width 1023px
    [breakpoints.mobile]: {
      position: "absolute",
      top: "30%",
      left: mvw(16),
      right: "auto",
      maxWidth: "none",
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
    },
  },
})

// 텍스트 콘텐츠 컨테이너 - 피그마 디자인 크기
export const textContent = style({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: tokens.zIndex.content,
  alignItems: "flex-end", // 오른쪽 정렬
  justifyContent: "center", // 중앙 정렬
  pointerEvents: "auto", // 텍스트는 선택 가능하도록

  // 기본값 (모바일 우선)
  width: vw(439),
  height: vw(570),

  "@media": {
    // desktop: 1024px ~ 1919px (비례 스케일링)
    [breakpoints.desktop]: {
      width: vw(439), // vw로 비례 스케일링
      height: vw(570), // vw로 비례 스케일링
    },
    // desktopLarge: 1920px 이상 (고정 크기)
    [breakpoints.desktopLarge]: {
      width: "439px", // 고정 픽셀값
      height: "570px", // 고정 픽셀값
    },
    // mobile: max-width 1023px
    [breakpoints.mobile]: {
      width: "auto",
      height: "auto",
      maxWidth: "none",
      alignItems: "center",
      justifyContent: "center",
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
    [breakpoints.mobile]: {
      position: "absolute", // absolute 유지
      top: "50%",
      left: "50%",
      right: "auto",
      transform: "translate(-50%, -50%)", // 중앙 정렬
      width: "90vw", // 뷰포트 너비의 90%로 고정
      maxWidth: "800px", // 최대 너비를 더 크게 설정 (태블릿 대응)
      height: "auto",
      textAlign: "center", // 중앙 정렬
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "0 20px", // 좌우 패딩 추가
    },
  },
})

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
  textAlign: "left", // 오른쪽 정렬
  display: "block",
  width: "100%",

  "@media": {
    [breakpoints.mobile]: {
      textAlign: "left", // 모바일에서 중앙 정렬
      fontSize: "clamp(14px, 4vw, 20px)", // 반응형 폰트 크기
      lineHeight: "1.5",
      whiteSpace: "pre-wrap", // br 태그를 사용한 줄바꿈은 허용하되 자동 줄바꿈은 방지
      wordBreak: "keep-all", // 한글 단어 단위로 줄바꿈
    },
  },
})
