import Link from "next/link"
import * as styles from "./Footer.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainInfo}>
            {/* 병원 정보 컬럼 */}
            <div className={styles.column}>
              <div className={styles.clinicInfo}>
                <h3 className={styles.clinicName}>
                  바람부는날에도 성형외과의원
                </h3>
                <p className={styles.representative}>대표 박수호, 신승규</p>
              </div>
              <p className={styles.copyright}>©2025 BANAL PLASTIC SURGERY</p>
            </div>

            {/* 주소 및 링크 컬럼 */}
            <div className={styles.column}>
              <p className={styles.address}>
                서울시 서초구 신반포로 47길 66 바날하우스
              </p>
              <div className={styles.links}>
                <Link href="/terms" className={styles.link}>
                  이용약관
                </Link>
                <span className={styles.divider}>|</span>
                <Link href="/privacy" className={styles.link}>
                  개인정보처리방침
                </Link>
              </div>
            </div>

            {/* 연락처 컬럼 */}
            <div className={styles.column}>
              <p className={styles.phone}>TEL 02-540-0700</p>
            </div>
          </div>

          {/* 로고 영역 */}
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <span className={styles.logoText}>BANAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
