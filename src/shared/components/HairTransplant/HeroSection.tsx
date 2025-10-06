'use client';

import React from 'react';
import * as styles from './HairTransplantLayout.css';
import { getResponsivePosition, getResponsiveSizeAndPosition } from './utils';
import { mvw } from '@/shared/styles/responsive.utils';

interface HeroSectionProps {
  heroTitle: React.ReactNode;
  heroTitleMobile?: React.ReactNode;
  heroDotPosition?: {
    absolute?: boolean;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    mobileTop?: number;
    mobileRight?: number;
    mobileBottom?: number;
    mobileLeft?: number;
  };
  heroIllustration: string;
  heroIllustrationMobile: string;
  heroIllustrationSize?: {
    width: number;
    height: number;
  };
  heroIllustrationPosition?: {
    left?: number;
    right?: number;
  };
  isMobile: boolean;
  isDesktopLarge: boolean;
}

export default function HeroSection({
  heroTitle,
  heroTitleMobile,
  heroDotPosition,
  heroIllustration,
  heroIllustrationMobile,
  heroIllustrationSize,
  heroIllustrationPosition,
  isMobile,
  isDesktopLarge,
}: HeroSectionProps) {
  return (
    <section className={styles.HairTransplantHeroSection}>
      <div className={styles.HairTransplantHeroContainer}>
        {/* Hero Title - 중앙에 배치 */}
        <div className={styles.HairTransplantHeroTitleWrapper}>
          <div className={styles.HairTransplantHeroTitleContainer}>
            <h1 className={styles.HairTransplantHeroTitle}>
              <span
                style={{
                  display: isMobile ? 'block' : 'flex',
                  alignItems: isMobile ? undefined : 'center',
                  justifyContent: isMobile ? undefined : 'flex-start',
                  position: heroDotPosition?.absolute ? 'relative' : undefined,
                }}
              >
                {isMobile ? (
                  <div
                    style={{
                      display: 'inline-block',
                      position: 'relative',
                    }}
                  >
                    <span style={{ display: 'inline' }}>{heroTitleMobile || heroTitle}</span>
                    <div
                      className={
                        heroDotPosition?.absolute
                          ? styles.HairTransplantHeroTitleDotAbsolute
                          : styles.HairTransplantHeroTitleDot
                      }
                      style={{
                        display: 'inline-block',
                        marginLeft: mvw(4),
                        verticalAlign: 'baseline',
                        position: 'relative',
                      }}
                    />
                  </div>
                ) : (
                  <>
                    {heroTitle}
                    <div
                      className={
                        heroDotPosition?.absolute
                          ? styles.HairTransplantHeroTitleDotAbsolute
                          : styles.HairTransplantHeroTitleDot
                      }
                      style={
                        heroDotPosition?.absolute
                          ? getResponsivePosition(heroDotPosition, isMobile, isDesktopLarge)
                          : undefined
                      }
                    />
                  </>
                )}
              </span>
            </h1>
          </div>
        </div>
        {/* Hero Illustration - 왼쪽에 붙도록 (데스크탑용) */}
        <div
          className={styles.HairTransplantHeroIllustration}
          style={getResponsiveSizeAndPosition(heroIllustrationSize, heroIllustrationPosition, isMobile, isDesktopLarge)}
        >
          <img src={heroIllustration} alt="모발이식 일러스트" className={styles.heroIllustrationImage} />
        </div>
      </div>
      {/* 모바일 일러스트 - Hero Container 밖에 위치 */}
      <img src={heroIllustrationMobile} alt="모발이식 일러스트" className={styles.heroIllustrationImageMobile} />
    </section>
  );
}
