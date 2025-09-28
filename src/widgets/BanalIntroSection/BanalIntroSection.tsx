"use client"

import { ArrowRight } from 'lucide-react'
import * as styles from './BanalIntroSection.css'
import { useBanalIntroTranslations } from '@/hooks/useAllPagesTranslations'

export default function BanalIntroSection() {
  const t = useBanalIntroTranslations()
  console.log('[BanalIntroSection/렌더링] 바날 소개 섹션 렌더링 시작')

  const handleViewMoreClick = () => {
    console.log('[BanalIntroSection/클릭] View More 버튼 클릭됨')
    // 추후 상세 페이지 이동 로직 구현
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          {t.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>
        
        <p className={styles.subTitle}>
          {t.subtitle}
        </p>
        
        <h3 className={styles.hospitalName}>
          {t.clinicName}
        </h3>
        
        <p className={styles.description}>
          {t.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.description.split('\n').length - 1 && <br />}
            </span>
          ))}
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