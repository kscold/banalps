import FullPageMain from '@/components/FullPageMain';

// Vercel Edge Network 캐싱은 vercel.json 헤더 설정으로 처리
// - Main 페이지: Cache-Control: public, max-age=3600, s-maxage=3600
// - 비디오 프리로드: layout.tsx에서 Vimeo preconnect 처리
// - 브라우저 HTTP 캐싱으로 비디오 재방문 시 즉시 로드

export default function Home() {
  return <FullPageMain />;
}
