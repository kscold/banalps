'use client';

import React from 'react';
import * as styles from './SidePreviewSlider.css';
import { preloadImagePair } from '@/utils/imagePreloader';

interface SidePreviewSliderProps {
  beforeImage: string;
  afterImage: string;
  showBefore?: boolean; // true면 Before 쪽을 보여줌 (오른쪽 프리뷰용)
  beforeAlt?: string;
  afterAlt?: string;
  onClick?: () => void;
  className?: string;
  isBlueBackground?: boolean;
  isLoggedIn?: boolean; // 로그인 상태
}

export default function SidePreviewSlider({
  beforeImage,
  afterImage,
  showBefore = false,
  beforeAlt = '수술 전',
  afterAlt = '수술 후',
  onClick,
  className,
  isBlueBackground = false,
  isLoggedIn = true, // 기본값 true (로그인 상태)
}: SidePreviewSliderProps) {
  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  // Before/After 이미지 동시 로딩
  React.useEffect(() => {
    setImagesLoaded(false);

    preloadImagePair(beforeImage, afterImage)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error('[SidePreviewSlider] 이미지 로드 실패:', error);
        // 에러가 발생해도 이미지를 표시 (브라우저 기본 로딩)
        setImagesLoaded(true);
      });
  }, [beforeImage, afterImage]);

  // showBefore가 true면 Before 라벨, false면 After 라벨
  const displayLabel = showBefore ? 'Before' : 'After';

  // showBefore가 true면 오른쪽 프리뷰, false면 왼쪽 프리뷰
  // 로그인 상태에 따라 블러 효과 적용 여부 결정
  // 로그인 O: LoggedIn 버전 (데스크탑 블러 X), 로그인 X: 기본 버전 (데스크탑 블러 O)
  const imageContainerClass = showBefore
    ? isLoggedIn
      ? styles.imageContainerRightLoggedIn
      : styles.imageContainerRight
    : isLoggedIn
      ? styles.imageContainerLeftLoggedIn
      : styles.imageContainerLeft;

  // 라벨 컨테이너도 동일하게 적용
  const labelsContainerClass = isBlueBackground
    ? showBefore
      ? styles.labelsContainerBlueRight
      : styles.labelsContainerBlueLeft
    : styles.labelsContainer;

  return (
    <div
      className={`${isBlueBackground ? styles.containerBlue : styles.container} ${className || ''}`}
      onClick={onClick}
    >
      {/* 이미지 컨테이너 */}
      <div
        className={imageContainerClass}
        style={{
          opacity: imagesLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        {/* showBefore가 true면 Before 이미지 전체, false면 After 이미지 전체 표시 */}
        {showBefore ? (
          <img src={beforeImage} alt={beforeAlt} className={styles.fullImage} />
        ) : (
          <img src={afterImage} alt={afterAlt} className={styles.fullImage} />
        )}
      </div>

      {/* Before/After 라벨 - 이미지 아래 */}
      <div className={labelsContainerClass}>
        <div className={styles.label}>{displayLabel}</div>
      </div>
    </div>
  );
}
