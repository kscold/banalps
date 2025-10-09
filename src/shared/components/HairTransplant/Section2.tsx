'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as styles from './HairTransplantLayout.css';
import { getResponsiveSize, getResponsivePosition, getResponsiveSizeAndPosition } from './utils';
import { vw, mvw } from '@/shared/styles/responsive.utils';
import { Section } from './types';

interface Section2Props {
  section2: Section;
  isMobile: boolean;
  isDesktopLarge: boolean;
  scarReduction: boolean;
  isCrown: boolean;
  language: 'KR' | 'JP';
  processDescription: (description: React.ReactNode, quoteClassName: string) => React.ReactNode;
}

export default function Section2({
  section2,
  isMobile,
  isDesktopLarge,
  scarReduction,
  isCrown,
  language,
  processDescription,
}: Section2Props) {
  const section2ImagesRef = useRef(null);
  const section2ImagesInView = useInView(section2ImagesRef, { once: true });

  return (
    <section
      className={styles.section2}
      style={
        isMobile
          ? {
              ...(section2.mobileHeight ? { minHeight: mvw(section2.mobileHeight) } : {}),
              ...(section2.sectionPaddingBottom !== undefined ? { paddingBottom: section2.sectionPaddingBottom } : {}),
            }
          : { position: 'relative' as const } // 데스크톱에서 absolute SVG의 부모로 설정
      }
    >
      <div className={styles.section2Content}>
        {isMobile ? (
          <>
            {/* 모바일: 숫자 → 제목 → 이미지 → 텍스트 순서 */}
            {!scarReduction && <div className={styles.section2NumberBg}>{section2.number}</div>}
            <div className={styles.section2Left}>
              <div className={scarReduction ? styles.section2TextScarReduction : styles.section2Text}>
                <h2
                  className={`${styles.section2Title} ${
                    scarReduction && !isMobile ? styles.section2TitleScarReduction : ''
                  }`}
                  style={{
                    ...(isMobile && section2.titleMobileSize
                      ? {
                          width: section2.titleMobileSize?.width
                            ? `${(section2.titleMobileSize.width / 375) * 100}vw`
                            : undefined,
                          height: section2.titleMobileSize?.height
                            ? `${(section2.titleMobileSize.height / 375) * 100}vw`
                            : undefined,
                        }
                      : {}),
                    ...(isMobile && section2.titleMobileMinHeight !== undefined
                      ? {
                          minHeight: mvw(section2.titleMobileMinHeight),
                        }
                      : {}),
                    ...(section2.titleMarginBottom !== undefined
                      ? {
                          marginBottom: isMobile
                            ? mvw(40) // Always use mvw(40) for mobile
                            : `${(section2.titleMarginBottom / 1920) * 100}vw`,
                        }
                      : {}),
                  }}
                >
                  {isMobile && section2.titleMobile
                    ? typeof section2.titleMobile === 'string'
                      ? (() => {
                          const titleText = section2.titleMobile as string;
                          const lines = titleText.split('\n');
                          return lines.map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < lines.length - 1 && <br />}
                            </span>
                          ));
                        })()
                      : section2.titleMobile
                    : typeof section2.title === 'string'
                    ? (() => {
                        const titleText = section2.title as string;
                        const lines = titleText.split('\n');
                        return lines.map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < lines.length - 1 && <br />}
                          </span>
                        ));
                      })()
                    : section2.title}
                </h2>

                {/* 모바일: 메인 이미지 */}
                {(section2.imagesMobile?.main || section2.images?.main) && (
                  <motion.div
                    className={styles.section2Image}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: 0.4,
                    }}
                    style={
                      section2.imagesMobileSize
                        ? {
                            height: section2.imagesMobileSize.mainHeight
                              ? mvw(section2.imagesMobileSize.mainHeight)
                              : section2.imagesMobileSize.height
                              ? mvw(section2.imagesMobileSize.height)
                              : undefined,
                            width: section2.imagesMobileSize.mainMaxWidth ? '100vw' : '100%',
                            marginLeft: section2.imagesMobileSize.mainMaxWidth ? `calc(-1 * ${mvw(16)})` : undefined,
                            marginRight: section2.imagesMobileSize.mainMaxWidth ? `calc(-1 * ${mvw(16)})` : undefined,
                          }
                        : undefined
                    }
                  >
                    <img
                      src={section2.imagesMobile?.main || section2.images?.main}
                      alt="이미지"
                      className={styles.section2ImageContent}
                    />
                  </motion.div>
                )}

                <div
                  className={styles.section2Description}
                  style={{
                    ...(isMobile && section2.descriptionMarginBottom !== undefined
                      ? { marginBottom: section2.descriptionMarginBottom }
                      : {}),
                  }}
                >
                  {processDescription(
                    isMobile && section2.descriptionMobile ? section2.descriptionMobile : section2.description,
                    styles.section2Quote
                  )}
                  {section2.quote && (
                    <>
                      <br />
                      <br />
                      <span className={styles.section2Quote}>
                        {(() => {
                          const quoteText = isMobile && section2.quoteMobile ? section2.quoteMobile : section2.quote;

                          if (typeof quoteText === 'string') {
                            return (
                              <>
                                {language === 'KR' && '\u201C'}
                                {quoteText.split('\n').map((line: string, index: number) => (
                                  <span key={index}>
                                    {line}
                                    {index < quoteText.split('\n').length - 1 && <br />}
                                  </span>
                                ))}
                                {language === 'KR' && '\u201D'}
                              </>
                            );
                          }

                          return quoteText;
                        })()}
                      </span>
                    </>
                  )}
                  {section2.conclusion && (
                    <>
                      <br />
                      <br />
                      <span className={styles.section2Conclusion}>
                        {(() => {
                          if (section2.conclusion && typeof section2.conclusion === 'string') {
                            const conclusionText = section2.conclusion;
                            const lines = conclusionText.split('\n');

                            return lines.map((line: string, index: number) => (
                              <span key={index}>
                                {line}
                                {index < lines.length - 1 && <br />}
                              </span>
                            ));
                          }

                          return section2.conclusion;
                        })()}
                      </span>
                    </>
                  )}
                </div>

                {/* 모바일 일러스트 - description 아래에 배치 */}
                {section2.illustrationMobile && (
                  <div
                    className={styles.section2MobileIllustration}
                    style={{
                      ...(section2.illustrationMobileSize
                        ? {
                            aspectRatio:
                              section2.illustrationMobileSize.width && section2.illustrationMobileSize.height
                                ? `${section2.illustrationMobileSize.width} / ${section2.illustrationMobileSize.height}`
                                : undefined,
                            ...(section2.illustrationMobileSize.fullWidth
                              ? {
                                  width: '100vw',
                                }
                              : {
                                  width: '100%',
                                }),
                          }
                        : {
                            width: '100vw',
                            marginLeft: mvw(-16),
                            marginRight: mvw(-16),
                            aspectRatio: '375 / 336',
                          }),
                      ...(section2.illustrationMobileMargin
                        ? {
                            ...(section2.illustrationMobileMargin.top !== undefined
                              ? {
                                  marginTop: mvw(section2.illustrationMobileMargin.top),
                                }
                              : {}),
                            ...(section2.illustrationMobileMargin.right !== undefined &&
                            !section2.illustrationMobileSize?.fullWidth
                              ? {
                                  marginRight: mvw(section2.illustrationMobileMargin.right),
                                }
                              : {}),
                            ...(section2.illustrationMobileMargin.bottom !== undefined
                              ? {
                                  marginBottom: mvw(section2.illustrationMobileMargin.bottom),
                                }
                              : {}),
                            ...(section2.illustrationMobileMargin.left !== undefined &&
                            !section2.illustrationMobileSize?.fullWidth
                              ? {
                                  marginLeft: mvw(section2.illustrationMobileMargin.left),
                                }
                              : {}),
                          }
                        : {}),
                    }}
                  >
                    <img
                      src={section2.illustrationMobile}
                      alt="일러스트"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: section2.illustrationMobileSize?.fullWidth ? 'cover' : 'contain',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* 모바일 이미지들 */}
            {section2.mobileImages?.illustration && Array.isArray(section2.mobileImages.illustration) && (
              <div className={styles.section2MobileImages}>
                {section2.mobileImages.illustration.map((img: string, index: number) => (
                  <div
                    key={index}
                    className={styles.section2MobileImage}
                    style={{
                      ...(section2.mobileImages?.illustrationSize
                        ? {
                            width: `${(section2.mobileImages.illustrationSize.width / 375) * 100}vw`,
                            height: '100%',
                            maxWidth: '100%',
                          }
                        : {}),
                      ...(index === 0
                        ? {
                            marginLeft: mvw(-20),
                            marginRight: mvw(-20),
                            width: '100vw',
                          }
                        : {}),
                    }}
                  >
                    <img
                      src={img}
                      alt="일러스트"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.section2Left} ref={section2ImagesRef}>
              {section2.images?.main && (
                <motion.div
                  className={styles.section2Image}
                  initial={{ opacity: 0, y: 80 }}
                  animate={section2ImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={
                    section2.imagesSize?.main
                      ? {
                          ...getResponsiveSize(section2.imagesSize.main, isDesktopLarge),
                          maxWidth: isDesktopLarge
                            ? `${section2.imagesSize.main.width}px`
                            : vw(section2.imagesSize.main.width),
                        }
                      : undefined
                  }
                >
                  <img src={section2.images.main} alt="이미지" className={styles.section2ImageContent} />
                </motion.div>
              )}
            </div>
            <div className={isCrown ? styles.section2RightCrown : styles.section2Right}>
              {!scarReduction && <div className={styles.section2NumberBg}>{section2.number}</div>}

              {/* Desktop Illustration with optional absolute positioning */}
              {section2.illustration && section2.illustrationSize && (
                <div
                  className={styles.section2DesktopIllustration}
                  style={
                    section2.illustrationPosition
                      ? {
                          position: 'absolute' as const,
                          ...getResponsiveSizeAndPosition(
                            section2.illustrationSize,
                            section2.illustrationPosition,
                            isMobile,
                            isDesktopLarge
                          ),
                        }
                      : getResponsiveSize(section2.illustrationSize, isDesktopLarge)
                  }
                >
                  <img
                    src={section2.illustration}
                    alt="일러스트"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              )}

              <div className={scarReduction ? styles.section2TextScarReduction : styles.section2Text}>
                <h2
                  className={`${styles.section2Title} ${
                    scarReduction && !isMobile ? styles.section2TitleScarReduction : ''
                  }`}
                  style={{
                    ...(isMobile && section2.titleMobileSize
                      ? {
                          width: section2.titleMobileSize?.width
                            ? `${(section2.titleMobileSize.width / 375) * 100}vw`
                            : undefined,
                          height: section2.titleMobileSize?.height
                            ? `${(section2.titleMobileSize.height / 375) * 100}vw`
                            : undefined,
                        }
                      : {}),
                    ...(isMobile && section2.titleMobileMinHeight !== undefined
                      ? {
                          minHeight: mvw(section2.titleMobileMinHeight),
                        }
                      : {}),
                    ...(section2.titleMarginBottom !== undefined
                      ? {
                          marginBottom: isMobile
                            ? mvw(40) // Always use mvw(40) for mobile
                            : `${(section2.titleMarginBottom / 1920) * 100}vw`,
                        }
                      : {}),
                  }}
                >
                  {isMobile && section2.titleMobile
                    ? typeof section2.titleMobile === 'string'
                      ? (() => {
                          const titleText = section2.titleMobile as string;
                          const lines = titleText.split('\n');
                          return lines.map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < lines.length - 1 && <br />}
                            </span>
                          ));
                        })()
                      : section2.titleMobile
                    : typeof section2.title === 'string'
                    ? (() => {
                        const titleText = section2.title as string;
                        const lines = titleText.split('\n');
                        return lines.map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < lines.length - 1 && <br />}
                          </span>
                        ));
                      })()
                    : section2.title}
                </h2>
                {section2.svgElements?.container && (
                  <div
                    className={styles.section2SvgContainer}
                    style={
                      section2.svgElementsSize?.container
                        ? {
                            width: vw(section2.svgElementsSize.container.width),
                            height: vw(section2.svgElementsSize.container.height),
                          }
                        : undefined
                    }
                  >
                    <img
                      src={section2.svgElements.container}
                      alt="일러스트"
                      className={styles.section2SvgImage}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                )}
                <div
                  className={styles.section2Description}
                  style={{
                    ...(isMobile && section2.descriptionMarginBottom !== undefined
                      ? { marginBottom: section2.descriptionMarginBottom }
                      : {}),
                  }}
                >
                  {processDescription(
                    isMobile && section2.descriptionMobile ? section2.descriptionMobile : section2.description,
                    styles.section2Quote
                  )}
                  {section2.quote && (
                    <>
                      <br />
                      <br />
                      <span className={styles.section2Quote}>
                        {(() => {
                          const quoteText = isMobile && section2.quoteMobile ? section2.quoteMobile : section2.quote;

                          if (typeof quoteText === 'string') {
                            return (
                              <>
                                {language === 'KR' && '\u201C'}
                                {quoteText.split('\n').map((line: string, index: number) => (
                                  <span key={index}>
                                    {line}
                                    {index < quoteText.split('\n').length - 1 && <br />}
                                  </span>
                                ))}
                                {language === 'KR' && '\u201D'}
                              </>
                            );
                          }

                          return quoteText;
                        })()}
                      </span>
                    </>
                  )}
                  {section2.conclusion && (
                    <>
                      <br />
                      <br />
                      <span className={styles.section2Conclusion}>
                        {(() => {
                          if (section2.conclusion && typeof section2.conclusion === 'string') {
                            const conclusionText = section2.conclusion;
                            const lines = conclusionText.split('\n');

                            return lines.map((line: string, index: number) => (
                              <span key={index}>
                                {line}
                                {index < lines.length - 1 && <br />}
                              </span>
                            ));
                          }

                          return section2.conclusion;
                        })()}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* SVG absolute - viewport 오른쪽 기준으로 배치 (section2Content 밖에서 렌더링) */}
        {section2.svgElements?.absolute && !isMobile && (
          <div
            className={styles.section2Svg2}
            style={{
              position: 'absolute' as const,
              ...getResponsivePosition(section2.svgElementsPosition?.absolute, isMobile, isDesktopLarge),
              ...getResponsiveSize(section2.svgElementsSize?.absolute, isDesktopLarge),
            }}
          >
            <img
              src={section2.svgElements.absolute}
              alt="일러스트 2"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
