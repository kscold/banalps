'use client';

import React, { useRef, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import BeforeAfterSlider from '@/shared/ui/BeforeAfterSlider/BeforeAfterSlider';
import ArrowButton from '@/shared/ui/ArrowButton/ArrowButton';
import FeaturesSection from '@/shared/components/FeaturesSection/FeaturesSection';
import Section2 from './Section2';
import Section3 from './Section3';
import * as styles from './HairTransplantLayout.css';
import { getResponsivePosition, getResponsiveSize, getResponsiveSizeAndPosition, processDescription } from './utils';
import { vw, mvw } from '@/shared/styles/responsive.utils';
import type { HairTransplantLayoutProps } from './types';

export default function HairTransplantLayout({
  heroTitle,
  heroTitleMobile,
  language = 'KR', // 기본값 설정
  isCrown = false, // 기본값 설정
  isHairline = false, // 기본값 설정
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

  const section1ImagesRef = useRef(null);
  const section1ImagesInView = useInView(section1ImagesRef, { once: true });

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
            style={getResponsiveSizeAndPosition(
              heroIllustrationSize,
              heroIllustrationPosition,
              isMobile,
              isDesktopLarge
            )}
          >
            <img src={heroIllustration} alt="모발이식 일러스트" className={styles.heroIllustrationImage} />
          </div>
        </div>
        {/* 모바일 일러스트 - Hero Container 밖에 위치 */}
        <img src={heroIllustrationMobile} alt="모발이식 일러스트" className={styles.heroIllustrationImageMobile} />
      </section>

      {/* Section 1 */}
      <section
        className={styles.section1}
        style={
          isMobile && section1.mobileHeight
            ? {
                minHeight: mvw(section1.mobileHeight),
              }
            : undefined
        }
      >
        <div className={styles.section1Content}>
          {isMobile ? (
            <>
              {/* 모바일: 숫자 → 제목 → 이미지 → 텍스트 순서 */}

              <div className={styles.section1Left}>
                {!scarReduction && <div className={styles.section1Number}>{section1.number}</div>}
                <div className={styles.section1Text}>
                  <h2
                    className={styles.section1Title}
                    style={{
                      ...(isMobile && section1.titleMobileSize
                        ? {
                            width: section1.titleMobileSize.width ? mvw(section1.titleMobileSize.width) : undefined,
                            height: section1.titleMobileSize.height ? mvw(section1.titleMobileSize.height) : undefined,
                          }
                        : {}),
                      ...(section1.titleMarginBottom !== undefined
                        ? {
                            marginBottom: isMobile ? mvw(40) : vw(section1.titleMarginBottom),
                          }
                        : {}),
                    }}
                  >
                    {isMobile && section1.titleMobile ? section1.titleMobile : section1.title}
                  </h2>

                  {/* 모바일: 타이틀 아래 메인 이미지 */}
                  {(section1.imagesMobile?.main || section1.images?.main) && (
                    <motion.div
                      className={
                        section1.imagesMobileSize?.mainMaxWidth
                          ? undefined // Don't apply the CSS class if we want 100vw
                          : styles.section1Image1
                      }
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.4,
                      }}
                      style={{
                        ...(section1.imagesMobileSize?.mainMaxWidth
                          ? {
                              position: 'relative',
                              width: '100vw',
                              maxWidth: 'none',
                              height: section1.imagesMobileSize.mainHeight
                                ? mvw(section1.imagesMobileSize.mainHeight)
                                : section1.imagesMobileSize.height
                                ? mvw(section1.imagesMobileSize.height)
                                : 'auto',
                              left: '50%',
                              right: '50%',
                              marginLeft: '-50vw',
                              marginRight: '-50vw',
                              borderRadius: mvw(12),
                              overflow: 'hidden',
                              display: 'block',
                            }
                          : {
                              width: '100%',
                              maxWidth: '100%',
                              height: section1.imagesMobileSize?.mainHeight
                                ? mvw(section1.imagesMobileSize.mainHeight)
                                : section1.imagesMobileSize?.height
                                ? mvw(section1.imagesMobileSize.height)
                                : 'auto',
                            }),
                      }}
                    >
                      <img
                        src={section1.imagesMobile?.main || section1.images?.main}
                        alt="이미지 1"
                        className={styles.section1ImageContent}
                      />
                    </motion.div>
                  )}

                  <div
                    className={styles.section1Description}
                    style={
                      section1.descriptionWidth !== undefined && !isMobile
                        ? {
                            width: isDesktopLarge ? `${section1.descriptionWidth}px` : vw(section1.descriptionWidth),
                            maxWidth: isDesktopLarge ? `${section1.descriptionWidth}px` : vw(section1.descriptionWidth), // maxWidth도 함께 설정
                          }
                        : undefined
                    }
                  >
                    {isMobile && section1.descriptionMobile ? section1.descriptionMobile : section1.description}
                  </div>

                  {/* 모바일 일러스트 - description 아래에 배치 */}
                  {section1.illustrationMobile && (
                    <div
                      className={styles.section1MobileIllustration}
                      style={{
                        ...(section1.illustrationMobileSize
                          ? {
                              // When fullWidth is true, width and margins are handled by CSS
                              ...(section1.illustrationMobileSize.fullWidth
                                ? {
                                    height: section1.illustrationMobileSize.height
                                      ? mvw(section1.illustrationMobileSize.height)
                                      : undefined,
                                    aspectRatio:
                                      section1.illustrationMobileSize.width && section1.illustrationMobileSize.height
                                        ? `${section1.illustrationMobileSize.width} / ${section1.illustrationMobileSize.height}`
                                        : undefined,
                                  }
                                : {
                                    width: section1.illustrationMobileSize.width
                                      ? mvw(section1.illustrationMobileSize.width)
                                      : '100%',
                                    height: section1.illustrationMobileSize.height
                                      ? mvw(section1.illustrationMobileSize.height)
                                      : undefined,
                                    aspectRatio:
                                      section1.illustrationMobileSize.width && section1.illustrationMobileSize.height
                                        ? `${section1.illustrationMobileSize.width} / ${section1.illustrationMobileSize.height}`
                                        : undefined,
                                  }),
                            }
                          : {
                              width: '100%',
                              aspectRatio: '324 / 252',
                            }),
                        ...(section1.illustrationMobileMargin
                          ? {
                              ...(section1.illustrationMobileMargin.top !== undefined
                                ? {
                                    marginTop: mvw(section1.illustrationMobileMargin.top),
                                  }
                                : {}),
                              ...(section1.illustrationMobileMargin.right !== undefined &&
                              !section1.illustrationMobileSize?.fullWidth
                                ? {
                                    marginRight: mvw(section1.illustrationMobileMargin.right),
                                  }
                                : {}),
                              ...(section1.illustrationMobileMargin.bottom !== undefined
                                ? {
                                    marginBottom: mvw(section1.illustrationMobileMargin.bottom),
                                  }
                                : {}),
                              ...(section1.illustrationMobileMargin.left !== undefined &&
                              !section1.illustrationMobileSize?.fullWidth
                                ? {
                                    marginLeft: mvw(section1.illustrationMobileMargin.left),
                                  }
                                : {}),
                            }
                          : {}),
                      }}
                    >
                      <img
                        src={section1.illustrationMobile}
                        alt="일러스트"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* 모바일 이미지 (기존) */}
                {section1.mobileImages?.illustration && (
                  <div
                    className={isHairline ? styles.section1ImageHairline : styles.section1Image}
                    style={
                      section1.mobileImages?.illustrationSize
                        ? {
                            width: mvw(section1.mobileImages.illustrationSize.width),
                            height: mvw(section1.mobileImages.illustrationSize.height),
                            maxWidth: '100%',
                          }
                        : undefined
                    }
                  >
                    <img
                      src={section1.mobileImages.illustration as string}
                      alt="일러스트"
                      className={styles.section1Illustration}
                    />
                  </div>
                )}

                {/* 모바일: 일러스트 아래 보조 이미지 */}
                {(section1.imagesMobile?.secondary || section1.images?.secondary) && (
                  <motion.div
                    className={
                      section1.imagesMobileSize?.secondaryMaxWidth
                        ? undefined // Don't apply the CSS class if we want 100vw
                        : styles.section1Image2
                    }
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
                    style={{
                      ...(section1.imagesMobileSize?.secondaryMaxWidth
                        ? {
                            // position: "relative",
                            width: '100vw',
                            maxWidth: '100vw',
                            height: section1.imagesMobileSize.secondaryHeight
                              ? mvw(section1.imagesMobileSize.secondaryHeight)
                              : section1.imagesMobileSize.height
                              ? mvw(section1.imagesMobileSize.height)
                              : 'auto',
                          }
                        : {
                            width: '100%',
                            maxWidth: '100%',
                            height: section1.imagesMobileSize?.secondaryHeight
                              ? mvw(section1.imagesMobileSize.secondaryHeight)
                              : section1.imagesMobileSize?.height
                              ? mvw(section1.imagesMobileSize.height)
                              : 'auto',
                          }),
                    }}
                  >
                    <img
                      src={section1.imagesMobile?.secondary || section1.images?.secondary}
                      alt="이미지 2"
                      className={styles.section1ImageContent}
                    />
                  </motion.div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className={styles.section1Left}>
                {!scarReduction && <div className={styles.section1Number}>{section1.number}</div>}
                <div
                  className={styles.section1Text}
                  style={{
                    ...(section1.section1RightSize?.height && !isMobile
                      ? {
                          height: isDesktopLarge
                            ? `${section1.section1RightSize.height}px`
                            : vw(section1.section1RightSize.height),
                        }
                      : {}),
                  }}
                >
                  <h2
                    className={styles.section1Title}
                    style={{
                      ...(isMobile && section1.titleMobileSize
                        ? {
                            width: section1.titleMobileSize.width ? mvw(section1.titleMobileSize.width) : undefined,
                            height: section1.titleMobileSize.height ? mvw(section1.titleMobileSize.height) : undefined,
                          }
                        : {}),
                      ...(section1.titleMarginBottom !== undefined
                        ? {
                            marginBottom: isMobile ? mvw(40) : vw(section1.titleMarginBottom),
                          }
                        : {}),
                      // 일러스트가 있을 때는 marginBottom 제거 (space-between으로 배치)
                      ...(section1.illustration && !isMobile
                        ? {
                            marginBottom: '0',
                          }
                        : {}),
                    }}
                  >
                    {isMobile && section1.titleMobile ? section1.titleMobile : section1.title}
                  </h2>
                  {section1.illustration && (
                    <div className={isHairline ? styles.section1ImageHairline : styles.section1Image}>
                      <img
                        src={section1.illustration}
                        alt="일러스트"
                        className={styles.section1Illustration}
                        style={
                          section1.illustrationSize
                            ? {
                                width: isDesktopLarge
                                  ? `${section1.illustrationSize.width}px`
                                  : vw(section1.illustrationSize.width),
                                height: isDesktopLarge
                                  ? `${section1.illustrationSize.height}px`
                                  : vw(section1.illustrationSize.height),
                              }
                            : undefined
                        }
                      />
                    </div>
                  )}
                  <div
                    className={styles.section1Description}
                    style={
                      section1.descriptionWidth !== undefined && !isMobile
                        ? {
                            width: isDesktopLarge ? `${section1.descriptionWidth}px` : vw(section1.descriptionWidth),
                            maxWidth: isDesktopLarge ? `${section1.descriptionWidth}px` : vw(section1.descriptionWidth), // maxWidth도 함께 설정
                          }
                        : undefined
                    }
                  >
                    {isMobile && section1.descriptionMobile ? section1.descriptionMobile : section1.description}
                  </div>
                </div>
              </div>
              <div
                className={styles.section1Right}
                ref={section1ImagesRef}
                style={
                  section1.section1RightSize
                    ? {
                        ...(section1.section1RightSize.width !== undefined
                          ? {
                              width: isDesktopLarge
                                ? `${section1.section1RightSize.width}px`
                                : vw(section1.section1RightSize.width),
                              maxWidth: isDesktopLarge
                                ? `${section1.section1RightSize.width}px`
                                : vw(section1.section1RightSize.width), // maxWidth도 함께 설정
                            }
                          : {}),
                        ...(section1.section1RightSize.height !== undefined
                          ? {
                              height: isDesktopLarge
                                ? `${section1.section1RightSize.height}px`
                                : vw(section1.section1RightSize.height),
                              minHeight: isDesktopLarge
                                ? `${section1.section1RightSize.height}px`
                                : vw(section1.section1RightSize.height), // minHeight도 함께 설정
                            }
                          : {}),
                      }
                    : undefined
                }
              >
                {/* Use mobile images if available on mobile, otherwise use regular images */}
                {(isMobile && section1.imagesMobile?.main ? section1.imagesMobile.main : section1.images?.main) && (
                  <motion.div
                    className={styles.section1Image1}
                    initial={{ opacity: 0, y: 80 }}
                    animate={section1ImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                    style={
                      isMobile && section1.imagesMobileSize
                        ? {
                            width: section1.imagesMobileSize.mainMaxWidth ? '100vw' : '100%',
                            maxWidth: section1.imagesMobileSize.mainMaxWidth ? '100vw' : '100%',
                            height: section1.imagesMobileSize.mainHeight
                              ? mvw(section1.imagesMobileSize.mainHeight)
                              : section1.imagesMobileSize.height
                              ? mvw(section1.imagesMobileSize.height)
                              : 'auto',
                            marginLeft: section1.imagesMobileSize.mainMaxWidth ? mvw(-20) : undefined,
                            marginRight: section1.imagesMobileSize.mainMaxWidth ? mvw(-20) : undefined,
                          }
                        : {
                            ...getResponsiveSize(section1.imagesSize?.main, isDesktopLarge),
                            ...(section1.imagesPosition?.main
                              ? {
                                  position: 'absolute' as const,
                                  ...getResponsivePosition(section1.imagesPosition.main, false, isDesktopLarge),
                                }
                              : {}),
                          }
                    }
                  >
                    <img
                      src={isMobile && section1.imagesMobile?.main ? section1.imagesMobile.main : section1.images?.main}
                      alt="이미지 1"
                      className={styles.section1ImageContent}
                    />
                  </motion.div>
                )}
                {(isMobile && section1.imagesMobile?.secondary
                  ? section1.imagesMobile.secondary
                  : section1.images?.secondary) && (
                  <motion.div
                    className={styles.section1Image2}
                    initial={{ opacity: 0, y: 80 }}
                    animate={section1ImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
                    style={
                      isMobile && section1.imagesMobileSize
                        ? {
                            width: section1.imagesMobileSize.secondaryMaxWidth ? '100vw' : '100%',
                            maxWidth: section1.imagesMobileSize.secondaryMaxWidth ? '100vw' : '100%',
                            height: section1.imagesMobileSize.secondaryHeight
                              ? mvw(section1.imagesMobileSize.secondaryHeight)
                              : section1.imagesMobileSize.height
                              ? mvw(section1.imagesMobileSize.height)
                              : 'auto',
                            marginLeft: section1.imagesMobileSize.secondaryMaxWidth ? mvw(-20) : undefined,
                            marginRight: section1.imagesMobileSize.secondaryMaxWidth ? mvw(-20) : undefined,
                          }
                        : {
                            ...getResponsiveSize(section1.imagesSize?.secondary, isDesktopLarge),
                            ...(section1.imagesPosition?.secondary
                              ? {
                                  position: 'absolute' as const,
                                  ...getResponsivePosition(section1.imagesPosition.secondary, false, isDesktopLarge),
                                }
                              : {}),
                          }
                    }
                  >
                    <img
                      src={
                        isMobile && section1.imagesMobile?.secondary
                          ? section1.imagesMobile.secondary
                          : section1.images?.secondary
                      }
                      alt="이미지 2"
                      className={styles.section1ImageContent2}
                    />
                  </motion.div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

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
          <div className={styles.beforeAfterHeader}>
            <div className={styles.beforeAfterCategory}>{beforeAfterData.category}</div>
            <div className={styles.beforeAfterTitle}>{beforeAfterData.title}</div>
          </div>
          <div className={styles.beforeAfterSliderWrapper}>
            <BeforeAfterSlider
              beforeImage={beforeAfterData.beforeImage}
              afterImage={beforeAfterData.afterImage}
              beforeAlt={beforeAfterData.beforeAlt}
              afterAlt={beforeAfterData.afterAlt}
              className={styles.beforeAfterSlider}
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
