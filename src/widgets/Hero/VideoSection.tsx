"use client"

import { motion, AnimatePresence } from "framer-motion"
import ScrollVideo from "@/widgets/ScrollVideo/ScrollVideo"

import * as styles from "./HeroSection.css"

interface VideoSectionProps {
  showVideoSection: boolean
}

export function VideoSection({ showVideoSection }: VideoSectionProps) {
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
          <ScrollVideo 
            vimeoId="1101740070"
            className={styles.vimeoContainer}
          />
        </motion.section>
      )}
    </AnimatePresence>
  )
}
