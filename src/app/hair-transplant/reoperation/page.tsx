"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import HeaderNavigation from "../../../widgets/Header/HeaderNavigation"
import BeforeAfterSlider from "../../../shared/ui/BeforeAfterSlider"
import { ArrowButton } from "../../../shared/ui/ArrowButton"

import * as styles from "../HairTransplant.css"
import * as reoperationStyles from "./ReoperationPage.css"

export default function ReoperationPage() {
  console.log("[ReoperationPage] 재수술과 흉터이식 메인 페이지 렌더링")

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
              alt="헤어라인 모발이식 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>

          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.HairTransplantHeroTitleWrapper}>
            <div className={styles.HairTransplantHeroTitleContainer}>
              <h1 className={styles.HairTransplantHeroTitle}>
                <span>
                  재수술과
                  <br />
                  흉터이식
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
                재수술, 흉터 수술의
                <br />
                추가 비용을
                <br />
                받지 않습니다.
              </h2>
              <p className={reoperationStyles.reoperationSection1Description}>
                재수술과 흉터이식은 힘든 수술입니다.
                <br />
                두피는 딱딱하고, 뒷머리는 부족하고,
                <br />
                헤어라인의 모발 방향이 잘못 되어 있기도 합니다.
                <br />
                생착률도 높이기 어렵죠.
                <br />
                <br />
                그럼에도 불구하고
                <br />
                고맙다는 진심어린 말씀의 보람값이라 생각하고
                <br />
                재수술, 흉터 수술의 추가 비용을 더 받지 않습니다
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
                src="/hair-transplant/reoperation/reoperation-2.png"
                alt="재수술과 흉터이식 페이지 이미지 2"
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
                src="/hair-transplant/reoperation/reoperation-1.png"
                alt="재수술과 흉터이식 페이지 이미지 1"
                className={styles.section1ImageContent}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: 밀도를 낮춰야 생착률은 높아집니다 */}
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
                src="/hair-transplant/reoperation/reoperation-3.png"
                alt="재수술과 흉터이식 페이지 이미지 3"
                className={styles.section2ImageContent}
              />
            </div>
          </motion.div>
          <div className={styles.section2Right}>
            <div className={styles.section2NumberBg}>2</div>
            <div
              className={styles.section2Text}
              style={{ position: "relative" }}
            >
              <h2 className={styles.section2Title}>
                밀도를 낮춰야
                <br />
                생착률은 높아집니다.
              </h2>

              {/* SVG 일러스트 추가 */}
              <div className={reoperationStyles.section2SvgContainer}>
                <img
                  src="/hair-transplant/reoperation/illustration-1.svg"
                  alt="재수술과 흉터이식 일러스트 1"
                  className={reoperationStyles.section2SvgImage}
                />
              </div>

              <p className={styles.section2Description}>
                흉터에는 혈관이 부족해서 생착률이 떨어지기 때문에
                <br />
                밀도를 많이 낮춰서 심는게 좋습니다.
                <br />
                <br />
                오랜 경험과 시간으로
                <br />
                밀도있는 모발을 만들어 드릴 수 있게 되었으니
                <br />
                이제 안심하셔도 됩니다.
              </p>

              {/* 절대 위치 SVG - 텍스트 영역 내부에 배치 */}
              <div className={reoperationStyles.section2Svg2}>
                <img
                  src="/hair-transplant/reoperation/illustration-2.svg"
                  alt="재수술과 흉터이식 일러스트 2"
                  className={reoperationStyles.section2SvgImage}
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
                수술 경험을 쌓는 건
                <br />
                오래 걸립니다.
              </h2>
              <p className={styles.section3Description}>
                재수술과 흉터 이식은 매일 할 수 있는 수술이 아닙니다.
                <br />
                그만큼 경험이 쌓이는 데 오래 걸리죠.
                <br />
                <br />
                지금의 모습보다 반드시 나아질 수 있다는
                <br />
                자신감으로 재수술과 흉터 수술을 해왔습니다.
                <br />
                <br />
                가리고 싶은 모습 때문에 오랜 시간 힘들어했던 분들이
                <br />
                좋아해 주시는 모습을 보면 밥을 안 먹어도 배부릅니다.
                <br />
                <br />더 활짝 웃으시는 모습을 위해 자만하지 않고 항상
                노력하겠습니다.
              </p>
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
                src="/hair-transplant/reoperation/reoperation-4.png"
                alt="재수술과 흉터이식 결과 이미지"
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
            <div className={styles.beforeAfterCategory}>재수술</div>
            <h2 className={styles.beforeAfterTitle}>전후사진 보기</h2>
          </div>
          <div className={styles.beforeAfterSliderWrapper}>
            <div className={styles.beforeAfterSlider}>
              <BeforeAfterSlider
                beforeImage="/hair-transplant/reoperation/slide/before.jpg"
                afterImage="/hair-transplant/reoperation/slide/after.jpg"
                beforeAlt="재수술 전"
                afterAlt="재수술 후"
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
                    alt="재수술 특징 1"
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
                    alt="재수술 특징 2"
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
                    alt="재수술 특징 3"
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
                    alt="재수술 특징 4"
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
