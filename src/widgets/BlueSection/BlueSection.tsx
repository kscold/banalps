"use client"

import { useEffect, useState } from "react"
import * as styles from "./BlueSection.css"
import { ArrowButton } from "../../shared/ui/ArrowButton"
import { useBlueScroll } from "../../shared/hooks/useBlueScroll"

interface BlueSectionProps {
  isActive?: boolean
  onTransitionToVideo?: () => void
}

export default function BlueSection({
  isActive = false,
  onTransitionToVideo = () => {},
}: BlueSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  // 블루섹션 전용 스크롤 훅 사용
  const { canTransitionToVideo } = useBlueScroll({
    isActive,
    onTransitionToVideo,
  })

  useEffect(() => {
    console.log("[BlueSection/마운트] 블루 섹션 컴포넌트 마운트")
    console.log(
      "[BlueSection/상태] isActive:",
      isActive,
      "canTransitionToVideo:",
      canTransitionToVideo
    )
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [isActive, canTransitionToVideo])

  // 바날 로컬 서비스 항목들
  const localServices = [
    {
      number: "01",
      title: "서초구 지역 맞춤 서비스",
      description:
        "서초구 신반포로 47길 66 위치의 바날하우스에서\n지역 주민들을 위한 맞춤형 모발 이식 서비스를 제공합니다.",
    },
    {
      number: "02",
      title: "신사역 4번출구 331M",
      description:
        "신사역 4번출구에서 도보 5분 거리에 위치하여\n접근성이 뛰어난 위치에서 편리한 진료를 받으실 수 있습니다.",
    },
    {
      number: "03",
      title: "논현역 8번출구 330M",
      description:
        "논현역 8번출구에서도 가까운 거리에 위치하여\n지하철 이용이 편리한 환자분들을 위한 최적의 위치입니다.",
    },
    {
      number: "04",
      title: "지역 커뮤니티 참여",
      description:
        "서초구 지역 커뮤니티와 함께하는 다양한 건강 프로그램과\n지역 주민을 위한 특별 혜택을 제공합니다.",
    },
    {
      number: "05",
      title: "로컬 파트너십",
      description:
        "지역 내 미용실, 헤어샵과의 협력을 통한\n종합적인 헤어케어 솔루션을 제공합니다.",
    },
    {
      number: "06",
      title: "지역 맞춤 상담",
      description:
        "서초구 지역 특성을 고려한 맞춤형 상담과\n지역 주민만을 위한 특별 프로그램을 운영합니다.",
    },
  ]

  return (
    <section
      className={`${styles.blueSection} ${isVisible ? styles.visible : ""}`}
    >
      {/* 이미지 카드 섹션 - Figma 정확 반영 */}
      <div className={styles.imageCardsSection}>
        {/* 이미지 카드 1 */}
        <div className={styles.imageCard1}>
          <img
            src="/main/shot/shot1.png"
            alt="Shin Seung gyu"
            className={styles.cardImage}
          />
        </div>

        {/* 이미지 카드 2 */}
        <div className={styles.imageCard2}>
          <img
            src="/main/shot/shot2.png"
            alt="Park Soo Ho"
            className={styles.cardImage}
          />
        </div>

        {/* 이미지 카드 3 */}
        <div className={styles.imageCard3}>
          <img
            src="/main/shot/shot3.png"
            alt="Kim Narae"
            className={styles.cardImage}
          />
        </div>

        {/* 이미지 카드 4 */}
        <div className={styles.imageCard4}>
          <img
            src="/main/shot/shot4.png"
            alt="의료진 4"
            className={styles.cardImage}
          />
        </div>
      </div>

      {/* RE.YOU 텍스트 섹션 */}
      <div className={styles.reYouSection}>
        {/* 텍스트 콘텐츠 */}
        <h2 className={styles.reYouTitle}>RE.YOU</h2>
        <p className={styles.reYouSubtitle}>다시, 특별한 당신으로</p>

        {/* 그래피티 배경 이미지 */}
        <img
          src="/main/banal_graffiti.svg"
          alt="Banal Graffiti"
          className={styles.graffitiBackground}
        />
      </div>

      {/* 바날 로컬 섹션 */}
      <div className={styles.whatBanalSection}>
        <div className={styles.whatBanalContent}>
          {/* 왼쪽 텍스트 영역 */}
          <div className={styles.whatBanalText}>
            <h2 className={styles.whatBanalTitle}>
              모발이식
              <br />
              15년 전문의.
            </h2>
            <p className={styles.whatBanalDescription}>
              모발 성형외과 전문의로서 15년
            </p>
            <p className={styles.whatBanalSubDescription}>
              수천 명의 일상 속 자신감을 지켜온 의료진이 다년간 축척된 시술
              경험을 바탕으로 모든 과정과 결과에  부끄럽지 않은 최적의 결과를
               만들어드립니다.
            </p>
            <ArrowButton size="medium" variant="primary">
              View More
            </ArrowButton>
          </div>

          {/* 오른쪽 6개 항목 리스트 */}
          <div className={styles.featuresList}>
            {localServices.map((service, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.featureNumber}>{service.number}</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{service.title}</h3>
                  <p className={styles.featureDescription}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 의료진 소개 섹션 - 피그마 디자인 기반 */}
      <div className={styles.doctorsSection}>
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
            <ArrowButton size="medium" variant="primary">
              View More
            </ArrowButton>
          </div>

          {/* 우측 의료진 이미지 섹션 */}
          <div className={styles.doctorsImageGrid}>
            {/* 신승규 원장 */}
            <div className={styles.doctorCard}>
              <div className={styles.doctorImageContainer}>
                <img
                  src="/main/person/대표원장_신승규.jpg"
                  alt="신승규 원장"
                  className={styles.doctorImage}
                />
                <div className={styles.doctorNameOverlay}>
                  <h3 className={styles.doctorEnglishName}>
                    Shin
                    <br />
                    Seung gyu
                  </h3>
                </div>
              </div>
              <p className={styles.doctorKoreanName}>대표원장 신 승규</p>
            </div>

            {/* 박수호 원장 */}
            <div className={styles.doctorCard}>
              <div className={styles.doctorImageContainer}>
                <img
                  src="/main/person/대표원장_박수호.jpg"
                  alt="박수호 원장"
                  className={styles.doctorImage}
                />
                <div className={styles.doctorNameOverlay}>
                  <h3 className={styles.doctorEnglishName}>
                    Park
                    <br />
                    Soo Ho
                  </h3>
                </div>
              </div>
              <p className={styles.doctorKoreanName}>대표원장 박 수호</p>
            </div>

            {/* 김나래 원장 */}
            <div className={styles.doctorCard}>
              <div className={styles.doctorImageContainer}>
                <img
                  src="/main/person/대표원장_김나래.jpg"
                  alt="김나래 원장"
                  className={styles.doctorImage}
                />
                <div className={styles.doctorNameOverlay}>
                  <h3 className={styles.doctorEnglishName}>
                    Kim
                    <br />
                    Narae
                  </h3>
                </div>
              </div>
              <p className={styles.doctorKoreanName}>대표원장 김 나래</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
