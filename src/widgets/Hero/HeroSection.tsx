"use client"

import { useState, useEffect } from "react"

import { TextContentRenderer } from "./TextContentRenderer"
import { useVideoPreloader } from "@/utils/videoOptimizer"

import * as styles from "./HeroSection.css"
import { useMediaQuery } from "@/shared/hooks/useMediaQuery"

interface HeroSectionProps {
  onTextComplete?: () => void
  initialTextIndex?: number
  isActive?: boolean
}

export default function HeroSection({
  initialTextIndex = 0,
  onTextComplete,
  isActive = true,
}: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(initialTextIndex)
  const [virtualScrollY, setVirtualScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false) // 전환 중 플래그
  const totalTexts = 5 // 텍스트 개수 5개로 변경

  // 모바일 감지
  const isMobile = useMediaQuery("screen and (max-width: 1023px)")

  // 동영상 최적화 적용
  const videoConfig = useVideoPreloader("HERO_BACKGROUND")

  // 클라이언트 사이드 렌더링 확인
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 텍스트 스크롤 로직 - KB사이트처럼 깊이 기반 전환
  useEffect(() => {
    if (!isActive) return

    // 모바일에서는 스크롤 깊이를 줄여서 빠른 전환 (Android 환경 최적화)
    const textScrollDepth = isMobile ? 500 : 2000 // 모바일: 500px (충분한 텍스트 전환 시간), 데스크톱: 2000px
    const totalScrollHeight = textScrollDepth * totalTexts // 전체 스크롤 높이
    let scrollY = virtualScrollY

    // 이벤트를 통과시킬지 확인하는 함수
    const shouldPassThrough = (target: HTMLElement): boolean => {
      // z-index가 50 이상인 요소들 (헤더, 플로팅 버튼, 모달 등)은 모두 통과
      let element: HTMLElement | null = target
      while (element && element !== document.body) {
        const zIndex = window.getComputedStyle(element).zIndex
        if (zIndex !== "auto" && parseInt(zIndex) >= 50) {
          return true // 높은 z-index를 가진 요소는 통과
        }

        // 또한 특정 클래스를 가진 요소들도 통과
        if (
          element.closest("header") ||
          element.closest('[class*="header"]') ||
          element.closest('[class*="Header"]') ||
          element.closest('[class*="floating"]') ||
          element.closest('[class*="Float"]') ||
          element.closest('[class*="modal"]') ||
          element.closest('[class*="Modal"]') ||
          element.closest('[class*="dropdown"]') ||
          element.closest('[class*="Dropdown"]') ||
          element.closest('[class*="menu"]') ||
          element.closest('[class*="Menu"]') ||
          element.closest('[class*="nav"]') ||
          element.closest('[class*="Nav"]')
        ) {
          return true
        }
        element = element.parentElement as HTMLElement
      }
      return false
    }

    const handleWheel = (e: WheelEvent) => {
      // HeroSection이 활성화되어 있고, 실제로 스크롤 영역 내에 있을 때만 preventDefault
      if (!isActive) return

      // 텍스트 선택 중인지 확인
      const selection = window.getSelection()
      if (selection && selection.toString().length > 0) {
        return // 텍스트 선택 중에는 스크롤 처리하지 않음
      }

      // 터치 대상이 헤더나 플로팅 버튼이 아닌 경우에만 처리
      const target = e.target as HTMLElement
      if (shouldPassThrough(target)) {
        return // 헤더나 플로팅 버튼, 메뉴는 통과
      }

      const deltaY = e.deltaY

      // 마지막 텍스트에 도달했고 아래로 스크롤 시 이벤트 통과 (영역 간 스크롤 허용)
      if (
        currentTextIndex === totalTexts - 1 &&
        scrollY >= totalScrollHeight - textScrollDepth * 0.1 &&
        deltaY > 0
      ) {
        // 이벤트를 통과시켜 페이지 스크롤이 일어나도록 함
        if (onTextComplete && !isTransitioning) {
          setIsTransitioning(true)
          setTimeout(() => {
            onTextComplete()
            setIsTransitioning(false)
          }, 300)
        }
        return // preventDefault 하지 않고 리턴
      }

      // 첫 번째 텍스트에서 위로 스크롤 시 이벤트 통과
      if (currentTextIndex === 0 && scrollY <= 0 && deltaY < 0) {
        return // preventDefault 하지 않고 리턴
      }

      e.preventDefault()
      e.stopPropagation() // 이벤트 버블링 방지

      // 스크롤 이벤트 처리
      const scrollSpeed = isMobile ? 4.5 : 1.0 // 모바일: 4.5 (Android 최적화), 데스크톱: 1.0 (더 느리게)
      scrollY += deltaY * scrollSpeed

      // 스크롤 범위 제한
      scrollY = Math.max(0, Math.min(scrollY, totalScrollHeight))
      setVirtualScrollY(scrollY)

      // 스크롤 위치에 따른 텍스트 인덱스 계산
      const newIndex = Math.floor(scrollY / textScrollDepth)
      const clampedIndex = Math.max(0, Math.min(newIndex, totalTexts - 1))

      // 텍스트 인덱스 업데이트
      setCurrentTextIndex(clampedIndex)
    }

    // 터치 이벤트 처리 - 스크롤 위치 기반
    let touchStartY = 0
    let touchStartScrollY = 0
    let isTouching = false

    const handleTouchStart = (e: TouchEvent) => {
      // 터치 대상이 헤더나 플로팅 버튼이면 통과
      const target = e.target as HTMLElement
      if (shouldPassThrough(target)) {
        return
      }

      touchStartY = e.touches[0].clientY
      touchStartScrollY = scrollY
      isTouching = true

      // 모바일에서 스크롤 방지
      e.preventDefault()
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching) return

      // 터치 대상이 헤더나 플로팅 버튼이면 통과
      const target = e.target as HTMLElement
      if (shouldPassThrough(target)) {
        isTouching = false
        return
      }

      const currentY = e.touches[0].clientY
      const deltaY = touchStartY - currentY

      // 마지막 텍스트에 도달했고 아래로 스크롤 시 이벤트 통과 (영역 간 스크롤 허용)
      if (
        currentTextIndex === totalTexts - 1 &&
        scrollY >= totalScrollHeight - textScrollDepth * 0.1 &&
        deltaY > 0
      ) {
        // 이벤트를 통과시켜 페이지 스크롤이 일어나도록 함
        if (onTextComplete && !isTransitioning) {
          setIsTransitioning(true)
          setTimeout(() => {
            onTextComplete()
            setIsTransitioning(false)
          }, 300)
        }
        isTouching = false
        return // preventDefault 하지 않고 리턴
      }

      // 첫 번째 텍스트에서 위로 스크롤 시 이벤트 통과
      if (currentTextIndex === 0 && scrollY <= 0 && deltaY < 0) {
        isTouching = false
        return // preventDefault 하지 않고 리턴
      }

      e.preventDefault() // 기본 스크롤 동작 방지

      // 모바일에서 드래그처럼 즉각적인 반응 (Android 환경 최적화)
      // 모바일은 감도를 높여서 짧은 드래그로도 텍스트 전환 (Galaxy21 최적화)
      const sensitivity = isMobile ? 10.0 : 2.5 // 모바일 감도 대폭 증가 (6.0 → 10.0)
      const newScrollY = touchStartScrollY + deltaY * sensitivity

      // 스크롤 범위 제한
      scrollY = Math.max(0, Math.min(newScrollY, totalScrollHeight))
      setVirtualScrollY(scrollY)

      // 스크롤 위치에 따른 텍스트 인덱스 계산
      const newIndex = Math.floor(scrollY / textScrollDepth)
      const clampedIndex = Math.max(0, Math.min(newIndex, totalTexts - 1))

      // 텍스트 인덱스 업데이트
      setCurrentTextIndex(clampedIndex)
    }

    const handleTouchEnd = () => {
      isTouching = false
    }

    window.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: false, // capture를 false로 변경하여 버블링 단계에서 처리
    })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: false })
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isActive, onTextComplete, totalTexts, virtualScrollY, isMobile, currentTextIndex, isTransitioning])

  // initialTextIndex가 변경되면 currentTextIndex 업데이트
  useEffect(() => {
    setCurrentTextIndex(initialTextIndex)
  }, [initialTextIndex])

  // 텍스트 인덱스 상태 관리

  // 가상 스크롤 진행률 계산 (텍스트 페이드용)
  // 모바일과 데스크톱에서 각각 다른 textScrollDepth 사용
  const textScrollDepth = isMobile ? 500 : 2000
  const scrollProgress = (virtualScrollY / (textScrollDepth * totalTexts)) * 100

  return (
    <>
      {/* 가상 스크롤 높이를 위한 더미 엘리먼트 (스크롤바 표시용) */}
      {isActive && (
        <div
          style={{
            height: `${totalTexts * 100}vh`,
            position: "absolute",
            width: "1px",
            pointerEvents: "none",
            opacity: 0,
          }}
          suppressHydrationWarning
        />
      )}

      <section className={styles.heroContainer} suppressHydrationWarning>
        {/* <Image
          src="/main/background/bg_sky.jpg"
          alt="바날 성형외과 배경"
          fill
          priority
          className={styles.backgroundImage}
          onLoad={() => {
            // 배경 이미지 로드 완료
          }}
          onError={() => {
            console.error("[HeroSection/배경이미지에러] 배경 이미지 로드 실패");
          }}
        /> */}

        <div className={styles.backgroundVideo}>
          {isClient && (
            <iframe
              title="vimeo-player"
              src={videoConfig.url}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "max(177.77vh, 100vw)", // 16:9 비율 유지하며 화면 꽉 채우기
                height: "max(56.25vw, 100vh)", // 16:9 비율 유지하며 화면 꽉 채우기
                transform: "translate(-50%, -50%)",
                border: "none",
                pointerEvents: "none", // iframe이 스크롤 이벤트를 차단하지 않도록
              }}
            />
          )}
        </div>

        {/* 콘텐츠 */}
        <div className={styles.contentWrapper}>
          <TextContentRenderer
            currentTextIndex={currentTextIndex}
            scrollProgress={scrollProgress / 100}
            isMobile={isMobile}
          />
        </div>
      </section>
    </>
  )
}
