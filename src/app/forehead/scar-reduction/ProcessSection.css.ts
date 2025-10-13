import { style } from '@vanilla-extract/css';
import { breakpoints, responsiveContainer } from '@/shared/styles/responsive.css';
import { vw, mvw } from '@/shared/styles/responsive.utils';
import { fontFamily } from '@/shared/styles/fonts.css';

// Section 2: 흉터 줄이는 과정 섹션 (진단부터 봉합까지) - ScarReductionPage.css에서 복사
export const scarProcessSection = style({
  padding: `${vw(120)} 0`,
  backgroundColor: '#FFFDF7',
  '@media': {
    [breakpoints.desktopLarge]: {
      padding: '120px 0',
    },
    [breakpoints.mobile]: {
      padding: `${mvw(60)} 0`,
    },
  },
});

export const scarProcessContent = style({
  ...responsiveContainer(1600),
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: vw(240),
  padding: `0 ${vw(135)}`,
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-line',
  '@media': {
    [breakpoints.desktopLarge]: {
      maxWidth: '1600px',
      padding: '0 135px',
      gap: '240px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      padding: `0 ${mvw(16)}`,
      gap: mvw(120),
    },
  },
});

// 모든 step - 이미지가 왼쪽, 콘텐츠가 오른쪽
export const processStepOdd = style({
  display: 'flex',
  alignItems: 'stretch', // 높이를 맞춰서 양쪽 요소가 같은 높이가 되도록
  gap: vw(380),
  position: 'relative',
  width: '100%',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '380px',
    },
    [breakpoints.mobile]: {
      flexDirection: 'column',
      gap: mvw(40),
    },
  },
});

export const stepNumber = style({
  flex: '0 0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  gap: vw(100),
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '100px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      // gap: mvw(40),
    },
  },
});

// 숫자 텍스트를 이미지 박스 위에 배치
export const stepNumberText = style({
  fontFamily: fontFamily.nordnet,
  fontWeight: 400,
  fontSize: vw(100),
  lineHeight: '100%',
  color: '#272727',

  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.nordnet,
    },
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '100px',
    },
    [breakpoints.mobile]: {
      marginBottom: 0,
      fontSize: mvw(70),
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: 0,
    },
  },
});

// 데스크탑용 헤더 스타일
export const stepHeader = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'row',
  height: vw(120),
  '@media': {
    [breakpoints.desktopLarge]: {
      height: '120px',
    },
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

// 모바일용 헤더 스타일
export const stepHeaderMobile = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginBottom: mvw(40),
    },
  },
});
export const stepContentDesktop = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'row',
  // marginBottom: vw(20),
  '@media': {
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

// 이미지 스타일
export const stepImage = style({
  width: '100%',
  height: 'auto',
  maxWidth: vw(292),
  maxHeight: vw(248), // 418 - 80(숫자) - 90(마진)
  objectFit: 'cover',
  borderRadius: '8px',
  '@media': {
    [breakpoints.desktopLarge]: {
      maxWidth: '292px',
      maxHeight: '248px',
      borderRadius: '8px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      maxWidth: 'none',
      height: mvw(208),
      maxHeight: 'none',
      borderRadius: mvw(8),
    },
  },
});

export const stepContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // 수직 중앙 정렬
  gap: vw(48),
  width: vw(655),
  height: 'auto', // 고정 높이 대신 자동 높이로 변경
  minHeight: vw(288), // 이미지 높이와 비슷하게 최소 높이 설정
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-line',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '48px',
      minHeight: '288px',
      width: '655px', // 1920px 이상에서도 너비 고정하여 줄바꿈 유지
    },
    [breakpoints.mobile]: {
      gap: 0,
      minHeight: 'auto',
      width: '100%',
      position: 'relative',
    },
  },
});

// 피그마 디자인에 맞는 민트색 카테고리 텍스트
export const stepCategory = style({
  fontWeight: '500',
  fontSize: vw(32),
  color: '#14AEFF', // 바날 민트색
  // marginBottom: vw(16),
  textAlign: 'left',
  lineHeight: '150%',
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '32px',
      // marginBottom: '16px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(48),
      marginBottom: 0,
      lineHeight: '120%',
      fontWeight: '500',
      flex: 1,
      textAlign: 'right',
      selectors: {
        'html[data-language="JP"] &': {
          fontWeight: 700,
          lineHeight: '142%',
        },
      },
    },
  },
});

export const stepTitle = style({
  fontFamily: fontFamily.scdream,
  lineHeight: '150%',
  letterSpacing: 0,
  fontWeight: 500,
  fontSize: vw(40),
  color: '#272727',
  margin: 0,
  selectors: {
    'html[data-language="JP"] &': {
      lineHeight: '140%',
    },
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '40px',
      lineHeight: '52px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(20),
      marginBottom: mvw(32),
      selectors: {
        'html[data-language="JP"] &': {
          fontWeight: 700,
          fontSize: mvw(24),
          lineHeight: '140%',
        },
      },
    },
  },
});

export const stepDescription = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(20),
  lineHeight: '150%',
  letterSpacing: 0,
  color: '#272727',
  margin: 0,
  whiteSpace: 'nowrap',
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '20px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(20),
        },
      },
    },
  },
});
