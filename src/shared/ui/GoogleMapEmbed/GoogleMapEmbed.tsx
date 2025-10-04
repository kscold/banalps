'use client';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useAllPagesTranslations } from '@/hooks/useAllPagesTranslations';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import * as styles from './GoogleMapEmbed.css';

interface GoogleMapEmbedProps {
  showButtons?: boolean;
}

export default function GoogleMapEmbed({ showButtons = false }: GoogleMapEmbedProps) {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const t = useAllPagesTranslations();
  const { language } = useLanguageStore();

  const openKakaoMap = () => {
    window.open(
      `https://map.kakao.com/?urlX=504082.0000000018&urlY=1114925.9999999998&urlLevel=3&itemId=181074248&q=%EB%B0%94%EB%9E%8C%EB%B6%80%EB%8A%94%EB%82%A0%EC%97%90%EB%8F%84%EC%84%B1%ED%98%95%EC%99%B8%EA%B3%BC%EC%9D%98%EC%9B%90&srcid=181074248&map_type=TYPE_MAP`,
      '_blank',
    );
  };

  const openNaverMap = () => {
    window.open(`https://naver.me/xprA1TnQ`, '_blank');
  };

  return (
    <>
      <div className={styles.mapWrapper}>
        {isMobile ? (
          <img
            src={language === 'JP' ? '/treatment-guide/map-jp-mobile.svg' : '/treatment-guide/map-mobile.svg'}
            alt={t.imageAlt.banalClinicLocation}
            className={styles.mapMobile}
          />
        ) : (
          <img
            src={language === 'JP' ? '/treatment-guide/map-jp.jpg' : '/treatment-guide/map.png'}
            alt={t.imageAlt.banalClinicLocation}
            className={styles.mapDesktop}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>

      {/* 외부 링크 버튼 - 별도 컴포넌트로 분리 */}
      {showButtons && (
        <div className={styles.mapButtons}>
          <button onClick={openKakaoMap} className={styles.kakaoButton} aria-label={t.accessibility.kakaoMap}>
            KAKAO MAP
          </button>
          <button onClick={openNaverMap} className={styles.naverButton} aria-label={t.accessibility.naverMap}>
            NAVER MAP
          </button>
        </div>
      )}
    </>
  );
}

// 버튼만 별도로 사용할 수 있는 컴포넌트
export function MapButtons() {
  const t = useAllPagesTranslations();

  const openKakaoMap = () => {
    window.open(
      'https://map.kakao.com/?urlX=504082.0000000018&urlY=1114925.9999999998&urlLevel=3&itemId=181074248&q=%EB%B0%94%EB%9E%8C%EB%B6%80%EB%8A%94%EB%82%A0%EC%97%90%EB%8F%84%EC%84%B1%ED%98%95%EC%99%B8%EA%B3%BC%EC%9D%98%EC%9B%90&srcid=181074248&map_type=TYPE_MAP',
      '_blank',
    );
  };

  const openNaverMap = () => {
    window.open('https://naver.me/xprA1TnQ', '_blank');
  };

  return (
    <div className={styles.mapButtons}>
      <button onClick={openKakaoMap} className={styles.kakaoButton} aria-label={t.accessibility.kakaoMap}>
        KAKAO MAP
      </button>
      <button onClick={openNaverMap} className={styles.naverButton} aria-label={t.accessibility.naverMap}>
        NAVER MAP
      </button>
    </div>
  );
}
