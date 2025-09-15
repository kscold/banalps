"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import HeaderNavigation from "../../../widgets/Header/HeaderNavigation"
import BeforeAfterSlider from "../../../shared/ui/BeforeAfterSlider"
import { ArrowButton } from "../../../shared/ui/ArrowButton"

import * as styles from "../../hair-transplant/HairTransplant.css"
import * as scarStyles from "./ScarReductionPage.css"

export default function ScarReductionPage() {
  console.log("[ScarReductionPage] 흉터축소 메인 페이지 렌더링")

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

  // Section3 이미지 애니메이션
  const { ref: section3ImageRef, inView: section3ImageInView } = useInView({
    threshold: 0.3, // 30% 보일 때 트리거
    triggerOnce: true, // 한 번만 실행
  })

  // Section 2 각 단계용 useInView
  const { ref: step1Ref, inView: step1InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { ref: step2Ref, inView: step2InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { ref: step3Ref, inView: step3InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { ref: step4Ref, inView: step4InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { ref: step5Ref, inView: step5InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { ref: step6Ref, inView: step6InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
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
              alt="이마축소 흉터 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>

          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.HairTransplantHeroTitleWrapper}>
            <div className={styles.HairTransplantHeroTitleContainer}>
              <h1 className={styles.HairTransplantHeroTitle}>
                <span>
                  이마축소
                  <br />
                  흉터 줄이는 법
                  <div className={styles.HairTransplantHeroTitleDot} />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className={scarStyles.scarSection1}>
        <div className={scarStyles.scarSection1Content}>
          <div className={scarStyles.scarSection1Left}>
            <div className={scarStyles.scarSection1Text}>
              <h2 className={scarStyles.scarSection1Title}>
                흉터를 줄이려면
                <br />
                장력을 줄여야 합니다.
              </h2>
              <p className={scarStyles.scarSection1Description}>
                이마축소 후 흉터선이 넓어지는 가장 큰 이유는 절개 부위에 걸리는
                장력이 크기 때문입니다.
                <br />
                <br />
                즉, 두피가 다시 뒤로 돌아가려는 힘이 클수록 흉터가 넓어질
                가능성이 커집니다.
                <br />
                <br />
                장력을 줄이기 위해서 진단에서부터 봉합까지 신경써야 할 것이
                많습니다.
              </p>
            </div>
          </div>
          <motion.div
            className={scarStyles.scarSection1Right}
            ref={section1ImagesRef}
            initial={{ opacity: 0, y: 80 }}
            animate={
              section1ImagesInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/forehead/scar-reduction/scar-reduction-1.png"
              alt="흉터축소 페이지 이미지"
              className={scarStyles.scarSection1Image}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: 진단부터 봉합까지의 과정 */}
      <section className={scarStyles.scarProcessSection}>
        <div className={scarStyles.scarProcessContent}>
          {/* Step 1: 진단 - 홀수 (숫자 왼쪽, 콘텐츠 오른쪽) */}
          <motion.div
            ref={step1Ref}
            className={scarStyles.processStepOdd}
            initial={{ translateY: 80, opacity: 0 }}
            animate={
              step1InView
                ? { translateY: 0, opacity: 1 }
                : { translateY: 80, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <div className={scarStyles.stepNumber}>
              <div className={scarStyles.stepNumberText}>1</div>
              <img
                src="/forehead/scar-reduction/scar-reduction-2.png"
                alt="진단 단계"
                className={scarStyles.stepImage}
              />
            </div>
            <div className={scarStyles.stepContent}>
              <div className={scarStyles.stepCategory}>진단</div>
              <h3 className={scarStyles.stepTitle}>
                두피의 특성을 정확히 파악해야
                <br />몇 cm를 내릴지 예상할 수 있어요.
              </h3>
              <p className={scarStyles.stepDescription}>
                두피의 탄력을 제대로 파악하지 못하면 예상한 만큼 이마를 줄이지
                못하거나 무리해서 당기면 흉터가 넓어지고, 전두부 모발이 빠지는
                동반탈락 현상이 생깁니다.
                <br />
                <br />
                성공적인 이마축소를 위해선 두피의 특성을 파악하는 것이
                중요합니다.
              </p>
            </div>
          </motion.div>

          {/* Step 2: 디자인 - 짝수 (콘텐츠 왼쪽, 숫자 오른쪽) */}
          <motion.div
            ref={step2Ref}
            className={scarStyles.processStepEven}
            initial={{ translateY: 80, opacity: 0 }}
            animate={
              step2InView
                ? { translateY: 0, opacity: 1 }
                : { translateY: 80, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <div className={scarStyles.stepContent}>
              <div className={scarStyles.stepCategory}>디자인</div>
              <h3 className={scarStyles.stepTitle}>
                단순히 이마를 줄이는 것보다
                <br />
                최종적인 헤어라인을 생각해야 합니다.
              </h3>
              <p className={scarStyles.stepDescription}>
                이마축소술 후 모발이식이 필요할지, 잔머리는 얼마나 살릴지, 기존
                모발 사이에 흉터는 어떻게 숨길지, 모발의 방향과 두께도 고려해서,
                절개선을 디자인합니다.
              </p>
            </div>
            <div className={scarStyles.stepNumber}>
              <div className={scarStyles.stepNumberText}>2</div>
              <img
                src="/forehead/scar-reduction/scar-reduction-3.png"
                alt="디자인 단계"
                className={scarStyles.stepImage}
              />
            </div>
          </motion.div>

          {/* Step 3: 절개 - 홀수 (숫자 왼쪽, 콘텐츠 오른쪽) */}
          <motion.div
            ref={step3Ref}
            className={scarStyles.processStepOdd}
            initial={{ translateY: 80, opacity: 0 }}
            animate={
              step3InView
                ? { translateY: 0, opacity: 1 }
                : { translateY: 80, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <div className={scarStyles.stepNumber}>
              <div className={scarStyles.stepNumberText}>3</div>
              <img
                src="/forehead/scar-reduction/scar-reduction-4.png"
                alt="절개 단계"
                className={scarStyles.stepImage}
              />
            </div>
            <div className={scarStyles.stepContent}>
              <div className={scarStyles.stepCategory}>절개</div>
              <h3 className={scarStyles.stepTitle}>
                흉터는 남습니다.
                <br />
                얼마나 잘 숨기는지가 중요하죠.
              </h3>
              <p className={scarStyles.stepDescription}>
                가느다란 선으로 남아있는 흉터는 기존의 모발과 잔머리를 이용하면
                더 잘 숨길 수 있습니다. 기존 모발과 잔머리를 고려한 절개선의
                위치 선정이 중요합니다.
              </p>
            </div>
          </motion.div>

          {/* Step 4: 건막절개 - 짝수 (콘텐츠 왼쪽, 숫자 오른쪽) */}
          <motion.div
            ref={step4Ref}
            className={scarStyles.processStepEven}
            initial={{ translateY: 80, opacity: 0 }}
            animate={
              step4InView
                ? { translateY: 0, opacity: 1 }
                : { translateY: 80, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <div className={scarStyles.stepContent}>
              <div className={scarStyles.stepCategory}>건막절개</div>
              <h3 className={scarStyles.stepTitle}>
                건막절개술은
                <br />
                이마축소의 핵심입니다.
              </h3>
              <p className={scarStyles.stepDescription}>
                건막절개술은 단단한 건막에 일정한 간격으로 절개선을 넣어 두피가
                충분히 늘어나도록 해주는 과정입니다. 건막절개 없는 단순한
                이마축소 보다 이마 높이를 1cm 이상 더 줄일 수 있습니다.
              </p>
            </div>
            <div className={scarStyles.stepNumber}>
              <div className={scarStyles.stepNumberText}>4</div>
              <img
                src="/forehead/scar-reduction/scar-reduction-5.png"
                alt="건막절개 단계"
                className={scarStyles.stepImage}
              />
            </div>
          </motion.div>

          {/* Step 5: 고정 - 홀수 (숫자 왼쪽, 콘텐츠 오른쪽) */}
          <motion.div
            ref={step5Ref}
            className={scarStyles.processStepOdd}
            initial={{ translateY: 80, opacity: 0 }}
            animate={
              step5InView
                ? { translateY: 0, opacity: 1 }
                : { translateY: 80, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <div className={scarStyles.stepNumber}>
              <div className={scarStyles.stepNumberText}>5</div>
              <img
                src="/forehead/scar-reduction/scar-reduction-6.png"
                alt="고정 단계"
                className={scarStyles.stepImage}
              />
            </div>
            <div className={scarStyles.stepContent}>
              <div className={scarStyles.stepCategory}>고정</div>
              <h3 className={scarStyles.stepTitle}>
                엔도타인은 가격 말고
                <br />
                단점이 없는 것 같아요.
              </h3>
              <p className={scarStyles.stepDescription}>
                당겨진 두피가 다시 올라가지 않도록 뼈에 단단히 고정해야 합니다.
                엔도타인이 두피를 최대한 당겨서 걸어줄 수 있고, 고정력도 더
                뛰어나다고 생각해서 엔도타인 방식을 고집합니다.
              </p>
            </div>
          </motion.div>

          {/* Step 6: 봉합 - 짝수 (콘텐츠 왼쪽, 숫자 오른쪽) */}
          <motion.div
            ref={step6Ref}
            className={scarStyles.processStepEven}
            initial={{ translateY: 80, opacity: 0 }}
            animate={
              step6InView
                ? { translateY: 0, opacity: 1 }
                : { translateY: 80, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <div className={scarStyles.stepContent}>
              <div className={scarStyles.stepCategory}>봉합</div>
              <h3 className={scarStyles.stepTitle}>
                피부봉합은
                <br />
                그냥 거들 뿐
              </h3>
              <p className={scarStyles.stepDescription}>
                피하 봉합이 끝나면, 아직 피부 봉합은 하지도 않았는데 절개선의
                피부면이 이미 딱 붙어있습니다. 피부에는 장력이 전혀 걸리지 않는
                거죠. 이제 피부의 가장자리를 매끈하게 맞춰 주기만 합니다.
              </p>
            </div>
            <div className={scarStyles.stepNumber}>
              <div className={scarStyles.stepNumberText}>6</div>
              <img
                src="/forehead/scar-reduction/scar-reduction-7.png"
                alt="봉합 단계"
                className={scarStyles.stepImage}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={scarStyles.scarSection3}>
        <div className={scarStyles.scarSection3Content}>
          <motion.div
            className={scarStyles.scarSection3Left}
            ref={section3ImageRef}
            initial={{ opacity: 0, y: 80 }}
            animate={
              section3ImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/forehead/scar-reduction/scar-reduction-8.png"
              alt="흉터축소 결과 이미지"
              className={scarStyles.scarSection3Image}
            />
          </motion.div>
          <div className={scarStyles.scarSection3Right}>
            <div className={scarStyles.scarSection3Text}>
              <h2 className={scarStyles.scarSection3Title}>
                겉과 속의 흉터
                <br />
                모두 적어야 합니다
              </h2>
              <p className={scarStyles.scarSection3Description}>
                이렇게 피부에 걸리는 장력을 없애주면
                <br />
                대부분의 흉터는 가느다란 실선으로 남습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContent}>
          <div className={styles.beforeAfterHeader}>
            <div className={styles.beforeAfterCategory}>흉터이식</div>
            <h2 className={styles.beforeAfterTitle}>모발이식 3000모</h2>
          </div>
          <div className={styles.beforeAfterSliderWrapper}>
            <div className={styles.beforeAfterSlider}>
              <BeforeAfterSlider
                beforeImage="/forehead/scar-reduction/slide/before.jpg"
                afterImage="/forehead/scar-reduction/slide/after.jpg"
                beforeAlt="흉터축소 전"
                afterAlt="흉터축소 후"
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
                    alt="흉터축소 특징 1"
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
                    alt="흉터축소 특징 2"
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
                    alt="흉터축소 특징 3"
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
                    alt="흉터축소 특징 4"
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
