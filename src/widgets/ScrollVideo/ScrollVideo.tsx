"use client"

import { useRef, useEffect, useState } from "react"
import { useScroll } from "framer-motion"

import * as styles from "./ScrollVideo.css"

interface ScrollVideoProps {
  vimeoId: string
  className?: string
}

export default function ScrollVideo({ vimeoId, className }: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [player, setPlayer] = useState<any>(null)
  const playerReadyRef = useRef(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Vimeo Player 초기화
  useEffect(() => {
    let isMounted = true

    const initPlayer = async () => {
      // Vimeo API 스크립트 로드
      if (!window.Vimeo) {
        const script = document.createElement("script")
        script.src = "https://player.vimeo.com/api/player.js"
        document.body.appendChild(script)
        
        await new Promise<void>((resolve) => {
          script.onload = () => resolve()
        })
      }

      // Player 인스턴스 생성
      if (iframeRef.current && isMounted) {
        const vimeoPlayer = new window.Vimeo.Player(iframeRef.current)
        
        // Player 준비 완료 대기
        vimeoPlayer.on('loaded', async () => {
          console.log("[ScrollVideo] Video loaded")
          
          // 음소거 및 일시정지
          await vimeoPlayer.setVolume(0)
          await vimeoPlayer.pause()
          await vimeoPlayer.setCurrentTime(0)
          
          playerReadyRef.current = true
          setPlayer(vimeoPlayer)
        })
      }
    }

    initPlayer()

    return () => {
      isMounted = false
    }
  }, [])

  // 스크롤에 따른 비디오 재생
  useEffect(() => {
    if (!player || !playerReadyRef.current) return

    let lastTime = -1

    const handleScroll = async () => {
      try {
        const progress = scrollYProgress.get()
        const duration = await player.getDuration()
        const targetTime = progress * duration

        // 동일한 시간이면 스킵
        if (Math.abs(targetTime - lastTime) < 0.01) return
        
        lastTime = targetTime
        await player.setCurrentTime(targetTime)
      } catch (error) {
        // 에러 무시
      }
    }

    const unsubscribe = scrollYProgress.on("change", handleScroll)
    
    // 초기값 설정
    handleScroll()

    return () => {
      unsubscribe()
    }
  }, [player, scrollYProgress])

  return (
    <div 
      ref={containerRef}
      className={`${styles.scrollVideoContainer} ${className || ""}`}
    >
      <div className={styles.videoWrapper}>
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${vimeoId}?background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0`}
          className={styles.video}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}