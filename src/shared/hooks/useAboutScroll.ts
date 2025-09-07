import { useState, useEffect } from "react"

export interface UseAboutScrollReturn {
  showMainContent: boolean
}

export function useAboutScroll(): UseAboutScrollReturn {
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
    console.log("[useAboutScroll/초기화] About 스크롤 훅 초기화 완료")

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout | null = null
    let lastScrollTime = 0
    const scrollDebounceTime = 500 // 스크롤 간격을 500ms로 설정

    const handleWheel = (e: WheelEvent) => {
      // 메인 콘텐츠가 이미 표시된 상태에서는 일반 스크롤 허용
      if (showMainContent) {
        console.log("[useAboutScroll/휠이벤트] 메인 콘텐츠 표시 상태 - 일반 스크롤 허용")
        return
      }

      e.preventDefault() // 비디오 상태에서만 스크롤 방지

      // 스크롤 디바운싱 체크
      const currentTime = Date.now()
      if (currentTime - lastScrollTime < scrollDebounceTime) {
        console.log("[useAboutScroll/휠이벤트] 스크롤 디바운싱 - 무시")
        return
      }

      console.log(
        `[useAboutScroll/휠이벤트] showMainContent: ${showMainContent}, isScrolling: ${isScrolling}, deltaY: ${e.deltaY}`
      )

      // 이미 스크롤 중이면 무시
      if (isScrolling) {
        console.log("[useAboutScroll/휠이벤트] 스크롤 중 - 무시")
        return
      }

      const deltaY = e.deltaY

      // 최소 스크롤 임계값 설정 (너무 작은 움직임 무시)
      if (Math.abs(deltaY) < 30) {
        console.log("[useAboutScroll/휠이벤트] 임계값 미달 - 무시")
        return
      }

      // 스크롤 잠금 및 시간 기록
      isScrolling = true
      lastScrollTime = currentTime

      // 아래로 스크롤할 때만 메인 콘텐츠 표시
      if (deltaY > 0) {
        console.log("[useAboutScroll/휠다운] 비디오 → 메인 콘텐츠 전환")
        setShowMainContent(true)
      }

      // 이전 타이머가 있으면 취소
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // 스크롤 쿨다운
      scrollTimeout = setTimeout(() => {
        isScrolling = false
        scrollTimeout = null
      }, 300)
    }

    // 키보드 이벤트 처리 (아래 화살표)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling || showMainContent) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        isScrolling = true

        console.log("[useAboutScroll/키보드다운] 비디오 → 메인 콘텐츠 전환")
        setShowMainContent(true)

        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        scrollTimeout = setTimeout(() => {
          isScrolling = false
          scrollTimeout = null
        }, 300)
      }
    }

    // 터치 이벤트 처리
    let startY = 0
    let startX = 0

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
      startX = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling || showMainContent) return

      const endY = e.changedTouches[0].clientY
      const endX = e.changedTouches[0].clientX
      const deltaY = startY - endY
      const deltaX = Math.abs(startX - endX)

      console.log(`[useAboutScroll/터치] deltaY: ${deltaY}, deltaX: ${deltaX}`)

      // 세로 스와이프만 감지 (최소 50px 이동)
      if (Math.abs(deltaY) > 50 && deltaX < 100) {
        isScrolling = true
        e.preventDefault()

        if (deltaY > 0) {
          // 위로 스와이프 (다음으로)
          console.log("[useAboutScroll/스와이프업] 비디오 → 메인 콘텐츠 전환")
          setShowMainContent(true)
        }

        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        scrollTimeout = setTimeout(() => {
          isScrolling = false
          scrollTimeout = null
        }, 300)
      }
    }

    // 이벤트 리스너 등록
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [showMainContent])

  return {
    showMainContent,
  }
}