"use client"

import { useState } from "react"
import * as styles from "./GoogleMapEmbed.css"

const BANAL_LOCATION = {
  lat: 37.5147,
  lng: 127.0229,
  address: "서울특별시 서초구 신반포로47길 66 (잠원동)",
  name: "바날 성형외과"
}

interface GoogleMapEmbedProps {
  showButtons?: boolean
}

export default function GoogleMapEmbed({ showButtons = false }: GoogleMapEmbedProps) {
  const [mapLoaded, setMapLoaded] = useState(false)

  // Place API를 사용한 임베드 URL (마커 표시, 정보창 숨김)
  const placeEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(BANAL_LOCATION.name)}&center=${BANAL_LOCATION.lat},${BANAL_LOCATION.lng}&zoom=16`

  const openKakaoMap = () => {
    window.open(`https://map.kakao.com/link/map/${BANAL_LOCATION.name},${BANAL_LOCATION.lat},${BANAL_LOCATION.lng}`, '_blank')
  }

  const openNaverMap = () => {
    window.open(`https://map.naver.com/v5/search/${encodeURIComponent(BANAL_LOCATION.name)}`, '_blank')
  }

  return (
    <>
      <div className={styles.mapWrapper}>
        {!mapLoaded && (
          <div className={styles.loadingOverlay}>
            <div className={styles.loadingText}>지도를 불러오는 중...</div>
          </div>
        )}
        <iframe
          src={placeEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setMapLoaded(true)}
          className={styles.mapIframe}
          title="바날 성형외과 위치"
        />
      </div>
      
      {/* 외부 링크 버튼 - 별도 컴포넌트로 분리 */}
      {showButtons && (
        <div className={styles.mapButtons}>
          <button 
            onClick={openKakaoMap}
            className={styles.kakaoButton}
            aria-label="카카오맵으로 보기"
          >
            KAKAO MAP
          </button>
          <button 
            onClick={openNaverMap}
            className={styles.naverButton}
            aria-label="네이버맵으로 보기"
          >
            NAVER MAP
          </button>
        </div>
      )}
    </>
  )
}

// 버튼만 별도로 사용할 수 있는 컴포넌트
export function MapButtons() {
  const openKakaoMap = () => {
    window.open(`https://map.kakao.com/link/map/${BANAL_LOCATION.name},${BANAL_LOCATION.lat},${BANAL_LOCATION.lng}`, '_blank')
  }

  const openNaverMap = () => {
    window.open(`https://map.naver.com/v5/search/${encodeURIComponent(BANAL_LOCATION.name)}`, '_blank')
  }

  return (
    <div className={styles.mapButtons}>
      <button 
        onClick={openKakaoMap}
        className={styles.kakaoButton}
        aria-label="카카오맵으로 보기"
      >
        KAKAO MAP
      </button>
      <button 
        onClick={openNaverMap}
        className={styles.naverButton}
        aria-label="네이버맵으로 보기"
      >
        NAVER MAP
      </button>
    </div>
  )
}