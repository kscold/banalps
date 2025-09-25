import { style, globalStyle, keyframes } from "@vanilla-extract/css";

// 기본 플로팅 버튼 스타일 - Figma 디자인과 100% 일치
export const floatingButton = style({
  // Figma 디자인: 60px × 60px 크기
  width: "60px",
  height: "60px",

  // Figma 디자인: 흰색 배경
  background: "#FFFFFF",

  // Figma 디자인: 30px 둥근 모서리
  borderRadius: "30px",

  // Figma 디자인: 그림자 효과
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",

  // Figma 디자인: 10px 패딩 (상하좌우)
  padding: "10px",

  // 기본 스타일
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // Figma 디자인: 수평 레이아웃
  flexDirection: "row",

  // 전환 효과
  transition: "all 200ms ease",

  // 활성 상태
  ":active": {
    transform: "translateY(0px)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
});

// 활성 상태 플로팅 버튼 - Figma 디자인과 100% 일치
export const floatingButtonActive = style({
  // Figma 디자인: 파란색 배경 (#14AEFF)
  background: "#14AEFF",

  // Figma 디자인: 동일한 그림자 효과 유지
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",

  // 호버 효과 (활성 상태)
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.15)",
    background: "#0EA5E9", // 더 진한 파란색
  },
});

// 아이콘 컨테이너
export const iconContainer = style({
  // Figma 디자인: 40px × 40px 아이콘 영역
  width: "40px",
  height: "40px",

  // 중앙 정렬
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // Figma 디자인: 10px 간격
  gap: "10px",
});

// 플로팅 버튼 그룹 컨테이너
export const floatingButtonGroup = style({
  // Figma 디자인: 수직 레이아웃
  display: "flex",
  flexDirection: "column",

  // Figma 디자인: 10px 간격
  gap: "10px",

  // Figma 디자인: 20px 패딩
  padding: "20px",

  // Figma 디자인: 보라색 테두리
  border: "1px dashed #9747FF",

  // Figma 디자인: 5px 둥근 모서리
  borderRadius: "5px",

  // Figma 디자인: 최대 너비
  maxWidth: "196px",

  // Figma 디자인: 높이 자동 조정
  height: "auto",
  minHeight: "520px",
});

// 반응형 스타일
export const floatingButtonResponsive = style({
  "@media": {
    "screen and (max-width: 768px)": {
      // 모바일에서 크기 조정
      width: "50px",
      height: "50px",
      padding: "8px",
      borderRadius: "25px",
    },
    "screen and (max-width: 480px)": {
      // 작은 모바일에서 크기 조정
      width: "45px",
      height: "45px",
      padding: "6px",
      borderRadius: "22.5px",
    },
  },
});

// 플로팅 버튼 애니메이션
export const floatingButtonAnimated = style({
  // Figma 디자인: 부드러운 전환
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",

  // 호버 시 확대 효과
  ":hover": {
    transform: "scale(1.05) translateY(-2px)",
  },

  // 클릭 시 축소 효과
  ":active": {
    transform: "scale(0.95) translateY(0px)",
  },
});

// 플로팅 버튼 상태별 색상
export const floatingButtonVariants = {
  brand: style({
    // 기본 브랜드 색상
    background: "#FFFFFF",
    ":hover": {
      background: "#F8F9FA",
    },
  }),

  naver: style({
    // 네이버 색상
    background: "#FFFFFF",
    ":hover": {
      background: "#F8F9FA",
    },
  }),

  kakao: style({
    // 카카오톡 색상
    background: "#FFFFFF",
    ":hover": {
      background: "#F8F9FA",
    },
  }),

  naverBlog: style({
    // 네이버 블로그 색상
    background: "#FFFFFF",
    ":hover": {
      background: "#F8F9FA",
    },
  }),

  youtube: style({
    // 유튜브 색상
    background: "#FFFFFF",
    ":hover": {
      background: "#F8F9FA",
    },
  }),

  line: style({
    // 라인 색상
    background: "#FFFFFF",
    ":hover": {
      background: "#F8F9FA",
    },
  }),

  instagram: style({
    // 인스타그램 색상 (특별한 배경)
    background: "#14AEFF",
    ":hover": {
      background: "#0EA5E9",
    },
  }),

  close: style({
    // 닫기 버튼 색상
    background: "#FFFFFF",
    position: "relative",
    ":hover": {
      background: "#F8F9FA",
    },
  }),
};

// spin-close 버튼 베이스 스타일
export const spinCloseButton = style({
  position: "relative",
});

// 회전 애니메이션 정의
const rotateIn = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(180deg)",
  },
});

const rotateOut = keyframes({
  "0%": {
    transform: "rotate(180deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

// 닫기 버튼 회전 애니메이션
export const closeIconRotate = style({
  animation: `${rotateIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
});

// 브랜드 아이콘 회전 애니메이션
export const brandIconRotate = style({
  animation: `${rotateOut} 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
});

// 아이콘 트랜지션 스타일 (기본 아이콘용)
export const spinCloseIcon = style({
  opacity: 1,
  transition: "transform 0.3s, opacity 0.3s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// 아이콘 숨김 상태
export const spinCloseIconHidden = style({
  opacity: 0,
  transform: "rotate(180deg)",
});

// X 라인 베이스 스타일 (before, after 대신 두 개의 span 사용)
export const closeButtonLine = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "26px", // 1.64rem ≈ 26px
  height: "2px",
  backgroundColor: "#333",
  marginTop: "-1px",
  marginLeft: "-13px", // width의 절반
  transition: "transform 0.3s, opacity 0.3s",
  transformOrigin: "center",
  opacity: 0,
  transform: "rotate(0deg)",
});

// 첫 번째 라인 (45도 회전)
export const closeButtonLineFirst = style([
  closeButtonLine,
  {
    // 초기 상태: 투명하고 회전 없음
  },
]);

// 두 번째 라인 (135도 회전)
export const closeButtonLineSecond = style([
  closeButtonLine,
  {
    // 초기 상태: 투명하고 회전 없음
  },
]);

// 활성 상태의 첫 번째 라인 (45도 * 3 = 135도)
export const closeButtonLineFirstActive = style({
  opacity: 1,
  transform: "rotate(135deg)", // (1*2+1)*45deg = 135deg
});

// 활성 상태의 두 번째 라인 (135도 * 3 = 405도 = 45도)
export const closeButtonLineSecondActive = style({
  opacity: 1,
  transform: "rotate(405deg)", // (1*2+1)*135deg = 405deg = 45deg
});
