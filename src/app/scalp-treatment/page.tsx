"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import FeaturesSection from "../../shared/components/FeaturesSection/FeaturesSection";

import * as styles from "./ScalpTreatmentPage.css";

export default function ScalpTreatmentPage() {
  console.log("[ScalpTreatmentPage] 두피치료 페이지 렌더링");

  // Vimeo 로드 핸들러
  const handleVimeoLoad = () => {
    console.log("[ScalpTreatmentPage/Vimeo로드] iframe 로드 성공");
  };

  // Hero Section 애니메이션
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Section 1 애니메이션
  const { ref: section1Ref, inView: section1InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Section 2 - 치료방법 카드 애니메이션
  const { ref: treatmentCardsRef, inView: treatmentCardsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Section 3-6 각 치료방법 상세 애니메이션
  const { ref: section3Ref, inView: section3InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: section4Ref, inView: section4InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: section5Ref, inView: section5InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: section6Ref, inView: section6InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className={styles.scalpTreatmentPage}>
      {/* Hero Section */}
      <section className={styles.HairTransplantHeroSection}>
        <div className={styles.HairTransplantHeroContainer}>
          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.HairTransplantHeroTitleWrapper}>
            <div className={styles.HairTransplantHeroTitleContainer}>
              <h1 className={styles.HairTransplantHeroTitle}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  두피치료
                  <div className={styles.HairTransplantHeroTitleDot} />
                </span>
              </h1>
            </div>
          </div>
          {/* Hero Illustration - 왼쪽에 붙도록 (데스크탑용) */}
          <div className={styles.HairTransplantHeroIllustration}>
            <img
              src="/hair-transplant/hero-illustration.svg"
              alt="두피치료 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>
        </div>
        {/* 모바일 일러스트 - Hero Container 밖에 위치 */}
        <img
          src="/hair-transplant/mobile/hero-illustration-mobile.svg"
          alt="두피치료 일러스트"
          className={styles.heroIllustrationImageMobile}
        />
      </section>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className={styles.heroSection}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          heroInView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            {/* 영상 영역 */}
            <div className={styles.videoContainer}>
              <iframe
                src="https://player.vimeo.com/video/1101740070?background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                onLoad={handleVimeoLoad}
                onError={() => {
                  console.error("[VideoSection/Vimeo에러] iframe 로드 실패");
                }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 1: 두피치료 소개 */}
      <motion.section
        ref={section1Ref}
        className={styles.introSection}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          section1InView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.introContainer}>
          {/* 왼쪽 텍스트 */}
          <div className={styles.introTextContent}>
            <h2 className={styles.introTitle}>
              두피치료,
              <br />
              가장 효과적인 방법만
              <br />
              남겼습니다.
            </h2>
            <p className={styles.introDescription}>
              모발이식과 약물치료 만으로 충분하다고 생각했습니다.
              <br />
              <br />
              하지만, 그 두가지 치료 사이의 부족함을 채울 방법이 분명히
              필요했지요.
              <br />
              <br />
              수많은 논문과 사례를 통해 가장 효과적인 치료만 남겼습니다.
            </p>
          </div>

          {/* 오른쪽 이미지 */}
          <div className={styles.introImageContent}>
            <div className={styles.introImageContainer}>
              <img
                src="/scalp-treatment/scalp-treatment-1.png"
                alt="두피치료 의료진"
                className={styles.introImage}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: 치료방법 카드들 */}
      <motion.section
        ref={treatmentCardsRef}
        className={styles.treatmentCardsSection}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          treatmentCardsInView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.treatmentCardsContainer}>
          {/* 어븀글라스 프락셀 레이저 */}
          <div className={styles.treatmentCard}>
            <div className={styles.treatmentCardImage}>
              <span className={styles.treatmentCardNumber}>1</span>
              <img
                src="/scalp-treatment/scalp-treatment-2.png"
                alt="어븀글라스 프락셀 레이저"
                className={styles.treatmentCardImageImg}
              />
            </div>
            <h3 className={styles.treatmentCardTitle}>
              어븀글라스
              <br />
              프락셀 레이저
            </h3>
          </div>

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          {/* 주사 시술 */}
          <div className={styles.treatmentCard}>
            <div className={styles.treatmentCardImage}>
              <span className={styles.treatmentCardNumber}>2</span>
              <img
                src="/scalp-treatment/scalp-treatment-2.png"
                alt="주사 시술"
                className={styles.treatmentCardImageImg}
              />
            </div>
            <h3 className={styles.treatmentCardTitle}>주사 시술</h3>
          </div>

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          {/* MTS 치료 */}
          <div className={styles.treatmentCard}>
            <div className={styles.treatmentCardImage}>
              <span className={styles.treatmentCardNumber}>3</span>
              <img
                src="/scalp-treatment/scalp-treatment-3.png"
                alt="MTS 치료"
                className={styles.treatmentCardImageImg}
              />
            </div>
            <h3 className={styles.treatmentCardTitle}>MTS 치료</h3>
          </div>

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          {/* 저출력 레이저 LLLT */}
          <div className={styles.treatmentCard}>
            <div className={styles.treatmentCardImage}>
              <span className={styles.treatmentCardNumber}>4</span>
              <img
                src="/scalp-treatment/scalp-treatment-4.png"
                alt="저출력 레이저 LLLT"
                className={styles.treatmentCardImageImg}
              />
            </div>
            <h3 className={styles.treatmentCardTitle}>
              저출력 레이저
              <br />
              LLLT
            </h3>
          </div>

          <div className={styles.treatmentArrow}></div>

          {/* 정맥 주사 - 마지막이라 화살표 없음 */}
          <div className={styles.treatmentCard}>
            <div className={styles.treatmentCardImage}>
              <span className={styles.treatmentCardNumber}>5</span>
              <img
                src="/scalp-treatment/scalp-treatment-5.png"
                alt="정맥 주사"
                className={styles.treatmentCardImageImg}
              />
            </div>
            <h3 className={styles.treatmentCardTitle}>정맥 주사</h3>
          </div>
        </div>
      </motion.section>

      {/* Section 3: 1550nm 어븀글라스 프락셀 레이저 */}
      <motion.section
        ref={section3Ref}
        className={styles.treatmentDetailSection}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          section3InView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                src="https://player.vimeo.com/video/1101740070?background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              1550nm 어븀글라스 프락셀 레이저
            </h2>
            <h3 className={styles.treatmentSubtitle}>
              두피의 혈류와
              <br />
              세포 환경을 되살려
              <br />
              모발이 자라기
              <br />
              좋은 조건을 만들어줍니다.
            </h3>
            <p className={styles.treatmentDescription}>
              미세 열 채널(microthermal zone, MTZ)이 형성되어
              <br />
              이후 도포되는 약물을 모낭이 있는 깊은 층까지 전달해줍니다
              <br />
              CO2 프락셀 레이저와 달리 통증도 거의 없습니다.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 4: 약물 주사 치료 */}
      <motion.section
        ref={section4Ref}
        className={styles.treatmentDetailSection}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          section4InView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                src="https://player.vimeo.com/video/1101740070?background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>약물 주사 치료</h2>
            <h3 className={styles.treatmentSubtitle}>
              모든 두피가 같지 않듯,
              <br />
              치료도 달라야 합니다.
            </h3>
            <p className={styles.treatmentDescription}>
              작은 바람과 배려의 마음으로 주사 시술 시<br />
              영하 30도의 찬 바람으로 통증을 최소화 합니다.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 5: 줄기세포 유래 성장인자 */}
      <motion.section
        ref={section5Ref}
        className={styles.treatmentDetailSection}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          section5InView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                src="https://player.vimeo.com/video/1101740070?background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>줄기세포 유래 성장인자</h2>
            <h3 className={styles.treatmentSubtitle}>
              줄기세포 유래 성장인자만을
              <br />
              선별한 고농축 치료법
            </h3>
            <p className={styles.treatmentDescription}>
              혈액 속에서 선별한 고농축 줄기세포 유래 성장인자로
              <br />
              모낭 줄기세포를 자극하고 모발 성장 주기를 되살리는
              <br />
              재생 치료입니다. 두피 주사로 탈모를 치료하고 정맥 주사로
              <br />
              노화의 속도를 늦춰줍니다.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 6: 저출력 레이저 LLLT */}
      <motion.section
        ref={section6Ref}
        className={styles.treatmentDetailSection}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          section6InView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                src="https://player.vimeo.com/video/1101740070?background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              저출력 레이저 LLLT
              <br />
              (Low-Level Laser Therapy)
            </h2>
            <h3 className={styles.treatmentSubtitle}>
              저출력 레이저(LLLT)로
              <br />
              모낭의 회복력을 높이고
              <br />
              세포 대사를 활성화 시킵니다.
            </h3>
            <p className={styles.treatmentDescription}>
              빛의 자극으로 세포 대사를 활성화시키고,
              <br />
              염증 반응을 억제하는 탈모 치료의 부드러운 마무리입니다.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer Features Section */}
      <FeaturesSection
        featuresTitle={
          <>
            독보적인 기술력과 사후 관리까지
            <br />
            바날은 고객에 진심을 다합니다.
          </>
        }
        featureCards={[
          {
            icon: "/hair-transplant/feature-1.svg",
            title: (
              <>
                모발이식과 이마축소가 동시에
                <br />
                가능한 유일한 병원입니다.
              </>
            ),
          },
          {
            icon: "/hair-transplant/feature-2.svg",
            title: (
              <>
                고객이 원하는 디자인을
                <br />
                최우선으로 생각합니다.
              </>
            ),
          },
          {
            icon: "/hair-transplant/feature-3.svg",
            title: (
              <>
                모발이식 경력 10년 이상의
                <br />
                전문의들이 진료합니다.
              </>
            ),
          },
          {
            icon: "/hair-transplant/feature-4.svg",
            title: (
              <>
                10년 이상 손발을 맞춰온
                <br />
                수술팀이 함께합니다.
              </>
            ),
          },
        ]}
      />
    </div>
  );
}
