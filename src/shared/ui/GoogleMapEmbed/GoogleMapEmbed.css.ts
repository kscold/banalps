import { style } from "@vanilla-extract/css"

export const mapContainer = style({
  width: "100%",
  display: "flex",
  gap: "20px",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
    },
  },
})

export const mapWrapper = style({
  position: "relative",
  width: "100%",
  height: "500px",
  backgroundColor: "#F5F5F5",
  borderRadius: "8px",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "400px",
    },
  },
})

export const mapIframe = style({
  width: "100%",
  height: "100%",
  display: "block",
  border: "none",
})

export const loadingOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F5F5F5",
  zIndex: 1,
})

export const loadingText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: "16px",
  color: "#666",
})

export const mapButtons = style({
  display: "flex",
  gap: "12px", // 피그마 디자인에 맞춘 간격 (약간 더 넓게)

  "@media": {
    "screen and (max-width: 768px)": {
      gap: "8px",
    },
  },
})

const buttonBase = style({
  padding: "9px 16px", // 피그마 디자인에 맞춘 패딩
  fontSize: "16px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "600", // SemiBold
  border: "none",
  borderRadius: "24px", // 피그마와 동일
  cursor: "pointer",
  transition: "all 0.2s ease",
  width: "125px", // 피그마 정확한 너비
  height: "42px", // 피그마 정확한 높이
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  letterSpacing: "0", // 피그마와 동일
  lineHeight: "24px", // 피그마와 동일
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      flex: 1,
      width: "auto",
      fontSize: "14px",
      padding: "8px 16px",
      height: "38px",
    },
  },
})

export const kakaoButton = style([
  buttonBase,
  {
    backgroundColor: "#F3E362", // 피그마와 동일한 색상 (#f3e362)
    color: "#272727", // 피그마와 동일한 텍스트 색상
    width: "129px", // 피그마 정확한 카카오 버튼 너비 (네이버와 다름)
  },
])

export const naverButton = style([
  buttonBase,
  {
    backgroundColor: "#58A54B", // 피그마와 동일한 네이버 색상
    color: "#FFFFFF", // 피그마와 동일한 텍스트 색상
    width: "125px", // 피그마 정확한 네이버 버튼 너비
  },
])
