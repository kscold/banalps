"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import BeforeAfterSlider from "@/shared/ui/BeforeAfterSlider/BeforeAfterSlider";
import SidePreviewSlider from "@/shared/ui/SidePreviewSlider/SidePreviewSlider";
import ArrowButton from "@/shared/ui/ArrowButton/ArrowButton";
import FeaturesSection from "@/shared/components/FeaturesSection/FeaturesSection";
import * as styles from "./HairTransplantLayout.css";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { vw, mvw } from "@/shared/styles/responsive.utils";

// Helper function to process description and apply quote style to <b> tags
const processDescription = (
  description: React.ReactNode,
  quoteClassName: string
): React.ReactNode => {
  if (!description) return null;

  // If description is a string, return as is
  if (typeof description === "string") return description;

  // If it's a React element, check for <b> tags
  if (React.isValidElement(description)) {
    const descElement = description as React.ReactElement<any>;
    const children = React.Children.toArray(descElement.props.children);

    const result: React.ReactNode[] = [];
    let hasQuote = false;

    children.forEach((child, index) => {
      if (React.isValidElement(child) && child.type === "b") {
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

interface Section {
  number: number;
  title: React.ReactNode;
  titleMobile?: React.ReactNode;
  titleMobileSize?: {
    // Optional custom size for mobile title
    width?: number; // mvw units
    height?: number; // mvw units
  };
  titleMarginBottom?: number; // margin-bottom for title (px units)
  mobileHeight?: number; // height for mobile section (mvw units - 375 based)
  numberPosition?: {
    // Custom position for section number (desktop only)
    top?: number; // vw units from top
    right?: number; // vw units from right
    bottom?: number; // vw units from bottom
    left?: number; // vw units from left
  };
  description?: React.ReactNode;
  descriptionMobile?: React.ReactNode;
  descriptionWidth?: number; // Optional width for description (vw units)
  quote?: React.ReactNode;
  quoteMobile?: React.ReactNode;
  illustration?: string;
  illustrationSize?: {
    width: number;
    height: number;
  };
  illustrationPosition?: {
    // Optional absolute positioning for desktop
    top?: number; // vw units from top
    right?: number; // vw units from right
    bottom?: number; // vw units from bottom
    left?: number; // vw units from left
  };
  illustrationMobile?: string; // Mobile-specific illustration for section 1
  illustrationMobileSize?: {
    // Optional custom size for mobile illustration
    width?: number; // mvw units
    height?: number; // mvw units
    fullWidth?: boolean; // If true, takes full viewport width (100vw)
  };
  illustrationMobileMargin?: {
    // Optional margins for mobile illustration
    top?: number; // mvw units
    right?: number; // mvw units
    bottom?: number; // mvw units
    left?: number; // mvw units
  };
  images?: {
    main?: string;
    secondary?: string;
  };
  imagesSize?: {
    // Optional size configuration for desktop images
    main?: {
      width: number; // vw units
      height: number; // vw units
    };
    secondary?: {
      width: number; // vw units
      height: number; // vw units
    };
  };
  imagesPosition?: {
    // Optional absolute positioning for images
    main?: {
      top?: number; // vw units
      right?: number; // vw units
      bottom?: number; // vw units
      left?: number; // vw units
    };
    secondary?: {
      top?: number; // vw units
      right?: number; // vw units
      bottom?: number; // vw units
      left?: number; // vw units
    };
  };
  section1RightSize?: {
    // Optional size for section1Right container
    width?: number; // vw units
    height?: number; // vw units
  };
  imagesMobile?: {
    // Mobile-specific images
    main?: string;
    secondary?: string;
  };
  imagesMobileSize?: {
    // Customizable size for mobile images
    mainMaxWidth?: boolean; // true = 100vw for main image, false/undefined = 100% (default)
    secondaryMaxWidth?: boolean; // true = 100vw for secondary image, false/undefined = 100% (default)
    height?: number; // mvw units (applies to both if specific heights not set)
    mainHeight?: number; // Specific height for main image
    secondaryHeight?: number; // Specific height for secondary image
  };
  mobileIllustration?: string;
  svgElements?: {
    container?: string; // SVG in container between title and description
    absolute?: string; // Absolute positioned SVG
  };
  svgElementsSize?: {
    container?: {
      width: number; // vw units
      height: number; // vw units
    };
    absolute?: {
      width: number; // vw units
      height: number; // vw units
    };
  };
  svgElementsPosition?: {
    absolute?: {
      top?: number; // vw units
      right?: number; // vw units
      bottom?: number; // vw units
      left?: number; // vw units
    };
  };
  mobileImages?: {
    illustration?: string | string[]; // Mobile-specific illustration(s)
    illustrationSize?: {
      // Optional custom size for mobile illustration
      width: number; // mvw units
      height: number; // mvw units
    };
  };
}

interface BeforeAfterData {
  category: string;
  title?: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

interface BeforeAfterButton {
  text: string;
  href?: string;
  onClick?: () => void;
  width?: number | string; // Optional width for desktop version
}

interface FeatureCard {
  icon: string; // SVG image path
  title: React.ReactNode; // Support for line breaks
}

interface SidePreviewData {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
}

interface ButtonCard {
  image: string;
  alt: string;
  title?: string;
  href?: string; // Optional link URL
  onClick?: () => void; // Optional click handler
}

interface HairTransplantLayoutProps {
  heroTitle: React.ReactNode;
  heroTitleMobile?: React.ReactNode; // Mobile-specific hero title
  heroSubtitle?: React.ReactNode;
  heroDotPosition?: {
    absolute?: boolean; // Use absolute positioning for dot
    top?: number; // vw units from top (desktop)
    right?: number; // vw units from right (desktop)
    bottom?: number; // vw units from bottom (desktop)
    left?: number; // vw units from left (desktop)
    // Mobile-specific positioning
    mobileTop?: number; // mvw units from top (mobile)
    mobileRight?: number; // mvw units from right (mobile)
    mobileBottom?: number; // mvw units from bottom (mobile)
    mobileLeft?: number; // mvw units from left (mobile)
  };
  heroBackground?: string;
  heroIllustration?: string;
  heroIllustrationMobile?: string;
  heroIllustrationSize?: {
    width: number; // px units for desktop
    height: number; // px units for desktop
  };
  heroIllustrationPosition?: {
    left?: number; // px units from left for desktop
    right?: number; // px units from right for desktop
  };
  section1: Section;
  section2: Section;
  section3?: Section; // Optional for scarReduction mode
  beforeAfterData: BeforeAfterData;
  beforeAfterButton?: BeforeAfterButton; // Optional button for before/after section
  featuresTitle?: React.ReactNode;
  featuresTitleMobile?: React.ReactNode;
  featureCards?: FeatureCard[];
  sidePreviewData?: SidePreviewData;
  buttonCards?: ButtonCard[]; // Optional button cards section
  scarReduction?: boolean; // Special mode for scar reduction pages
  customMiddleSection?: React.ReactNode; // Custom section between section1 and section2
}

export default function HairTransplantLayout({
  heroTitle,
  heroTitleMobile,
  heroSubtitle,
  heroDotPosition,
  heroBackground,
  heroIllustration = "/hair-transplant/hero-illustration.svg",
  heroIllustrationMobile = "/hair-transplant/mobile/hero-illustration-mobile.svg",
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
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const isDesktopLarge = useMediaQuery("(min-width: 1920px)");

  const section1ImagesRef = useRef(null);
  const section1ImagesInView = useInView(section1ImagesRef, { once: true });
  const section2ImagesRef = useRef(null);
  const section2ImagesInView = useInView(section2ImagesRef, { once: true });
  const section3ImagesRef = useRef(null);
  const section3ImagesInView = useInView(section3ImagesRef, { once: true });

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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    position: heroDotPosition?.absolute
                      ? "relative"
                      : undefined,
                  }}
                >
                  {isMobile && heroTitleMobile ? heroTitleMobile : heroTitle}
                  <div
                    className={
                      heroDotPosition?.absolute
                        ? styles.HairTransplantHeroTitleDotAbsolute
                        : styles.HairTransplantHeroTitleDot
                    }
                    style={
                      heroDotPosition?.absolute
                        ? {
                            // Use mobile values if mobile, fixed px for 1920px+, vw for medium screens
                            ...(isMobile &&
                            heroDotPosition.mobileTop !== undefined
                              ? { top: mvw(heroDotPosition.mobileTop) }
                              : heroDotPosition.top !== undefined
                              ? {
                                  top: isDesktopLarge
                                    ? `${heroDotPosition.top}px`
                                    : vw(heroDotPosition.top),
                                }
                              : {}),
                            ...(isMobile &&
                            heroDotPosition.mobileRight !== undefined
                              ? { right: mvw(heroDotPosition.mobileRight) }
                              : heroDotPosition.right !== undefined
                              ? {
                                  right: isDesktopLarge
                                    ? `${heroDotPosition.right}px`
                                    : vw(heroDotPosition.right),
                                }
                              : {}),
                            ...(isMobile &&
                            heroDotPosition.mobileBottom !== undefined
                              ? { bottom: mvw(heroDotPosition.mobileBottom) }
                              : heroDotPosition.bottom !== undefined
                              ? {
                                  bottom: isDesktopLarge
                                    ? `${heroDotPosition.bottom}px`
                                    : vw(heroDotPosition.bottom),
                                }
                              : {}),
                            ...(isMobile &&
                            heroDotPosition.mobileLeft !== undefined
                              ? { left: mvw(heroDotPosition.mobileLeft) }
                              : heroDotPosition.left !== undefined
                              ? {
                                  left: isDesktopLarge
                                    ? `${heroDotPosition.left}px`
                                    : vw(heroDotPosition.left),
                                }
                              : {}),
                          }
                        : undefined
                    }
                  />
                </span>
              </h1>
            </div>
          </div>
          {/* Hero Illustration - 왼쪽에 붙도록 (데스크탑용) */}
          <div
            className={styles.HairTransplantHeroIllustration}
            style={
              heroIllustrationSize || heroIllustrationPosition
                ? {
                    ...(heroIllustrationSize
                      ? {
                          width: isDesktopLarge
                            ? `${heroIllustrationSize.width}px`
                            : `${(heroIllustrationSize.width / 1920) * 100}vw`,
                          height: isDesktopLarge
                            ? `${heroIllustrationSize.height}px`
                            : `${(heroIllustrationSize.height / 1920) * 100}vw`,
                        }
                      : {}),
                    ...(heroIllustrationPosition
                      ? {
                          ...(heroIllustrationPosition.left !== undefined
                            ? {
                                left: isDesktopLarge
                                  ? `${heroIllustrationPosition.left}px`
                                  : `${
                                      (heroIllustrationPosition.left / 1920) *
                                      100
                                    }vw`,
                              }
                            : {}),
                          ...(heroIllustrationPosition.right !== undefined
                            ? {
                                right: isDesktopLarge
                                  ? `${heroIllustrationPosition.right}px`
                                  : `${
                                      (heroIllustrationPosition.right / 1920) *
                                      100
                                    }vw`,
                              }
                            : {}),
                        }
                      : {}),
                  }
                : undefined
            }
          >
            <img
              src={heroIllustration}
              alt="모발이식 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>
        </div>
        {/* 모바일 일러스트 - Hero Container 밖에 위치 */}
        <img
          src={heroIllustrationMobile}
          alt="모발이식 일러스트"
          className={styles.heroIllustrationImageMobile}
        />
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
                {!scarReduction && (
                  <div className={styles.section1Number}>{section1.number}</div>
                )}
                <div className={styles.section1Text}>
                  <h2
                    className={styles.section1Title}
                    style={{
                      ...(isMobile && section1.titleMobileSize
                        ? {
                            width: section1.titleMobileSize.width
                              ? `${
                                  (section1.titleMobileSize.width / 375) * 100
                                }vw`
                              : undefined,
                            height: section1.titleMobileSize.height
                              ? `${
                                  (section1.titleMobileSize.height / 375) * 100
                                }vw`
                              : undefined,
                          }
                        : {}),
                      ...(section1.titleMarginBottom !== undefined
                        ? {
                            marginBottom: isMobile
                              ? `${(section1.titleMarginBottom / 375) * 100}vw`
                              : `${
                                  (section1.titleMarginBottom / 1920) * 100
                                }vw`,
                          }
                        : {}),
                    }}
                  >
                    {isMobile && section1.titleMobile
                      ? section1.titleMobile
                      : section1.title}
                  </h2>

                  {/* 모바일: 타이틀 아래 메인 이미지 */}
                  {(section1.imagesMobile?.main || section1.images?.main) && (
                    <motion.div
                      className={styles.section1Image1}
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={
                        section1.imagesMobileSize
                          ? {
                              width: section1.imagesMobileSize.mainMaxWidth
                                ? "100vw"
                                : "100%",
                              maxWidth: section1.imagesMobileSize.mainMaxWidth
                                ? "100vw"
                                : "100%",
                              height: section1.imagesMobileSize.mainHeight
                                ? mvw(section1.imagesMobileSize.mainHeight)
                                : section1.imagesMobileSize.height
                                ? mvw(section1.imagesMobileSize.height)
                                : "auto",
                              marginLeft: section1.imagesMobileSize.mainMaxWidth
                                ? mvw(-20)
                                : undefined,
                              marginRight: section1.imagesMobileSize
                                .mainMaxWidth
                                ? mvw(-20)
                                : undefined,
                            }
                          : undefined
                      }
                    >
                      <img
                        src={
                          section1.imagesMobile?.main || section1.images?.main
                        }
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
                            width: isDesktopLarge
                              ? `${section1.descriptionWidth}px`
                              : vw(section1.descriptionWidth),
                            maxWidth: isDesktopLarge
                              ? `${section1.descriptionWidth}px`
                              : vw(section1.descriptionWidth), // maxWidth도 함께 설정
                          }
                        : undefined
                    }
                  >
                    {isMobile && section1.descriptionMobile
                      ? section1.descriptionMobile
                      : section1.description}
                  </div>

                  {/* 모바일 일러스트 - description 아래에 배치 */}
                  {section1.illustrationMobile && (
                    <div
                      className={styles.section1MobileIllustration}
                      style={{
                        ...(section1.illustrationMobileSize
                          ? {
                              width: section1.illustrationMobileSize.fullWidth
                                ? "calc(100vw - var(--scrollbar-width, 0px))"
                                : "100%",
                              aspectRatio:
                                section1.illustrationMobileSize.width &&
                                section1.illustrationMobileSize.height
                                  ? `${section1.illustrationMobileSize.width} / ${section1.illustrationMobileSize.height}`
                                  : undefined,
                              marginLeft: section1.illustrationMobileSize
                                .fullWidth
                                ? mvw(-20)
                                : undefined,
                              marginRight: section1.illustrationMobileSize
                                .fullWidth
                                ? mvw(-20)
                                : undefined,
                            }
                          : {
                              width: "100%",
                              aspectRatio: "324 / 252",
                            }),
                        ...(section1.illustrationMobileMargin
                          ? {
                              ...(section1.illustrationMobileMargin.top !==
                              undefined
                                ? {
                                    marginTop: mvw(
                                      section1.illustrationMobileMargin.top
                                    ),
                                  }
                                : {}),
                              ...(section1.illustrationMobileMargin.right !==
                                undefined &&
                              !section1.illustrationMobileSize?.fullWidth
                                ? {
                                    marginRight: mvw(
                                      section1.illustrationMobileMargin.right
                                    ),
                                  }
                                : {}),
                              ...(section1.illustrationMobileMargin.bottom !==
                              undefined
                                ? {
                                    marginBottom: mvw(
                                      section1.illustrationMobileMargin.bottom
                                    ),
                                  }
                                : {}),
                              ...(section1.illustrationMobileMargin.left !==
                                undefined &&
                              !section1.illustrationMobileSize?.fullWidth
                                ? {
                                    marginLeft: mvw(
                                      section1.illustrationMobileMargin.left
                                    ),
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
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* 모바일 이미지 (기존) */}
                {section1.mobileImages?.illustration && (
                  <div
                    className={styles.section1Image}
                    style={
                      section1.mobileImages?.illustrationSize
                        ? {
                            width: `${
                              (section1.mobileImages.illustrationSize.width /
                                375) *
                              100
                            }vw`,
                            height: `${
                              (section1.mobileImages.illustrationSize.height /
                                375) *
                              100
                            }vw`,
                            maxWidth: "100%",
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
                {(section1.imagesMobile?.secondary ||
                  section1.images?.secondary) && (
                  <motion.div
                    className={styles.section1Image2}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    style={
                      section1.imagesMobileSize
                        ? {
                            width: section1.imagesMobileSize.secondaryMaxWidth
                              ? "100vw"
                              : "100%",
                            maxWidth: section1.imagesMobileSize
                              .secondaryMaxWidth
                              ? "100vw"
                              : "100%",
                            height: section1.imagesMobileSize.secondaryHeight
                              ? mvw(section1.imagesMobileSize.secondaryHeight)
                              : section1.imagesMobileSize.height
                              ? mvw(section1.imagesMobileSize.height)
                              : "auto",
                            marginLeft: section1.imagesMobileSize
                              .secondaryMaxWidth
                              ? mvw(-20)
                              : undefined,
                            marginRight: section1.imagesMobileSize
                              .secondaryMaxWidth
                              ? mvw(-20)
                              : undefined,
                          }
                        : undefined
                    }
                  >
                    <img
                      src={
                        section1.imagesMobile?.secondary ||
                        section1.images?.secondary
                      }
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
                {!scarReduction && (
                  <div className={styles.section1Number}>{section1.number}</div>
                )}
                <div className={styles.section1Text}>
                  <h2
                    className={styles.section1Title}
                    style={{
                      ...(isMobile && section1.titleMobileSize
                        ? {
                            width: section1.titleMobileSize.width
                              ? `${
                                  (section1.titleMobileSize.width / 375) * 100
                                }vw`
                              : undefined,
                            height: section1.titleMobileSize.height
                              ? `${
                                  (section1.titleMobileSize.height / 375) * 100
                                }vw`
                              : undefined,
                          }
                        : {}),
                      ...(section1.titleMarginBottom !== undefined
                        ? {
                            marginBottom: isMobile
                              ? `${(section1.titleMarginBottom / 375) * 100}vw`
                              : `${
                                  (section1.titleMarginBottom / 1920) * 100
                                }vw`,
                          }
                        : {}),
                    }}
                  >
                    {isMobile && section1.titleMobile
                      ? section1.titleMobile
                      : section1.title}
                  </h2>
                  {section1.illustration && (
                    <div className={styles.section1Image}>
                      <img
                        src={section1.illustration}
                        alt="일러스트"
                        className={styles.section1Illustration}
                        style={
                          section1.illustrationSize
                            ? {
                                width: isDesktopLarge
                                  ? `${section1.illustrationSize.width}px`
                                  : `${
                                      section1.illustrationSize.width / 19.2
                                    }vw`,
                                height: isDesktopLarge
                                  ? `${section1.illustrationSize.height}px`
                                  : `${
                                      section1.illustrationSize.height / 19.2
                                    }vw`,
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
                            width: isDesktopLarge
                              ? `${section1.descriptionWidth}px`
                              : vw(section1.descriptionWidth),
                            maxWidth: isDesktopLarge
                              ? `${section1.descriptionWidth}px`
                              : vw(section1.descriptionWidth), // maxWidth도 함께 설정
                          }
                        : undefined
                    }
                  >
                    {isMobile && section1.descriptionMobile
                      ? section1.descriptionMobile
                      : section1.description}
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
                {(isMobile && section1.imagesMobile?.main
                  ? section1.imagesMobile.main
                  : section1.images?.main) && (
                  <motion.div
                    className={styles.section1Image1}
                    initial={{ opacity: 0, y: 80 }}
                    animate={
                      section1ImagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={
                      isMobile && section1.imagesMobileSize
                        ? {
                            width: section1.imagesMobileSize.mainMaxWidth
                              ? "100vw"
                              : "100%",
                            maxWidth: section1.imagesMobileSize.mainMaxWidth
                              ? "100vw"
                              : "100%",
                            height: section1.imagesMobileSize.mainHeight
                              ? mvw(section1.imagesMobileSize.mainHeight)
                              : section1.imagesMobileSize.height
                              ? mvw(section1.imagesMobileSize.height)
                              : "auto",
                            marginLeft: section1.imagesMobileSize.mainMaxWidth
                              ? mvw(-20)
                              : undefined,
                            marginRight: section1.imagesMobileSize.mainMaxWidth
                              ? mvw(-20)
                              : undefined,
                          }
                        : {
                            ...(section1.imagesSize?.main
                              ? {
                                  width: isDesktopLarge
                                    ? `${section1.imagesSize.main.width}px`
                                    : vw(section1.imagesSize.main.width),
                                  height: isDesktopLarge
                                    ? `${section1.imagesSize.main.height}px`
                                    : vw(section1.imagesSize.main.height),
                                  maxWidth: isDesktopLarge
                                    ? `${section1.imagesSize.main.width}px`
                                    : vw(section1.imagesSize.main.width),
                                }
                              : {}),
                            ...(section1.imagesPosition?.main
                              ? {
                                  position: "absolute" as const,
                                  ...(section1.imagesPosition.main.top !==
                                  undefined
                                    ? {
                                        top: isDesktopLarge
                                          ? `${section1.imagesPosition.main.top}px`
                                          : vw(
                                              section1.imagesPosition.main.top
                                            ),
                                      }
                                    : {}),
                                  ...(section1.imagesPosition.main.right !==
                                  undefined
                                    ? {
                                        right: isDesktopLarge
                                          ? `${section1.imagesPosition.main.right}px`
                                          : vw(
                                              section1.imagesPosition.main.right
                                            ),
                                      }
                                    : {}),
                                  ...(section1.imagesPosition.main.bottom !==
                                  undefined
                                    ? {
                                        bottom: isDesktopLarge
                                          ? `${section1.imagesPosition.main.bottom}px`
                                          : vw(
                                              section1.imagesPosition.main
                                                .bottom
                                            ),
                                      }
                                    : {}),
                                  ...(section1.imagesPosition.main.left !==
                                  undefined
                                    ? {
                                        left: isDesktopLarge
                                          ? `${section1.imagesPosition.main.left}px`
                                          : vw(
                                              section1.imagesPosition.main.left
                                            ),
                                      }
                                    : {}),
                                }
                              : {}),
                          }
                    }
                  >
                    <img
                      src={
                        isMobile && section1.imagesMobile?.main
                          ? section1.imagesMobile.main
                          : section1.images?.main
                      }
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
                    animate={
                      section1ImagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    style={
                      isMobile && section1.imagesMobileSize
                        ? {
                            width: section1.imagesMobileSize.secondaryMaxWidth
                              ? "100vw"
                              : "100%",
                            maxWidth: section1.imagesMobileSize
                              .secondaryMaxWidth
                              ? "100vw"
                              : "100%",
                            height: section1.imagesMobileSize.secondaryHeight
                              ? mvw(section1.imagesMobileSize.secondaryHeight)
                              : section1.imagesMobileSize.height
                              ? mvw(section1.imagesMobileSize.height)
                              : "auto",
                            marginLeft: section1.imagesMobileSize
                              .secondaryMaxWidth
                              ? mvw(-20)
                              : undefined,
                            marginRight: section1.imagesMobileSize
                              .secondaryMaxWidth
                              ? mvw(-20)
                              : undefined,
                          }
                        : {
                            ...(section1.imagesSize?.secondary
                              ? {
                                  width: isDesktopLarge
                                    ? `${section1.imagesSize.secondary.width}px`
                                    : vw(section1.imagesSize.secondary.width),
                                  height: isDesktopLarge
                                    ? `${section1.imagesSize.secondary.height}px`
                                    : vw(section1.imagesSize.secondary.height),
                                  maxWidth: isDesktopLarge
                                    ? `${section1.imagesSize.secondary.width}px`
                                    : vw(section1.imagesSize.secondary.width),
                                }
                              : {}),
                            ...(section1.imagesPosition?.secondary
                              ? {
                                  position: "absolute" as const,
                                  ...(section1.imagesPosition.secondary.top !==
                                  undefined
                                    ? {
                                        top: isDesktopLarge
                                          ? `${section1.imagesPosition.secondary.top}px`
                                          : vw(
                                              section1.imagesPosition.secondary
                                                .top
                                            ),
                                      }
                                    : {}),
                                  ...(section1.imagesPosition.secondary
                                    .right !== undefined
                                    ? {
                                        right: isDesktopLarge
                                          ? `${section1.imagesPosition.secondary.right}px`
                                          : vw(
                                              section1.imagesPosition.secondary
                                                .right
                                            ),
                                      }
                                    : {}),
                                  ...(section1.imagesPosition.secondary
                                    .bottom !== undefined
                                    ? {
                                        bottom: isDesktopLarge
                                          ? `${section1.imagesPosition.secondary.bottom}px`
                                          : vw(
                                              section1.imagesPosition.secondary
                                                .bottom
                                            ),
                                      }
                                    : {}),
                                  ...(section1.imagesPosition.secondary.left !==
                                  undefined
                                    ? {
                                        left: isDesktopLarge
                                          ? `${section1.imagesPosition.secondary.left}px`
                                          : vw(
                                              section1.imagesPosition.secondary
                                                .left
                                            ),
                                      }
                                    : {}),
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
                      className={styles.section1ImageContent}
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
      <section
        className={styles.section2}
        style={
          isMobile && section2.mobileHeight
            ? {
                minHeight: mvw(section2.mobileHeight),
              }
            : undefined
        }
      >
        <div className={styles.section2Content}>
          {isMobile ? (
            <>
              {/* 모바일: 숫자 → 제목 → 이미지 → 텍스트 순서 */}
              {!scarReduction && (
                <div className={styles.section2NumberBg}>{section2.number}</div>
              )}
              <div className={styles.section2Left}>
                <div className={styles.section2Text}>
                  <h2
                    className={styles.section2Title}
                    style={{
                      ...(isMobile && section2.titleMobileSize
                        ? {
                            width: section2.titleMobileSize?.width
                              ? `${
                                  (section2.titleMobileSize.width / 375) * 100
                                }vw`
                              : undefined,
                            height: section2.titleMobileSize?.height
                              ? `${
                                  (section2.titleMobileSize.height / 375) * 100
                                }vw`
                              : undefined,
                          }
                        : {}),
                      ...(section2.titleMarginBottom !== undefined
                        ? {
                            marginBottom: isMobile
                              ? `${(section2.titleMarginBottom / 375) * 100}vw`
                              : `${
                                  (section2.titleMarginBottom / 1920) * 100
                                }vw`,
                          }
                        : {}),
                    }}
                  >
                    {isMobile && section2.titleMobile
                      ? section2.titleMobile
                      : section2.title}
                  </h2>

                  {/* 모바일: 메인 이미지 */}
                  {section2.images?.main && (
                    <div className={styles.section2Image}>
                      <img
                        src={section2.images.main}
                        alt="이미지"
                        className={styles.section2ImageContent}
                      />
                    </div>
                  )}

                  <div className={styles.section2Description}>
                    {processDescription(
                      isMobile && section2.descriptionMobile
                        ? section2.descriptionMobile
                        : section2.description,
                      styles.section2Quote
                    )}
                    {section2.quote && (
                      <>
                        <br />
                        <br />
                        <span className={styles.section2Quote}>
                          {isMobile && section2.quoteMobile
                            ? section2.quoteMobile
                            : section2.quote}
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
                              width: section2.illustrationMobileSize.fullWidth
                                ? "calc(100vw - var(--scrollbar-width, 0px))"
                                : "100%",
                              aspectRatio:
                                section2.illustrationMobileSize.width &&
                                section2.illustrationMobileSize.height
                                  ? `${section2.illustrationMobileSize.width} / ${section2.illustrationMobileSize.height}`
                                  : undefined,
                              marginLeft: section2.illustrationMobileSize
                                .fullWidth
                                ? mvw(-20)
                                : undefined,
                              marginRight: section2.illustrationMobileSize
                                .fullWidth
                                ? mvw(-20)
                                : undefined,
                            }
                          : {
                              width: "100vw",
                              aspectRatio: "375 / 336",
                            }),
                        ...(section2.illustrationMobileMargin
                          ? {
                              ...(section2.illustrationMobileMargin.top !==
                              undefined
                                ? {
                                    marginTop: mvw(
                                      section2.illustrationMobileMargin.top
                                    ),
                                  }
                                : {}),
                              ...(section2.illustrationMobileMargin.right !==
                                undefined &&
                              !section2.illustrationMobileSize?.fullWidth
                                ? {
                                    marginRight: mvw(
                                      section2.illustrationMobileMargin.right
                                    ),
                                  }
                                : {}),
                              ...(section2.illustrationMobileMargin.bottom !==
                              undefined
                                ? {
                                    marginBottom: mvw(
                                      section2.illustrationMobileMargin.bottom
                                    ),
                                  }
                                : {}),
                              ...(section2.illustrationMobileMargin.left !==
                                undefined &&
                              !section2.illustrationMobileSize?.fullWidth
                                ? {
                                    marginLeft: mvw(
                                      section2.illustrationMobileMargin.left
                                    ),
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
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* 모바일 이미지들 */}
              {section2.mobileImages?.illustration &&
                Array.isArray(section2.mobileImages.illustration) && (
                  <div className={styles.section2MobileImages}>
                    {section2.mobileImages.illustration.map(
                      (img: string, index: number) => (
                        <div
                          key={index}
                          className={styles.section2MobileImage}
                          style={{
                            ...(section2.mobileImages?.illustrationSize
                              ? {
                                  width: `${
                                    (section2.mobileImages.illustrationSize
                                      .width /
                                      375) *
                                    100
                                  }vw`,
                                  height: "100%",
                                  maxWidth: "100%",
                                }
                              : {}),
                            ...(index === 0
                              ? {
                                  marginLeft: mvw(-20),
                                  marginRight: mvw(-20),
                                  width: "100vw",
                                }
                              : {}),
                          }}
                        >
                          <img
                            src={img}
                            alt="일러스트"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      )
                    )}
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
                    animate={
                      section2ImagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={
                      section2.imagesSize?.main
                        ? {
                            width: isDesktopLarge
                              ? `${section2.imagesSize.main.width}px`
                              : vw(section2.imagesSize.main.width),
                            height: isDesktopLarge
                              ? `${section2.imagesSize.main.height}px`
                              : vw(section2.imagesSize.main.height),
                            maxWidth: isDesktopLarge
                              ? `${section2.imagesSize.main.width}px`
                              : vw(section2.imagesSize.main.width),
                          }
                        : undefined
                    }
                  >
                    <img
                      src={section2.images.main}
                      alt="이미지"
                      className={styles.section2ImageContent}
                    />
                  </motion.div>
                )}
              </div>
              <div className={styles.section2Right}>
                {!scarReduction && (
                  <div className={styles.section2NumberBg}>
                    {section2.number}
                  </div>
                )}

                {/* Desktop Illustration with optional absolute positioning */}
                {section2.illustration && section2.illustrationSize && (
                  <div
                    className={styles.section2DesktopIllustration}
                    style={
                      section2.illustrationPosition
                        ? {
                            position: "absolute" as const,
                            top: section2.illustrationPosition.top
                              ? isDesktopLarge
                                ? `${section2.illustrationPosition.top}px`
                                : vw(section2.illustrationPosition.top)
                              : undefined,
                            right: section2.illustrationPosition.right
                              ? isDesktopLarge
                                ? `${section2.illustrationPosition.right}px`
                                : vw(section2.illustrationPosition.right)
                              : undefined,
                            bottom: section2.illustrationPosition.bottom
                              ? isDesktopLarge
                                ? `${section2.illustrationPosition.bottom}px`
                                : vw(section2.illustrationPosition.bottom)
                              : undefined,
                            left: section2.illustrationPosition.left
                              ? isDesktopLarge
                                ? `${section2.illustrationPosition.left}px`
                                : vw(section2.illustrationPosition.left)
                              : undefined,
                            width: isDesktopLarge
                              ? `${section2.illustrationSize.width}px`
                              : vw(section2.illustrationSize.width),
                            height: isDesktopLarge
                              ? `${section2.illustrationSize.height}px`
                              : vw(section2.illustrationSize.height),
                          }
                        : {
                            width: isDesktopLarge
                              ? `${section2.illustrationSize.width}px`
                              : vw(section2.illustrationSize.width),
                            height: isDesktopLarge
                              ? `${section2.illustrationSize.height}px`
                              : vw(section2.illustrationSize.height),
                          }
                    }
                  >
                    <img
                      src={section2.illustration}
                      alt="일러스트"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}

                <div className={styles.section2Text}>
                  <h2
                    className={styles.section2Title}
                    style={{
                      ...(isMobile && section2.titleMobileSize
                        ? {
                            width: section2.titleMobileSize?.width
                              ? `${
                                  (section2.titleMobileSize.width / 375) * 100
                                }vw`
                              : undefined,
                            height: section2.titleMobileSize?.height
                              ? `${
                                  (section2.titleMobileSize.height / 375) * 100
                                }vw`
                              : undefined,
                          }
                        : {}),
                      ...(section2.titleMarginBottom !== undefined
                        ? {
                            marginBottom: isMobile
                              ? `${(section2.titleMarginBottom / 375) * 100}vw`
                              : `${
                                  (section2.titleMarginBottom / 1920) * 100
                                }vw`,
                          }
                        : {}),
                    }}
                  >
                    {isMobile && section2.titleMobile
                      ? section2.titleMobile
                      : section2.title}
                  </h2>
                  {section2.svgElements?.container && (
                    <div
                      className={styles.section2SvgContainer}
                      style={
                        section2.svgElementsSize?.container
                          ? {
                              width: vw(
                                section2.svgElementsSize.container.width
                              ),
                              height: vw(
                                section2.svgElementsSize.container.height
                              ),
                            }
                          : undefined
                      }
                    >
                      <img
                        src={section2.svgElements.container}
                        alt="일러스트"
                        className={styles.section2SvgImage}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}
                  <div className={styles.section2Description}>
                    {processDescription(
                      isMobile && section2.descriptionMobile
                        ? section2.descriptionMobile
                        : section2.description,
                      styles.section2Quote
                    )}
                    {section2.quote && (
                      <>
                        <br />
                        <br />
                        <span className={styles.section2Quote}>
                          {isMobile && section2.quoteMobile
                            ? section2.quoteMobile
                            : section2.quote}
                        </span>
                      </>
                    )}
                  </div>
                  {section2.svgElements?.absolute && (
                    <div
                      className={styles.section2Svg2}
                      style={{
                        ...(section2.svgElementsPosition?.absolute
                          ? {
                              position: "absolute" as const,
                              top: section2.svgElementsPosition.absolute.top
                                ? isDesktopLarge
                                  ? `${section2.svgElementsPosition.absolute.top}px`
                                  : vw(
                                      section2.svgElementsPosition.absolute.top
                                    )
                                : undefined,
                              right: section2.svgElementsPosition.absolute.right
                                ? isDesktopLarge
                                  ? `${section2.svgElementsPosition.absolute.right}px`
                                  : vw(
                                      section2.svgElementsPosition.absolute
                                        .right
                                    )
                                : undefined,
                              bottom: section2.svgElementsPosition.absolute
                                .bottom
                                ? isDesktopLarge
                                  ? `${section2.svgElementsPosition.absolute.bottom}px`
                                  : vw(
                                      section2.svgElementsPosition.absolute
                                        .bottom
                                    )
                                : undefined,
                              left: section2.svgElementsPosition.absolute.left
                                ? isDesktopLarge
                                  ? `${section2.svgElementsPosition.absolute.left}px`
                                  : vw(
                                      section2.svgElementsPosition.absolute.left
                                    )
                                : undefined,
                            }
                          : {}),
                        ...(section2.svgElementsSize?.absolute
                          ? {
                              width: isMobile
                                ? "100vw"
                                : isDesktopLarge
                                ? `${section2.svgElementsSize.absolute.width}px`
                                : vw(section2.svgElementsSize.absolute.width),
                              height: isMobile
                                ? "auto"
                                : isDesktopLarge
                                ? `${section2.svgElementsSize.absolute.height}px`
                                : vw(section2.svgElementsSize.absolute.height),
                            }
                          : isMobile
                          ? { width: "100vw", height: "auto" }
                          : {}),
                        ...(isMobile
                          ? {
                              marginLeft: mvw(-20), // 부모의 패딩 상쇄
                              marginRight: mvw(-20), // 부모의 패딩 상쇄
                            }
                          : {}),
                      }}
                    >
                      <img
                        src={section2.svgElements.absolute}
                        alt="일러스트 2"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Section 3 - Only render if not scarReduction and section3 exists */}
      {!scarReduction && section3 && (
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
          <div
            className={
              section3.illustration
                ? styles.section3ContentWithSvg
                : styles.section3Content
            }
          >
            {isMobile ? (
              <>
                {/* 모바일: 제목 → 이미지 → 설명 순서 */}
                {!scarReduction && (
                  <div
                    className={styles.section3Number}
                    style={
                      section3.numberPosition && isMobile
                        ? {
                            position: "absolute",
                            ...(section3.numberPosition.top !== undefined
                              ? { top: mvw(section3.numberPosition.top) }
                              : {}),
                            ...(section3.numberPosition.right !== undefined
                              ? { right: mvw(section3.numberPosition.right) }
                              : {}),
                            ...(section3.numberPosition.bottom !== undefined
                              ? { bottom: mvw(section3.numberPosition.bottom) }
                              : {}),
                            ...(section3.numberPosition.left !== undefined
                              ? { left: mvw(section3.numberPosition.left) }
                              : {}),
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
                                ? `${
                                    (section3.titleMobileSize.width / 375) * 100
                                  }vw`
                                : undefined,
                              height: section3.titleMobileSize?.height
                                ? `${
                                    (section3.titleMobileSize.height / 375) *
                                    100
                                  }vw`
                                : undefined,
                            }
                          : {}),
                        ...(section3.titleMarginBottom !== undefined
                          ? {
                              marginBottom: isMobile
                                ? `${
                                    (section3.titleMarginBottom / 375) * 100
                                  }vw`
                                : `${
                                    (section3.titleMarginBottom / 1920) * 100
                                  }vw`,
                            }
                          : {}),
                      }}
                    >
                      {isMobile && section3.titleMobile
                        ? section3.titleMobile
                        : section3.title}
                    </h2>
                    {section3.images?.main && (
                      <motion.div
                        className={styles.section3Image}
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <img
                          src={section3.images.main}
                          alt="이미지"
                          className={styles.section3ImageContent}
                        />
                      </motion.div>
                    )}

                    <div className={styles.section3Description}>
                      {isMobile && section3.descriptionMobile
                        ? section3.descriptionMobile
                        : section3.description}
                    </div>

                    {/* 모바일 일러스트레이션 - description 아래로 이동 */}
                    {section3.illustrationMobile && (
                      <div
                        className={styles.section3MobileIllustration}
                        style={{
                          width: "100vw",
                          marginLeft: mvw(-20), // 부모의 패딩 상쇄
                          marginRight: mvw(-20), // 부모의 패딩 상쇄
                          aspectRatio:
                            section3.illustrationMobileSize?.width &&
                            section3.illustrationMobileSize?.height
                              ? `${section3.illustrationMobileSize.width} / ${section3.illustrationMobileSize.height}`
                              : "375 / 336",
                        }}
                      >
                        <img
                          src={section3.illustrationMobile}
                          alt="일러스트"
                          style={{
                            objectFit: "contain",
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
                                  position: "absolute",
                                  ...(section3.numberPosition.top !== undefined
                                    ? {
                                        top: isDesktopLarge
                                          ? `${section3.numberPosition.top}px`
                                          : vw(section3.numberPosition.top),
                                      }
                                    : {}),
                                  ...(section3.numberPosition.right !==
                                  undefined
                                    ? {
                                        right: isDesktopLarge
                                          ? `${section3.numberPosition.right}px`
                                          : vw(section3.numberPosition.right),
                                      }
                                    : {}),
                                  ...(section3.numberPosition.bottom !==
                                  undefined
                                    ? {
                                        bottom: isDesktopLarge
                                          ? `${section3.numberPosition.bottom}px`
                                          : vw(section3.numberPosition.bottom),
                                      }
                                    : {}),
                                  ...(section3.numberPosition.left !== undefined
                                    ? {
                                        left: isDesktopLarge
                                          ? `${section3.numberPosition.left}px`
                                          : vw(section3.numberPosition.left),
                                      }
                                    : {}),
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
                                  marginBottom: `${
                                    (section3.titleMarginBottom / 1920) * 100
                                  }vw`,
                                }
                              : undefined
                          }
                        >
                          {isMobile && section3.titleMobile
                            ? section3.titleMobile
                            : section3.title}
                        </h2>
                        <div className={styles.section3Description}>
                          {isMobile && section3.descriptionMobile
                            ? section3.descriptionMobile
                            : section3.description}
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.section3Right}
                      ref={section3ImagesRef}
                    >
                      {section3.images?.main && (
                        <motion.div
                          className={styles.section3Image}
                          initial={{ opacity: 0, y: 80 }}
                          animate={
                            section3ImagesInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 80 }
                          }
                          transition={{ duration: 0.5, ease: "easeOut" }}
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
                          <img
                            src={section3.images.main}
                            alt="이미지"
                            className={styles.section3ImageContent}
                          />
                        </motion.div>
                      )}
                    </div>
                    {/* Absolute positioned illustration */}
                    <div
                      className={styles.section3DesktopIllustration}
                      style={{
                        position: "absolute" as const,
                        top: section3.illustrationPosition.top
                          ? isDesktopLarge
                            ? `${section3.illustrationPosition.top}px`
                            : vw(section3.illustrationPosition.top)
                          : undefined,
                        right: section3.illustrationPosition.right
                          ? isDesktopLarge
                            ? `${section3.illustrationPosition.right}px`
                            : vw(section3.illustrationPosition.right)
                          : undefined,
                        bottom: section3.illustrationPosition.bottom
                          ? isDesktopLarge
                            ? `${section3.illustrationPosition.bottom}px`
                            : vw(section3.illustrationPosition.bottom)
                          : undefined,
                        left: section3.illustrationPosition.left
                          ? isDesktopLarge
                            ? `${section3.illustrationPosition.left}px`
                            : vw(section3.illustrationPosition.left)
                          : undefined,
                        width: section3.illustrationSize
                          ? isDesktopLarge
                            ? `${section3.illustrationSize.width}px`
                            : vw(section3.illustrationSize.width)
                          : "auto",
                        height: section3.illustrationSize
                          ? isDesktopLarge
                            ? `${section3.illustrationSize.height}px`
                            : vw(section3.illustrationSize.height)
                          : "auto",
                        zIndex: 2,
                      }}
                    >
                      <img
                        src={section3.illustration}
                        alt="일러스트"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </>
                ) : section3.illustration ? (
                  // 일반 illustration 배치 (기존 코드)
                  <>
                    <div
                      className={styles.section3RightWithSvg}
                      ref={section3ImagesRef}
                    >
                      <div className={styles.section3Text}>
                        {!scarReduction && (
                          <div
                            className={styles.section3Number}
                            style={
                              section3.numberPosition
                                ? {
                                    position: "absolute",
                                    ...(section3.numberPosition.top !==
                                    undefined
                                      ? {
                                          top: isDesktopLarge
                                            ? `${section3.numberPosition.top}px`
                                            : vw(section3.numberPosition.top),
                                        }
                                      : {}),
                                    ...(section3.numberPosition.right !==
                                    undefined
                                      ? {
                                          right: isDesktopLarge
                                            ? `${section3.numberPosition.right}px`
                                            : vw(section3.numberPosition.right),
                                        }
                                      : {}),
                                    ...(section3.numberPosition.bottom !==
                                    undefined
                                      ? {
                                          bottom: isDesktopLarge
                                            ? `${section3.numberPosition.bottom}px`
                                            : vw(
                                                section3.numberPosition.bottom
                                              ),
                                        }
                                      : {}),
                                    ...(section3.numberPosition.left !==
                                    undefined
                                      ? {
                                          left: isDesktopLarge
                                            ? `${section3.numberPosition.left}px`
                                            : vw(section3.numberPosition.left),
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
                                    ? `${
                                        (section3.titleMobileSize.width / 375) *
                                        100
                                      }vw`
                                    : undefined,
                                  height: section3.titleMobileSize?.height
                                    ? `${
                                        (section3.titleMobileSize.height /
                                          375) *
                                        100
                                      }vw`
                                    : undefined,
                                }
                              : undefined
                          }
                        >
                          {isMobile && section3.titleMobile
                            ? section3.titleMobile
                            : section3.title}
                        </h2>
                        <div
                          className={styles.section3CenterIllustrationWithSvg}
                        >
                          <img
                            src={section3.illustration}
                            alt="일러스트"
                            className={styles.section3CenterIllustrationImage}
                            style={
                              section3.illustrationSize
                                ? {
                                    width: isDesktopLarge
                                      ? `${section3.illustrationSize.width}px`
                                      : `${
                                          section3.illustrationSize.width / 19.2
                                        }vw`,
                                    height: isDesktopLarge
                                      ? `${section3.illustrationSize.height}px`
                                      : `${
                                          section3.illustrationSize.height /
                                          19.2
                                        }vw`,
                                  }
                                : undefined
                            }
                          />
                          <div>
                            <div className={styles.section3Description}>
                              {isMobile && section3.descriptionMobile
                                ? section3.descriptionMobile
                                : section3.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      {section3.images?.main && (
                        <motion.div
                          className={styles.section3Image}
                          initial={{ opacity: 0, y: 80 }}
                          animate={
                            section3ImagesInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 80 }
                          }
                          transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.2,
                          }}
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
                          <img
                            src={section3.images.main}
                            alt="이미지"
                            className={styles.section3ImageContent}
                          />
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
                        <div
                          className={styles.section3Right}
                          ref={section3ImagesRef}
                        >
                          {section3.images?.main && (
                            <motion.div
                              className={styles.section3Image}
                              initial={{ opacity: 0, y: 80 }}
                              animate={
                                section3ImagesInView
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 80 }
                              }
                              transition={{ duration: 0.5, ease: "easeOut" }}
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
                              <img
                                src={section3.images.main}
                                alt="이미지"
                                className={styles.section3ImageContent}
                              />
                            </motion.div>
                          )}
                        </div>
                        <div className={styles.section3Left}>
                          <div className={styles.section3Text}>
                            <h2 className={styles.section3Title}>
                              {isMobile && section3.titleMobile
                                ? section3.titleMobile
                                : section3.title}
                            </h2>
                            <div className={styles.section3Description}>
                              {section3.description}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* 기본: 왼쪽 텍스트, 오른쪽 이미지 */}
                        <div className={styles.section3Left}>
                          <div className={styles.section3Text}>
                            {!scarReduction && (
                              <div className={styles.section3Number}>
                                {section3.number}
                              </div>
                            )}
                            <h2
                              className={styles.section3Title}
                              style={
                                isMobile && section3.titleMobileSize
                                  ? {
                                      width: section3.titleMobileSize?.width
                                        ? `${
                                            (section3.titleMobileSize.width /
                                              375) *
                                            100
                                          }vw`
                                        : undefined,
                                      height: section3.titleMobileSize?.height
                                        ? `${
                                            (section3.titleMobileSize.height /
                                              375) *
                                            100
                                          }vw`
                                        : undefined,
                                    }
                                  : undefined
                              }
                            >
                              {isMobile && section3.titleMobile
                                ? section3.titleMobile
                                : section3.title}
                            </h2>
                            <div className={styles.section3Description}>
                              {section3.description}
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.section3Right}
                          ref={section3ImagesRef}
                        >
                          {section3.images?.main && (
                            <motion.div
                              className={styles.section3Image}
                              initial={{ opacity: 0, y: 80 }}
                              animate={
                                section3ImagesInView
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 80 }
                              }
                              transition={{ duration: 0.5, ease: "easeOut" }}
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
                              <img
                                src={section3.images.main}
                                alt="이미지"
                                className={styles.section3ImageContent}
                              />
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
      )}

      {/* Before & After Section */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContent}>
          <div className={styles.beforeAfterHeader}>
            <div className={styles.beforeAfterCategory}>
              {beforeAfterData.category}
            </div>
            <div className={styles.beforeAfterTitle}>
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
            />
          </div>
          {beforeAfterButton && (
            <div className={styles.beforeAfterActions}>
              {beforeAfterButton.href ? (
                <Link
                  href={beforeAfterButton.href}
                  className={styles.beforeAfterLink}
                >
                  {isMobile ? (
                    <ArrowButton
                      variant="primary"
                      color="blue"
                      size="medium"
                      width="100%"
                      textAlign="center"
                      fontSizeMobile={16}
                    >
                      {beforeAfterButton.text}
                    </ArrowButton>
                  ) : (
                    <ArrowButton
                      variant="primary"
                      color="blue"
                      size="medium"
                      height={66}
                      paddingTop={12}
                      paddingBottom={10}
                      paddingRight={10}
                      paddingLeft={28}
                      fontSize={24}
                      iconSize={44}
                      width={beforeAfterButton.width || 224}
                      textAlign="left"
                    >
                      {beforeAfterButton.text}
                    </ArrowButton>
                  )}
                </Link>
              ) : beforeAfterButton.onClick ? (
                <ArrowButton
                  variant="primary"
                  color="blue"
                  size="medium"
                  onClick={beforeAfterButton.onClick}
                  width={isMobile ? "100%" : beforeAfterButton.width || 224}
                  textAlign="center"
                >
                  {beforeAfterButton.text}
                </ArrowButton>
              ) : (
                <ArrowButton
                  variant="primary"
                  color="blue"
                  size="medium"
                  width={isMobile ? "100%" : beforeAfterButton.width || 224}
                  textAlign="center"
                >
                  {beforeAfterButton.text}
                </ArrowButton>
              )}
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

      {/* Side Preview Section (Optional) */}
      {sidePreviewData && (
        <section className={styles.sidePreviewSection}>
          <div className={styles.sidePreviewContent}>
            <SidePreviewSlider
              beforeImage={sidePreviewData.beforeImage}
              afterImage={sidePreviewData.afterImage}
              beforeAlt={sidePreviewData.beforeAlt}
              afterAlt={sidePreviewData.afterAlt}
              className={styles.sidePreviewSlider}
            />
          </div>
        </section>
      )}
    </>
  );
}
