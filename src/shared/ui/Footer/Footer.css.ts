import { style } from "@vanilla-extract/css"

export const footer = style({
  width: "100%",
  backgroundColor: "#1A1A1A",
  color: "#FFFFFF",
  marginTop: "auto",
  borderTop: "1px solid #333333",
})

export const container = style({
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 60px",
  "@media": {
    "screen and (max-width: 1024px)": {
      padding: "0 40px",
    },
    "screen and (max-width: 768px)": {
      padding: "0 20px",
    },
  },
})

export const content = style({
  padding: "80px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "60px 0",
    },
  },
})

export const mainInfo = style({
  display: "grid",
  gridTemplateColumns: "1fr 1.5fr 1fr",
  gap: "60px",
  marginBottom: "60px",
  "@media": {
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      gap: "40px",
    },
  },
})

export const column = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
})

export const clinicInfo = style({
  marginBottom: "24px",
})

export const clinicName = style({
  fontSize: "18px",
  fontWeight: "500",
  marginBottom: "8px",
  fontFamily: "'S-Core Dream', sans-serif",
})

export const representative = style({
  fontSize: "14px",
  fontWeight: "400",
  color: "#B0B0B0",
  fontFamily: "'S-Core Dream', sans-serif",
})

export const copyright = style({
  fontSize: "14px",
  fontWeight: "400",
  color: "#B0B0B0",
  fontFamily: "'Poppins', sans-serif",
})

export const address = style({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "1.6",
  color: "#E0E0E0",
  fontFamily: "'S-Core Dream', sans-serif",
})

export const links = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginTop: "16px",
})

export const link = style({
  fontSize: "14px",
  fontWeight: "400",
  color: "#B0B0B0",
  textDecoration: "none",
  fontFamily: "'S-Core Dream', sans-serif",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#14AEFF",
  },
})

export const divider = style({
  color: "#666666",
  fontSize: "12px",
})

export const phone = style({
  fontSize: "16px",
  fontWeight: "500",
  color: "#E0E0E0",
  fontFamily: "'S-Core Dream', sans-serif",
})

export const logoSection = style({
  paddingTop: "40px",
  borderTop: "1px solid #333333",
})

export const logoContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const logoText = style({
  fontSize: "48px",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  letterSpacing: "0.1em",
  background: "linear-gradient(90deg, #14AEFF 0%, #0EA5E9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
})