'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';
import BeforeAfterSlider from '@/shared/ui/BeforeAfterSlider/BeforeAfterSlider';
import ArrowButton from '@/shared/ui/ArrowButton/ArrowButton';
import FeaturesSection from '@/shared/components/FeaturesSection/FeaturesSection';
import HeroSection from './HeroSection';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import * as styles from './HairTransplantLayout.css';
import { processDescription } from './utils';
import { mvw } from '@/shared/styles/responsive.utils';
import type { HairTransplantLayoutProps } from './types';

export default function HairTransplantLayout({
  heroTitle,
  heroTitleMobile,
  language = 'KR', // 기본값 설정
  isCrown = false, // 기본값 설정
  isHairline = false, // 기본값 설정
  isHairTransplant = false, // Hair Transplant 페이지 여부
  isIncision = false, // Incision 페이지 여부
  heroDotPosition,
  heroIllustration = '/hair-transplant/hero-illustration.svg',
  heroIllustrationMobile = '/hair-transplant/mobile/hero-illustration-mobile.svg',
  heroIllustrationSize,
  heroIllustrationPosition,
  section1,
  section2,
  section3,
  beforeAfterData,
  beforeAfterButton,
  featuresTitle,
  featuresTitleMobile,
  featureCards,
  sidePreviewData,
  buttonCards,
  scarReduction = false,
  customMiddleSection,
}: HairTransplantLayoutProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isDesktopLarge, setIsDesktopLarge] = React.useState(false);

  // 화면 크기 체크 함수 - useCallback으로 메모이제이션
  const checkScreenSize = useCallback(() => {
    setIsMobile(window.innerWidth <= 1023);
    setIsDesktopLarge(window.innerWidth >= 1920);
  }, []);

  React.useEffect(() => {
    // 클라이언트에서만 미디어 쿼리 체크
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        heroTitle={heroTitle}
        heroTitleMobile={heroTitleMobile}
        heroDotPosition={heroDotPosition}
        heroIllustration={heroIllustration}
        heroIllustrationMobile={heroIllustrationMobile}
        heroIllustrationSize={heroIllustrationSize}
        heroIllustrationPosition={heroIllustrationPosition}
        isMobile={isMobile}
        isDesktopLarge={isDesktopLarge}
      />

      {/* Section 1 */}
      <Section1
        section1={section1}
        scarReduction={scarReduction}
        isHairline={isHairline}
        isHairTransplant={isHairTransplant}
        isIncision={isIncision}
        isMobile={isMobile}
        isDesktopLarge={isDesktopLarge}
      />

      {/* Custom Middle Section (for ProcessSection in scarReduction) */}
      {customMiddleSection}

      {/* Section 2 */}
      <Section2
        section2={section2}
        isMobile={isMobile}
        isDesktopLarge={isDesktopLarge}
        scarReduction={scarReduction}
        isCrown={isCrown}
        language={language}
        processDescription={processDescription}
      />

      {/* Section 3 - Only render if not scarReduction and section3 exists */}
      {!scarReduction && section3 && (
        <Section3
          section3={section3}
          isMobile={isMobile}
          isDesktopLarge={isDesktopLarge}
          scarReduction={scarReduction}
        />
      )}

      {/* Before & After Section */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContent}>
          <div
            className={`${styles.beforeAfterHeader} ${
              !beforeAfterData.title || beforeAfterData.title === '' ? styles.beforeAfterHeaderNoTitle : ''
            }`}
          >
            <div className={styles.beforeAfterCategory}>{beforeAfterData.category}</div>
            <div
              className={`${styles.beforeAfterTitle} ${
                !beforeAfterData.title || beforeAfterData.title === '' ? styles.beforeAfterTitleEmpty : ''
              }`}
            >
              {beforeAfterData.title}
            </div>
          </div>
          <div className={styles.beforeAfterSliderWrapper}>
            <BeforeAfterSlider
              beforeImage={beforeAfterData.beforeImage}
              afterImage={beforeAfterData.afterImage}
              beforeAlt={beforeAfterData.beforeAlt}
              afterAlt={beforeAfterData.afterAlt}
              className={styles.beforeAfterSlider}
              imageScale={beforeAfterData.imageScale}
            />
          </div>
          {beforeAfterButton && (
            <div className={styles.beforeAfterActions}>
              <Link href={beforeAfterButton.href || '/before-after'} className={styles.beforeAfterLink}>
                {isMobile ? (
                  <div style={{ fontSize: mvw(16) }}>
                    <ArrowButton
                      variant="primary"
                      color="blue"
                      size="medium"
                      textAlign="center"
                      width={mvw(224)}
                      height={mvw(44)}
                      beforeAfterButton={true}
                    >
                      {beforeAfterButton.text}
                    </ArrowButton>
                  </div>
                ) : (
                  <ArrowButton
                    variant="primary"
                    color="blue"
                    size="medium"
                    height={66}
                    paddingTop={12}
                    paddingBottom={10}
                    paddingRight={10}
                    paddingLeft={language === 'JP' ? 35 : 28}
                    fontSize={24}
                    iconSize={44}
                    width={language === 'JP' ? 352 : beforeAfterButton.width || 224}
                    textAlign="left"
                    beforeAfterButton={true}
                  >
                    {beforeAfterButton.text}
                  </ArrowButton>
                )}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Section (Optional) */}
      {featuresTitle && featureCards && (
        <FeaturesSection
          featuresTitle={featuresTitle}
          featuresTitleMobile={featuresTitleMobile}
          featureCards={featureCards}
          isMobile={isMobile}
        />
      )}
    </>
  );
}
