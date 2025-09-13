import { style } from "@vanilla-extract/css"
import {
  breakpoints,
  vw,
  responsiveLeftContent,
  responsiveFont,
  responsiveContainer,
} from "../../../shared/styles/responsive.css"

export const reoperationSection1Description = style({
  // 피그마 디자인에 맞게 일러스트 아래에 자연스럽게 배치
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20), // 1920px 기준 20px 반응형
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: "0",
  marginTop: vw(120),
  color: "#272727",
  maxWidth: vw(500), // 텍스트 최대 너비 설정 (가독성 향상)
  "@media": {
    [breakpoints.mobile]: {
      lineHeight: "28px",
      maxWidth: "100%",
    },
  },
})

// Section2 SVG 컨테이너 스타일 - 제목과 설명 사이에 배치
export const section2SvgContainer = style({
  display: "flex",
  justifyContent: "flex-start", // 왼쪽 정렬
  alignItems: "center",
  marginTop: vw(60),
  marginBottom: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      // width: "418px", // 1920px+ 고정
      // height: "188px", // 1920px+ 고정
      // marginTop: "60px",
      // marginBottom: "60px",
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
  width: vw(418), // 피그마 디자인 정확한 크기
  height: vw(188), // 피그마 디자인 정확한 크기
  maxWidth: "100%",
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: "150px",
    },
  },
})

// Section2 절대 위치 SVG 컨테이너 스타일 - 텍스트와 겹치지 않도록
export const section2SvgAbsoluteContainer = style({
  position: "relative",
  width: "100%",
  height: vw(200), // SVG가 배치될 공간 확보
  marginTop: vw(60),
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "200px",
      marginTop: "60px",
    },
    [breakpoints.mobile]: {
      height: "120px",
      marginTop: "40px",
    },
  },
})

export const section2Svg1 = style({
  position: "absolute",
  top: vw(20),
  right: vw(150), // 첫 번째 SVG 위치
  width: vw(120),
  height: "auto",
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "20px",
      right: "150px",
      width: "120px",
    },
    [breakpoints.mobile]: {
      top: "15px",
      right: "80px",
      width: "80px",
    },
  },
})

export const section2Svg2 = style({
  position: "absolute",
  bottom: vw(0), // 텍스트 영역 하단 밖으로 나가도록
  right: vw(0), // 텍스트 영역의 오른쪽 끝에 맞춤
  width: vw(200), // 피그마 디자인에 맞게 크기 설정
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

// 피그마 디자인 기반 Section2 스타일
export const section2 = style({
  padding: `${vw(120)} 0`,
  backgroundColor: "#FFFFFF",
  "@media": {
    [breakpoints.desktopLarge]: {
      padding: "120px 0",
    },
    [breakpoints.mobile]: {
      padding: "80px 0",
    },
  },
})

export const section2Container = style({
  ...responsiveContainer(1600),
  display: "flex",
  alignItems: "center",
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

export const section2Left = style({
  flex: "0 0 auto",
  width: vw(830),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "830px",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
})

export const section2ImageContainer = style({
  width: "100%",
  height: vw(696),
  borderRadius: vw(24),
  overflow: "hidden",
  "@media": {
    [breakpoints.desktopLarge]: {
      height: "696px",
      borderRadius: "24px",
    },
    [breakpoints.mobile]: {
      height: "300px",
      borderRadius: "16px",
    },
  },
})

export const section2Image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const section2Right = style({
  flex: 1,
  display: "flex",
  position: "relative",
})

export const section2Content = style({
  flex: "0 0 auto",
  width: vw(488),
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "488px",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
})

export const section2Title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40),
  lineHeight: vw(56),
  color: "#272727",
  marginBottom: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "56px",
      marginBottom: "80px",
    },
    [breakpoints.mobile]: {
      marginBottom: "40px",
    },
  },
})

export const section2Description = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20),
  lineHeight: vw(30),
  color: "#272727",
  marginTop: 0, // SVG 아래 바로 배치
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "30px",
      marginTop: 0,
    },
    [breakpoints.mobile]: {
      marginTop: 0,
    },
  },
})

export const section2NumberContainer = style({
  position: "absolute",
  top: 0,
  right: 0,
  width: vw(232),
  height: vw(688),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "232px",
      height: "688px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      width: "100%",
      height: "auto",
      marginTop: "40px",
      alignItems: "center",
    },
  },
})

export const section2Number = style({
  fontFamily: "'Nordnet Sans Mono', monospace",
  fontWeight: 400,
  fontSize: vw(200),
  lineHeight: vw(240),
  color: "#272727",
  textAlign: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "200px",
      lineHeight: "240px",
    },
    [breakpoints.mobile]: {
      fontSize: "120px",
      lineHeight: "144px",
    },
  },
})

export const section2BottomIllustration = style({
  marginTop: vw(33),
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "33px",
    },
    [breakpoints.mobile]: {
      marginTop: "20px",
    },
  },
})

export const section2BottomImage = style({
  width: vw(232),
  height: vw(260),
  objectFit: "contain",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "232px",
      height: "260px",
    },
    [breakpoints.mobile]: {
      width: "180px",
      height: "auto",
    },
  },
})
