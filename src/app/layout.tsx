import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";
import "../shared/styles/global.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "바날 성형외과 - 모발이식 전문 클리닉",
  description:
    "바날 성형외과는 모발이식, 이마축소, 두피치료 전문 클리닉입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/fonts/SCDream-fonts.css" />

        {/* Vimeo 최적화 - 캐싱 및 프리로딩 */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://f.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://i.vimeocdn.com" />

        {/* 비디오 프리로드 */}
        <link
          rel="prefetch"
          href="https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0"
          as="document"
        />
        <link
          rel="prefetch"
          href="https://player.vimeo.com/video/1121423051?h=5c69b41058&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=0&controls=0"
          as="document"
        />
        <script src="https://player.vimeo.com/api/player.js" async></script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
