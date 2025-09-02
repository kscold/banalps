import { useState, useEffect } from "react"

export interface UseBlueScrollReturn {
  canTransitionToVideo: boolean
}

interface UseBlueScrollProps {
  isActive: boolean
  onTransitionToVideo: () => void
}

export function useBlueScroll({
  isActive,
  onTransitionToVideo,
}: UseBlueScrollProps): UseBlueScrollReturn {
  const [isAtTop, setIsAtTop] = useState(false)
  const [canTransitionToVideo, setCanTransitionToVideo] = useState(false)

  useEffect(() => {
    if (!isActive) {
      setIsAtTop(false)
      setCanTransitionToVideo(false)
      return
    }

    console.log("[useBlueScroll/초기화] 블루섹션 스크롤 훅 초기화 완료")

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout | null = null

    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop
      const blueSection = document.querySelector(
        '[class*="blueSection"]'
      ) as HTMLElement

      if (!blueSection) return

      const rect = blueSection.getBoundingClientRect()
      const isBlueAtTop = rect.top >= -5 && rect.top <= 5
      const isPageAtTop = currentScrollY <= 5

      // 블루섹션이 최상단에 있는지 체크
      if (isBlueAtTop && isPageAtTop) {
        if (!isAtTop) {
          setIsAtTop(true)
          console.log("[useBlueScroll/상태변경] 블루섹션 최상단 도달")
        }
      } else {
        if (isAtTop) {
          setIsAtTop(false)
          setCanTransitionToVideo(false)
          console.log("[useBlueScroll/상태리셋] 블루섹션 최상단 벗어남")
        }
      }
    }

    const handleWheel = (e: WheelEvent) => {
      // 블루섹션이 활성화되지 않았으면 무시
      if (!isActive) return

      // 위로 스크롤하는 경우만 처리
      if (e.deltaY >= 0) return

      // 이미 스크롤 중이면 무시
      if (isScrolling) return

      const currentScrollY = window.scrollY || document.documentElement.scrollTop
      const blueSection = document.querySelector(
        '[class*="blueSection"]'
      ) as HTMLElement

      if (!blueSection) return

      const rect = blueSection.getBoundingClientRect()
      const isBlueAtTop = rect.top >= -5 && rect.top <= 5
      const isPageAtTop = currentScrollY <= 5

      console.log(`[useBlueScroll/휠업] 
        rect.top: ${rect.top}
        scrollY: ${currentScrollY}
        블루최상단: ${isBlueAtTop}
        페이지최상단: ${isPageAtTop}
        현재최상단상태: ${isAtTop}
        전환가능: ${canTransitionToVideo}
        deltaY: ${e.deltaY}`)

      // 1단계: 최상단 도달 체크
      if (isBlueAtTop && isPageAtTop) {
        if (!isAtTop) {
          // 처음 최상단에 도달 - 상태만 변경
          setIsAtTop(true)
          setCanTransitionToVideo(true)
          console.log("[useBlueScroll/1단계] 최상단 도달 - 전환 준비 완료")
          return
        } else if (canTransitionToVideo) {
          // 2단계: 이미 최상단이고 전환 가능한 상태에서 추가 위 스크롤
          e.preventDefault()
          console.log("[useBlueScroll/2단계] 최상단에서 추가 위스크롤 → 비디오로 전환")
          
          // 스크롤 잠금
          isScrolling = true
          
          // 비디오로 전환
          onTransitionToVideo()
          
          // 상태 리셋
          setIsAtTop(false)
          setCanTransitionToVideo(false)
          
          if (scrollTimeout) clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            isScrolling = false
          }, 1000)
          
          return
        }
      } else {
        // 최상단이 아닌 경우 상태 리셋
        if (isAtTop || canTransitionToVideo) {
          setIsAtTop(false)
          setCanTransitionToVideo(false)
          console.log("[useBlueScroll/리셋] 최상단 벗어남 - 상태 리셋")
        }
      }
    }

    // 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("wheel", handleWheel, { passive: false })

    // 초기 상태 체크
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("wheel", handleWheel)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [isActive, isAtTop, canTransitionToVideo, onTransitionToVideo])

  return {
    canTransitionToVideo,
  }
}