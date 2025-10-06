'use client';

import React, { useState } from 'react';
import * as styles from './Footer.css';
import TermsModal from '@/shared/components/TermsModal/TermsModal';
import { useFooterTranslations } from '@/hooks/useAllPagesTranslations';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';

export default function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const t = useFooterTranslations();
  const { language } = useLanguageStore();

  const handleTermsClick = () => {
    setIsTermsModalOpen(true);
  };

  const handlePrivacyClick = () => {
    setIsPrivacyModalOpen(true);
  };

  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };
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
                <p className={styles.footerClinicName}>{t.clinicName}</p>
                <p className={styles.footerRepresentative}>{t.representatives}</p>
              </div>
              <p className={styles.footerCopyright}>{t.copyright}</p>
            </div>

            {/* 두 번째 컬럼: 주소 및 링크 */}
            <div className={styles.footerRightSection}>
              <p className={styles.footerAddress}>{t.address}</p>
              <div className={styles.footerLinksContainer}>
                <button className={styles.footerLink} onClick={handleTermsClick}>
                  {t.termsOfUse}
                </button>
                <button className={styles.footerLink} onClick={handlePrivacyClick}>
                  {t.privacyPolicy}
                </button>
              </div>
            </div>

            {/* 전화번호 - 피그마에서는 주소 오른쪽에 위치 */}
            <div>
              <p className={styles.footerPhone}>{t.tel}</p>
            </div>
          </div>

          {/* 로고 영역 */}
          <div className={styles.footerRight}>
            <div className={styles.footerLogoContainer}>
              {/* 언어에 따라 다른 로고 사용 */}
              <img src={language === 'JP' ? '/footer/footer-logo-jp.svg' : '/footer/footer-logo.svg'} alt="BANAL" />
            </div>
          </div>
        </div>

        {/* 모바일 레이아웃 - 피그마 디자인 기준 */}
        <div className={styles.mobileLayout}>
          {/* 로고 */}
          <div className={styles.mobileLogo}>
            {/* SVG 로고가 제공되면 교체 예정 */}
            <img
              src={language === 'JP' ? '/footer/footer-logo-mobile-jp.svg' : '/footer/footer-logo-mobile.svg'}
              alt="BANAL"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* 클리닉 정보 */}
          <div className={styles.mobileInfo}>
            <p className={styles.mobileClinicName}>{t.clinicName}</p>
            <p className={styles.mobileRepresentative}>{t.representatives}</p>
          </div>

          {/* 주소 및 전화번호 */}
          <div className={styles.mobileContact}>
            <p className={styles.mobileAddress}>{t.address}</p>
            <p className={styles.mobilePhone}>{t.tel}</p>
          </div>

          {/* 링크 */}
          <div className={styles.mobileLinks}>
            <button className={styles.mobileLinkItem} onClick={handleTermsClick}>
              {t.termsOfUse}
            </button>
            <button className={styles.mobileLinkItem} onClick={handlePrivacyClick}>
              {t.privacyPolicy}
            </button>
          </div>

          {/* 카피라이트 */}
          <p className={styles.mobileCopyright}>{t.copyright}</p>
        </div>
      </div>

      {/* Terms Modal */}
      <TermsModal isOpen={isTermsModalOpen} onClose={closeTermsModal} type="terms" />
      <TermsModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} type="privacy" />
    </footer>
  );
}
