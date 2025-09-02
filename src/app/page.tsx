"use client"

import HeaderNavigation from "@/widgets/Header/HeaderNavigation"
import HeroSection from "@/widgets/Hero/HeroSection"
import BanalIntroSection from "@/widgets/BanalIntroSection"
import { FloatingButtonGroup } from "@/features/floating-button"

export default function Home() {
  console.log("[HomePage/렌더링] 메인 페이지 렌더링 시작")

  const handleFloatingButtonClick = (variant: string) => {
    console.log(`[HomePage] ${variant} 플로팅 버튼 클릭됨`)

    // 각 버튼별 동작 정의
    switch (variant) {
      case "naver":
        window.open("https://www.naver.com", "_blank")
        break
      case "kakao":
        window.open("https://www.kakaocorp.com", "_blank")
        break
      case "youtube":
        window.open("https://www.youtube.com", "_blank")
        break
      case "instagram":
        window.open("https://www.instagram.com", "_blank")
        break
      default:
        break
    }
  }

  return (
    <main>
      <HeaderNavigation />
      <HeroSection />
      <BanalIntroSection />

      {/* Figma 디자인 기반 플로팅 버튼 그룹 */}
      <FloatingButtonGroup onButtonClick={handleFloatingButtonClick} />
    </main>
  )
}
