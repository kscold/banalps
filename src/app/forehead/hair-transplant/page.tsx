"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import HeaderNavigation from "../../../widgets/Header/HeaderNavigation"
import BeforeAfterSlider from "../../../shared/ui/BeforeAfterSlider"
import { ArrowButton } from "../../../shared/ui/ArrowButton"

import * as styles from "../../hair-transplant/HairTransplant.css"
import * as foreheadStyles from "./HairTransplantPage.css"

export default function ForeheadhairTransplantPage() {
  console.log("[ForeheadReductionPage] 이마축소 모발이식 메인 페이지 렌더링")

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
      {/* Hero Section */}
      <section className={styles.HairTransplantHeroSection}>
        <div className={styles.HairTransplantHeroContainer}>
          {/* Hero Illustration - 왼쪽에 붙도록 */}
          <div className={styles.HairTransplantHeroIllustration}>
            <img
              src="/hair-transplant/hero-illustration.svg"
              alt="이마축소 모발이식 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>

          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.HairTransplantHeroTitleWrapper}>
            <div className={styles.HairTransplantHeroTitleContainer}>
              <h1 className={styles.HairTransplantHeroTitle}>
                <span>
                  이마축소와
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
                새로운 헤어라인은
                <br />
                이마축소술과 모발이식의
                <br />
                순서와 방법을 정하고
                <br />
                디자인합니다.
              </h2>

              <p className={styles.section1Description}>
                이마축소술과 모발이식, 어느 한쪽을 포기할 필요가 없습니다.
                <br />
                이마의 높이와 넓이에 따라서 더 알맞은 방법이 있습니다.
                <br />
                <br />
                풀과 테이프에 비유할 수 있겠습니다. 붙인다는 행위는 같지만,
                <br />
                풀로 붙이는 게 더 좋을 때가 있고, 테이프를 써야만 붙일 수 있는
                경우가 있는 것처럼요.
                <br />
                <br />
                상황에 따라 필요한 방법이 다를 뿐입니다.
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
                src="/forehead/hair-transplant/hair-transplant-2.png"
                alt="이마축소 모발이식 페이지 이미지 2"
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
                src="/forehead/hair-transplant/hair-transplant-1.png"
                alt="이마축소 모발이식 페이지 이미지 1"
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
                src="/forehead/hair-transplant/hair-transplant-3.png"
                alt="이마축소 모발이식 페이지 이미지 3"
                className={styles.section2ImageContent}
              />
            </div>
          </motion.div>
          <div className={styles.section2Right}>
            <div className={styles.section2NumberBg}>2</div>
            <div className={styles.section2Text}>
              <h2 className={styles.section2Title}>
                이마의 높이가 아주 높을 때는
                <br />
                이마축소술을 먼저 해야 합니다.
              </h2>
              <p className={styles.section2Description}>
                여성들의 가르마는 정면에서 봤을 때 눈에 잘 띄는 곳에 있습니다.
                <br />
                가르마에서는 머리카락들이 겹치지 않고 갈라져서 같은 밀도라도
                두피가 잘 비쳐 보입니다.
                <br />
                <br />
                모발이식으로 높이를 많이 내리면 가르마 부위의 밀도가 떨어져
                보이고
                <br />
                두피가 비쳐 보일 가능성이 높습니다. 몇 번을 보강해도 여전히 비어
                보이는 경우도 있습니다.
                <br />
                <br />
                이럴 때는 이마축소로 먼저 높이를 줄여주는 게 좋습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section3}>
        <div className={foreheadStyles.section3Content}>
          <div
            className={`${styles.section3Left} ${foreheadStyles.section3LeftCustom}`}
          >
            <div
              className={styles.section3Text}
              style={{ position: "relative" }}
            >
              <div className={styles.section3NumberBg}>3</div>
              <h2 className={styles.section3Title}>
                이마축소술을
                <br />
                권하지 않을 때도 많습니다.
              </h2>
              <p className={styles.section3Description}>
                이마의 높이가 아니라 M자가 깊거나 측면이 넓으면 모발이식이 더
                좋습니다.
                <br />
                <br />
                두피의 탄력이 부족하거나, 정수리의 밀도가 낮거나,
                <br />
                두피가 얇거나, 피부색이 짙으면 이마축소술을 권하지 않습니다.
              </p>
            </div>
          </div>

          <motion.div
            className={foreheadStyles.section3RightCustom}
            ref={section3ImageRef}
            initial={{ opacity: 0, y: 80 }}
            animate={
              section3ImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/forehead/hair-transplant/hair-transplant-4.png"
              alt="이마축소 모발이식 결과 이미지 4"
              className={`${styles.section3ImageContent} ${foreheadStyles.section3ImageCustom}`}
            />
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContent}>
          <div className={styles.beforeAfterHeader}>
            <div className={styles.beforeAfterCategory}>이마축소</div>
            <h2 className={styles.beforeAfterTitle}>전후사진 보기</h2>
          </div>
          <div className={styles.beforeAfterSliderWrapper}>
            <div className={styles.beforeAfterSlider}>
              <BeforeAfterSlider
                beforeImage="/forehead/hair-transplant/slide/before.jpg"
                afterImage="/forehead/hair-transplant/slide/after.jpg"
                beforeAlt="이마축소 이식 전"
                afterAlt="이마축소 이식 후"
              />
            </div>
          </div>
          <div className={styles.beforeAfterActions}>
            <ArrowButton variant="primary" color="blue" size="medium">
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
                    alt="이마축소 특징 1"
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
                    alt="이마축소 특징 2"
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
                    alt="이마축소 특징 3"
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
                    alt="이마축소 특징 4"
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
