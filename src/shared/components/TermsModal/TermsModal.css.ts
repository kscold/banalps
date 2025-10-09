import { style, globalStyle } from '@vanilla-extract/css';
import { vw, mvw, breakpoints } from '@/shared/styles/responsive.css';
import { fontFamily } from '@/shared/styles/fonts.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 99999, // fullpage 스크롤 컨테이너보다 높게 설정
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: vw(20),
  '@media': {
    [breakpoints.mobile]: {
      padding: mvw(20),
      backgroundColor: 'transparent', // 모바일에서는 투명 배경
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export const modal = style({
  backgroundColor: '#FFFFFF',
  width: vw(800),
  height: vw(1000),
  maxWidth: '90vw',
  maxHeight: '90vh',
  borderRadius: vw(12),
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 99999, // fullpage 스크롤 컨테이너보다 높게 설정
  '@media': {
    [breakpoints.mobile]: {
      width: '90%',
      height: '80vh',
      maxWidth: '90%',
      maxHeight: '80vh',
      borderRadius: mvw(12), // 모바일에서도 둥근 모서리
    },
  },
});

export const modalHeader = style({
  padding: `${vw(60)} ${vw(60)} 0 ${vw(60)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  '@media': {
    [breakpoints.mobile]: {
      padding: `${mvw(24)} ${mvw(24)} ${mvw(16)}`,
    },
  },
});

export const modalHeaderContent = style({
  display: 'flex',
  //   alignItems: "center",
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1px',
    backgroundColor: '#272727',
  },
});

export const title = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(32),
  lineHeight: '150%',
  letterSpacing: '0%',
  margin: 0,
  paddingBottom: vw(40),
  position: 'relative',
  display: 'inline-block',
  color: '#272727',
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      paddingBottom: mvw(6),
    },
  },
});

export const closeButton = style({
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: vw(8),
  width: vw(32),
  height: vw(32),
  '@media': {
    [breakpoints.mobile]: {
      width: mvw(32),
      height: mvw(32),
    },
  },
});

export const modalBody = style({
  padding: vw(60),
  flex: 1,
  overflow: 'auto',
  backgroundColor: '#FFFFFF',
  '@media': {
    [breakpoints.mobile]: {
      padding: `${mvw(24)} ${mvw(24)} ${mvw(24)}`,
    },
  },
});

export const subtitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: '150%',
  letterSpacing: '0%',
  color: '#000000',
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      marginBottom: mvw(20),
    },
  },
});

export const content = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: '160%',
  letterSpacing: '0%',
  color: '#272727',
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
    },
  },
});

// termsContent styles using globalStyle
export const termsContent = style({});

globalStyle(`${termsContent} h4`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: '150%',
  letterSpacing: '0%',
  color: '#272727',
  margin: `${vw(32)} 0 ${vw(24)} 0`,
  // selectors: {
  //   'html[data-language="JP"] &': {
  //     fontFamily: fontFamily.scdream,
  //   },
  // },
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      margin: `${mvw(20)} 0 ${mvw(12)} 0`,
    },
  },
});

globalStyle(`${termsContent} h5`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: '150%',
  letterSpacing: '0%',
  color: '#272727',
  margin: `${vw(20)} 0 ${vw(12)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      margin: `${mvw(16)} 0 ${mvw(8)} 0`,
    },
  },
});

globalStyle(`${termsContent} p`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(16),
  lineHeight: '160%',
  letterSpacing: '0%',
  color: '#000000',
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
    },
  },
});

globalStyle(`${termsContent} ul`, {
  margin: `0 0 ${vw(16)} 0`,
  paddingLeft: vw(20),
  '@media': {
    [breakpoints.mobile]: {
      marginBottom: mvw(12),
      paddingLeft: mvw(16),
    },
  },
});

globalStyle(`${termsContent} li`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: '160%',
  letterSpacing: '0%',
  color: '#272727',
  marginBottom: vw(8),
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      marginBottom: mvw(6),
    },
  },
});

// privacyContent styles using globalStyle
export const privacyContent = style({});

globalStyle(`${privacyContent} h4`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: '150%',
  letterSpacing: '0%',
  color: '#272727',
  margin: `${vw(24)} 0 ${vw(16)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      margin: `${mvw(20)} 0 ${mvw(12)} 0`,
    },
  },
});

globalStyle(`${privacyContent} h5`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: '150%',
  letterSpacing: '0%',
  color: '#272727',
  margin: `${vw(20)} 0 ${vw(12)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      margin: `${mvw(16)} 0 ${mvw(8)} 0`,
    },
  },
});

globalStyle(`${privacyContent} p`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(16),
  lineHeight: '160%',
  letterSpacing: '0%',
  color: '#272727',
  margin: `0 0 ${vw(16)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      marginBottom: mvw(12),
    },
  },
});

globalStyle(`${privacyContent} ul`, {
  margin: `0 0 ${vw(16)} 0`,
  paddingLeft: vw(20),
  '@media': {
    [breakpoints.mobile]: {
      marginBottom: mvw(12),
      paddingLeft: mvw(16),
    },
  },
});

globalStyle(`${privacyContent} li`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: '160%',
  letterSpacing: '0%',
  color: '#272727',
  marginBottom: vw(8),
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      marginBottom: mvw(6),
    },
  },
});
