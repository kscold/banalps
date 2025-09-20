import { style } from "@vanilla-extract/css"
import { vw, mvw, breakpoints } from "../../../shared/styles/responsive.css"

export const container = style({
  position: "relative",
  width: "100%",
  cursor: "pointer",
  userSelect: "none",
  opacity: 0.7,
  transition: "opacity 0.3s ease",
  ":hover": {
    opacity: 1,
  },
})

export const imageContainer = style({
  position: "relative",
  width: "100%",
  aspectRatio: "360 / 420", // 사이드 프리뷰 비율
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
})

export const image = style({
  position: "absolute",
  height: "100%",
  objectFit: "cover",
  display: "block",
})

export const labelsContainer = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "20px",
})

export const label = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "24px",
  color: "#14AEFF",
  margin: "0",
  padding: "6px 20px",
  backgroundColor: "#FFFFFF",
  borderRadius: "20px",
  border: "2px solid #14AEFF",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
})