/**
 * 이미지 프리로더 유틸리티
 * Before/After 이미지를 동시에 로드하고 캐싱합니다.
 */

// 로드된 이미지 캐시
const imageCache = new Map<string, HTMLImageElement>();

/**
 * 단일 이미지 로드
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  // 캐시에 있으면 바로 반환
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src)!);
  }

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      imageCache.set(src, img);
      resolve(img);
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };

    img.src = src;
  });
}

/**
 * Before/After 이미지 쌍을 동시에 로드
 */
export async function preloadImagePair(
  beforeImage: string,
  afterImage: string
): Promise<{ before: HTMLImageElement; after: HTMLImageElement }> {
  try {
    const [before, after] = await Promise.all([
      preloadImage(beforeImage),
      preloadImage(afterImage),
    ]);

    return { before, after };
  } catch (error) {
    console.error('Failed to preload image pair:', error);
    throw error;
  }
}

/**
 * 여러 이미지 쌍을 동시에 로드
 */
export async function preloadImagePairs(
  pairs: Array<{ beforeImage: string; afterImage: string }>
): Promise<void> {
  try {
    await Promise.all(
      pairs.map((pair) => preloadImagePair(pair.beforeImage, pair.afterImage))
    );
  } catch (error) {
    console.error('Failed to preload image pairs:', error);
  }
}

/**
 * 캐시 클리어
 */
export function clearImageCache(): void {
  imageCache.clear();
}

/**
 * 특정 이미지가 캐시되어 있는지 확인
 */
export function isImageCached(src: string): boolean {
  return imageCache.has(src);
}
