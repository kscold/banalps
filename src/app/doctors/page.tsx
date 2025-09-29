"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

import * as styles from "./DoctorsPage.css"
import { useDoctorsTranslations } from "@/hooks/useAllPagesTranslations"
import { useLanguageStore } from "@/shared/stores/useLanguageStore"
import { useAcademicActivities } from "@/hooks/useAcademicActivities"

export default function DoctorsPage() {
  console.log("[DoctorsPage] 의료진 소개 페이지 렌더링")

  // 번역 훅
  const t = useDoctorsTranslations()

  // 언어 스토어
  const { language } = useLanguageStore()

  // 학술활동 훅
  const { getAllActivities, getAvailableYears } = useAcademicActivities()

  // 모바일 감지 상태
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // 선택된 연도 상태
  const [selectedYear, setSelectedYear] = useState<number>(2021)

  // 스크롤 관련 ref

  const academicSectionRef = useRef<HTMLElement>(null)
  const tableContainerRef = useRef<HTMLDivElement>(null)

  // 연도 클릭 핸들러
  const handleYearClick = (year: number) => {
    console.log("[DoctorsPage/연도클릭] 연도 변경:", year)
    setSelectedYear(year)
  }

  return (
    <div className={styles.doctorsPage}>
      {/* Medical Team Section */}
      <section className={styles.medicalTeamSection}>
        <div className={styles.medicalTeamContainer}>
          {/* 섹션 헤더 */}
          <div className={styles.medicalTeamHeader}>
            <div className={styles.medicalTeamTitleSection}>
              <h1 className={styles.medicalTeamMainTitle}>
                {t.hero.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < t.hero.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h1>
            </div>
            <div className={styles.medicalTeamHeroSection}>
              <motion.img
                src="/doctors/intro/doctors-intro-1.svg"
                alt="Banal Medical Team"
                className={styles.medicalTeamHeroTitle}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* 신승규 원장 */}
        <div className={styles.doctorSection}>
          {/* 모바일 전용 컨테이너 */}
          {isMobile ? (
            <div className={styles.doctorMobileContainer}>
              {/* 모바일 헤더 - 타이틀 */}
              <div className={styles.doctorMobileMainSection}>
                <div className={styles.doctorMobileHeader}>
                  <h1 className={styles.doctorMobileTitle}>
                    {language === "JP" ? (
                      <>
                        毛髪移植
                        <br />
                        15年の専門医。
                      </>
                    ) : (
                      <>
                        모발이식
                        <br />
                        15년 전문의.
                      </>
                    )}
                  </h1>
                </div>
                {/* 의사 정보 - 이미지와 텍스트 오버레이 */}
                <div className={styles.doctorMobileInfoSection}>
                  <img
                    src="/doctors/mobile/doctor-shinseunggyu-mobile.png"
                    alt="신승규 원장 모바일"
                    className={styles.doctorMobileInfoImage}
                  />
                  <div className={styles.doctorMobileInfoOverlay}>
                    <h2 className={`${styles.doctorMobileName} font-exception`}>
                      Shin
                      <br />
                      Seung
                      <br />
                      gyu
                    </h2>
                    <p className={styles.doctorMobilePosition}>
                      {t.doctorInfo.specialist}
                    </p>
                    <p className={styles.doctorMobileNameBold}>
                      {t.doctors[0].position}
                    </p>
                  </div>
                </div>
                {/* 명언 섹션 - 이미지로 대체 */}
                <div className={styles.doctorMobileQuoteSection}>
                  <img
                    src="/doctors/mobile/doctor-shinseunggyu-talk-mobile.svg"
                    alt="신승규 원장 명언"
                    className={styles.doctorMobileQuoteImage}
                  />
                </div>
              </div>
              <div className={styles.doctorMobileCredentials}>
                <ul className={styles.doctorMobileCredentialList}>
                  {t.doctors[0].credentials.map((credential, index) => (
                    <li
                      key={index}
                      className={styles.doctorMobileCredentialItem}
                    >
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* 데스크탑 컨텐츠 */
            <div className={styles.doctorContent}>
              <div className={styles.doctorName}>
                <h3 className={`${styles.doctorNameText} font-exception`}>
                  Shin
                  <br />
                  Seung gyu
                </h3>
              </div>

              <div className={styles.doctorTitle}>
                <p className={styles.doctorSpecialty}>
                  {t.doctorInfo.specialist}
                </p>
                <h4 className={styles.doctorPosition}>
                  {t.doctors[0].position}
                </h4>
              </div>

              <div className={styles.doctorInfo}>
                <div className={styles.doctorCredentials}>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      {t.doctors[0].credentials
                        .slice(0, 3) // 첫 번째 컬럼에 3개
                        .map((credential, index) => (
                          <li key={index} className={styles.credentialItem}>
                            • {credential}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      {t.doctors[0].credentials
                        .slice(3) // 두 번째 컬럼에 나머지 4개
                        .map((credential, index) => (
                          <li key={index + 3} className={styles.credentialItem}>
                            • {credential}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  language === "JP"
                    ? styles.doctorQuote1JP
                    : styles.doctorQuote1
                }`}
              >
                <div className={styles.doctorQuoteText1}>
                  <img
                    src="/doctors/profile/double-quotation-start.svg"
                    alt="따옴표 시작"
                    className={styles.quotationStart}
                  />
                  <p className={styles.doctorQuoteTextParagraph}>
                    {t.doctors[0].quote.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < t.doctors[0].quote.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                  <img
                    src="/doctors/profile/double-quotation-end.svg"
                    alt="따옴표 끝"
                    className={styles.quotationEnd}
                  />
                </div>
              </div>

              <div className={styles.doctorSubImage}>
                <motion.img
                  src="/doctors/profile/doctors-profile-1.png"
                  alt="의료진 소개 인트로 2"
                  className={styles.doctorSubImg}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                />
              </div>
              <div className={styles.doctorSubImage2}>
                <motion.img
                  src="/doctors/profile/doctors-profile-2.png"
                  alt="신승규 원장 서브 이미지 2"
                  className={styles.doctorSubImg}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                />
              </div>

              <div className={styles.doctorImageContainer}>
                <img
                  src="/doctors/person/doctor-shinseunggyu.png"
                  alt="신승규 원장"
                  className={styles.doctorMainImage}
                />
              </div>
            </div>
          )}
        </div>

        {/* 박수호 원장 */}
        <div className={styles.doctorSection}>
          {/* 모바일 전용 컨테이너 */}
          {isMobile ? (
            <div className={styles.doctorMobileContainer}>
              <div className={styles.doctorMobileMainSection}>
                {/* 의사 정보 - 이미지와 텍스트 오버레이 */}
                <div className={styles.doctorMobileInfoSection}>
                  <img
                    src="/doctors/mobile/doctor-parksoohyo-mobile.png"
                    alt="박수호 원장 모바일"
                    className={styles.doctorMobileInfoImage}
                  />
                  <div className={styles.doctorMobileInfoOverlay}>
                    <h2
                      className={`${styles.doctorMobileName2} font-exception`}
                    >
                      Park
                      <br />
                      Soo Ho
                    </h2>
                    <p className={styles.doctorMobilePosition}>
                      {(t.doctorInfo as any).parkSpecialist || t.doctorInfo.specialist}
                      <br />
                      {(t.doctorInfo as any).parkAbhrs || t.doctorInfo.abhrs}
                    </p>
                    <p className={styles.doctorMobileNameBold}>
                      {t.doctors[1].position}
                    </p>
                  </div>
                </div>
                {/* 명언 섹션 - 이미지로 대체 */}
                <div className={styles.doctorMobileQuoteSection}>
                  <img
                    src="/doctors/mobile/doctor-parksoohyo-talk-mobile.svg"
                    alt="박수호 원장 명언"
                    className={styles.doctorMobileQuoteImage}
                  />
                </div>
              </div>
              <div className={styles.doctorMobileCredentials}>
                <ul className={styles.doctorMobileCredentialList}>
                  {t.doctors[1].credentials.map((credential, index) => (
                    <li
                      key={index}
                      className={styles.doctorMobileCredentialItem}
                    >
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* 데스크탑 컨텐츠 */
            <div className={styles.doctorContentReversed}>
              <div className={styles.doctorName2}>
                <h3 className={`${styles.doctorNameText} font-exception`}>
                  Park
                  <br />
                  Soo Ho
                </h3>
              </div>

              <div className={styles.doctorTitle2}>
                <p className={styles.doctorSpecialty}>
                  {(t.doctorInfo as any).parkSpecialist || t.doctorInfo.specialist}
                  <br />
                  {(t.doctorInfo as any).parkAbhrs || t.doctorInfo.abhrs}
                </p>
                <h4 className={styles.doctorPosition}>
                  {t.doctors[1].position}
                </h4>
              </div>

              <div className={styles.doctorInfo2}>
                <div className={styles.doctorCredentials}>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      {t.doctors[1].credentials
                        .slice(0, 2) // 첫 번째 컬럼에 2개
                        .map((credential, index) => (
                          <li key={index} className={styles.credentialItem}>
                            • {credential}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      {t.doctors[1].credentials
                        .slice(2) // 두 번째 컬럼에 나머지 5개
                        .map((credential, index) => (
                          <li key={index + 2} className={styles.credentialItem}>
                            • {credential}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.doctorQuote2}>
                <div className={styles.doctorQuoteText2}>
                  <img
                    src="/doctors/profile/double-quotation-start.svg"
                    alt="따옴표 시작"
                    className={styles.quotationStart}
                  />
                  <p className={styles.doctorQuoteTextParagraph}>
                    {t.doctors[1].quote.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < t.doctors[1].quote.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                  <img
                    src="/doctors/profile/double-quotation-end.svg"
                    alt="따옴표 끝"
                    className={styles.quotationEnd}
                  />
                </div>
              </div>

              <div className={styles.doctorSubImagePark1}>
                <motion.img
                  src="/doctors/profile/doctors-profile-3.png"
                  alt="박수호 원장 서브 이미지 1"
                  className={styles.doctorSubImg}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className={styles.doctorSubImagePark2}>
                <motion.img
                  src="/doctors/profile/doctors-profile-4.png"
                  alt="박수호 원장 서브 이미지 2"
                  className={styles.doctorSubImg}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                />
              </div>

              <div className={styles.doctorImageContainer2}>
                <img
                  src="/doctors/person/doctor-parksooho.png"
                  alt="박수호 원장"
                  className={styles.doctorMainImage}
                />
              </div>
            </div>
          )}
        </div>

        {/* 김나래 원장 */}
        <div className={styles.doctorSection}>
          {/* 모바일 전용 컨테이너 */}
          {isMobile ? (
            <div className={styles.doctorMobileContainer}>
              <div className={styles.doctorMobileMainSection}>
                <div className={styles.doctorMobileInfoSection}>
                  <img
                    src="/doctors/mobile/doctor-kimnarae-mobile.png"
                    alt="김나래 원장 모바일"
                    className={styles.doctorMobileInfoImage}
                  />
                  <div className={styles.doctorMobileInfoOverlay}>
                    <h2 className={`${styles.doctorMobileName} font-exception`}>
                      Kim
                      <br />
                      Narae
                    </h2>
                    <p className={styles.doctorMobilePosition}>
                      {t.doctorInfo.specialist}
                    </p>
                    <p className={styles.doctorMobileNameBold}>
                      {t.doctors[2].position}
                    </p>
                  </div>
                </div>
                <div className={styles.doctorMobileQuoteSection}>
                  <img
                    src="/doctors/mobile/doctor-kimnarae-talk-mobile.svg"
                    alt="김나래 원장 quote"
                    className={styles.doctorMobileQuoteImage}
                  />
                </div>
              </div>
              <div className={styles.doctorMobileCredentials}>
                <ul className={styles.doctorMobileCredentialList}>
                  {t.doctors[2].credentials.map((credential, index) => (
                    <li
                      key={index}
                      className={styles.doctorMobileCredentialItem}
                    >
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* 데스크탑 컨텐츠 */
            <div className={styles.doctorContent}>
              <div className={styles.doctorName3}>
                <h3 className={`${styles.doctorNameText} font-exception`}>
                  Kim
                  <br />
                  Narae
                </h3>
              </div>

              <div className={styles.doctorTitle3}>
                <p className={styles.doctorSpecialty}>
                  {t.doctorInfo.specialist}
                </p>
                <h4 className={styles.doctorPosition}>
                  {t.doctors[2].position}
                </h4>
              </div>

              <div className={styles.doctorInfo}>
                <div className={styles.doctorCredentials}>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      {t.doctors[2].credentials
                        .slice(0, 2) // 첫 번째 컬럼에 2개
                        .map((credential, index) => (
                          <li key={index} className={styles.credentialItem}>
                            • {credential}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      {t.doctors[2].credentials
                        .slice(2) // 두 번째 컬럼에 나머지 5개
                        .map((credential, index) => (
                          <li key={index + 2} className={styles.credentialItem}>
                            • {credential}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.doctorQuote3}>
                <div className={styles.doctorQuoteText3}>
                  <img
                    src="/doctors/profile/double-quotation-start.svg"
                    alt="따옴표 시작"
                    className={styles.quotationStart}
                  />
                  <p className={styles.doctorQuoteTextParagraph}>
                    {t.doctors[2].quote.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < t.doctors[2].quote.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                  <img
                    src="/doctors/profile/double-quotation-end.svg"
                    alt="따옴표 끝"
                    className={styles.quotationEnd}
                  />
                </div>
              </div>

              <div className={styles.doctorSubImageKim1}>
                <motion.img
                  src="/doctors/profile/doctors-profile-5.png"
                  alt="김나래 원장 서브 이미지 1"
                  className={styles.doctorSubImg}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
                />
              </div>
              <div className={styles.doctorSubImageKim2}>
                <motion.img
                  src="/doctors/profile/doctors-profile-6.png"
                  alt="김나래 원장 서브 이미지 2"
                  className={styles.doctorSubImg}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 2.0, ease: "easeOut" }}
                />
              </div>

              <div className={styles.doctorImageContainer3}>
                <img
                  src="/doctors/person/doctor-kimnarae.png"
                  alt="김나래 원장"
                  className={styles.doctorMainImage}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* History Section */}
      <section className={styles.historySection}>
        <div className={styles.historyContainer}>
          {/* 연혁 타이틀 */}
          <div className={styles.historyHeader}>
            <h2 className={styles.historyTitle}>
              {t.academicHistory.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t.academicHistory.title.split("\n").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </h2>
          </div>

          {/* 데스크탑 타임라인 */}
          <div className={styles.timelineDesktop}>
            <div className={styles.timelineLayout}>
              {/* 첫 번째 라인: 2011 - 화살표 - 첫 번째 이미지 */}
              <div className={styles.timelineFirstRow}>
                {/* 2011년 그룹 */}
                <div className={styles.year2011Group}>
                  <img
                    src="/doctors/timeline/2011.svg"
                    alt="2011년 그룹"
                    className={styles.year2011Image}
                  />
                </div>

                {/* 화살표 */}
                <div className={styles.timelineArrow}>
                  <img
                    src="/doctors/timeline/arrow.svg"
                    alt="화살표"
                    className={styles.timelineArrowSvg}
                  />
                </div>

                {/* 첫 번째 프로필 이미지 */}
                <div className={styles.timelineImage1}>
                  <img
                    src="/doctors/timeline/timeline-profile-1.png"
                    alt="타임라인 프로필 1"
                    className={styles.timelineImageContent}
                  />
                </div>
              </div>

              {/* 두 번째 라인: 두 번째 이미지 - 파란색 원 - 2024 */}
              <div className={styles.timelineSecondRow}>
                {/* 두 번째 프로필 이미지 */}
                <div className={styles.timelineImage2}>
                  <img
                    src="/doctors/timeline/timeline-profile-2.png"
                    alt="타임라인 프로필 2"
                    className={styles.timelineImageContent}
                  />
                </div>

                {/* SVG 아이콘 */}
                <div className={styles.circleIcon}>
                  <img
                    src="/doctors/timeline/design-circle.svg"
                    alt="타임라인 디자인 원형"
                    className={styles.circleIconSvg}
                  />
                </div>

                {/* 파란색 원형 */}
                <div className={styles.circleIconGroup}>
                  <div className={styles.blueCircle}></div>
                </div>

                {/* 2024년 그룹 */}
                <div className={styles.year2024Group}>
                  <img
                    src="/doctors/timeline/2024.svg"
                    alt="2024년 그룹"
                    className={styles.year2024Image}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 모바일 타임라인 */}
          <div className={styles.timelineMobile}>
            <div className={styles.timelineMobileContent}>
              <div className={styles.timelineMobileYear}>
                <img src="/doctors/mobile/2011.svg" alt="2011년" />
              </div>
              <div className={styles.timelineArrowMobile}>
                <img src="/doctors/mobile/arrow.svg" alt="화살표" />
              </div>
              <div className={styles.timelineMobileYear}>
                <img src="/doctors/mobile/2024.svg" alt="2024년" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Activities Section */}
      <section
        className={styles.academicActivitiesSection}
        ref={academicSectionRef}
      >
        <div className={styles.academicActivitiesContainer}>
          <div className={styles.academicActivitiesLayout}>
            {/* 오른쪽 학술활동 콘텐츠 */}
            <div className={styles.academicContent}>
              {/* 제목 */}
              <h2 className={styles.academicContentTitle}>학회 발표 및 논문</h2>

              {/* 학술활동 목록 테이블 */}
              <div className={styles.academicTable}>
                <div
                  ref={tableContainerRef}
                  className={styles.academicTableContainer}
                >
                  {getAllActivities().length > 0 ? (
                    getAllActivities().map((activity, index) => {
                      const isFirst = index === 0
                      const isLast = index === getAllActivities().length - 1

                      return (
                        <div
                          key={index}
                          className={`${styles.academicTableRow} ${
                            isFirst ? styles.firstRow : ""
                          } ${isLast ? styles.lastRow : ""}`}
                        >
                          <div className={styles.academicRowDate}>
                            {activity.date}
                          </div>
                          <div className={styles.academicRowCategory}>
                            <div className={styles.categoryBadge}>
                              {activity.type}
                            </div>
                          </div>
                          <div className={styles.academicRowEvent}>
                            {activity.event}
                          </div>
                          <div className={styles.academicRowTitle}>
                            {activity.title}
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <div
                      className={`${styles.academicTableRow} ${styles.firstRow} ${styles.lastRow}`}
                    >
                      <div className={styles.academicRowDate}>-</div>
                      <div className={styles.academicRowCategory}>
                        <div className={styles.categoryBadge}>-</div>
                      </div>
                      <div className={styles.academicRowEvent}>
                        {t.academicHistory.noActivities}
                      </div>
                      <div className={styles.academicRowTitle}>-</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timelineGraffitiSection}>
        <img
          src="/doctors/timeline/timeline_graffiti.svg"
          alt="timeline_graffiti"
          className={styles.timelineGraffiti}
        />
        <img
          src="/doctors/mobile/timeline-graffiti-mobile.svg"
          alt="timeline_graffiti"
          className={styles.timelineGraffitiMobile}
        />
      </section>
    </div>
  )
}
