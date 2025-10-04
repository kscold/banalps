"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { VideoSection } from "../../widgets/Hero/VideoSection";
import * as styles from "./AboutPage.css";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { useAboutTranslations } from "@/hooks/useAllPagesTranslations";
import { useLanguageStore } from "@/shared/stores/useLanguageStore";
import Footer from "@/shared/ui/Footer/Footer";

export default function AboutPage() {
  const [currentSection, setCurrentSection] = useState<0 | 1>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isMobile = useMediaQuery("(max-width: 1023px)");
  const t = useAboutTranslations();
  const { language } = useLanguageStore();
  const prefersReducedMotion = useReducedMotion(); // 애니메이션 감소 선호 확인

  // 공통 애니메이션 설정
  const cardAnimationInitial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 };
  const cardAnimationWhileInView = { opacity: 1, y: 0 };
  const cardAnimationViewport = { once: true, amount: 0.2, margin: "0px 0px -100px 0px" } as const;
  const getCardTransition = (delay: number = 0) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, delay, ease: "easeOut" as const };

  // 초기 설정 - 비디오 섹션으로 스크롤
  useEffect(() => {
    if (containerRef.current && videoRef.current) {
      containerRef.current.scrollTop = 0;
      videoRef.current.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  // 스크롤 스냅 비활성화 - 자연스러운 스크롤을 위해 제거

  // IntersectionObserver 옵션 - useMemo로 메모이제이션
  const observerOptions = useMemo(() => ({
    root: containerRef.current,
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0,
  }), []);

  // IntersectionObserver 콜백 - useCallback으로 메모이제이션
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === videoRef.current) {
          setCurrentSection(0);
        } else if (entry.target === contentRef.current) {
          setCurrentSection(1);
        }
      }
    });
  }, []);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const currentVideoRef = videoRef.current;
    const currentContentRef = contentRef.current;

    if (currentVideoRef) observer.observe(currentVideoRef);
    if (currentContentRef) observer.observe(currentContentRef);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection, observerOptions]);

  // 번역이 로딩 중인지 확인
  if (!t || !t.hero || !t.values) {
    return <div>Loading...</div>;
  }

  // 피그마 디자인에 따른 강점 데이터 - JSON에서 가져오기
  const strengths = t.strengths.map((strength, index) => ({
    number: String(index + 1).padStart(2, "0"),
    ...strength,
  }));

  return (
    <div
      ref={containerRef}
      className={styles.aboutPage}
      suppressHydrationWarning
    >
      {/* Video Section */}
      <div
        ref={videoRef}
        className={styles.videoSection}
        suppressHydrationWarning
      >
        {currentSection >= 0 && (
          <VideoSection
            showVideoSection={true}
            onVideoEnd={() => {}}
            onVideoReady={() => {}}
          />
        )}
      </div>

      {/* Content Section */}
      <div
        ref={contentRef}
        className={styles.contentSection}
        suppressHydrationWarning
      >
        <div
          className="relative"
          style={{
            backgroundColor: "white",
            paddingTop: 0,
          }}
        >
            {/* Hero Section */}
            <section className={styles.heroSection}>
              <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                  {isMobile ? (
                    <div className={styles.heroQuoteMobile}>
                      <h1 className={styles.heroQuote}>
                        {language === "KR" && "\u2018"}
                        {(() => {
                          const quoteText =
                            (t.hero as any).quoteMobile || t.hero.quote;
                          const lines = quoteText.split("\n");
                          return lines.map((line: string, index: number) => (
                            <span key={index}>
                              {line}
                              {index < lines.length - 1 && <br />}
                            </span>
                          ));
                        })()}
                        {language === "KR" && "\u2019"}
                      </h1>
                    </div>
                  ) : (
                    <h1 className={styles.heroQuote}>
                      {language === "KR" && "\u2018"}
                      {t.hero.quote}
                      {language === "KR" && "\u2019"}
                    </h1>
                  )}
                  <h2 className={styles.heroTitle}>{t.hero.mainTitle}</h2>
                </div>
                <div className={styles.heroIllustration}>
                  {/* 피그마의 일러스트 이미지 */}
                  <img
                    src="/main/banal_graffiti.svg"
                    alt="Healthcare Illustration"
                    className={styles.illustrationImage}
                  />
                  <img
                    src="/about/mobile/banal-graffiti-mobile.svg"
                    alt="Healthcare Illustration"
                    className={styles.heroIllustrationMobile}
                  />
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
              <div className={styles.valuesContainer}>
                <div className={styles.valuesContent}>
                  <h2 className={styles.valuesMainTitle}>
                    {t.values.title.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < t.values.title.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </h2>
                  <p
                    className={styles.valuesDescription}
                    suppressHydrationWarning
                  >
                    {(() => {
                      const text =
                        isMobile && t.values.mobileDescription
                          ? t.values.mobileDescription
                          : t.values.description;
                      const lines = text.split("\n");
                      return lines.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < lines.length - 1 && <br />}
                        </span>
                      ));
                    })()}
                  </p>
                </div>
                <div className={styles.valuesCards}>
                  <img
                    src={
                      language === "JP"
                        ? "/about/value-jp.svg"
                        : "/about/value.svg"
                    }
                    alt="바날 가치"
                    className={styles.valueCardsImage}
                  />
                  <img
                    src={
                      language === "JP"
                        ? "/about/mobile/value-mobile-jp.svg"
                        : "/about/mobile/value-mobile.svg"
                    }
                    alt="바날 가치"
                    className={styles.valueCardsImageMobile}
                  />
                </div>
              </div>
            </section>

            {/* RE.YOU Section */}
            <section className={styles.reYouSection}>
              <div className={styles.reYouContainer}>
                {/* RE.YOU 텍스트 섹션 - 상단에 배치 */}
                <motion.div
                  className={styles.reYouTextSection}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className={styles.reYouContent}>
                    <h2 className={styles.reYouTitle}>{t.reYou.title}</h2>
                    <p className={styles.reYouSubtitle}>{t.reYou.subtitle}</p>
                  </div>
                </motion.div>

                {/* 이미지 카드 섹션 - 2x2 그리드 */}
                <div className={styles.reYouImageCards}>
                  <motion.div
                    className={styles.reYouCard1}
                    initial={cardAnimationInitial}
                    whileInView={cardAnimationWhileInView}
                    viewport={cardAnimationViewport}
                    transition={getCardTransition(0)}
                  >
                    <img
                      src={
                        isMobile
                          ? "/main/shot/mobile/shot1-mobile.svg"
                          : "/main/shot/shot1.png"
                      }
                      alt="Shin Seung gyu"
                      className={styles.reYouCardImage}
                    />
                  </motion.div>

                  <motion.div
                    className={styles.reYouCard4}
                    initial={cardAnimationInitial}
                    whileInView={cardAnimationWhileInView}
                    viewport={cardAnimationViewport}
                    transition={getCardTransition(0.4)}
                  >
                    <img
                      src={
                        isMobile
                          ? "/main/shot/mobile/shot2-mobile.svg"
                          : "/main/shot/shot2.png"
                      }
                      alt="의료진 4"
                      className={styles.reYouCardImage}
                    />
                  </motion.div>
                  <motion.div
                    className={styles.reYouCard2}
                    initial={cardAnimationInitial}
                    whileInView={cardAnimationWhileInView}
                    viewport={cardAnimationViewport}
                    transition={getCardTransition(0.8)}
                  >
                    <img
                      src={
                        isMobile
                          ? "/main/shot/mobile/shot3-mobile.svg"
                          : "/main/shot/shot3.svg"
                      }
                      alt="Park Soo Ho"
                      className={styles.reYouCardImage}
                    />
                  </motion.div>

                  <motion.div
                    className={styles.reYouCard3}
                    initial={cardAnimationInitial}
                    whileInView={cardAnimationWhileInView}
                    viewport={cardAnimationViewport}
                    transition={getCardTransition(0)}
                  >
                    <img
                      src={
                        isMobile
                          ? "/main/shot/mobile/shot4-mobile.svg"
                          : "/main/shot/shot4.png"
                      }
                      alt="Kim Narae"
                      className={styles.reYouCardImage}
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Strengths Section */}
            <section className={styles.strengthsSection}>
              <div className={styles.strengthsContainer}>
                <div className={styles.strengthsContent}>
                  {/* 왼쪽 영역 - 타이틀 + SVG */}
                  <div className={styles.strengthsLeftSection}>
                    <h2 className={styles.strengthsTitle}>
                      {t.whatBanal.title.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < t.whatBanal.title.split("\n").length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    </h2>
                    <img
                      src="/about/about-graffiti.svg"
                      alt="바날 소개 그래피티"
                      className={styles.strengthsGraffiti}
                    />
                  </div>

                  {/* 오른쪽 영역 - 리스트 형태 */}
                  <div className={styles.strengthsList}>
                    {strengths.map((strength, index) => (
                      <motion.div
                        key={index}
                        className={styles.strengthItem}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <div className={styles.strengthNumber}>
                          {strength.number}
                        </div>
                        <div className={styles.strengthItemContent}>
                          <h3 className={styles.strengthItemTitle}>
                            {strength.title.split("\n").map((line, index) => (
                              <span key={index}>
                                {line}
                                {index <
                                  strength.title.split("\n").length - 1 && (
                                  <br />
                                )}
                              </span>
                            ))}
                          </h3>
                          <p className={styles.strengthDescription}>
                            {strength.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    {strengths.map((strength, index) => (
                      <motion.div
                        key={index}
                        className={styles.strengthItemMobile}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <div className={styles.strengthNumberMobile}>
                          {strength.number}
                        </div>
                        <div className={styles.strengthItemContentMobile}>
                          <h3 className={styles.strengthItemTitleMobile}>
                            {(strength.mobileTitle || strength.title)
                              .split("\n")
                              .map((line, index) => (
                                <span key={index}>
                                  {line}
                                  {index <
                                    (
                                      strength.mobileTitle || strength.title
                                    ).split("\n").length -
                                      1 && <br />}
                                </span>
                              ))}
                          </h3>
                          <p
                            className={styles.strengthDescriptionMobile}
                            suppressHydrationWarning
                          >
                            {(() => {
                              const text =
                                strength.mobileDescription ||
                                strength.description;
                              const lines = text.split("\n");
                              return lines.map((line, index) => (
                                <span key={index}>
                                  {line}
                                  {index < lines.length - 1 && <br />}
                                </span>
                              ));
                            })()}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery Section */}
            <section className={styles.gallerySection}>
              <div className={styles.galleryContainer}>
                {/* 상단: 타이틀 + 큰 수평 이미지 */}
                <div className={styles.galleryTopSection}>
                  <div className={styles.galleryTitleSection}>
                    <h2 className={styles.galleryTitle}>
                      {t.gallery.title.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < t.gallery.title.split("\n").length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    </h2>
                  </div>

                  <motion.div
                    className={styles.galleryMainImage}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <img
                      src="/about/gallery/gallery-1.png"
                      alt="바날 갤러리 메인"
                      className={styles.galleryImage}
                    />
                  </motion.div>
                </div>

                {/* 하단: 복합 그리드 레이아웃 - 피그마 정확한 구조 */}
                <div className={styles.galleryGrid}>
                  {/* Row 1: Frame 219 - 왼쪽 큰 이미지 + 오른쪽 2개 스택 */}
                  <div className={styles.galleryRow1}>
                    {/* 왼쪽 큰 이미지 */}
                    <motion.div
                      className={styles.galleryLeftLarge}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{
                        duration: 0.6,
                        delay: 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <img
                        src="/about/gallery/gallery-2.png"
                        alt="바날 갤러리 2"
                        className={styles.galleryImage}
                      />
                    </motion.div>

                    {/* 오른쪽 위 이미지 */}
                    <motion.div
                      className={styles.galleryRightTop}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <img
                        src="/about/gallery/gallery-3.png"
                        alt="바날 갤러리 3"
                        className={styles.galleryImage}
                      />
                    </motion.div>

                    {/* 오른쪽 아래 이미지 */}
                    <motion.div
                      className={styles.galleryRightBottom}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <img
                        src="/about/gallery/gallery-4.png"
                        alt="바날 갤러리 4"
                        className={styles.galleryImage}
                      />
                    </motion.div>
                  </div>

                  {/* Row 2: Frame 220 - 2개 나란히 */}
                  <div className={styles.galleryRow2}>
                    <motion.div
                      className={styles.galleryGridItem}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <img
                        src="/about/gallery/gallery-5.png"
                        alt="바날 갤러리 5"
                        className={styles.galleryImage}
                      />
                    </motion.div>

                    <motion.div
                      className={styles.galleryGridItem}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <img
                        src="/about/gallery/gallery-6.png"
                        alt="바날 갤러리 6"
                        className={styles.galleryImage}
                      />
                    </motion.div>
                  </div>

                  {/* Row 3: Frame 223 - 데스크탑/모바일 다른 순서 */}
                  <div className={styles.galleryRow3}>
                    {isMobile ? (
                      // 모바일 순서: 추가2(400px), 7(197px), 추가3(197px), 추가1(400px)
                      <>
                        <motion.div
                          className={styles.gallerySmallImage}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <img
                            src="/about/gallery/gallery-8.png"
                            alt="바날 갤러리 추가 2"
                            className={styles.galleryImage}
                          />
                        </motion.div>

                        <motion.div
                          className={styles.galleryLargeImage}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <img
                            src="/about/gallery/gallery-7.png"
                            alt="바날 갤러리 7"
                            className={styles.galleryImage}
                          />
                        </motion.div>

                        <motion.div
                          className={styles.galleryLargeImage}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <img
                            src="/about/gallery/gallery-10.png"
                            alt="바날 갤러리 추가 3"
                            className={styles.galleryImage}
                          />
                        </motion.div>

                        <motion.div
                          className={styles.gallerySmallImage}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <img
                            src="/about/gallery/gallery-9.png"
                            alt="바날 갤러리 추가 1"
                            className={styles.galleryImage}
                          />
                        </motion.div>
                      </>
                    ) : (
                      // 데스크탑 순서: 기존 그리드 레이아웃 (7, 9 | 8, 10)
                      <>
                        {/* 왼쪽 컬럼 */}
                        <div className={styles.galleryLeftColumn}>
                          <motion.div
                            className={styles.gallerySmallImage}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.1,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            <img
                              src="/about/gallery/gallery-7.png"
                              alt="바날 갤러리 7"
                              className={styles.galleryImage}
                            />
                          </motion.div>
                          <motion.div
                            className={styles.galleryLargeImage}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.3,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            <img
                              src="/about/gallery/gallery-9.png"
                              alt="바날 갤러리 추가 1"
                              className={styles.galleryImage}
                            />
                          </motion.div>
                        </div>

                        {/* 오른쪽 컬럼 */}
                        <div className={styles.galleryRightColumn}>
                          <motion.div
                            className={styles.galleryLargeImage}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.2,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            <img
                              src="/about/gallery/gallery-8.png"
                              alt="바날 갤러리 추가 2"
                              className={styles.galleryImage}
                            />
                          </motion.div>
                          <motion.div
                            className={styles.gallerySmallImage}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.4,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            <img
                              src="/about/gallery/gallery-10.png"
                              alt="바날 갤러리 추가 3"
                              className={styles.galleryImage}
                            />
                          </motion.div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <Footer />
        </div>
      </div>
    </div>
  );
}
