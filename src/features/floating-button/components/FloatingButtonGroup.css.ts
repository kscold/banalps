import { style } from "@vanilla-extract/css"

// Floating button group container - fixed position at bottom right
export const floatingButtonContainer = style({
  position: "fixed",
  bottom: "40px",
  right: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  zIndex: 9999,
  "@media": {
    "screen and (max-width: 768px)": {
      bottom: "20px",
      right: "20px",
      gap: "10px",
    },
  },
})

// Expandable button list
export const expandableList = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
})

// Hidden state for buttons
export const hiddenButtons = style({
  opacity: 0,
  transform: "translateY(20px) scale(0.8)",
  pointerEvents: "none",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
})

// Visible state for buttons
export const visibleButtons = style({
  opacity: 1,
  transform: "translateY(0) scale(1)",
  pointerEvents: "auto",
})