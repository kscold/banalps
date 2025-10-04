import { fontFace } from '@vanilla-extract/css';

export const sCoreDream = fontFace([
  {
    src: `url('/fonts/SCDream1.woff') format('woff'), url('/fonts/SCDream1.otf') format('opentype')`,
    fontWeight: 100,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/SCDream2.woff') format('woff'), url('/fonts/SCDream2.otf') format('opentype')`,
    fontWeight: 200,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/SCDream3.woff') format('woff'), url('/fonts/SCDream3.otf') format('opentype')`,
    fontWeight: 300,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/SCDream4.woff') format('woff'), url('/fonts/SCDream4.otf') format('opentype')`,
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/SCDream5.woff') format('woff'), url('/fonts/SCDream5.otf') format('opentype')`,
    fontWeight: 500,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/SCDream6.woff') format('woff'), url('/fonts/SCDream6.otf') format('opentype')`,
    fontWeight: 600,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/SCDream7.woff') format('woff'), url('/fonts/SCDream7.otf') format('opentype')`,
    fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/SCDream8.woff') format('woff'), url('/fonts/SCDream8.otf') format('opentype')`,
    fontWeight: 800,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/SCDream9.woff') format('woff'), url('/fonts/SCDream9.otf') format('opentype')`,
    fontWeight: 900,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
]);

// Nordnet Font Family Definition
export const nordnet = fontFace([
  {
    src: `url('/fonts/Nordnet Sans Light.otf') format('opentype')`,
    fontWeight: 300,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Nordnet Sans.otf') format('opentype')`,
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Nordnet Sans Bold.otf') format('opentype')`,
    fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Nordnet Sans Extrabold.otf') format('opentype')`,
    fontWeight: 800,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
]);

// Pretendard Font Family Definition
export const pretendard = fontFace([
  {
    src: `url('/fonts/Pretendard-Light.woff2') format('woff2')`,
    fontWeight: 300,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Pretendard-Regular.woff2') format('woff2')`,
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Pretendard-Medium.woff2') format('woff2')`,
    fontWeight: 500,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Pretendard-SemiBold.woff2') format('woff2')`,
    fontWeight: 600,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Pretendard-Bold.woff2') format('woff2')`,
    fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
]);

// Poppins Font Family Definition
export const poppins = fontFace([
  {
    src: `url('/fonts/Poppins-Regular.woff2') format('woff2')`,
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Poppins-Medium.woff2') format('woff2')`,
    fontWeight: 500,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Poppins-SemiBold.woff2') format('woff2')`,
    fontWeight: 600,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: `url('/fonts/Poppins-Bold.woff2') format('woff2')`,
    fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
]);

// Font Stack with S-Core Dream, Pretendard & Nordnet
export const fontFamily = {
  scdream: `'S-Core Dream', sans-serif`,
  pretendard: `'Pretendard', sans-serif`,
  nordnet: `'Nordnet Sans Mono', sans-serif`,
  poppins: `'Poppins', sans-serif`,
};

// Font Weight Variables
export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;
