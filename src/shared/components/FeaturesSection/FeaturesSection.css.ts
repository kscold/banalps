import { style, globalStyle } from '@vanilla-extract/css';

import { vw, mvw } from '../../styles/responsive.utils';
import { breakpoints, responsiveContainer, responsiveFont } from '../../styles/responsive.css';
import { fontFamily } from '@/shared/styles/fonts.css';

// Features Section
export const featuresSection = style({
  paddingTop: vw(320), // 1920px 기준 120px 상단 패딩
  paddingBottom: vw(240),
  backgroundColor: '#FFFDF7',
  '@media': {
    [breakpoints.desktopLarge]: {
      paddingTop: '320px',
      paddingBottom: '240px',
    },
    [breakpoints.mobile]: {
      // height: mvw(1752),
      padding: `0 ${mvw(16)} ${mvw(120)} ${mvw(16)}`, // 하단 여백 늘리기
    },
  },
});

export const featuresContent = style({
  ...responsiveContainer(1600), // 전역 1600px 컨테이너 시스템
  boxSizing: 'border-box',

  '@media': {
    [breakpoints.mobile]: {
      padding: 0,
      margin: 0,
      width: '100%',
    },
  },
});

export const featuresHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: vw(100), // 피그마 정확한 간격
  gap: vw(20), // Space between quotation marks and title
  '@media': {
    [breakpoints.desktopLarge]: {
      marginBottom: '100px',
      gap: '20px',
    },
    [breakpoints.mobile]: {
      marginBottom: mvw(80),
      gap: mvw(24),
    },
  },
});

export const featuresIcon = style({
  color: '#2d74ff',
});

export const featuresMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(32, 20), // 피그마 정확한 크기, 모바일 24px
  lineHeight: '150%',
  color: '#272727',
  margin: '0',
  textAlign: 'center',
  letterSpacing: '0',
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '32px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(20),
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(24),
          fontWeight: 700,
        },
      },
    },
  },
});

// SVG 따옴표 스타일 - 상단
export const quotationStart = style({
  width: vw(40), // 피그마 디자인에 맞는 크기
  height: vw(40),
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '40px',
      height: '40px',
    },
    [breakpoints.mobile]: {
      width: mvw(28),
      height: mvw(28),
    },
  },
});

// SVG 따옴표 스타일 - 하단
export const quotationEnd = style({
  width: vw(40), // 피그마 디자인에 맞는 크기
  height: vw(40),
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '40px',
      height: '40px',
    },
    [breakpoints.mobile]: {
      width: mvw(28),
      height: mvw(28),
    },
  },
});

export const featuresGrid = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
  '@media': {
    [breakpoints.desktopLarge]: {
      maxWidth: '1600px',
    },
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      gap: mvw(20),
      alignItems: 'center',
      padding: 0,
    },
  },
});

export const featureCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vw(24), // Gap between icon and title
  textAlign: 'center',
  flex: '1 1 auto',
  width: vw(400), // 피그마 정확한 크기
  minWidth: 'min(22%, 250px)', // 최소 크기 조정
  maxWidth: vw(400), // 최대 크기
  height: 'auto',
  aspectRatio: '1/1',
  backgroundColor: '#D5FEFF', // 피그마 정확한 배경색
  borderRadius: '50%', // 완전한 원형
  position: 'relative',
  padding: '10%', // 원 크기의 10% 패딩
  boxSizing: 'border-box',
  overflow: 'hidden',

  '@media': {
    [breakpoints.desktopLarge]: {
      width: '400px',
      minWidth: '300px',
      maxWidth: '400px',
      aspectRatio: '1/1',
      padding: '40px',
      gap: '24px',
    },
    [breakpoints.mobile]: {
      width: mvw(343),
      minWidth: mvw(343),
      maxWidth: mvw(343),
      height: mvw(343),
      aspectRatio: '1/1',
      borderRadius: '50%',
      padding: mvw(18),
      gap: mvw(24),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '0 0 auto',
    },
  },
});

export const featureIconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%', // 전체 너비 사용
  maxWidth: '100%',
  '@media': {
    [breakpoints.mobile]: {
      width: 'auto',
      height: 'auto',
      position: 'static',
      transform: 'none',
    },
  },
});

export const featureIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#14AEFF', // SVG 아이콘 색상
});

// Individual icon styles with specific heights
export const featureIconImg = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  maxHeight: '100%',
  objectFit: 'contain',
});

export const featureIconFirst = style([
  featureIconImg,
  {
    width: vw(217),
    height: vw(174),
    maxWidth: 'none',
    '@media': {
      'screen and (min-width: 1024px) and (max-width: 1500px)': {
        width: vw(160),
        height: vw(128),
      },
      [breakpoints.desktopLarge]: {
        width: '217px',
        height: '174px',
      },
      [breakpoints.mobile]: {
        width: mvw(176),
        height: mvw(141),
      },
    },
  },
]);

export const featureIconContainerFirst = style({
  top: '17.5%', // 70/400 = 17.5%
  '@media': {
    [breakpoints.desktopLarge]: {
      top: '17.5%',
    },
  },
});

export const featureIconSecond = style([
  featureIconImg,
  {
    width: vw(262),
    height: vw(153),
    maxWidth: 'none',
    '@media': {
      'screen and (min-width: 1024px) and (max-width: 1500px)': {
        width: vw(190),
        height: vw(111),
      },
      [breakpoints.desktopLarge]: {
        width: '262px',
        height: '153px',
      },
      [breakpoints.mobile]: {
        width: mvw(212),
        height: mvw(124),
      },
    },
  },
]);

export const featureIconContainerSecond = style({
  top: '22.5%', // 90/400 = 22.5%
  '@media': {
    [breakpoints.desktopLarge]: {
      top: '22.5%',
    },
  },
});

export const featureIconThird = style([
  featureIconImg,
  {
    width: vw(272),
    height: vw(183),
    maxWidth: 'none',
    '@media': {
      'screen and (min-width: 1024px) and (max-width: 1500px)': {
        width: vw(200),
        height: vw(135),
      },
      [breakpoints.desktopLarge]: {
        width: '272px',
        height: '183px',
      },
      [breakpoints.mobile]: {
        width: mvw(220),
        height: mvw(148),
      },
    },
  },
]);

export const featureIconContainerThird = style({
  top: '15%', // 60/400 = 15%
  '@media': {
    [breakpoints.desktopLarge]: {
      top: '15%',
    },
  },
});

export const featureIconFourth = style([
  featureIconImg,
  {
    width: vw(214),
    height: vw(181),
    maxWidth: 'none',
    '@media': {
      'screen and (min-width: 1024px) and (max-width: 1500px)': {
        width: vw(157),
        height: vw(133),
      },
      [breakpoints.desktopLarge]: {
        width: '214px',
        height: '181px',
      },
      [breakpoints.mobile]: {
        width: mvw(189),
        height: mvw(160),
      },
    },
  },
]);

export const featureIconContainerFourth = style({
  top: '15.75%', // 63/400 = 15.75%
  '@media': {
    [breakpoints.desktopLarge]: {
      top: '15.75%',
    },
  },
});

export const featureTitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400, // 피그마 스펙: 4 Regular = 200
  fontSize: vw(20),
  lineHeight: '150%',
  letterSpacing: '0', // 피그마 스펙
  color: '#272727', // 피그마 정확한 색상
  textAlign: 'center', // 피그마 스펙: CENTER
  margin: '0',
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
  position: 'absolute',
  bottom: '16%', // 64/400 = 16%
  left: '10%',
  right: '10%',
  maxHeight: '35%', // 최대 높이 제한

  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '20px',
      bottom: '16%',
      left: '10%',
      right: '10%',
    },
    [breakpoints.mobile]: {
      fontWeight: 400, // S-Core Dream 4 Regular
      fontSize: mvw(16),
      minHeight: mvw(48),
      lineHeight: '150%',
      whiteSpace: 'normal',
      wordBreak: 'keep-all',
      padding: 0,
      margin: 0,
      position: 'static',
      selectors: {
        'html[data-language="JP"] &': {
          fontWeight: 400,
          whiteSpace: 'normal',
        },
      },
    },
  },
});

// Add spacing between lines in feature titles
globalStyle(`${featureTitle} span`, {
  display: 'inline',
});

globalStyle(`${featureTitle} br`, {
  display: 'block',
  content: '""',
  marginTop: '0.5em',
});

export const featureText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20), // 1920px 기준 20px 반응형
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: '0',
  margin: '0',
  color: '#272727',
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '30px',
    },
    [breakpoints.mobile]: {
      lineHeight: '28px',
    },
  },
});
