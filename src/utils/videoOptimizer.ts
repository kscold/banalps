import React from "react";

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
    if (typeof window !== "undefined") {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = `//${domain}`;
      document.head.appendChild(link);
    }
  }

  // Preload video iframe
  preloadVideo(config: VideoConfig): void {
    if (typeof window === "undefined" || this.preloadedVideos.has(config.id)) {
      return;
    }

    this.preloadedVideos.add(config.id);

    // DNS prefetch for Vimeo
    this.prefetchDNS("player.vimeo.com");

    // Create hidden iframe for preloading
    const iframe = document.createElement("iframe");
    iframe.src = config.url;
    iframe.style.display = "none";
    iframe.style.position = "absolute";
    iframe.style.left = "-9999px";
    iframe.style.width = "1px";
    iframe.style.height = "1px";

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
    id: "hero-background",
    url: "https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0",
    priority: true,
    preload: true,
  },
  HAIRLINE_HERO: {
    id: "hairline-hero",
    url: "https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0",
    priority: true,
    preload: true,
  },
  CROWN_HERO: {
    id: "crown-hero",
    url: "https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0",
    priority: true,
    preload: true,
  },
  INCISION_HERO: {
    id: "incision-hero",
    url: "https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0",
    priority: true,
    preload: true,
  },
  REOPERATION_HERO: {
    id: "reoperation-hero",
    url: "https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0",
    priority: true,
    preload: true,
  },
  FOREHEAD_HAIR_TRANSPLANT_HERO: {
    id: "forehead-hair-transplant-hero",
    url: "https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0",
    priority: true,
    preload: true,
  },
  SCAR_REDUCTION_HERO: {
    id: "scar-reduction-hero",
    url: "https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0",
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
      preloader.prefetchDNS("player.vimeo.com");

      // Delay preloading to avoid blocking initial page load
      const timeoutId = setTimeout(() => {
        preloader.preloadVideo(config);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [config]);

  return config;
}

// Utility for preloading all hero videos
export function preloadAllHeroVideos(): void {
  const preloader = VideoPreloader.getInstance();
  const heroConfigs = Object.values(VIDEO_CONFIGS).filter(
    (config) => config.priority
  );
  preloader.preloadMultipleVideos(heroConfigs);
}
