"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import * as styles from "./WhiteSection.css";
import ArrowButton from "../../shared/ui/ArrowButton/ArrowButton";
import GoogleMapEmbed, {
  MapButtons,
} from "../../shared/ui/GoogleMapEmbed/GoogleMapEmbed";

export default function WhiteSection() {
  console.log("[WhiteSection/렌더링] WhiteSection 렌더링 시작");
  const router = useRouter();

  return (
    <section className={styles.whiteSection}>
      {/* 상단 단일 이미지 컨테이너 */}
      <div className={styles.heroImageContainer}>
        <img
          src="/main/white-section/white_section_1.jpg"
          alt="바날 성형외과 메인 이미지"
          className={styles.heroImage}
        />
        <img
          src="/main/white-section/mobile/white-section-mobile-1.png"
          alt="바날 성형외과 모바일 메인 이미지"
          className={styles.heroImageMobile}
        />
      </div>

      <div className={styles.container}>
        {/* 메인 타이틀 */}
        <h2 className={styles.mainTitle}>
          모발 의학의
          <br />
          정점.
        </h2>

        {/* 모바일 전용 카드 리스트 */}
        <div className={styles.mobileCardList}>
          {/* 정수리 이식 카드 */}
          <motion.div
            className={styles.mobileServiceCard}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <img
              src="/main/white-section/white_section_2.jpg"
              alt="정수리 이식"
              className={styles.mobileCardImage}
            />
            <ArrowButton
              variant="primary"
              color="blue"
              size="medium"
              className={styles.mobileCardButton}
              onClick={() => router.push("/hair-transplant/crown")}
            >
              정수리이식
            </ArrowButton>
          </motion.div>

          {/* 이마 축소 수술 카드 */}
          <motion.div
            className={styles.mobileServiceCard}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="/main/white-section/white_section_4.jpg"
              alt="이마 축소 수술"
              className={styles.mobileCardImage}
            />
            <ArrowButton
              variant="primary"
              size="medium"
              color="blue"
              className={styles.mobileCardButton}
              onClick={() => router.push("/forehead/hair-transplant")}
            >
              이마 축소 수술
            </ArrowButton>
          </motion.div>

          {/* 헤어라인 교정 카드 */}
          <motion.div
            className={styles.mobileServiceCard}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              src="/main/white-section/white_section_3.jpg"
              alt="헤어라인 교정"
              className={styles.mobileCardImage}
            />
            <ArrowButton
              variant="primary"
              size="medium"
              color="blue"
              className={styles.mobileCardButton}
              onClick={() => router.push("/hair-transplant/hairline")}
            >
              헤어라인 교정
            </ArrowButton>
          </motion.div>

          {/* 바날 재수술 카드 */}
          <motion.div
            className={styles.mobileServiceCard}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <img
              src="/main/white-section/white_section_5.jpg"
              alt="바날 재수술"
              className={styles.mobileCardImage}
            />
            <ArrowButton
              variant="primary"
              size="medium"
              color="blue"
              className={styles.mobileCardButton}
              onClick={() => router.push("/hair-transplant/revision")}
            >
              바날 재수술
            </ArrowButton>
          </motion.div>

          {/* Other Medical Service 모바일 박스 */}
          <motion.div
            className={styles.mobileOtherServiceBox}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <img
              src="/main/white-section/mobile/white-section-mobile-2.png"
              alt="Other Medical Service"
              className={styles.mobileOtherServiceImage}
            />
            <ArrowButton
              size="medium"
              variant="primary"
              width="100%"
              textAlign="center"
              className={styles.mobileViewMoreButton}
              onClick={() => router.push("/before-after")}
            >
              View More
            </ArrowButton>
          </motion.div>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className={styles.mainContent}>
          {/* 왼쪽 2x2 카드 그리드 */}
          <div className={styles.cardGrid}>
            {/* 상단 행 - 큰 카드(왼쪽) + 작은 카드(오른쪽) */}
            <div className={styles.topRow}>
              {/* 카드 1: 정수리 이식 (왼쪽 위 - 큰 카드) */}
              <div
                className={`${styles.serviceCard} ${styles.serviceCardWide}`}
              >
                <img
                  src="/main/white-section/white_section_2.jpg"
                  alt="정수리 이식"
                  className={styles.cardImage}
                />
                <ArrowButton
                  variant="primary"
                  size="medium"
                  color="blue"
                  className={styles.cardButtonWide}
                  width={160}
                  fontSize={18}
                  fontSizeMobile={14}
                  height={44}
                  paddingLeft={true}
                  onClick={() => router.push("/hair-transplant/crown")}
                >
                  정수리 이식
                </ArrowButton>
              </div>

              {/* 카드 2: 헤어라인 교정 (오른쪽 위 - 작은 카드) */}
              <div className={styles.serviceCard}>
                <img
                  src="/main/white-section/white_section_3.jpg"
                  alt="헤어라인 교정"
                  className={styles.cardImage}
                />
                <ArrowButton
                  variant="primary"
                  size="medium"
                  color="blue"
                  className={styles.cardButtonWide}
                  width={180}
                  fontSize={18}
                  fontSizeMobile={14}
                  height={44}
                  paddingLeft={true}
                  onClick={() => router.push("/hair-transplant/hairline")}
                >
                  헤어라인 교정
                </ArrowButton>
              </div>
            </div>

            {/* 하단 행 - 작은 카드(왼쪽) + 큰 카드(오른쪽) */}
            <div className={styles.bottomRow}>
              {/* 카드 3: 이마 축소 수술 (왼쪽 아래 - 작은 카드) */}
              <div className={styles.serviceCard}>
                <img
                  src="/main/white-section/white_section_4.jpg"
                  alt="이마 축소 수술"
                  className={styles.cardImage}
                />
                <ArrowButton
                  variant="primary"
                  size="medium"
                  color="blue"
                  className={styles.cardButton}
                  width={180}
                  fontSize={18}
                  fontSizeMobile={14}
                  height={44}
                  paddingLeft={true}
                  onClick={() => router.push("/forehead/hair-transplant")}
                >
                  이마 축소 수술
                </ArrowButton>
              </div>

              {/* 카드 4: 바날 재수술 (오른쪽 아래 - 큰 카드) */}
              <div
                className={`${styles.serviceCard} ${styles.serviceCardWide}`}
              >
                <img
                  src="/main/white-section/white_section_5.jpg"
                  alt="바날 재수술"
                  className={styles.cardImage}
                />
                <ArrowButton
                  variant="primary"
                  size="medium"
                  color="blue"
                  className={styles.cardButtonWide}
                  width={160}
                  fontSize={18}
                  fontSizeMobile={14}
                  height={44}
                  paddingLeft={true}
                  onClick={() => router.push("/hair-transplant/revision")}
                >
                  바날 재수술
                </ArrowButton>
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

            <ArrowButton
              size="medium"
              variant="primary"
              fontSize={20}
              height={44}
              width={166}
              paddingLeft={true}
              className={styles.viewMoreButton}
              onClick={() => router.push("/before-after")}
            >
              View More
            </ArrowButton>
            <img
              src="/main/white-section/white_section_6.jpg"
              alt="Other Medical Service"
              className={styles.cardImage}
            />
          </div>
        </div>
      </div>
      {/* We're Ready When You Are 섹션 */}
      <section className={styles.readySection}>
        {/* <div className={styles.readySectionContainer}> */}
        {/* Hero Illustration - 왼쪽에 붙도록 */}
        <div className={styles.readyHeroIllustration}>
          <img
            src="/hair-transplant/hero-illustration.svg"
            alt="메인 페이지 일러스트"
            className={styles.readyIllustrationImage}
          />
        </div>

        {/* Ready Title - 중앙에 배치 */}
        <div className={styles.readyTitleWrapper}>
          <div className={styles.readyTitleContainer}>
            <h2 className={styles.readyMainTitle}>
              We&apos;re Ready
              <br />
              When You Are.
            </h2>
            <div className={styles.readyDescription}>
              <p className={styles.readyDescriptionText}>
                신뢰할 수 있는 전문성과 정직한 마음으로
                <br />
                모든 준비를 마친 이곳에서 당신을 기다립니다.
              </p>
              <p className={styles.readyDescriptionText}>
                이제, 바람부는날에도
                <br />
                기분 좋은 일상을 맞이하시길 바랍니다.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* 오시는 길 섹션 */}
      <div className={styles.locationSection}>
        <h2 className={styles.locationTitle}>
          바날
          <br />
          오시는 길.
        </h2>

        <div className={styles.locationContent}>
          {/* Frame 311 - 왼쪽 이미지+지도 영역 */}
          <div className={styles.leftContentArea}>
            {/* Frame 416 - 왼쪽 이미지 영역 */}
            <div className={styles.locationImageArea}>
              <img
                src="/main/map/banal_house.jpg"
                alt="바날 성형외과 건물 이미지"
                className={styles.locationImage}
              />
            </div>

            {/* Mask group - 지도 영역 */}
            <div className={styles.mapArea}>
              <GoogleMapEmbed />
            </div>
          </div>

          {/* Frame 318 - 오른쪽 정보 영역 */}
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

            {/* 카카오맵/네이버맵 버튼을 정보 섹션 하단에 추가 */}
            <MapButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
