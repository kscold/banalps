"use client"

import React from "react"
import * as styles from "./Footer.css"

export default function Footer() {
  return (
    <footer className={styles.footerSection} data-footer="true">
      <div className={styles.footerContent}>
        {/* 왼쪽: 클리닉 정보와 주소 */}
        <div className={styles.footerLeft}>
          {/* 첫 번째 컬럼: 클리닉 정보 */}
          <div className={styles.footerLeftFirst}>
            <div className={styles.footerCompanyInfo}>
              <p className={styles.footerClinicName}>
                바람부는날에도 성형외과의원
              </p>
              <p className={styles.footerRepresentative}>대표 박수호, 신승규</p>
            </div>
            <p className={styles.footerCopyright}>
              ©2025 BANAL PLASTIC SURGERY
            </p>
          </div>

          {/* 두 번째 컬럼: 주소 및 링크 */}
          <div className={styles.footerRightSection}>
            <p className={styles.footerAddress}>
              서울시 서초구 신반포로 47길 66 바날하우스
            </p>
            <div className={styles.footerLinksContainer}>
              <a href="/terms" className={styles.footerLink}>
                이용약관
              </a>
              <a href="/privacy" className={styles.footerLink}>
                개인정보처리방침
              </a>
            </div>
          </div>

          {/* 전화번호 - 피그마에서는 주소 오른쪽에 위치 */}
          <div>
            <p className={styles.footerPhone}>TEL 02-540-0700</p>
          </div>
        </div>

        {/* 로고 영역 */}
        <div className={styles.footerRight}>
          <div className={styles.footerLogoContainer}>
            {/* SVG 로고가 제공되면 교체 예정 */}
            <img src="/footer/footer-logo.svg" alt="BANAL" />
          </div>
        </div>
      </div>
    </footer>
  )
}
