"use client"

import { motion } from "framer-motion"
import * as styles from "./TreatmentGuidePage.css"
import GoogleMapEmbed, {
  MapButtons,
} from "../../shared/ui/GoogleMapEmbed/GoogleMapEmbed"

export default function TreatmentGuidePage() {
  console.log("[TreatmentGuidePage] 진료 안내 페이지 렌더링")

  return (
    <div className={styles.treatmentGuidePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          {/* 왼쪽 타이틀 */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              바날
              <br />
              오시는 길.
            </h1>
          </div>

          {/* 오른쪽 이미지 및 콘텐츠 */}
          <div className={styles.heroRight}>
            <div className={styles.heroImageWrapper}>
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
            </div>

            <motion.h2
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              We&apos;re Ready
              <br />
              When You Are.
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
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>전화번호</h3>
              <p className={styles.contactValue}>02.540.0700</p>
            </div>

            {/* 진료시간 */}
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>진료시간</h3>
              <div className={styles.contactSchedule}>
                <p>평일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Am 09:00 ~ Pm 07:00</p>
                <p>토요일&nbsp;&nbsp;Am 09:00 ~ Pm 05:00</p>
              </div>
            </div>

            {/* 오시는길 */}
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>오시는길</h3>
              <div className={styles.contactAddress}>
                <p className={styles.addressMain}>
                  서울특별시 서초구 신반포로 47길 66
                  <br />
                  (잠원동 29-18)
                </p>
                <div className={styles.subwayInfo}>
                  <p>: 신사역 4번출구에서 331M</p>
                  <p>: 논현역 8번출구에서 330M</p>
                </div>
              </div>
            </div>

            {/* 지도 버튼 - GoogleMapEmbed의 MapButtons 컴포넌트 사용 */}
            <MapButtons />
          </div>
        </div>
      </section>
    </div>
  )
}
