"use client"

import { useEffect, useState } from "react"
import HeaderNavigation from "../../../widgets/Header/HeaderNavigation"
import { ArrowButton } from "../../../shared/ui/ArrowButton"
import * as styles from "./HairlinePage.css"

export default function HairlinePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.hairlinePage}>
      <HeaderNavigation />

      {/* Hairline Hero Section */}
      <section className={styles.hairlineHeroSection}>
        <div className={styles.hairlineHeroBackground}>
          <div className={styles.hairlineHeroSVG}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1920 1080"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <rect width="1920" height="1080" fill="#73D5FA" />

              {/* Graffiti Pattern */}
              <g opacity="0.15">
                <path
                  d="M100 200C200 100 300 150 400 200C500 250 600 200 700 250C800 300 900 250 1000 300C1100 350 1200 300 1300 350C1400 400 1500 350 1600 400C1700 450 1800 400 1900 450"
                  stroke="#272727"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M50 400C150 350 250 400 350 450C450 500 550 450 650 500C750 550 850 500 950 550C1050 600 1150 550 1250 600C1350 650 1450 600 1550 650C1650 700 1750 650 1850 700"
                  stroke="#272727"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="300" cy="300" r="50" fill="#272727" opacity="0.1" />
                <circle cx="800" cy="500" r="80" fill="#272727" opacity="0.1" />
                <circle
                  cx="1400"
                  cy="400"
                  r="60"
                  fill="#272727"
                  opacity="0.1"
                />
              </g>

              {/* Main Content Area */}
              <g transform="translate(960, 540)">
                <text
                  x="0"
                  y="-50"
                  textAnchor="middle"
                  className={styles.hairlineHeroTitle}
                >
                  헤어라인 모발이식
                </text>
                <text
                  x="0"
                  y="20"
                  textAnchor="middle"
                  className={styles.hairlineHeroDescription}
                >
                  자연스럽고 아름다운 헤어라인을 만들어
                </text>
                <text
                  x="0"
                  y="50"
                  textAnchor="middle"
                  className={styles.hairlineHeroDescription}
                >
                  당신의 자신감을 되찾아드립니다
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Hairline Info Section */}
      <section className={styles.hairlineInfoSection}>
        <div className={styles.hairlineInfoContent}>
          <div className={styles.hairlineInfoText}>
            <h2 className={styles.hairlineInfoTitle}>헤어라인 모발이식이란?</h2>
            <p className={styles.hairlineInfoDescription}>
              헤어라인 모발이식은 이마와 머리카락 경계선을 자연스럽게 만들어주는
              시술입니다.
              <br />
              개인의 얼굴형과 헤어스타일에 맞춰 최적의 헤어라인을 설계하고,
              <br />
              미세한 모발을 이식하여 자연스러운 결과를 얻을 수 있습니다.
            </p>
            <div className={styles.hairlineInfoFeatures}>
              <div className={styles.hairlineFeature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="#73D5FA"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.hairlineFeatureTitle}>
                    자연스러운 각도
                  </h3>
                  <p className={styles.hairlineFeatureDescription}>
                    개인의 얼굴형에 맞는 최적의 헤어라인 각도 설계
                  </p>
                </div>
              </div>
              <div className={styles.hairlineFeature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="#73D5FA"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.hairlineFeatureTitle}>
                    미세한 모발 이식
                  </h3>
                  <p className={styles.hairlineFeatureDescription}>
                    1-2개 모발 단위의 정밀한 이식으로 자연스러운 밀도 구현
                  </p>
                </div>
              </div>
              <div className={styles.hairlineFeature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="#73D5FA"
                    />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.hairlineFeatureTitle}>
                    개인 맞춤 설계
                  </h3>
                  <p className={styles.hairlineFeatureDescription}>
                    환자의 얼굴형과 선호도에 맞는 헤어라인 디자인
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hairlineInfoImage}>
            <div className={styles.hairlineImageContainer}>
              <div className={styles.hairlineImagePlaceholder}>
                <div className={styles.hairlineImageContent}>
                  <div className={styles.hairlineImageTitle}>
                    헤어라인 모발이식
                  </div>
                  <div className={styles.hairlineImageSubtitle}>
                    자연스러운 결과
                  </div>
                  <div className={styles.hairlineImageDescription}>
                    개인 맞춤형 헤어라인 설계로
                    <br />
                    완벽한 얼굴 비율을 만들어드립니다
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className={styles.procedureSection}>
        <div className={styles.procedureContent}>
          <h2 className={styles.procedureTitle}>헤어라인 모발이식 과정</h2>
          <div className={styles.procedureSteps}>
            <div className={styles.procedureStep}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>상담 및 설계</h3>
                <p className={styles.stepDescription}>
                  환자의 얼굴형과 선호도를 분석하여
                  <br />
                  최적의 헤어라인을 설계합니다
                </p>
              </div>
            </div>
            <div className={styles.procedureStep}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>모발 채취</h3>
                <p className={styles.stepDescription}>
                  후두부에서 건강한 모발을
                  <br />
                  정밀하게 채취합니다
                </p>
              </div>
            </div>
            <div className={styles.procedureStep}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>이식 및 마무리</h3>
                <p className={styles.stepDescription}>
                  설계된 헤어라인에 따라
                  <br />
                  모발을 정밀하게 이식합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsContent}>
          <h2 className={styles.resultsTitle}>헤어라인 모발이식 결과</h2>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={styles.resultImage}>
                <div className={styles.placeholderImage}>
                  <span>수술 전</span>
                </div>
              </div>
              <div className={styles.resultInfo}>
                <h3 className={styles.resultTitle}>수술 전</h3>
                <p className={styles.resultDescription}>
                  헤어라인이 후퇴하여 이마가 넓어 보이는 상태
                </p>
              </div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultImage}>
                <div className={styles.placeholderImage}>
                  <span>수술 후</span>
                </div>
              </div>
              <div className={styles.resultInfo}>
                <h3 className={styles.resultTitle}>수술 후</h3>
                <p className={styles.resultDescription}>
                  자연스럽고 아름다운 헤어라인으로
                  <br />
                  얼굴 비율이 개선된 상태
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2 className={styles.contactTitle}>헤어라인 모발이식 상담</h2>
          <p className={styles.contactDescription}>
            개인 맞춤 헤어라인 설계와 상담을 위해
            <br />
            지금 바로 예약하세요
          </p>
          <div className={styles.contactButtons}>
            <ArrowButton size="large" variant="primary">
              상담 예약
            </ArrowButton>
            <ArrowButton size="large" variant="secondary">
              전화 문의
            </ArrowButton>
          </div>
        </div>
      </section>
    </div>
  )
}
