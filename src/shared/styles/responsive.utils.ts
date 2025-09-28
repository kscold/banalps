/**
 * 듀얼 베이스 반응형 디자인 시스템 - 유틸리티 함수들
 * - 1920px 이상: 고정 크기
 * - 1024px ~ 1920px: 1920px 기준 비례 축소/확대 (vw 단위)
 * - 375px ~ 1023px: 375px 기준 비례 확대/축소 (mvw 단위)
 * - 375px 미만: 375px 고정
 */

// 디자인 베이스 크기
export const DESIGN_BASE_WIDTH = 1920; // 데스크탑 기준
export const MOBILE_BASE_WIDTH = 375; // 모바일 기준

/**
 * 1920px 기준으로 vw 단위 계산 (데스크탑 1024px~1920px 구간)
 * @param pixelValue - 1920px 디자인에서의 픽셀 값
 * @returns vw 단위 문자열
 */
export const vw = (pixelValue: number): string => {
  return `${(pixelValue / DESIGN_BASE_WIDTH) * 100}vw`;
};

/**
 * 375px 기준으로 mvw 단위 계산 (모바일 375px~1023px 구간)
 * @param pixelValue - 375px 디자인에서의 픽셀 값
 * @returns vw 단위 문자열 (모바일 기준)
 */
export const mvw = (pixelValue: number): string => {
  return `${(pixelValue / MOBILE_BASE_WIDTH) * 100}vw`;
};
