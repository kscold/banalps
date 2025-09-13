import { style } from "@vanilla-extract/css"
import {
  breakpoints,
  vw,
} from "../../../shared/styles/responsive.css"

// Section2 SVG 컨테이너 스타일 - 제목과 설명 사이에 배치
export const section2SvgContainer = style({
  display: "flex",
  justifyContent: "flex-start", // 왼쪽 정렬
  alignItems: "center",
  marginTop: vw(60),
  marginBottom: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "100%",
      height: "150px",
      marginTop: "40px",
      marginBottom: "40px",
    },
  },
})

export const section2SvgImage = style({
  width: vw(280), // 피그마 디자인 정확한 크기
  height: vw(258), // 피그마 디자인 정확한 크기
  maxWidth: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "150px",
    },
  },
})

export const section2Svg2 = style({
  position: "absolute",
  bottom: vw(100), // 텍스트 영역 하단 밖으로 나가도록
  right: vw(0), // 텍스트 영역의 오른쪽 끝에 맞춤
  width: vw(280), // 피그마 디자인에 맞게 크기 설정
  height: "auto",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      bottom: "-30px",
      right: "0px",
      width: "120px",
    },
  },
})

// Section3 SVG와 텍스트 가로 배치 컨테이너
export const section3SvgContainer = style({
  display: "flex",
  alignItems: "flex-end", // SVG와 텍스트의 바닥 라인 맞춤
  gap: vw(60), // SVG와 텍스트 사이 간격
  marginTop: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "60px",
      marginTop: "60px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "30px",
      marginTop: "40px",
    },
  },
})

// Section3 텍스트 영역 스타일
export const section3TextArea = style({
  flex: 1,
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
})

export const section3SvgImage = style({
  width: vw(280), // 피그마 디자인 정확한 크기
  height: vw(226), // 피그마 디자인 정확한 크기
  maxWidth: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "150px",
      height: "auto",
    },
  },
})
