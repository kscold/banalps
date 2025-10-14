'use client';

import React, { useState, useRef, useCallback } from 'react';
import * as styles from './BeforeAfterSlider.css';
import { vw, mvw } from '@/shared/styles/responsive.utils';
import { preloadImagePair } from '@/utils/imagePreloader';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  isBlueBackground?: boolean;
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
  loginOverlayText?: string;
  imageScale?: number; // 이미지 확대 비율 (기본값 1.0)
  imageOffsetX?: number; // 이미지 x 위치 offset (%)
  imageOffsetY?: number; // 이미지 y 위치 offset (%)
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = '수술 전',
  afterAlt = '수술 후',
  className,
  isBlueBackground = false,
  isLoggedIn = true,
  onLoginClick,
  loginOverlayText = '로그인을 하시면\n수술 전/후 사진 확인이 가능합니다.',
  imageScale = 1.0,
  imageOffsetX = 0,
  imageOffsetY = 0,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // 정확히 50% 기본 위치
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 초기화 시 정확히 50%로 설정
  React.useEffect(() => {
    if (!isInitialized) {
      setSliderPosition(50);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Before/After 이미지 동시 로딩
  React.useEffect(() => {
    setImagesLoaded(false);

    preloadImagePair(beforeImage, afterImage)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error('[BeforeAfterSlider] 이미지 로드 실패:', error);
        // 에러가 발생해도 이미지를 표시 (브라우저 기본 로딩)
        setImagesLoaded(true);
      });
  }, [beforeImage, afterImage]);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    // 컨테이너 내부에 위치 제한
    const constrainedX = Math.max(rect.left, Math.min(rect.right, clientX));
    const position = ((constrainedX - rect.left) / rect.width) * 100;
    // 0-100% 범위로 정확하게 제한
    const clampedPosition = Math.max(0, Math.min(100, position));
    setSliderPosition(clampedPosition);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!isLoggedIn) return; // 로그인하지 않았으면 드래그 비활성화
      e.preventDefault(); // 텍스트 선택 방지
      isDragging.current = true;
      updateSliderPosition(e.clientX);
    },
    [updateSliderPosition, isLoggedIn],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current || !isLoggedIn) return; // 로그인 체크 추가
      e.preventDefault(); // 기본 동작 방지
      updateSliderPosition(e.clientX);
    },
    [updateSliderPosition, isLoggedIn],
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      // 드래그 종료 시 슬라이더 위치 재검증
      setSliderPosition((prev) => Math.max(0, Math.min(100, prev)));
    }
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!isLoggedIn) return; // 로그인하지 않았으면 터치 비활성화
      isDragging.current = true;
      const touch = e.touches[0];
      updateSliderPosition(touch.clientX);
      // 터치 시작 시 스크롤 방지
      e.preventDefault();
    },
    [updateSliderPosition, isLoggedIn],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging.current || !isLoggedIn) return; // 로그인 체크 추가
      e.preventDefault(); // 가로 드래그 중 세로 스크롤 방지
      const touch = e.touches[0];
      updateSliderPosition(touch.clientX);
    },
    [updateSliderPosition, isLoggedIn],
  );

  const handleTouchEnd = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      // 터치 종료 시 슬라이더 위치 재검증
      setSliderPosition((prev) => Math.max(0, Math.min(100, prev)));
    }
  }, []);

  // 글로벌 마우스 이벤트 리스너
  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    // passive: false로 설정하여 preventDefault() 사용 가능하도록
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div className={`${styles.container} ${className || ''}`} style={{ cursor: isLoggedIn ? 'ew-resize' : 'default' }}>
      {/* 이미지 컨테이너 */}
      <div
        ref={containerRef}
        className={styles.imageContainer}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          cursor: isLoggedIn ? 'ew-resize' : 'default',
          opacity: imagesLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        {/* After 이미지 (전체) */}
        <div className={styles.afterImageWrapper}>
          <img
            src={afterImage}
            alt={afterAlt}
            className={styles.image}
            style={{
              transform: `scale(${imageScale}) translate(${imageOffsetX}%, ${imageOffsetY}%)`,
              transformOrigin: 'center center'
            }}
          />
          {/* 오른쪽 페이드 아웃 효과 */}
          <div className={styles.rightFadeOverlay} />
        </div>

        {/* Before 이미지 (클립 마스크) */}
        <div className={styles.beforeImageWrapper} style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img
            src={beforeImage}
            alt={beforeAlt}
            className={styles.image}
            style={{
              transform: `scale(${imageScale}) translate(${imageOffsetX}%, ${imageOffsetY}%)`,
              transformOrigin: 'center center'
            }}
          />
          {/* 왼쪽 페이드 아웃 효과 */}
          <div className={styles.leftFadeOverlay} />
        </div>

        {/* 슬라이더 라인 - 상하 두 부분으로 나눔 */}
        <div className={styles.sliderLineContainer} style={{ left: `${sliderPosition}%` }}>
          {/* 위쪽 선 (원 위) */}
          <div className={styles.sliderLineTop} />
          {/* 아래쪽 선 (원 아래) */}
          <div className={styles.sliderLineBottom} />
          <div className={styles.sliderHandle}>
            <svg
              style={{
                width: isMobile ? mvw(15) : vw(38),
                height: isMobile ? mvw(10) : vw(16),
              }}
              viewBox={isMobile ? '0 0 20 10' : '0 0 38 16'}
              fill="none"
            >
              {isMobile ? (
                <>
                  <polygon points="5,1 1,5 5,9" fill="#FFFFFF" />
                  <polygon points="15,9 19,5 15,1" fill="#FFFFFF" />
                </>
              ) : (
                <>
                  <polygon points="8,2 2,8 8,14" fill="#FFFFFF" />
                  <polygon points="30,14 36,8 30,2" fill="#FFFFFF" />
                </>
              )}
            </svg>
          </div>
        </div>

        {/* 모바일: 라벨을 이미지 안에 위치 */}
        {isMobile && (
          <div className={styles.labelsContainerMobile}>
            <div className={styles.labelMobile}>Before</div>
            <div className={styles.labelMobile}>After</div>
          </div>
        )}

        {/* 로그인 오버레이 */}
        {!isLoggedIn && (
          <div className={styles.loginOverlay}>
            <div className={styles.loginOverlayContent}>
              <button className={styles.loginOverlayButton} onClick={onLoginClick}>
                LOGIN
              </button>
              <p className={styles.loginOverlayText}>
                {loginOverlayText.split('\n').map((line, index) => {
                  // 일본어: "ログインをすると" 부분만 bold 처리
                  if (line.includes('ログインをすると')) {
                    const parts = line.split('ログインをすると');
                    return (
                      <span key={index}>
                        {parts[0]}
                        <strong className={styles.boldText}>ログインをすると</strong>
                        {parts[1]}
                        {index < loginOverlayText.split('\n').length - 1 && <br />}
                      </span>
                    );
                  }
                  return (
                    <span key={index}>
                      {line}
                      {index < loginOverlayText.split('\n').length - 1 && <br />}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 데스크탑: 라벨을 이미지 아래 위치 */}
      {!isMobile && (
        <div className={isBlueBackground ? styles.labelsContainerDesktopBlue : styles.labelsContainerDesktop}>
          <div className={styles.labelDesktop}>Before</div>
          <div className={styles.labelDesktop}>After</div>
        </div>
      )}
    </div>
  );
}
