"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import * as styles from "./HeroSection.css"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    console.log("[HeroSection/초기화] Hero 섹션 마운트 완료")

    // 페이지 로드 후 텍스트 애니메이션 시작
    const timer = setTimeout(() => {
      setIsVisible(true)
      console.log("[HeroSection/애니메이션] 텍스트 애니메이션 시작:", true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleVimeoLoad = () => {
    try {
      console.log("[HeroSection/Vimeo로드] Vimeo 비디오 로드 완료")
    } catch (error) {
      console.error("[HeroSection/Vimeo에러] 비디오 로드 에러:", error)
    }
  }

  return (
    <>
      {/* 첫 번째 섹션: bg_sky.jpg 배경 이미지 */}
      <section className={styles.heroContainer}>
        <Image
          src="/main/background/bg_sky.jpg"
          alt="바날 성형외과 배경"
          fill
          priority
          className={styles.backgroundImageNext}
          onLoad={() => {
            console.log("[HeroSection/배경이미지로드] 배경 이미지 로드 완료")
          }}
          onError={() => {
            console.error("[HeroSection/배경이미지에러] 배경 이미지 로드 실패")
          }}
        />

        {/* 오버레이 */}
        <div className={styles.overlay} />

        {/* 콘텐츠 */}
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div
              className={`${styles.textBlock} ${
                isVisible ? styles.visible : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <p className={styles.storyText}>
                어느 밤, 침대에 기대앉아 아이들에게
                <br />
                그림책을 읽어 주고 있었습니다. 그리고 책장 한 귀퉁이에서 마주한
                문장.
              </p>
            </div>

            <div
              className={`${styles.quoteLine} ${
                isVisible ? styles.visible : ""
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <h1 className={styles.mainQuote}>
                "나는 바람 부는 날도 좋아요."
              </h1>
            </div>

            <div
              className={`${styles.textBlock} ${
                isVisible ? styles.visible : ""
              }`}
              style={{ animationDelay: "1.0s" }}
            >
              <p className={styles.storyText}>참 듣기 좋은 말이었습니다.</p>
            </div>

            <div
              className={`${styles.textBlock} ${
                isVisible ? styles.visible : ""
              }`}
              style={{ animationDelay: "1.4s" }}
            >
              <p className={styles.storyText}>
                힘든 순간이 있어도 괜찮아질 거라는
                <br />
                위로를 건네는 말 같았습니다.
              </p>
            </div>

            <div
              className={`${styles.textBlock} ${
                isVisible ? styles.visible : ""
              }`}
              style={{ animationDelay: "1.8s" }}
            >
              <p className={styles.storyText}>
                그리고 문득, 수술이 잘되어서 고맙다고 찾아오시는
                <br />
                분들의 그 말이 떠올랐습니다.
              </p>
            </div>

            <div
              className={`${styles.quoteLine} ${styles.finalQuote} ${
                isVisible ? styles.visible : ""
              }`}
              style={{ animationDelay: "2.2s" }}
            >
              <h2 className={styles.finalQuoteText}>
                "이제 바람 부는 날도 좋아요."
              </h2>
              <p className={styles.quoteSubtext}>
                이 말은 언제든 들어도 기분이 좋습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 두 번째 섹션: Vimeo 배경 비디오 */}
      <section className={styles.videoSection}>
        <div className={styles.vimeoContainer}>
          <iframe
            src="https://player.vimeo.com/video/1101740070?background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
            className={styles.vimeoIframe}
            style={{ border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            onLoad={handleVimeoLoad}
            onError={() => {
              console.error("[HeroSection/Vimeo에러] iframe 로드 실패")
            }}
          />
        </div>

        {/* 비디오 섹션 오버레이 */}
        <div className={styles.videoOverlay} />
      </section>
    </>
  )
}
