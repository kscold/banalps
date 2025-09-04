import * as styles from "./Footer.css"

export function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className={styles.footerSection}>
        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <div className={styles.footerColumn}>
              <div className={styles.footerInfo}>
                <h3 className={styles.footerClinicName}>
                  바람부는날에도 성형외과의원
                </h3>
                <p className={styles.footerRepresentative}>
                  대표 박수호, 신승규
                </p>
              </div>
              <p className={styles.footerCopyright}>
                ©2025 BANAL PLASTIC SURGERY
              </p>
            </div>

            <div className={styles.footerColumn}>
              <p className={styles.footerAddress}>
                서울시 서초구 신반포로 47길 66 바날하우스
              </p>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>
                  이용약관
                </a>
                <a href="#" className={styles.footerLink}>
                  개인정보처리방침
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <p className={styles.footerPhone}>TEL 02-540-0700</p>
            </div>
          </div>

          <div className={styles.footerLogo}>
            <div className={styles.footerLogoContainer}>
              {/* 로고 이미지 또는 텍스트 */}
              <span className={styles.footerLogoText}>BANAL</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
