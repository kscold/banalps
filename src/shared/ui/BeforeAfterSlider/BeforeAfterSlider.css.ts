import { style } from "@vanilla-extract/css"

export const container = style({
  position: "relative",
  width: "100%",
  cursor: "ew-resize",
  userSelect: "none",
})

export const imageContainer = style({
  position: "relative",
  width: "100%",
  aspectRatio: "790 / 430", // 이미지 영역만의 비율 (라벨 제외)
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
})

export const afterImageWrapper = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
})

export const beforeImageWrapper = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
})

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
})

export const labelsContainer = style({
  position: "relative",
  display: "flex",
  width: "100%",
  marginTop: "20px", // 이미지 컨테이너 아래 간격
})

export const label = style({
  width: "50%",
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "20px",
  color: "#272727",
  margin: "0",
})

export const sliderLine = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "2px", // 흰색 세로선 복원
  backgroundColor: "#FFFFFF",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  transform: "translateX(-50%)",
  pointerEvents: "none",
})

export const sliderHandle = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "64px",
  height: "64px",
  backgroundColor: "transparent", // 완전 투명 배경
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid #FFFFFF", // 흰색 테두리만
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)", // 미세한 외곽선
  cursor: "ew-resize",
  pointerEvents: "auto",
  
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // 호버 시 아주 미세한 배경
    transform: "translate(-50%, -50%) scale(1.05)",
    boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.15)",
  },
  
  ":active": {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // 클릭 시만 약간의 배경
    transform: "translate(-50%, -50%) scale(0.95)",
  },
})