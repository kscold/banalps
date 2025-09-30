import { style, keyframes } from "@vanilla-extract/css";
import {
  vw,
  mvw,
  responsiveFont,
  responsiveContainer,
  responsiveCaptureContainer,
  responsiveProperty,
  breakpoints,
} from "../../shared/styles/responsive.css";
import { fontFamily } from "@/shared/styles/fonts.css";

// 페이드인 상승 애니메이션
const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(80px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

// featuresList 항목용 순차적 페이드인 애니메이션
const featureItemFadeIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(40px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

// 메인 파란색 섹션
export const blueSection = style({
  width: "100%",
  background: "#73D5FA",
  position: "relative", // 일반적인 문서 플로우에 맞춤
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  opacity: 0,
  transform: "translateY(20px)",
  transition:
    "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  overflow: "visible", // overflow 제거
  paddingBottom: 0, // 하단 패딩 제거
  marginBottom: 0, // 하단 마진 제거
  "@media": {
    [breakpoints.mobile]: {
      backgroundImage: "url('/about/mobile/banal-graffiti-mobile.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      backgroundSize: "contain",
    },
  },
});

// 보이기 상태
export const visible = style({
  opacity: 1,
  transform: "translateY(0)",
});

// 모바일 헤더 섹션 - 피그마 디자인 기반
export const mobileHeaderSection = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  width: "100%",
  padding: `${mvw(40)} ${mvw(20)}`, // 375px 기준 40px 상하, 20px 좌우
  textAlign: "left",
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 모바일 메인 타이틀
export const mobileMainTitle = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: mvw(32), // 375px 기준 32px
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: "0 0 20px 0",
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 모바일 서브 설명
export const mobileSubDescription = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500, // Medium weight
  fontSize: mvw(14), // 375px 기준 14px
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: "0 0 12px 0",
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 모바일 설명
export const mobileDescription = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  fontFamily: "'Pretendard', sans-serif",
  fontWeight: 300,
  fontSize: mvw(13), // 375px 기준 13px
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: "0",
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 모바일 01, 02 섹션 - 피그마 디자인 기반
export const mobileFeaturesSection = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  width: "100%",
  backgroundColor: "#FFFDF7",
  padding: `${mvw(40)} ${mvw(16)}`, // 375px 기준 40px 상하, 20px 좌우
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 모바일 피처 아이템
export const mobileFeatureItem = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  marginBottom: mvw(40), // 375px 기준 40px
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 모바일 피처 번호
export const mobileFeatureNumber = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: mvw(18), // 375px 기준 18px
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: mvw(12), // 375px 기준 12px
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 모바일 피처 콘텐츠
export const mobileFeatureContent = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 이미지 카드 섹션 - 중앙 컨테이너 (1920px 기준)
export const imageCardsSection = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  ...responsiveCaptureContainer(1600, 950), // 1600x950 캡처 컨테이너
  marginTop: vw(240), // 1920px 기준 240px
  marginBottom: vw(240),
  height: vw(1220),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "240px", // 1920px 이상에서 고정
      marginBottom: "240px",
    },
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: "0", // 갭 없음
      margin: "120px 0 0 0", // 상단에만 120px 마진
      padding: 0,
      position: "relative",
      height: "auto",
      width: "100%", // 전체 너비
      maxWidth: "none",
    },
  },
});

// 이미지 카드 1 - 왼쪽 상단 (1920px 기준)
export const imageCard1 = style({
  position: "absolute",
  width: vw(441), // 1920px 기준 441px
  aspectRatio: "441 / 641",
  left: vw(436), // 1920px 기준 436px (1920 기준으로 컨테이너 중앙 맞춤)
  top: 0,
  borderRadius: "8px",
  overflow: "hidden",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "441px", // 1920px 이상에서 고정
      left: "436px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "0",
      width: "100%",
      height: mvw(260), // 375px 기준 260px가 비례적으로 커짐
      aspectRatio: "auto",
      borderRadius: 0,
      order: 1,
    },
  },
});

// 이미지 카드 2 - 오른쪽 (가장 큰 카드) (1920px 기준)
export const imageCard2 = style({
  position: "absolute",
  width: vw(470), // 1920px 기준 470px
  aspectRatio: "470 / 689",
  top: vw(259), // 1920px 기준 259px
  left: vw(926), // 1920px 기준 926px (1920 기준으로 컨테이너 중앙 맞춤)
  borderRadius: "8px",
  overflow: "hidden",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "470px", // 1920px 이상에서 고정
      top: "259px",
      left: "926px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "0",
      width: "100%",
      height: mvw(260), // 375px 기준 260px가 비례적으로 커짐
      aspectRatio: "auto",
      order: 2,
      borderRadius: 0,
    },
  },
});

// 이미지 카드 3 - 왼쪽 하단 (작은 가로 카드) (1920px 기준)
export const imageCard3 = style({
  position: "absolute",
  width: vw(327), // 1920px 기준 327px
  aspectRatio: "327 / 267",
  top: vw(681), // 1920px 기준 681px
  left: vw(210), // 1920px 기준 210px (1920 기준으로 컨테이너 중앙 맞춤)
  borderRadius: "8px",
  overflow: "hidden",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "327px", // 1920px 이상에서 고정
      top: "681px",
      left: "210px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "0",
      width: "100%",
      height: mvw(260), // 375px 기준 260px가 비례적으로 커짐
      aspectRatio: "auto",
      borderRadius: 0,
      order: 3,
    },
  },
});

// 이미지 카드 4 - 중앙 하단 (1920px 기준)
export const imageCard4 = style({
  position: "absolute",
  width: vw(317), // 1920px 기준 317px
  aspectRatio: "317 / 468",
  top: vw(766), // 1920px 기준 766px
  left: vw(574), // 1920px 기준 574px (1920 기준으로 컨테이너 중앙 맞춤)
  borderRadius: "8px",
  overflow: "hidden",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "317px", // 1920px 이상에서 고정
      top: "766px",
      left: "574px",
      borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "0",
      width: "100%",
      height: mvw(260), // 375px 기준 260px가 비례적으로 커짐
      aspectRatio: "auto",
      borderRadius: 0,
      order: 4,
    },
  },
});

// 카드 내부 이미지
export const cardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

// RE.YOU 텍스트 섹션 (1920px 기준) - 헤더와 완전 일치
export const reYouSection = style({
  position: "relative",
  ...responsiveContainer(1600), // 헤더와 동일한 컨테이너 시스템만 사용
  marginBottom: vw(240), // 1920px 기준 240px
  minHeight: vw(748), // 최소 높이 설정 (이미지 컨테이너 대체)
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: vw(20), // 1920px 기준 20px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "120px", // 1920px 이상에서 고정
      marginBottom: "240px",
      minHeight: "748px", // 고정 높이
      gap: "20px",
    },
    [breakpoints.mobile]: {
      // responsiveContainer와 동일한 마진 시스템 적용
      width: `calc(100% - ${mvw(32)})`, // 375px 기준 32px 마진이 뷰포트에 따라 비례
      margin: `${mvw(60)} auto ${mvw(80)} auto`, // 375px 기준 상단 60px, 하단 80px
      minHeight: mvw(400), // 375px 기준 400px가 비례적으로 커짐
      paddingTop: mvw(40), // 375px 기준 40px 패딩
      paddingBottom: mvw(40), // 375px 기준 40px 패딩
    },
  },
});

// RE.YOU 타이틀 (1920px 기준)
export const reYouTitle = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  ...responsiveFont(70), // 1920px 기준 70px
  lineHeight: "100%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  position: "relative",
  zIndex: 1,
  // textShadow 제거
});

// 한글 서브타이틀 (1920px 기준)
export const reYouSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(20), // 1920px 기준 20px
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  opacity: 0.95,
  position: "relative",
  zIndex: 1,
  // textShadow 제거
});

// 그래피티 배경 이미지 (1920px 기준) - 데스크톱용
export const graffitiBackground = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  marginTop: vw(48), // 1920px 기준 48px
  top: 0,
  left: 0,
  objectFit: "contain",
  objectPosition: "center",
  pointerEvents: "none",
  zIndex: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "48px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서는 숨김
    },
  },
});

// 그래피티 배경 이미지 - 모바일용
export const graffitiBackgroundMobile = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  marginTop: mvw(24), // 모바일 기준 24px
  top: 0,
  left: 0,
  objectFit: "contain",
  objectPosition: "center",
  pointerEvents: "none",
  zIndex: 0,
  display: "none", // 기본적으로 숨김
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// What Banal Does 섹션 (1920px 기준)
export const whatBanalSection = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  marginBottom: vw(240),
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "240px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      width: "100%", // 모바일에서 전체 너비
      maxWidth: "none",
      padding: `0 ${mvw(16)}`, // 양쪽 16px 패딩으로 오버라이드
      margin: "0", // 마진 제거
      marginBottom: mvw(80),
    },
  },
});

export const whatBanalWrapper = style({
  width: "100%",
  maxWidth: `${vw(1600)}`, // 1920px 기준 1600px
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: "1600px",
    },
    [breakpoints.mobile]: {
      maxWidth: "100%",
    },
  },
});

export const whatBanalContent = style({
  display: "flex",
  flexDirection: "row", // 데스크탑에서 가로 배치
  gap: vw(156), // 1920px 기준 120px
  alignItems: "flex-start",
  "@media": {
    [breakpoints.desktopLarge]: {
      display: "flex",
      flexDirection: "row", // 1920px 이상에서도 확실히 가로 배치
      gap: "156px", // 1920px 이상에서 고정
    },
    "screen and (min-width: 1024px)": {
      display: "flex",
      flexDirection: "row", // 1024px 이상에서 가로 배치 강제
    },
    [breakpoints.mobile]: {
      flexDirection: "column", // 모바일에서 세로 배치
      gap: mvw(40), // 375px 기준 40px가 비례적으로 커짐
    },
    "screen and (max-width: 374px)": {
      gap: "40px", // 375px 미만에서는 고정
    },
  },
});

export const whatBanalText = style({
  flex: `0 0 ${vw(520)}`, // 1920px 기준 520px
  "@media": {
    [breakpoints.desktopLarge]: {
      flex: "0 0 520px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      flex: "none",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
});

// 모바일에서만 보이는 제목 (whatBanalSection 상단)
export const whatBanalTitleMobile = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: mvw(30), // 375px 기준 30px (Figma 디자인 맞춤)
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: mvw(80), // 375px 기준 20px - 설명 텍스트와 간격 줄임
  marginTop: 0,
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
    },
  },
});

// 데스크탑에서만 보이는 제목 (whatBanalText 내부)
const titleFontStyles = responsiveFont(60);

export const whatBanalTitleDesktop = style({
  display: "block", // 데스크탑에서 표시
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: titleFontStyles.fontSize,
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(80), // 1920px 기준 80px
  marginTop: 0,
  "@media": {
    ...titleFontStyles["@media"],
    [breakpoints.desktopLarge]: {
      ...titleFontStyles["@media"]?.[breakpoints.desktopLarge],
      marginBottom: "80px", // 1920px 이상에서 고정
      marginTop: 0,
    },
    [breakpoints.mobile]: {
      ...titleFontStyles["@media"]?.[breakpoints.mobile],
      display: "none", // 모바일에서 숨김
    },
  },
});

// 구버전 호환성을 위해 유지
export const whatBanalTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60), // 1920px 기준 60px
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(80), // 1920px 기준 80px
  marginTop: 0, // 상단 마진 제거
  "@media": {
    [breakpoints.desktopLarge]: {
      marginBottom: "80px", // 1920px 이상에서 고정
      marginTop: 0,
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(40), // 375px 기준 40px
      marginTop: 0,
    },
  },
});

export const whatBanalDescription = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  // ...responsiveFont(24), // 1920px 기준 24px
  fontSize: vw(24),
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(40), // 1920px 기준 40px
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
      marginBottom: "40px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김 (모바일 전용 버전 사용)
    },
  },
});

export const whatBanalSubDescription1 = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(24),
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  // marginBottom: vw(80), // 1920px 기준 80px
  "@media": {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김 (모바일 전용 버전 사용)
    },
  },
});

export const whatBanalSubDescription2 = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(23), // 1920px 기준 23px
  lineHeight: vw(35), // 1920px 기준 35px
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(40), // 1920px 기준 40px로 줄임
  "@media": {
    [breakpoints.desktopLarge]: {
      lineHeight: "35px", // 1920px 이상에서 고정
      marginBottom: "40px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김 (모바일 전용 버전 사용)
    },
  },
});

// 데스크탑에서만 보이는 버튼 래퍼 (whatBanalText 내부)
export const whatBanalButtonDesktop = style({
  display: "inline-block",
  marginTop: vw(40), // 1920px 기준 40px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "40px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김
    },
  },
});

// 모바일에서 제목 바로 아래 표시되는 설명 텍스트
export const whatBanalMobileTop = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
      marginBottom: mvw(40), // 375px 기준 40px
    },
  },
});

// 모바일 전용 설명 텍스트들
export const whatBanalSubDescription1Mobile = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: fontFamily.scdream,
      fontWeight: 400,
      fontSize: mvw(16), // 375px 기준 14px (더 작게)
      lineHeight: "150%", // 150% line height
      letterSpacing: "0",
      color: "#272727",
      marginBottom: mvw(24),
    },
  },
});

export const whatBanalDescriptionMobile = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: fontFamily.scdream,
      fontWeight: 500,
      fontSize: mvw(18), // 375px 기준 18px (약간 작게)
      lineHeight: "150%", // 150% line height
      letterSpacing: "0",
      color: "#272727",
      marginBottom: mvw(24),
    },
  },
});

export const whatBanalSubDescription2Mobile = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: fontFamily.scdream,
      fontWeight: 400,
      fontSize: mvw(16), // 375px 기준 13px (더 작게)
      lineHeight: "150%", // 150% line height
      letterSpacing: "0",
      color: "#272727",
      marginBottom: 0, // 마지막 텍스트이므로 marginBottom 제거
    },
  },
});

// 모바일에서만 보이는 버튼 래퍼 (featuresList 아래)
export const whatBanalButtonMobile = style({
  display: "none", // 기본적으로 숨김 (데스크탑)
  "@media": {
    [breakpoints.mobile]: {
      display: "block", // 모바일에서만 표시
      width: "100%", // 양쪽 16px씩 뺀 너비
      marginTop: mvw(40), // 375px 기준 40px
      marginBottom: mvw(40), // 375px 기준 60px 하단 마진
    },
  },
});

// 모바일에서 버튼을 전체 너비로 만드는 스타일
export const fullWidthButton = style({
  "@media": {
    [breakpoints.mobile]: {
      // width 제거 - ArrowButton 자체에서 calc(100% - mvw(4))로 설정됨
      display: "flex",
      justifyContent: "center", // 텍스트 가운데 정렬
      position: "relative",
      fontSize: `${mvw(18)} !important`, // 모바일에서 강제로 폰트 크기 설정
    },
  },
});

// 구버전 호환성을 위해 유지
export const whatBanalButton = style({
  display: "inline-block",
  marginTop: vw(40), // 1920px 기준 40px
  "@media": {
    [breakpoints.desktopLarge]: {
      marginTop: "40px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      marginTop: mvw(32), // 375px 기준 32px
      marginBottom: mvw(60), // 375px 기준 60px 하단 마진
    },
  },
});

export const featuresList = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0, // gap 제거하고 각 아이템에 border로 처리
  borderTop: `${vw(1)} solid #14aeff`, // 상단 파란선 추가
  "@media": {
    [breakpoints.desktopLarge]: {
      gap: 0,
      borderTop: "1px solid #14aeff",
    },
    [breakpoints.mobile]: {
      gap: 0,
      borderTop: `${mvw(1)} solid #14aeff`,
      width: "100%",
    },
  },
});

export const featureItem = style({
  display: "flex",
  flexDirection: "row", // 가로 배치 명시
  alignItems: "flex-start",
  gap: vw(24), // 1920px 기준 24px로 늘림
  padding: `${vw(20)} 0`, // 1920px 기준 20px로 늘림
  borderBottom: `${vw(1)} solid #14aeff`, // 1920px 기준 1px (모든 아이템에 하단 border)
  cursor: "default", // 클릭 커서 제거
  textDecoration: "none",
  color: "#272727",
  // 호버 효과 제거
  "@media": {
    [breakpoints.desktopLarge]: {
      display: "flex",
      flexDirection: "row", // 데스크탑에서 확실히 가로 배치
      gap: "24px", // 1920px 이상에서 고정
      padding: "20px 0", // 패딩 늘림
      borderBottom: "1px solid #14aeff",
    },
    [breakpoints.mobile]: {
      width: "100%",
      flexDirection: "row", // 모바일에서도 가로 배치 유지
      gap: mvw(12), // 375px 기준 16px 간격
      padding: `${mvw(36)} 0 ${mvw(48)} 0`, // 375px 기준 24px 패딩
      borderBottom: `${mvw(1)} solid #14aeff`,
      alignItems: "space-between", // 상단 정렬
    },
  },
});

// 순차적 애니메이션을 위한 스타일
export const featureItemAnimated = style({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `${featureItemFadeIn} 1200ms ease-out forwards`,
});

// 각 아이템별 지연 시간 설정
export const featureItemDelay1 = style({
  animationDelay: "0ms",
});

export const featureItemDelay2 = style({
  animationDelay: "300ms",
});

export const featureItemDelay3 = style({
  animationDelay: "600ms",
});

export const featureItemDelay4 = style({
  animationDelay: "900ms",
});

export const featureItemDelay5 = style({
  animationDelay: "1200ms",
});

export const featureItemDelay6 = style({
  animationDelay: "1500ms",
});

export const featureNumber = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  ...responsiveFont(20, 18), // 1920px 기준 18px, 모바일 16px
  lineHeight: "140%",
  letterSpacing: "0",
  color: "inherit", // 링크 색상 상속
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flex: `0 0 ${vw(114)}`, // 1920px 기준 114px 고정 너비
  width: vw(114),
  "@media": {
    [breakpoints.desktopLarge]: {
      flex: "0 0 114px", // 1920px 이상에서 114px 고정
      width: "114px",
    },
    [breakpoints.mobile]: {
      flex: "none",
      width: mvw(106),
      fontSize: mvw(18), // 375px 기준 18px로 더 크게
      fontWeight: 500,
      marginBottom: 0, // 하단 마진 제거
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(20),
          fontWeight: 700,
        },
      },
    },
  },
});

export const featureContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "row", // 데스크탑에서는 제목과 설명을 가로로 배치
  alignItems: "flex-start",
  gap: vw(20), // 1920px 기준 20px (제목과 설명 사이 간격)
  "@media": {
    [breakpoints.desktopLarge]: {
      flexDirection: "row", // 1920px 이상에서도 가로 배치
      gap: "20px", // 1920px 이상에서 20px 고정
    },
    [breakpoints.mobile]: {
      width: mvw(225),
      flexDirection: "column", // 모바일에서 세로 배치
      gap: mvw(8), // 375px 기준 8px
      alignItems: "flex-start", // 왼쪽 정렬
    },
  },
});

export const featureTitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(24), // 1920px 기준 24px, vw로 스케일링
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727", // 검은색
  flex: `0 0 ${vw(250)}`, // 1920px 기준 250px 고정 너비
  margin: 0,
  // whiteSpace: "nowrap", // 타이틀은 줄바꿈 없음
  width: vw(250),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px", // 1920px 이상에서 24px 고정
      flex: "0 0 250px", // 1920px 이상에서 250px 고정
      width: "250px",
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      flex: "none", // 모바일에서는 자동 너비
      fontSize: mvw(20), // 375px 기준 16px로 더 크게
      whiteSpace: "normal", // 모바일에서는 필요시 줄바꿈 허용
      fontWeight: 500,
      marginBottom: mvw(24), // 모바일에서 8px 아래 마진
      lineHeight: "140%",
      width: "100%",
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(24),
          fontWeight: 700,
          whiteSpace: "pre-line",
        },
      },
    },
  },
});

export const featureDescription = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(16), // 1920px 기준 18px, vw로 스케일링
  lineHeight: "160%",
  letterSpacing: "0",
  color: "#272727", // 검은색
  margin: 0,
  whiteSpace: "pre-line", // 줄바꿈 유지 (1920px 기준으로 설정된 \n 사용)
  opacity: 0.9,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "16px", // 1920px 이상에서 18px 고정
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      fontSize: mvw(16), // 375px 기준 14px
      lineHeight: "150%",
      fontWeight: 400,
      whiteSpace: "normal", // 모바일에서는 자연스러운 줄바꿈
      opacity: 1, // 투명도 제거
      margin: 0,
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(16),
          lineHeight: "150%",
          whiteSpace: "pre-line !important",
          maxWidth: "100%",
        },
      },
    },
  },
});

// Specialist 섹션
export const specialistSection = style({
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto 120px",
  padding: "0 160px",
  "@media": {
    "screen and (max-width: 1600px)": {
      padding: "0 80px",
    },
    "screen and (max-width: 1024px)": {
      padding: "0 20px",
      margin: "0 auto 80px",
    },
  },
});

export const specialistContent = style({
  display: "flex",
  gap: "120px",
  alignItems: "flex-start",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      gap: "60px",
    },
  },
});

export const specialistText = style({
  flex: "0 0 520px",
  "@media": {
    "screen and (max-width: 1024px)": {
      flex: "none",
      width: "100%",
    },
  },
});

export const specialistTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 24px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "36px",
    },
  },
});

export const specialistDescription = style({
  fontFamily: "'Pretendard', sans-serif",
  fontWeight: 300,
  fontSize: "23px",
  lineHeight: "152%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 40px 0",
  whiteSpace: "pre-line",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
  },
});

export const doctorsGrid = style({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "40px",
  "@media": {
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      gap: "30px",
    },
  },
});

// 신승규 원장 - 1920px 기준 (imageCard1처럼)
export const doctorCard1 = style({
  position: "absolute",
  width: vw(417), // 1920px 기준 280px
  height: vw(566),
  aspectRatio: "417 / 566",
  left: "0", // 1920px 기준 컨테이너 왼쪽 맞춤
  top: "0",
  borderRadius: vw(12),
  overflow: "hidden",
  zIndex: 3,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "417px", // 1920px 이상에서 고정
      height: "566px",
      left: "0",
      borderRadius: "12px",
    },
    [breakpoints.mobile]: {
      position: "relative",
      top: "auto",
      left: "auto",
      margin: "0 auto 20px",
      width: "100%",
      maxWidth: "300px",
      height: "350px",
      aspectRatio: "auto",
      borderRadius: "12px",
      order: 1,
    },
    // "screen and (max-width: 1024px)": {

    // },
    // "screen and (max-width: 767px)": {
    //   height: "320px",
    //   maxWidth: "280px",
    // },
  },
});

// 박수호 원장 - 1920px 기준 (imageCard2처럼)
export const doctorCard2 = style({
  position: "absolute",
  width: vw(423), // 1920px 기준 332px
  height: vw(542),
  aspectRatio: "423 / 542",
  top: vw(350), // 1920px 기준 190px
  right: "0", // 1920px 기준 컨테이너 오른쪽 맞춤
  borderRadius: vw(12),
  overflow: "hidden",
  zIndex: 4,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "423px", // 1920px 이상에서 고정
      height: "542px",
      top: "350px",
      right: "0",
      borderRadius: "12px",
    },
  },
});

// 김나래 원장 - 1920px 기준 (imageCard3처럼)
export const doctorCard3 = style({
  position: "absolute",
  width: vw(441), // 1920px 기준 284px
  height: vw(564),
  aspectRatio: "441 / 564",
  bottom: "0", // 1920px 기준 컨테이너 하단 맞춤
  left: "0", // 1920px 기준 컨테이너 왼쪽 맞춤
  borderRadius: vw(12),
  overflow: "hidden",
  zIndex: 1,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: "441px", // 1920px 이상에서 고정
      height: "564px",
      bottom: "0",
      left: "0",
      borderRadius: "12px",
    },
  },
});

// 기존 레거시 스타일들 (사용하지 않지만 호환성을 위해 유지)
export const doctorCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const doctorNameOverlay = style({
  position: "absolute",
  bottom: "20px",
  right: "20px",
  color: "#FFFFFF",
  textAlign: "right",
  textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
});

export const doctorEnglishName = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  fontSize: "28px",
  lineHeight: "100%",
  letterSpacing: "0",
  color: "#FFFFFF",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "24px",
    },
  },
});

// 바날 로컬 위치 정보 카드
export const locationCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const locationImage = style({
  width: "100%",
  maxWidth: "400px",
  aspectRatio: "1 / 1",
  borderRadius: "8px",
  overflow: "hidden",
  marginBottom: "24px",
  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "300px",
    },
  },
});

export const locationInfo = style({
  textAlign: "center",
});

export const locationName = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "140px",
  lineHeight: "80%",
  letterSpacing: "-4.2px",
  color: "#FFFFFF",
  margin: "0 0 16px 0",
  textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "80px",
      letterSpacing: "-2px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "60px",
      letterSpacing: "-1px",
    },
  },
});

export const locationAddress = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0 0 8px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
    },
  },
});

export const locationDetail = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "20px",
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
  },
});

export const locationContent = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "60px",
});

export const locationHeader = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

export const locationQuote = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  fontSize: "36px",
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "24px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "20px",
    },
  },
});

export const hospitalName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "140%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "24px",
    },
  },
});

export const mapContainer = style({
  width: "100%",
  maxWidth: "1571px",
  aspectRatio: "1571 / 582",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
});

export const mapImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

// 의료진 소개 섹션 - 1920px 기준 반응형
export const doctorsSection = style({
  ...responsiveContainer(1600), // 1920px 기준 1600px 최대 너비 (패딩 포함)
  "@media": {
    [breakpoints.mobile]: {
      width: "100%",
      maxWidth: "none",
      padding: "0", // 패딩 제거
      margin: "0",
      marginBottom: "0", // 하단 마진도 제거
      height: "auto",
    },
  },
});

export const doctorsContent = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between", // 양쪽 끝에 붙이기
  // gap: vw(40), // 간격 추가
  // minHeight: "50vw", // 최소 높이도 비례적으로
  "@media": {
    "screen and (min-width: 1600px)": {
      minHeight: "800px",
    },
    [breakpoints.mobile]: {
      display: "none", // 모바일에서 숨김
    },
  },
});

export const doctorsTextSection = style({
  flexShrink: 0,
  ...responsiveProperty("flexBasis", 520), // 1920px 기준 520px 고정 너비
  "@media": {
    [breakpoints.mobile]: {
      flex: "none",
      width: "100%",
    },
  },
});

export const doctorsMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(60), // 1920px 기준 60px, vw로 스케일링
  lineHeight: "120%",
  letterSpacing: "0",
  color: "#272727",
  marginBottom: vw(80),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "60px", // 1920px 이상에서 60px 고정
      marginBottom: "80px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      fontSize: mvw(36), // 모바일 폰트 크기
    },
  },
});

export const doctorsSubTitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(24), // 1920px 기준 24px, vw로 스케일링
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  marginBottom: vw(32),
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px", // 1920px 이상에서 24px 고정
      marginBottom: "32px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      fontSize: mvw(14.4), // 모바일 폰트 크기
    },
  },
});

export const doctorsDescription = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(24), // 1920px 기준 18px, vw로 스케일링
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: "0",
  marginBottom: vw(80),

  whiteSpace: "pre-line",
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px", // 1920px 이상에서 18px 고정
      marginBottom: "80px", // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      fontSize: mvw(10.8), // 모바일 폰트 크기
    },
  },
});

export const doctorsImageGrid = style({
  // ...responsiveCaptureContainer(700, 800), // 1920px 기준 700x800 캡처 컨테이너

  position: "relative",
  width: vw(1059), // 1024px-1920px에서 컨테이너만 비례 스케일링
  height: vw(1298), // 높이도 비례 스케일링
  aspectRatio: `${1059} / ${1298}`, // 비율 유지
  flexShrink: 0, // 축소 방지
  transformOrigin: "top right", // 오른쪽 상단 기준 스케일
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 완전 고정 (헤더와 동일한 방식)
      width: `1059px`,
      height: `1298px`,
    },
    [breakpoints.mobile]: {
      // 모바일에서는 일반적인 flex 레이아웃으로 전환
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      overflow: "visible",
      aspectRatio: "auto", // 모바일에서는 자동 높이
    },
  },
});

// 둘러싸는 이미지 컨테이너 (모든 의료진 공통)
export const doctorImageContainer = style({
  // position: "relative",
  //   aspectRatio: "1 / 1",
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  overflow: "visible", // 텍스트가 잘리지 않도록
});

// 신승규 원장 영어 이름 - 1920px 기준 정확한 비례 스케일링
export const doctorNameOverlay1 = style({
  position: "absolute",
  zIndex: 1,
  left: vw(250),
  top: vw(54),
  // ...responsiveProperty("left", 170), // 1920px 기준 300px
  // ...responsiveProperty("top", 30), // 1920px 기준 30px
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "250px",
      top: "54px",
    },
    [breakpoints.mobile]: {
      left: "40px",
      top: "40px",
    },
  },
});

// 박수호 원장 영어 이름 - 1920px 기준 정확한 비례 스케일링
export const doctorNameOverlay2 = style({
  position: "absolute",
  zIndex: 10,
  left: vw(416),
  top: vw(668),
  width: vw(490),
  height: vw(224),
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "416px",
      top: "668px",
      width: "490px",
      height: "224px",
    },
    [breakpoints.mobile]: {
      left: "40px",
      bottom: "40px",
      top: "auto",
    },
  },
});

// 김나래 원장 영어 이름 - 1920px 기준 정확한 비례 스케일링
export const doctorNameOverlay3 = style({
  position: "absolute",
  right: "0",
  textAlign: "right",
  zIndex: 10,
  bottom: vw(0),
  "@media": {
    [breakpoints.desktopLarge]: {
      bottom: "0px",
    },
    [breakpoints.mobile]: {
      right: "40px",
      top: "40px",
      bottom: "auto",
    },
  },
});

export const doctorImage1 = style({
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  display: "block",
  zIndex: 1,
});

export const doctorImage2 = style({
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  display: "block",
  zIndex: 1,
});

export const doctorImage3 = style({
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  display: "block",
  zIndex: 1,
});

// 신승규 원장 영어 이름 - 1920px 기준
export const doctorEnglishName1 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(140), // 1920px 기준 80px
  lineHeight: "80%",
  letterSpacing: vw(-2.4), // 1920px 기준 -2.4px
  color: "#FFFFFF",
  margin: 0,
  width: vw(740),
  height: vw(224),
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: "'Poppins', sans-serif",
    },
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "140px",
      width: "740px",
      height: "224px",
      letterSpacing: "-2.4px",
    },
    [breakpoints.mobile]: {
      fontSize: "56px", // 모바일에서 70% 크기
      letterSpacing: "-1.7px",
    },
  },
});

// 박수호 원장 영어 이름 - 1920px 기준
export const doctorEnglishName2 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(140), // 1920px 기준 80px
  lineHeight: "80%",
  letterSpacing: vw(-2.4), // 1920px 기준 -2.4px
  color: "#FFFFFF",
  margin: 0,
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: "'Poppins', sans-serif",
    },
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "140px",
      letterSpacing: "-2.4px",
    },
    [breakpoints.mobile]: {
      fontSize: "56px", // 모바일에서 70% 크기
      letterSpacing: "-1.7px",
    },
  },
});

// 김나래 원장 영어 이름 - 1920px 기준
export const doctorEnglishName3 = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: vw(140), // 1920px 기준 80px
  lineHeight: "80%",
  letterSpacing: vw(-2.8), // 1920px 기준 -2.4px
  color: "#FFFFFF",
  margin: 0,
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: "'Poppins', sans-serif",
    },
  },
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "140px",
      letterSpacing: "-2.8px",
    },
  },
});

// 신승규 원장 한국어 이름 - 1920px 기준
export const doctorKoreanNameContainer1 = style({
  position: "absolute",
  left: vw(271), // 1920px 기준 300px
  top: vw(319), // 1920px 기준 180px
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "271px",
      top: "319px",
    },
    [breakpoints.mobile]: {
      position: "static",
      marginTop: "20px",
      paddingLeft: "40px",
    },
  },
});

// 박수호 원장 한국어 이름 - 1920px 기준
export const doctorKoreanNameContainer2 = style({
  position: "absolute",
  right: vw(74), // 1920px 기준 155px
  top: vw(739), // 1920px 기준 800px로 수정
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {
      right: "74px",
      top: "739px",
    },
    [breakpoints.mobile]: {
      position: "static",
      marginTop: "20px",
      paddingLeft: "40px",
    },
  },
});
// 김나래 원장 한국어 이름 - 1920px 기준
export const doctorKoreanNameContainer3 = style({
  position: "absolute",
  left: vw(300), // 1920px 기준 300px
  top: vw(1100), // 1920px 기준 620px
  zIndex: 10,
  "@media": {
    [breakpoints.desktopLarge]: {
      left: "300px",
      top: "1100px",
    },
  },
});

// 한국어 이름 스타일 - 1920px 기준
export const doctorKoreanName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(24), // 1920px 기준 18px
  lineHeight: "150%",
  letterSpacing: "0",
  color: "#272727",
  margin: 0,
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: "24px",
    },
  },
});

// 신승규 원장 아래 구분선 - 1920px 기준
export const doctorDivider1 = style({
  position: "absolute",
  left: "0",
  top: vw(565), // 1920px 기준 557px
  width: vw(1050), // 1920px 기준 700px
  height: "2px",
  backgroundColor: "#FFFFFF",
  zIndex: 2,
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "565px",
      width: "1050px",
      height: "2px",
    },
  },
});

// 박수호 원장 아래 구분선 - 1920px 기준
export const doctorDivider2 = style({
  position: "absolute",
  right: "0",
  top: vw(890), // 1920px 기준 610px
  width: vw(730), // 1920px 기준 400px
  height: "2px",
  backgroundColor: "#FFFFFF",
  zIndex: 5,
  "@media": {
    [breakpoints.desktopLarge]: {
      top: "890px",
      width: "730px",
      height: "2px",
    },
  },
});

// 모바일 의료진 섹션 스타일들
export const doctorsMobileHeader = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      padding: `${mvw(60)} ${mvw(20)} ${mvw(20)} ${mvw(20)}`,
      backgroundColor: "#73D5FA",
    },
  },
});

export const doctorsMobileTitle = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 500,
      fontSize: mvw(32),
      lineHeight: "120%",
      letterSpacing: "0",
      color: "#272727",
      marginBottom: mvw(32),
    },
  },
});

export const doctorsMobileButtonTop = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
    },
  },
});

export const doctorsMobileCards = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
      padding: 0,
      marginTop: mvw(80), // 이미지가 위로 나오는 공간 확보
      position: "relative",
      height: mvw(750), // 전체 높이 790px로 설정
    },
  },
});

export const doctorMobileCard = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: mvw(20),
      padding: mvw(16),
      backgroundColor: "#FFFDF7",
      borderRadius: mvw(12),
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    },
  },
});

export const doctorMobileImage = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: mvw(100),
      height: mvw(120),
      objectFit: "cover",
      borderRadius: mvw(8),
    },
  },
});

export const doctorMobileInfo = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      gap: mvw(8),
    },
  },
});

export const doctorMobileEnglishName = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: mvw(24),
      lineHeight: "100%",
      letterSpacing: "-0.5px",
      color: "#14AEFF",
      margin: 0,
    },
  },
});

export const doctorMobileKoreanName = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 400,
      fontSize: mvw(14),
      lineHeight: "150%",
      letterSpacing: "0",
      color: "#666666",
      margin: 0,
    },
  },
});

export const doctorsMobileBottom = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      padding: `0 ${mvw(16)} ${mvw(40)} ${mvw(16)}`,
      backgroundColor: "#73D5FA",
      height: mvw(350),
    },
  },
});

export const doctorsMobileDescription = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 500,
      fontSize: mvw(20),
      lineHeight: "140%",
      letterSpacing: "0",
      color: "#272727",
      marginBottom: mvw(16),
    },
  },
});

export const doctorsMobileSubDescription = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: fontFamily.scdream,
      fontWeight: 400,
      fontSize: mvw(16),
      lineHeight: "150%",
      letterSpacing: "0",
      color: "#272727",
      marginBottom: mvw(80),
    },
  },
});

export const doctorsMobileButtonBottom = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      width: "100%",
    },
  },
});

// 모바일 전체 화면 카드 스타일들
export const doctorMobileFullCard = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      position: "relative",
      width: "100%",
      height: mvw(200),
      overflow: "visible", // visible로 변경하여 이미지가 카드 위로 나오도록
      backgroundColor: "#73D5FA",
      "::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: "rgba(255, 255, 255, 0.4)", // 흰색 보더라인
        zIndex: 2,
      },
    },
  },
  selectors: {
    "&:nth-child(1)": {
      zIndex: 1, // 신승규 - 가장 뒤로 변경
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
    "&:nth-child(2)": {
      zIndex: 2, // 박수호 - 중간
      position: "absolute",
      top: mvw(240), // 두 번째 카드 위치 - 약간 겹치게
      left: 0,
      right: 0,
    },
    "&:nth-child(3)": {
      zIndex: 3, // 김나래 - 가장 앞으로 변경
      position: "absolute",
      top: mvw(460), // 세 번째 카드 위치 - 약간 겹치게 (295 + 295)
      left: 0,
      right: 0,
    },
  },
});

export const doctorMobileFullImage = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      position: "absolute",
      left: mvw(-20), // 왼쪽으로 더 빼서 오른쪽 어깨가 보이게
      bottom: 0, // 하단에 고정
      width: mvw(200), // 이미지 너비 증가
      height: mvw(290), // 높이를 290으로 증가
      objectFit: "cover",
      objectPosition: "80% top", // 살짝 왼쪽으로 이동하여 오른쪽 어깨 보이게
      zIndex: 1,
    },
  },
});

export const doctorMobileOverlay = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "flex-start",
      position: "absolute",
      right: mvw(20),
      height: mvw(290),
      width: mvw(165),
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10, // 텍스트가 가장 앞에
    },
  },
});

export const doctorMobileFullName = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: fontFamily.poppins,
      fontWeight: 600,
      fontSize: mvw(42),
      lineHeight: "90%",
      letterSpacing: "-1px",
      color: "#FFFFFF",
      marginBottom: mvw(40),
      position: "relative",
      zIndex: 10, // 텍스트가 항상 앞에
    },
  },
});

// 첫번째 의사 이름용 스타일 (신승규)
export const doctorMobileFullNameFirst = style([
  doctorMobileFullName,
  {
    "@media": {
      [breakpoints.mobile]: {
        marginTop: mvw(0),
        marginBottom: mvw(40),
      },
    },
  },
]);

// 두번째 의사 이름용 스타일 (박수호)
export const doctorMobileFullNameSecond = style([
  doctorMobileFullName,
  {
    "@media": {
      [breakpoints.mobile]: {
        marginTop: mvw(40),
        marginBottom: mvw(40),
      },
    },
  },
]);

// 세번째 의사 이름용 스타일 (김나래)
export const doctorMobileFullNameThird = style([
  doctorMobileFullName,
  {
    "@media": {
      [breakpoints.mobile]: {
        marginTop: mvw(50),
        marginBottom: mvw(40),
      },
    },
  },
]);

export const doctorMobileFullKorean = style({
  display: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "block",
      fontFamily: fontFamily.scdream,
      fontWeight: 400,
      fontSize: mvw(14),
      lineHeight: "150%",
      letterSpacing: "0.02em",
      color: "#272727",
      margin: 0,
      position: "relative",
      zIndex: 10, // 텍스트가 항상 앞에
    },
  },
});
