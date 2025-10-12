import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';
import '../shared/styles/global.css';
import ClientLayout from './ClientLayout';

// AuthChecker에서 useSearchParams를 사용하므로 force-dynamic 필요
// Main 페이지 캐싱은 Vercel Edge (vercel.json)와 브라우저 HTTP 캐싱으로 최적화
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: '--font-zen-kaku',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://banalps.com'),
  title: {
    default: '바날 성형외과 - 모발이식, 이마축소, 탈모치료',
    template: '%s | 바날 성형외과',
  },
  description: '절개, 비절개 모발이식, 이마축소, 탈모치료가 모두 가능한 성형외과 전문의 2인 진료.',
  keywords: [
    '바날',
    '바날성형외과',
    '모발이식',
    '절개모발이식',
    '비절개모발이식',
    '이마축소',
    '헤어라인',
    '헤어라인교정',
    '여성헤어라인',
    '여성모발이식',
    '여자모발이식',
    '남성헤어라인',
    '탈모치료',
    '여성탈모',
    '정수리탈모',
    '정수리이식',
    '흉터모발이식',
    '모발이식재수술',
    '이마축소재수술',
    '모발이식이마축소',
    '절개비절개',
    '절개비절개모발이식',
    '강남모발이식',
    '강남이마축소',
    '강남헤어라인',
    '강남헤어라인교정',
    '신사역모발이식',
    '신사역이마축소',
    '신사역헤어라인',
    '신사역헤어라인교정',
    '잠원동모발이식',
    '잠원동이마축소',
    '잠원동헤어라인',
    '잠원동헤어라인교정',
    '잠원동성형외과',
    '모발이식추천',
    '이마축소추천',
    '헤어라인추천',
    '모발이식고민',
    '이마축소고민',
    '카우릭',
    '카우릭교정',
    '소핥은머리',
    '모발이식생착률',
    '이마축소흉터',
    '모발이식통증',
    '이마축소통증',
    '모발이식견적',
    '모발이식모수',
    '모발이식밀도',
    '모발이식곱슬기',
    '모발이식곱슬머리',
    '자연스러운모발이식',
    '모발이식부작용',
    '이마축소부작용',
    '모발이식성형외과',
    '여성전문모발이식',
    '헤어라인디자인',
    'Banalps',
    'hair transplant',
    'FUE',
    'FUT',
    'hairline',
    'forehead reduction',
    '植毛',
    '切開植毛',
    '非切開植毛',
    'おでこ縮小',
    'ヘアライン',
  ],
  authors: [{ name: '바날성형외과' }],
  creator: '바날성형외과',
  publisher: '바날성형외과',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://banalps.com/',
    siteName: '바날 성형외과',
    title: '바날 성형외과 - 모발이식, 이마축소, 탈모치료',
    description: '절개, 비절개 모발이식, 이마축소, 탈모치료가 모두 가능한 성형외과 전문의 2인 진료.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '바날 성형외과 - 모발이식, 이마축소, 탈모치료',
    description: '절개, 비절개 모발이식, 이마축소, 탈모치료가 모두 가능한 성형외과 전문의 2인 진료.',
    site: '@banalps',
    creator: '@banalps',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Google Search Console
    other: {
      'naver-site-verification': 'your-naver-verification-code', // TODO: Naver Webmaster
      'yahoo-site-verification': 'your-yahoo-verification-code', // TODO: Yahoo Site Explorer (Japan)
    },
  },
  alternates: {
    canonical: 'https://banalps.com',
    languages: {
      'ko-KR': 'https://banalps.com',
      'ja-JP': 'https://banalps.com?lang=ja',
    },
  },
  other: {
    'Location': 'KR',
    'Distribution': 'Global',
    'copyright': 'Copyright © BANALPS CLINIC. All rights reserved.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* Browser Compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="imagetoolbar" content="no" />

        {/* SEO Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Multi-language Support */}
        <link rel="alternate" hrefLang="ko" href="https://banalps.com" />
        <link rel="alternate" hrefLang="ja" href="https://banalps.com?lang=ja" />
        <link rel="alternate" hrefLang="x-default" href="https://banalps.com" />

        {/* Google Schema.org */}
        <meta itemProp="name" content="바날 성형외과 - 모발이식, 이마축소, 탈모치료" />
        <meta itemProp="description" content="절개, 비절개 모발이식, 이마축소, 탈모치료가 모두 가능한 성형외과 전문의 2인 진료." />
        <meta itemProp="image" content="https://banalps.com/favicon.ico" />

        {/* Facebook/Open Graph Additional Tags */}
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale:alternate" content="ja_JP" />
        <meta property="og:author" content="바날성형외과" />
        <meta property="fb:app_id" content="" />

        {/* Naver Search Advisor */}
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />

        {/* Japan Search Engines */}
        <meta name="slurp" content="NOODP" />
        <meta name="msnbot" content="NOODP" />

        {/* Fonts */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

        {/* 히어로 비디오 고우선순위 프리로드 - 데스크탑 */}
        <link
          rel="preload"
          href="https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0"
          as="document"
        />
        {/* 히어로 비디오 고우선순위 프리로드 - 모바일 */}
        <link
          rel="preload"
          href="https://player.vimeo.com/video/1121423312?h=57761ea611&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0"
          as="document"
        />
        {/* VideoSection 비디오 낮은우선순위 프리페치 */}
        <link
          rel="prefetch"
          href="https://player.vimeo.com/video/1121423051?h=5c69b41058&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=0&controls=0"
          as="document"
        />
        <script src="https://player.vimeo.com/api/player.js" async></script>

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TR7SG47R');`,
          }}
        />

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              '@id': 'https://banalps.com',
              name: '바날 성형외과',
              alternateName: ['Banalps Plastic Surgery Clinic', 'バナル整形外科', '바날플라스틱서저리'],
              description: '절개, 비절개 모발이식, 이마축소, 탈모치료가 모두 가능한 성형외과 전문의 2인 진료',
              url: 'https://banalps.com',
              telephone: '+82-2-514-9100',
              email: 'info@banalps.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '66, Sinbanpo-ro 47-gil, Seocho-gu',
                addressLocality: 'Seoul',
                addressRegion: 'Seoul',
                postalCode: '06540',
                addressCountry: 'KR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.5020251,
                longitude: 127.0053534,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '10:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '16:00',
                },
              ],
              image: 'https://banalps.com/favicon.ico',
              priceRange: '$$',
              currenciesAccepted: 'KRW',
              paymentAccepted: ['Cash', 'Credit Card'],
              medicalSpecialty: ['PlasticSurgery', 'Dermatology'],
              availableService: [
                {
                  '@type': 'MedicalProcedure',
                  name: '모발이식 (절개/비절개)',
                  alternateName: ['Hair Transplant (FUE/FUT)', '植毛（切開/非切開）'],
                },
                {
                  '@type': 'MedicalProcedure',
                  name: '이마축소',
                  alternateName: ['Forehead Reduction', 'おでこ縮小'],
                },
                {
                  '@type': 'MedicalProcedure',
                  name: '두피치료',
                  alternateName: ['Scalp Treatment', '頭皮治療'],
                },
                {
                  '@type': 'MedicalProcedure',
                  name: '탈모치료',
                  alternateName: ['Hair Loss Treatment', '脱毛治療'],
                },
                {
                  '@type': 'MedicalProcedure',
                  name: '헤어라인교정',
                  alternateName: ['Hairline Correction', 'ヘアライン矯正'],
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '250',
              },
              sameAs: [
                // SNS URLs can be added here when available
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${zenKakuGothicNew.variable} antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TR7SG47R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
