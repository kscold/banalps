"use client"

import { motion } from "framer-motion"

import * as styles from "./HeroSection.css"

interface TextContentRendererProps {
  currentTextIndex: number
}

export function TextContentRenderer({
  currentTextIndex,
}: TextContentRendererProps) {
  const getCurrentText = () => {
    switch (currentTextIndex) {
      case 0:
        return (
          <motion.div
            key="text-0"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
              filter: "blur(2px)",
              x: 40,
            }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", x: 0 }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.9,
              filter: "blur(3px)",
              x: -20,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              어느 밤, 침대에 기대앉아 아이들에게
              <br />
              그림책을 읽어 주고 있었습니다. 그리고 책장 한 귀퉁이에서 마주한
              문장.
            </motion.p>
          </motion.div>
        )
      case 1:
        return (
          <motion.div
            key="text-1"
            className={styles.quoteLine}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
              filter: "blur(2px)",
              x: 40,
            }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", x: 0 }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.9,
              filter: "blur(3px)",
              x: -20,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            layout
          >
            <motion.h1
              className={styles.mainQuote}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              &quot;나는 바람 부는 날도 좋아요.&quot;
            </motion.h1>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="text-2"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
              filter: "blur(2px)",
              x: 40,
            }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", x: 0 }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.9,
              filter: "blur(3px)",
              x: -20,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              참 듣기 좋은 말이었습니다.
            </motion.p>
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            key="text-3"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
              filter: "blur(2px)",
              x: 40,
            }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", x: 0 }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.9,
              filter: "blur(3px)",
              x: -20,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              힘든 순간이 있어도 괜찮아질 거라는
              <br />
              위로를 건네는 말 같았습니다.
            </motion.p>
          </motion.div>
        )
      case 4:
        return (
          <motion.div
            key="text-4"
            className={styles.textBlock}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
              filter: "blur(2px)",
              x: 40,
            }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", x: 0 }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.9,
              filter: "blur(3px)",
              x: -20,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              그리고 문득, 수술이 잘되어서 고맙다고 찾아오시는
              <br />
              분들의 그 말이 떠올랐습니다.
            </motion.p>
          </motion.div>
        )
      case 5:
        return (
          <motion.div
            key="text-5"
            className={`${styles.quoteLine} ${styles.finalQuote}`}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
              filter: "blur(2px)",
              x: 40,
            }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", x: 0 }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.9,
              filter: "blur(3px)",
              x: -20,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            layout
          >
            <motion.h2
              className={styles.finalQuoteText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              &quot;이제 바람 부는 날도 좋아요.&quot;
            </motion.h2>
            <motion.p
              className={styles.quoteSubtext}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              이 말은 언제든 들어도 기분이 좋습니다.
            </motion.p>
          </motion.div>
        )
      case 6:
        // 비디오 섹션이 활성화될 때는 아무것도 표시하지 않음
        return null
      default:
        return null
    }
  }

  return getCurrentText()
}
