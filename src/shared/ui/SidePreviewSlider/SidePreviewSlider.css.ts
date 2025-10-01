import { style } from "@vanilla-extract/css";
import { vw, mvw, breakpoints } from "../../../shared/styles/responsive.css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
});

export const containerBlue = style({
  position: "relative",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
});

// 왼쪽 프리뷰용 (After 표시) - 왼쪽만 둥글게 (바깥쪽)
export const imageContainerLeft = style({
  position: "relative",
  width: "100%",
  flexGrow: 1,
  overflow: "hidden",
  borderRadius: `0 8px 8px 0`, // 왼쪽 상단만 둥글게
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: `0 0 0 0`,
    zIndex: 1,
    pointerEvents: "none",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "0 8px 8px 0",
      "::before": {
        borderRadius: "0 8px 8px 0",
      },
    },
    [breakpoints.mobile]: {
      borderRadius: mvw(8),
      boxShadow: "none",
      "::before": {
        borderRadius: mvw(8),
      },
    },
  },
});

// 오른쪽 프리뷰용 (Before 표시) - 오른쪽만 둥글게 (바깥쪽)
export const imageContainerRight = style({
  position: "relative",
  width: "100%",
  flexGrow: 1,
  overflow: "hidden",
  borderRadius: `8px 0 0 8px`, // 오른쪽 상단만 둥글게
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: `8px 0 0 8px`,
    zIndex: 1,
    pointerEvents: "none",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      borderRadius: "8px 0 0 8px",
      "::before": {
        borderRadius: "8px 0 0 8px",
      },
    },
    [breakpoints.mobile]: {
      borderRadius: "8px",
      boxShadow: "none",
      "::before": {
        borderRadius: "8px",
      },
    },
  },
});

export const fullImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const labelsContainer = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: vw(20),
  padding: "12px 0",
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "20px",
    },
  },
});

export const labelsContainerBlue = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "0",
  paddingTop: vw(32),
  paddingBottom: "12px",
  backgroundColor: "#D5FEFF",
  borderBottomLeftRadius: vw(12),
  borderBottomRightRadius: vw(12),
  marginBottom: "0",
  "::before": {
    content: '""',
    position: "absolute",
    top: vw(-20),
    left: "0",
    right: "0",
    height: vw(20),
    // backgroundColor: "#D5FEFF",
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "32px",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      "::before": {
        top: "-20px",
        height: "20px",
      },
    },
  },
});

// 왼쪽 프리뷰용 라벨 컨테이너 (왼쪽 하단만 둥글게)
export const labelsContainerBlueLeft = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "0",
  paddingTop: vw(32),
  paddingBottom: "12px",
  backgroundColor: "#D5FEFF",
  borderBottomLeftRadius: vw(12),
  borderBottomRightRadius: 0,
  marginBottom: "0",
  "::before": {
    content: '""',
    position: "absolute",
    top: vw(-20),
    left: "0",
    right: "0",
    height: vw(20),
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "32px",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: 0,
      "::before": {
        top: "-20px",
        height: "20px",
      },
    },
  },
});

// 오른쪽 프리뷰용 라벨 컨테이너 (오른쪽 하단만 둥글게)
export const labelsContainerBlueRight = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "0",
  paddingTop: vw(32),
  paddingBottom: "12px",
  backgroundColor: "#D5FEFF",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: vw(12),
  marginBottom: "0",
  "::before": {
    content: '""',
    position: "absolute",
    top: vw(-20),
    left: "0",
    right: "0",
    height: vw(20),
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      paddingTop: "32px",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: "12px",
      "::before": {
        top: "-20px",
        height: "20px",
      },
    },
  },
});

export const label = style({
  fontFamily: "'S-Core Dream', 'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(20),
  lineHeight: vw(20),
  color: "#272727",
  margin: "0",
  textAlign: "center",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
  },
});
