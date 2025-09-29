import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  // SSR에서도 안전하도록 초기값을 쿼리에 따라 설정
  const getInitialValue = () => {
    if (typeof window === 'undefined') {
      // SSR 환경에서는 쿼리에 따라 기본값 설정
      if (query.includes('max-width: 1023px')) {
        return false; // 데스크탑 기본값
      }
      if (query.includes('min-width: 1920px')) {
        return false; // 데스크탑라지가 아닌 것을 기본값으로
      }
      return false;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getInitialValue);

  useEffect(() => {
    const media = window.matchMedia(query);

    // 클라이언트에서 정확한 값으로 업데이트
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