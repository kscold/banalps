import React, { CSSProperties } from 'react';
import { mvw, vw } from '@/shared/styles/responsive.utils';

// 위치 정보 타입
interface PositionConfig {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  mobileTop?: number;
  mobileRight?: number;
  mobileBottom?: number;
  mobileLeft?: number;
}

// 크기 정보 타입
interface SizeConfig {
  width?: number;
  height?: number;
}

/**
 * 반응형 위치 스타일 생성
 * @param position - 위치 설정 객체
 * @param isMobile - 모바일 여부
 * @param isDesktopLarge - 1920px 이상 여부
 * @returns CSSProperties 객체
 */
export const getResponsivePosition = (
  position: PositionConfig | undefined,
  isMobile: boolean,
  isDesktopLarge: boolean
): CSSProperties => {
  if (!position) return {};

  const styles: CSSProperties = {};

  // Top
  if (isMobile && position.mobileTop !== undefined) {
    styles.top = mvw(position.mobileTop);
  } else if (position.top !== undefined) {
    styles.top = isDesktopLarge ? `${position.top}px` : vw(position.top);
  }

  // Right
  if (isMobile && position.mobileRight !== undefined) {
    styles.right = mvw(position.mobileRight);
  } else if (position.right !== undefined) {
    styles.right = isDesktopLarge ? `${position.right}px` : vw(position.right);
  }

  // Bottom
  if (isMobile && position.mobileBottom !== undefined) {
    styles.bottom = mvw(position.mobileBottom);
  } else if (position.bottom !== undefined) {
    styles.bottom = isDesktopLarge ? `${position.bottom}px` : vw(position.bottom);
  }

  // Left
  if (isMobile && position.mobileLeft !== undefined) {
    styles.left = mvw(position.mobileLeft);
  } else if (position.left !== undefined) {
    styles.left = isDesktopLarge ? `${position.left}px` : vw(position.left);
  }

  return styles;
};

/**
 * 반응형 크기 스타일 생성
 * @param size - 크기 설정 객체
 * @param isDesktopLarge - 1920px 이상 여부
 * @returns CSSProperties 객체
 */
export const getResponsiveSize = (size: SizeConfig | undefined, isDesktopLarge: boolean): CSSProperties => {
  if (!size) return {};

  const styles: CSSProperties = {};

  if (size.width !== undefined) {
    styles.width = isDesktopLarge ? `${size.width}px` : vw(size.width);
    styles.maxWidth = isDesktopLarge ? `${size.width}px` : vw(size.width);
  }

  if (size.height !== undefined) {
    styles.height = isDesktopLarge ? `${size.height}px` : vw(size.height);
  }

  return styles;
};

/**
 * 반응형 크기 + 위치 스타일 통합 생성
 * @param size - 크기 설정 객체
 * @param position - 위치 설정 객체
 * @param isMobile - 모바일 여부
 * @param isDesktopLarge - 1920px 이상 여부
 * @returns CSSProperties 객체
 */
export const getResponsiveSizeAndPosition = (
  size: SizeConfig | undefined,
  position: PositionConfig | undefined,
  isMobile: boolean,
  isDesktopLarge: boolean
): CSSProperties | undefined => {
  if (!size && !position) return undefined;

  return {
    ...getResponsiveSize(size, isDesktopLarge),
    ...getResponsivePosition(position, isMobile, isDesktopLarge),
  };
};

// Helper function to process description and apply quote style to <b> tags
export const processDescription = (description: React.ReactNode, quoteClassName: string): React.ReactNode => {
  if (!description) return null;

  // If description is a string, return as is
  if (typeof description === 'string') return description;

  // If it's a React element, check for <b> tags
  if (React.isValidElement(description)) {
    const descElement = description as React.ReactElement<any>;
    const children = React.Children.toArray(descElement.props.children);

    const result: React.ReactNode[] = [];
    let hasQuote = false;

    children.forEach((child, index) => {
      if (React.isValidElement(child) && child.type === 'b') {
        const bElement = child as React.ReactElement<any>;
        // Add line breaks before quote if not the first element and not already has quote
        if (result.length > 0 && !hasQuote) {
          result.push(<br key={`br1-${index}`} />);
          result.push(<br key={`br2-${index}`} />);
        }
        // Replace <b> tag with span with quote class
        result.push(
          <span key={index} className={quoteClassName}>
            {bElement.props.children}
          </span>
        );
        hasQuote = true;
      } else {
        result.push(child);
      }
    });

    return <>{result}</>;
  }

  return description;
};
