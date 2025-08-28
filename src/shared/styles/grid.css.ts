import { style, styleVariants } from '@vanilla-extract/css';

// 브레이크포인트 정의
export const breakpoints = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// 컨테이너 기본 스타일
export const container = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  
  '@media': {
    [`screen and (min-width: ${breakpoints.sm})`]: {
      maxWidth: '640px',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    [`screen and (min-width: ${breakpoints.md})`]: {
      maxWidth: '768px',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    [`screen and (min-width: ${breakpoints.lg})`]: {
      maxWidth: '1024px',
    },
    [`screen and (min-width: ${breakpoints.xl})`]: {
      maxWidth: '1280px',
    },
    [`screen and (min-width: ${breakpoints['2xl']})`]: {
      maxWidth: '1536px',
    },
  },
});

// 그리드 기본 스타일
export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
  gap: '1rem',
  
  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      gap: '1.5rem',
    },
    [`screen and (min-width: ${breakpoints.lg})`]: {
      gap: '2rem',
    },
  },
});

// 컬럼 스타일 (1-12)
export const gridCol = styleVariants({
  '1': { gridColumn: 'span 1' },
  '2': { gridColumn: 'span 2' },
  '3': { gridColumn: 'span 3' },
  '4': { gridColumn: 'span 4' },
  '5': { gridColumn: 'span 5' },
  '6': { gridColumn: 'span 6' },
  '7': { gridColumn: 'span 7' },
  '8': { gridColumn: 'span 8' },
  '9': { gridColumn: 'span 9' },
  '10': { gridColumn: 'span 10' },
  '11': { gridColumn: 'span 11' },
  '12': { gridColumn: 'span 12' },
});

// 반응형 컬럼 스타일
export const gridColSm = styleVariants({
  '1': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 1' } } },
  '2': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 2' } } },
  '3': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 3' } } },
  '4': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 4' } } },
  '5': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 5' } } },
  '6': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 6' } } },
  '7': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 7' } } },
  '8': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 8' } } },
  '9': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 9' } } },
  '10': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 10' } } },
  '11': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 11' } } },
  '12': { '@media': { [`screen and (min-width: ${breakpoints.sm})`]: { gridColumn: 'span 12' } } },
});

export const gridColMd = styleVariants({
  '1': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 1' } } },
  '2': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 2' } } },
  '3': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 3' } } },
  '4': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 4' } } },
  '5': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 5' } } },
  '6': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 6' } } },
  '7': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 7' } } },
  '8': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 8' } } },
  '9': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 9' } } },
  '10': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 10' } } },
  '11': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 11' } } },
  '12': { '@media': { [`screen and (min-width: ${breakpoints.md})`]: { gridColumn: 'span 12' } } },
});

export const gridColLg = styleVariants({
  '1': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 1' } } },
  '2': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 2' } } },
  '3': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 3' } } },
  '4': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 4' } } },
  '5': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 5' } } },
  '6': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 6' } } },
  '7': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 7' } } },
  '8': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 8' } } },
  '9': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 9' } } },
  '10': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 10' } } },
  '11': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 11' } } },
  '12': { '@media': { [`screen and (min-width: ${breakpoints.lg})`]: { gridColumn: 'span 12' } } },
});