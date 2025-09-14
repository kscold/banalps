import { style } from "@vanilla-extract/css"
import { breakpoints, vw } from "../../../shared/styles/responsive.css"

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

// Section3 커스텀 스타일
export const section3Content = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vw(140),
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: "140px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "60px",
    },
  },
})

export const section3LeftCustom = style({
  flex: "0 0 auto",
  width: vw(750),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "750px",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
})

export const section3RightCustom = style({
  alignItems: "flex-start",
  width: vw(610),
  height: vw(550),
  marginTop: vw(50),
  marginLeft: vw(190),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "610px",
      height: "550px",
      marginTop: "50px",
      marginLeft: "190px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "auto",
      marginTop: "0px",
      marginLeft: "0px",
    },
  },
})

export const section3ImageCustom = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: vw(24),
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "24px",
    },
    [breakpoints.mobile]: {
      borderRadius: "16px",
    },
  },
})

// Section3 SVG 컨테이너 - 텍스트 내부 절대 위치
export const section3SvgContainer = style({
  position: "absolute",
  bottom: vw(50), // 텍스트 영역 하단에서 50px 위
  right: vw(0), // 텍스트 영역 오른쪽 끝
  width: vw(280),
  height: "auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "50px",
      right: "0px",
      width: "280px",
    },
    [breakpoints.mobile]: {
      bottom: "-30px",
      right: "0px",
      width: "120px",
    },
  },
})

export const section3SvgImage = style({
  width: "100%",
  height: "auto",
  maxWidth: "100%",
})
