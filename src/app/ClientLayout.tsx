"use client";

import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import HeaderNavigation from "@/widgets/Header/HeaderNavigation";
import { Footer } from "@/shared/ui/Footer";
import { FloatingButtonGroup } from "@/features/floating-button";
import LoginModal from "@/shared/components/LoginModal/LoginModal";
import AuthChecker from "@/components/AuthChecker";

// 내부 레이아웃 컴포넌트
function InnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const handleFloatingButtonClick = (variant: string) => {
    console.log(`[Layout] ${variant} 플로팅 버튼 클릭됨`);
    switch (variant) {
      case "naver":
        window.open("https://www.naver.com", "_blank");
        break;
      case "kakao":
        window.open("https://www.kakaocorp.com", "_blank");
        break;
      case "youtube":
        window.open("https://www.youtube.com", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com", "_blank");
        break;
    }
  };

  return (
    <>
      <AuthChecker />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderNavigation />
        <main style={{ flex: "1" }}>{children}</main>
        {pathname !== "/" && <Footer />}
      </div>
      <FloatingButtonGroup onButtonClick={handleFloatingButtonClick} />
      <LoginModal />
    </>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <InnerLayout>{children}</InnerLayout>
    </SessionProvider>
  );
}
