'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import HeaderNavigation from '@/widgets/Header/HeaderNavigation';
import { Footer } from '@/shared/ui/Footer';
import { FloatingButtonGroup } from '@/features/floating-button';
import LoginModal from '@/shared/components/LoginModal/LoginModal';
import AuthChecker from '@/components/AuthChecker';
import ClientOnly from '@/components/ClientOnly';
import { registerServiceWorker } from '@/utils/registerServiceWorker';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import PopupManager from '@/components/PopupManager';

// 내부 레이아웃 컴포넌트
function InnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { language } = useLanguageStore();

  // 관리자 페이지 여부 확인
  const isAdminPage = pathname?.startsWith('/admin');

  // Service Worker 등록
  useEffect(() => {
    registerServiceWorker();
  }, []);

  // HTML에 언어 데이터 속성 설정
  useEffect(() => {
    document.documentElement.setAttribute('data-language', language);
  }, [language]);
  const handleFloatingButtonClick = (variant: string) => {
    // 플로팅 버튼 클릭 처리
    switch (variant) {
      case 'naver':
        window.open('https://www.naver.com', '_blank');
        break;
      case 'kakao':
        window.open('https://www.kakaocorp.com', '_blank');
        break;
      case 'youtube':
        window.open('https://www.youtube.com', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com', '_blank');
        break;
    }
  };

  // 관리자 페이지는 서비스 레이아웃 없이 순수하게 렌더링
  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      <AuthChecker />
      <HeaderNavigation />
      <FloatingButtonGroup onButtonClick={handleFloatingButtonClick} />
      <LoginModal />
      <PopupManager />
      <main className="main-content">{children}</main>
      {pathname !== '/' && pathname !== '/about' && (
        <ClientOnly>
          <Footer />
        </ClientOnly>
      )}
    </>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <InnerLayout>{children}</InnerLayout>
    </SessionProvider>
  );
}
