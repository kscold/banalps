"use client"

import { motion, AnimatePresence } from "framer-motion"

import * as styles from "./HeroSection.css"

interface VideoSectionProps {
  showVideoSection: boolean
}

export function VideoSection({ showVideoSection }: VideoSectionProps) {
  const handleVimeoLoad = () => {
    try {
      console.log("[VideoSection/Vimeo로드] Vimeo 비디오 로드 완료")
    } catch (error) {
      console.error("[VideoSection/Vimeo에러] 비디오 로드 에러:", error)
    }
  }

  return (
    <AnimatePresence>
      {showVideoSection && (
        <motion.section
          key="video-section"
          className={styles.videoSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className={styles.vimeoContainer}>
            <iframe
              src="https://player.vimeo.com/video/1101740070?background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
              className={styles.vimeoIframe}
              style={{ border: "none" }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              onLoad={handleVimeoLoad}
              onError={() => {
                console.error("[VideoSection/Vimeo에러] iframe 로드 실패")
              }}
            />
          </div>
          <div className={styles.videoOverlay} style={{ pointerEvents: 'auto' }} />
        </motion.section>
      )}
    </AnimatePresence>
  )
}
