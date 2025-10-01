import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  // SSR과 첫 클라이언트 렌더링에서 항상 false로 시작 (hydration mismatch 방지)
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);

    // 클라이언트에서 정확한 값으로 업데이트
    setMatches(media.matches);

    // 리스너 함수
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // 이벤트 리스너 추가
    media.addEventListener('change', listener);

    // 클린업
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  // 마운트되기 전까지는 항상 false 반환 (SSR과 동일)
  return mounted ? matches : false;
}