"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import BeforeAfterSlider from "../../../shared/ui/BeforeAfterSlider";
import { ArrowButton } from "../../../shared/ui/ArrowButton";

import * as styles from "../HairTransplant.css";

export default function HairlinePage() {
  console.log("[HairlinePage] 헤어라인 페이지 렌더링");

  // 모바일 감지 상태
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Features Section 애니메이션
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.2, // 20% 보일 때 트리거
    triggerOnce: true, // 한 번만 실행
  });

  // Section1 이미지 애니메이션
  const { ref: section1ImagesRef, inView: section1ImagesInView } = useInView({
    threshold: 0.3, // 30% 보일 때 트리거
    triggerOnce: true, // 한 번만 실행
  });

  return (
    <div className={styles.HairTransplantPage}>
      {/* Hairline Hero Section */}
      <section className={styles.HairTransplantHeroSection}>
        <div className={styles.HairTransplantHeroContainer}>
          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.HairTransplantHeroTitleWrapper}>
            <div className={styles.HairTransplantHeroTitleContainer}>
              <h1 className={styles.HairTransplantHeroTitle}>
                <span>
                  헤어라인
                  <br />
                  교정
                  <div className={styles.HairTransplantHeroTitleDot} />
                </span>
              </h1>
            </div>
          </div>
          {/* Hero Illustration - 왼쪽에 붙도록 */}
          <div className={styles.HairTransplantHeroIllustration}>
            <img
              src="/hair-transplant/hero-illustration.svg"
              alt="헤어라인 모발이식 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>
        </div>
        <img
          src="/hair-transplant/mobile/hero-illustration-mobile.svg"
          alt="헤어라인 모발이식 일러스트"
          className={styles.heroIllustrationImageMobile}
        />
      </section>

      {/* Section 1: 얼굴 윤곽의 완성은 헤어라인입니다 */}
      <section className={styles.HairTransplantSection1}>
        <div className={styles.section1Content}>
          {isMobile ? (
            <>
              {/* 모바일: 숫자 → 이미지 → 텍스트 순서 */}
              <div className={styles.section1Number}>1</div>

              <div className={styles.section1Left} ref={section1ImagesRef}>
                <div className={styles.section1Text}>
                  <h2 className={styles.section1Title}>
                    얼굴 윤곽의 완성은
                    <br />
                    헤어라인입니다.
                  </h2>

                  {/* 모바일: 타이틀 아래 */}
                  <motion.div
                    className={styles.section1Image1}
                    initial={{ opacity: 0, y: 80 }}
                    animate={
                      section1ImagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                  >
                    <img
                      src="/hair-transplant/hairline/hairline-2.png"
                      alt="헤어라인 페이지 이미지 1"
                      className={styles.section1ImageContent}
                    />
                  </motion.div>

                  <p className={styles.section1Description}>
                    헤어라인을 결정할 때는
                    <br />
                    모발이식과 이마축소 두 방법 중
                    <br />
                    <br />
                    이마의 모양과 비율에 가장 알맞은 방법으로 얼굴의 마지막
                    윤곽을 완성합니다.
                  </p>
                </div>
                <div className={styles.section1Image}>
                  <img
                    src="/hair-transplant/hairline/mobile/illustration-1-mobile.svg"
                    alt="헤어라인 일러스트 1"
                    className={styles.section1Illustration}
                  />
                </div>
                {/* 모바일: 일러스트 아래 */}
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
                    src="/hair-transplant/hairline/hairline-1.png"
                    alt="헤어라인 페이지 이미지 2"
                    className={styles.section1ImageContent}
                  />
                </motion.div>
              </div>
            </>
          ) : (
            <>
              {/* 데스크톱: 기존 레이아웃 */}
              <div className={styles.section1Left}>
                <div className={styles.section1Number}>1</div>
                <div className={styles.section1Text}>
                  <h2 className={styles.section1Title}>
                    얼굴 윤곽의 완성은
                    <br />
                    헤어라인입니다.
                  </h2>
                  <div className={styles.section1Image}>
                    <img
                      src="/hair-transplant/hairline/illustration-1.svg"
                      alt="헤어라인 일러스트 1"
                      className={styles.section1Illustration}
                    />
                  </div>
                  <p className={styles.section1Description}>
                    헤어라인을 결정할 때는
                    <br />
                    모발이식과 이마축소 두 방법 중
                    <br />
                    <br />
                    이마의 모양과 비율에 가장 알맞은 방법으로 얼굴의 마지막
                    윤곽을 완성합니다.
                  </p>
                </div>
              </div>
              <div className={styles.section1Right} ref={section1ImagesRef}>
                {/* 대형 이미지 - 오른쪽 상단 */}
                <motion.div
                  className={styles.section1Image1}
                  initial={{ opacity: 0, y: 80 }}
                  animate={
                    section1ImagesInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 80 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                >
                  <img
                    src="/hair-transplant/hairline/hairline-2.png"
                    alt="헤어라인 페이지 이미지 1"
                    className={styles.section1ImageContent}
                  />
                </motion.div>
                {/* 소형 이미지 - 왼쪽 하단 */}
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
                    src="/hair-transplant/hairline/hairline-1.png"
                    alt="헤어라인 페이지 이미지 2"
                    className={styles.section1ImageContent}
                  />
                </motion.div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Section 2: 헤어라인 모발이식 */}
      <section className={styles.section2}>
        <div className={styles.section2Content}>
          {isMobile ? (
            <>
              {/* 모바일: 숫자 → 제목 → 이미지 → 텍스트 순서 */}
              <div className={styles.section2NumberBg}>2</div>

              <div className={styles.section2Left}>
                <div className={styles.section2Text}>
                  <h2 className={styles.section2Title}>
                    빼곡하고
                    <br />
                    자연스럽게.
                  </h2>

                  <div className={styles.section2Image}>
                    <img
                      src="/hair-transplant/hairline/hairline-3.png"
                      alt="헤어라인 페이지 이미지 3"
                      className={styles.section2ImageContent}
                    />
                  </div>

                  <p className={styles.section2Description}>
                    <div>자연스러움을 만드는 일은 어렵습니다.</div>
                    <div>
                      어색하지 않아야 하며 <br />
                      결과는 1년을 기다려야 합니다.
                    </div>
                    <div>
                      <span className={styles.section2Quote}>
                        &ldquo;헤어라인 교정만 10년을 하면서
                        <br />
                        자연스럽게 만드는 최적의 접점을 찾았습니다.&rdquo;
                      </span>
                    </div>
                    <div>
                      이제 빼곡하면서 자연스러운 헤어라인도
                      <br />
                      불가능하지 않습니다.
                    </div>
                  </p>
                </div>
              </div>

              <div className={styles.section2Illustration}>
                <img
                  src="/hair-transplant/hairline/mobile/illustration-2-mobile.svg"
                  alt="헤어라인 일러스트 2"
                  className={styles.section2IllustrationContent}
                />
              </div>
            </>
          ) : (
            <>
              {/* 데스크톱: 기존 레이아웃 */}
              <div className={styles.section2Left}>
                <div className={styles.section2Image}>
                  <img
                    src="/hair-transplant/hairline/hairline-3.png"
                    alt="헤어라인 페이지 이미지 3"
                    className={styles.section2ImageContent}
                  />
                </div>
              </div>
              <div className={styles.section2Right}>
                <div className={styles.section2NumberBg}>2</div>
                <div className={styles.section2Text}>
                  <h2 className={styles.section2Title}>
                    빼곡하고
                    <br />
                    자연스럽게.
                  </h2>
                  <p className={styles.section2Description}>
                    자연스러움 을 만드는 일은 어렵습니다.
                    <br />
                    어색하지 않아야 하며 결과는 1년을 기다려야 합니다.
                    <br />
                    <br />
                    <span className={styles.section2Quote}>
                      헤어라인 교정만 10년을 하면서
                      <br />
                      자연스럽게 만드는 최적의 접점을 찾았습니다.
                    </span>
                    <br />
                    <br />
                    이제 빼곡하면서 자연스러운 헤어라인도
                    <br />
                    불가능하지 않습니다.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Section 3: 수술 결과 */}
      <section className={styles.section3}>
        <div className={styles.section3Content}>
          {isMobile ? (
            <>
              {/* 모바일: 가로 배치 */}
              <div className={styles.section3Number}>3</div>

              <div className={styles.section3Left}>
                <div className={styles.section3Text}>
                  <h2 className={styles.section3Title}>
                    결국,
                    <br />
                    고객이 원하는 디자인이
                    <br />
                    좋은 디자인입니다.
                  </h2>
                  <div className={styles.section3Right}>
                    <div className={styles.section3Image}>
                      <img
                        src="/hair-transplant/hairline/hairline-4.png"
                        alt="헤어라인 페이지 이미지 4"
                        className={styles.section3ImageContent}
                      />
                    </div>
                  </div>
                  <p className={styles.section3Description}>
                    의사만 만족하는 디자인은
                    <br />
                    결국 두 번 수술을 하게 됩니다.
                    <br />
                    <br />
                    고객이 불편해 하는 부분을
                    <br />
                    진심으로 공감하고 고민하며
                    <br />
                    <br />
                    바날의 헤어라인 디자인은 발전합니다.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* 데스크톱: 기존 레이아웃 */}
              <div className={styles.section3Number}>3</div>
              <div className={styles.section3Left}>
                <div className={styles.section3Text}>
                  <h2 className={styles.section3Title}>
                    결국,
                    <br />
                    고객이 원하는 디자인이
                    <br />
                    좋은 디자인입니다.
                  </h2>
                  <p className={styles.section3Description}>
                    의사만 만족하는 디자인은
                    <br />
                    결국 두 번 수술을 하게 됩니다.
                    <br />
                    <br />
                    고객이 불편해 하는 부분을
                    <br />
                    진심으로 공감하고 고민하며
                    <br />
                    <br />
                    바날의 헤어라인 디자인은 발전합니다.
                  </p>
                </div>
              </div>
              <div className={styles.section3CenterIllustration}>
                <img
                  src="/hair-transplant/hairline/illustration-2.svg"
                  alt="헤어라인 일러스트 2"
                  className={styles.section3CenterIllustrationImage}
                />
              </div>
              <div className={styles.section3Right}>
                <div className={styles.section3Image}>
                  <img
                    src="/hair-transplant/hairline/hairline-4.png"
                    alt="헤어라인 페이지 이미지 4"
                    className={styles.section3ImageContent}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Before & After Section */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContent}>
          <div className={styles.beforeAfterHeader}>
            <div className={styles.beforeAfterCategory}>헤어라인</div>
            <div className={styles.beforeAfterTitle}>
              3400모(여)_1년경과
            </div>
          </div>
          <div className={styles.beforeAfterSliderWrapper}>
            <BeforeAfterSlider
              beforeImage="/hair-transplant/hairline/slide/before.jpg"
              afterImage="/hair-transplant/hairline/slide/after.jpg"
              beforeAlt="헤어라인 수술 전"
              afterAlt="헤어라인 수술 후"
              className={styles.beforeAfterSlider}
            />
          </div>
          <div className={styles.beforeAfterActions}>
            <ArrowButton
              variant="primary"
              color="blue"
              size="medium"
              width={isMobile ? "100%" : 224}
              textAlign="center"
            >
              수술전후 더보기
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContent}>
          <div className={styles.featuresHeader}>
            <img
              src="/hair-transplant/double-quotation-start.svg"
              alt="따옴표 시작"
              className={styles.quotationStart}
            />
            <h2 className={styles.featuresMainTitle}>
              풍부한 경험과 최신 기술로
              <br />
              바날은 최상의 결과를 약속드립니다.
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
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 80 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.featureIconContainer}>
                <div className={styles.featureIcon}>
                  <img
                    src="/hair-transplant/feature-1.svg"
                    alt="헤어라인 특징 1"
                  />
                </div>
              </div>
              <h3 className={styles.featureTitle}>
                모발이식과 이마축소가 동시에
                <br />
                가능한 유일한 병원입니다.
              </h3>
            </motion.div>
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 80 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.featureIconContainer}>
                <div className={styles.featureIcon}>
                  <img
                    src="/hair-transplant/feature-2.svg"
                    alt="헤어라인 특징 2"
                  />
                </div>
              </div>
              <h3 className={styles.featureTitle}>
                고객이 원하는 디자인을
                <br />
                최우선으로 생각합니다.
              </h3>
            </motion.div>
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 80 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.featureIconContainer}>
                <div className={styles.featureIcon}>
                  <img
                    src="/hair-transplant/feature-3.svg"
                    alt="헤어라인 특징 3"
                  />
                </div>
              </div>
              <h3 className={styles.featureTitle}>
                모발이식 경력 10년 이상의
                <br />
                전문의들이 진료합니다.
              </h3>
            </motion.div>
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 80 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.featureIconContainer}>
                <div className={styles.featureIcon}>
                  <img
                    src="/hair-transplant/feature-4.svg"
                    alt="헤어라인 특징 4"
                  />
                </div>
              </div>
              <h3 className={styles.featureTitle}>
                10년 이상 손발을 맞춰온
                <br />
                수술팀이 함께합니다.
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
