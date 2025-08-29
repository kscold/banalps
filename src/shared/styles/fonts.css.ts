/**
 * S-Core Dream & Pretendard Font Family - Vanilla Extract Configuration
 * Copyright (c) 2018 by S-Core Co., Ltd. All rights reserved.
 * Licensed for free use (Personal & Commercial)
 * Pretendard: https://github.com/orioncactus/pretendard
 */

import { fontFace } from "@vanilla-extract/css"

// S-Core Dream Font Family Definition
export const sCoreDream = fontFace([
  {
    src: `url('/fonts/SCDream1.woff') format('woff'), url('/fonts/SCDream1.otf') format('opentype')`,
    fontWeight: 100,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('/fonts/SCDream2.woff') format('woff'), url('/fonts/SCDream2.otf') format('opentype')`,
    fontWeight: 200,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('/fonts/SCDream3.woff') format('woff'), url('/fonts/SCDream3.otf') format('opentype')`,
    fontWeight: 300,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('/fonts/SCDream4.woff') format('woff'), url('/fonts/SCDream4.otf') format('opentype')`,
    fontWeight: 400,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('/fonts/SCDream5.woff') format('woff'), url('/fonts/SCDream5.otf') format('opentype')`,
    fontWeight: 500,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('/fonts/SCDream6.woff') format('woff'), url('/fonts/SCDream6.otf') format('opentype')`,
    fontWeight: 600,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('/fonts/SCDream7.woff') format('woff'), url('/fonts/SCDream7.otf') format('opentype')`,
    fontWeight: 700,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('/fonts/SCDream8.woff') format('woff'), url('/fonts/SCDream8.otf') format('opentype')`,
    fontWeight: 800,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('/fonts/SCDream9.woff') format('woff'), url('/fonts/SCDream9.otf') format('opentype')`,
    fontWeight: 900,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
])

// Pretendard Font Family Definition
export const pretendard = fontFace([
  {
    src: `url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2/Pretendard-Light.woff2') format('woff2')`,
    fontWeight: 300,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2/Pretendard-Regular.woff2') format('woff2')`,
    fontWeight: 400,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2/Pretendard-Medium.woff2') format('woff2')`,
    fontWeight: 500,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2/Pretendard-SemiBold.woff2') format('woff2')`,
    fontWeight: 600,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: `url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2/Pretendard-Bold.woff2') format('woff2')`,
    fontWeight: 700,
    fontStyle: "normal",
    fontDisplay: "swap",
  },
])

// Font Stack with S-Core Dream & Pretendard
export const fontFamily = {
  scdream: `${sCoreDream}, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
  pretendard: `${pretendard}, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
}

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
} as const
