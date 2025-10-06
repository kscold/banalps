import { style } from '@vanilla-extract/css';
import {
  responsiveFont,
  responsiveContainer,
  responsiveLeftContent,
  breakpoints,
} from '../../shared/styles/responsive.css';
import { vw, mvw } from '../../shared/styles/responsive.utils';
import { fontFamily } from '@/shared/styles/fonts.css';

// 페이지 전체 스타일 - 성능 최적화
export const scalpTreatmentPage = style({
  minHeight: '100vh',
  backgroundColor: '#FFFDF7', // 헤어라인 페이지는 흰색 배경
  transform: 'translateZ(0)', // GPU 가속
  backfaceVisibility: 'hidden', // 깜빡임 방지
  willChange: 'transform, opacity', // 애니메이션 최적화
});

// Hero Section Styles
export const HairTransplantHeroSection = style({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  overflow: 'visible',
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
    // 추가적인 모바일 브레이크포인트들
    'screen and (max-width: 768px)': {
      padding: `0 ${mvw(20)}`,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    'screen and (max-width: 480px)': {
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
  top: '50%', // SVG일 때는 50%
  transform: 'translateY(-50%)',
  height: vw(765), // 1920px 기준 762px 높이
  zIndex: 1,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '1750px', // 고정 너비
      height: '765px', // 고정 높이
      left: '0', // 왼쪽부터 시작
      maxWidth: 'calc(100% - 160px)', // 헤더와 동일한 제한
    },
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
      width: '1600px', // 고정 너비
      left: '50%', // 중앙 정렬
      transform: 'translateX(-50%)', // 중앙 정렬
      right: 'auto', // right 제거
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
  top: '43%',
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
  fontFamily: fontFamily.scdream,
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
      marginBottom: mvw(5), // 약간의 하단 여백
      alignSelf: 'flex-end', // 모바일에서는 하단 정렬
    },
  },
});

export const heroSection = style({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: mvw(60),
    },
  },
});

export const heroContainer = style({
  position: 'relative',
  width: '100%',
  maxWidth: '1920px',
  margin: '0 auto',
  height: '100vh',
  '@media': {
    [breakpoints.mobile]: {
      height: mvw(537),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
});

export const heroContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const heroIllustrationImage = style({
  width: '100%',
  height: '100%', // 컨테이너 높이에 맞춤
  // objectFit: "cover", // contain에서 cover로 변경하여 전체 영역을 채움
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

// Hero 섹션 전용 대형 비디오 컨테이너 - 전체 화면 크기
export const videoContainer = style({
  position: 'relative',
  width: '100%', // 전체 너비
  maxWidth: '1600px', // 최대 1600px
  height: vw(900), // 1920px 기준 900px 높이
  margin: '0 auto', // 중앙 정렬
  backgroundColor: '#000000',
  borderRadius: vw(20),
  overflow: 'hidden',
  boxShadow: `0 ${vw(20)} ${vw(60)} rgba(0, 0, 0, 0.15)`,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '1600px', // 1920px+ 고정 1600px
      height: '900px',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    },
    [breakpoints.mobile]: {
      width: '100vw', // 모바일 좌우 여백
      height: '500px',
      borderRadius: '16px',
      margin: '0',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    },
  },
});

// 두피치료 섹션 전용 대형 비디오 컨테이너 - 전체 화면 크기
export const scalpTreatmentVideoContainer = style({
  position: 'relative',
  ...responsiveContainer(1600),
  height: vw(790), // 1920px 기준 900px 높이
  borderRadius: '8px',
  overflow: 'hidden',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '1600px', // 1920px+ 고정 1600px
      height: '790px',
      borderRadius: '8px',
    },
    [breakpoints.mobile]: {
      width: '100vw', // 모바일 좌우 여백
      height: mvw(537),
      margin: '0',
      borderRadius: 0,
    },
  },
});

// Vimeo iframe 스타일 - 컨테이너 완전히 채우기
export const vimeoIframe = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '177.77vh',
  height: '100vh',
  minWidth: '100%',
  minHeight: '100%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  borderRadius: '8px',
  objectFit: 'cover',
  '@media': {
    [breakpoints.desktopLarge]: {
      borderRadius: '8px',
    },
    [breakpoints.mobile]: {
      borderRadius: mvw(8),
    },
  },
});

// Section 1: 소개 섹션 - scar-reduction의 디자인을 참고
export const introSection = style({
  backgroundColor: '#FFFDF7',
  position: 'relative',

  '@media': {
    [breakpoints.desktopLarge]: {
      height: '660px',
    },
    [breakpoints.desktop]: {
      height: vw(660),
    },
    [breakpoints.mobile]: {
      margin: `${mvw(120)} 0`,
      width: '100%',
      height: mvw(723),
    },
  },
});

export const introContainer = style({
  ...responsiveLeftContent(),
  paddingLeft: 0,
  display: 'flex',
  position: 'relative',
  height: vw(660),
  '@media': {
    [breakpoints.desktopLarge]: {
      height: '660px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      flexDirection: 'column',
      padding: `0 ${mvw(16)}`,
      gap: '40px',
      margin: 0,
    },
  },
});

export const introTextContent = style({
  flex: '0 0 auto',
  width: vw(500),
  height: vw(498),
  display: 'flex',
  flexDirection: 'column',
  // gap: vw(32),
  gap: '7.5rem',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '500px',
      height: '498px',
      // gap: "32px",
    },
    [breakpoints.mobile]: {
      width: '100%',
      gap: mvw(40),
      textAlign: 'left',
    },
  },
});

// 이미지 컨테이너 스타일 수정
export const introImageContent = style({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: vw(950),
  height: vw(660),
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '950px',
      height: '660px',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      right: 'auto',
      top: 'auto',
      transform: 'none',
      width: '100%',
      height: mvw(305),
      minHeight: mvw(305),
    },
  },
});

// Section 1 전용 이미지 컨테이너 - 950x660 크기로 수정
export const introImageContainer = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  '@media': {
    [breakpoints.desktopLarge]: {
      // borderRadius: "8px",
    },
    [breakpoints.mobile]: {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
    },
  },
});

export const introImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

// Section 3-6용 작은 비디오 컨테이너
export const smallVideoContainer = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  '@media': {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      width: '100%',
      height: '100%',
      borderRadius: 0,
    },
  },
});

export const introTitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(40),
  lineHeight: vw(52),
  color: '#272727',
  margin: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '40px',
      lineHeight: '52px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(24),
      lineHeight: mvw(32),
    },
  },
});

export const introDescription = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(20),
  lineHeight: '150%',
  letterSpacing: 0,
  color: '#272727',
  margin: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '20px',
      lineHeight: '32px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(24),
      height: mvw(232),
      display: 'block',
      // Natural text flow with br tags to fill the height
    },
  },
});

// Section 2: 치료방법 카드들
export const treatmentCardsSection = style({
  padding: `${vw(240)} 0 ${vw(120)} 0`,
  backgroundColor: '#FFFDF7',
  '@media': {
    [breakpoints.desktopLarge]: {
      padding: '240px 0 120px 0',
    },
    [breakpoints.mobile]: {
      width: '100%',
      padding: `0 0 ${mvw(60)} 0`,
    },
  },
});

export const treatmentCardsContainer = style({
  maxWidth: vw(1400),
  margin: '0 auto',
  padding: `0 ${vw(60)}`,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  '@media': {
    [breakpoints.desktopLarge]: {
      maxWidth: '1400px',
      padding: '0 60px',
    },
    [breakpoints.mobile]: {
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '100%',
      gap: mvw(31),
      margin: 0,
      padding: `0 ${mvw(16)}`,
    },
  },
});

export const treatmentCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vw(20),
  height: '100%',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '20px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      gap: mvw(16),
    },
  },
});

export const treatmentCardImage = style({
  width: vw(200),
  height: vw(200),
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '200px',
      height: '200px',
    },
    [breakpoints.mobile]: {
      width: mvw(343),
      height: mvw(343),
    },
  },
});

export const treatmentCardImageImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const treatmentArrow = style({
  width: vw(20),
  height: vw(20),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  marginTop: `calc(${vw(100)} - ${vw(10)})`, // 이미지 높이의 절반 - 화살표 높이의 절반
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '20px',
      height: '30px',
      marginTop: 'calc(100px - 10px)', // 80px
    },
    [breakpoints.mobile]: {
      transform: 'rotate(90deg)',
      width: mvw(30),
      height: mvw(30),
      marginTop: 0,
      alignSelf: 'center',
    },
  },
});

export const treatmentArrowImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const treatmentCardNumber = style({
  position: 'absolute',
  top: vw(-10),
  left: vw(-10),
  width: vw(50),
  height: vw(50),
  borderRadius: '50%',
  backgroundColor: '#8B5CF6',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vw(24),
  fontWeight: 600,
  zIndex: 2,
  '@media': {
    [breakpoints.desktopLarge]: {
      top: '-10px',
      left: '-10px',
      width: '50px',
      height: '50px',
      fontSize: '24px',
    },
    [breakpoints.mobile]: {
      top: mvw(-8),
      left: mvw(-8),
      width: mvw(36),
      height: mvw(36),
      fontSize: mvw(18),
    },
  },
});

export const treatmentCardTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: vw(26),
  color: '#272727',
  textAlign: 'center',
  margin: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '18px',
      lineHeight: '26px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      fontSize: mvw(20),
      lineHeight: '150%',
      letterSpacing: '0%',
    },
  },
});

// Section 3-6: 치료방법 상세 섹션들
export const treatmentDetailSection = style({
  padding: `${vw(120)} 0`,
  backgroundColor: '#FFFDF7',
  '@media': {
    [breakpoints.desktopLarge]: {
      padding: '120px 0',
    },
    [breakpoints.mobile]: {
      padding: 0,
    },
  },
});

// treatmentDetailSection with customizable padding-bottom using CSS variables
export const treatmentDetailSectionCustomPadding = style({
  paddingTop: vw(100),
  paddingBottom: 'var(--padding-bottom)',
  backgroundColor: '#FFFDF7',
  '@media': {
    [breakpoints.desktopLarge]: {
      paddingTop: '100px',
      paddingBottom: 'var(--padding-bottom-desktop)',
    },
    [breakpoints.mobile]: {
      paddingTop: '80px',
      paddingBottom: 'var(--padding-bottom-mobile)',
    },
  },
});

export const treatmentDetailContainer = style({
  position: 'relative',
  maxWidth: vw(1920),
  margin: '0 auto',
  display: 'flex',
  alignItems: 'stretch',
  '@media': {
    [breakpoints.desktopLarge]: {
      maxWidth: '1920px',
    },
    [breakpoints.mobile]: {
      flexDirection: 'column',
      padding: `0 ${mvw(16)} ${mvw(120)} ${mvw(16)}`,
      gap: 0,
      alignItems: 'flex-start',
    },
  },
});

export const treatmentVideoContent = style({
  flex: '0 0 auto',
  width: vw(950),
  height: vw(660),
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: 0,
  borderRadius: '0 8px 8px 0',
  overflow: 'hidden',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '950px',
      height: '660px',
      borderRadius: '8px',
    },
    [breakpoints.mobile]: {
      width: '100vw',
      height: mvw(537),
      order: -1,
      marginLeft: mvw(-16),
      marginRight: mvw(-16),
      borderRadius: 0,
    },
  },
});

export const treatmentTextContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 0,
  paddingLeft: vw(140),
  paddingRight: vw(160),
  paddingTop: 0,
  paddingBottom: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: 0,
      paddingLeft: '140px',
      paddingRight: '160px',
    },
    [breakpoints.desktop]: {
      gap: 0,
    },
    [breakpoints.mobile]: {
      gap: '30px',
      marginTop: '40px',
      paddingLeft: 0,
      paddingRight: 0,
      justifyContent: 'flex-start',
    },
  },
});

export const treatmentTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32),
  color: '#14AEFF',
  margin: 0,
  lineHeight: '150%',
  letterSpacing: '0',

  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '48px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(20),
      lineHeight: mvw(32),
    },
  },
});

export const treatmentSubtitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40),
  lineHeight: '150%',
  letterSpacing: '0',
  color: '#272727',
  margin: 0,
  whiteSpace: 'normal', // 줄바꿈이 제대로 작동하도록 설정
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '56px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(20),
    },
  },
});

// treatmentSubtitle with extra margin bottom for specific sections
export const treatmentSubtitleWithMargin = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40),
  lineHeight: vw(56),
  color: '#272727',
  margin: 0,
  marginBottom: vw(144),
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '56px',
      marginBottom: '144px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(20),
      lineHeight: mvw(32),
      marginBottom: mvw(60),
    },
  },
});

// treatmentSubtitle with customizable margin bottom using CSS variables
export const treatmentSubtitleCustomMargin = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(40),
  lineHeight: '150%',
  letterSpacing: '0',
  color: '#272727',
  margin: 0,
  // marginBottom: "var(--margin-bottom)",
  whiteSpace: 'normal', // 줄바꿈이 제대로 작동하도록 설정
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '56px',
      // marginBottom: "var(--margin-bottom-desktop)",
    },
    [breakpoints.mobile]: {
      fontSize: mvw(20),
      marginBottom: 'var(--margin-bottom-mobile)',
    },
  },
});

export const treatmentDescription = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(24),
  lineHeight: '150%',
  letterSpacing: '0',
  color: '#272727',
  margin: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '36px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
    },
  },
});

// treatmentDescription with customizable margin bottom using CSS variables
export const treatmentDescriptionCustomMargin = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(24),
  lineHeight: vw(36),
  color: '#272727',
  margin: 0,
  marginBottom: 'var(--margin-bottom)',
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '36px',
      marginBottom: 'var(--margin-bottom-desktop)',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(32),
      marginBottom: 'var(--margin-bottom-mobile)',
    },
  },
});

// Treatment image container for two images side by side
export const treatmentImageContainer = style({
  display: 'flex',
  gap: vw(21), // 655 - (317*2) = 21px gap
  width: vw(655),
  height: vw(200),
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '655px',
      height: '200px',
      gap: '21px',
    },
    [breakpoints.mobile]: {
      width: '100vw',
      marginLeft: mvw(-16),
      marginRight: mvw(-16),
      height: 'auto',
      flexDirection: 'column',
      gap: mvw(20),
      padding: `0 ${mvw(16)}`,
    },
  },
});

// Individual treatment image style
export const treatmentImage = style({
  width: vw(317),
  height: vw(200),
  borderRadius: vw(8),
  objectFit: 'cover',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '317px',
      height: '200px',
      borderRadius: '8px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      height: mvw(210),
      borderRadius: mvw(8),
    },
  },
});
