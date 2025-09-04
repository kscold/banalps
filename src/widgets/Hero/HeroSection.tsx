"use client"

import { AnimatePresence } from "framer-motion"
import Image from "next/image"

import { useHeroScroll } from "../../shared/hooks/useHeroScroll"
import { TextContentRenderer } from "./TextContentRenderer"
import { VideoSection } from "./VideoSection"
import BlueSection from "../BlueSection"
import WhiteSection from "../WhiteSection/WhiteSection"

import * as styles from "./HeroSection.css"

export default function HeroSection() {
  const {
    currentTextIndex,
    showVideoSection,
    showBlueSection,
    enableNormalScroll,
    transitionToVideoFromBlue,
  } = useHeroScroll()

  return (
    <>
      {/* Hero 섹션 - 100vh 고정 */}
      <section className={styles.heroContainer}>
        <Image
          src="/main/background/bg_sky.jpg"
          alt="바날 성형외과 배경"
          fill
          priority
          className={styles.backgroundImage}
          onLoad={() => {
            console.log("[HeroSection/배경이미지로드] 배경 이미지 로드 완료")
          }}
          onError={() => {
            console.error("[HeroSection/배경이미지에러] 배경 이미지 로드 실패")
          }}
        />

        {/* 콘텐츠 */}
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <AnimatePresence mode="wait">
              <TextContentRenderer currentTextIndex={currentTextIndex} />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Video 섹션 */}
      <VideoSection showVideoSection={showVideoSection} />

      {/* Blue Section - 비디오 이후 스크롤 시 표시 */}
      {showBlueSection && (
        <>
          <div className={styles.blueSectionOverlay}>
            <BlueSection
              isActive={showBlueSection}
              onTransitionToVideo={transitionToVideoFromBlue}
            />
            <WhiteSection />
          </div>
        </>
      )}
    </>
  )
}
