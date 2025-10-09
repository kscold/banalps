'use client';

import { useEffect, useRef, useState } from 'react';
import * as styles from './ArrowButton.css';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';

interface ArrowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  color?: 'white' | 'blue'; // 새로운 색상 prop 추가
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  fontSize?: number | string; // 폰트 크기 (px 단위 또는 vw 단위 문자열)
  fontSizeMobile?: number | string; // 모바일 폰트 크기 (px 단위 또는 mvw 단위 문자열)
  paddingTop?: number; // 위쪽 패딩 (px 단위)
  paddingBottom?: number; // 아래쪽 패딩 (px 단위)
  paddingVertical?: number; // 위아래 패딩 (px 단위)
  paddingLeft?: number | boolean; // 왼쪽 패딩 (px 단위 또는 true면 자동 계산)
  paddingRight?: number; // 오른쪽 패딩 (px 단위)
  width?: number | string; // 너비 (px 단위 또는 문자열)
  height?: number | string; // 높이 (px 단위 또는 vw 단위 문자열)
  textAlign?: 'left' | 'center' | 'right'; // 텍스트 정렬
  iconSize?: number; // 아이콘 원 크기 (px 단위)
}

export default function ArrowButton({
  children,
  onClick,
  variant = 'primary',
  color = 'white', // 기본값은 white
  size = 'medium',
  disabled = false,
  className,
  fontSize, // 커스텀 폰트 크기
  fontSizeMobile, // 모바일 폰트 크기
  paddingTop, // 커스텀 위쪽 패딩
  paddingBottom, // 커스텀 아래쪽 패딩
  paddingVertical, // 커스텀 위아래 패딩
  paddingLeft, // 커스텀 왼쪽 패딩 또는 자동
  paddingRight, // 커스텀 오른쪽 패딩
  width, // 커스텀 너비
  height, // 커스텀 높이
  textAlign = 'left', // 기본값은 left
  iconSize, // 커스텀 아이콘 크기
}: ArrowButtonProps) {
  const [calculatedPadding, setCalculatedPadding] = useState<{
    left?: string;
    right?: string;
  }>({});
  const circleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const { language } = useLanguageStore();

  useEffect(() => {
    const applyStyles = () => {
      // paddingLeft가 true일 때 동적으로 계산
      if (paddingLeft === true && circleRef.current) {
        const circleSize = size === 'small' ? 28 : size === 'large' ? 40 : 28; // 실제 원 크기
        const gap = 10; // gap 값

        // 원 위치가 오른쪽에 있으므로
        const rightPadding = circleSize + gap * 2; // 오른쪽: 원 + 양쪽 gap
        const leftPadding = gap * 2; // 왼쪽: gap만

        setCalculatedPadding({
          left: `${(leftPadding / 1920) * 100}vw`,
          right: `${(rightPadding / 1920) * 100}vw`,
        });
      }

      // CSS 변수를 DOM 요소에 직접 설정 - 1920px 이상에서만
      if (buttonRef.current) {
        const button = buttonRef.current;

        // 1920px 이상일 때 CSS 변수 설정
        if (window.innerWidth >= 1920) {
          if (height && typeof height === 'number') {
            button.style.setProperty('--desktop-height', `${height}px`);
            button.style.height = `${height}px`; // 직접 스타일도 적용
          }
          if (width && typeof width === 'number') {
            button.style.setProperty('--desktop-width', `${width}px`);
            button.style.width = `${width}px`; // 직접 스타일도 적용
          }
          if (fontSize && typeof fontSize === 'number') {
            button.style.setProperty('--desktop-font-size', `${fontSize}px`);
            // 텍스트 요소에도 직접 적용
            if (textRef.current) {
              textRef.current.style.fontSize = `${fontSize}px`;
            }
          }
          if (paddingTop !== undefined) {
            button.style.setProperty('--desktop-padding-top', `${paddingTop}px`);
            button.style.paddingTop = `${paddingTop}px`; // 직접 스타일도 적용
          } else if (!paddingVertical && size !== 'small' && size !== 'medium' && size !== 'large') {
            // 커스텀 패딩이 없고 특정 size가 아니면 기본값 10px 고정
            button.style.paddingTop = '10px';
          }
          if (paddingBottom !== undefined) {
            button.style.setProperty('--desktop-padding-bottom', `${paddingBottom}px`);
            button.style.paddingBottom = `${paddingBottom}px`; // 직접 스타일도 적용
          } else if (!paddingVertical && size !== 'small' && size !== 'medium' && size !== 'large') {
            // 커스텀 패딩이 없고 특정 size가 아니면 기본값 10px 고정
            button.style.paddingBottom = '10px';
          }
          if (paddingLeft && typeof paddingLeft === 'number') {
            button.style.setProperty('--desktop-padding-left', `${paddingLeft}px`);
            button.style.paddingLeft = `${paddingLeft}px`; // 직접 스타일도 적용
          } else if (paddingLeft !== true && size !== 'small' && size !== 'medium' && size !== 'large') {
            // 커스텀 패딩이 없고 특정 size가 아니면 기본값 20px 고정
            button.style.paddingLeft = '20px';
          }
          if (paddingRight) {
            button.style.setProperty('--desktop-padding-right', `${paddingRight}px`);
            button.style.paddingRight = `${paddingRight}px`; // 직접 스타일도 적용
          } else if (size !== 'small' && size !== 'medium' && size !== 'large') {
            // 커스텀 패딩이 없고 특정 size가 아니면 기본값 48px 고정
            button.style.paddingRight = '48px';
          }
        } else {
          // 1920px 미만에서는 vw 단위 사용
          if (height && typeof height === 'number') {
            button.style.height = `${(height / 1920) * 100}vw`;
          }
          if (width && typeof width === 'number') {
            button.style.width = `${(width / 1920) * 100}vw`;
          }
          if (fontSize && typeof fontSize === 'number' && textRef.current) {
            textRef.current.style.fontSize = `${(fontSize / 1920) * 100}vw`;
          }
          if (paddingTop !== undefined) {
            button.style.paddingTop = `${(paddingTop / 1920) * 100}vw`;
          }
          if (paddingBottom !== undefined) {
            button.style.paddingBottom = `${(paddingBottom / 1920) * 100}vw`;
          }
          if (paddingLeft && typeof paddingLeft === 'number') {
            button.style.paddingLeft = `${(paddingLeft / 1920) * 100}vw`;
          }
          if (paddingRight) {
            button.style.paddingRight = `${(paddingRight / 1920) * 100}vw`;
          }
        }
      }

      // 아이콘 크기 CSS 변수 설정
      if (circleRef.current && iconSize) {
        if (window.innerWidth >= 1920) {
          circleRef.current.style.setProperty('--desktop-icon-size', `${iconSize}px`);
          circleRef.current.style.width = `${iconSize}px`;
          circleRef.current.style.height = `${iconSize}px`;
        } else {
          circleRef.current.style.width = `${(iconSize / 1920) * 100}vw`;
          circleRef.current.style.height = `${(iconSize / 1920) * 100}vw`;
        }
      }
    };

    // 초기 적용
    applyStyles();

    // 리사이즈 시 재적용
    window.addEventListener('resize', applyStyles);

    return () => {
      window.removeEventListener('resize', applyStyles);
    };
  }, [paddingLeft, size, width, height, fontSize, paddingTop, paddingBottom, paddingRight, iconSize]);
  // 화살표 컨테이너 스타일 결정
  const getArrowContainerStyle = () => {
    let containerStyle = styles.arrowContainer;

    // Color에 따른 스타일 추가
    if (color === 'white') {
      containerStyle += ` ${styles.whiteArrowContainer}`;
    } else if (color === 'blue') {
      containerStyle += ` ${styles.blueArrowContainer}`;
    }

    if (variant === 'secondary') {
      containerStyle += ` ${styles.secondaryArrowContainer}`;
    }

    if (size === 'small') {
      containerStyle += ` ${styles.smallArrowContainer}`;
    } else if (size === 'large') {
      containerStyle += ` ${styles.largeArrowContainer}`;
    }

    return containerStyle;
  };

  // 화살표 아이콘 스타일 결정
  const getArrowIconStyle = () => {
    let iconStyle = styles.arrowIcon;

    // Color에 따른 스타일 추가
    if (color === 'white') {
      iconStyle += ` ${styles.whiteArrowIcon}`;
    } else if (color === 'blue') {
      iconStyle += ` ${styles.blueArrowIcon}`;
    }

    if (size === 'small') {
      iconStyle += ` ${styles.smallArrowIcon}`;
    } else if (size === 'large') {
      iconStyle += ` ${styles.largeArrowIcon}`;
    }

    return iconStyle;
  };

  // 영문 텍스트인지 확인하는 함수 (POP 폰트 사용)
  const isEnglishText = (text: React.ReactNode): boolean => {
    if (typeof text === 'string') {
      // 일본어 문자 체크 (히라가나, 가타카나, 한자)
      const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);
      if (hasJapanese) {
        return false; // 일본어는 Poppins 사용하지 않음
      }

      // "View More" 같은 특정 텍스트도 명시적으로 체크
      const englishKeywords = ['View More', 'VIEW MORE', 'view more'];
      if (englishKeywords.includes(text.trim())) {
        return true;
      }

      // 한글이 포함되어 있지 않으면 영문으로 간주
      return !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(text);
    }
    return false;
  };

  // 텍스트 스타일 결정
  const getTextStyle = () => {
    let textStyle = styles.buttonText;

    if (color === 'white') {
      textStyle += ` ${styles.whiteText}`;
    } else if (color === 'blue') {
      textStyle += ` ${styles.blueText}`;
    }
    // 영문 텍스트일 경우 Poppins 폰트 적용
    if (isEnglishText(children)) {
      textStyle += ` ${styles.englishText}`;
    }

    if (language === 'JP') {
      textStyle += ` ${styles.japaneseText}`;
    }

    return textStyle;
  };

  // 커스텀 스타일 생성 - CSS 변수만 설정, inline style은 CSS 파일의 미디어 쿼리가 처리
  const customStyle: React.CSSProperties & Record<string, any> = {};

  if (fontSize) {
    // CSS 변수로만 전달 - CSS 파일에서 미디어 쿼리로 처리
    if (typeof fontSize === 'number') {
      customStyle['--desktop-font-size'] = `${fontSize}px`;
    } else {
      customStyle.fontSize = fontSize;
    }
  }

  // 패딩 처리 - CSS 변수로만 전달
  if (paddingTop !== undefined) {
    customStyle['--desktop-padding-top'] = `${paddingTop}px`;
  } else if (paddingVertical) {
    customStyle['--desktop-padding-top'] = `${paddingVertical}px`;
  }

  if (paddingBottom !== undefined) {
    customStyle['--desktop-padding-bottom'] = `${paddingBottom}px`;
  } else if (paddingVertical) {
    customStyle['--desktop-padding-bottom'] = `${paddingVertical}px`;
  }

  // padding 처리
  if (paddingLeft === true && calculatedPadding.left && calculatedPadding.right) {
    // true일 때는 자동 계산된 패딩 사용 (기존 로직 유지)
    customStyle.paddingLeft = calculatedPadding.left;
    customStyle.paddingRight = calculatedPadding.right;
    // 1920px+ 고정값
    customStyle['--desktop-padding-left'] = `${parseFloat(calculatedPadding.left) * 19.2}px`;
    customStyle['--desktop-padding-right'] = `${parseFloat(calculatedPadding.right) * 19.2}px`;
  } else {
    // paddingLeft가 숫자일 때 CSS 변수로만 전달
    if (typeof paddingLeft === 'number') {
      customStyle['--desktop-padding-left'] = `${paddingLeft}px`;
    }
    // paddingRight 처리
    if (paddingRight) {
      customStyle['--desktop-padding-right'] = `${paddingRight}px`;
    }
  }

  if (width) {
    // CSS 변수로만 전달
    if (typeof width === 'number') {
      customStyle['--desktop-width'] = `${width}px`;
    } else {
      customStyle.width = width;
    }
  }

  if (height) {
    // CSS 변수로만 전달
    if (typeof height === 'number') {
      customStyle['--desktop-height'] = `${height}px`;
    } else {
      customStyle.height = height;
    }
  }

  if (textAlign) {
    customStyle.justifyContent = textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start';
  }

  return (
    <button
      ref={buttonRef}
      className={`${styles.arrowButton} ${styles[variant]} ${styles[color]} ${styles[size]} ${className || ''}`}
      style={customStyle as React.CSSProperties & { [key: string]: any }}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        ref={textRef}
        className={getTextStyle()}
        data-font={isEnglishText(children) ? 'poppins' : 'default'}
        style={
          {
            ...(fontSizeMobile
              ? ({
                  '--mobile-font-size':
                    typeof fontSizeMobile === 'number' ? `${(fontSizeMobile / 375) * 100}vw` : fontSizeMobile,
                } as React.CSSProperties)
              : {}),
          } as React.CSSProperties
        }
      >
        {children}
      </span>
      <div
        ref={circleRef}
        className={`${getArrowContainerStyle()} ${styles.arrowContainerHover}`}
        style={
          iconSize
            ? ({
                width: `${(iconSize / 1920) * 100}vw`,
                height: `${(iconSize / 1920) * 100}vw`,
                '--desktop-icon-size': `${iconSize}px`,
              } as React.CSSProperties)
            : {}
        }
      >
        <svg
          className={getArrowIconStyle()}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
