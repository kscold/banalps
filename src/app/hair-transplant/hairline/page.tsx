"use client"

import { useState, useEffect } from "react"

import HeaderNavigation from "../../../widgets/Header/HeaderNavigation"
import * as styles from "./HairlinePage.css"

export default function HairlinePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
            <div className={styles.section1Text}>
              <h2 className={styles.section1Title}>
                얼굴 윤곽의 완성은
                <br />
                헤어라인입니다.
              </h2>
              <div className={styles.section1Image}>
                <img
                  src="/hairline/section1-illustration.jpg"
                  alt="헤어라인 일러스트"
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
            <div className={styles.section1Number}>1</div>
          </div>
          <div className={styles.section1Right}>
            <div className={styles.section1Images}>
              <div className={styles.section1Image1}>
                <img
                  src="/hairline/hairline-1.jpg"
                  alt="헤어라인 이미지 1"
                  className={styles.section1ImageContent}
                />
              </div>
              <div className={styles.section1Image2}>
                <img
                  src="/hairline/hairline-2-2.jpg"
                  alt="헤어라인 이미지 2"
                  className={styles.section1ImageContent}
                />
              </div>
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
                src="/hairline/image-10.jpg"
                alt="헤어라인 모발이식"
                className={styles.section2ImageContent}
              />
            </div>
          </div>
          <div className={styles.section2Right}>
            <div className={styles.section2Text}>
              <h2 className={styles.section2Title}>
                헤어라인
                <br />
                모발이식
              </h2>
              <p className={styles.section2Description}>
                헤어라인 모발이식은 이마가 넓어 보이거나 헤어라인이 후퇴한
                경우에
                <br />
                <br />
                자연스러운 헤어라인을 만들어 얼굴의 균형을 맞춰주는 수술입니다.
                <br />
                <br />
                개인의 얼굴형과 이마 비율을 고려하여 가장 자연스러운 헤어라인을
                <br />
                설계하고, 1모발 단위로 정교하게 이식하여 자연스러운 결과를
                얻습니다.
              </p>
            </div>
            <div className={styles.section2Number}>2</div>
          </div>
        </div>
      </section>

      {/* Section 3: 수술 결과 */}
      <section className={styles.section3}>
        <div className={styles.section3Content}>
          <div className={styles.section3Left}>
            <div className={styles.section3Text}>
              <h2 className={styles.section3Title}>
                자연스러운
                <br />
                헤어라인 완성
              </h2>
              <p className={styles.section3Description}>
                헤어라인 모발이식 후 6개월이 지나면 이식한 모발이 완전히 자라
                <br />
                <br />
                자연스럽고 빼곡한 헤어라인을 완성할 수 있습니다.
                <br />
                <br />
                개인의 얼굴형에 맞는 헤어라인으로 더욱 균형잡힌 얼굴 윤곽을
                <br />
                만들어드립니다.
              </p>
            </div>
            <div className={styles.section3Number}>3</div>
          </div>
          <div className={styles.section3Right}>
            <div className={styles.section3Image}>
              <img
                src="/hairline/dsc01814-1.jpg"
                alt="헤어라인 모발이식 결과"
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
