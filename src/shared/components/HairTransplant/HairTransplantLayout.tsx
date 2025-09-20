"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BeforeAfterSlider from "@/shared/ui/BeforeAfterSlider/BeforeAfterSlider";
import SidePreviewSlider from "@/shared/ui/SidePreviewSlider/SidePreviewSlider";
import * as styles from "./HairTransplantLayout.css";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { mvw } from "@/shared/styles/responsive.utils";

interface Section {
  number: number;
  title: React.ReactNode;
  titleMobile?: React.ReactNode;
  titleMobileSize?: {  // Optional custom size for mobile title
    width?: number;  // mvw units
    height?: number; // mvw units
  };
  description?: React.ReactNode;
  descriptionMobile?: React.ReactNode;
  quote?: React.ReactNode;
  quoteMobile?: React.ReactNode;
  illustration?: string;
  illustrationSize?: {
    width: number;
    height: number;
  };
  illustrationMobile?: string;  // Mobile-specific illustration for section 1
  illustrationMobileSize?: {  // Optional custom size for mobile illustration
    width?: number;  // mvw units
    height?: number; // mvw units
    fullWidth?: boolean;  // If true, takes full viewport width (100vw)
  };
  images?: {
    main?: string;
    secondary?: string;
  };
  mobileIllustration?: string;
  svgElements?: {
    container?: string; // SVG in container between title and description
    absolute?: string; // Absolute positioned SVG
  };
  mobileImages?: {
    illustration?: string; // Mobile-specific illustration
    illustrationSize?: {  // Optional custom size for mobile illustration
      width: number;  // mvw units
      height: number; // mvw units
    };
  };
}

interface BeforeAfterData {
  category: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

interface FeatureCard {
  icon: string; // SVG image path
  title: React.ReactNode; // Support for line breaks
}

interface SidePreviewData {
  images: Array<{
    src: string;
    alt: string;
  }>;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
}

interface HairTransplantLayoutProps {
  heroTitle: React.ReactNode;
  heroTitleMobile?: React.ReactNode;  // Mobile-specific hero title
  heroSubtitle?: React.ReactNode;
  heroBackground?: string;
  heroIllustration?: string;
  heroIllustrationMobile?: string;
  section1: Section;
  section2: Section;
  section3: Section;
  beforeAfterData: BeforeAfterData;
  featuresTitle?: React.ReactNode;
  featuresTitleMobile?: React.ReactNode;
  featureCards?: FeatureCard[];
  sidePreviewData?: SidePreviewData;
}

export default function HairTransplantLayout({
  heroTitle,
  heroTitleMobile,
  heroSubtitle,
  heroBackground,
  heroIllustration = "/hair-transplant/hero-illustration.svg",
  heroIllustrationMobile = "/hair-transplant/mobile/hero-illustration-mobile.svg",
  section1,
  section2,
  section3,
  beforeAfterData,
  featuresTitle,
  featuresTitleMobile,
  featureCards,
  sidePreviewData,
}: HairTransplantLayoutProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const section1ImagesRef = useRef(null);
  const section1ImagesInView = useInView(section1ImagesRef, { once: true });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true });

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
                  }}
                >
                  {isMobile && heroTitleMobile ? heroTitleMobile : heroTitle}
                  <div className={styles.HairTransplantHeroTitleDot} />
                </span>
              </h1>
            </div>
          </div>
          {/* Hero Illustration - 왼쪽에 붙도록 (데스크탑용) */}
          <div className={styles.HairTransplantHeroIllustration}>
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
      <section className={styles.section1}>
        <div className={styles.section1Content}>
          {isMobile ? (
            <>
              {/* 모바일: 숫자 → 제목 → 이미지 → 텍스트 순서 */}
              <div className={styles.section1Number}>{section1.number}</div>
              <div className={styles.section1Left}>
                <div className={styles.section1Text}>
                  <h2
                    className={styles.section1Title}
                    style={isMobile && section1.titleMobileSize ? {
                      width: section1.titleMobileSize.width ? `${section1.titleMobileSize.width / 375 * 100}vw` : undefined,
                      height: section1.titleMobileSize.height ? `${section1.titleMobileSize.height / 375 * 100}vw` : undefined,
                    } : undefined}
                  >
                    {isMobile && section1.titleMobile ? section1.titleMobile : section1.title}
                  </h2>

                  {/* 모바일: 타이틀 아래 메인 이미지 */}
                  {section1.images?.main && (
                    <motion.div
                      className={styles.section1Image1}
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <img
                        src={section1.images.main}
                        alt="이미지 1"
                        className={styles.section1ImageContent}
                      />
                    </motion.div>
                  )}

                  <p className={styles.section1Description}>
                    {isMobile && section1.descriptionMobile ? section1.descriptionMobile : section1.description}
                  </p>

                  {/* 모바일 일러스트 - description 아래에 배치 */}
                  {section1.illustrationMobile && (
                    <div
                      className={styles.section1MobileIllustration}
                      style={section1.illustrationMobileSize ? {
                        width: section1.illustrationMobileSize.fullWidth
                          ? 'calc(100vw - var(--scrollbar-width, 0px))'
                          : '100%',
                        aspectRatio: section1.illustrationMobileSize.width && section1.illustrationMobileSize.height
                          ? `${section1.illustrationMobileSize.width} / ${section1.illustrationMobileSize.height}`
                          : undefined,
                        marginLeft: section1.illustrationMobileSize.fullWidth ? mvw(-20) : undefined,
                        marginRight: section1.illustrationMobileSize.fullWidth ? mvw(-20) : undefined,
                      } : {
                        width: '100%',
                        aspectRatio: '324 / 252'
                      }}
                    >
                      <img
                        src={section1.illustrationMobile}
                        alt="일러스트"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* 모바일 이미지 (기존) */}
                {section1.mobileImages?.illustration && (
                  <div
                    className={styles.section1Image}
                    style={section1.mobileImages?.illustrationSize ? {
                      width: `${section1.mobileImages.illustrationSize.width / 375 * 100}vw`,
                      height: `${section1.mobileImages.illustrationSize.height / 375 * 100}vw`,
                      maxWidth: '100%',
                    } : undefined}
                  >
                    <img
                      src={section1.mobileImages.illustration}
                      alt="일러스트"
                      className={styles.section1Illustration}
                    />
                  </div>
                )}

                {/* 모바일: 일러스트 아래 보조 이미지 */}
                {section1.images?.secondary && (
                  <motion.div
                    className={styles.section1Image2}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  >
                    <img
                      src={section1.images.secondary}
                      alt="이미지 2"
                      className={styles.section1ImageContent}
                    />
                  </motion.div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className={styles.section1Number}>{section1.number}</div>
              <div className={styles.section1Left}>
                <div className={styles.section1Text}>
                  <h2
                    className={styles.section1Title}
                    style={isMobile && section1.titleMobileSize ? {
                      width: section1.titleMobileSize.width ? `${section1.titleMobileSize.width / 375 * 100}vw` : undefined,
                      height: section1.titleMobileSize.height ? `${section1.titleMobileSize.height / 375 * 100}vw` : undefined,
                    } : undefined}
                  >
                    {isMobile && section1.titleMobile ? section1.titleMobile : section1.title}
                  </h2>
                  {section1.illustration && (
                    <div className={styles.section1Image}>
                      <img
                        src={section1.illustration}
                        alt="일러스트"
                        className={styles.section1Illustration}
                        style={section1.illustrationSize ? {
                          width: `${section1.illustrationSize.width / 19.2}vw`,
                          height: `${section1.illustrationSize.height / 19.2}vw`
                        } : undefined}
                      />
                    </div>
                  )}
                  <p className={styles.section1Description}>
                    {isMobile && section1.descriptionMobile ? section1.descriptionMobile : section1.description}
                  </p>
                </div>
              </div>
              <div className={styles.section1Right} ref={section1ImagesRef}>
                {section1.images?.main && (
                  <motion.div
                    className={styles.section1Image1}
                    initial={{ opacity: 0, y: 80 }}
                    animate={
                      section1ImagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={section1.images.main}
                      alt="이미지 1"
                      className={styles.section1ImageContent}
                    />
                  </motion.div>
                )}
                {section1.images?.secondary && (
                  <motion.div
                    className={styles.section1Image2}
                    initial={{ opacity: 0, y: 80 }}
                    animate={
                      section1ImagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  >
                    <img
                      src={section1.images.secondary}
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

      {/* Section 2 */}
      <section className={styles.section2}>
        <div className={styles.section2Content}>
          {isMobile ? (
            <>
              {/* 모바일: 숫자 → 제목 → 이미지 → 텍스트 순서 */}
              <div className={styles.section2NumberBg}>{section2.number}</div>
              <div className={styles.section2Left}>
                <div className={styles.section2Text}>
                  <h2
                    className={styles.section2Title}
                    style={isMobile && section2.titleMobileSize ? {
                      width: section2.titleMobileSize?.width ? `${section2.titleMobileSize.width / 375 * 100}vw` : undefined,
                      height: section2.titleMobileSize?.height ? `${section2.titleMobileSize.height / 375 * 100}vw` : undefined,
                    } : undefined}
                  >
                    {isMobile && section2.titleMobile ? section2.titleMobile : section2.title}
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

                  <p className={styles.section2Description}>
                    {isMobile && section2.descriptionMobile ? section2.descriptionMobile : section2.description}
                    {section2.quote && (
                      <>
                        <br />
                        <br />
                        <span className={styles.section2Quote}>
                          {isMobile && section2.quoteMobile ? section2.quoteMobile : section2.quote}
                        </span>
                      </>
                    )}
                  </p>

                  {/* 모바일 일러스트 - description 아래에 배치 */}
                  {section2.illustrationMobile && (
                    <div
                      className={styles.section2MobileIllustration}
                      style={section2.illustrationMobileSize ? {
                        width: section2.illustrationMobileSize.fullWidth
                          ? 'calc(100vw - var(--scrollbar-width, 0px))'
                          : '100%',
                        aspectRatio: section2.illustrationMobileSize.width && section2.illustrationMobileSize.height
                          ? `${section2.illustrationMobileSize.width} / ${section2.illustrationMobileSize.height}`
                          : undefined,
                        marginLeft: section2.illustrationMobileSize.fullWidth ? mvw(-20) : undefined,
                        marginRight: section2.illustrationMobileSize.fullWidth ? mvw(-20) : undefined,
                      } : {
                        width: '100%',
                        aspectRatio: '375 / 336'
                      }}
                    >
                      <img
                        src={section2.illustrationMobile}
                        alt="일러스트"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* 모바일 일러스트 (재수술 페이지 등) */}
              {section2.mobileIllustration && (
                <div className={styles.section2Illustration}>
                  <img
                    src={section2.mobileIllustration}
                    alt="일러스트"
                    className={styles.section2IllustrationContent}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div className={styles.section2Left}>
                {section2.images?.main && (
                  <div className={styles.section2Image}>
                    <img
                      src={section2.images.main}
                      alt="이미지"
                      className={styles.section2ImageContent}
                    />
                  </div>
                )}
              </div>
              <div className={styles.section2Right}>
                <div className={styles.section2NumberBg}>{section2.number}</div>
                <div className={styles.section2Text}>
                  <h2
                    className={styles.section2Title}
                    style={isMobile && section2.titleMobileSize ? {
                      width: section2.titleMobileSize?.width ? `${section2.titleMobileSize.width / 375 * 100}vw` : undefined,
                      height: section2.titleMobileSize?.height ? `${section2.titleMobileSize.height / 375 * 100}vw` : undefined,
                    } : undefined}
                  >
                    {isMobile && section2.titleMobile ? section2.titleMobile : section2.title}
                  </h2>
                  {section2.svgElements?.container && (
                    <div className={styles.section2SvgContainer}>
                      <img
                        src={section2.svgElements.container}
                        alt="일러스트"
                        className={styles.section2SvgImage}
                      />
                    </div>
                  )}
                  <p className={styles.section2Description}>
                    {isMobile && section2.descriptionMobile ? section2.descriptionMobile : section2.description}
                    {section2.quote && (
                      <>
                        <br />
                        <br />
                        <span className={styles.section2Quote}>
                          {isMobile && section2.quoteMobile ? section2.quoteMobile : section2.quote}
                        </span>
                      </>
                    )}
                  </p>
                  {section2.svgElements?.absolute && (
                    <div className={styles.section2Svg2}>
                      <img
                        src={section2.svgElements.absolute}
                        alt="일러스트 2"
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section3}>
        <div
          className={
            section3.illustration
              ? styles.section3ContentWithSvg
              : styles.section3Content
          }
        >
          {isMobile ? (
            <>
              {/* 모바일: 가로 배치 */}
              <div className={styles.section3Number}>{section3.number}</div>

              <div className={styles.section3Left}>
                <div className={styles.section3Text}>
                  <h2
                    className={styles.section3Title}
                    style={isMobile && section3.titleMobileSize ? {
                      width: section3.titleMobileSize?.width ? `${section3.titleMobileSize.width / 375 * 100}vw` : undefined,
                      height: section3.titleMobileSize?.height ? `${section3.titleMobileSize.height / 375 * 100}vw` : undefined,
                    } : undefined}
                  >
                    {isMobile && section3.titleMobile ? section3.titleMobile : section3.title}
                  </h2>
                  <div className={styles.section3Right}>
                    {section3.images?.main && (
                      <div className={styles.section3Image}>
                        <img
                          src={section3.images.main}
                          alt="이미지"
                          className={styles.section3ImageContent}
                        />
                      </div>
                    )}
                  </div>
                  <p className={styles.section3Description}>
                    {isMobile && section3.descriptionMobile ? section3.descriptionMobile : section3.description}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* illustration이 있으면 왼쪽에 일러스트, 오른쪽에 텍스트와 이미지 */}
              {section3.illustration ? (
                <>
                  <div className={styles.section3RightWithSvg}>
                    <div className={styles.section3Text}>
                      <div className={styles.section3Number}>{section3.number}</div>
                      <h2
                    className={styles.section3Title}
                    style={isMobile && section3.titleMobileSize ? {
                      width: section3.titleMobileSize?.width ? `${section3.titleMobileSize.width / 375 * 100}vw` : undefined,
                      height: section3.titleMobileSize?.height ? `${section3.titleMobileSize.height / 375 * 100}vw` : undefined,
                    } : undefined}
                  >
                    {isMobile && section3.titleMobile ? section3.titleMobile : section3.title}
                  </h2>
                      <div className={styles.section3CenterIllustrationWithSvg}>
                        <img
                          src={section3.illustration}
                          alt="일러스트"
                          className={styles.section3CenterIllustrationImage}
                          style={section3.illustrationSize ? {
                            width: `${section3.illustrationSize.width / 19.2}vw`,
                            height: `${section3.illustrationSize.height / 19.2}vw`
                          } : undefined}
                        />
                        <div>
                          <p className={styles.section3Description}>
                            {isMobile && section3.descriptionMobile ? section3.descriptionMobile : section3.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    {section3.images?.main && (
                      <div className={styles.section3Image}>
                        <img
                          src={section3.images.main}
                          alt="이미지"
                          className={styles.section3ImageContent}
                        />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* illustration이 없으면 기존 레이아웃 */}
                  <div className={styles.section3Number}>{section3.number}</div>
                  <div className={styles.section3Left}>
                    <div className={styles.section3Text}>
                      <h2
                    className={styles.section3Title}
                    style={isMobile && section3.titleMobileSize ? {
                      width: section3.titleMobileSize?.width ? `${section3.titleMobileSize.width / 375 * 100}vw` : undefined,
                      height: section3.titleMobileSize?.height ? `${section3.titleMobileSize.height / 375 * 100}vw` : undefined,
                    } : undefined}
                  >
                    {isMobile && section3.titleMobile ? section3.titleMobile : section3.title}
                  </h2>
                      <p className={styles.section3Description}>
                        {section3.description}
                      </p>
                    </div>
                  </div>
                  <div className={styles.section3Right}>
                    {section3.images?.main && (
                      <div className={styles.section3Image}>
                        <img
                          src={section3.images.main}
                          alt="이미지"
                          className={styles.section3ImageContent}
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

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
        </div>
      </section>

      {/* Features Section (Optional) */}
      {featuresTitle && featureCards && (
        <section className={styles.featuresSection}>
          <div className={styles.featuresContent}>
            <div className={styles.featuresHeader}>
              <img
                src="/hair-transplant/double-quotation-start.svg"
                alt="따옴표 시작"
                className={styles.quotationStart}
              />
              <h2 className={styles.featuresMainTitle}>
                {isMobile && featuresTitleMobile
                  ? featuresTitleMobile
                  : featuresTitle}
              </h2>
              <img
                src="/hair-transplant/double-quotation-end.svg"
                alt="따옴표 끝"
                className={styles.quotationEnd}
              />
            </div>
            <motion.div
              ref={featuresRef}
              className={styles.featuresGrid}
              initial={{ opacity: 0, y: 80 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 80 }}
                  animate={
                    featuresInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 80 }
                  }
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <div className={styles.featureIconContainer}>
                    <div className={styles.featureIcon}>
                      <img src={card.icon} alt={`특징 ${index + 1}`} />
                    </div>
                  </div>
                  <h3 className={styles.featureTitle}>{card.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Side Preview Section (Optional) */}
      {sidePreviewData && (
        <section className={styles.sidePreviewSection}>
          <div className={styles.sidePreviewContent}>
            <SidePreviewSlider
              images={sidePreviewData.images}
              title={sidePreviewData.title}
              subtitle={sidePreviewData.subtitle}
              description={sidePreviewData.description}
            />
          </div>
        </section>
      )}
    </>
  );
}
