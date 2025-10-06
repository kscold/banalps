import { responsiveContainer, responsiveFont } from './../../styles/responsive.css';
import { breakpoints, vw, mvw } from '@/shared/styles/responsive.css';
import { style } from '@vanilla-extract/css';

// Footer Section - 1920px 기준 피그마 디자인 기반
export const footerSection = style({
  backgroundColor: '#73D5FA',
  padding: vw(48),
  color: '#ffffff',
  '@media': {
    [breakpoints.desktopLarge]: {
      padding: '48px',
    },
    [breakpoints.mobile]: {
      padding: `${mvw(80)} ${mvw(16)} ${mvw(100)} ${mvw(16)}`, // Figma: 상단 80px, 좌우 16px, 하단 120px
      minHeight: '556px', // Figma: 556px 높이
      position: 'relative',
    },
  },
});

export const footerContent = style({
  ...responsiveContainer(1600),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height: vw(104),
  '@media': {
    [breakpoints.desktopLarge]: {
      height: '104px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      maxWidth: '100%',
      padding: '0',
      margin: '0',
      flexDirection: 'column',
      height: 'auto',
      gap: '0',
      alignItems: 'flex-start',
    },
  },
});

export const footerLeft = style({
  display: 'flex',
  '@media': {
    [breakpoints.desktopLarge]: {
      // gap: "250px",
    },
    [breakpoints.mobile]: {
      // gap: "20px",
      // flexDirection: "column",
    },
  },
});

export const footerLeftFirst = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vw(40),
  marginRight: vw(155), // 첫 번째와 두 번째 사이 간격
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '40px',
      marginRight: '155px',
    },
    [breakpoints.mobile]: {
      marginRight: 0, // 모바일에서는 마진 제거
    },
  },
});

export const footerCompanyInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vw(4),
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '4px',
    },
  },
});

export const footerClinicName = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400, // Regular로 변경
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: '0',
  margin: '0',
  color: '#ffffff',
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '20px',
    },
  },
});

export const footerRepresentative = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400, // Regular로 변경
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: '0',
  margin: '0',
  color: '#ffffff',
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '20px',
    },
  },
});

export const footerCopyright = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 400,
  ...responsiveFont(14),
  margin: '0',
  color: '#ffffff',
  fontStyle: 'Regular',
  lineHeight: '140%',
  letterSpacing: '0%',

  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '14px',
    },
  },
});

export const footerRightSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vw(4),
  marginRight: vw(135), // 두 번째와 세 번째 사이 간격
  '@media': {
    [breakpoints.desktopLarge]: {
      marginRight: '135px',
    },
    [breakpoints.mobile]: {
      marginRight: 0, // 모바일에서는 마진 제거
    },
  },
});

export const footerAddress = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400, // Regular로 변경
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: '0',
  margin: '0',
  color: '#ffffff',

  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '20px',
    },
  },
});

export const footerLinksContainer = style({
  display: 'flex',
  gap: vw(12),
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '12px',
    },
  },
});

export const footerLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: '0',
  margin: '0',
  color: '#ffffff',
  cursor: 'pointer',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  padding: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '20px',
    },
  },
});

export const footerPhone = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(14),
  lineHeight: vw(20),
  letterSpacing: '0',
  margin: '0',
  color: '#ffffff',
  '@media': {
    [breakpoints.desktopLarge]: {
      lineHeight: '20px',
    },
  },
});

export const footerRight = style({
  display: 'flex',
  alignItems: 'center',
});

export const footerLogoContainer = style({
  width: vw(158),
  height: vw(37),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '158px',
      height: '37px',
    },
  },
});

// 데스크탑 레이아웃 컨테이너
export const desktopLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  '@media': {
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

// 모바일 레이아웃 컨테이너
export const mobileLayout = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // 피그마: 왼쪽 정렬
      textAlign: 'left', // 피그마: 왼쪽 정렬
      gap: 0,
      width: '100%',
    },
  },
});

// 모바일 로고
export const mobileLogo = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: mvw(257),
      height: mvw(60),
      marginBottom: mvw(74), // Figma: 로고와 다음 섹션 간격
      gap: '0',
    },
  },
});

// 모바일 클리닉 정보
export const mobileInfo = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      gap: mvw(8), // Figma: 줄 간격
      marginBottom: mvw(32), // Figma: 다음 섹션과의 간격
    },
  },
});

export const mobileClinicName = style({
  '@media': {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 500,
      fontSize: mvw(12), // Figma: 12px
      lineHeight: '14px', // Figma: 14px
      color: '#FFFFFF',
      margin: 0,
    },
  },
});

export const mobileRepresentative = style({
  '@media': {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 500,
      fontSize: mvw(12), // Figma: 12px
      lineHeight: mvw(14), // Figma: 14px
      color: '#FFFFFF',
      margin: 0,
      letterSpacing: '0%',
    },
  },
});

// 모바일 연락처
export const mobileContact = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      gap: mvw(8), // Figma: 줄 간격
      marginBottom: mvw(32), // Figma: 다음 섹션과의 간격
    },
  },
});

export const mobileAddress = style({
  '@media': {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 500,
      fontSize: mvw(12), // Figma: 12px
      lineHeight: '14px', // Figma: 14px
      color: '#FFFFFF',
      margin: 0,
    },
  },
});

export const mobilePhone = style({
  '@media': {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 500,
      fontSize: mvw(12), // Figma: 12px
      lineHeight: mvw(14), // Figma: 14px
      color: '#FFFFFF',
      margin: 0,
    },
  },
});

// 모바일 링크
export const mobileLinks = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      alignItems: 'center',
      gap: mvw(16), // Figma: 링크 간 간격
      marginBottom: mvw(74), // Figma: 카피라이트와의 간격
    },
  },
});

export const mobileLinkItem = style({
  '@media': {
    [breakpoints.mobile]: {
      fontFamily: "'S-Core Dream', sans-serif",
      fontWeight: 500,
      fontSize: mvw(12),
      lineHeight: '14px',
      color: '#FFFFFF',
      textDecoration: 'none',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: 0,
      ':hover': {
        opacity: 0.8,
      },
    },
  },
});

export const mobileLinkDivider = style({
  '@media': {
    [breakpoints.mobile]: {
      width: '1px',
      height: mvw(12),
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
  },
});

// 모바일 카피라이트
export const mobileCopyright = style({
  '@media': {
    [breakpoints.mobile]: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: mvw(12), // Figma: 12px
      lineHeight: '18px', // Figma: 18px
      color: '#FFFFFF',
      margin: 0,
      textTransform: 'uppercase',
    },
  },
});
