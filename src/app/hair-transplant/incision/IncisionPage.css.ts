import { style } from "@vanilla-extract/css"
import {
  breakpoints,
  vw,
  responsiveSplitContainer,
} from "../../../shared/styles/responsive.css"

// Section2 SVG 컨테이너 스타일 - 제목과 설명 사이에 배치
export const section2SvgContainer = style({
  display: "flex",
  justifyContent: "flex-start", // 왼쪽 정렬
  alignItems: "center",
  marginTop: vw(60),
  marginBottom: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "60px",
      marginBottom: "60px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "150px",
      marginTop: "40px",
      marginBottom: "40px",
    },
  },
})

export const section2SvgImage = style({
  width: vw(566), // 피그마 디자인 정확한 크기
  height: vw(326), // 피그마 디자인 정확한 크기
  maxWidth: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "150px",
      height: "auto",
    },
  },
})

export const section2Svg2 = style({
  position: "absolute",
  bottom: vw(200), // 텍스트 영역 하단 밖으로 나가도록
  right: vw(0), // 텍스트 영역의 오른쪽 끝에 맞춤
  width: vw(566), // 피그마 디자인에 맞게 크기 설정
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

// Section3 절대 위치 SVG - 텍스트 영역 내부에 배치
export const section3SvgContainer = style({
  position: "absolute",
  bottom: vw(0), // 텍스트 영역 하단 밖으로 나가도록
  left: vw(-20), // 텍스트 영역의 왼쪽으로 삐져나가도록
  width: vw(745), // 피그마 디자인에 맞게 크기 설정
  height: "auto",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      bottom: "-40px",
      left: "-50px",
      width: "150px",
    },
  },
})

export const section3Content = style({
  ...responsiveSplitContainer(), // section1/section2와 동일한 좌우 분할 컨테이너
  position: "relative", // 중앙 SVG를 절대 위치로 배치하기 위해
  height: vw(810),
  alignItems: "flex-start", // 위쪽 정렬로 콘텐츠가 아래로 늘어나도록
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "810px",
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
  width: vw(745), // 피그마 디자인 정확한 크기
  height: vw(332), // 피그마 디자인 정확한 크기
  maxWidth: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "150px",
      height: "auto",
    },
  },
})

// Section3 우측 이미지 크기 제약으로 위치 조정
export const section3RightCustom = style({
  alignItems: "flex-start",
  width: vw(610), // 이미지 컨테이너 너비
  height: vw(550), // 이미지 컨테이너 높이
  marginTop: vw(50),
  marginLeft: vw(190),
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
    },
  },
})

// Section3 이미지 컨테이너 크기 조정
export const section3ImageContainerCustom = style({
  width: "100%", // 부모 컨테이너에 맞춤
  height: "100%", // 부모 컨테이너에 맞춤
  overflow: "hidden", // 넘치는 부분 숨김
  "@media": {
    [breakpoints.mobile]: {
      height: "auto",
    },
  },
})

// Section3 이미지 자체 크기 조정
export const section3ImageCustom = style({
  width: "100%", // 부모 컨테이너에 맞춤
  height: "100%", // 부모 컨테이너에 맞춤
  objectFit: "cover", // 이미지 비율 유지하면서 영역에 맞춤
  "@media": {
    [breakpoints.mobile]: {
      height: "auto",
      objectFit: "contain",
    },
  },
})
