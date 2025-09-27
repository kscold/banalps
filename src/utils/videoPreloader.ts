// Video preloading and caching utility
export class VideoPreloader {
  private static instance: VideoPreloader;
  private preloadedVideos: Map<string, boolean> = new Map();
  private videoUrls: string[] = [
    // Hero section background video
    "https://player.vimeo.com/video/1121422984?h=1300c2acf1&autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0",
    // Main video section
    "https://player.vimeo.com/video/1121423051?h=5c69b41058&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=0&controls=0",
  ];

  private constructor() {}

  static getInstance(): VideoPreloader {
    if (!VideoPreloader.instance) {
      VideoPreloader.instance = new VideoPreloader();
    }
    return VideoPreloader.instance;
  }

  // Preload all videos
  async preloadAllVideos(): Promise<void> {
    console.log("[VideoPreloader] Starting video preload...");
    console.log("[VideoPreloader] Videos to preload:", this.videoUrls);
    
    const startTime = performance.now();
    const promises = this.videoUrls.map(url => this.preloadVideo(url));
    await Promise.all(promises);
    const endTime = performance.now();
    
    console.log(`[VideoPreloader] All videos preloaded in ${(endTime - startTime).toFixed(2)}ms`);
    console.log("[VideoPreloader] Preloaded videos:", Array.from(this.preloadedVideos.keys()));
  }

  // Preload a single video
  private async preloadVideo(url: string): Promise<void> {
    if (this.preloadedVideos.has(url)) {
      console.log(`[VideoPreloader] Video already preloaded: ${url.substring(0, 50)}...`);
      return;
    }

    try {
      // Create invisible iframe to trigger video loading
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.style.position = "absolute";
      iframe.style.width = "1px";
      iframe.style.height = "1px";
      iframe.style.opacity = "0";
      iframe.style.pointerEvents = "none";
      iframe.style.left = "-9999px";
      iframe.setAttribute("aria-hidden", "true");
      
      // Add to document to start loading
      document.body.appendChild(iframe);
      
      // Wait for load
      await new Promise<void>((resolve) => {
        const loadStartTime = performance.now();
        iframe.onload = () => {
          const loadTime = performance.now() - loadStartTime;
          console.log(`[VideoPreloader] ✓ Preloaded in ${loadTime.toFixed(2)}ms: ${url.substring(0, 50)}...`);
          this.preloadedVideos.set(url, true);
          
          // Remove iframe after a delay to ensure caching
          setTimeout(() => {
            if (iframe.parentNode) {
              document.body.removeChild(iframe);
            }
          }, 1000);
          
          resolve();
        };
        
        // Timeout after 10 seconds
        setTimeout(() => {
          console.warn(`[VideoPreloader] Timeout preloading: ${url.substring(0, 50)}...`);
          if (iframe.parentNode) {
            document.body.removeChild(iframe);
          }
          resolve();
        }, 10000);
      });
      
    } catch (error) {
      console.error(`[VideoPreloader] Error preloading video: ${url}`, error);
    }
  }

  // Add link prefetch tags for videos
  addPrefetchTags(): void {
    console.log("[VideoPreloader] Adding prefetch tags...");
    this.videoUrls.forEach(url => {
      // Check if prefetch tag already exists
      const existingLink = document.querySelector(`link[href="${url}"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = url;
        link.as = "document";
        document.head.appendChild(link);
        console.log(`[VideoPreloader] ✓ Added prefetch tag for: ${url.substring(0, 50)}...`);
      } else {
        console.log(`[VideoPreloader] ⚠ Prefetch tag already exists for: ${url.substring(0, 50)}...`);
      }
    });
  }

  // Check if video is preloaded
  isVideoPreloaded(url: string): boolean {
    return this.preloadedVideos.has(url);
  }
}

// Export singleton instance
export const videoPreloader = VideoPreloader.getInstance();