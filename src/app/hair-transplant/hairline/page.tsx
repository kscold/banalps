"use client"

import HeaderNavigation from "../../../widgets/Header/HeaderNavigation"
import * as styles from "./HairlinePage.css"

export default function HairlinePage() {
  return (
    <div className={styles.hairlinePage}>
      <HeaderNavigation />

      {/* Hairline Hero Section */}
      <section className={styles.hairlineHeroSection}>
        <div className={styles.hairlineHeroContainer}>
          {/* Hero Illustration - 왼쪽에 붙도록 */}
          <div className={styles.hairlineHeroIllustration}>
            <img
              src="/hairline/hero-illustration.svg"
              alt="헤어라인 모발이식 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>

          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.hairlineHeroTitleContainer}>
            <h1 className={styles.hairlineHeroTitle}>
              <span>
                헤어라인
                <br />
                교정
                <div className={styles.hairlineHeroTitleDot} />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1: 얼굴 윤곽의 완성은 헤어라인입니다 */}
      <section className={styles.section1}>
        <div className={styles.section1Content}>
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
                  src="/hairline/illustration-1.svg"
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
                이마의 모양과 비율에 가장 알맞은 방법으로 얼굴의 마지막 윤곽을
                완성합니다.
              </p>
            </div>
          </div>
          <div className={styles.section1Right}>
            {/* 대형 이미지 - 오른쪽 상단 */}
            <div className={styles.section1Image1}>
              <img
                src="/hairline/hairline-2.png"
                alt="헤어라인 페이지 이미지 1"
                className={styles.section1ImageContent}
              />
            </div>
            {/* 소형 이미지 - 왼쪽 하단 */}
            <div className={styles.section1Image2}>
              <img
                src="/hairline/hairline-1.png"
                alt="헤어라인 페이지 이미지 2"
                className={styles.section1ImageContent}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 헤어라인 모발이식 */}
      <section className={styles.section2}>
        <div className={styles.section2Content}>
          <div className={styles.section2Left}>
            <div className={styles.section2Image}>
              <img
                src="/hairline/hairline-3.png"
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
                "헤어라인 교정만 10년을 하면서
                <br />
                자연스럽게 만드는 최적의 접점을 찾았습니다."
                <br />
                <br />
                이제 빼곡하면서 자연스러운 헤어라인도
                <br />
                불가능하지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 수술 결과 */}
      <section className={styles.section3}>
        <div className={styles.section3Content}>
          <div className={styles.section3Left}>
            <div className={styles.section3NumberBg}>3</div>
            <div className={styles.section3Text}>
              <h2 className={styles.section3Title}>
                결국,
                <br />
                고객이 원하는 디자인이
                <br />
                좋은 디자인입니다.
              </h2>
              <p className={styles.section3Description}>
                의사만 만족하는 디자인은 결국 두 번 수술을 하게 됩니다. 고객이
                불편해 하는 부분을
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
              src="/hairline/illustration-2.svg"
              alt="헤어라인 일러스트 2"
              className={styles.section3CenterIllustrationImage}
            />
          </div>
          <div className={styles.section3Right}>
            <div className={styles.section3Image}>
              <img
                src="/hairline/hairline-4.png"
                alt="헤어라인 페이지 이미지 4"
                className={styles.section3ImageContent}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfterContent}>
          <h2 className={styles.beforeAfterTitle}>수술 전후 비교</h2>
          <div className={styles.beforeAfterImages}>
            <div className={styles.beforeAfterImage}>
              <div className={styles.beforeAfterLabel}>수술 전</div>
              <img
                src="/hairline/before.jpg"
                alt="수술 전"
                className={styles.beforeAfterImage}
              />
            </div>
            <div className={styles.beforeAfterImage}>
              <div className={styles.beforeAfterLabel}>수술 후</div>
              <img
                src="/hairline/after.jpg"
                alt="수술 후"
                className={styles.beforeAfterImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContent}>
          <h2 className={styles.featuresTitle}>헤어라인 모발이식의 특징</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featuresIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.featuresTitle}>자연스러운 헤어라인</h3>
              <p className={styles.featureText}>
                개인의 얼굴형과 이마 비율을 고려하여 가장 자연스러운 헤어라인을
                설계합니다.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featuresIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.featuresTitle}>정교한 1모발 이식</h3>
              <p className={styles.featureText}>
                1모발 단위로 정교하게 이식하여 자연스럽고 빼곡한 헤어라인을
                완성합니다.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featuresIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.featuresTitle}>영구적인 결과</h3>
              <p className={styles.featureText}>
                이식한 모발은 영구적으로 자라며, 자연스러운 헤어라인을
                유지합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
