/**
 * 1920px 기준 반응형 디자인 시스템
 * - 1920px 이상: 고정 크기
 * - 1024px ~ 1920px: 비례 축소/확대 (vw 단위)
 * - 1024px 미만: 모바일 반응형
 */

// 디자인 베이스 크기
export const DESIGN_BASE_WIDTH = 1920;

/**
 * 1920px 기준으로 vw 단위 계산 
 * @param pixelValue - 1920px 디자인에서의 픽셀 값
 * @returns vw 단위 문자열
 */
export const vw = (pixelValue: number): string => {
  return `${(pixelValue / DESIGN_BASE_WIDTH) * 100}vw`;
};

/**
 * 1920px 기준 완전 반응형 스타일 (전역 고정 포함)
 * @param property - CSS 속성명  
 * @param pixelValue - 1920px 기준 픽셀 값
 * @returns 완전 반응형 CSS 객체
 */
export const responsiveProperty = (property: string, pixelValue: number) => ({
  [property]: vw(pixelValue), // 1024px-1920px 비례 스케일링
  "@media": {
    [breakpoints.desktopLarge]: {
      [property]: `${pixelValue}px`, // 1920px+ 전역 고정
    },
  },
});

/**
 * 1920px 기준 폰트 사이즈 계산 (새로운 브레이크포인트 적용)
 * @param pixelValue - 1920px 디자인에서의 폰트 크기
 * @returns 반응형 폰트 사이즈 객체
 */
export const responsiveFont = (pixelValue: number) => ({
  fontSize: vw(pixelValue), // 1024px-1920px에서 비례 스케일링
  "@media": {
    [breakpoints.desktopLarge]: {
      fontSize: `${pixelValue}px`, // 1920px 이상에서는 고정
    },
    [breakpoints.tablet]: {
      fontSize: `${Math.max(pixelValue * 0.8, 14)}px`, // 태블릿에서 80% 크기, 최소 14px
    },
    [breakpoints.mobile]: {
      fontSize: `${Math.max(pixelValue * 0.7, 16)}px`, // 모바일에서 70% 크기, 최소 16px
    },
  },
});

/**
 * 1920px 기준 크기 계산 (전역 고정 적용)
 * @param pixelValue - 1920px 디자인에서의 크기
 * @returns 반응형 크기 객체
 */
export const responsiveSize = (pixelValue: number) => ({
  width: `${(pixelValue / DESIGN_BASE_WIDTH) * 100}vw`,
  "@media": {
    [breakpoints.desktopLarge]: {
      width: `${pixelValue}px`, // 1920px+ 전역 고정
    },
  },
});

/**
 * 1920px 기준 높이 계산
 * @param pixelValue - 1920px 디자인에서의 높이
 * @returns 반응형 높이 객체
 */
export const responsiveHeight = (pixelValue: number) => ({
  height: vw(pixelValue),
  "@media": {
    "screen and (min-width: 1920px)": {
      height: `${pixelValue}px`, // 1920px 이상에서는 고정
    },
  },
});

/**
 * 1920px 기준 패딩/마진 계산
 * @param pixelValue - 1920px 디자인에서의 패딩/마진 값
 * @returns 반응형 패딩/마진 객체
 */
export const responsiveSpacing = (pixelValue: number) => ({
  padding: vw(pixelValue),
  "@media": {
    "screen and (min-width: 1920px)": {
      padding: `${pixelValue}px`, // 1920px 이상에서는 고정
    },
    "screen and (max-width: 1024px)": {
      padding: `${Math.max(pixelValue * 0.5, 8)}px`, // 모바일에서는 최소 8px
    },
  },
});

/**
 * 1920px 기준 위치 계산 (top, left, right, bottom)
 * @param pixelValue - 1920px 디자인에서의 위치 값
 * @returns vw 단위 문자열
 */
export const responsivePosition = (pixelValue: number): string => {
  return vw(pixelValue);
};

/**
 * 1920px 기준 반응형 컨테이너 시스템 (간단하고 일관된 방식)
 * @param maxWidth - 최대 너비 (기본값: 1600px, 모든 해상도에서 고정)
 * @returns 1920px 기준으로 일관되게 동작하는 컨테이너 스타일
 */
export const responsiveContainer = (maxWidth: number = 1600) => ({
  width: "calc(100% - 320px)", // 1024px 이상에서 양쪽 160px 마진
  maxWidth: `${maxWidth}px`, // 모든 해상도에서 완전 고정
  margin: "0 auto",
  "@media": {
    [breakpoints.tablet]: {
      // 태블릿: 768px~1023px
      width: "calc(100% - 80px)", // 양쪽 40px 마진
    },
    [breakpoints.mobile]: {
      // 모바일: 365px~767px
      width: "calc(100% - 40px)", // 양쪽 20px 마진
    },
  },
});

/**
 * AspectRatio와 함께 사용하는 반응형 이미지 컨테이너 (헤더와 동일한 고정 방식)
 * @param width - 1920px 기준 너비
 * @param height - 1920px 기준 높이  
 * @returns 헤더처럼 1920px+ 에서 완전 고정되는 이미지 컨테이너 스타일
 */
export const responsiveImageContainer = (width: number, height: number) => ({
  width: vw(width), // 1024px-1920px 비례 스케일링
  height: vw(height), // 높이도 비례 스케일링
  aspectRatio: `${width} / ${height}`,
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 헤더처럼 완전 고정
      width: `${width}px`, // 고정
      height: `${height}px`, // 고정
      maxWidth: `${width}px`, // 최대 너비도 고정
    },
    [breakpoints.tablet]: {
      width: "100%", // 태블릿에서 전체 너비
      height: "auto", // 높이는 자동
      aspectRatio: `${width} / ${height}`, // 비율은 유지
    },
    [breakpoints.mobile]: {
      width: "100%", // 모바일에서 전체 너비
      height: "auto", // 높이는 자동
      aspectRatio: "auto", // 모바일에서는 자동 높이
    },
  },
});

/**
 * 절대 위치 기반 레이아웃 캡처 컨테이너 (imageCardsSection, doctorsImageGrid 방식)
 * - 내부 요소들이 절대 위치(position: absolute)로 배치된 컨테이너용
 * - 컨테이너 크기만 비례 변경, 내부 배치는 완전 고정 유지
 * - "캡처된 스냅샷"처럼 레이아웃이 움직이지 않고 전체 크기만 축소/확대
 * @param width - 1920px 기준 컨테이너 너비
 * @param height - 1920px 기준 컨테이너 높이
 * @returns 절대 위치 요소들을 감싸는 캡처 컨테이너 스타일
 */
export const responsiveCaptureContainer = (width: number, height: number) => ({
  position: "relative" as const,
  width: vw(width), // 1024px-1920px에서 컨테이너만 비례 스케일링
  height: vw(height), // 높이도 비례 스케일링
  aspectRatio: `${width} / ${height}`, // 비율 유지
  "@media": {
    [breakpoints.desktopLarge]: {
      // 1920px 이상에서 완전 고정 (헤더와 동일한 방식)
      width: `${width}px`,
      height: `${height}px`,
    },
    [breakpoints.mobile]: {
      // 모바일에서는 일반적인 flex 레이아웃으로 전환
      display: "flex",
      flexDirection: "column" as const,
      gap: "30px",
      overflow: "visible" as const,
      aspectRatio: "auto", // 모바일에서는 자동 높이
    },
  },
});

// 공통 반응형 브레이크포인트 (사용자 요청 기준)
export const breakpoints = {
  mobile: "screen and (max-width: 767px)", // 365px ~ 767px
  tablet: "screen and (min-width: 768px) and (max-width: 1023px)", // 768px ~ 1023px
  desktop: "screen and (min-width: 1024px) and (max-width: 1919px)", // 1024px ~ 1919px (1920px 기준 비례 스케일링)
  desktopLarge: "screen and (min-width: 1920px)", // 1920px 이상 (고정 크기)
} as const;