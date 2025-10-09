/**
 * 비디오 Lazy Loading 훅
 * Intersection Observer를 사용하여 뷰포트에 들어올 때만 비디오를 로드합니다.
 */

import { useEffect, useRef, useState } from 'react';

interface UseVideoLazyLoadOptions {
  threshold?: number; // 뷰포트 진입 비율 (0~1)
  rootMargin?: string; // 뷰포트 확장 마진 (예: '200px')
}

export function useVideoLazyLoad(
  options: UseVideoLazyLoadOptions = {}
) {
  const { threshold = 0.1, rootMargin = '200px' } = options;
  const videoRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const currentRef = videoRef.current;
    if (!currentRef) return;

    // 이미 로드되었으면 Observer 생성하지 않음
    if (hasLoaded) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setShouldLoad(true);
            setHasLoaded(true); // 한 번 로드되면 다시 로드하지 않음
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, hasLoaded]);

  return { videoRef, shouldLoad };
}
