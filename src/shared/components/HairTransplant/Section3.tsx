'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as styles from './HairTransplantLayout.css';
import { getResponsiveSize, getResponsiveSizeAndPosition } from './utils';
import { vw, mvw } from '@/shared/styles/responsive.utils';
import { Section } from './types';

interface Section3Props {
  section3: Section;
  isMobile: boolean;
  isDesktopLarge: boolean;
  scarReduction: boolean;
}

export default function Section3({ section3, isMobile, isDesktopLarge, scarReduction }: Section3Props) {
  const section3ImagesRef = useRef(null);
  const section3ImagesInView = useInView(section3ImagesRef, { once: true });

  return (
    <section
      className={styles.section3}
      style={
        isMobile && section3.mobileHeight
          ? {
              minHeight: mvw(section3.mobileHeight),
            }
          : undefined
      }
    >
      <div className={section3.illustration ? styles.section3ContentWithSvg : styles.section3Content}>
        {isMobile ? (
          <>
            {/* 모바일: 제목 → 이미지 → 설명 순서 */}
            {!scarReduction && section3.number && (
              <div
                className={styles.section3Number}
                style={
                  section3.numberPosition
                    ? {
                        position: 'absolute',
                        ...(() => {
                          const numberPos = section3.numberPosition as any;
                          const position = isMobile ? numberPos.mobile || numberPos : numberPos.desktop || numberPos;

                          return position.top !== undefined
                            ? {
                                top: isMobile
                                  ? mvw(position.top * 0.2)
                                  : isDesktopLarge
                                    ? `${position.top}px`
                                    : vw(position.top),
                              }
                            : {};
                        })(),
                        ...(() => {
                          const numberPos = section3.numberPosition as any;
                          const position = isMobile ? numberPos.mobile || numberPos : numberPos.desktop || numberPos;

                          return position.right !== undefined
                            ? {
                                right: isMobile
                                  ? mvw(position.right * 0.2)
                                  : isDesktopLarge
                                    ? `${position.right}px`
                                    : vw(position.right),
                              }
                            : {};
                        })(),
                      }
                    : undefined
                }
              >
                {section3.number}
              </div>
            )}
            <div className={styles.section3Left}>
              <div className={styles.section3Text}>
                <h2
                  className={styles.section3Title}
                  style={{
                    ...(isMobile && section3.titleMobileSize
                      ? {
                          width: section3.titleMobileSize?.width
                            ? `${(section3.titleMobileSize.width / 375) * 100}vw`
                            : undefined,
                          height: section3.titleMobileSize?.height
                            ? `${(section3.titleMobileSize.height / 375) * 100}vw`
                            : undefined,
                        }
                      : {}),
                    ...(section3.titleMarginBottom !== undefined
                      ? {
                          marginBottom: isMobile
                            ? mvw(40) // Always use mvw(40) for mobile
                            : `${(section3.titleMarginBottom / 1920) * 100}vw`,
                        }
                      : {}),
                  }}
                >
                  {isMobile && section3.titleMobile
                    ? typeof section3.titleMobile === 'string'
                      ? (() => {
                          const titleText = section3.titleMobile as string;
                          const lines = titleText.split('\n');
                          return lines.map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < lines.length - 1 && <br />}
                            </span>
                          ));
                        })()
                      : section3.titleMobile
                    : section3.title}
                </h2>
                {(section3.imagesMobile?.main || section3.images?.main) && (
                  <motion.div
                    className={styles.section3Image}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: 0.8,
                    }}
                  >
                    <img
                      src={section3.imagesMobile?.main || section3.images?.main}
                      alt="이미지"
                      className={styles.section3ImageContent}
                    />
                  </motion.div>
                )}

                <div className={styles.section3Description}>
                  {isMobile && section3.descriptionMobile ? section3.descriptionMobile : section3.description}
                </div>

                {/* 모바일 일러스트레이션 - description 아래로 이동 */}
                {section3.illustrationMobile && (
                  <div
                    className={styles.section3MobileIllustration}
                    style={{
                      width: '100vw',
                      marginLeft: mvw(-16), // 부모의 패딩 상쇄
                      marginRight: mvw(-16), // 부모의 패딩 상쇄
                      height: section3.illustrationMobileSize?.height
                        ? mvw(section3.illustrationMobileSize.height)
                        : undefined,
                      aspectRatio:
                        section3.illustrationMobileSize?.width && section3.illustrationMobileSize?.height
                          ? `${section3.illustrationMobileSize.width} / ${section3.illustrationMobileSize.height}`
                          : '375 / 336',
                    }}
                  >
                    <img
                      src={section3.illustrationMobile}
                      alt="일러스트"
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* illustration이 있으면 absolute이거나 일반 배치 */}
            {section3.illustration && section3.illustrationPosition ? (
              // Absolute positioning일 때는 일반 레이아웃 사용 (왼쪽 텍스트/오른쪽 이미지)
              <>
                <div className={styles.section3Left}>
                  {!scarReduction && (
                    <div
                      className={styles.section3Number}
                      style={
                        section3.numberPosition
                          ? {
                              position: 'absolute',
                              ...(() => {
                                const numberPos = section3.numberPosition as any;
                                const position = isMobile
                                  ? numberPos.mobile || numberPos
                                  : numberPos.desktop || numberPos;

                                return position.top !== undefined
                                  ? {
                                      top: isDesktopLarge
                                        ? `${position.top}px`
                                        : isMobile
                                          ? mvw(position.top * 0.2)
                                          : vw(position.top),
                                    }
                                  : {};
                              })(),
                              ...(() => {
                                const numberPos = section3.numberPosition as any;
                                const position = isMobile
                                  ? numberPos.mobile || numberPos
                                  : numberPos.desktop || numberPos;

                                const result: any = {};

                                if (position.right !== undefined) {
                                  result.right = isDesktopLarge
                                    ? `${position.right}px`
                                    : isMobile
                                      ? mvw(position.right * 0.2)
                                      : vw(position.right);
                                }

                                if (position.bottom !== undefined) {
                                  result.bottom = isDesktopLarge
                                    ? `${position.bottom}px`
                                    : isMobile
                                      ? mvw(position.bottom * 0.2)
                                      : vw(position.bottom);
                                }

                                if (position.left !== undefined) {
                                  result.left = isDesktopLarge
                                    ? `${position.left}px`
                                    : isMobile
                                      ? mvw(position.left * 0.2)
                                      : vw(position.left);
                                }

                                return result;
                              })(),
                            }
                          : undefined
                      }
                    >
                      {section3.number}
                    </div>
                  )}
                  <div className={styles.section3Text}>
                    <h2
                      className={styles.section3Title}
                      style={
                        section3.titleMarginBottom !== undefined
                          ? {
                              marginBottom: isMobile
                                ? mvw(40) // Always use mvw(40) for mobile
                                : `${(section3.titleMarginBottom / 1920) * 100}vw`,
                            }
                          : undefined
                      }
                    >
                      {isMobile && section3.titleMobile
                        ? typeof section3.titleMobile === 'string'
                          ? (() => {
                              const titleText = section3.titleMobile as string;
                              const lines = titleText.split('\n');
                              return lines.map((line, index) => (
                                <span key={index}>
                                  {line}
                                  {index < lines.length - 1 && <br />}
                                </span>
                              ));
                            })()
                          : section3.titleMobile
                        : section3.title}
                    </h2>
                    <div className={styles.section3Description}>
                      {isMobile && section3.descriptionMobile ? section3.descriptionMobile : section3.description}
                    </div>
                  </div>
                </div>
                <div className={styles.section3Right} ref={section3ImagesRef}>
                  {section3.images?.main && (
                    <motion.div
                      className={styles.section3Image}
                      initial={{ opacity: 0, y: 80 }}
                      animate={section3ImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={getResponsiveSize(section3.imagesSize?.main, isDesktopLarge)}
                    >
                      <img src={section3.images.main} alt="이미지" className={styles.section3ImageContent} />
                    </motion.div>
                  )}
                </div>
                {/* Absolute positioned illustration */}
                <div
                  className={styles.section3DesktopIllustration}
                  style={{
                    position: 'absolute' as const,
                    ...getResponsiveSizeAndPosition(
                      section3.illustrationSize,
                      section3.illustrationPosition,
                      isMobile,
                      isDesktopLarge,
                    ),
                    zIndex: 2,
                  }}
                >
                  <img
                    src={section3.illustration}
                    alt="일러스트"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </>
            ) : section3.illustration ? (
              // 일반 illustration 배치 (기존 코드)
              <>
                <div className={styles.section3RightWithSvg} ref={section3ImagesRef}>
                  <div className={styles.section3Text}>
                    {!scarReduction && (
                      <div
                        className={styles.section3Number}
                        style={
                          section3.numberPosition
                            ? {
                                position: 'absolute',
                                // Desktop positioning
                                ...(section3.numberPosition.desktop?.top !== undefined
                                  ? {
                                      top: isDesktopLarge
                                        ? `${section3.numberPosition.desktop.top}px`
                                        : vw(section3.numberPosition.desktop.top),
                                    }
                                  : {}),
                                ...(section3.numberPosition.desktop?.right !== undefined
                                  ? {
                                      right: isDesktopLarge
                                        ? `${section3.numberPosition.desktop.right}px`
                                        : vw(section3.numberPosition.desktop.right),
                                    }
                                  : {}),
                                ...(section3.numberPosition.desktop?.bottom !== undefined
                                  ? {
                                      bottom: isDesktopLarge
                                        ? `${section3.numberPosition.desktop.bottom}px`
                                        : vw(section3.numberPosition.desktop.bottom),
                                    }
                                  : {}),
                                ...(section3.numberPosition.desktop?.left !== undefined
                                  ? {
                                      left: isDesktopLarge
                                        ? `${section3.numberPosition.desktop.left}px`
                                        : vw(section3.numberPosition.desktop.left),
                                    }
                                  : {}),
                              }
                            : undefined
                        }
                      >
                        {section3.number}
                      </div>
                    )}
                    <h2
                      className={styles.section3Title}
                      style={
                        isMobile && section3.titleMobileSize
                          ? {
                              width: section3.titleMobileSize?.width
                                ? `${(section3.titleMobileSize.width / 375) * 100}vw`
                                : undefined,
                              height: section3.titleMobileSize?.height
                                ? `${(section3.titleMobileSize.height / 375) * 100}vw`
                                : undefined,
                            }
                          : undefined
                      }
                    >
                      {isMobile && section3.titleMobile
                        ? typeof section3.titleMobile === 'string'
                          ? (() => {
                              const titleText = section3.titleMobile as string;
                              const lines = titleText.split('\n');
                              return lines.map((line, index) => (
                                <span key={index}>
                                  {line}
                                  {index < lines.length - 1 && <br />}
                                </span>
                              ));
                            })()
                          : section3.titleMobile
                        : section3.title}
                    </h2>
                    <div className={styles.section3CenterIllustrationWithSvg}>
                      <img
                        src={section3.illustration}
                        alt="일러스트"
                        className={styles.section3CenterIllustrationImage}
                        style={
                          section3.illustrationSize
                            ? {
                                width: isDesktopLarge
                                  ? `${section3.illustrationSize.width}px`
                                  : `${section3.illustrationSize.width / 19.2}vw`,
                                height: isDesktopLarge
                                  ? `${section3.illustrationSize.height}px`
                                  : `${section3.illustrationSize.height / 19.2}vw`,
                              }
                            : undefined
                        }
                      />
                      <div>
                        <div className={styles.section3Description}>
                          {isMobile && section3.descriptionMobile ? section3.descriptionMobile : section3.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  {section3.images?.main && (
                    <motion.div
                      className={styles.section3Image}
                      initial={{ opacity: 0, y: 80 }}
                      animate={section3ImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: 0.2,
                      }}
                      style={getResponsiveSize(section3.imagesSize?.main, isDesktopLarge)}
                    >
                      <img src={section3.images.main} alt="이미지" className={styles.section3ImageContent} />
                    </motion.div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* illustration이 없으면 기존 레이아웃 - scarReduction일 때는 순서 바꾸기 */}
                {scarReduction ? (
                  <>
                    {/* scarReduction: 왼쪽 이미지, 오른쪽 텍스트 */}
                    <div className={styles.section3Right} ref={section3ImagesRef}>
                      {section3.images?.main && (
                        <motion.div
                          className={styles.section3Image}
                          initial={{ opacity: 0, y: 80 }}
                          animate={section3ImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                          style={
                            section3.imagesSize?.main
                              ? {
                                  width: isDesktopLarge
                                    ? `${section3.imagesSize.main.width}px`
                                    : vw(section3.imagesSize.main.width),
                                  height: isDesktopLarge
                                    ? `${section3.imagesSize.main.height}px`
                                    : vw(section3.imagesSize.main.height),
                                }
                              : undefined
                          }
                        >
                          <img src={section3.images.main} alt="이미지" className={styles.section3ImageContent} />
                        </motion.div>
                      )}
                    </div>
                    <div className={styles.section3Left}>
                      <div className={styles.section3Text}>
                        <h2 className={styles.section3Title}>
                          {isMobile && section3.titleMobile
                            ? typeof section3.titleMobile === 'string'
                              ? (() => {
                                  const titleText = section3.titleMobile as string;
                                  const lines = titleText.split('\n');
                                  return lines.map((line, index) => (
                                    <span key={index}>
                                      {line}
                                      {index < lines.length - 1 && <br />}
                                    </span>
                                  ));
                                })()
                              : section3.titleMobile
                            : section3.title}
                        </h2>
                        <div className={styles.section3Description}>{section3.description}</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* 기본: 왼쪽 텍스트, 오른쪽 이미지 */}
                    <div className={styles.section3Left}>
                      <div className={styles.section3Text}>
                        {!scarReduction && (
                          <div
                            className={styles.section3Number}
                            style={
                              section3.numberPosition
                                ? {
                                    position: 'absolute',
                                    ...(() => {
                                      const numberPos = section3.numberPosition as any;
                                      const position = isMobile
                                        ? numberPos.mobile || numberPos
                                        : numberPos.desktop || numberPos;

                                      return position.top !== undefined
                                        ? {
                                            top: isMobile
                                              ? mvw(position.top * 0.2)
                                              : isDesktopLarge
                                                ? `${position.top}px`
                                                : vw(position.top),
                                          }
                                        : {};
                                    })(),
                                    ...(() => {
                                      const numberPos = section3.numberPosition as any;
                                      const position = isMobile
                                        ? numberPos.mobile || numberPos
                                        : numberPos.desktop || numberPos;

                                      const result: any = {};

                                      if (position.right !== undefined) {
                                        result.right = isDesktopLarge
                                          ? `${position.right}px`
                                          : isMobile
                                            ? mvw(position.right * 0.2)
                                            : vw(position.right);
                                      }

                                      if (position.bottom !== undefined) {
                                        result.bottom = isDesktopLarge
                                          ? `${position.bottom}px`
                                          : isMobile
                                            ? mvw(position.bottom * 0.2)
                                            : vw(position.bottom);
                                      }

                                      if (position.left !== undefined) {
                                        result.left = isDesktopLarge
                                          ? `${position.left}px`
                                          : isMobile
                                            ? mvw(position.left * 0.2)
                                            : vw(position.left);
                                      }

                                      return result;
                                    })(),
                                  }
                                : undefined
                            }
                          >
                            {section3.number}
                          </div>
                        )}
                        <h2
                          className={styles.section3Title}
                          style={
                            isMobile && section3.titleMobileSize
                              ? {
                                  width: section3.titleMobileSize?.width
                                    ? `${(section3.titleMobileSize.width / 375) * 100}vw`
                                    : undefined,
                                  height: section3.titleMobileSize?.height
                                    ? `${(section3.titleMobileSize.height / 375) * 100}vw`
                                    : undefined,
                                }
                              : undefined
                          }
                        >
                          {isMobile && section3.titleMobile
                            ? typeof section3.titleMobile === 'string'
                              ? (() => {
                                  const titleText = section3.titleMobile as string;
                                  const lines = titleText.split('\n');
                                  return lines.map((line, index) => (
                                    <span key={index}>
                                      {line}
                                      {index < lines.length - 1 && <br />}
                                    </span>
                                  ));
                                })()
                              : section3.titleMobile
                            : section3.title}
                        </h2>
                        <div className={styles.section3Description}>{section3.description}</div>
                      </div>
                    </div>
                    <div className={styles.section3Right} ref={section3ImagesRef}>
                      {section3.images?.main && (
                        <motion.div
                          className={styles.section3Image}
                          initial={{ opacity: 0, y: 80 }}
                          animate={section3ImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                          style={
                            section3.imagesSize?.main
                              ? {
                                  width: isDesktopLarge
                                    ? `${section3.imagesSize.main.width}px`
                                    : vw(section3.imagesSize.main.width),
                                  height: isDesktopLarge
                                    ? `${section3.imagesSize.main.height}px`
                                    : vw(section3.imagesSize.main.height),
                                }
                              : undefined
                          }
                        >
                          <img src={section3.images.main} alt="이미지" className={styles.section3ImageContent} />
                        </motion.div>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
