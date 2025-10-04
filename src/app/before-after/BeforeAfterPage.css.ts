import { style, globalStyle } from '@vanilla-extract/css';
import { breakpoints, vw, responsiveContainer, responsiveFont } from '../../shared/styles/responsive.css';
import { mvw } from '../../shared/styles/responsive.utils';
import { fontFamily } from '../../shared/styles/fonts.css';

// 페이지 전체 컨테이너 - 성능 최적화
export const beforeAfterPage = style({
  minHeight: '100vh',
  backgroundColor: '#FFFDF7',
  padding: 0,
  transform: 'translateZ(0)', // GPU 가속
  backfaceVisibility: 'hidden', // 깜빡임 방지
  willChange: 'transform, opacity', // 애니메이션 최적화
});

// ========== 메인 섹션 ==========
// Hero Section Styles
export const HairTransplantHeroSection = style({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  overflow: 'hidden',
  backgroundColor: '#FFFDF7',
  '@media': {
    [breakpoints.mobile]: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: mvw(90),
    },
  },
});

export const HairTransplantHeroContainer = style({
  position: 'relative',
  width: '100%',
  maxWidth: '1920px',
  margin: '0 auto',
  height: '100vh',
  '@media': {
    [breakpoints.mobile]: {
      padding: `0 ${mvw(20)}`,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },
});

export const HairTransplantHeroIllustration = style({
  position: 'absolute',
  left: '0', // 1920px 컨테이너의 맨 왼쪽부터 시작
  width: '1750px', // 헤더와 완전히 동일한 최대 너비
  maxWidth: 'calc(100% - 160px)', // 헤더와 동일한 제한 (양쪽 160px 마진)
  top: '50%',
  transform: 'translateY(-50%)',
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  '@media': {
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

export const HairTransplantHeroTitleWrapper = style({
  ...responsiveContainer(1600),
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: vw(60),
  zIndex: 2,
  '@media': {
    [breakpoints.desktopLarge]: {
      paddingRight: '60px',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      display: 'block',
      padding: '0',
      marginTop: mvw(80),
      width: '100%',
    },
  },
});

export const HairTransplantHeroTitleContainer = style({
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)',
  textAlign: 'left',
  zIndex: 3,
  right: '0',
  '@media': {
    [breakpoints.desktopLarge]: {
      marginRight: '160px',
      paddingLeft: '40px',
      paddingRight: '60px',
    },
    [breakpoints.desktop]: {
      marginRight: vw(160),
    },
    [breakpoints.mobile]: {
      width: '100%',
      position: 'static',
      top: '0px',
      transform: 'none',
      textAlign: 'center',
      marginRight: '0',
      paddingLeft: '0',
      paddingRight: '0',
      right: 'auto',
    },
  },
});

export const HairTransplantHeroTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60, 40),
  letterSpacing: '0',
  lineHeight: vw(72),
  color: '#272727',
  margin: '0',
  textAlign: 'left',
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '60px',
      lineHeight: '72px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(40),
      lineHeight: mvw(48),
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
});

export const HairTransplantHeroTitleDot = style({
  width: vw(12),
  height: vw(12),
  backgroundColor: '#14AEFF',
  borderRadius: '50%',
  marginLeft: vw(4),
  flexShrink: 0,
  alignSelf: 'flex-end', // 모바일에서는 하단 정렬
  marginBottom: vw(12), // 약간의 하단 여백
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '12px',
      height: '12px',
      marginLeft: '4px',
      marginBottom: '12px',
    },
    [breakpoints.mobile]: {
      width: mvw(10),
      height: mvw(10),
      marginLeft: mvw(4),
      alignSelf: 'flex-end', // 모바일에서는 하단 정렬
      marginBottom: mvw(6), // 약간의 하단 여백
    },
  },
});

export const heroIllustrationImage = style({
  width: '100%',
  height: '100%', // 컨테이너 높이에 맞춤
  objectFit: 'cover', // contain에서 cover로 변경하여 전체 영역을 채움
  objectPosition: 'center right', // 이미지를 오른쪽으로 정렬하여 헤더와 맞춤
  '@media': {
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

export const heroIllustrationImageMobile = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'block',
      width: '100%',
      height: 'auto',
      marginTop: mvw(80),
    },
  },
});

// ========== 캐러셀 섹션 ==========
export const carouselSection = style({
  width: '100%',
  height: 'auto',
  paddingBottom: vw(120),
  '@media': {
    [breakpoints.desktopLarge]: {
      paddingBottom: '120px',
    },
    [breakpoints.mobile]: {
      paddingBottom: mvw(120),
    },
  },
});

export const carouselHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: vw(48),
  gap: vw(40),
  '@media': {
    [breakpoints.desktopLarge]: {
      marginBottom: '48px',
      gap: '40px',
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(48),
      gap: mvw(24),
    },
  },
});

// 서브타이틀이 없을 때 사용 (gap 없음)
export const carouselHeaderNoSubtitle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: vw(48),
  gap: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      marginBottom: '48px',
      gap: 0,
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(48),
      gap: 0,
    },
  },
});

export const categoryBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: vw(228),
  height: vw(44),
  backgroundColor: '#73D5FA',
  color: '#FFFFFF',
  background: '#14AEFF',
  borderRadius: vw(30),
  fontFamily: fontFamily.scdream,
  fontSize: vw(18),
  fontWeight: 500,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '228px',
      height: '44px',
      borderRadius: '30px',
      fontSize: '18px',
    },
    [breakpoints.mobile]: {
      width: mvw(170),
      height: mvw(36),
      borderRadius: mvw(20),
      fontSize: mvw(16),
    },
  },
});

export const itemTitle = style({
  fontFamily: fontFamily.scdream,
  fontSize: vw(18),
  fontWeight: 500,
  color: '#14AEFF',
  lineHeight: '150%',
  minHeight: vw(27), // 타이틀이 없어도 높이 유지

  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '18px',
      minHeight: '27px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      minHeight: mvw(27),
    },
  },
});

// Custom height for BeforeAfterSlider in this page
export const customSliderHeight = style({});

// Apply custom height to imageContainer within customSliderHeight
globalStyle(`${customSliderHeight} div[class*="imageContainer"]`, {
  '@media': {
    [breakpoints.mobile]: {
      height: `${mvw(180)} !important`,
    },
  },
});

export const carouselContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: vw(15), // 간격 15px (전체 290px - 275px 너비)
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1920px',
  margin: '0 auto',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '40px',
    },
    [breakpoints.mobile]: {
      gap: 0,
      justifyContent: 'center',
      alignItems: 'center',
      padding: `0 ${mvw(45)}`,
      height: mvw(180),
    },
  },
});

export const carouselViewport = style({
  flex: '0 0 auto',
  width: vw(790),
  height: vw(474),
  borderRadius: vw(12),
  backgroundColor: '#FFFDF7',
  margin: '0 auto',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '790px',
      height: '474px',
      borderRadius: '12px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      borderRadius: mvw(12),
      backgroundColor: 'transparent',
    },
  },
});

export const mainSlide = style({
  width: '100%',
  position: 'relative',
});

export const sidePreview = style({
  flex: '0 0 auto',
  width: vw(275),
  height: vw(474),
  position: 'relative',
  // transition: "opacity 0.3s ease",
  overflow: 'hidden',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '275px',
      height: '474px',
    },
    [breakpoints.mobile]: {
      display: 'none', // Hide side previews on mobile
    },
  },
});

export const sidePreviewLeft = style({});

export const sidePreviewLeftBlue = style({});

export const sidePreviewRight = style({});

export const sidePreviewRightBlue = style({});

export const carouselArrow = style({
  position: 'absolute',
  top: 'calc(50% - 40px)',
  transform: 'translateY(-50%)',
  width: vw(48),
  height: vw(48),
  borderRadius: vw(8),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  flexShrink: 0,
  color: '#73D5FA',
  zIndex: 20, // z-index 증가
  background: 'transparent',
  border: 'none',
  padding: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '48px',
      height: '48px',
      borderRadius: '8px',
    },
    [breakpoints.mobile]: {
      width: mvw(12),
      height: mvw(22),
      borderRadius: 0,
      top: '50%',
    },
  },
});

export const carouselArrowLeft = style({
  left: vw(400),
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '400px',
    },
    [breakpoints.mobile]: {
      left: mvw(25),
    },
  },
});

export const carouselArrowRight = style({
  right: vw(400),
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '400px',
    },
    [breakpoints.mobile]: {
      right: mvw(25),
    },
  },
});
