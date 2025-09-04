"use client"

import HeaderNavigation from "@/widgets/Header/HeaderNavigation"
import { Footer } from "@/shared/ui/Footer"
import { FloatingButtonGroup } from "@/features/floating-button"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const handleFloatingButtonClick = (variant: string) => {
    console.log(`[Layout] ${variant} 플로팅 버튼 클릭됨`)
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
    }
  }

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderNavigation />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
      </div>
      <FloatingButtonGroup onButtonClick={handleFloatingButtonClick} />
    </>
  )
}