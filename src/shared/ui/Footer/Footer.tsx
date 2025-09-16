"use client"

import React from "react"
import * as styles from "./Footer.css"

export default function Footer() {
  return (
    <footer className={styles.footerSection} data-footer="true">
      <div className={styles.footerContent}>
        {/* 데스크탑 레이아웃 */}
        <div className={styles.desktopLayout}>
          {/* 왼쪽: 클리닉 정보와 주소 */}
          <div className={styles.footerLeft}>
            {/* 첫 번째 컬럼: 클리닉 정보 */}
            <div className={styles.footerLeftFirst}>
              <div className={styles.footerCompanyInfo}>
                <p className={styles.footerClinicName}>
                  바람부는날에도 성형외과의원
                </p>
                <p className={styles.footerRepresentative}>
                  대표 박수호, 신승규
                </p>
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

        {/* 모바일 레이아웃 - 피그마 디자인 기준 */}
        <div className={styles.mobileLayout}>
          {/* 로고 */}
          <div className={styles.mobileLogo}>
            {/* SVG 로고가 제공되면 교체 예정 */}
            <img src="/footer/footer-logo.svg" alt="BANAL" />
          </div>

          {/* 클리닉 정보 */}
          <div className={styles.mobileInfo}>
            <p className={styles.mobileClinicName}>
              바람부는날에도 성형외과의원
            </p>
            <p className={styles.mobileRepresentative}>대표 박수호, 신승규</p>
          </div>

          {/* 주소 및 전화번호 */}
          <div className={styles.mobileContact}>
            <p className={styles.mobileAddress}>
              서울시 서초구 신반포로 47길 66 바날하우스
            </p>
            <p className={styles.mobilePhone}>TEL 02-540-0700</p>
          </div>

          {/* 링크 */}
          <div className={styles.mobileLinks}>
            <a href="/terms" className={styles.mobileLinkItem}>
              이용약관
            </a>
            <a href="/privacy" className={styles.mobileLinkItem}>
              개인정보처리방침
            </a>
          </div>

          {/* 카피라이트 */}
          <p className={styles.mobileCopyright}>©2025 BANAL PLASTIC SURGERY</p>
        </div>
      </div>
    </footer>
  )
}
