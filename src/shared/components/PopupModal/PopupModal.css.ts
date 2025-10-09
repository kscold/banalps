import { style, globalStyle } from '@vanilla-extract/css';
import { vw, mvw, breakpoints } from '@/shared/styles/responsive.css';
import { fontFamily } from '@/shared/styles/fonts.css';

export const modal = style({
  position: 'fixed',
  backgroundColor: '#FFFFFF',
  width: vw(800),
  maxWidth: '90vw',
  maxHeight: '90vh',
  borderRadius: vw(12),
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  '@media': {
    [breakpoints.mobile]: {
      width: '90%',
      maxWidth: '90%',
      maxHeight: '80vh',
      borderRadius: mvw(12),
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

export const imageContainer = style({
  width: '100%',
  marginBottom: vw(24),
  '@media': {
    [breakpoints.mobile]: {
      marginBottom: mvw(16),
    },
  },
});

export const popupImage = style({
  width: '100%',
  height: 'auto',
  borderRadius: vw(8),
  '@media': {
    [breakpoints.mobile]: {
      borderRadius: mvw(8),
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

// content 내부의 요소들 스타일 (에디터 생성 HTML)
globalStyle(`${content} p`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: '160%',
  letterSpacing: '0%',
  color: '#242424',
  margin: `0 0 ${vw(12)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      margin: `0 0 ${mvw(12)} 0`,
    },
  },
});

globalStyle(`${content} h1`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 600,
  fontSize: vw(28),
  lineHeight: '150%',
  color: '#242424',
  margin: `${vw(24)} 0 ${vw(16)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(22),
      margin: `${mvw(20)} 0 ${mvw(12)} 0`,
    },
  },
});

globalStyle(`${content} h2`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 600,
  fontSize: vw(24),
  lineHeight: '150%',
  color: '#242424',
  margin: `${vw(20)} 0 ${vw(12)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(20),
      margin: `${mvw(16)} 0 ${mvw(10)} 0`,
    },
  },
});

globalStyle(`${content} h3`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 600,
  fontSize: vw(20),
  lineHeight: '150%',
  color: '#242424',
  margin: `${vw(16)} 0 ${vw(10)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      margin: `${mvw(14)} 0 ${mvw(8)} 0`,
    },
  },
});

globalStyle(`${content} img`, {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: vw(8),
  margin: `${vw(16)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      borderRadius: mvw(8),
      margin: `${mvw(12)} 0`,
    },
  },
});

globalStyle(`${content} ul, ${content} ol`, {
  paddingLeft: vw(24),
  margin: `${vw(12)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      paddingLeft: mvw(20),
      margin: `${mvw(10)} 0`,
    },
  },
});

globalStyle(`${content} li`, {
  fontFamily: fontFamily.scdream,
  fontWeight: 200,
  fontSize: vw(16),
  lineHeight: '160%',
  color: '#242424',
  margin: `${vw(4)} 0`,
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      margin: `${mvw(3)} 0`,
    },
  },
});

globalStyle(`${content} a`, {
  color: '#73D5FA',
  textDecoration: 'underline',
});

globalStyle(`${content} a:hover`, {
  color: '#5BC0E8',
});

globalStyle(`${content} strong`, {
  fontWeight: 600,
});

globalStyle(`${content} em`, {
  fontStyle: 'italic',
});

export const modalFooter = style({
  padding: vw(32),
  display: 'flex',
  gap: vw(16),
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexShrink: 0,
  position: 'relative',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    backgroundColor: '#272727',
  },
  '@media': {
    [breakpoints.mobile]: {
      padding: mvw(20),
      gap: mvw(12),
      flexDirection: 'column',
    },
  },
});

export const closeTodayButton = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(16),
  padding: `${vw(12)} ${vw(24)}`,
  backgroundColor: '#FFFFFF',
  color: '#272727',
  border: '1px solid #272727',
  borderRadius: vw(8),
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      padding: `${mvw(10)} ${mvw(20)}`,
      borderRadius: mvw(8),
      width: '100%',
    },
  },
});

export const closeNowButton = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(16),
  padding: `${vw(12)} ${vw(24)}`,
  backgroundColor: '#FFFFFF',
  color: '#272727',
  border: '1px solid #272727',
  borderRadius: vw(8),
  cursor: 'pointer',
  '@media': {
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      padding: `${mvw(10)} ${mvw(20)}`,
      borderRadius: mvw(8),
      width: '100%',
    },
  },
});
