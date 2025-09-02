"use client"

import { ArrowRight } from 'lucide-react'
import * as styles from './BanalIntroSection.css'

export default function BanalIntroSection() {
  console.log('[BanalIntroSection/렌더링] 바날 소개 섹션 렌더링 시작')

  const handleViewMoreClick = () => {
    console.log('[BanalIntroSection/클릭] View More 버튼 클릭됨')
    // 추후 상세 페이지 이동 로직 구현
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          바날이<br />
          잘하는 일.
        </h2>
        
        <p className={styles.subTitle}>
          평범한 일상을 새로운 일상으로 이어주는 곳,
        </p>
        
        <h3 className={styles.hospitalName}>
          바람부는날에도 성형외과의원
        </h3>
        
        <p className={styles.description}>
          바날은 모발 수술에 대한 섬세한 기술과 감각으로<br />
          시술 그 너머, 당신의 내일을 설계합니다.
        </p>
        
        <button 
          className={styles.viewMoreButton}
          onClick={handleViewMoreClick}
          aria-label="바날 소개 더보기"
        >
          View More
          <ArrowRight className={styles.buttonIcon} />
        </button>
      </div>
    </section>
  )
}