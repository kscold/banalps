import { style } from '@vanilla-extract/css';
import { vw, breakpoints, responsiveProperty, mvw } from '../../shared/styles/responsive.css';
import { fontFamily } from '@/shared/styles/fonts.css';

export const header = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 50,
  width: 'calc(100% - 320px)', // 1024px+ 에서 양쪽 160px 마진 (BlueSection과 동일)
  maxWidth: '1600px', // 1920px 기준 최대 너비
  background: '#14AEFF',
  // backdropFilter: "blur(10px)",
  transition: 'all 300ms ease',
  ...responsiveProperty('top', 50), // 1920px 기준 50px
  ...responsiveProperty('height', 85), // 1920px 기준 85px
  ...responsiveProperty('borderRadius', 128), // 1920px 기준 128px
  '@media': {
    [breakpoints.desktopLarge]: {
      height: '85px',
    },
    [breakpoints.mobile]: {
      // 모바일: 365px~767px (BlueSection과 동일)
      top: '36px',
      width: `calc(100% - ${mvw(32)})`, // 양쪽 20px 마진
      borderRadius: '48px',
      height: mvw(56),
    },
  },
});

// 헤더 뒤쪽에 나타나는 커튼 스타일 배경 (responsiveProperty로 정확한 1920px 기준 구현)
export const headerCurtain = style({
  position: 'fixed',
  top: '0',
  left: 0,
  right: 0,
  zIndex: 45,
  width: '100%',
  height: '0',
  maxHeight: '0',
  background: '#FDFCF8', // Ivory 색상
  transition: 'max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  overflow: 'hidden',
  opacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none',
  selectors: {
    [`${header}:hover ~ &`]: {
      height: 'auto',
      maxHeight: vw(450), // 1920px 기준 450px (정확한 비례 계산)
      opacity: 1,
      visibility: 'visible',
      pointerEvents: 'auto',
      transition: 'max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 0ms',
      '@media': {
        [breakpoints.desktopLarge]: {
          maxHeight: '450px', // 1920px+ 고정
        },
      },
    },
    '&:hover': {
      height: 'auto',
      maxHeight: vw(450), // 1920px 기준 450px
      opacity: 1,
      visibility: 'visible',
      pointerEvents: 'auto',
      transition: 'max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 0ms',
      '@media': {
        [breakpoints.desktopLarge]: {
          maxHeight: '450px', // 1920px+ 고정
        },
      },
    },
  },
  '@media': {},
});

// 서브메뉴 컨테이너 (responsiveProperty로 정확한 1920px 기준 구현)
export const submenuContainer = style({
  background: '#FFFDF7',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '0',
  width: '100%',
  ...responsiveProperty('height', 410), // 1920px 기준 450px
  ...responsiveProperty('paddingTop', 135), // 1920px 기준 140px (헤더top 50px + 헤더높이 85px + 간격 5px)
  ...responsiveProperty('paddingBottom', 40), // 1920px 기준 40px
  ...responsiveProperty('paddingLeft', 160), // 1920px 기준 160px
  ...responsiveProperty('paddingRight', 160), // 1920px 기준 160px
  '@media': {
    [breakpoints.mobile]: {
      // 모바일에서는 숨김
      display: 'none',
    },
  },
});

// 드롭다운 아이템 - 1920px 기준 적용
export const dropdownItem = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(16), // 1920px 기준 16px
  fontWeight: '400',
  fontStyle: '4 Regular',
  lineHeight: '140%',
  letterSpacing: '0%',
  color: '#272727',
  textDecoration: 'none',
  display: 'block',
  minHeight: vw(26), // 한 줄 기준 최소 높이
  textAlign: 'center',
  transition: 'color 200ms ease',
  whiteSpace: 'nowrap', // 기본: 한 줄로 유지 (한국어)
  ':hover': {
    color: '#14AEFF',
  },
  selectors: {
    'html[data-language="JP"] &': {
      whiteSpace: 'pre-line', // 일본어: \n 줄바꿈 적용
    },
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      fontSize: '16px',
      minHeight: '26px',
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: '11px',
      padding: '6px 0',
    },
  },
});

// 드롭다운 아이템 활성 상태
export const dropdownItemActive = style({
  color: '#14AEFF',
  fontWeight: '400', // weight 차이 없이 색상만 변경
});

export const container = style({
  maxWidth: '1600px', // BlueSection과 동일한 maxWidth
  width: '100%',
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  alignItems: 'center',
  position: 'relative', // relative 추가
  ...responsiveProperty('paddingLeft', 60), // 1920px 기준 60px
  ...responsiveProperty('paddingRight', 60), // 1920px 기준 60px
  '@media': {
    [breakpoints.desktopLarge]: {
      paddingLeft: '60px',
      paddingRight: '60px',
    },
    [breakpoints.mobile]: {
      // 모바일: 365px~767px (BlueSection과 동일)
      paddingLeft: mvw(28),
      paddingRight: mvw(28),
    },
  },
});

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '40px',
    },
    [breakpoints.mobile]: {
      // 모바일에서는 space-between으로 처리
      gap: '0',
    },
  },
});

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  flexShrink: 0, // 로고가 줄어들지 않도록
  minWidth: vw(150), // 최소 너비 보장
  position: 'relative',
  zIndex: 10, // 다른 요소보다 위에 표시
  '@media': {
    [breakpoints.desktopLarge]: {
      minWidth: '150px', // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      minWidth: mvw(100), // 모바일에서 mvw 사용
    },
  },
});

export const logoLink = style({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  pointerEvents: 'auto', // 클릭 가능하도록 명시
  cursor: 'pointer',
});

// 로고 이미지 스타일 추가
export const logoImage = style({
  height: vw(24), // 1920px 기준 24px
  width: vw(178), // 1920px 기준 178px
  minHeight: '20px', // 최소 높이
  '@media': {
    [breakpoints.desktopLarge]: {
      height: '24px',
      width: '178px',
    },
    [breakpoints.mobile]: {
      height: mvw(20),
      width: mvw(148),
    },
  },
});

export const logoText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: vw(20), // 1920px 기준 20px
  fontWeight: '600',
  fontStyle: 'normal',
  lineHeight: vw(30), // 1920px 기준 30px
  letterSpacing: '-0.02em',
  color: '#FFFFFF',
  textDecoration: 'none',
  transition: 'all 200ms ease',
  position: 'relative',
  whiteSpace: 'nowrap',
  ':hover': {
    opacity: 0.9,
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      // fontSize: "20px",
      // lineHeight: "30px",
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: mvw(20),
      lineHeight: '21px',
      fontWeight: '500',
    },
  },
});

export const desktopNav = style({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center', // center로 변경해서 고정된 간격 유지
  flex: 1, // 남은 공간 차지
  maxWidth: vw(875), // 최대 너비 875px
  ...responsiveProperty('height', 35), // 1920px 기준 35px
  marginLeft: vw(40), // 간격 줄임
  marginRight: vw(40), // 간격 줄임
  gap: 0, // 간격 제거 (각 아이템이 175px로 고정)
  overflow: 'visible', // ::after가 보이도록 추가
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex',
    },
    // 1439px 이하에서 마진 제거
    'screen and (max-width: 1439px)': {
      marginLeft: '0',
      marginRight: '0',
    },
    [breakpoints.desktopLarge]: {
      maxWidth: '875px', // 1920px 이상에서 최대 너비
      marginLeft: '40px',
      marginRight: '40px',
    },
  },
});

// 네비게이션 아이템 래퍼
export const navItemWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: '1', // 균등 분배
  maxWidth: vw(175), // 최대 너비 175px
  overflow: 'visible', // ::after가 보이도록 추가
  '@media': {
    [breakpoints.desktopLarge]: {
      maxWidth: '175px', // 1920px 이상에서 고정
    },
    'screen and (max-width: 1400px)': {
      maxWidth: '140px', // 작은 화면에서 줄임
    },
  },
});

// 드롭다운 콘텐츠 (1920px 기준 비례 스케일링)
export const dropdownContent = style({
  position: 'absolute',
  top: vw(75), // 헤더 바로 아래 붙이기
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 1,
  visibility: 'visible',
  pointerEvents: 'auto',
  zIndex: 1000,
  transition: 'opacity 150ms ease, transform 150ms ease', // 더 빠른 페이드인
  ...responsiveProperty('gap', 12), // 1920px 기준 12px
  // ...responsiveProperty("paddingTop", 35), // 1920px 기준 35px (40px에서 축소)
  ...responsiveProperty('paddingLeft', 20), // 1920px 기준 20px
  ...responsiveProperty('paddingRight', 20), // 1920px 기준 20px
  // ...responsiveProperty("paddingBottom", 30), // 1920px 기준 30px
  ...responsiveProperty('minWidth', 160), // 1920px 기준 160px
  '@media': {
    [breakpoints.desktopLarge]: {
      top: '75px',

      minWidth: '160px',
    },
  },
});

export const navLink = style({
  fontFamily: "'S-Core Dream', sans-serif",
  color: '#FFFFFF',
  textDecoration: 'none',
  fontWeight: '400',
  letterSpacing: '-0.01em',
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 200ms ease',
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  flexShrink: 0, // 크기 고정
  width: vw(175), // 175px로 고정
  overflow: 'visible', // ::after가 보이도록 추가
  ...responsiveProperty('fontSize', 16), // 1920px 기준 16px
  ...responsiveProperty('lineHeight', 24), // 1920px 기준 24px
  ...responsiveProperty('borderRadius', 12), // 1920px 기준 12px
  ':hover': {
    opacity: 0.8,
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '175px', // 1920px 이상에서 고정
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: '11px',
      lineHeight: '17px',
      borderRadius: '8px',
      width: '56px', // 80px * 0.7
    },
  },
});

// 네비게이션 링크 텍스트
export const navLinkText = style({
  position: 'relative',
  display: 'inline-block',
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(18),
  lineHeight: '150%',
  letterSpacing: '0%',
  textAlign: 'center',

  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-4px', // 텍스트 아래에 위치
    left: '0',
    right: '0',
    width: '100%',
    height: '2px',
    backgroundColor: '#FFFDF7',
    transform: 'scaleX(0)',
    transformOrigin: 'center',
    transition: 'transform 200ms ease',
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '18px',
    },
  },
});

// 활성 상태 네비게이션 링크
export const navLinkActive = style({
  [`& .${navLinkText}::after`]: {
    transform: 'scaleX(1)', // 언더라인 표시
  },
});

export const actionButtons = style({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '100%',
  flexShrink: 0, // 버튼 영역 크기 고정
  position: 'relative', // absolute 제거, relative로 변경
  marginLeft: vw(40), // 자동 마진 대신 고정값 사용
  gap: vw(32), // 1920px 기준 32px 간격 (맞음)
  minWidth: vw(140), // width 대신 minWidth 사용
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex',
    },
    // 1439px 이하에서 왼쪽 마진 제거
    'screen and (max-width: 1439px)': {
      marginLeft: '0',
    },
    [breakpoints.desktopLarge]: {
      minWidth: '140px', // 1920px 이상에서 고정
      marginLeft: '40px',
      gap: '32px',
    },
  },
});

export const loginButton = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 500,
  fontStyle: 'Medium',
  fontSize: vw(20),
  lineHeight: vw(24),
  letterSpacing: '0%',
  // text-align: right;

  color: '#FFFFFF',
  backgroundColor: 'transparent',
  border: 'none',
  // padding: `${vw(12)} ${vw(28)}`, // 1920px 기준 패딩 - 여유공간 추가
  cursor: 'pointer',
  transition: 'all 300ms ease',
  position: 'relative',
  overflow: 'visible', // overflow 수정
  whiteSpace: 'nowrap', // 텍스트 줄바꿈 방지
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.poppins,
    },
  },
  '@media': {
    // 1024-1919px 구간에서 패딩 줄임
    [breakpoints.desktop]: {},
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      fontSize: '20px',
      lineHeight: '24px',
      padding: '12px 24px',
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: '11px',
      lineHeight: '17px',
      padding: '8px 17px',
    },
  },
});

export const consultButton = style({
  fontFamily: fontFamily.poppins,
  color: '#FFFFFF',

  fontSize: vw(20), // 1920px 기준 16px
  fontWeight: 500,
  fontStyle: 'Medium',
  lineHeight: vw(24), // 1920px 기준 24px
  letterSpacing: '0%',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 300ms ease',
  position: 'relative',
  overflow: 'visible', // 드롭다운 화살표가 보이도록
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // 가운데 정렬
  gap: vw(4), // 1920px 기준 4px (텍스트와 화살표 간격 줄임)
  whiteSpace: 'nowrap', // 텍스트 줄바꿈 방지
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.poppins,
    },
  },
  '@media': {
    [breakpoints.desktop]: {},
    [breakpoints.desktopLarge]: {
      fontSize: '20px',
      gap: '4px',
    },
  },
});

export const dropdownArrow = style({
  fontSize: vw(10), // 1920px 기준 10px (작게 조정)
  marginLeft: vw(2), // 1920px 기준 2px
  transition: 'transform 200ms ease',
  display: 'inline-block',
  lineHeight: 1,
  '@media': {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 고정
      fontSize: '10px',
      marginLeft: '2px',
    },
    [breakpoints.mobile]: {
      // 모바일에서 70% 크기
      fontSize: '8px',
      marginLeft: '3px',
    },
  },
});

// 드롭다운 화살표 회전 상태
export const dropdownArrowRotated = style({
  transform: 'rotate(180deg)',
});

export const mobileMenuButton = style({
  display: 'flex',
  alignItems: 'center',
  '@media': {
    [breakpoints.desktop]: {
      display: 'none',
    },
    [breakpoints.desktopLarge]: {
      display: 'none',
    },
  },
});

export const menuIcon = style({
  '@media': {
    [breakpoints.desktop]: {
      display: 'none',
    },
    [breakpoints.mobile]: {
      height: mvw(24),
      width: mvw(24),
    },
  },
});

// 데스크탑 언어 버튼 래퍼
export const languageButtonWrapper = style({
  position: 'relative',
});

// 데스크탑 언어 드롭다운 컨테이너
export const languageDropdownContainer = style({
  position: 'absolute',
  top: 'calc(100% + 10px)',
  right: 0,
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  zIndex: 1000,
  width: vw(120),
  height: vw(102),
  maxWidth: '120px',
  maxHeight: '102px',
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateY(-10px)',
  transition: 'all 0.2s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vw(8),
  '@media': {
    [breakpoints.desktopLarge]: {},
  },
});

// 언어 드롭다운 활성 상태
export const languageDropdownActive = style({
  opacity: 1,
  visibility: 'visible',
  transform: 'translateY(0)',
});

// 언어 옵션 아이템
export const languageOption = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vw(8)} ${vw(16)}`,
  cursor: 'pointer',
  fontSize: vw(18),
  fontFamily: fontFamily.poppins,
  fontWeight: 400,
  color: '#272727',
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',
  textAlign: 'left',
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: '#F3F4F6',
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      padding: '8px 16px',
      fontSize: '16px',
    },
  },
});

// 언어 옵션 활성 상태
export const languageOptionActive = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 400,
  fontStyle: 'Regular',
  fontSize: vw(18),
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000',
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '18px',
    },
  },
});
