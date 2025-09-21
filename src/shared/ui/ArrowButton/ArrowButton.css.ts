import { style, keyframes } from "@vanilla-extract/css";

import { breakpoints, vw, mvw } from "../../styles/responsive.css";

// 화살표 순환 애니메이션 - 오른쪽으로 사라진 후 왼쪽에서 다시 나타나며 원래 위치로 돌아옴
const arrowSlide = keyframes({
  "0%": {
    transform: "translateX(0)",
    opacity: "1",
  },
  "40%": {
    transform: `translateX(${vw(20)})`,
    opacity: "0",
  },
  "50%": {
    transform: `translateX(-${vw(20)})`,
    opacity: "0",
  },
  "90%": {
    transform: "translateX(0)",
    opacity: "1",
  },
  "100%": {
    transform: "translateX(0)",
    opacity: "1",
  },
});

// 기본 버튼 스타일 (1920px 기준 반응형) - 텍스트 길이에 따라 자동 조정
export const arrowButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "none",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  letterSpacing: "0",
  textDecoration: "none",
  outline: "none",
  position: "relative",
  overflow: "visible", // 화살표가 버튼 밖으로 나갈 수 있도록
  color: "#272727",
  pointerEvents: "auto", // 클릭 이벤트 활성화
  boxShadow: `0 ${vw(4)} ${vw(16)} rgba(0, 0, 0, 0.08)`,
  lineHeight: "100%",
  // width 제거 - 텍스트 길이에 따라 자동 조정
  minWidth: "auto", // 최소 너비 자동
  width: "auto", // 자동 너비
  gap: `${vw(10)}`, // 텍스트와 화살표 간격 10px
  // 기본 패딩 - 커스텀 값으로 오버라이드 가능
  paddingTop: vw(10),
  paddingBottom: vw(10),
  paddingLeft: vw(20), // 기본 왼쪽 패딩 (오버라이드 가능)
  paddingRight: vw(48), // 오른쪽에 화살표 공간 확보 (28px 원 + 20px 여백)
  borderRadius: vw(100), // 1920px 기준 100px
  fontSize: vw(20), // 1920px 기준 20px

  ":hover": {
    backgroundColor: "#F8F9FA",
    boxShadow: `0 ${vw(8)} ${vw(24)} rgba(0, 0, 0, 0.12)`,
  },

  ":active": {
    boxShadow: `0 ${vw(4)} ${vw(16)} rgba(0, 0, 0, 0.08)`,
  },

  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: `0 ${vw(4)} ${vw(16)} rgba(0, 0, 0, 0.08)`,
  },

  "@media": {
    [breakpoints.mobile]: {
      // 모바일에서 자동 너비 (position: absolute일 때는 width: auto로)
      width: "auto", // 기본값은 auto
      paddingTop: `${mvw(8)}`, // 상하 패딩
      paddingBottom: `${mvw(8)}`, // 상하 패딩
      paddingLeft: `${mvw(16)}`, // 좌측 패딩
      paddingRight: `${mvw(44)}`, // 우측 패딩 (화살표 공간 확보)
      fontSize: mvw(14), // 폰트 크기
      gap: `${mvw(8)}`, // 간격
      minHeight: mvw(44), // 높이
      borderRadius: mvw(100), // 완전 둥근 모서리
      justifyContent: "flex-start", // 텍스트 왼쪽 정렬
      boxShadow: `0 ${mvw(4)} ${mvw(16)} rgba(0, 0, 0, 0.08)`,
      position: "relative", // 화살표 absolute 포지셔닝을 위해
    },
  },
});

// 버튼 텍스트 (1920px 기준 반응형)
export const buttonText = style({
  color: "#272727",
  transition: "color 0.3s ease",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  letterSpacing: "0",
  whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
  lineHeight: "100%",
  flexShrink: 0, // 텍스트가 줄어들지 않도록
  fontSize: vw(20), // 1920px 기준 20px

  "@media": {
    [breakpoints.mobile]: {
      fontSize: "var(--mobile-font-size, " + mvw(14) + ")", // CSS 변수를 통한 모바일 폰트 크기
    },
  },
});

// 화살표 컨테이너 (1920px 기준 반응형)
export const arrowContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: "#14AEFF",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  flexShrink: 0,
  boxShadow: `0 ${vw(4)} ${vw(12)} rgba(20, 174, 255, 0.25)`,
  width: vw(28), // 데스크탑에서 42px로 증가
  height: vw(28), // 데스크탑에서 42px로 증가
  position: "absolute", // 데스크탑에서도 absolute
  right: vw(12), // 오른쪽에서 12px 떨어진 위치
  top: "50%",
  transform: "translateY(-50%)",

  "@media": {
    [breakpoints.mobile]: {
      width: mvw(28),
      height: mvw(28),
      position: "absolute",
      right: mvw(8),
      top: "50%",
      transform: "translateY(-50%)",
      boxShadow: `0 ${mvw(4)} ${mvw(12)} rgba(20, 174, 255, 0.25)`,
      zIndex: 1, // 화살표가 버튼 내부에 표시되도록
    },
  },
});

// 화살표 아이콘 (1920px 기준 반응형)
export const arrowIcon = style({
  color: "#FFFFFF",
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  strokeWidth: "2",
  width: vw(24), // 데스크탑에서 24px로 증가
  height: vw(24), // 데스크탑에서 24px로 증가

  // 호버시 화살표 이동 애니메이션
  selectors: {
    [`${arrowButton}:hover &`]: {
      animation: `${arrowSlide} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    },
  },

  "@media": {
    [breakpoints.mobile]: {
      width: mvw(13),
      height: mvw(13),
    },
  },
});

// Color Variant 스타일들
export const white = style({
  backgroundColor: "#FFFFFF",
  color: "#272727",
  ":hover": {
    backgroundColor: "#F8F9FA",
  },
});

export const blue = style({
  backgroundColor: "#14AEFF",
  color: "#FFFFFF",
  ":hover": {
    backgroundColor: "#0EA5E9",
  },
});

// Style Variant 스타일들
export const primary = style({
  borderColor: "#8B5CF6",
  color: "#272727",
});

export const secondary = style({
  borderColor: "#6B7280",
  color: "#6B7280",

  ":hover": {
    backgroundColor: "rgba(107, 114, 128, 0.05)",
    borderColor: "#4B5563",
  },
});

// Color별 텍스트 스타일
export const whiteText = style({
  color: "#272727",
});

export const blueText = style({
  color: "#FFFFFF",
});

// Color별 화살표 컨테이너 스타일
export const whiteArrowContainer = style({
  backgroundColor: "#14AEFF", // 흰색 버튼에는 파란 동그라미
  // 호버 시 배경색 변화 제거
});

export const blueArrowContainer = style({
  backgroundColor: "#FFFFFF", // 파란색 버튼에는 흰 동그라미
  // 호버 시 배경색 변화 제거
});

// Color별 화살표 아이콘 스타일
export const whiteArrowIcon = style({
  color: "#FFFFFF", // 파란 동그라미 안에 흰 화살표
});

export const blueArrowIcon = style({
  color: "#14AEFF", // 흰 동그라미 안에 파란 화살표
});

// Secondary variant의 화살표 컨테이너 스타일 (기존)
export const secondaryArrowContainer = style({
  backgroundColor: "#6B7280",
});

// Size 스타일들
export const small = style({
  padding: `${vw(12)} ${vw(20)}`,
  fontSize: vw(14),
  gap: vw(8),

  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(10)} ${mvw(16)}`,
      fontSize: mvw(12),
      gap: mvw(6),
    },
  },
});

export const medium = style({
  fontSize: vw(22), // 1920px 기준 22px
  height: vw(44), // 명시적 높이 44px로 설정
  padding: `0 ${vw(48)} 0 ${vw(20)}`, // 좌측 20px, 우측 48px 패딩 (화살표 공간)
  justifyContent: "flex-start", // 텍스트 왼쪽 정렬

  "@media": {
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      minHeight: mvw(44), // 모바일에서는 44px
      height: "auto",
      padding: `${mvw(8)} ${mvw(44)} ${mvw(8)} ${mvw(16)}`, // 모바일 패딩
    },
  },
});

export const large = style({
  padding: `${vw(20)} ${vw(32)}`,
  fontSize: vw(18),
  gap: vw(16),

  "@media": {
    [breakpoints.mobile]: {
      padding: `${mvw(18)} ${mvw(60)} ${mvw(18)} ${mvw(28)}`, // 오른쪽에 원 공간 확보
      fontSize: mvw(16),
      gap: mvw(14),
      position: "relative",
      justifyContent: "center", // 텍스트 가운데 정렬
    },
  },
});

// Size별 화살표 컨테이너 스타일
export const smallArrowContainer = style({
  width: vw(22),
  height: vw(22),
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(22),
      height: mvw(22),
    },
  },
});

export const smallArrowIcon = style({
  width: vw(11),
  height: vw(11),
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(11),
      height: mvw(11),
    },
  },
});

export const largeArrowContainer = style({
  width: vw(40),
  height: vw(40),
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(32),
      height: mvw(32),
      position: "absolute",
      right: mvw(8), // 오른쪽 여백
      top: mvw(8), // 상단 여백
      bottom: mvw(8), // 하단 여백
      margin: "auto 0", // 세로 중앙
    },
  },
});

export const largeArrowIcon = style({
  width: vw(18),
  height: vw(18),
  "@media": {
    [breakpoints.mobile]: {
      width: mvw(18),
      height: mvw(18),
    },
  },
});

// 호버 시 화살표 애니메이션 (배경색 변화 제거)
export const arrowContainerHover = style({
  // 배경색 변화 제거 - 화살표 모션만 유지
});
