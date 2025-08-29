"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

import * as styles from "./HeroSection.css"

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [allTextsShown, setAllTextsShown] = useState(false)
  const [showVideoSection, setShowVideoSection] = useState(false)

  const totalTexts = 6

  // 각 텍스트 블록별 intersection observer
  const [text1Ref, text1InView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  const [text2Ref, text2InView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  const [text3Ref, text3InView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  const [text4Ref, text4InView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  const [text5Ref, text5InView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  const [text6Ref, text6InView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  // 스크롤 감지
  useEffect(() => {
    console.log("[HeroSection/초기화] Hero 섹션 마운트 완료")

    const handleScroll = () => {
      const scrollY = window.scrollY
      console.log(`[HeroSection/스크롤] scrollY: ${scrollY}`)

      // 스크롤 위치에 따른 텍스트 인덱스 결정 - 정확한 단계별 전환
      let newIndex = 0

      // 각 단계별로 명확한 구간 설정 (200px씩)
      if (scrollY >= 0 && scrollY < 200) newIndex = 0 // 첫 번째 텍스트
      else if (scrollY >= 200 && scrollY < 400) newIndex = 1 // 두 번째 텍스트
      else if (scrollY >= 400 && scrollY < 600) newIndex = 2 // 세 번째 텍스트
      else if (scrollY >= 600 && scrollY < 800) newIndex = 3 // 네 번째 텍스트
      else if (scrollY >= 800 && scrollY < 1000)
        newIndex = 4 // 다섯 번째 텍스트
      else if (scrollY >= 1000) newIndex = 5 // 여섯 번째 텍스트

      setCurrentTextIndex(newIndex)
      console.log(`[HeroSection/텍스트인덱스] current index: ${newIndex}`)

      // 모든 텍스트가 표시되었는지 확인
      if (newIndex === totalTexts - 1) {
        setAllTextsShown(true)
        console.log("[HeroSection/완료] 모든 텍스트 표시 완료")

        // 모든 텍스트가 표시된 후 추가 스크롤이 필요하면 비디오 섹션 활성화
        if (scrollY >= 1200) {
          // 1000px 이후에 비디오 섹션 활성화
          setShowVideoSection(true)
          console.log("[HeroSection/비디오] 비디오 섹션 활성화")
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // 초기 호출

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleVimeoLoad = () => {
    try {
      console.log("[HeroSection/Vimeo로드] Vimeo 비디오 로드 완료")
    } catch (error) {
      console.error("[HeroSection/Vimeo에러] 비디오 로드 에러:", error)
    }
  }

  // 현재 표시할 텍스트 결정
  const getCurrentText = () => {
    switch (currentTextIndex) {
      case 0:
        return (
          <motion.div
            key="text-0"
            ref={text1Ref}
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
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
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
            ref={text2Ref}
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
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            layout
          >
            <motion.h1
              className={styles.mainQuote}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              &quot;나는 바람 부는 날도 좋아요.&quot;
            </motion.h1>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="text-2"
            ref={text3Ref}
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
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              참 듣기 좋은 말이었습니다.
            </motion.p>
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            key="text-3"
            ref={text4Ref}
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
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
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
            ref={text5Ref}
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
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            layout
          >
            <motion.p
              className={styles.storyText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
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
            ref={text6Ref}
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
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            layout
          >
            <motion.h2
              className={styles.finalQuoteText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              &quot;이제 바람 부는 날도 좋아요.&quot;
            </motion.h2>
            <motion.p
              className={styles.quoteSubtext}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              이 말은 언제든 들어도 기분이 좋습니다.
            </motion.p>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <>
      {/* 스크롤 컨테이너 - Hero 섹션 높이 */}
      <div
        style={{
          height: allTextsShown ? "200vh" : "400vh", // 모든 텍스트 표시 후에도 충분한 스크롤 공간 확보
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
              <AnimatePresence mode="wait">{getCurrentText()}</AnimatePresence>
            </div>
          </div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            className={styles.scrollIndicator}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className={styles.scrollArrow}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
            <span className={styles.scrollText}>Scroll</span>
          </motion.div>
        </section>
      </div>

      {/* 두 번째 섹션: Vimeo 배경 비디오 - 모든 텍스트가 표시된 후에만 보임 */}
      {showVideoSection && (
        <motion.section
          className={styles.videoSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
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
                console.error("[HeroSection/Vimeo에러] iframe 로드 실패")
              }}
            />
          </div>

          {/* 비디오 섹션 오버레이 */}
          <div className={styles.videoOverlay} />
        </motion.section>
      )}
    </>
  )
}
