"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import HeaderNavigation from "../../../widgets/Header/HeaderNavigation"
import BeforeAfterSlider from "../../../shared/ui/BeforeAfterSlider"
import { ArrowButton } from "../../../shared/ui/ArrowButton"

import * as styles from "../HairTransplant.css"
import * as incisionStyles from "./IncisionPage.css"

export default function IncisionPage() {
  console.log("[IncisionPage] 절개와 비절개 모발이식 메인 페이지 렌더링")

  // Features Section 애니메이션
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.2, // 20% 보일 때 트리거
    triggerOnce: true, // 한 번만 실행
  })

  // Section1 이미지 애니메이션
  const { ref: section1ImagesRef, inView: section1ImagesInView } = useInView({
    threshold: 0.3, // 30% 보일 때 트리거
    triggerOnce: true, // 한 번만 실행
  })

  // Section2 이미지 애니메이션
  const { ref: section2ImageRef, inView: section2ImageInView } = useInView({
    threshold: 0.3, // 30% 보일 때 트리거
    triggerOnce: true, // 한 번만 실행
  })

  // Section3 이미지 애니메이션
  const { ref: section3ImageRef, inView: section3ImageInView } = useInView({
    threshold: 0.3, // 30% 보일 때 트리거
    triggerOnce: true, // 한 번만 실행
  })

  return (
    <div className={styles.HairTransplantPage}>
      <HeaderNavigation />

      {/* Hero Section */}
      <section className={styles.HairTransplantHeroSection}>
        <div className={styles.HairTransplantHeroContainer}>
          {/* Hero Illustration - 왼쪽에 붙도록 */}
          <div className={styles.HairTransplantHeroIllustration}>
            <img
              src="/hair-transplant/hero-illustration.svg"
              alt="절개와 비절개 모발이식 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>

          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.HairTransplantHeroTitleWrapper}>
            <div className={styles.HairTransplantHeroTitleContainer}>
              <h1 className={styles.HairTransplantHeroTitle}>
                <span>
                  절개와 비절개
                  <div className={styles.HairTransplantHeroTitleDot} />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className={styles.HairTransplantSection1}>
        <div className={styles.section1Content}>
          <div className={styles.section1Left}>
            <div className={styles.section1Number}>1</div>
            <div className={styles.section1Text}>
              <h2 className={styles.section1Title}>
                한 가지만 고집해서
                <br />
                훌륭한 선택지 하나를
                <br />
                포기할 필요는 없습니다.
              </h2>
              <div className={styles.section1Image}>
                <img
                  src="/hair-transplant/incision/illustration-1.svg"
                  alt="절개와 비절개 일러스트 1"
                  className={styles.section1Illustration}
                />
              </div>
              <p className={styles.section1Description}>
                절개와 비절개 어느 한쪽이 더 우수한 방법이 아닙니다.
                <br />
                상황에 따라 더 효율적인 방법을 제시할 수 있어야 합니다.
                <br />
                <br />
                훌륭한 방법 한 가지를 포기할 필요는 없습니다.
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
                src="/hair-transplant/incision/incision-1.png"
                alt="절개와 비절개 페이지 이미지 1"
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
                src="/hair-transplant/incision/incision-2.png"
                alt="절개와 비절개 페이지 이미지 2"
                className={styles.section1ImageContent}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.section2}>
        <div className={styles.section2Content}>
          <motion.div
            className={styles.section2Left}
            ref={section2ImageRef}
            initial={{ opacity: 0, y: 80 }}
            animate={
              section2ImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={styles.section2Image}>
              <img
                src="/hair-transplant/incision/incision-3.png"
                alt="절개와 비절개 페이지 이미지 3"
                className={styles.section2ImageContent}
              />
            </div>
          </motion.div>
          <div className={styles.section2Right}>
            <div className={styles.section2NumberBg}>2</div>
            <div className={styles.section2Text}>
              <h2 className={styles.section2Title}>
                두피의 탄력이 부족하면
                <br />
                비절개를 권합니다.
              </h2>

              <p className={styles.section2Description}>
                ① 두피의 탄력이 부족할 때
                <br />
                ② 이미 여러 번의 절개 수술을 받았을 때
                <br />
                ③ 절개에 대한 두려움이 클 때
                <br />
                ④ 통증에 민감할 때
                <br />
                <br />
                비절개를 더 권합니다.
              </p>
            </div>
          </div>
          {/* 절대 위치 SVG - 텍스트 영역 내부에 배치 */}
          <div className={incisionStyles.section2Svg2}>
            <img
              src="/hair-transplant/incision/illustration-2.svg"
              alt="절개와 비절개 일러스트 3"
              className={incisionStyles.section2SvgImage}
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section3}>
        <div className={incisionStyles.section3Content}>
          <div className={styles.section3Left}>
            <div
              className={styles.section3Text}
              style={{ position: "relative" }}
            >
              <div className={styles.section3NumberBg}>3</div>
              <h2 className={styles.section3Title}>
                뒷머리의 숱이 적으면
                <br />
                절개를 권합니다.
              </h2>
              <p className={styles.section3Description}>
                ① 뒷머리가 납작하거나 볼륨감이 필요할 때
                <br />
                ② 이미 여러 번의 절개 수술을 받았을 때
                <br />
                ③ 오래 엎드려 있기 어려울 때
                <br />
                ④ 비용에 부담이 있을 때
                <br />
                <br />
                절개를 더 권합니다.
              </p>
            </div>
          </div>
          {/* 절대 위치 SVG - 텍스트 영역 내부에 배치 */}
          <div className={incisionStyles.section3SvgContainer}>
            <img
              src="/hair-transplant/incision/illustration-3.svg"
              alt="절개와 비절개 일러스트 3"
              className={incisionStyles.section3SvgImage}
            />
          </div>

          <motion.div
            className={incisionStyles.section3RightCustom}
            ref={section3ImageRef}
            initial={{ opacity: 0, y: 80 }}
            animate={
              section3ImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* <div className={`${styles.section3Image} ${incisionStyles.section3ImageContainerCustom}`}> */}
            <img
              src="/hair-transplant/incision/incision-4.png"
              alt="절개와 비절개 결과 이미지 4"
              className={`${styles.section3ImageContent} ${incisionStyles.section3ImageCustom}`}
            />
            {/* </div> */}
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContent}>
          <div className={styles.beforeAfterHeader}>
            <div className={styles.beforeAfterCategory}>헤어라인</div>
            <h2 className={styles.beforeAfterTitle}>3000모(여)_1년경과</h2>
          </div>
          <div className={styles.beforeAfterSliderWrapper}>
            <div className={styles.beforeAfterSlider}>
              <BeforeAfterSlider
                beforeImage="/hair-transplant/incision/slide/before.jpg"
                afterImage="/hair-transplant/incision/slide/after.jpg"
                beforeAlt="절개와 비절개 이식 전"
                afterAlt="절개와 비절개 이식 후"
              />
            </div>
          </div>
          <div className={styles.beforeAfterActions}>
            <ArrowButton>더 많은 전후사진 보기</ArrowButton>
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
              독보적인 기술력과 사후 관리까지
              <br />
              바날은 고객에 진심을 다합니다.
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
                    alt="절개와 비절개 특징 1"
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
                    alt="절개와 비절개 특징 2"
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
                    alt="절개와 비절개 특징 3"
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
                    alt="절개와 비절개 특징 4"
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
  )
}
