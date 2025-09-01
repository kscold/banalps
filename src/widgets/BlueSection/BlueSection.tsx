"use client"

import { useEffect, useState } from "react"
import * as styles from "./BlueSection.css"

export default function BlueSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    console.log("[BlueSection/마운트] 블루 섹션 컴포넌트 마운트")
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // 의료진 정보
  const doctors = [
    { name: "Shin Seung gyu", title: "대표원장" },
    { name: "Park Soo Ho", title: "대표원장" },
    { name: "Kim Narae", title: "대표원장" },
    { name: "의료진 4", title: "원장" },
  ]

  return (
    <section
      className={`${styles.blueSection} ${isVisible ? styles.visible : ""}`}
    >
      {/* 이미지 카드 섹션 - Figma 정확 반영 */}
      <div className={styles.imageCardsSection}>
        {/* 이미지 카드 1 */}
        <div className={styles.imageCard1}>
          <img
            src="/main/shot/shot1.png"
            alt="Shin Seung gyu"
            className={styles.cardImage}
          />
        </div>

        {/* 이미지 카드 2 */}
        <div className={styles.imageCard2}>
          <img
            src="/main/shot/shot2.png"
            alt="Park Soo Ho"
            className={styles.cardImage}
          />
        </div>

        {/* 이미지 카드 3 */}
        <div className={styles.imageCard3}>
          <img
            src="/main/shot/shot3.png"
            alt="Kim Narae"
            className={styles.cardImage}
          />
        </div>

        {/* 이미지 카드 4 */}
        <div className={styles.imageCard4}>
          <img
            src="/main/shot/shot4.png"
            alt="의료진 4"
            className={styles.cardImage}
          />
        </div>
      </div>

      {/* RE.YOU 텍스트 섹션 */}
      <div className={styles.reYouSection}>
        {/* 텍스트 콘텐츠 */}
        <h2 className={styles.reYouTitle}>RE.YOU</h2>
        <p className={styles.reYouSubtitle}>다시, 특별한 당신으로</p>

        {/* 그래피티 배경 이미지 */}
        <img
          src="/main/banal_graffiti.svg"
          alt="Banal Graffiti"
          className={styles.graffitiBackground}
        />
      </div>
    </section>
  )
}
