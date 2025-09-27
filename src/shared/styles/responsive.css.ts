/**
 * 듀얼 베이스 반응형 디자인 시스템
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
 * 듀얼 베이스 폰트 사이즈 계산
 * @param desktopValue - 1920px 디자인에서의 폰트 크기
 * @param mobileValue - 375px 디자인에서의 폰트 크기 (선택사항, 기본값: desktopValue * 0.6)
 * @returns 반응형 폰트 사이즈 객체
 */
export const responsiveFont = (desktopValue: number, mobileValue?: number) => {
  const mobileFontSize = mobileValue || Math.max(desktopValue * 0.6, 12);

  return {
    fontSize: vw(desktopValue), // 1024px-1920px에서 데스크탑 기준 비례 스케일링
    "@media": {
      [breakpoints.desktopLarge]: {
        fontSize: `${desktopValue}px`, // 1920px 이상에서는 고정
      },
      [breakpoints.mobile]: {
        fontSize: mvw(mobileFontSize), // 375px-1023px에서 모바일 기준 비례 스케일링
      },
      "screen and (max-width: 374px)": {
        fontSize: `${mobileFontSize}px`, // 375px 미만에서는 고정
      },
    },
  };
};

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
    [breakpoints.mobile]: {
      // 모바일: 375px~1023px - 16px 고정 마진
      width: "100%",
      maxWidth: "none",
      padding: "0 16px", // 양쪽 16px 패딩
      margin: "0", // 마진 제거
    },
    "screen and (max-width: 374px)": {
      width: "100%",
      maxWidth: "none",
      padding: "0 16px", // 375px 미만에서도 16px 패딩
      margin: "0",
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

/**
 * 1920px 기준 좌우 분할 레이아웃 컨테이너 (헤어라인 페이지 Section1 방식)
 * - 왼쪽: 헤더와 일치하는 정확한 시작점부터 시작
 * - 오른쪽: 1920px 끝까지 확장하여 이미지 배치
 * - 전체 너비는 100%, 헤더와 동일한 마진 계산 방식 사용
 * @returns 1920px 기준 좌우 분할 컨테이너 스타일
 */
export const responsiveSplitContainer = () => ({
  width: "100%", // 전체 뷰포트 너비 사용
  position: "relative" as const,
  display: "grid",
  gridTemplateColumns: "1fr 1fr", // 50:50 분할
  alignItems: "center",
  "@media": {
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr", // 단일 컬럼
      gap: "30px",
    },
  },
});

/**
 * 헤어라인 페이지 왼쪽 컨텐츠 영역 (헤더와 완벽한 정렬)
 * - responsiveContainer와 동일한 마진 계산 방식
 * - 헤더와 동일한 패딩 적용
 * @returns 헤더와 일치하는 왼쪽 컨텐츠 스타일
 */
export const responsiveLeftContent = () => ({
  // responsiveContainer와 완전히 동일한 마진 계산
  marginLeft: "max(calc((100vw - 1600px) / 2), 160px)",
  paddingLeft: vw(60), // 헤더와 동일한 패딩
  paddingRight: vw(80), // 오른쪽 여백을 더 크게 (80px)
  "@media": {
    [breakpoints.desktopLarge]: {
      marginLeft: "160px", // 1920px+ 고정 마진
      paddingLeft: "60px", // 헤더와 동일한 고정 패딩
      paddingRight: "80px", // 더 큰 여백으로 조화롭게
    },
    [breakpoints.mobile]: {
      marginLeft: "20px", // 모바일 마진
      paddingLeft: "0",
      paddingRight: "20px",
    },
  },
});

/**
 * 헤어라인 페이지 오른쪽 컨텐츠 영역 (헤더와 완벽한 정렬)
 * - 왼쪽은 화면 끝까지, 오른쪽은 헤더와 정렬
 * - responsiveContainer와 동일한 마진 계산 방식 (반대 방향)
 * @returns 헤더와 일치하는 오른쪽 컨텐츠 스타일
 */
export const responsiveRightContent = () => ({
  // responsiveContainer와 완전히 동일한 마진 계산 (오른쪽 적용)
  marginRight: "max(calc((100vw - 1600px) / 2), 160px)",
  paddingLeft: vw(80), // 왼쪽 여백을 더 크게 (80px)
  paddingRight: vw(60), // 헤더와 동일한 패딩
  "@media": {
    [breakpoints.desktopLarge]: {
      marginRight: "160px", // 1920px+ 고정 마진
      paddingLeft: "80px", // 더 큰 여백으로 텍스트 오버플로우 방지
      paddingRight: "60px", // 헤더와 동일한 고정 패딩
    },
    [breakpoints.mobile]: {
      marginRight: "20px", // 모바일 마진
      paddingLeft: "20px",
      paddingRight: "0",
    },
  },
});

/**
 * 1920px 기준 절대 위치 이미지 컨테이너 (우측 이미지 영역용)
 * - 내부에 여러 이미지를 절대 위치로 배치할 수 있는 컨테이너
 * - overflow: hidden으로 컨테이너 경계 밖 요소 숨김
 * @param minHeight - 1920px 기준 최소 높이
 * @returns 절대 위치 이미지들을 담는 컨테이너 스타일
 */
export const responsiveAbsoluteImageContainer = (minHeight: number) => ({
  position: "relative" as const,
  width: "100%",
  height: vw(minHeight), // minHeight → height로 변경하여 정확한 높이 제어
  overflow: "hidden" as const, // 컨테이너 밖으로 나가는 요소 숨김
  "@media": {
    [breakpoints.desktopLarge]: {
      height: `${minHeight}px`, // 1920px+ 완전 고정
      maxWidth: "100%", // 최대 너비도 제한
    },
    [breakpoints.mobile]: {
      position: "static" as const, // 모바일에서는 일반 레이아웃
      height: "auto",
      overflow: "visible" as const,
      display: "flex",
      flexDirection: "column" as const,
      gap: "20px",
    },
  },
});

/**
 * 1920px 기준 절대 위치 이미지 스타일 생성기
 * - 절대 위치 이미지의 위치, 크기, 비율 설정
 * - maxWidth로 오버플로우 방지
 * @param config - 이미지 설정 객체
 * @param config.position - 위치 설정 (top, right, bottom, left)
 * @param config.width - 컨테이너 대비 너비 (%)
 * @param config.aspectRatio - 가로:세로 비율 "width / height"
 * @param config.maxWidth - 1920px 기준 최대 너비 (px)
 * @returns 절대 위치 이미지 스타일
 */
export const responsiveAbsoluteImage = ({
  position,
  width,
  aspectRatio,
  maxWidth,
}: {
  position: { top?: string; right?: string; bottom?: string; left?: string };
  width: string; // "50%", "30%" 등
  aspectRatio: string; // "600 / 660" 등
  maxWidth: number; // 1920px 기준 최대 너비
}) => ({
  position: "absolute" as const,
  ...position,
  width,
  aspectRatio,
  maxWidth: vw(maxWidth), // 최대 너비 제한으로 오버플로우 방지
  "@media": {
    [breakpoints.desktopLarge]: {
      maxWidth: `${maxWidth}px`, // 1920px+ 완전 고정
      width: `${maxWidth}px`, // 너비도 고정하여 스케일링 방지
    },
    [breakpoints.mobile]: {
      position: "static" as const, // 모바일에서는 일반 레이아웃
      width: "100%",
      maxWidth: "none",
      aspectRatio: "auto",
    },
  },
});

/**
 * 1920px 기준 3컬럼 레이아웃 컨테이너 (왼쪽 텍스트, 중앙 일러스트, 오른쪽 이미지)
 * - 데스크톱: 1fr auto 1fr (텍스트-일러스트-이미지)
 * - 태블릿/모바일: 1fr (세로 배치)
 * @param maxWidth - 전체 컨테이너 최대 너비 (기본값: 1920px)
 * @returns 3컬럼 레이아웃 컨테이너 스타일
 */
export const responsiveThreeColumnContainer = (maxWidth: number = 1920) => ({
  width: "100%",
  maxWidth: `${maxWidth}px`, // 전체 컨테이너 최대 너비
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr", // 왼쪽 텍스트, 중앙 일러스트, 오른쪽 이미지
  alignItems: "center",
  "@media": {
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr", // 모바일에서는 단일 컬럼
      gap: "30px",
      padding: "0 20px", // 좌우 20px 마진
    },
  },
});

// 공통 반응형 브레이크포인트 (사용자 요청 기준)
export const breakpoints = {
  mobile: "screen and (max-width: 1023px)", // 375px ~ 1023px (tablet 통합)
  mobileSmall: "screen and (max-width: 767px)", // 375px ~ 767px (phone only)
  tablet: "screen and (min-width: 768px) and (max-width: 1023px)", // 768px ~ 1023px (tablet only)
  desktop: "screen and (min-width: 1024px) and (max-width: 1919px)", // 1024px ~ 1919px (1920px 기준 비례 스케일링)
  desktopLarge: "screen and (min-width: 1920px)", // 1920px 이상 (고정 크기)
} as const;
