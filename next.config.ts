import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  // Vanilla Extract 최적화 설정
  identifiers: process.env.NODE_ENV === 'development' ? 'debug' : 'short',
});

const nextConfig: NextConfig = {
  output: 'standalone',
  productionBrowserSourceMaps: false, // 프로덕션 소스맵 비활성화
  eslint: {
    ignoreDuringBuilds: true, // 빌드 시 ESLint 무시
  },
  // 프로덕션에서 콘솔 로그 제거
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // hydration 안정성 설정
  experimental: {
    optimizeCss: false, // CSS 최적화 비활성화로 hydration 안정성 확보
  },
  // Webpack 설정 - HMR 개선
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // 파일 변경 감지 개선
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules/,
        poll: 1000,
        aggregateTimeout: 300,
      };

      // 개발 환경에서 캐시 비활성화
      config.cache = false;
    }
    return config;
  },
  // 이미지 최적화 설정
  images: {
    unoptimized: false, // 이미지 최적화 활성화
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'banalps.vizensoft.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'player.vimeo.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
          },
        ],
      },
      // 이미지 최적화 캐싱
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // 동영상 최적화 캐싱
      {
        source: '/:path*\\.(mp4|webm|ogg|avi|mov)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
      // Vimeo 동영상 프리페치
      {
        source: '/api/video/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
