"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import * as styles from "./WhiteSection.css";
import ArrowButton from "../../shared/ui/ArrowButton/ArrowButton";
import GoogleMapEmbed, {
  MapButtons,
} from "../../shared/ui/GoogleMapEmbed/GoogleMapEmbed";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { useWhiteTranslations } from "@/hooks/useAllPagesTranslations";
import { useLanguageStore } from "@/shared/stores/useLanguageStore";

export default function WhiteSection() {
  console.log("[WhiteSection/렌더링] WhiteSection 렌더링 시작");
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const white = useWhiteTranslations();
  const { language } = useLanguageStore();

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
          src="/main/white-section/mobile/white-section-mobile-1.svg"
          alt="바날 성형외과 모바일 메인 이미지"
          className={styles.heroImageMobile}
        />
      </div>

      <div className={styles.container}>
        {/* 메인 타이틀 */}
        <h2 className={styles.mainTitle}>
          {white.mainTitle.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < white.mainTitle.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* 모바일 전용 카드 리스트 */}
        <div className={styles.mobileCardList}>
          {/* 정수리 이식 카드 */}
          <div className={styles.mobileServiceCard}>
            <img
              src="/main/white-section/white_section_2.jpg"
              alt="정수리 이식"
              className={styles.mobileCardImage}
            />
            <ArrowButton
              variant="primary"
              color="blue"
              size="medium"
              fontSizeMobile={16}
              className={styles.mobileCardButton}
              onClick={() => router.push("/hair-transplant/crown")}
            >
              {white.services.crownTransplant}
            </ArrowButton>
          </div>

          {/* 이마 축소 수술 카드 */}
          <div className={styles.mobileServiceCard}>
            <img
              src="/main/white-section/white_section_4.jpg"
              alt="이마 축소 수술"
              className={styles.mobileCardImage}
            />
            <ArrowButton
              variant="primary"
              size="medium"
              fontSizeMobile={16}
              color="blue"
              className={styles.mobileCardButton}
              onClick={() => router.push("/forehead/hair-transplant")}
            >
              {white.services.foreheadReduction}
            </ArrowButton>
          </div>

          {/* 헤어라인 교정 카드 */}
          <div className={styles.mobileServiceCard}>
            <img
              src="/main/white-section/white_section_3.jpg"
              alt="헤어라인 교정"
              className={styles.mobileCardImage}
            />
            <ArrowButton
              variant="primary"
              size="medium"
              fontSizeMobile={16}
              color="blue"
              className={styles.mobileCardButton}
              onClick={() => router.push("/hair-transplant/hairline")}
            >
              {white.services.hairlineCorrection}
            </ArrowButton>
          </div>

          {/* 바날 재수술 카드 */}
          <div className={styles.mobileServiceCard}>
            <img
              src="/main/white-section/white_section_5.jpg"
              alt="바날 재수술"
              className={styles.mobileCardImage}
            />
            <ArrowButton
              variant="primary"
              size="medium"
              color="blue"
              fontSizeMobile={16}
              className={styles.mobileCardButton}
              onClick={() => router.push("/hair-transplant/reoperation")}
            >
              {white.services.banalRevision}
            </ArrowButton>
          </div>

          {/* Other Medical Service 모바일 박스 */}
          <div className={styles.mobileOtherServiceBox}>
            <img
              src="/main/white-section/mobile/white-section-mobile-2.svg"
              alt="Other Medical Service"
              className={styles.mobileOtherServiceImage}
            />
            <ArrowButton
              size="medium"
              variant="primary"
              width="100%"
              textAlign="center"
              fontSizeMobile={16}
              className={styles.mobileViewMoreButton}
              onClick={() => router.push("/before-after")}
            >
              {white.viewMore}
            </ArrowButton>
          </div>
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
                  width={language === "JP" ? 182 : 164}
                  fontSize={20}
                  fontSizeMobile={14}
                  height={44}
                  paddingLeft={16}
                  paddingTop={10}
                  paddingBottom={10}
                  onClick={() => router.push("/hair-transplant/crown")}
                >
                  {white.services.crownTransplant}
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
                  width={language === "JP" ? 202 : 184}
                  fontSize={20}
                  fontSizeMobile={14}
                  height={44}
                  paddingLeft={16}
                  paddingTop={10}
                  paddingBottom={10}
                  onClick={() => router.push("/hair-transplant/hairline")}
                >
                  {white.services.hairlineCorrection}
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
                  width={language === "JP" ? 162 : 189}
                  fontSize={20}
                  fontSizeMobile={14}
                  height={44}
                  paddingLeft={16}
                  paddingTop={10}
                  paddingBottom={10}
                  onClick={() => router.push("/forehead/hair-transplant")}
                >
                  {white.services.foreheadReduction}
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
                  width={166}
                  fontSize={20}
                  fontSizeMobile={14}
                  height={44}
                  paddingLeft={16}
                  paddingTop={10}
                  paddingBottom={10}
                  onClick={() => router.push("/hair-transplant/revision")}
                >
                  {white.services.banalRevision}
                </ArrowButton>
              </div>
            </div>
          </div>

          {/* 오른쪽 Other Medical Service 박스 */}
          <div className={styles.otherServiceBox}>
            <h3 className={styles.otherServiceTitle}>
              {white.services.otherMedicalService
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    {index <
                      white.services.otherMedicalService.split("\n").length -
                        1 && <br />}
                  </span>
                ))}
            </h3>

            <ArrowButton
              size="medium"
              variant="primary"
              fontSize={20}
              height={44}
              width={166}
              paddingLeft={16}
              paddingTop={12}
              paddingBottom={12}
              className={styles.viewMoreButton}
              onClick={() => router.push("/before-after")}
            >
              {white.viewMore}
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
          {isMobile ? (
            <img
              src="/main/white-section/mobile/banal_graffiti-mobile.svg"
              alt="메인 페이지 일러스트"
              className={styles.readyIllustrationImage}
            />
          ) : (
            <img
              src="/hair-transplant/hero-illustration.svg"
              alt="메인 페이지 일러스트"
              className={styles.readyIllustrationImage}
            />
          )}
        </div>

        {/* Ready Title - 중앙에 배치 */}
        <div className={styles.readyTitleWrapper}>
          <div className={styles.readyTitleContainer}>
            <h2 className={styles.readyMainTitle}>
              {white.ready.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < white.ready.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className={styles.readyDescription}>
              <p className={styles.readyDescriptionText}>
                {white.ready.description1.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index <
                      white.ready.description1.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
              <p className={styles.readyDescriptionText}>
                {white.ready.description2.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index <
                      white.ready.description2.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* 오시는 길 섹션 */}
      <div className={styles.locationSection}>
        <h2 className={styles.locationTitle}>
          {white.location.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < white.location.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className={styles.locationContent}>
          {/* 모바일과 데스크탑 레이아웃 분기 */}
          {isMobile ? (
            <>
              <div className={styles.locationImageArea}>
                <img
                  src="/treatment-guide/hero-image-mobile.svg"
                  alt="바날 성형외과 건물 이미지"
                  className={styles.locationImage}
                />
              </div>
              {/* 모바일: 지도만 표시 (TreatmentGuidePage처럼) */}
              <div className={styles.mapArea}>
                <GoogleMapEmbed showButtons={false} />
              </div>

              {/* 모바일: 정보 영역 - TreatmentGuidePage와 동일한 구조 */}
              <div className={styles.locationInfo}>
                <div className={styles.infoBox}>
                  {/* 전화번호 */}
                  <div className={styles.infoItemPhone}>
                    <h3 className={styles.infoLabel}>
                      {white.location.phone}
                    </h3>
                    <p className={styles.infoNumber}>
                      {white.location.phoneNumber}
                    </p>
                  </div>

                  {/* 진료시간 */}
                  <div className={styles.infoItem}>
                    <h3 className={styles.infoLabel}>
                      {white.location.hours}
                    </h3>
                    <div className={styles.infoValue}>
                      <p className={styles.infoValueParagraph}>
                        {white.location.weekday}
                      </p>
                      <p className={styles.infoValueParagraph}>
                        {white.location.saturday}
                      </p>
                    </div>
                  </div>

                  {/* 오시는길 */}
                  <div className={styles.infoItem}>
                    <h3 className={styles.infoLabel}>
                      {white.location.directions}
                    </h3>
                    <div className={styles.infoValue}>
                      <p className={styles.infoValueParagraph}>
                        {white.location.address1}
                      </p>
                      <p className={styles.infoValueParagraph}>
                        {white.location.address2}
                      </p>
                      <div className={styles.subwayInfo}>
                        <p>{white.location.subway1}</p>
                        <p>{white.location.subway2}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 카카오맵/네이버맵 버튼 */}
                <MapButtons />
              </div>
            </>
          ) : (
            <>
              {/* 데스크탑: 기존 레이아웃 유지 */}
              <div className={styles.leftContentArea}>
                {/* Frame 416 - 왼쪽 이미지 영역 */}
                <div className={styles.locationImageArea}>
                  <img
                    src="/main/map/banal-house.svg"
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
                    <span className={styles.infoLabel}>
                      {white.location.phone}
                    </span>
                    <span className={styles.infoNumber}>
                      {white.location.phoneNumber}
                    </span>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      {white.location.hours}
                    </span>
                    <div className={styles.infoValue}>
                      <p className={styles.infoValueParagraph}>
                        {white.location.weekday}
                      </p>
                      <p className={styles.infoValueParagraph}>
                        {white.location.saturday}
                      </p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      {white.location.directions}
                    </span>
                    <div className={styles.infoValue}>
                      <p className={styles.infoValueParagraph}>
                        {white.location.address1}
                      </p>
                      <p className={styles.infoValueParagraph}>
                        {white.location.address2}
                      </p>
                      <p className={styles.subwayInfo}>
                        {white.location.subway1}
                        <br />
                        {white.location.subway2}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 카카오맵/네이버맵 버튼을 정보 섹션 하단에 추가 */}
                <MapButtons />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
