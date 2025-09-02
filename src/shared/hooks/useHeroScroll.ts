import { useState, useEffect } from "react"

export interface UseHeroScrollReturn {
  currentTextIndex: number
  showVideoSection: boolean
  showBlueSection: boolean
  enableNormalScroll: boolean
  transitionToVideoFromBlue: () => void
}

export function useHeroScroll(): UseHeroScrollReturn {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [showVideoSection, setShowVideoSection] = useState(false)
  const [showBlueSection, setShowBlueSection] = useState(false)
  const [enableNormalScroll, setEnableNormalScroll] = useState(false)

  const totalTexts = 6

  // 블루섹션에서 비디오로 전환하는 함수
  const transitionToVideoFromBlue = () => {
    console.log("[useHeroScroll/전환함수] 블루섹션에서 비디오로 전환 시작")
    setShowBlueSection(false)
    setShowVideoSection(true)
    setEnableNormalScroll(false)
    console.log("[useHeroScroll/전환완료] 블루섹션 → 비디오 전환 완료")
  }

  useEffect(() => {
    console.log("[useHeroScroll/초기화] Hero 스와이프/스크롤 훅 초기화 완료")

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout | null = null
    let lastScrollTime = 0
    const scrollDebounceTime = 1000 // 스크롤 간격을 1초로 설정 (딱딱 끊어지는 느낌)

    const handleWheel = (e: WheelEvent) => {
      // 블루섹션이 표시된 상태에서의 스크롤 처리
      if (showBlueSection) {
        // 일반 스크롤이 비활성화된 경우 활성화
        if (!enableNormalScroll) {
          setEnableNormalScroll(true)
          console.log("[useHeroScroll/블루섹션] 일반 스크롤 활성화")
        }

        // 블루섹션에서는 위로 스크롤시 비디오 전환만 처리
        if (e.deltaY < 0) {
          // 위로 스크롤할 때 비디오 전환은 별도 useBlueScroll에서 처리
          console.log("[useHeroScroll/블루섹션] 위 스크롤 - useBlueScroll에서 처리")
        }

        // 블루섹션 내부에서는 완전 자유 스크롤 허용
        console.log("[useHeroScroll/휠이벤트] 블루섹션 - 완전 자유 스크롤 허용")
        return
      }

      // 일반 스크롤 모드에서는 기본 동작 허용
      if (enableNormalScroll) {
        console.log(
          "[useHeroScroll/휠이벤트] 일반 스크롤 모드 - 기본 동작 허용"
        )
        return
      }

      e.preventDefault() // 비디오/텍스트 스크롤 시에만 방지

      // 스크롤 디바운싱 체크 (딱딱 끊어지는 스크롤)
      const currentTime = Date.now()
      if (currentTime - lastScrollTime < scrollDebounceTime) {
        console.log("[useHeroScroll/휠이벤트] 스크롤 디바운싱 - 무시")
        return
      }

      console.log(
        `[useHeroScroll/휠이벤트] showVideoSection: ${showVideoSection}, showBlueSection: ${showBlueSection}, isScrolling: ${isScrolling}, deltaY: ${e.deltaY}`
      )

      // 이미 스크롤 중이면 무시
      if (isScrolling) {
        console.log("[useHeroScroll/휠이벤트] 스크롤 중 - 무시")
        return
      }

      const deltaY = e.deltaY

      // 최소 스크롤 임계값 설정 (너무 작은 움직임 무시)
      if (Math.abs(deltaY) < 30) {
        console.log("[useHeroScroll/휠이벤트] 임계값 미달 - 무시")
        return
      }

      // 스크롤 잠금 및 시간 기록
      isScrolling = true
      lastScrollTime = currentTime

      // 스크롤 방향에 따라 처리
      if (deltaY > 0) {
        // 아래로 스크롤
        if (enableNormalScroll) {
          // 일반 스크롤 모드에서는 그대로 진행
          return
        } else if (showBlueSection) {
          // 파란색 섹션에서 추가 스크롤 시 일반 스크롤 활성화
          setEnableNormalScroll(true)
          console.log("[useHeroScroll/휠다운] 파란색 섹션 → 일반 스크롤 활성화")
        } else if (showVideoSection && !showBlueSection) {
          // 비디오 섹션에서 추가 스크롤 시 파란색 섹션 표시
          setShowBlueSection(true)
          console.log("[useHeroScroll/휠다운] 비디오 섹션 → 파란색 섹션 표시")
        } else if (!showVideoSection && !showBlueSection) {
          setCurrentTextIndex((prevIndex) => {
            console.log(
              `[useHeroScroll/휠다운] 현재 index: ${prevIndex}, deltaY: ${deltaY}`
            )

            if (prevIndex < totalTexts - 1) {
              // 다음 텍스트로 이동 (0→1→2→3→4→5)
              const newIndex = prevIndex + 1
              console.log(
                `[useHeroScroll/다음텍스트] ${prevIndex} → ${newIndex}`
              )
              return newIndex
            } else if (prevIndex === totalTexts - 1) {
              // 마지막 텍스트(5)에서 추가 스크롤 시 비디오로
              setTimeout(() => {
                setShowVideoSection(true)
                console.log(
                  "[useHeroScroll/비디오전환] 마지막 텍스트에서 비디오로 전환"
                )
              }, 300)
              return prevIndex
            }
            return prevIndex
          })
        }
      } else if (deltaY < 0) {
        // 위로 스크롤
        if (showBlueSection && !enableNormalScroll) {
          // 파란색 섹션에서 위로 스크롤 시 비디오로 복귀
          setShowBlueSection(false)
          console.log("[useHeroScroll/휠업] 파란색 섹션 → 비디오 섹션")
        } else if (showVideoSection && !showBlueSection) {
          // 비디오에서 마지막 텍스트로 복귀
          setShowVideoSection(false)
          setCurrentTextIndex(totalTexts - 1) // 마지막 텍스트로 설정
          console.log(
            `[useHeroScroll/비디오복귀] 비디오 → 마지막 텍스트(${
              totalTexts - 1
            })`
          )
        } else if (!showVideoSection && !showBlueSection) {
          setCurrentTextIndex((prevIndex) => {
            console.log(
              `[useHeroScroll/휠업] 현재 index: ${prevIndex}, deltaY: ${deltaY}`
            )

            if (prevIndex > 0) {
              // 이전 텍스트로 이동
              const newIndex = prevIndex - 1
              console.log(
                `[useHeroScroll/이전텍스트] ${prevIndex} → ${newIndex}`
              )
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

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault()
        isScrolling = true

        if (e.key === "ArrowDown") {
          setCurrentTextIndex((prevIndex) => {
            console.log(`[useHeroScroll/키보드다운] 현재 index: ${prevIndex}`)

            if (prevIndex < totalTexts - 1) {
              // 다음 텍스트로 이동
              const newIndex = prevIndex + 1
              console.log(
                `[useHeroScroll/키보드다음] ${prevIndex} → ${newIndex}`
              )
              return newIndex
            } else if (prevIndex === totalTexts - 1) {
              // 마지막 텍스트에서 비디오로
              setTimeout(() => {
                setShowVideoSection(true)
                console.log(
                  "[useHeroScroll/키보드비디오] 마지막 텍스트에서 비디오로 전환"
                )
              }, 0)
              return prevIndex
            }
            return prevIndex
          })
        } else if (e.key === "ArrowUp") {
          if (showVideoSection) {
            // 비디오에서 마지막 텍스트로
            setShowVideoSection(false)
            setCurrentTextIndex(totalTexts - 1) // 마지막 텍스트로 설정
            console.log(
              `[useHeroScroll/키보드비디오복귀] 비디오 → 마지막 텍스트(${
                totalTexts - 1
              })`
            )
          } else {
            setCurrentTextIndex((prevIndex) => {
              console.log(`[useHeroScroll/키보드업] 현재 index: ${prevIndex}`)

              if (prevIndex > 0) {
                // 이전 텍스트로
                const newIndex = prevIndex - 1
                console.log(
                  `[useHeroScroll/키보드이전] ${prevIndex} → ${newIndex}`
                )
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
          setCurrentTextIndex((prevIndex) => {
            console.log(`[useHeroScroll/스와이프업] 현재 index: ${prevIndex}`)

            if (prevIndex < totalTexts - 1) {
              // 다음 텍스트로
              const newIndex = prevIndex + 1
              console.log(
                `[useHeroScroll/스와이프다음] ${prevIndex} → ${newIndex}`
              )
              return newIndex
            } else if (prevIndex === totalTexts - 1) {
              // 마지막 텍스트에서 비디오로
              setTimeout(() => {
                setShowVideoSection(true)
                console.log(
                  "[useHeroScroll/스와이프비디오] 마지막 텍스트에서 비디오로 전환"
                )
              }, 0)
              return prevIndex
            }
            return prevIndex
          })
        } else if (deltaY < 0) {
          // 아래로 스와이프 (이전으로)
          if (showVideoSection) {
            setShowVideoSection(false)
            setCurrentTextIndex(totalTexts - 1) // 마지막 텍스트로 설정
            console.log(
              `[useHeroScroll/스와이프비디오복귀] 비디오 → 마지막 텍스트(${
                totalTexts - 1
              })`
            )
          } else {
            setCurrentTextIndex((prevIndex) => {
              console.log(
                `[useHeroScroll/스와이프다운] 현재 index: ${prevIndex}`
              )

              if (prevIndex > 0) {
                // 이전 텍스트로
                const newIndex = prevIndex - 1
                console.log(
                  `[useHeroScroll/스와이프이전] ${prevIndex} → ${newIndex}`
                )
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
  }, [showVideoSection, showBlueSection, enableNormalScroll])

  return {
    currentTextIndex,
    showVideoSection,
    showBlueSection,
    enableNormalScroll,
    transitionToVideoFromBlue,
  }
}
