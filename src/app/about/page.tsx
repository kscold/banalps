"use client";

import { motion } from "framer-motion";
import { VideoSection } from "../../widgets/Hero/VideoSection";
import { useAboutScroll } from "../../shared/hooks/useAboutScroll";
import * as styles from "./AboutPage.css";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export default function AboutPage() {
  const { videoActive, contentActive, currentSection } = useAboutScroll();
  const isMobile = useMediaQuery("(max-width: 1023px)");

  // 피그마 디자인에 따른 강점 데이터
  const strengths = [
    {
      number: "01",
      title: "알맞은 치료를합니다.",
      mobileTitle: "알맞은 치료를\n합니다.",
      description:
        "절개, 비절개, 이마축소, 약물치료, 모든 방법에 경험이 많은 전문의가 각자의 상황에 가장 알맞은 치료를 권해드립니다.",
      mobileDescription:
        "절개, 비절개, 이마축소,\n약물치료, 모든 방법에 경험이\n많은 전문의가 각자의 상황에\n가장 알맞은 치료를\n권해드립니다.",
    },
    {
      number: "02",
      title: "부끄럽지 않습니다.",
      mobileTitle: "부끄럽지않습니다.",
      description:
        "정직한 홍보, 투명한 가격, 정확한 모수, 최고의 스텝, 최선의 수술\n모든 과정과 결과에 부끄럽지 않습니다",
      mobileDescription:
        "정직한 홍보, 투명한 가격,\n정확한 모수, 최고의 스텝, 최선의 수술\n모든 과정과 결과에 부끄럽지\n않습니다",
    },
    {
      number: "03",
      title: "고객을 잘 이해합니다.",
      mobileTitle: "고객을 잘\n이해합니다.",
      description:
        "먼저 불편한 점과 원하는 바를 잘 듣고, 전문가의 경험과 지식을\n바탕으로 고객이 가장 만족할 방법을 찾아갑니다.",
      mobileDescription:
        "먼저 불편한 점과 원하는 바를 잘\n듣고, 전문가의 경험과 지식을\n바탕으로 고객이 가장 만족할\n방법을 찾아갑니다.",
    },
    {
      number: "04",
      title: "시간을 지키겠습니다.",
      mobileTitle: "시간을 지키겠습니다.",
      description:
        "약속한 시간에 기다리는 일이 없도록 한 분, 한 분의 진료 시간을\n넉넉히 잡습니다",
      mobileDescription:
        "약속한 시간에 기다리는 일이\n없도록 한 분, 한 분의 진료 시간을\n넉넉히 잡습니다",
    },
    {
      number: "05",
      title: "비용은 투명합니다.",
      mobileTitle: "비용은\n투명합니다.",
      description:
        "상담 후에 비용을 알 수 있다는 말 대신, 사람마다 달라지는\n할인율 대신, 누구에게나 정확하고 투명한 비용을 말씀드립니다.",
      mobileDescription:
        "상담 후에 비용을 알 수 있다는\n말 대신, 사람마다 달라지는\n할인율 대신, 누구에게나\n정확하고 투명한 비용을\n말씀드립니다.",
    },
    {
      number: "06",
      title: "보람이 우선입니다.",
      mobileTitle: "보람이우선입니다.",
      description:
        "더 어렵고 힘든 수술이지만, 한결 좋아진 모습을 보는 보람 값이라\n생각하고 타병원 재수술, 흉터 수술의 추가 비용을 받지 않습니다.",
      mobileDescription:
        "더 어렵고 힘든 수술이지만,한결\n좋아진 모습을 보는 보람 값이라\n생각하고 타병원 재수술, 흉터\n수술의 추가 비용을 받지\n 않습니다.",
    },
  ];

  // 섹션 전환 애니메이션 상태
  const videoScale = currentSection === 0 ? 1 : 0.95;
  const videoOpacity = videoActive ? 1 : 0;

  return (
    <div className={styles.aboutPage}>
      {/* Video Section - 모션 애니메이션 적용 */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: videoOpacity,
          scale: videoScale,
        }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96], // cubic-bezier
        }}
        style={{
          zIndex: videoActive ? 2 : 1,
          backgroundColor: "#000",
          transformOrigin: "center center",
        }}
      >
        {videoActive && <VideoSection showVideoSection={true} />}
      </motion.div>

      {/* Main Content - 모션 애니메이션 적용 */}
      {contentActive && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 100, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.2,
          }}
          style={{
            zIndex: 10,
            backgroundColor: "white",
            paddingTop: 0,
          }}
        >
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                {isMobile ? (
                  <div className={styles.heroQuoteMobile}>
                    <h1 className={styles.heroQuote}>&apos;평범한 일상을</h1>
                    <h1 className={styles.heroQuote}>
                      새로운 일상으로 이어주는 곳&apos;
                    </h1>
                  </div>
                ) : (
                  <h1 className={styles.heroQuote}>
                    &apos;평범한 일상을 새로운 일상으로 이어주는 곳&apos;
                  </h1>
                )}
                <h2 className={styles.heroTitle}>
                  바람부는날에도 성형외과의원
                </h2>
              </div>
              <div className={styles.heroIllustration}>
                {/* 피그마의 일러스트 이미지 */}
                <img
                  src="/main/banal_graffiti.svg"
                  alt="Healthcare Illustration"
                  className={styles.illustrationImage}
                />
                <img
                  src="/about/mobile/banal-graffiti-mobile.svg"
                  alt="Healthcare Illustration"
                  className={styles.heroIllustrationMobile}
                />
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className={styles.valuesSection}>
            <div className={styles.valuesContainer}>
              <div className={styles.valuesContent}>
                <h2 className={styles.valuesMainTitle}>
                  바날이
                  <br />
                  추구하는 가치.
                </h2>
                <p className={styles.valuesDescription}>
                  바날은 모발 수술에 대한
                  <br />
                  섬세한 기술과 감각으로 시술 그 너머
                  <br />
                  당신의 내일을 설계 합니다.
                </p>
              </div>
              <div className={styles.valuesCards}>
                <img
                  src="/about/value.svg"
                  alt="바날 가치"
                  className={styles.valueCardsImage}
                />
                <img
                  src="/about/mobile/value-mobile.svg"
                  alt="바날 가치"
                  className={styles.valueCardsImageMobile}
                />
              </div>
            </div>
          </section>

          {/* RE.YOU Section */}
          <section className={styles.reYouSection}>
            <div className={styles.reYouContainer}>
              {/* RE.YOU 텍스트 섹션 - 상단에 배치 */}
              <motion.div
                className={styles.reYouTextSection}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className={styles.reYouContent}>
                  <h2 className={styles.reYouTitle}>RE.YOU</h2>
                  <p className={styles.reYouSubtitle}>다시, 특별한 당신으로</p>
                </div>
              </motion.div>

              {/* 이미지 카드 섹션 - 2x2 그리드 */}
              <div className={styles.reYouImageCards}>
                <motion.div
                  className={styles.reYouCard1}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                >
                  <img
                    src="/main/shot/shot1.png"
                    alt="Shin Seung gyu"
                    className={styles.reYouCardImage}
                  />
                </motion.div>

                <motion.div
                  className={styles.reYouCard4}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                >
                  <img
                    src="/main/shot/shot2.png"
                    alt="의료진 4"
                    className={styles.reYouCardImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.reYouCard2}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <img
                    src="/main/shot/shot3.svg"
                    alt="Park Soo Ho"
                    className={styles.reYouCardImage}
                  />
                </motion.div>

                <motion.div
                  className={styles.reYouCard3}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                >
                  <img
                    src="/main/shot/shot4.png"
                    alt="Kim Narae"
                    className={styles.reYouCardImage}
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Strengths Section */}
          <section className={styles.strengthsSection}>
            <div className={styles.strengthsContainer}>
              <div className={styles.strengthsContent}>
                {/* 왼쪽 영역 - 타이틀 + SVG */}
                <motion.div
                  className={styles.strengthsLeftSection}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h2 className={styles.strengthsTitle}>
                    바날이
                    <br />
                    잘하는 일.
                  </h2>
                  <img
                    src="/about/about-graffiti.svg"
                    alt="바날 소개 그래피티"
                    className={styles.strengthsGraffiti}
                  />
                </motion.div>

                {/* 오른쪽 영역 - 리스트 형태 */}
                <div className={styles.strengthsList}>
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      className={styles.strengthItem}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <div className={styles.strengthNumber}>
                        {strength.number}
                      </div>
                      <div className={styles.strengthItemContent}>
                        <h3 className={styles.strengthItemTitle}>
                          {strength.title}
                        </h3>
                        <p className={styles.strengthDescription}>
                          {strength.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      className={styles.strengthItemMobile}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <div className={styles.strengthNumberMobile}>
                        {strength.number}
                      </div>
                      <div className={styles.strengthItemContentMobile}>
                        <h3 className={styles.strengthItemTitleMobile}>
                          {strength.mobileTitle || strength.title}
                        </h3>
                        <p className={styles.strengthDescriptionMobile}>
                          {strength.mobileDescription || strength.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <div className={styles.galleryContainer}>
              {/* 상단: 타이틀 + 큰 수평 이미지 */}
              <div className={styles.galleryTopSection}>
                <div className={styles.galleryTitleSection}>
                  <h2 className={styles.galleryTitle}>
                    바날
                    <br />
                    둘러보기.
                  </h2>
                </div>

                <motion.div
                  className={styles.galleryMainImage}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src="/about/gallery/gallery-1.png"
                    alt="바날 갤러리 메인"
                    className={styles.galleryImage}
                  />
                </motion.div>
              </div>

              {/* 하단: 복합 그리드 레이아웃 - 피그마 정확한 구조 */}
              <div className={styles.galleryGrid}>
                {/* Row 1: Frame 219 - 왼쪽 큰 이미지 + 오른쪽 2개 스택 */}
                <div className={styles.galleryRow1}>
                  {/* 왼쪽 큰 이미지 */}
                  <motion.div
                    className={styles.galleryLeftLarge}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <img
                      src="/about/gallery/gallery-2.png"
                      alt="바날 갤러리 2"
                      className={styles.galleryImage}
                    />
                  </motion.div>

                  {/* 오른쪽 위 이미지 */}
                  <motion.div
                    className={styles.galleryRightTop}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src="/about/gallery/gallery-3.png"
                      alt="바날 갤러리 3"
                      className={styles.galleryImage}
                    />
                  </motion.div>

                  {/* 오른쪽 아래 이미지 */}
                  <motion.div
                    className={styles.galleryRightBottom}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                  >
                    <img
                      src="/about/gallery/gallery-4.png"
                      alt="바날 갤러리 4"
                      className={styles.galleryImage}
                    />
                  </motion.div>
                </div>

                {/* Row 2: Frame 220 - 2개 나란히 */}
                <div className={styles.galleryRow2}>
                  <motion.div
                    className={styles.galleryGridItem}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                  >
                    <img
                      src="/about/gallery/gallery-5.png"
                      alt="바날 갤러리 5"
                      className={styles.galleryImage}
                    />
                  </motion.div>

                  <motion.div
                    className={styles.galleryGridItem}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  >
                    <img
                      src="/about/gallery/gallery-6.png"
                      alt="바날 갤러리 6"
                      className={styles.galleryImage}
                    />
                  </motion.div>
                </div>

                {/* Row 3: Frame 223 - 왼쪽 2개 스택 + 오른쪽 2개 스택 */}
                <div className={styles.galleryRow3}>
                  {/* 왼쪽 컬럼 */}
                  <div className={styles.galleryLeftColumn}>
                    <motion.div
                      className={styles.gallerySmallImage}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                    >
                      <img
                        src="/about/gallery/gallery-7.png"
                        alt="바날 갤러리 7"
                        className={styles.galleryImage}
                      />
                    </motion.div>
                    <motion.div
                      className={styles.galleryLargeImage}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <img
                        src="/about/gallery/gallery-9.png"
                        alt="바날 갤러리 추가 1"
                        className={styles.galleryImage}
                      />
                    </motion.div>
                  </div>

                  {/* 오른쪽 컬럼 */}
                  <div className={styles.galleryRightColumn}>
                    <motion.div
                      className={styles.galleryLargeImage}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      <img
                        src="/about/gallery/gallery-8.png"
                        alt="바날 갤러리 추가 2"
                        className={styles.galleryImage}
                      />
                    </motion.div>
                    <motion.div
                      className={styles.gallerySmallImage}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.2,
                        ease: "easeOut",
                      }}
                    >
                      <img
                        src="/about/gallery/gallery-10.png"
                        alt="바날 갤러리 추가 3"
                        className={styles.galleryImage}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
}
