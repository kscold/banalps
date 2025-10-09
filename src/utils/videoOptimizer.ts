import React from 'react';

interface VideoConfig {
  id: string;
  url: string;
  priority?: boolean;
  preload?: boolean;
}

export class VideoPreloader {
  private static instance: VideoPreloader;
  private preloadedVideos: Set<string> = new Set();

  static getInstance(): VideoPreloader {
    if (!VideoPreloader.instance) {
      VideoPreloader.instance = new VideoPreloader();
    }
    return VideoPreloader.instance;
  }

  // DNS prefetching for video domains
  prefetchDNS(domain: string): void {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    }
  }

  // Preload video iframe
  preloadVideo(config: VideoConfig): void {
    if (typeof window === 'undefined' || this.preloadedVideos.has(config.id)) {
      return;
    }

    this.preloadedVideos.add(config.id);

    // DNS prefetch for Vimeo
    this.prefetchDNS('player.vimeo.com');

    // Create hidden iframe for preloading
    const iframe = document.createElement('iframe');
    iframe.src = config.url;
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.width = '1px';
    iframe.style.height = '1px';

    // Add to DOM for preloading
    document.body.appendChild(iframe);

    // Remove after a delay to avoid memory issues
    setTimeout(() => {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }, 5000);
  }

  // Preload multiple videos
  preloadMultipleVideos(configs: VideoConfig[]): void {
    configs.forEach((config) => {
      if (config.preload) {
        this.preloadVideo(config);
      }
    });
  }
}

// Video configurations for different pages
export const VIDEO_CONFIGS = {
  HERO_BACKGROUND: {
    id: 'hero-background',
    url: 'https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  HERO_MOBILE_BACKGROUND: {
    id: 'hero-mobile-background',
    url: 'https://player.vimeo.com/video/1121423312?h=57761ea611&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  VIDEO_SECTION_BACKGROUND: {
    id: 'video-section-background',
    url: 'https://player.vimeo.com/video/1121423051?h=5c69b41058&autoplay=1&muted=1&loop=0&background=1&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  VIDEO_SECTION_MOBILE_BACKGROUND: {
    id: 'video-section-mobile-background',
    url: 'https://player.vimeo.com/video/1121423284?h=c45022d051&autoplay=1&muted=1&loop=0&background=1&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_HERO_BACKGROUND: {
    id: 'scalp-treatment-hero-background',
    url: 'https://player.vimeo.com/video/1121423104?h=9505a82a8f&autoplay=1&muted=1&loop=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_HERO_MOBILE_BACKGROUND: {
    id: 'scalp-treatment-hero-mobile-background',
    url: 'https://player.vimeo.com/video/1121423185?h=71aaec567d&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_SECTION3_BACKGROUND: {
    id: 'scalp-treatment-section3-background',
    url: 'https://player.vimeo.com/video/1121423121?h=383908a6bd&autoplay=1&muted=1&loop=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_SECTION3_MOBILE_BACKGROUND: {
    id: 'scalp-treatment-section3-mobile-background',
    url: 'https://player.vimeo.com/video/1121423202?h=4ca40d5584&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_SECTION4_BACKGROUND: {
    id: 'scalp-treatment-section4-background',
    url: 'https://player.vimeo.com/video/1121423131?h=0371d1d722&autoplay=1&muted=1&loop=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_SECTION4_MOBILE_BACKGROUND: {
    id: 'scalp-treatment-section4-mobile-background',
    url: 'https://player.vimeo.com/video/1121423224?h=f8075aa099&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_SECTION5_BACKGROUND: {
    id: 'scalp-treatment-section5-background',
    url: 'https://player.vimeo.com/video/1121423150?h=ae4e69a9a3&autoplay=1&muted=1&loop=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_SECTION5_MOBILE_BACKGROUND: {
    id: 'scalp-treatment-section5-mobile-background',
    url: 'https://player.vimeo.com/video/1121423245?h=8cdcb86444&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_SECTION6_BACKGROUND: {
    id: 'scalp-treatment-section6-background',
    url: 'https://player.vimeo.com/video/1121423165?h=eb13c32221&autoplay=1&muted=1&loop=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
  SCALP_TREATMENT_SECTION6_MOBILE_BACKGROUND: {
    id: 'scalp-treatment-section6-mobile-background',
    url: 'https://player.vimeo.com/video/1121423260?h=8b00c9d78b&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0',
    priority: true,
    preload: true,
  },
} as const;

// Hook for video preloading
export function useVideoPreloader(pageType: keyof typeof VIDEO_CONFIGS) {
  const config = VIDEO_CONFIGS[pageType];

  React.useEffect(() => {
    if (config.preload) {
      const preloader = VideoPreloader.getInstance();
      preloader.prefetchDNS('player.vimeo.com');

      // Delay preloading to avoid blocking initial page load
      const timeoutId = setTimeout(() => {
        preloader.preloadVideo(config);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [config]);

  return config;
}

// Utility for preloading all hero videos
export function preloadAllHeroVideos(): void {
  const preloader = VideoPreloader.getInstance();
  const heroConfigs = Object.values(VIDEO_CONFIGS).filter((config) => config.priority);
  preloader.preloadMultipleVideos(heroConfigs);
}
