"use client"

import { useEffect, useState } from "react"
import HeaderNavigation from "../../widgets/Header/HeaderNavigation"
import BlueSection from "../../widgets/BlueSection/BlueSection"
import { VideoSection } from "../../widgets/Hero/VideoSection"
import { ArrowButton } from "../../shared/ui/ArrowButton"
import * as styles from "./AboutPage.css"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    console.log("[AboutPage/마운트] About 페이지 마운트")
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.aboutPage}>
      <HeaderNavigation />

      {/* Video Section */}
      <VideoSection showVideoSection={true} />

      {/* About Hero Section */}
      <section className={styles.aboutHeroSection}>
        <div className={styles.aboutHeroBackground}>
          <img
            src="/main/banal_graffiti.svg"
            alt="Banal Graffiti"
            className={styles.aboutHeroGraffiti}
          />
        </div>
        <div className={styles.aboutHeroContent}>
          <div className={styles.aboutHeroText}>
            <h1 className={styles.aboutHeroMainTitle}>
              &apos;평범한 일상을 새로운 일상으로 이어주는 곳&apos;
            </h1>
            <h2 className={styles.aboutHeroSubTitle}>
              바람부는날에도 성형외과의원
            </h2>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2 className={styles.missionTitle}>
              우리의
              <br />
              미션
            </h2>
            <p className={styles.missionDescription}>
              바날은 단순한 모발 이식이 아닌, 당신의 새로운 시작을 돕습니다.
              <br />
              <br />
              자신감 있는 모습으로 일상을 살아갈 수 있도록,
              <br />
              최고의 기술과 진심 어린 마음으로 함께하겠습니다.
            </p>
          </div>
          <div className={styles.missionImage}>
            <div className={styles.placeholderImage}>
              <span>미션 이미지</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContent}>
          <h2 className={styles.valuesTitle}>바날의 가치</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <span>💎</span>
              </div>
              <h3 className={styles.valueTitle}>품질</h3>
              <p className={styles.valueDescription}>
                최고의 기술과 장비로
                <br />
                완벽한 결과를 추구합니다
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <span>🤝</span>
              </div>
              <h3 className={styles.valueTitle}>신뢰</h3>
              <p className={styles.valueDescription}>
                투명한 상담과 정직한
                <br />
                가격으로 신뢰를 쌓습니다
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <span>❤️</span>
              </div>
              <h3 className={styles.valueTitle}>배려</h3>
              <p className={styles.valueDescription}>
                환자 한 분 한 분을
                <br />
                소중히 여기는 마음입니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Section 재사용 */}
      <BlueSection />

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2 className={styles.contactTitle}>
            바날과 함께
            <br />
            새로운 시작하세요
          </h2>
          <p className={styles.contactDescription}>
            전문의와의 상담을 통해
            <br />
            당신에게 맞는 최적의 솔루션을 찾아보세요
          </p>
          <div className={styles.contactButtons}>
            <ArrowButton size="large" variant="primary">
              상담 예약하기
            </ArrowButton>
            <ArrowButton size="large" variant="secondary">
              전화 문의하기
            </ArrowButton>
          </div>
        </div>
      </section>
    </div>
  )
}
