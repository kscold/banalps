import { useState, useEffect } from "react"

export interface UseHeroScrollReturn {
  currentTextIndex: number
  showVideoSection: boolean
}

export function useHeroScroll(): UseHeroScrollReturn {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [showVideoSection, setShowVideoSection] = useState(false)

  const totalTexts = 6

  useEffect(() => {
    console.log("[useHeroScroll/초기화] Hero 스와이프/스크롤 훅 초기화 완료")

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout | null = null
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault() // 기본 스크롤 동작 방지
      
      // 이미 스크롤 중이면 무시
      if (isScrolling) return
      
      const deltaY = e.deltaY
      
      // 최소 스크롤 임계값 설정 (너무 작은 움직임 무시)
      if (Math.abs(deltaY) < 30) return
      
      // 스크롤 잠금
      isScrolling = true
      
      // 스크롤 방향에 따라 처리
      if (deltaY > 0) {
        // 아래로 스크롤
        setCurrentTextIndex(prevIndex => {
          console.log(`[useHeroScroll/휠다운] 현재 index: ${prevIndex}, deltaY: ${deltaY}`)
          
          if (prevIndex < totalTexts - 1) {
            // 다음 텍스트로 이동 (0→1→2→3→4→5)
            const newIndex = prevIndex + 1
            console.log(`[useHeroScroll/다음텍스트] ${prevIndex} → ${newIndex}`)
            return newIndex
          } else if (prevIndex === totalTexts - 1) {
            // 마지막 텍스트(5)에서 추가 스크롤 시 비디오로
            setTimeout(() => {
              setShowVideoSection(true)
              console.log("[useHeroScroll/비디오전환] 마지막 텍스트에서 비디오로 전환")
            }, 0)
            return prevIndex
          }
          return prevIndex
        })
      } else if (deltaY < 0) {
        // 위로 스크롤
        if (showVideoSection) {
          // 비디오에서 마지막 텍스트로 복귀
          setShowVideoSection(false)
          console.log(`[useHeroScroll/비디오복귀] 비디오 → 마지막 텍스트(${totalTexts - 1})`)
        } else {
          setCurrentTextIndex(prevIndex => {
            console.log(`[useHeroScroll/휠업] 현재 index: ${prevIndex}, deltaY: ${deltaY}`)
            
            if (prevIndex > 0) {
              // 이전 텍스트로 이동
              const newIndex = prevIndex - 1
              console.log(`[useHeroScroll/이전텍스트] ${prevIndex} → ${newIndex}`)
              return newIndex
            }
            return prevIndex
          })
        }
      }
      
      // 이전 타이머가 있으면 취소
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      
      // 스크롤 쿨다운 (더 긴 시간으로 설정)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
        scrollTimeout = null
      }, 800) // 300ms에서 800ms로 증가
    }

    // 키보드 이벤트 처리 (위/아래 화살표)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        isScrolling = true
        
        if (e.key === 'ArrowDown') {
          setCurrentTextIndex(prevIndex => {
            console.log(`[useHeroScroll/키보드다운] 현재 index: ${prevIndex}`)
            
            if (prevIndex < totalTexts - 1) {
              // 다음 텍스트로 이동
              const newIndex = prevIndex + 1
              console.log(`[useHeroScroll/키보드다음] ${prevIndex} → ${newIndex}`)
              return newIndex
            } else if (prevIndex === totalTexts - 1) {
              // 마지막 텍스트에서 비디오로
              setTimeout(() => {
                setShowVideoSection(true)
                console.log("[useHeroScroll/키보드비디오] 마지막 텍스트에서 비디오로 전환")
              }, 0)
              return prevIndex
            }
            return prevIndex
          })
        } else if (e.key === 'ArrowUp') {
          if (showVideoSection) {
            // 비디오에서 마지막 텍스트로
            setShowVideoSection(false)
            console.log(`[useHeroScroll/키보드비디오복귀] 비디오 → 마지막 텍스트(${totalTexts - 1})`)
          } else {
            setCurrentTextIndex(prevIndex => {
              console.log(`[useHeroScroll/키보드업] 현재 index: ${prevIndex}`)
              
              if (prevIndex > 0) {
                // 이전 텍스트로
                const newIndex = prevIndex - 1
                console.log(`[useHeroScroll/키보드이전] ${prevIndex} → ${newIndex}`)
                return newIndex
              }
              return prevIndex
            })
          }
        }
        
        // 키보드도 동일한 쿨다운 적용
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        scrollTimeout = setTimeout(() => {
          isScrolling = false
          scrollTimeout = null
        }, 800)
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
      if (isScrolling) return
      
      const endY = e.changedTouches[0].clientY
      const endX = e.changedTouches[0].clientX
      const deltaY = startY - endY
      const deltaX = Math.abs(startX - endX)

      console.log(`[useHeroScroll/터치] deltaY: ${deltaY}, deltaX: ${deltaX}`)

      // 세로 스와이프만 감지 (최소 50px 이동)
      if (Math.abs(deltaY) > 50 && deltaX < 100) {
        isScrolling = true
        e.preventDefault()
        
        if (deltaY > 0) {
          // 위로 스와이프 (다음으로)
          setCurrentTextIndex(prevIndex => {
            console.log(`[useHeroScroll/스와이프업] 현재 index: ${prevIndex}`)
            
            if (prevIndex < totalTexts - 1) {
              // 다음 텍스트로
              const newIndex = prevIndex + 1
              console.log(`[useHeroScroll/스와이프다음] ${prevIndex} → ${newIndex}`)
              return newIndex
            } else if (prevIndex === totalTexts - 1) {
              // 마지막 텍스트에서 비디오로
              setTimeout(() => {
                setShowVideoSection(true)
                console.log("[useHeroScroll/스와이프비디오] 마지막 텍스트에서 비디오로 전환")
              }, 0)
              return prevIndex
            }
            return prevIndex
          })
        } else if (deltaY < 0) {
          // 아래로 스와이프 (이전으로)
          if (showVideoSection) {
            setShowVideoSection(false)
            console.log(`[useHeroScroll/스와이프비디오복귀] 비디오 → 마지막 텍스트(${totalTexts - 1})`)
          } else {
            setCurrentTextIndex(prevIndex => {
              console.log(`[useHeroScroll/스와이프다운] 현재 index: ${prevIndex}`)
              
              if (prevIndex > 0) {
                // 이전 텍스트로
                const newIndex = prevIndex - 1
                console.log(`[useHeroScroll/스와이프이전] ${prevIndex} → ${newIndex}`)
                return newIndex
              }
              return prevIndex
            })
          }
        }
        
        // 터치도 동일한 쿨다운 적용
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        scrollTimeout = setTimeout(() => {
          isScrolling = false
          scrollTimeout = null
        }, 800)
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
  }, [])

  return {
    currentTextIndex,
    showVideoSection,
  }
}
