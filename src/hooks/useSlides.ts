import { useState, useEffect } from 'react';

export interface Slide {
  id: number;
  category: string;
  beforeImage: string;
  afterImage: string;
  scale: number;
  order: number;
}

export const useSlides = (category?: string) => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        const url = category ? `/api/admin/slide?category=${category}` : '/api/admin/slide';
        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          setSlides(data.data);
        } else {
          throw new Error(data.message || '슬라이드 조회 실패');
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('슬라이드 조회 에러:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, [category]);

  return { slides, loading, error };
};
