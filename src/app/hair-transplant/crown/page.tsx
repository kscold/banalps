"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import HeaderNavigation from "../../../widgets/Header/HeaderNavigation"
import BeforeAfterSlider from "../../../shared/ui/BeforeAfterSlider"
import { ArrowButton } from "../../../shared/ui/ArrowButton"

import * as styles from "../HairTransplant.css"
import * as crownStyles from "./crownPage.css"

export default function CrownPage() {
  console.log("[CrownPage] 정수리 모발이식 메인 페이지 렌더링")

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
              alt="정수리 모발이식 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>

          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.HairTransplantHeroTitleWrapper}>
            <div className={styles.HairTransplantHeroTitleContainer}>
              <h1 className={styles.HairTransplantHeroTitle}>
                <span>
                  정수리
                  <br />
                  모발이식
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
                정수리 탈모는
                <br />
                처음 치료 계획이
                <br />
                중요합니다.
              </h2>
              <div className={styles.section1Image}>
                <img
                  src="/hair-transplant/crown/illustration-1.svg"
                  alt="정수리 모발이식 일러스트 1"
                  className={styles.section1Illustration}
                />
              </div>
              <p className={styles.section1Description}>
                모발이식은 수술로 좋아지는 경우와
                <br />
                약물치료가 더 효과적인 때가 있습니다.
                <br />
                <br />
                잘못된 계획으로 수술 후 후회하시거나
                <br />
                약물치료 시기를 놓쳐 안타까워하시는 분들이 많습니다.
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
                src="/hair-transplant/crown/crown-2.png"
                alt="정수리 모발이식 페이지 이미지 2"
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
                src="/hair-transplant/crown/crown-1.png"
                alt="정수리 모발이식 페이지 이미지 1"
                className={styles.section1ImageContent}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2*/}
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
                src="/hair-transplant/crown/crown-3.png"
                alt="정수리 모발이식 페이지 이미지 3"
                className={styles.section2ImageContent}
              />
            </div>
          </motion.div>
          <div className={styles.section2Right}>
            <div className={styles.section2NumberBg}>2</div>
            <div className={styles.section2Text}>
              <h2 className={styles.section2Title}>
                심하지 않다면
                <br />
                약물치료부터 어떨까요?
              </h2>
              {/* SVG 일러스트 추가 */}
              <div className={crownStyles.section2SvgContainer}>
                <img
                  src="/hair-transplant/crown/illustration-2.svg"
                  alt="재수술과 흉터이식 일러스트 2"
                  className={crownStyles.section2SvgImage}
                />
              </div>
              <p className={styles.section2Description}>
                심하지 않은 탈모는 약물치료만으로
                <br />
                충분한 효과를 볼 수 있습니다.
                <br />
                <br />
                정수리 탈모는 계속 진행하기 때문에
                <br />
                수술을 하든 안 하든 약물치료는 반드시 필요하며
                <br />더 건강해진 모발 상태로 수술 받을 수 있습니다.
              </p>
              {/* 절대 위치 SVG - 텍스트 영역 내부에 배치 */}
              <div className={crownStyles.section2Svg2}>
                <img
                  src="/hair-transplant/crown/illustration-3.svg"
                  alt="재수술과 흉터이식 일러스트 3"
                  className={crownStyles.section2SvgImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section3}>
        <div className={styles.section3Content}>
          <div className={styles.section3Left}>
            <div className={styles.section3Text}>
              <div className={styles.section3NumberBg}>3</div>
              <h2 className={styles.section3Title}>
                최소한의 모낭으로
                <br />
                최대한의 효과를
              </h2>
              <div className={crownStyles.section3SvgContainer}>
                <img
                  src="/hair-transplant/crown/illustration-4.svg"
                  alt="정수리 모발이식 일러스트 4"
                  className={crownStyles.section3SvgImage}
                />
                <div className={crownStyles.section3TextArea}>
                  <p className={styles.section3Description}>
                    정수리 탈모가 있으면 뒷머리의 숱도 줄고
                    <br />
                    빈 곳을 모두 채우기에 모발은 부족합니다.
                    <br />
                    <br />
                    더 중요한 곳을 잘 구분해야
                    <br />
                    최소한의 모발로 최대한희 효과를 낼 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className={styles.section3Right}
            ref={section3ImageRef}
            initial={{ opacity: 0, y: 80 }}
            animate={
              section3ImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={styles.section3Image}>
              <img
                src="/hair-transplant/crown/crown-4.png"
                alt="정수리 모발이식 결과 이미지 4"
                className={styles.section3ImageContent}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContent}>
          <div className={styles.beforeAfterHeader}>
            <div className={styles.beforeAfterCategory}>정수리</div>
            <h2 className={styles.beforeAfterTitle}>전후사진 보기</h2>
          </div>
          <div className={styles.beforeAfterSliderWrapper}>
            <div className={styles.beforeAfterSlider}>
              <BeforeAfterSlider
                beforeImage="/hair-transplant/crown/slide/before.jpg"
                afterImage="/hair-transplant/crown/slide/after.jpg"
                beforeAlt="정수리 이식 전"
                afterAlt="정수리 이식 후"
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
                    alt="정수리 특징 1"
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
                    alt="정수리 특징 2"
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
                    alt="정수리 특징 3"
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
                    alt="정수리 특징 4"
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
