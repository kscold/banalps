"use client"

import * as styles from "./WhiteSection.css"

export default function WhiteSection() {
  return (
    <section className={styles.whiteSection}>
      <div className={styles.container}>
        {/* 메인 타이틀 섹션 */}
        <div className={styles.heroSection}>
          <h2 className={styles.mainTitle}>
            모발 의학의
            <br />
            정점.
          </h2>

          {/* 의료 서비스 카드들 */}
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <div className={styles.cardImage}>
                <img src="/main/shot/shot1.png" alt="정수리 이식" />
              </div>
              <button className={styles.cardButton}>정수리 이식</button>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardImage}>
                <img src="/main/shot/shot2.png" alt="헤어라인 교정" />
              </div>
              <button className={styles.cardButton}>헤어라인 교정</button>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardImage}>
                <img src="/main/shot/shot3.png" alt="이마 축소 수술" />
              </div>
              <button className={styles.cardButton}>이마 축소 수술</button>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardImage}>
                <img src="/main/shot/shot4.png" alt="바날 재수술" />
              </div>
              <button className={styles.cardButton}>바날 재수술</button>
            </div>
          </div>

          {/* Other Medical Service 박스 */}
          <div className={styles.otherServiceBox}>
            <h3 className={styles.otherServiceTitle}>
              Other Medical
              <br />
              Service.
            </h3>
            <button className={styles.viewMoreButton}>View More</button>
          </div>
        </div>

        {/* We're Ready 섹션 */}
        <div className={styles.readySection}>
          <div className={styles.readyContent}>
            <h2 className={styles.readyTitle}>
              We&apos;re Ready
              <br />
              When You Are.
            </h2>
            <p className={styles.readyDescription}>
              신뢰할 수 있는 전문성과 정직한 마음으로
              <br />
              모든 준비를 마친 이곳에서 당신을 기다립니다.
              <br />
              <br />
              이제, 바람부는날에도
              <br />
              기분 좋은 일상을 맞이하시길 바랍니다.
            </p>
          </div>

          <div className={styles.readyImage}>
            {/* 오른쪽 이미지 영역 */}
            <img src="/main/ready-image.jpg" alt="바날 성형외과" />
          </div>
        </div>

        {/* 오시는 길 섹션 */}
        <div className={styles.locationSection}>
          <h2 className={styles.locationTitle}>
            바날
            <br />
            오시는 길.
          </h2>

          <div className={styles.locationContent}>
            <div className={styles.mapArea}>
              {/* 지도 이미지 또는 임베드 */}
              <div className={styles.mapPlaceholder}>지도 영역</div>
            </div>

            <div className={styles.locationInfo}>
              <div className={styles.infoBox}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>전화번호</span>
                  <span className={styles.infoValue}>02.540.0700</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>진료시간</span>
                  <div className={styles.infoValue}>
                    <p className={styles.infoValueParagraph}>평일 Am 09:00 ~ Pm 07:00</p>
                    <p className={styles.infoValueParagraph}>토요일 Am 09:00 ~ Pm 05:00</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>오시는길</span>
                  <div className={styles.infoValue}>
                    <p className={styles.infoValueParagraph}>서울특별시 서초구 신반포로 47길 66</p>
                    <p className={styles.infoValueParagraph}>(잠원동 29-18)</p>
                    <p className={styles.subwayInfo}>
                      : 신사역 4번출구에서 331M
                      <br />: 논현역 8번출구에서 330M
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.mapButtons}>
                <button className={styles.mapButton}>KAKAO MAP</button>
                <button className={styles.mapButton}>NAVER MAP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
