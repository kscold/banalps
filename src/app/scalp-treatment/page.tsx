"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { useScalpTreatmentTranslations } from "@/hooks/useAllPagesTranslations";
import { useLanguageStore } from "@/shared/stores/useLanguageStore";

import FeaturesSection from "../../shared/components/FeaturesSection/FeaturesSection";

import * as styles from "./ScalpTreatmentPage.css";
import { vw, mvw } from "../../shared/styles/responsive.utils";

// Treatment Card Component with individual scroll trigger
const TreatmentCard = ({
  number,
  image,
  alt,
  title,
  isMobile,
  delay = 0,
}: {
  number: string;
  image: string;
  alt: string;
  title: string;
  isMobile: boolean;
  delay?: number;
}) => {
  if (isMobile) {
    return (
      <motion.div
        className={styles.treatmentCard}
        initial={{ opacity: 0, translateY: 80 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay }}
      >
        <div className={styles.treatmentCardImage}>
          <span className={styles.treatmentCardNumber}>{number}</span>
          <img src={image} alt={alt} className={styles.treatmentCardImageImg} />
        </div>
        <h3 className={styles.treatmentCardTitle}>{title}</h3>
      </motion.div>
    );
  }

  // Desktop version without individual animation
  return (
    <div className={styles.treatmentCard}>
      <div className={styles.treatmentCardImage}>
        <span className={styles.treatmentCardNumber}>{number}</span>
        <img src={image} alt={alt} className={styles.treatmentCardImageImg} />
      </div>
      <h3 className={styles.treatmentCardTitle}>{title}</h3>
    </div>
  );
};

export default function ScalpTreatmentPage() {
  console.log("[ScalpTreatmentPage] 두피치료 페이지 렌더링");

  const isMobile = useMediaQuery("(max-width: 1023px)");
  const t = useScalpTreatmentTranslations();
  const { language } = useLanguageStore();

  // 텍스트 컨텐츠 설정 - 번역 시스템 사용
  const textContent = {
    section1: {
      title: (
        <>
          {t.section1.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      description: {
        desktop: (
          <>
            {t.section1.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.section1.description.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.section1.descriptionMobile.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index <
                  t.section1.descriptionMobile.split("\n").length - 1 && <br />}
              </span>
            ))}
          </>
        ),
      },
    },
    section3: {
      title: t.details.section3.title,
      subtitle: {
        desktop: (
          <>
            {t.details.section3.subtitle.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.details.section3.subtitle.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section3.subtitleMobile
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index <
                    t.details.section3.subtitleMobile.split("\n").length -
                      1 && <br />}
                </span>
              ))}
          </>
        ),
      },
      description: {
        desktop: (
          <>
            {t.details.section3.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index <
                  t.details.section3.description.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section3.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index <
                  t.details.section3.description.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
      },
    },
    section4: {
      title: t.details.section4.title,
      subtitle: {
        desktop: (
          <>
            {t.details.section4.subtitle.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.details.section4.subtitle.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section4.subtitle.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.details.section4.subtitle.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
      },
      description: {
        desktop: (
          <>
            {t.details.section4.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index <
                  t.details.section4.description.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section4.descriptionMobile
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index <
                    t.details.section4.descriptionMobile.split("\n").length -
                      1 && <br />}
                </span>
              ))}
          </>
        ),
      },
    },
    section5: {
      title: t.details.section5.title,
      subtitle: {
        desktop: (
          <>
            {t.details.section5.subtitle.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.details.section5.subtitle.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section5.subtitle.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.details.section5.subtitle.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
      },
      description: {
        desktop: (
          <>
            {t.details.section5.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index <
                  t.details.section5.description.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section5.descriptionMobile
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index <
                    t.details.section5.descriptionMobile.split("\n").length -
                      1 && <br />}
                </span>
              ))}
          </>
        ),
      },
    },
    section6: {
      title: {
        desktop: (
          <>
            {t.details.section6.title.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.details.section6.title.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section6.title.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.details.section6.title.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
      },
      subtitle: {
        desktop: (
          <>
            {t.details.section6.subtitle.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.details.section6.subtitle.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section6.subtitleMobile
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index <
                    t.details.section6.subtitleMobile.split("\n").length -
                      1 && <br />}
                </span>
              ))}
          </>
        ),
      },
      description: {
        desktop: (
          <>
            {t.details.section6.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index <
                  t.details.section6.description.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </>
        ),
        mobile: (
          <>
            {t.details.section6.descriptionMobile
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index <
                    t.details.section6.descriptionMobile.split("\n").length -
                      1 && <br />}
                </span>
              ))}
          </>
        ),
      },
    },
  };

  // Vimeo 로드 핸들러
  const handleVimeoLoad = () => {
    console.log("[ScalpTreatmentPage/Vimeo로드] iframe 로드 성공");
  };

  // Hero Section 애니메이션
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  // Section 1 애니메이션
  const { ref: section1Ref, inView: section1InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  // Section 3-6 각 치료방법 상세 애니메이션
  const { ref: section3Ref, inView: section3InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  const { ref: section4Ref, inView: section4InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  const { ref: section5Ref, inView: section5InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  const { ref: section6Ref, inView: section6InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div className={styles.scalpTreatmentPage}>
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
                  {t.hero.title}
                  <div className={styles.HairTransplantHeroTitleDot} />
                </span>
              </h1>
            </div>
          </div>
          {/* Hero Illustration - 왼쪽에 붙도록 (데스크탑용) */}
          <div className={styles.HairTransplantHeroIllustration}>
            <img
              src="/forehead/hero-illustration.svg"
              alt="두피치료 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>
        </div>
        {/* 모바일 일러스트 - Hero Container 밖에 위치 */}
        <img
          src="/forehead/mobile/hero-illustration.svg"
          alt="두피치료 일러스트"
          className={styles.heroIllustrationImageMobile}
        />
      </section>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className={styles.heroSection}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          heroInView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            {/* 영상 영역 */}
            <div className={styles.scalpTreatmentVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423104?h=9505a82a8f&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onLoad={handleVimeoLoad}
                onError={() => {
                  console.error("[VideoSection/Vimeo에러] iframe 로드 실패");
                }}
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 1: 두피치료 소개 */}
      <section ref={section1Ref} className={styles.introSection}>
        <div className={styles.introContainer}>
          {/* 왼쪽 텍스트 */}
          <div className={styles.introTextContent}>
            <h2 className={styles.introTitle}>{textContent.section1.title}</h2>
            <div className={styles.introImageContent}>
              <div className={styles.introImageContainer}>
                <img
                  src="/scalp-treatment/scalp-treatment-1.png"
                  alt="두피치료 의료진"
                  className={styles.introImage}
                />
              </div>
            </div>
            <p className={styles.introDescription}>
              {isMobile
                ? textContent.section1.description.mobile
                : textContent.section1.description.desktop}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 치료방법 카드들 */}
      <section className={styles.treatmentCardsSection}>
        <div className={styles.treatmentCardsContainer}>
          <TreatmentCard
            number="1"
            image="/scalp-treatment/scalp-treatment-2.png"
            alt={t.treatments.laser}
            title={t.treatments.laser}
            isMobile={isMobile}
            delay={0}
          />

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          <TreatmentCard
            number="2"
            image="/scalp-treatment/scalp-treatment-3.png"
            alt={t.treatments.injection}
            title={t.treatments.injection}
            isMobile={isMobile}
            delay={0.1}
          />

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          <TreatmentCard
            number="3"
            image="/scalp-treatment/scalp-treatment-4.png"
            alt={t.treatments.mts}
            title={t.treatments.mts}
            isMobile={isMobile}
            delay={0.2}
          />

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          <TreatmentCard
            number="4"
            image="/scalp-treatment/scalp-treatment-5.png"
            alt={t.treatments.lllt}
            title={t.treatments.lllt}
            isMobile={isMobile}
            delay={0.3}
          />

          {!isMobile && <div className={styles.treatmentArrow}></div>}

          <div style={isMobile ? { marginTop: mvw(31) } : {}}>
            <TreatmentCard
              number="5"
              image="/scalp-treatment/scalp-treatment-6.png"
              alt={t.treatments.iv}
              title={t.treatments.iv}
              isMobile={isMobile}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Section 3: 1550nm 어븀글라스 프락셀 레이저 */}
      <section ref={section3Ref} className={styles.treatmentDetailSection}>
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423121?h=383908a6bd&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              {textContent.section3.title}
            </h2>
            <h3
              className={styles.treatmentSubtitleCustomMargin}
              style={
                {
                  "--margin-bottom": vw(144),
                  "--margin-bottom-desktop": "144px",
                } as React.CSSProperties
              }
            >
              {isMobile
                ? textContent.section3.subtitle.mobile
                : textContent.section3.subtitle.desktop}
            </h3>
            <p className={styles.treatmentDescription}>
              {isMobile
                ? textContent.section3.description.mobile
                : textContent.section3.description.desktop}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 약물 주사 치료 */}
      <section ref={section4Ref} className={styles.treatmentDetailSection}>
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423131?h=0371d1d722&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              {textContent.section4.title}
            </h2>
            <h3 className={styles.treatmentSubtitle}>
              {isMobile
                ? textContent.section4.subtitle.mobile
                : textContent.section4.subtitle.desktop}
            </h3>
            <p
              className={styles.treatmentDescriptionCustomMargin}
              style={
                {
                  "--margin-bottom": vw(108),
                  "--margin-bottom-desktop": "108px",
                } as React.CSSProperties
              }
            >
              {isMobile
                ? textContent.section4.description.mobile
                : textContent.section4.description.desktop}
            </p>
            <div className={styles.treatmentImageContainer}>
              <img
                src="/scalp-treatment/scalp-treatment-7.jpg"
                alt="약물 주사 치료"
                className={styles.treatmentImage}
              />
              <img
                src="/scalp-treatment/scalp-treatment-8.jpg"
                alt="약물 주사 치료"
                className={styles.treatmentImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 줄기세포 유래 성장인자 */}
      <section ref={section5Ref} className={styles.treatmentDetailSection}>
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423150?h=ae4e69a9a3&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              {textContent.section5.title}
            </h2>
            <h3 className={styles.treatmentSubtitle}>
              {isMobile
                ? textContent.section5.subtitle.mobile
                : textContent.section5.subtitle.desktop}
            </h3>
            <p
              className={styles.treatmentDescriptionCustomMargin}
              style={
                {
                  "--margin-bottom": vw(36),
                  "--margin-bottom-desktop": "36px",
                } as React.CSSProperties
              }
            >
              {isMobile
                ? textContent.section5.description.mobile
                : textContent.section5.description.desktop}
            </p>
            <div className={styles.treatmentImageContainer}>
              <img
                src="/scalp-treatment/scalp-treatment-9.jpg"
                alt="약물 주사 치료"
                className={styles.treatmentImage}
              />
              <img
                src="/scalp-treatment/scalp-treatment-10.jpg"
                alt="약물 주사 치료"
                className={styles.treatmentImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 저출력 레이저 LLLT */}
      <section
        ref={section6Ref}
        className={styles.treatmentDetailSectionCustomPadding}
        style={
          {
            "--padding-bottom": "0",
            "--padding-bottom-desktop": "0",
            "--padding-bottom-mobile": "0",
          } as React.CSSProperties
        }
      >
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423165?h=eb13c32221&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              {isMobile
                ? textContent.section6.title.mobile
                : textContent.section6.title.desktop}
            </h2>
            <h3
              className={styles.treatmentSubtitleCustomMargin}
              style={
                {
                  "--margin-bottom": vw(244),
                  "--margin-bottom-desktop": "244px",
                } as React.CSSProperties
              }
            >
              {isMobile
                ? textContent.section6.subtitle.mobile
                : textContent.section6.subtitle.desktop}
            </h3>
            <p className={styles.treatmentDescription}>
              {isMobile
                ? textContent.section6.description.mobile
                : textContent.section6.description.desktop}
            </p>
          </div>
        </div>
      </section>

      {/* Footer Features Section */}
      <FeaturesSection
        featuresTitle={
          <>
            {(isMobile ? t.features.titleMobile : t.features.title)
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index <
                    (isMobile
                      ? t.features.titleMobile
                      : t.features.title
                    ).split("\n").length -
                      1 && <br />}
                </span>
              ))}
          </>
        }
        featureCards={t.features.cards.map((card, index) => ({
          icon: `/hair-transplant/feature-${index + 1}.svg`,
          title: (
            <>
              {card.title.split("\n").map((line, cardIndex) => (
                <span key={cardIndex}>
                  {line}
                  {cardIndex < card.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </>
          ),
        }))}
        isMobile={isMobile}
      />
    </div>
  );
}
