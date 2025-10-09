'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as styles from './HairTransplantLayout.css';
import { getResponsiveSize, getResponsivePosition, getResponsiveSizeAndPosition } from './utils';
import { Section } from './types';
import { vw, mvw } from '@/shared/styles/responsive.utils';

interface Section1Props {
  section1: Section;
  scarReduction: boolean;
  isHairline: boolean;
  isHairTransplant?: boolean; // Hair Transplant 페이지 여부
  isMobile: boolean;
  isDesktopLarge: boolean;
}

export default function Section1({ section1, scarReduction, isHairline, isHairTransplant, isMobile, isDesktopLarge }: Section1Props) {
  const section1ImagesRef = useRef(null);
  const section1ImagesInView = useInView(section1ImagesRef, { once: true });

  return (
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

            <div className={isHairTransplant ? styles.section1LeftHairTransplant : styles.section1Left}>
              {!scarReduction && <div className={styles.section1Number}>{section1.number}</div>}
              <div className={styles.section1Text}>
                <h2
                  className={styles.section1Title}
                  style={{
                    ...(isMobile && section1.titleMobileSize
                      ? {
                          width: section1.titleMobileSize.width
                            ? `${(section1.titleMobileSize.width / 375) * 100}vw`
                            : undefined,
                          height: section1.titleMobileSize.height
                            ? `${(section1.titleMobileSize.height / 375) * 100}vw`
                            : undefined,
                        }
                      : {}),
                    ...(isMobile && section1.titleMobileMinHeight !== undefined
                      ? {
                          minHeight: mvw(section1.titleMobileMinHeight),
                        }
                      : {}),
                    ...(section1.titleMarginBottom !== undefined
                      ? {
                          marginBottom: isMobile
                            ? mvw(40) // Always use mvw(40) for mobile
                            : `${(section1.titleMarginBottom / 1920) * 100}vw`,
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
                          ...getResponsiveSize({ width: section1.descriptionWidth, height: 0 }, isDesktopLarge),
                          maxWidth: isDesktopLarge ? `${section1.descriptionWidth}px` : vw(section1.descriptionWidth),
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
                          width: `${(section1.mobileImages.illustrationSize.width / 375) * 100}vw`,
                          height: `${(section1.mobileImages.illustrationSize.height / 375) * 100}vw`,
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
            <div className={isHairTransplant ? styles.section1LeftHairTransplant : styles.section1Left}>
              {!scarReduction && <div className={styles.section1Number}>{section1.number}</div>}
              <div
                className={styles.section1Text}
                style={{
                  ...(section1.section1RightSize?.height && !isMobile
                    ? {
                        height: isDesktopLarge
                          ? `${section1.section1RightSize.height}px`
                          : `${section1.section1RightSize.height / 19.2}vw`,
                      }
                    : {}),
                }}
              >
                <h2
                  className={styles.section1Title}
                  style={{
                    ...(isMobile && section1.titleMobileSize
                      ? {
                          width: section1.titleMobileSize.width
                            ? `${(section1.titleMobileSize.width / 375) * 100}vw`
                            : undefined,
                          height: section1.titleMobileSize.height
                            ? `${(section1.titleMobileSize.height / 375) * 100}vw`
                            : undefined,
                        }
                      : {}),
                    ...(isMobile && section1.titleMobileMinHeight !== undefined
                      ? {
                          minHeight: mvw(section1.titleMobileMinHeight),
                        }
                      : {}),
                    ...(section1.titleMarginBottom !== undefined
                      ? {
                          marginBottom: isMobile
                            ? mvw(40) // Always use mvw(40) for mobile
                            : `${(section1.titleMarginBottom / 1920) * 100}vw`,
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
                                : `${section1.illustrationSize.width / 19.2}vw`,
                              height: isDesktopLarge
                                ? `${section1.illustrationSize.height}px`
                                : `${section1.illustrationSize.height / 19.2}vw`,
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
                          ...getResponsiveSize({ width: section1.descriptionWidth, height: 0 }, isDesktopLarge),
                          maxWidth: isDesktopLarge ? `${section1.descriptionWidth}px` : vw(section1.descriptionWidth),
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
                      ...getResponsiveSize(section1.section1RightSize, isDesktopLarge),
                      ...(section1.section1RightSize.width !== undefined
                        ? {
                            maxWidth: isDesktopLarge
                              ? `${section1.section1RightSize.width}px`
                              : vw(section1.section1RightSize.width),
                          }
                        : {}),
                      ...(section1.section1RightSize.height !== undefined
                        ? {
                            minHeight: isDesktopLarge
                              ? `${section1.section1RightSize.height}px`
                              : vw(section1.section1RightSize.height),
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
                          ...(section1.imagesSize?.main
                            ? {
                                maxWidth: isDesktopLarge
                                  ? `${section1.imagesSize.main.width}px`
                                  : vw(section1.imagesSize.main.width),
                              }
                            : {}),
                          ...(section1.imagesPosition?.main
                            ? {
                                position: 'absolute' as const,
                                ...getResponsivePosition(section1.imagesPosition.main, isMobile, isDesktopLarge),
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
                          ...(section1.imagesSize?.secondary
                            ? {
                                maxWidth: isDesktopLarge
                                  ? `${section1.imagesSize.secondary.width}px`
                                  : vw(section1.imagesSize.secondary.width),
                              }
                            : {}),
                          ...(section1.imagesPosition?.secondary
                            ? {
                                position: 'absolute' as const,
                                ...getResponsivePosition(section1.imagesPosition.secondary, isMobile, isDesktopLarge),
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
  );
}
