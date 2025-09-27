"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import * as styles from "./BlueSection.css";
import { ArrowButton } from "../../shared/ui/ArrowButton";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

interface BlueSectionProps {
  isActive?: boolean;
  onTransitionToVideo?: () => void;
}

export default function BlueSection({ isActive = false }: BlueSectionProps) {
  const [isVisible] = useState(isActive);
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    console.log("[BlueSection/마운트] 블루 섹션 컴포넌트 마운트");
  }, []);

  // 바날 로컬 서비스 항목들
  const localServices = [
    {
      number: "01",
      title: "알맞은 치료를 합니다.",
      description:
        "절개, 비절개, 이마축소, 약물치료, 모든 방법에 경험이 많은\n전문의가 각자의 상황에 가장 알맞은 치료를 권해드립니다. ",
      href: "/doctors",
    },
    {
      number: "02",
      title: "부끄럽지 않습니다.",
      description:
        "정직한 홍보, 투명한 가격, 정확한 모수, 최고의 스텝, 최선의 수술\n모든 과정과 결과에 부끄럽지 않습니다.",
      href: "/before-after",
    },
    {
      number: "03",
      title: "고객을 잘 이해합니다.",
      description:
        "먼저 불편한 점과 원하는 바를 잘 듣고, 전문가의 경험과 지식을\n바탕으로 고객이 가장 만족할 방법을 찾아갑니다.",
      href: "/doctors",
    },
    {
      number: "04",
      title: "시간을 지키겠습니다.",
      description:
        "약속한 시간에 기다리는 일이 없도록 한 분, 한 분의 진료 시간을\n넉넉히 잡습니다",
      href: "/reservation",
    },
    {
      number: "05",
      title: "비용은 투명합니다.",
      description:
        "상담 후에 비용을 알 수 있다는 말 대신, 사람마다 달라지는\n할인율 대신, 누구에게나 정확하고 투명한 비용을 말씀드립니다.",
      href: "/pricing",
    },
    {
      number: "06",
      title: "보람이 우선입니다.",
      description:
        "더 어렵고 힘든 수술이지만, 한결 좋아진 모습을 보는 보람 값이라\n생각하고 타병원 재수술, 흉터 수술의 추가 비용을 받지 않습니다.",
      href: "/before-after",
    },
  ];

  return (
    <section
      className={`${styles.blueSection} ${
        isVisible || isActive ? styles.visible : ""
      }`}
    >
      {/* 이미지 카드 섹션 - Figma 정확 반영 */}
      <div className={styles.imageCardsSection}>
        {/* 이미지 카드 1 */}
        <motion.div
          className={styles.imageCard1}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        >
          {isMobile ? (
            <img
              src="/main/shot/mobile/shot1.jpg"
              alt="Shin Seung gyu"
              className={styles.cardImage}
            />
          ) : (
            <img
              src="/main/shot/shot1.png"
              alt="Shin Seung gyu"
              className={styles.cardImage}
            />
          )}
        </motion.div>

        {/* 이미지 카드 2 */}
        <motion.div
          className={styles.imageCard2}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          {isMobile ? (
            <img
              src="/main/shot/mobile/shot2.jpg"
              alt="Park Soo Ho"
              className={styles.cardImage}
            />
          ) : (
            <img
              src="/main/shot/shot2.png"
              alt="Park Soo Ho"
              className={styles.cardImage}
            />
          )}
        </motion.div>

        {/* 이미지 카드 3 */}
        <motion.div
          className={styles.imageCard3}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          {isMobile ? (
            <img
              src="/main/shot/mobile/shot3.jpg"
              alt="Kim Narae"
              className={styles.cardImage}
            />
          ) : (
            <img
              src="/main/shot/shot3.png"
              alt="Kim Narae"
              className={styles.cardImage}
            />
          )}
        </motion.div>

        {/* 이미지 카드 4 */}
        <motion.div
          className={styles.imageCard4}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        >
          {isMobile ? (
            <img
              src="/main/shot/mobile/shot4.jpg"
              alt="의료진 4"
              className={styles.cardImage}
            />
          ) : (
            <img
              src="/main/shot/shot4.png"
              alt="의료진 4"
              className={styles.cardImage}
            />
          )}
        </motion.div>
      </div>

      {/* RE.YOU 텍스트 섹션 */}
      <div className={styles.reYouSection}>
        {/* 텍스트 콘텐츠 */}
        <h2 className={styles.reYouTitle}>RE.YOU</h2>
        <p className={styles.reYouSubtitle}>다시, 특별한 당신으로</p>

        {/* 그래피티 배경 이미지 - 데스크톱용 */}
        <img
          src="/main/banal_graffiti.svg"
          alt="Banal Graffiti"
          className={styles.graffitiBackground}
        />

        {/* 그래피티 배경 이미지 - 모바일용 */}
        <img
          src="/about/mobile/banal-graffiti-mobile.svg"
          alt="Banal Graffiti Mobile"
          className={styles.graffitiBackgroundMobile}
        />
      </div>

      {/* 바날 로컬 섹션 */}
      <div className={styles.whatBanalSection}>
        {/* 모바일에서 제목 먼저 표시 */}
        <h2 className={styles.whatBanalTitleMobile}>
          바날이
          <br />
          잘하는 일.
        </h2>

        {/* 모바일에서 제목 바로 아래 표시되는 설명 텍스트 */}
        <div className={styles.whatBanalMobileTop}>
          <p className={styles.whatBanalSubDescription1Mobile}>
            평범한 일상을 새로운 일상으로
            <br />
            이어주는 곳,
          </p>
          <p className={styles.whatBanalDescriptionMobile}>
            바람부는날에도 성형외과의원
          </p>
          <p className={styles.whatBanalSubDescription2Mobile}>
            바날은 모발 수술에 대한
            <br />
            섬세한 기술과 감각으로 시술 그 너머,
            <br />
            당신의 내일을 설계합니다.
          </p>
        </div>

        <div className={styles.whatBanalContent}>
          {/* 왼쪽 텍스트 영역 */}
          <div className={styles.whatBanalText}>
            <h2 className={styles.whatBanalTitleDesktop}>
              바날이
              <br />
              잘하는 일.
            </h2>
            <p className={styles.whatBanalSubDescription1}>
              평범한 일상을 새로운 일상으로 이어주는 곳,
            </p>
            <p className={styles.whatBanalDescription}>
              바람부는날에도 성형외과의원
            </p>
            <p className={styles.whatBanalSubDescription2}>
              바날은 모발 수술에 대한 섬세한 기술과 감각으로
              <br />
              시술 그 너머, 당신의 내일을 설계합니다.
            </p>
            <div className={styles.whatBanalButtonDesktop}>
              <ArrowButton
                size="medium"
                variant="primary"
                fontSize={22}
                fontSizeMobile={16}
                height={44}
                width={180}
                paddingLeft={true}
                onClick={() => router.push("/doctors")}
              >
                View More
              </ArrowButton>
            </div>
          </div>

          {/* 오른쪽 6개 항목 리스트 */}
          <div className={styles.featuresList}>
            {localServices.map((service, index) => {
              const delayClass = [
                styles.featureItemDelay1,
                styles.featureItemDelay2,
                styles.featureItemDelay3,
                styles.featureItemDelay4,
                styles.featureItemDelay5,
                styles.featureItemDelay6,
              ][index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`${styles.featureItem} ${styles.featureItemAnimated} ${delayClass}`}
                  >
                    <div className={styles.featureNumber}>{service.number}</div>
                    <div className={styles.featureContent}>
                      <h3 className={styles.featureTitle}>{service.title}</h3>
                      <p className={styles.featureDescription}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 모바일에서만 보이는 버튼 - featuresList 다음에 위치 */}
        <div className={styles.whatBanalButtonMobile}>
          <ArrowButton
            size="medium"
            variant="primary"
            fontSizeMobile={16}
            paddingVertical={16}
            width="100%"
            textAlign="center"
            className={styles.fullWidthButton}
            onClick={() => router.push("/doctors")}
          >
            View More
          </ArrowButton>
        </div>
      </div>

      {/* 의료진 소개 섹션 - 피그마 디자인 기반 */}
      <div className={styles.doctorsSection}>
        {/* 모바일 상단 텍스트 영역 */}
        <div className={styles.doctorsMobileHeader}>
          <h2 className={styles.doctorsMobileTitle}>
            모발이식
            <br />
            15년 전문의.
          </h2>
        </div>

        {/* 모바일 의료진 전체 화면 리스트 */}
        <div className={styles.doctorsMobileCards}>
          {/* 신승규 원장 */}
          <div className={styles.doctorMobileFullCard}>
            <img
              src="/main/person/doctor-shinseunggyu.png"
              alt="신승규 원장"
              className={styles.doctorMobileFullImage}
            />
            <div className={styles.doctorMobileOverlay}>
              <h3 className={styles.doctorMobileFullNameFirst}>
                Shin
                <br />
                Seung
                <br />
                gyu
              </h3>
              <p className={styles.doctorMobileFullKorean}>대표원장 신 승규</p>
            </div>
          </div>

          {/* 박수호 원장 */}
          <div className={styles.doctorMobileFullCard}>
            <img
              src="/main/person/doctor-parksooho.png"
              alt="박수호 원장"
              className={styles.doctorMobileFullImage}
            />
            <div className={styles.doctorMobileOverlay}>
              <h3 className={styles.doctorMobileFullNameSecond}>
                Park
                <br />
                Soo Ho
              </h3>
              <p className={styles.doctorMobileFullKorean}>대표원장 박 수호</p>
            </div>
          </div>

          {/* 김나래 원장 */}
          <div className={styles.doctorMobileFullCard}>
            <img
              src="/main/person/doctor-kimnarae.png"
              alt="김나래 원장"
              className={styles.doctorMobileFullImage}
            />
            <div className={styles.doctorMobileOverlay}>
              <h3 className={styles.doctorMobileFullNameThird}>
                Kim
                <br />
                Narae
              </h3>
              <p className={styles.doctorMobileFullKorean}>대표원장 김 나래</p>
            </div>
          </div>
        </div>

        {/* 모바일 하단 설명 텍스트 */}
        <div className={styles.doctorsMobileBottom}>
          <p className={styles.doctorsMobileDescription}>
            모발 성형외과 전문의로서 15년.
          </p>
          <p className={styles.doctorsMobileSubDescription}>
            수술 전에 정교한 디자인을 통해
            <br />
            의료진과 디테일 상담을 통해 정확한
            <br />
            바람으로 고객의 니즈를 정확히 이해하고
            <br />
            상처와 콤플 렉스를 만들어드립니다.
          </p>
          {/* 모바일 View More 버튼 (하단) */}
          <div className={styles.doctorsMobileButtonBottom}>
            <ArrowButton
              size="medium"
              variant="primary"
              fontSizeMobile={16}
              paddingVertical={16}
              width="100%"
              textAlign="center"
              className={styles.fullWidthButton}
              onClick={() => router.push("/doctors")}
            >
              View More
            </ArrowButton>
          </div>
        </div>

        {/* 데스크탑 버전 (기존 코드) */}
        <div className={styles.doctorsContent}>
          {/* 좌측 텍스트 영역 */}
          <div className={styles.doctorsTextSection}>
            <h2 className={styles.doctorsMainTitle}>
              모발이식
              <br />
              15년 전문의.
            </h2>
            <p className={styles.doctorsSubTitle}>
              모발 성형외과 전문의로서 15년
            </p>
            <p className={styles.doctorsDescription}>
              수술 전에 정교한 디자인으로 개인별 성향에 맞는
              <br />
              의료진과 1대1 디테일 상담을 통해 함께
              <br />
              설계해주는 것은 정말히 경과를
              <br />
              관리하기 위한 치과의 정성과
              <br />
              완페밤습니다.
            </p>
            <ArrowButton
              size="medium"
              variant="primary"
              fontSize={22}
              fontSizeMobile={16}
              height={44}
              width={180}
              paddingLeft={true}
              onClick={() => router.push("/doctors")}
            >
              View More
            </ArrowButton>
          </div>

          {/* 우측 의료진 이미지 섹션 - 겹쳐진 레이아웃 */}
          <div className={styles.doctorsImageGrid}>
            {/* 이미지들 */}
            <div className={styles.doctorCard1}>
              <img
                src="/main/person/doctor-shinseunggyu.png"
                alt="신승규 원장"
                className={styles.doctorImage1}
              />
            </div>

            <div className={styles.doctorCard2}>
              <img
                src="/main/person/doctor-parksooho.png"
                alt="박수호 원장"
                className={styles.doctorImage2}
              />
            </div>

            <div className={styles.doctorCard3}>
              <img
                src="/main/person/doctor-kimnarae.png"
                alt="김나래 원장"
                className={styles.doctorImage3}
              />
            </div>

            {/* 구분선들 - 신승규, 박수호 사진 아래 */}
            <div className={styles.doctorDivider1} />
            <div className={styles.doctorDivider2} />

            {/* 모든 텍스트 오버레이 - 그리드 컨테이너 기준 absolute */}
            <div className={styles.doctorNameOverlay1}>
              <h3 className={styles.doctorEnglishName1}>
                Shin
                <br />
                Seung gyu
              </h3>
            </div>

            <div className={styles.doctorKoreanNameContainer1}>
              <p className={styles.doctorKoreanName}>대표원장 신 승규</p>
            </div>

            <div className={styles.doctorNameOverlay2}>
              <h3 className={styles.doctorEnglishName2}>
                Park
                <br />
                Soo Ho
              </h3>
            </div>

            <div className={styles.doctorKoreanNameContainer2}>
              <p className={styles.doctorKoreanName}>대표원장 박 수호</p>
            </div>

            <div className={styles.doctorNameOverlay3}>
              <h3 className={styles.doctorEnglishName3}>
                Kim
                <br />
                Narae
              </h3>
            </div>

            <div className={styles.doctorKoreanNameContainer3}>
              <p className={styles.doctorKoreanName}>대표원장 김 나래</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
