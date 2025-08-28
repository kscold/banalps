import HeaderNavigation from '@/widgets/Header/HeaderNavigation'
import HeroSection from '@/widgets/Hero/HeroSection'

export default function Home() {
  console.log('[HomePage/렌더링] 메인 페이지 렌더링 시작')
  
  return (
    <main>
      <HeaderNavigation />
      <HeroSection />
    </main>
  )
}
