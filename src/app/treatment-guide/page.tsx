'use client';

import { motion } from 'framer-motion';
import * as styles from './TreatmentGuidePage.css';

import GoogleMapEmbed, { MapButtons } from '../../shared/ui/GoogleMapEmbed/GoogleMapEmbed';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useTreatmentGuideTranslations } from '@/hooks/useAllPagesTranslations';

export default function TreatmentGuidePage() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const t = useTreatmentGuideTranslations();
  console.log('[TreatmentGuidePage] 진료 안내 페이지 렌더링');

  return (
    <div className={styles.treatmentGuidePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          {/* 왼쪽 타이틀 */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              {t.hero.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t.hero.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
          </div>

          {/* 오른쪽 이미지 및 콘텐츠 */}
          <div className={styles.heroRight}>
            <div className={styles.heroImageWrapper}>
              {isMobile ? (
                <img
                  src="/treatment-guide/hero-image-mobile.svg"
                  alt="바날 성형외과 전경"
                  className={styles.heroImage}
                />
              ) : (
                <>
                  <img
                    src="/treatment-guide/clinic-building.png"
                    alt="바날 성형외과 전경"
                    className={styles.heroImage}
                  />
                  {/* Power Your Organization's Potential With Banal House 텍스트 */}
                  <div className={styles.heroOverlayMain}>
                    <p className={styles.heroOverlayMainText}>
                      Power Your Organization&apos;s Potential
                      <br />
                      With Banal House
                    </p>
                  </div>

                  {/* Banalhouse 텍스트 */}
                  <div className={styles.heroOverlayBrand}>
                    <p className={styles.heroOverlayBrandText}>Banalhouse</p>
                  </div>
                </>
              )}
            </div>

            <motion.h2
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              {t.hero.subtitle.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t.hero.subtitle.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* 왼쪽 구글 지도 */}
          <div className={styles.mapContainer}>
            <GoogleMapEmbed showButtons={false} />
          </div>

          {/* 오른쪽 연락처 정보 */}
          <div className={styles.contactInfo}>
            {/* 전화번호 */}
            <div className={styles.contactItemPhone}>
              <h3 className={styles.contactLabel}>{t.contact.phoneLabel}</h3>
              <p className={styles.contactValue}>{t.contact.phoneNumber}</p>
            </div>

            {/* 진료시간 */}
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>{t.contact.hoursLabel}</h3>
              <div className={styles.contactSchedule}>
                <p>{t.contact.weekday}</p>
                <p>{t.contact.saturday}</p>
              </div>
            </div>

            {/* 오시는길 */}
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>{t.contact.locationLabel}</h3>
              <div className={styles.contactAddress}>
                <p className={styles.addressMain}>
                  {t.contact.address1.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t.contact.address1.split('\n').length - 1 && <br />}
                    </span>
                  ))}{' '}
                  {t.contact.address2}
                </p>
                <div className={styles.subwayInfo}>
                  <p>{t.contact.subway1}</p>
                  <p>{t.contact.subway2}</p>
                </div>
              </div>
            </div>

            {/* 지도 버튼 - GoogleMapEmbed의 MapButtons 컴포넌트 사용 */}
            <MapButtons />
          </div>
        </div>
      </section>
    </div>
  );
}
