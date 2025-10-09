import { style, keyframes } from '@vanilla-extract/css';
import {
  breakpoints,
  vw,
  responsiveFont,
  responsiveContainer,
  responsiveLeftContent,
  responsiveImageContainer,
} from '../../shared/styles/responsive.css';
import { mvw } from '../../shared/styles/responsive.utils';
import { fontFamily } from '@/shared/styles/fonts.css';

// 페이지 전체 스타일 - 성능 최적화
export const doctorsPage = style({
  minHeight: '100vh',
  background: '#73D5FA',
  transform: 'translateZ(0)', // GPU 가속
  backfaceVisibility: 'hidden', // 깜빡임 방지
  willChange: 'transform, opacity', // 애니메이션 최적화
});

// Medical Team Section - 피그마 의료진 소개
export const medicalTeamSection = style({
  paddingTop: vw(135),
  background: '#73D5FA',
  '@media': {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      padding: 0,
      background: '#FFFFFF',
    },
  },
});

export const medicalTeamContainer = style({
  ...responsiveLeftContent(),
  padding: vw(0),
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      padding: 0,
      width: '100%',
    },
  },
});

// 헤더 섹션 - Frame 234 (1920x1025)
export const medicalTeamHeader = style({
  height: '100vh',
  position: 'relative',
  width: '100%',
  maxWidth: vw(1760),
  margin: '0 auto',
  '@media': {
    [breakpoints.desktopLarge]: {
      maxWidth: '1760px',
      margin: 0,
    },
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

// 왼쪽 타이틀 - Frame 323 (661x634)
export const medicalTeamTitleSection = style({
  position: 'absolute',
  left: vw(0),
  top: vw(196),
  width: vw(341),
  height: vw(144),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '0px',
      top: '196px',
      width: '341px',
      height: '144px',
    },
    [breakpoints.mobile]: {
      position: 'static',
      width: '100%',
      height: 'auto',
      paddingLeft: '0',
    },
  },
});

export const medicalTeamMainTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(72),
  letterSpacing: '0',
  color: '#272727',
  margin: 0,
  textAlign: 'left',
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '60px',
      lineHeight: '72px',
    },
    [breakpoints.mobile]: {
      fontSize: '40px',
      lineHeight: '48px',
    },
  },
});

// 이미지와 텍스트를 담는 컨테이너
export const medicalTeamHeroSection = style({
  position: 'absolute',
  top: vw(155),
  right: vw(0),
  width: vw(1085),
  height: vw(650),
  '@media': {
    [breakpoints.desktopLarge]: {
      top: '155px',
      right: '0px',
      width: '1085px',
      height: '650px',
    },
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

export const medicalTeamHeroTitle = style({
  position: 'absolute',
  left: vw(32),
  bottom: vw(32),
  width: vw(1080), // SVG 너비
  height: vw(650), // SVG 높이
  objectFit: 'contain',
  zIndex: 2,
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '32px',
      bottom: '32px',
      width: '1080px', // 1920px+ 고정 크기
      height: '650px', // 1920px+ 고정 크기
    },
    [breakpoints.mobile]: {
      width: mvw(300), // 모바일에서는 작게
      height: mvw(180), // 모바일에서는 작게
    },
  },
});

// 의사 섹션들 - 파란 배경 (Frame 299: 1920x1221)
export const doctorSection = style({
  width: vw(1920),
  maxWidth: '1920px',
  margin: '0 auto',
  position: 'relative',
  backgroundColor: '#73D5FA',
  borderRadius: vw(24),
  padding: 0,
  transition: 'transform 0.3s ease',

  selectors: {
    // 첫번째 섹션 (신승규 원장) - medicalTeamContainer 다음이므로 2번째
    '&:nth-child(2)': {
      height: vw(1221),
    },
    // 두번째 섹션 (박수호 원장)
    '&:nth-child(3)': {
      height: vw(1112),
    },
    // 세번째 섹션 (김나래 원장)
    '&:nth-child(4)': {
      height: vw(912),
      marginBottom: vw(0),
    },
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      display: 'flex',
      justifyContent: 'center',
      width: '1920px',
      borderRadius: '24px',
      selectors: {
        '&:nth-child(2)': {
          height: '1221px',
        },
        '&:nth-child(3)': {
          height: '1112px',
        },
        '&:nth-child(4)': {
          height: '912px',
          marginBottom: '0px',
        },
      },
    },
    [breakpoints.mobile]: {
      width: '100vw',
      height: 'auto',
      padding: 0,
      margin: 0,
      borderRadius: 0,
      backgroundColor: '#73D5FA',
      position: 'relative',
      overflow: 'visible',
      selectors: {
        '&:nth-child(2)': {
          height: 'auto',
        },
        '&:nth-child(3)': {
          height: 'auto',
        },
        '&:nth-child(4)': {
          height: 'auto',
        },
      },
    },
  },
});

// 신승규, 김나래 원장용 컨텐츠 컨테이너
export const doctorContent = style({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: vw(1720),
    height: '1px',
    backgroundColor: '#FFFDF7',
    opacity: 0.5,
    zIndex: 10,
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      '::after': {
        width: '1720px',
      },
    },
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

// 박수호 원장용 역순 레이아웃
export const doctorContentReversed = style({
  width: '100%',
  height: '100%',
  position: 'relative',
  // 컨테이너 맨 아래 1px 흰색 가로선
  '::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: vw(1),
    backgroundColor: '#FFFDF7',
    zIndex: 1,
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      height: '100%',
      '::after': {
        height: '1px',
      },
    },
    [breakpoints.desktop]: {
      height: '100%',
    },
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

// 메인 이미지 컨테이너 (600x850) - 신승규 원장
export const doctorImageContainer = style({
  position: 'absolute',
  left: 0,
  bottom: 0, // 하단 기준으로 변경
  width: vw(600),
  height: vw(850),
  borderRadius: 0,
  overflow: 'visible',
  zIndex: 10,
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '0px',
      bottom: '0px',
      width: '600px',
      height: '850px',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      bottom: 'auto',
      width: '100%',
      height: '400px',
    },
  },
});

export const doctorMainImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

// 박수호 원장용 이미지 컨테이너 - 오른쪽 위치 (Reversed 레이아웃)
export const doctorImageContainer2 = style({
  position: 'absolute',
  right: 0,
  bottom: 0, // 하단 기준으로 변경
  width: vw(600),
  height: vw(850),
  borderRadius: 0,
  overflow: 'visible',
  zIndex: 10,
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '0px',
      bottom: '0px',
      width: '600px',
      height: '850px',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      right: 'auto',
      bottom: 'auto',
      width: '100%',
      height: '400px',
    },
  },
});

// 박수호 원장용 인포 섹션 (자격사항)
export const doctorInfo2 = style({
  position: 'absolute',
  left: vw(490),
  bottom: vw(0), // 하단 여백 조정
  width: vw(740),
  height: vw(196),
  zIndex: 10,
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '490px',
      bottom: '0px',
      width: '740px',
      height: '196px',
    },
    [breakpoints.desktop]: {
      left: 'calc(490px * (100vw / 1920))',
      bottom: 'calc(0px * (100vw / 1920))',
      width: 'calc(740px * (100vw / 1920))',
      height: 'calc(196px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      bottom: 'auto',
      width: '100%',
      height: 'auto',
    },
  },
});

// 김나래 원장용 - 신승규와 동일한 레이아웃 (왼쪽 이미지, 오른쪽 텍스트)
export const doctorImageContainer3 = style({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: vw(600),
  height: vw(830),
  borderRadius: 0,
  overflow: 'visible',
  zIndex: 10,
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '0px',
      bottom: '0px',
      width: '600px',
      height: '830px',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '100%',
      height: '400px',
    },
  },
});

export const doctorTextSection3 = style({
  position: 'absolute',
  left: vw(380),
  top: vw(382),
  width: vw(859),
  height: vw(840),
  display: 'flex',
  flexDirection: 'column',
  zIndex: 5,
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '380px',
      top: '382px',
      width: '859px',
      height: '840px',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '100%',
      height: 'auto',
    },
  },
});

// 의사 이름 (Poppins 160px) - 신승규 원장
export const doctorName = style({
  position: 'absolute',
  left: vw(357),
  top: vw(380),
  width: vw(859),
  height: vw(320),
  zIndex: 10,
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '357px',
      top: '380px',
      width: '859px',
      height: '320px',
    },
    [breakpoints.desktop]: {
      left: 'calc(357px * (100vw / 1920))',
      top: 'calc(380px * (100vw / 1920))',
      width: 'calc(859px * (100vw / 1920))',
      height: 'calc(320px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '100%',
      height: 'auto',
      marginBottom: '40px',
    },
  },
});

// 박수호 원장용 이름 - absolute 위치
export const doctorName2 = style({
  position: 'absolute',
  right: vw(328),
  top: vw(400),
  width: vw(558),
  height: vw(320),
  zIndex: 10,
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '328px',
      top: '400px',
      width: '558px',
      height: '320px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      position: 'relative',
      right: 'auto',
      top: 'auto',
      width: '100%',
      height: 'auto',
    },
  },
});

// 김나래 원장용 이름 (Poppins 160px)
export const doctorName3 = style({
  position: 'absolute',
  left: vw(410),
  top: vw(90),
  width: vw(493),
  height: vw(320),
  zIndex: 10,
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '410px',
      top: '90px',
      width: '493px',
      height: '320px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '100%',
      height: 'auto',
      marginBottom: '40px',
    },
  },
});

export const doctorNameText = style({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  ...responsiveFont(160),
  lineHeight: vw(160),
  letterSpacing: '0',
  color: '#FFFFFF', // 하얀색 텍스트
  margin: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '160px',
      lineHeight: '160px',
    },
    [breakpoints.mobile]: {
      fontSize: '60px',
      lineHeight: '60px',
    },
  },
});

// 의사 정보 - 피그마 디자인 기준 absolute 위치
export const doctorInfo = style({
  position: 'absolute',
  left: vw(700),
  bottom: vw(0),
  width: vw(740),
  height: vw(196),
  zIndex: 10,
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '700px',
      bottom: '0px',
      width: '740px',
      height: '196px',
    },
    [breakpoints.desktop]: {
      left: 'calc(700px * (100vw / 1920))',
      bottom: 'calc(0px * (100vw / 1920))',
      width: 'calc(740px * (100vw / 1920))',
      height: 'calc(196px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      bottom: 'auto',
      width: '100%',
      height: 'auto',
    },
  },
});

export const doctorTitle = style({
  position: 'absolute',
  left: vw(700),
  bottom: vw(250),
  width: vw(253),
  height: vw(68),
  zIndex: 10,
  selectors: {
    'html[data-language="JP"] &': {
      width: vw(280),
    },
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '700px',
      bottom: '250px',
      width: '253px',
      height: '68px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      bottom: 'auto',
      width: '100%',
      height: 'auto',
      marginBottom: '20px',
    },
  },
});

// 박수호 원장용 타이틀 - absolute 위치
export const doctorTitle2 = style({
  position: 'absolute',
  right: vw(658),
  bottom: vw(250),
  width: vw(217),
  height: vw(88),
  zIndex: 10,
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '658px',
      bottom: '250px',
      width: '217px',
      height: '88px',
    },
    [breakpoints.desktop]: {
      right: 'calc(658px * (100vw / 1920))',
      bottom: 'calc(250px * (100vw / 1920))',
      width: 'calc(217px * (100vw / 1920))',
      height: 'calc(88px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      right: 'auto',
      bottom: 'auto',
      width: '100%',
      height: 'auto',
    },
  },
});

export const doctorTitle3 = style({
  position: 'absolute',
  left: vw(700),
  bottom: vw(250),
  width: vw(205),
  height: vw(68),
  zIndex: 10,
  selectors: {
    'html[data-language="JP"] &': {
      width: vw(280),
    },
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '700px',
      bottom: '250px',
      width: '205px',
      height: '68px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      bottom: 'auto',
      width: '100%',
      height: 'auto',
      marginBottom: '20px',
    },
  },
});

export const doctorSpecialty = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  ...responsiveFont(14),
  lineHeight: '140%',
  letterSpacing: '0%',
  color: '#000000',
  margin: `0 0 ${vw(12)} 0`,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '14px',
      lineHeight: '20px',
      margin: '0 0 12px 0',
    },
  },
});

export const doctorPosition = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24),
  color: '#000000',
  lineHeight: '150%',
  letterSpacing: '0%',

  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '24px',
      lineHeight: '36px',
    },
  },
});

// 자격증 컨테이너 - 피그마 Frame 294 기준
export const doctorCredentials = style({
  display: 'flex',
  gap: vw(64), // 두 컬럼 사이 간격
  width: vw(740),
  height: vw(196), // 피그마 프레임 높이
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '64px',
      width: '740px',
      height: '196px',
    },
    [breakpoints.mobile]: {
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
      height: 'auto',
      marginTop: '15px',
    },
  },
});

// 자격증 컬럼 - 피그마 Frame 292/293 기준 (338px 너비)
export const credentialColumn = style({
  flex: '0 0 auto',
  width: vw(338), // 피그마 정확한 컬럼 너비
  height: vw(196), // 피그마 컬럼 높이
  position: 'relative',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '338px',
      height: '196px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      height: 'auto',
    },
  },
});

export const credentialList = style({
  listStyle: 'none',
  margin: 0,
  padding: `${vw(16)} 0 ${vw(16)} ${vw(18)}`,
  position: 'relative',
  height: '100%',
  // 수직선 - 수평선에서 딱 끊기도록
  '::before': {
    content: '""',
    position: 'absolute',
    left: vw(-1), // 선 중앙 위치 (2px 선의 중앙 = -1px)
    top: vw(0), // 원 아래부터 시작
    bottom: 0, // 수평선에서 딱 끊김 (컨테이너 bottom과 일치)
    width: vw(2), // 얇은 선
    backgroundColor: '#FFFDF7',
    zIndex: 1,
  },
  // 위쪽 동그라미 - 수직선 정중앙에 맞춤
  '::after': {
    content: '""',
    position: 'absolute',
    left: vw(-3.25), // 선 정중앙에 맞춤 (-1 - 10/2 = -6)
    top: vw(0),
    width: vw(6),
    height: vw(6),
    backgroundColor: '#FFFDF7',
    borderRadius: '50%',
    zIndex: 2,
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      paddingLeft: '18px', // 1920px+ 고정
      '::before': {
        left: '-1px', // 선 중앙 고정
        top: '0px',
        bottom: '0px', // 수평선에서 딱 끊김
        width: '2px', // 고정 두께
      },
      '::after': {
        left: '-3.25px', // 원 정중앙 맞춤 고정
        top: '0px',
        width: '6px', // 고정 크기
        height: '6px',
      },
    },
    [breakpoints.mobile]: {
      paddingLeft: '12px',
      '::before': {
        left: '-0.5px', // 1px 선의 중앙
        top: '-8px',
        bottom: '0px',
        width: '1px',
      },
      '::after': {
        left: '-4.5px', // 원 정중앙
        top: '-12px',
        width: '8px',
        height: '8px',
      },
    },
  },
});

// li 요소를 위한 별도 스타일
export const credentialItem = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(16),
  lineHeight: '160%',
  letterSpacing: '0%',
  color: '#000000', // 하얀색 텍스트
  whiteSpace: 'nowrap',
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '16px',
      lineHeight: '26px',
    },
  },
});

// 일본어일 때 의사 인용구 넓이 조정
export const doctorQuote1JP = style({
  position: 'absolute',
  left: vw(1240),
  top: vw(192),
  width: vw(560),
  height: vw(156),
  textAlign: 'center',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease, backgroundColor 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '1240px',
      top: '192px',
      width: '560px',
      height: '156px',
    },
    [breakpoints.desktop]: {
      left: 'calc(1240px * (100vw / 1920))',
      top: 'calc(192px * (100vw / 1920))',
      width: 'calc(560px * (100vw / 1920))',
      height: 'calc(156px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '100%',
      height: 'auto',
      padding: '20px',
    },
  },
});

// 의사 인용구 - 피그마 Frame 303 위치
export const doctorQuote1 = style({
  position: 'absolute',
  left: vw(1240),
  top: vw(192),
  width: vw(445),
  height: vw(156),
  textAlign: 'center',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease, backgroundColor 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '1240px',
      top: '192px',
      width: '445px',
      height: '156px',
    },
    [breakpoints.desktop]: {
      left: 'calc(1240px * (100vw / 1920))',
      top: 'calc(192px * (100vw / 1920))',
      width: 'calc(445px * (100vw / 1920))',
      height: 'calc(156px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '100%',
      height: 'auto',
      padding: '20px',
    },
  },
});

export const doctorQuoteText1 = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vw(24),
  width: '100%',
  height: '100%',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '24px',
    },
    [breakpoints.desktop]: {
      gap: 'calc(24px * (100vw / 1920))',
    },
  },
});

// 의사 인용구 - 피그마 Frame 303 위치
export const doctorQuote3 = style({
  position: 'absolute',
  right: vw(108),
  top: vw(225),
  width: vw(516),
  height: vw(180),
  textAlign: 'center',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease, backgroundColor 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '108px',
      top: '225px',
      width: '516px',
      height: '156px',
    },
    [breakpoints.desktop]: {
      right: 'calc(108px * (100vw / 1920))',
      top: 'calc(225px * (100vw / 1920))',
      width: 'calc(516px * (100vw / 1920))',
      height: 'calc(156px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '100%',
      height: 'auto',
      padding: '20px',
    },
  },
});

export const doctorQuoteText3 = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vw(24),
  width: '100%',
  height: '100%',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '24px',
    },
    [breakpoints.desktop]: {
      gap: 'calc(24px * (100vw / 1920))',
    },
  },
});

export const doctorQuoteTextParagraph = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(20),
  letterSpacing: '0',
  color: '#FFFFFF',
  margin: 0,
  lineHeight: '150%',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '20px',
    },
    [breakpoints.desktop]: {
      fontSize: 'calc(20px * (100vw / 1920))',
      lineHeight: 'calc(30px * (100vw / 1920))',
    },
  },
});

export const quotationStart = style({
  width: vw(24),
  height: vw(24),
  opacity: 1,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '24px',
      height: '24px',
    },
    [breakpoints.desktop]: {
      width: 'calc(24px * (100vw / 1920))',
      height: 'calc(24px * (100vw / 1920))',
    },
  },
});

export const quotationEnd = style({
  width: vw(24),
  height: vw(24),
  opacity: 1,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '24px',
      height: '24px',
    },
    [breakpoints.desktop]: {
      width: 'calc(24px * (100vw / 1920))',
      height: 'calc(24px * (100vw / 1920))',
    },
  },
});

// 박수호 원장용 인용문 - absolute 위치
export const doctorQuote2 = style({
  position: 'absolute',
  top: vw(416),
  left: vw(430),
  width: vw(501),
  height: vw(156),
  textAlign: 'center',
  backgroundColor: 'transparent',
  borderRadius: vw(16),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease, backgroundColor 0.3s ease',
  zIndex: 15,
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '430px',
      top: '416px',
      width: '501px',
      height: '156px',
      borderRadius: '16px',
    },
    [breakpoints.desktop]: {
      left: 'calc(430px * (100vw / 1920))',
      top: 'calc(416px * (100vw / 1920))',
      width: 'calc(501px * (100vw / 1920))',
      height: 'calc(156px * (100vw / 1920))',
      borderRadius: 'calc(16px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      bottom: 'auto',
      width: '100%',
      height: 'auto',
      padding: '20px',
    },
  },
});

export const doctorQuoteText2 = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vw(24),
  width: '100%',
  height: '100%',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '24px',
    },
    [breakpoints.desktop]: {
      gap: 'calc(24px * (100vw / 1920))',
    },
  },
});

// 박수호/김나래 원장용 인용문
export const doctorQuote = style({
  position: 'absolute',
  left: vw(60), // 왼쪽 위치에 배치
  bottom: vw(60),
  width: vw(445),
  height: vw(156),
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: vw(16),
  padding: vw(40),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease, backgroundColor 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '60px',
      bottom: '60px',
      width: '445px',
      height: '156px',
      borderRadius: '16px',
      padding: '40px',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      bottom: 'auto',
      width: '100%',
      height: 'auto',
      padding: '20px',
    },
  },
});

export const doctorQuoteText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 200,
  ...responsiveFont(20),
  lineHeight: vw(30),
  letterSpacing: '0',
  color: '#FFFFFF',
  margin: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '20px',
      lineHeight: '30px',
    },
  },
});

// 서브 이미지들 컨테이너 - 맨 아래 1px 가로선 추가
export const doctorSubImages = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  // 컨테이너 맨 아래 1px 흰색 가로선
  '::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: vw(1),
    backgroundColor: '#FFFDF7',
    zIndex: 1,
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      '::after': {
        height: '1px',
      },
    },
    [breakpoints.mobile]: {
      display: 'none', // 모바일에서 숨김
    },
  },
});

// 첫 번째 서브 이미지 - 피그마 Frame 15393 위치 (-7352, 1201)
export const doctorSubImage = style({
  position: 'absolute',
  left: vw(309), // -7352 - (-7661) = 309px from container left
  top: 0, // 1201 - 1201 = 0px from container top
  width: vw(360),
  height: vw(260),
  borderRadius: 0, // 테두리 제거
  overflow: 'visible', // 실루엣이 보이도록
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '309px',
      top: '0px',
      width: '360px',
      height: '260px',
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '200px',
      height: '150px',
      flexShrink: 0,
    },
  },
});

// 두 번째 서브 이미지 - 피그마 Frame 15394 위치 (-6286, 1955)
export const doctorSubImage2 = style({
  position: 'absolute',
  left: vw(1375), // -6286 - (-7661) = 1375px from container left
  top: vw(754), // 1955 - 1201 = 754px from container top
  width: vw(310),
  height: vw(190),
  borderRadius: 0, // 테두리 제거
  overflow: 'visible', // 실루엣이 보이도록
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      left: '1375px',
      top: '754px',
      width: '310px',
      height: '190px',
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '200px',
      height: '150px',
      flexShrink: 0,
    },
  },
});

export const doctorSubImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

// 박수호 원장용 서브 이미지 컨테이너 (reversed 레이아웃)
export const doctorSubImages2 = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  '::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: vw(1),
    backgroundColor: '#FFFDF7',
    zIndex: 1,
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      '::after': {
        height: '1px',
      },
    },
    [breakpoints.mobile]: {
      display: 'none', // 모바일에서 숨김
    },
  },
});

// 박수호 원장용 첫번째 서브 이미지 - 오른쪽 위치
export const doctorSubImagePark1 = style({
  position: 'absolute',
  right: vw(805),
  top: vw(100),
  width: vw(350),
  height: vw(220),
  overflow: 'visible',
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '805px',
      top: '100px',
      width: '350px',
      height: '220px',
    },
    [breakpoints.desktop]: {
      right: 'calc(309px * (100vw / 1920))',
      top: '100px',
      width: 'calc(350px * (100vw / 1920))',
      height: 'calc(220px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      right: 'auto',
      top: 'auto',
      width: '200px',
      height: '150px',
      flexShrink: 0,
    },
  },
});

export const doctorSubImagePark2 = style({
  position: 'absolute',
  left: vw(0),
  top: vw(612),
  width: vw(370),
  height: vw(270),
  borderRadius: 0,
  overflow: 'visible',
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '235px',
      bottom: '96px',
      width: '370px',
      height: '270px',
      borderRadius: 0,
    },
    [breakpoints.desktop]: {
      right: 'calc(235px * (100vw / 1920))',
      bottom: 'calc(96px * (100vw / 1920))',
      width: 'calc(310px * (100vw / 1920))',
      height: 'calc(190px * (100vw / 1920))',
    },
    [breakpoints.mobile]: {
      position: 'relative',
      right: 'auto',
      bottom: 'auto',
      width: '200px',
      height: '150px',
      flexShrink: 0,
    },
  },
});

// 김나래 원장용 서브 이미지 컨테이너 - 신승규와 동일
export const doctorSubImages3 = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  '::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: vw(1),
    backgroundColor: '#FFFDF7',
    zIndex: 1,
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      '::after': {
        height: '1px',
      },
    },
    [breakpoints.mobile]: {
      display: 'none', // 모바일에서 숨김
    },
  },
});

export const doctorSubImageKim1 = style({
  position: 'absolute',
  right: vw(650),
  top: vw(100),
  width: vw(290),
  height: vw(180),
  borderRadius: 0,
  overflow: 'visible',
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '650px',
      top: '100px',
      width: '290px',
      height: '180px',
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '200px',
      height: '150px',
      flexShrink: 0,
    },
  },
});

export const doctorSubImageKim2 = style({
  position: 'absolute',
  right: vw(0),
  bottom: vw(170),
  width: vw(400),
  height: vw(280),
  borderRadius: 0,
  overflow: 'visible',
  transition: 'transform 0.3s ease',
  '@media': {
    [breakpoints.desktopLarge]: {
      right: '0px',
      bottom: '170px',
      width: '400px',
      height: '280px',
      borderRadius: 0,
    },
    [breakpoints.mobile]: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      width: '200px',
      height: '150px',
      flexShrink: 0,
    },
  },
});

// ==================== HISTORY SECTION ====================

// 연혁 섹션 - 전체 컨테이너
export const historySection = style({
  width: '100%',
  backgroundColor: '#FFFDF7', // 흰색 배경으로 의료진과 구분
  padding: `${vw(240)} 0`,
  '@media': {
    [breakpoints.desktopLarge]: {
      padding: '240px 0',
    },
    [breakpoints.mobile]: {
      padding: `${mvw(120)} ${mvw(16)}`,
    },
  },
});

export const historyContainer = style({
  ...responsiveContainer(1600),
  display: 'flex',
  flexDirection: 'column',
  gap: vw(80),
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '80px',
    },
    [breakpoints.mobile]: {
      gap: mvw(80),
      width: '100%',
    },
  },
});

// 연혁 헤더
export const historyHeader = style({
  textAlign: 'left',
  '@media': {
    [breakpoints.desktopLarge]: {},
    [breakpoints.mobile]: {
      marginBottom: 0,
    },
  },
});

export const historyTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(60),
  lineHeight: vw(72),
  letterSpacing: '0',
  color: '#272727',
  margin: 0,
  width: vw(480),
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '60px',
      lineHeight: '72px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      fontSize: mvw(36),
      lineHeight: '120%',
      color: '#000000',
      textAlign: 'left',
    },
  },
});

// 데스크탑 타임라인 컨테이너
export const timelineDesktop = style({
  display: 'block',
  '@media': {
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

// 모바일 타임라인 컨테이너
export const timelineMobile = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'block',
      width: '100%',
      padding: `0 ${mvw(16)}`,
    },
  },
});

export const timelineMobileContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: mvw(40),
});

export const timelineArrowMobile = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const timelineMobileYear = style({
  width: mvw(312),
  height: mvw(103),
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// 타임라인 레이아웃 - 2라인 구조
export const timelineLayout = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vw(40),
  alignItems: 'center',
  position: 'relative',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '40px',
    },
    [breakpoints.mobile]: {
      gap: '30px',
    },
  },
});

// 상단 라인
export const timelineTopRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vw(40),
  width: '100%',
  justifyContent: 'center',
});

// 하단 라인
export const timelineBottomRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vw(40),
  width: '100%',
  justifyContent: 'center',
});

// 2011년 스타일
export const year2011 = style({
  fontSize: vw(80),
  fontWeight: 700,
  fontFamily: "'S-Core Dream', sans-serif",
  color: '#333333',
});

// 2024년 스타일
export const year2024 = style({
  fontSize: vw(80),
  fontWeight: 700,
  fontFamily: "'S-Core Dream', sans-serif",
  color: '#333333',
});

// 연도 텍스트 스타일
export const yearTextStyle = style({
  display: 'block',
});

// 학술 아이콘
export const academicIcon = style({
  width: vw(80),
  height: vw(80),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// Update 배지
export const updateBadge = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FF6B6B',
  color: '#FFFFFF',
  padding: `${vw(8)} ${vw(24)}`,
  borderRadius: vw(20),
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  fontSize: vw(16),
  '@media': {
    [breakpoints.desktopLarge]: {
      padding: '8px 24px',
      borderRadius: '20px',
      fontSize: '16px',
    },
  },
});

// 첫 번째 라인: 2011 - 화살표 - 첫 번째 이미지 (왼쪽 정렬)
export const timelineFirstRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vw(20),
  width: '100%',
  paddingLeft: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '20px',
    },
    [breakpoints.desktop]: {
      gap: vw(20),
    },
    [breakpoints.mobile]: {
      flexDirection: 'column',
      gap: mvw(20),
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
});

// 두 번째 라인: 두 번째 이미지 - 파란색 원 - 2024 (오른쪽 정렬)
export const timelineSecondRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vw(20),
  width: '100%',
  flexShrink: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '20px',
    },
    [breakpoints.desktop]: {
      gap: vw(20),
    },
    [breakpoints.mobile]: {
      gap: mvw(20),
    },
  },
});

export const timelineRow = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vw(60), // 간격 증가
  maxWidth: '1600px', // 전체 너비 증가
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '60px',
    },
    [breakpoints.mobile]: {
      flexDirection: 'column',
      gap: '30px',
      maxWidth: 'none',
    },
  },
});

// 2011년 그룹 - 피그마 디자인 기준 대형 사이즈
export const year2011Group = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: vw(730),
  height: vw(258),
  flexShrink: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '730px',
      height: '258px',
    },
    [breakpoints.desktop]: {
      width: vw(600),
      height: vw(258),
    },
    'screen and (min-width: 1024px) and (max-width: 1324px)': {
      width: vw(500),
      height: vw(258),
    },
    [breakpoints.mobile]: {
      width: '300px',
      height: '120px',
    },
  },
});

export const year2011Image = style({
  width: '100%',
  height: '100%',
});

// 화살표 - 피그마 디자인 기준 크기
export const timelineArrow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: vw(335), // 화살표 크기 증가
  height: vw(164),
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '335px',
      height: '164px',
    },
    [breakpoints.desktop]: {
      width: vw(335),
      height: vw(164),
    },
    [breakpoints.mobile]: {
      width: '100px',
      height: '50px',
      transform: 'rotate(90deg)',
    },
  },
});

// 타임라인 중앙 이미지 - 피그마 디자인 기준 대형 사이즈
export const timelineImage1 = style({
  width: vw(380), // 크기 대폭 증가
  height: vw(250),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vw(12), // 모서리 둥글게
  overflow: 'hidden',
  flexShrink: 0,
  aspectRatio: '380 / 250', // 비율 유지
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '380px',
      height: '250px',
      borderRadius: '12px',
    },
    [breakpoints.desktop]: {
      width: vw(380),
      height: vw(250),
    },
    [breakpoints.mobile]: {
      width: '160px',
      height: '120px',
      borderRadius: '8px',
    },
  },
});

// 타임라인 중앙 이미지 - 피그마 디자인 기준 대형 사이즈
export const timelineImage2 = style({
  width: vw(300), // 크기 대폭 증가
  height: vw(250),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vw(12), // 모서리 둥글게
  overflow: 'hidden',
  flexShrink: 0,
  aspectRatio: '300 / 250', // 비율 유지
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '300px',
      height: '250px',
      borderRadius: '12px',
    },
    [breakpoints.desktop]: {
      width: vw(300),
      height: vw(250),
      borderRadius: '10px',
    },
    [breakpoints.mobile]: {
      width: '160px',
      height: '120px',
      borderRadius: '8px',
    },
  },
});

export const timelineImageContent = style({
  width: '100%',
  height: '100%',
});

export const timelineArrowSvg = style({
  width: '100%',
  height: '100%',
});

// 원형 아이콘 그룹 - 피그마 디자인 기준 크기
export const circleIconGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: vw(248), // blueCircle과 일치
  height: vw(248),
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '248px',
      height: '248px',
    },
    [breakpoints.desktop]: {
      width: vw(248),
      height: vw(248),
    },
    [breakpoints.mobile]: {
      width: '150px',
      height: '150px',
    },
  },
});

export const circleIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: vw(248), // 파란색 원과 같은 크기
  height: vw(248),
  flexShrink: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '248px',
      height: '248px',
    },
    [breakpoints.desktop]: {
      width: vw(248),
      height: vw(248),
    },
    [breakpoints.mobile]: {
      width: '150px',
      height: '150px',
    },
  },
});

export const circleIconSvg = style({
  width: '100%',
  height: '100%',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '248px',
      height: '248px',
    },
    [breakpoints.mobile]: {
      width: '150px',
      height: '150px',
    },
  },
});

// 파란색 원 - 피그마 디자인 기준
export const blueCircle = style({
  width: vw(248),
  height: vw(248),
  backgroundColor: '#73D5FA',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '248px',
      height: '248px',
    },
    [breakpoints.mobile]: {
      width: '150px',
      height: '150px',
    },
  },
});

// 2024년 그룹 - 피그마 디자인 기준 대형 사이즈
export const year2024Group = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: vw(730),
  height: vw(258),
  flexShrink: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '730px',
      height: '258px',
    },
    [breakpoints.desktop]: {
      width: vw(600),
      height: vw(258),
    },
    'screen and (min-width: 1024px) and (max-width: 1324px)': {
      width: vw(500),
      height: vw(258),
    },
    [breakpoints.mobile]: {
      width: '300px',
      height: '120px',
    },
  },
});

export const year2024Image = style({
  width: '100%',
  height: '100%',
});

export const yearLabel2024 = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  ...responsiveFont(80),
  lineHeight: vw(96),
  color: '#14AEFF',
  margin: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '80px',
      lineHeight: '96px',
    },
    [breakpoints.mobile]: {
      fontSize: '48px',
      lineHeight: '60px',
    },
  },
});

export const year2024Content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vw(12),
  textAlign: 'right',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '12px',
    },
    [breakpoints.mobile]: {
      textAlign: 'center',
    },
  },
});

export const year2024Text = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 400,
  ...responsiveFont(20),
  lineHeight: vw(28),
  color: '#666666',
  margin: 0,
  '@media': {
    [breakpoints.desktopLarge]: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    [breakpoints.mobile]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
});

// ==================== ACADEMIC ACTIVITIES SECTION ====================

// 학술활동 섹션 - 전체 컨테이너
export const academicActivitiesSection = style({
  width: '100%',
  backgroundColor: '#FFFDF7', // 흰색 배경
  padding: `${vw(120)} 0`,
  position: 'relative',
  zIndex: 2,
  '@media': {
    [breakpoints.desktopLarge]: {
      padding: '120px 0',
    },
    [breakpoints.mobile]: {
      padding: `0 ${mvw(16)} ${mvw(60)} ${mvw(16)}`,
      display: 'block',
      overflow: 'hidden',
    },
  },
});

export const academicActivitiesContainer = style({
  ...responsiveContainer(1600),
  height: vw(704),
  display: 'flex',
  flexDirection: 'column',
  gap: vw(80),
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '80px',
    },
    [breakpoints.mobile]: {
      width: '100%',
      height: 'auto',
      gap: '60px',
    },
  },
});

// Academic Activities Section - 새로운 피그마 디자인
export const academicActivitiesLayout = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vw(138),
  width: '100%',
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '138px',
    },
    [breakpoints.desktop]: {
      flexDirection: 'column',
      gap: '40px',
    },
    [breakpoints.mobile]: {
      flexDirection: 'column',
      gap: '30px',
    },
  },
});

// 오른쪽 학술활동 콘텐츠
export const academicContent = style({
  width: '100%',
  '@media': {
    [breakpoints.desktopLarge]: {},
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      padding: 0,
    },
  },
});

export const academicContentTitle = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 500,
  ...responsiveFont(24),
  lineHeight: vw(36),
  color: '#272727',
  margin: 0,
  marginBottom: vw(30),
  '@media': {
    [breakpoints.desktopLarge]: {},
    [breakpoints.desktop]: {
      fontSize: '20px',
      lineHeight: '30px',
      marginBottom: '40px',
    },
    [breakpoints.mobile]: {
      fontSize: mvw(18),
      lineHeight: mvw(28),
      marginBottom: mvw(30),
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(20),
          fontWeight: 700,
        },
      },
    },
  },
});

export const academicTable = style({
  position: 'relative',
  width: '100%',
  height: vw(628),
  maxHeight: vw(628),
  '@media': {
    [breakpoints.desktopLarge]: {
      height: '628px',
      maxHeight: '628px',
    },
    [breakpoints.desktop]: {
      height: 'auto',
      maxHeight: '628px',
    },
    [breakpoints.mobile]: {
      height: mvw(500),
      maxHeight: mvw(500),
    },
  },
});

export const academicTableContainer = style({
  width: '100%',
  height: vw(628),
  overflowY: 'auto',
  overflowX: 'hidden',
  scrollbarWidth: 'thin',
  borderTop: '2px solid #707070',
  borderBottom: '2px solid #707070',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '100%',
      height: '628px',
    },
    [breakpoints.desktop]: {
      width: '100%',
      height: vw(628),
    },
    [breakpoints.mobile]: {
      width: '100%',
      height: mvw(500),
      maxHeight: mvw(500),
      overflowY: 'auto',
      overflowX: 'hidden',
      borderTop: '2px solid #707070',
      borderBottom: '2px solid #707070',
    },
  },
});

// 첫 번째 행 스타일
export const firstRow = style({
  '@media': {
    [breakpoints.desktopLarge]: {
      paddingTop: '33px', // 연혁 타이틀과 높이 맞춤
    },
    [breakpoints.desktop]: {
      paddingTop: vw(33),
    },
    [breakpoints.mobile]: {
      borderTop: 'none',
      height: mvw(192),
      paddingTop: mvw(10), // 모바일에서도 타이틀과 맞춤
    },
  },
});

// 마지막 행 스타일
export const lastRow = style({
  '@media': {
    [breakpoints.mobile]: {
      borderBottom: '1px solid #D9D9D9',
    },
  },
});

export const academicTableRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vw(60),
  padding: `${vw(28)} 0`,
  borderBottom: '1px solid #D9D9D9',
  height: 'auto',
  minHeight: vw(90),
  selectors: {
    '&:first-child': {
      borderTop: 'none',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
    'html[data-language="JP"] &': {
      alignItems: 'flex-start',
    },
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      gap: '60px',
      padding: '28px 0',
      minHeight: '90px',
      selectors: {
        'html[data-language="JP"] &': {
          alignItems: 'flex-start',
        },
      },
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      paddingTop: mvw(20),
      paddingBottom: mvw(20),
      flexDirection: 'row',
      alignItems: 'flex-start',
      minHeight: 'auto',
      display: 'grid',
      gridTemplateColumns: `${mvw(105)} ${mvw(217)}`,
      gridTemplateRows: 'auto auto',
      columnGap: mvw(20),
      rowGap: mvw(20),
      borderBottom: '1px solid #707070',
      borderTop: 'none',
      margin: 0,
    },
  },
});

export const academicRowDate = style({
  width: vw(135),
  height: vw(30),
  flexShrink: 0,
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(20),
  color: '#333333',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  lineHeight: '150%',
  letterSpacing: '0%',
  alignSelf: 'center',
  selectors: {
    'html[data-language="JP"] &': {
      fontFamily: fontFamily.scdream,
    },
  },

  '@media': {
    [breakpoints.desktopLarge]: {
      width: '135px',
      fontSize: '20px',
      height: '30px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      width: mvw(105),
      fontSize: mvw(14),
      lineHeight: mvw(20),
      gridColumn: '1',
      gridRow: '2',
      textAlign: 'center',
      color: '#272727',
      alignSelf: 'end',
      height: mvw(18),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      whiteSpace: 'nowrap',
    },
  },
});

export const academicRowCategory = style({
  width: vw(150),
  height: vw(70),
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '150px',
      height: '70px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      width: mvw(70),
      height: mvw(70),
      justifyContent: 'center',
      gridColumn: '1',
      gridRow: '1',
      alignSelf: 'center',
      justifySelf: 'start',
    },
  },
});

export const categoryBadge = style({
  width: vw(70),
  height: vw(70),
  borderRadius: '50%',
  border: '1px solid #00AFFF',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  ...responsiveFont(20),
  lineHeight: vw(20),
  color: '#00AFFF',
  flexShrink: 0,
  whiteSpace: 'pre-line',
  wordWrap: 'break-word',
  textAlign: 'center',
  selectors: {
    'html[data-language="JP"] &': {
      fontWeight: 700,
      height: 'auto',
      minHeight: vw(70),
      padding: `${vw(10)} ${vw(5)}`,
    },
  },
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '70px',
      height: '70px',
      fontSize: '20px',
      lineHeight: '20px',
      selectors: {
        'html[data-language="JP"] &': {
          height: 'auto',
          minHeight: '70px',
          padding: '10px 5px',
        },
      },
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      border: '1px solid #00AFFF',
      width: mvw(70),
      height: mvw(70),
      borderRadius: '50%',
      fontSize: mvw(14),
      lineHeight: mvw(20),
      display: 'flex',
      padding: 0,
      whiteSpace: 'pre-line',
      wordWrap: 'break-word',
      textAlign: 'center',
      selectors: {
        'html[data-language="JP"] &': {
          fontSize: mvw(20),
          fontWeight: 700,
          height: 'auto',
          minHeight: mvw(70),
          padding: `${mvw(10)} ${mvw(5)}`,
        },
      },
    },
  },
});

export const academicRowEvent = style({
  flex: '0 1 auto',
  width: vw(320),
  minWidth: vw(320),
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: vw(20),
  lineHeight: '140%',
  letterSpacing: '0%',
  color: '#272727',
  textAlign: 'left',
  overflow: 'visible',
  wordBreak: 'keep-all',
  alignSelf: 'center',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '320px',
      minWidth: '320px',
      fontSize: '20px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      fontSize: mvw(16),
      lineHeight: mvw(24),
      fontWeight: 500,
      color: '#000000',
      gridColumn: '2',
      gridRow: '1',
      whiteSpace: 'normal',
      overflow: 'visible',
      textOverflow: 'unset',
      width: mvw(217),
      paddingRight: 0,
      alignSelf: 'start',
      height: 'auto',
      minHeight: mvw(70),
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: mvw(12),
      textAlign: 'left',
      selectors: {
        'html[data-language="JP"] &': {
          fontWeight: 700,
        },
      },
    },
  },
});

export const academicRowTitle = style({
  // flex: "1 1 auto",
  width: vw(815),
  height: 'auto',
  // minHeight: vw(52),
  minWidth: 0,
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: vw(16),
  lineHeight: '150%',
  letterSpacing: '0%',
  color: '#272727',
  textAlign: 'left',
  alignSelf: 'center',
  whiteSpace: 'normal',
  overflow: 'visible',
  '@media': {
    [breakpoints.desktopLarge]: {
      width: '815px',
      minWidth: 0,
      fontSize: '16px',
      height: 'auto',
      // minHeight: '52px',
    },
    [breakpoints.desktop]: {},
    [breakpoints.mobile]: {
      fontSize: mvw(14),
      lineHeight: mvw(20),
      whiteSpace: 'normal',
      overflow: 'visible',
      textOverflow: 'unset',
      color: '#272727',
      gridColumn: '2',
      gridRow: '2',
      width: mvw(217),
      height: 'auto',
      minHeight: mvw(48),
      paddingRight: 0,
      alignSelf: 'end',
      display: 'flex',
      alignItems: 'flex-end',
    },
  },
});

// 타임라인 그래피티 섹션
export const timelineGraffitiSection = style({
  width: '100%',
  backgroundColor: '#FFFDF7',
  position: 'relative',
  clear: 'both',
  '@media': {
    [breakpoints.desktopLarge]: {
      paddingTop: '120px',
      paddingBottom: '240px',
    },
    [breakpoints.desktop]: {
      paddingTop: vw(120),
      paddingBottom: vw(240),
    },
    [breakpoints.mobile]: {
      display: 'block',
      width: '100%',
      paddingTop: mvw(60),
      paddingBottom: mvw(120),
      backgroundColor: '#FFFDF7',
    },
  },
});

// 타임라인 그래피티 이미지
export const timelineGraffiti = style({
  width: '100%',
  height: 'auto',
  display: 'block',
  '@media': {
    [breakpoints.mobile]: {
      display: 'none',
    },
  },
});

export const timelineGraffitiMobile = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'block',
      width: '100%',
      height: 'auto',
      padding: 0,
    },
  },
});

// ========== 모바일 전용 스타일 ==========

// 모바일 전용 컨테이너
export const doctorMobileContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '#73D5FA',
  position: 'relative',
});

// 모바일 의사 정보 섹션 - 이미지로 대체
export const doctorMobileInfoSection = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  position: 'relative',
  marginTop: '2rem',
});

export const doctorMobileInfoImage = style({
  height: mvw(300),
  display: 'block',

  selectors: {
    '&:child(nth-child(0))': {
      width: mvw(210),
    },
    '&:child(nth-child(1))': {
      width: mvw(200),
    },
    '&:child(nth-child(2))': {
      width: mvw(230),
    },
  },
});

// 모바일 메인 섹션 - 초기 100vh 영역 (단일 이미지) - 더 이상 사용하지 않음
export const doctorMobileMainSection = style({
  display: 'block',
  width: '100vw',
  height: 'auto',
  position: 'relative',
});

export const doctorMobileMainImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

// 모바일 명언 섹션 - 이미지로 대체
export const doctorMobileQuoteSection = style({
  display: 'block',
  width: '100vw',
  height: mvw(248),
  position: 'relative',
});

export const doctorMobileQuoteImage = style({
  width: '100%',
  height: mvw(248),
  display: 'block',
});

// 모바일 헤더 - 타이틀 영역
export const doctorMobileHeader = style({
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
  padding: `${mvw(152)} ${mvw(16)} ${mvw(40)} ${mvw(16)}`,
  backgroundColor: '#73D5FA',
  flex: '0 0 auto',
});

// 모바일 타이틀
export const doctorMobileTitle = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: mvw(36),
  lineHeight: '120%',
  color: '#000000',
  textAlign: 'left',
  margin: 0,
  '@media': {
    [breakpoints.desktop]: {
      display: 'none',
    },
  },
});

// 모바일 의사 이미지 컨테이너
export const doctorMobileImage = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'block',
      width: '100vw',
      flex: '1 1 auto',
      position: 'relative',
      overflow: 'hidden',
    },
  },
});

// 모바일 의사 이미지
export const doctorMobileImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center top',
});

// 모바일 의사 정보
export const doctorMobileInfo = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      padding: `${mvw(24)} ${mvw(24)} ${mvw(32)} ${mvw(24)}`,
      backgroundColor: '#73D5FA',
      gap: mvw(12),
      alignItems: 'flex-start',
      flex: '0 0 auto',
    },
  },
});

export const doctorMobileInfoOverlay = style({
  display: 'block',
  position: 'absolute',
  top: mvw(0),
  right: mvw(16),
  zIndex: 10,
});

// 모바일 의사 이름
export const doctorMobileName = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 500,
  fontSize: mvw(60),
  lineHeight: '90%',
  letterSpacing: '0%',
  color: '#FFFFFF',
  margin: 0,
  textAlign: 'right',
  width: '100%',
  marginBottom: mvw(56),
  wordBreak: 'keep-all',
  whiteSpace: 'normal',
});

export const doctorMobileName2 = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 500,
  fontSize: mvw(60),
  lineHeight: '90%',
  letterSpacing: '0%',
  color: '#FFFFFF',
  margin: 0,
  textAlign: 'right',
  width: '100%',
  marginBottom: mvw(84),
  wordBreak: 'keep-all',
  whiteSpace: 'normal',
});

export const doctorMobileName3 = style({
  fontFamily: fontFamily.poppins,
  fontWeight: 500,
  fontSize: mvw(60),
  lineHeight: '90%',
  letterSpacing: '0%',
  color: '#FFFFFF',
  margin: 0,
  textAlign: 'right',
  width: '100%',
  marginBottom: mvw(111),
  wordBreak: 'keep-all',
  whiteSpace: 'normal',
});

export const doctorMobilePosition = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 400,
  fontSize: mvw(14),
  lineHeight: '130%',
  color: '#272727',
  textAlign: 'right',
  letterSpacing: '0%',
  marginBottom: mvw(4),
  whiteSpace: 'pre-line',
});

// 모바일 의사 이름
export const doctorMobileNameBold = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 500,
  fontSize: mvw(18),
  lineHeight: '150%',
  color: '#000000',
  margin: 0,
  textAlign: 'right',
  letterSpacing: '0%',
  selectors: {
    'html[data-language="JP"] &': {
      fontSize: mvw(24),
      fontWeight: 700,
    },
  },
});

// 모바일 Quote 섹션
export const doctorMobileQuote = style({
  display: 'none',
  '@media': {
    [breakpoints.mobile]: {
      display: 'block',
      width: '100%',
      padding: `${mvw(32)} ${mvw(24)}`,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 0,
    },
  },
});

// 모바일 Quote 텍스트
export const doctorMobileQuoteText = style({
  fontFamily: fontFamily.scdream,
  fontWeight: 300,
  fontSize: mvw(16),
  lineHeight: mvw(24),
  color: '#000000',
  textAlign: 'center',
  margin: 0,
});

// 모바일 자격사항 섹션
export const doctorMobileCredentials = style({
  display: 'block',
  width: '100%',
  padding: `${mvw(40)} ${mvw(16)}`,
  backgroundColor: '#73D5FA',
  marginBottom: mvw(80),
});

// 모바일 자격사항 리스트
export const doctorMobileCredentialList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: mvw(4),
});

// 모바일 자격사항 아이템
export const doctorMobileCredentialItem = style({
  fontFamily: fontFamily.scdream,
  letterSpacing: '0%',
  textAlign: 'left',
  fontWeight: 400,
  fontSize: mvw(16),
  lineHeight: '150%',
  color: '#000000',
  margin: 0,
  paddingLeft: mvw(16),
  position: 'relative',
  '::before': {
    content: '"•"',
    position: 'absolute',
    left: 0,
    color: '#000000',
  },
  selectors: {
    'html[data-language="JP"] &': {
      fontSize: mvw(16),
      paddingLeft: mvw(5),
      whiteSpace: 'nowrap',
    },
  },
});
