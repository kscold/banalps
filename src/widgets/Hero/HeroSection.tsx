"use client"

import { AnimatePresence } from "framer-motion"
import Image from "next/image"

import { useHeroScroll } from "../../shared/hooks/useHeroScroll"
import { TextContentRenderer } from "./TextContentRenderer"
import { VideoSection } from "./VideoSection"

import * as styles from "./HeroSection.css"

export default function HeroSection() {
  const { currentTextIndex, allTextsShown, showVideoSection } = useHeroScroll()

  return (
    <>
      {/* 스크롤 가능한 컨테이너 - Hero 섹션 높이 */}
      <div
        style={{
          height: allTextsShown ? "100vh" : "400vh", // 텍스트 완료 후 더 짧게 조정
          position: "relative",
        }}
      >
        {/* 첫 번째 섹션: bg_sky.jpg 배경 이미지 (고정) */}
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
              console.error(
                "[HeroSection/배경이미지에러] 배경 이미지 로드 실패"
              )
            }}
          />

          {/* 콘텐츠 */}
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              {/* AnimatePresence로 부드러운 전환 */}
              <AnimatePresence mode="wait">
                <TextContentRenderer currentTextIndex={currentTextIndex} />
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>

      {/* 두 번째 섹션: Vimeo 배경 비디오 - Hero 섹션과 같은 위치에 겹침 */}
      <VideoSection showVideoSection={showVideoSection} />
    </>
  )
}
