import { useState, useEffect } from "react"

export interface UseHeroScrollReturn {
  currentTextIndex: number
  allTextsShown: boolean
  showVideoSection: boolean
}

export function useHeroScroll(): UseHeroScrollReturn {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [allTextsShown, setAllTextsShown] = useState(false)
  const [showVideoSection, setShowVideoSection] = useState(false)

  const totalTexts = 6

  useEffect(() => {
    console.log("[useHeroScroll/초기화] Hero 스크롤 훅 초기화 완료")

    const handleScroll = () => {
      const scrollY = window.scrollY
      console.log(`[useHeroScroll/스크롤] scrollY: ${scrollY}`)

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
      console.log(`[useHeroScroll/텍스트인덱스] current index: ${newIndex}`)

      // 모든 텍스트가 표시되었는지 확인
      if (newIndex === totalTexts - 1) {
        setAllTextsShown(true)
        console.log("[useHeroScroll/완료] 모든 텍스트 표시 완료")

        // 모든 텍스트가 표시된 후 바로 비디오 섹션 활성화
        setShowVideoSection(true)
        console.log("[useHeroScroll/비디오] 비디오 섹션 즉시 활성화")
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // 초기 호출

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    currentTextIndex,
    allTextsShown,
    showVideoSection,
  }
}
