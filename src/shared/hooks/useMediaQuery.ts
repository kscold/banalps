import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // 초기값 설정
    setMatches(media.matches);

    // 리스너 함수
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // 이벤트 리스너 추가
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      // 구형 브라우저 지원
      media.addListener(listener);
    }

    // 클린업
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      } else {
        // 구형 브라우저 지원
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}