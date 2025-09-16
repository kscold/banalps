import HeroSection from "@/widgets/Hero/HeroSection"
import WhiteSection from "@/widgets/WhiteSection/WhiteSection"

export default function Home() {
  console.log("[HomePage/렌더링] 메인 페이지 렌더링 시작")

  return (
    <>
      <HeroSection />
      <WhiteSection />
    </>
  )
}
