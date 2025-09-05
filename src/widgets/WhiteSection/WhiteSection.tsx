"use client"

import * as styles from "./WhiteSection.css"
import ArrowButton from "../../shared/ui/ArrowButton/ArrowButton"

export default function WhiteSection() {
  return (
    <section className={styles.whiteSection}>
      {/* 상단 단일 이미지 컨테이너 */}
      <div className={styles.heroImageContainer}>
        <img
          src="/main/white-section/white_section_1.jpg"
          alt="바날 성형외과 메인 이미지"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.container}>
        {/* 메인 타이틀 */}
        <h2 className={styles.mainTitle}>
          모발 의학의
          <br />
          정점.
        </h2>

        {/* 메인 콘텐츠 영역 */}
        <div className={styles.mainContent}>
          {/* 왼쪽 카드 영역 */}
          <div className={styles.cardGrid}>
            {/* 상단 카드들 */}
            <div className={styles.topRow}>
              <div className={styles.serviceCard}>
                <img
                  src="/main/white-section/white_section_2.jpg"
                  alt="정수리 이식"
                  className={styles.cardImage}
                />
                <ArrowButton
                  variant="primary"
                  size="medium"
                  className={styles.cardButton}
                >
                  정수리 이식
                </ArrowButton>
                <div className={styles.cardNumber}>1</div>
              </div>

              <div className={styles.serviceCard}>
                <img
                  src="/main/white-section/white_section_3.jpg"
                  alt="헤어라인 교정"
                  className={styles.cardImage}
                />
                <ArrowButton
                  variant="primary"
                  size="medium"
                  className={styles.cardButton}
                >
                  헤어라인 교정
                </ArrowButton>
                <div className={styles.cardNumber}>2</div>
              </div>
            </div>

            {/* 하단 카드들 */}
            <div className={styles.bottomRow}>
              <div className={styles.serviceCard}>
                <img
                  src="/main/white-section/white_section_4.jpg"
                  alt="이마 축소 수술"
                  className={styles.cardImage}
                />
                <ArrowButton
                  variant="primary"
                  size="medium"
                  className={styles.cardButton}
                >
                  이마 축소 수술
                </ArrowButton>
                <div className={styles.cardNumber}>3</div>
              </div>

              <div className={styles.serviceCard}>
                <img
                  src="/main/white-section/white_section_5.jpg"
                  alt="바날 재수술"
                  className={styles.cardImage}
                />
                <ArrowButton
                  variant="primary"
                  size="medium"
                  className={styles.cardButton}
                >
                  바날 재수술
                </ArrowButton>
                <div className={styles.cardNumber}>4</div>
              </div>
            </div>
          </div>

          {/* 오른쪽 Other Medical Service 박스 */}
          <div className={styles.otherServiceBox}>
            <h3 className={styles.otherServiceTitle}>
              Other Medical
              <br />
              Service.
            </h3>

            <div className={styles.serviceNumber}>5</div>

            <ArrowButton
              variant="secondary"
              size="medium"
              className={styles.viewMoreButton}
            >
              View More
            </ArrowButton>
            <img
              src="/main/white-section/white_section_6.jpg"
              alt="바날 재수술"
              className={styles.cardImage}
            />
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
                    <p className={styles.infoValueParagraph}>
                      평일 Am 09:00 ~ Pm 07:00
                    </p>
                    <p className={styles.infoValueParagraph}>
                      토요일 Am 09:00 ~ Pm 05:00
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>오시는길</span>
                  <div className={styles.infoValue}>
                    <p className={styles.infoValueParagraph}>
                      서울특별시 서초구 신반포로 47길 66
                    </p>
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
