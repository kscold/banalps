"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

import FeaturesSection from "../../shared/components/FeaturesSection/FeaturesSection";

import * as styles from "./ScalpTreatmentPage.css";
import { vw, mvw } from "../../shared/styles/responsive.utils";

// Treatment Card Component with individual scroll trigger
const TreatmentCard = ({
  number,
  image,
  alt,
  title,
  isMobile,
}: {
  number: string;
  image: string;
  alt: string;
  title: string;
  isMobile: boolean;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        className={styles.treatmentCard}
        initial={{ opacity: 0, translateY: 80 }}
        animate={
          inView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 80 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.treatmentCardImage}>
          <span className={styles.treatmentCardNumber}>{number}</span>
          <img src={image} alt={alt} className={styles.treatmentCardImageImg} />
        </div>
        <h3 className={styles.treatmentCardTitle}>{title}</h3>
      </motion.div>
    );
  }

  // Desktop version without individual animation
  return (
    <div className={styles.treatmentCard}>
      <div className={styles.treatmentCardImage}>
        <span className={styles.treatmentCardNumber}>{number}</span>
        <img src={image} alt={alt} className={styles.treatmentCardImageImg} />
      </div>
      <h3 className={styles.treatmentCardTitle}>{title}</h3>
    </div>
  );
};

export default function ScalpTreatmentPage() {
  console.log("[ScalpTreatmentPage] 두피치료 페이지 렌더링");

  const isMobile = useMediaQuery("(max-width: 1023px)");

  // 텍스트 컨텐츠 설정 - 데스크탑/모바일 별 띄어쓰기 구분
  const textContent = {
    section1: {
      title: {
        desktop: (
          <>
            두피치료,
            <br />
            가장 효과적인 방법만
            <br />
            남겼습니다.
          </>
        ),
        mobile: (
          <>
            두피치료,
            <br />
            가장 효과적인 방법만
            <br />
            남겼습니다.
          </>
        ),
      },
      description: {
        desktop: (
          <>
            모발이식과 약물치료 만으로 충분하다고 생각했습니다.
            <br />
            하지만, 그 두가지 치료 사이의
            <br />
            부족함을 채울 방법이 분명히 필요했지요.
            <br />
            <br />
            수많은 논문과 사례를 통해
            <br />
            가장 효과적인 치료만 남겼습니다.
          </>
        ),
        mobile: (
          <>
            모발이식과 약물치료 만으로 충분하다고
            <br />
            생각했습니다.
            <br />
            <br />
            하지만,
            <br />
            그 두가지 치료 사이의 부족함을 채울 방법이
            <br />
            분명히 필요했지요.
            <br />
            <br />
            수많은 논문과 사례를 통해
            <br />
            가장 효과적인 치료만 남겼습니다.
          </>
        ),
      },
    },
    section3: {
      title: "1550nm 어븀글라스 프락셀 레이저",
      subtitle: {
        desktop: (
          <>
            이미 머리를 하신
            <br />
            고객이 가장 선호하는 시술
          </>
        ),
        mobile: (
          <>
            이미 모발이식을 하신 고객이
            <br />
            가장 선호하는 시술
          </>
        ),
      },
      description: {
        desktop: (
          <>
            1550nm 어븀글라스는 피부의 깊은 곳까지
            <br />
            열을 전달해서 진피층의 콜라겐을 활성화하고,
            <br />
            모낭을 자극하여 모발 성장을 촉진합니다.
          </>
        ),
        mobile: (
          <>
            1550nm 어븀글라스는 피부의 깊은 곳까지
            <br />
            열을 전달해서 진피층의 콜라겐을 활성화하고,
            <br />
            모낭을 자극하여 모발 성장을 촉진합니다.
          </>
        ),
      },
    },
    section4: {
      title: "약물 주사 치료",
      subtitle: {
        desktop: (
          <>
            모든 두피가 같지 않듯,
            <br />
            치료도 달라야 합니다.
          </>
        ),
        mobile: (
          <>
            모든 두피가 같지 않듯,
            <br />
            치료도 달라야 합니다.
          </>
        ),
      },
      description: {
        desktop: (
          <>
            작은 바람과 배려의 마음으로 주사 시술 시<br />
            영하 30도의 찬 바람으로 통증을 최소화 합니다.
          </>
        ),
        mobile: (
          <>
            작은 바람과 배려의 마음으로
            <br />
            주사 시술 시 영하 30도의 찬 바람으로
            <br />
            통증을 최소화 합니다.
          </>
        ),
      },
    },
    section5: {
      title: "줄기세포 유래 성장인자",
      subtitle: {
        desktop: (
          <>
            줄기세포 유래 성장인자만을
            <br />
            선별한 고농축 치료법
          </>
        ),
        mobile: (
          <>
            줄기세포 유래 성장인자만을
            <br />
            선별한 고농축 치료법
          </>
        ),
      },
      description: {
        desktop: (
          <>
            혈액 속에서 선별한 고농축 줄기세포 유래 성장인자로
            <br />
            모낭 줄기세포를 자극하고 모발 성장 주기를 되살리는
            <br />
            재생 치료입니다. 두피 주사로 탈모를 치료하고 정맥 주사로
            <br />
            노화의 속도를 늦춰줍니다.
          </>
        ),
        mobile: (
          <>
            혈액 속에서 선별한 고농축
            <br />
            줄기세포 유래 성장인자로 모낭 줄기세포를
            <br />
            자극하고 모발 성장 주기를 되살리는
            <br />
            재생 치료입니다.
            <br />
            <br />
            두피 주사로 탈모를 치료하고
            <br />
            정맥 주사로 노화의 속도를 늦춰줍니다.
          </>
        ),
      },
    },
    section6: {
      title: {
        desktop: (
          <>
            저출력 레이저 LLLT
            <br />
            (Low-Level Laser Therapy)
          </>
        ),
        mobile: (
          <>
            저출력 레이저 LLLT
            <br />
            (Low-Level Laser Therapy)
          </>
        ),
      },
      subtitle: {
        desktop: (
          <>
            저출력 레이저(LLLT)로
            <br />
            모낭의 회복력을 높이고
            <br />
            세포 대사를 활성화 시킵니다.
          </>
        ),
        mobile: (
          <>
            저출력 레이저(LLLT)로 모낭의
            <br />
            회복력을 높이고 세포 대사를
            <br />
            활성화 시킵니다.
          </>
        ),
      },
      description: {
        desktop: (
          <>
            빛의 자극으로 세포 대사를 활성화시키고,
            <br />
            염증 반응을 억제하는 탈모 치료의 부드러운 마무리입니다.
          </>
        ),
        mobile: (
          <>
            빛의 자극으로 세포 대사를
            <br />
            활성화시키고, 염증 반응을 억제하는
            <br />
            탈모 치료의 부드러운 마무리입니다.
          </>
        ),
      },
    },
  };

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
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
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
              src="/forehead/hero-illustration.svg"
              alt="두피치료 일러스트"
              className={styles.heroIllustrationImage}
            />
          </div>
        </div>
        {/* 모바일 일러스트 - Hero Container 밖에 위치 */}
        <img
          src="/forehead/mobile/hero-illustration.svg"
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
            <div className={styles.scalpTreatmentVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423104?h=9505a82a8f&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onLoad={handleVimeoLoad}
                onError={() => {
                  console.error("[VideoSection/Vimeo에러] iframe 로드 실패");
                }}
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 1: 두피치료 소개 */}
      <section ref={section1Ref} className={styles.introSection}>
        <div className={styles.introContainer}>
          {/* 왼쪽 텍스트 */}
          <div className={styles.introTextContent}>
            <h2 className={styles.introTitle}>
              {isMobile
                ? textContent.section1.title.mobile
                : textContent.section1.title.desktop}
            </h2>
            <div className={styles.introImageContent}>
              <div className={styles.introImageContainer}>
                <img
                  src="/scalp-treatment/scalp-treatment-1.png"
                  alt="두피치료 의료진"
                  className={styles.introImage}
                />
              </div>
            </div>
            <p className={styles.introDescription}>
              {isMobile
                ? textContent.section1.description.mobile
                : textContent.section1.description.desktop}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 치료방법 카드들 */}
      <motion.section
        ref={treatmentCardsRef}
        className={styles.treatmentCardsSection}
        initial={!isMobile ? { opacity: 0, translateY: 80 } : {}}
        animate={
          !isMobile && treatmentCardsInView
            ? { opacity: 1, translateY: 0 }
            : !isMobile
            ? { opacity: 0, translateY: 80 }
            : {}
        }
        transition={{ duration: 0.6 }}
      >
        <div className={styles.treatmentCardsContainer}>
          <TreatmentCard
            number="1"
            image="/scalp-treatment/scalp-treatment-2.png"
            alt="어븀글라스 프락셀 레이저"
            title="어븀글라스 프락셀 레이저"
            isMobile={isMobile}
          />

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          <TreatmentCard
            number="2"
            image="/scalp-treatment/scalp-treatment-3.png"
            alt="주사 시술"
            title="주사 시술"
            isMobile={isMobile}
          />

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          <TreatmentCard
            number="3"
            image="/scalp-treatment/scalp-treatment-4.png"
            alt="MTS 치료"
            title="MTS 치료"
            isMobile={isMobile}
          />

          <div className={styles.treatmentArrow}>
            <img
              src="/scalp-treatment/arrow-right.svg"
              alt="화살표"
              className={styles.treatmentArrowImg}
            />
          </div>

          <TreatmentCard
            number="4"
            image="/scalp-treatment/scalp-treatment-5.png"
            alt="저출력 레이저 LLLT"
            title="저출력 레이저 LLLT"
            isMobile={isMobile}
          />

          {!isMobile && <div className={styles.treatmentArrow}></div>}

          <div style={isMobile ? { marginTop: mvw(31) } : {}}>
            <TreatmentCard
              number="5"
              image="/scalp-treatment/scalp-treatment-6.png"
              alt="정맥 주사"
              title="정맥 주사"
              isMobile={isMobile}
            />
          </div>
        </div>
      </motion.section>

      {/* Section 3: 1550nm 어븀글라스 프락셀 레이저 */}
      <section ref={section3Ref} className={styles.treatmentDetailSection}>
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423121?h=383908a6bd&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              {textContent.section3.title}
            </h2>
            <h3
              className={styles.treatmentSubtitleCustomMargin}
              style={
                {
                  "--margin-bottom": vw(144),
                  "--margin-bottom-desktop": "144px",
                } as React.CSSProperties
              }
            >
              {isMobile
                ? textContent.section3.subtitle.mobile
                : textContent.section3.subtitle.desktop}
            </h3>
            <p className={styles.treatmentDescription}>
              {isMobile
                ? textContent.section3.description.mobile
                : textContent.section3.description.desktop}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 약물 주사 치료 */}
      <section ref={section4Ref} className={styles.treatmentDetailSection}>
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423131?h=0371d1d722&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              {textContent.section4.title}
            </h2>
            <h3 className={styles.treatmentSubtitle}>
              {isMobile
                ? textContent.section4.subtitle.mobile
                : textContent.section4.subtitle.desktop}
            </h3>
            <p
              className={styles.treatmentDescriptionCustomMargin}
              style={
                {
                  "--margin-bottom": vw(108),
                  "--margin-bottom-desktop": "108px",
                } as React.CSSProperties
              }
            >
              {isMobile
                ? textContent.section4.description.mobile
                : textContent.section4.description.desktop}
            </p>
            <div className={styles.treatmentImageContainer}>
              <img
                src="/scalp-treatment/scalp-treatment-7.jpg"
                alt="약물 주사 치료"
                className={styles.treatmentImage}
              />
              <img
                src="/scalp-treatment/scalp-treatment-8.jpg"
                alt="약물 주사 치료"
                className={styles.treatmentImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 줄기세포 유래 성장인자 */}
      <section ref={section5Ref} className={styles.treatmentDetailSection}>
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423150?h=ae4e69a9a3&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              {textContent.section5.title}
            </h2>
            <h3 className={styles.treatmentSubtitle}>
              {isMobile
                ? textContent.section5.subtitle.mobile
                : textContent.section5.subtitle.desktop}
            </h3>
            <p
              className={styles.treatmentDescriptionCustomMargin}
              style={
                {
                  "--margin-bottom": vw(36),
                  "--margin-bottom-desktop": "36px",
                } as React.CSSProperties
              }
            >
              {isMobile
                ? textContent.section5.description.mobile
                : textContent.section5.description.desktop}
            </p>
            <div className={styles.treatmentImageContainer}>
              <img
                src="/scalp-treatment/scalp-treatment-9.jpg"
                alt="약물 주사 치료"
                className={styles.treatmentImage}
              />
              <img
                src="/scalp-treatment/scalp-treatment-10.jpg"
                alt="약물 주사 치료"
                className={styles.treatmentImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 저출력 레이저 LLLT */}
      <section
        ref={section6Ref}
        className={styles.treatmentDetailSectionCustomPadding}
        style={
          {
            "--padding-bottom": "0",
            "--padding-bottom-desktop": "0",
            "--padding-bottom-mobile": "0",
          } as React.CSSProperties
        }
      >
        <div className={styles.treatmentDetailContainer}>
          {/* 왼쪽 영상 */}
          <div className={styles.treatmentVideoContent}>
            <div className={styles.smallVideoContainer}>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1121423165?h=eb13c32221&background=1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                className={styles.vimeoIframe}
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className={styles.treatmentTextContent}>
            <h2 className={styles.treatmentTitle}>
              {isMobile
                ? textContent.section6.title.mobile
                : textContent.section6.title.desktop}
            </h2>
            <h3
              className={styles.treatmentSubtitleCustomMargin}
              style={
                {
                  "--margin-bottom": vw(244),
                  "--margin-bottom-desktop": "244px",
                } as React.CSSProperties
              }
            >
              {isMobile
                ? textContent.section6.subtitle.mobile
                : textContent.section6.subtitle.desktop}
            </h3>
            <p className={styles.treatmentDescription}>
              {isMobile
                ? textContent.section6.description.mobile
                : textContent.section6.description.desktop}
            </p>
          </div>
        </div>
      </section>

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
