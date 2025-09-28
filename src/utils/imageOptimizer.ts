import React from "react";

// 이미지 최적화 설정
export const IMAGE_OPTIMIZATION_CONFIG = {
  // Next.js Image 컴포넌트 설정
  formats: ["image/webp", "image/avif"] as const,
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

  // 품질 설정
  quality: 85, // 기본 품질 (0-100)

  // 지연 로딩 설정
  loading: "lazy" as const,

  // 우선순위 이미지 설정
  priority: false,
};

// 이미지 최적화 유틸리티 클래스
export class ImageOptimizer {
  private static instance: ImageOptimizer;
  private loadedImages: Set<string> = new Set();

  static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer();
    }
    return ImageOptimizer.instance;
  }

  // 이미지 사전 로딩
  preloadImage(src: string, priority: boolean = false): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loadedImages.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        this.loadedImages.add(src);
        resolve();
      };
      img.onerror = reject;

      // 우선순위가 높은 이미지는 즉시 로드
      if (priority) {
        img.src = src;
      } else {
        // 지연 로딩
        setTimeout(() => {
          img.src = src;
        }, 100);
      }
    });
  }

  // 여러 이미지 사전 로딩
  async preloadImages(
    images: Array<{ src: string; priority?: boolean }>
  ): Promise<void> {
    const promises = images.map(({ src, priority = false }) =>
      this.preloadImage(src, priority)
    );

    try {
      await Promise.allSettled(promises);
    } catch (error) {
      console.warn("일부 이미지 로딩 실패:", error);
    }
  }

  // 이미지 최적화된 URL 생성
  getOptimizedImageUrl(
    src: string,
    width?: number,
    height?: number,
    quality?: number
  ): string {
    const params = new URLSearchParams();

    if (width) params.set("w", width.toString());
    if (height) params.set("h", height.toString());
    if (quality) params.set("q", quality.toString());

    // WebP 포맷 우선
    params.set("f", "webp");

    return `${src}?${params.toString()}`;
  }
}

// 이미지 최적화 훅
export function useImageOptimizer() {
  const optimizer = React.useMemo(() => ImageOptimizer.getInstance(), []);

  const preloadImage = React.useCallback(
    (src: string, priority: boolean = false) => {
      return optimizer.preloadImage(src, priority);
    },
    [optimizer]
  );

  const preloadImages = React.useCallback(
    (images: Array<{ src: string; priority?: boolean }>) => {
      return optimizer.preloadImages(images);
    },
    [optimizer]
  );

  const getOptimizedUrl = React.useCallback(
    (src: string, width?: number, height?: number, quality?: number) => {
      return optimizer.getOptimizedImageUrl(src, width, height, quality);
    },
    [optimizer]
  );

  return {
    preloadImage,
    preloadImages,
    getOptimizedUrl,
  };
}

// 이미지 지연 로딩 컴포넌트
interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  style,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(priority);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // 50px 전에 미리 로드
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  return React.createElement(
    "div",
    {
      ref: imgRef,
      className: className,
      style: {
        ...style,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f0f0f0", // 로딩 중 배경색
      },
    },
    isInView &&
      React.createElement("img", {
        src: src,
        alt: alt,
        width: width,
        height: height,
        onLoad: handleLoad,
        onError: handleError,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        },
        loading: priority ? "eager" : "lazy",
      }),
    !isLoaded &&
      isInView &&
      React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
            fontSize: "14px",
          },
        },
        "로딩 중..."
      )
  );
};

// 이미지 최적화 설정 상수
export const IMAGE_PATTERNS = {
  // 우선순위 이미지 (즉시 로드)
  PRIORITY: ["/main/logo/logo.svg", "/main/background/background.jpg"],

  // 지연 로딩 이미지
  LAZY: [
    "/before-after/**/*.jpg",
    "/doctors/**/*.png",
    "/scalp-treatment/**/*.png",
    "/hair-transplant/**/*.jpg",
  ],
} as const;
