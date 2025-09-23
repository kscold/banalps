"use client";

import { useState, useRef, useEffect } from "react";
import * as styles from "./DoctorsPage.css";

// 학술활동 데이터 타입
interface AcademicActivity {
  date: string;
  type: string;
  event: string;
  title: string;
}

// 연도별 학술활동 데이터
const academicActivitiesByYear: Record<number, AcademicActivity[]> = {
  2025: [],
  2024: [],
  2023: [],
  2022: [
    {
      date: "2022. 11. 15",
      type: "발표",
      event: "2022 Asia Pacific Anti-Aging Conference",
      title: "Advanced Techniques in Hair Transplantation for Natural Results",
    },
    {
      date: "2022. 10. 20",
      type: "논문",
      event: "International Journal of Hair Research",
      title:
        "Long-term Outcomes of FUE Hair Transplantation: A 5-Year Follow-up Study",
    },
    {
      date: "2022. 9. 8",
      type: "수상",
      event: "제15차 대한모발이식학회 학술대회",
      title: "우수연구상 - 여성형 탈모의 새로운 치료 접근법",
    },
  ],
  2021: [
    {
      date: "2021. 12. 4",
      type: "발표",
      event: "2021 Asia Pacific Anti-Aging Conference",
      title:
        "Histological Analysis for the Cause of Kinky Hair after Hair Transplantation",
    },
    {
      date: "2021. 12. 4",
      type: "발표",
      event: "2021 제10차 대한모발이식학회 학술대회",
      title:
        "모발이식 수술 후 나타나는 꼬인 모발 (kinky hair)의 원인에 대한 조직학적 분석",
    },
    {
      date: "2021. 12. 4",
      type: "저널",
      event: "ISHRS 29th World Congress, Lisbon, Portugal",
      title: "Best Methodology CSI Presentation Award",
    },
    {
      date: "2021. 12. 4",
      type: "발표",
      event: "제16회 부산미용성형심포지엄 (BAPS)",
      title: "FUE(모낭단위채취술)을 이용한 여성환자의 이마라인 교정",
    },
    {
      date: "2021. 12. 4",
      type: "발표",
      event: "Aesthetic Plastic Surgery 2021",
      title: "Changing the Direction of Hair in Hairline Correction",
    },
    {
      date: "2021. 12. 4",
      type: "수상",
      event: "제14차 대한모발이식학회 학술대회",
      title: "최우수발표상",
    },
  ],
  2020: [
    {
      date: "2020. 11. 10",
      type: "논문",
      event: "Korean Journal of Dermatology",
      title: "COVID-19 팬데믹 시대의 안전한 모발이식 프로토콜",
    },
    {
      date: "2020. 8. 15",
      type: "발표",
      event: "Virtual ISHRS World Congress",
      title: "Minimally Invasive Hair Restoration Techniques",
    },
  ],
  2019: [
    {
      date: "2019. 9. 20",
      type: "발표",
      event: "제12차 대한모발이식학회 학술대회",
      title: "자연스러운 헤어라인 디자인을 위한 새로운 접근법",
    },
  ],
  2018: [],
  2017: [],
  2016: [],
  2015: [],
  2014: [],
  2013: [],
  2012: [],
  2011: [],
};

export default function DoctorsPage() {
  console.log("[DoctorsPage] 의료진 소개 페이지 렌더링");

  // 모바일 감지 상태
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 선택된 연도 상태
  const [selectedYear, setSelectedYear] = useState<number>(2021);

  // 스크롤 관련 ref

  const academicSectionRef = useRef<HTMLElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  // 연도 클릭 핸들러
  const handleYearClick = (year: number) => {
    console.log("[DoctorsPage/연도클릭] 연도 변경:", year);
    setSelectedYear(year);
  };

  // 선택된 연도의 학술활동 가져오기 (최대 6개)
  const getSelectedYearActivities = (): AcademicActivity[] => {
    const activities = academicActivitiesByYear[selectedYear] || [];
    return activities.slice(0, 6); // 최대 6개 항목만 표시
  };

  // 연도 목록과 선택된 연도의 인덱스 계산
  const yearsList = [
    2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014,
    2013, 2012, 2011,
  ];

  return (
    <div className={styles.doctorsPage}>
      {/* Medical Team Section */}
      <section className={styles.medicalTeamSection}>
        <div className={styles.medicalTeamContainer}>
          {/* 섹션 헤더 */}
          <div className={styles.medicalTeamHeader}>
            <div className={styles.medicalTeamTitleSection}>
              <h1 className={styles.medicalTeamMainTitle}>
                모발이식
                <br />
                15년 전문의.
              </h1>
            </div>
            <div className={styles.medicalTeamHeroSection}>
              <img
                src="/doctors/intro/doctors-intro-1.png"
                alt="의료진 소개 인트로 1"
                className={styles.doctorsIntroImage1}
              />
              <h2 className={styles.medicalTeamHeroTitle}>
                Banal
                <br />
                Medical Team
              </h2>
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
                    모발이식
                    <br />
                    15년 전문의.
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
                    <h2 className={styles.doctorMobileName}>
                      Shin
                      <br />
                      Seung
                      <br />
                      gyu
                    </h2>
                    <p className={styles.doctorMobilePosition}>
                      성형외과 전문의
                    </p>
                    <p className={styles.doctorMobileNameBold}>
                      대표원장 신 승규
                    </p>
                  </div>
                </div>
                {/* 명언 섹션 - 이미지로 대체 */}
                <div className={styles.doctorMobileQuoteSection}>
                  <img
                    src="/doctors/mobile/doctor-shinseunggyu-mobile-talk.png"
                    alt="신승규 원장 명언"
                    className={styles.doctorMobileQuoteImage}
                  />
                </div>
              </div>
              <div className={styles.doctorMobileCredentials}>
                <ul className={styles.doctorMobileCredentialList}>
                  <li className={styles.doctorMobileCredentialItem}>
                    현) 바람부는날에도 성형외과 대표원장
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    전) 모제림성형외과 여성센터 전담원장
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    전) 브라운 성형외과 원장
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    국제모발이식학회 (ISHRS) 정회원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한성형외과학회 (KSPRS) 종신회원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한미용성형외과학회 (KSAPS) 재무위원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한성형외과학회 모발성형연구회 정회원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한모발이식학회 (KSHRS) 정회원
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            /* 데스크탑 컨텐츠 */
            <div className={styles.doctorContent}>
              <div className={styles.doctorName}>
                <h3 className={styles.doctorNameText}>
                  Shin
                  <br />
                  Seung gyu
                </h3>
              </div>

              <div className={styles.doctorTitle}>
                <p className={styles.doctorSpecialty}>성형외과 전문의</p>
                <h4 className={styles.doctorPosition}>대표원장 신 승규</h4>
              </div>

              <div className={styles.doctorInfo}>
                <div className={styles.doctorCredentials}>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      <li className={styles.credentialItem}>
                        • 현) 바람부는날에도 성형외과 대표원장
                      </li>
                      <li className={styles.credentialItem}>
                        • 전) 모제림성형외과 여성센터 전담원장
                      </li>
                      <li className={styles.credentialItem}>
                        • 전) 브라운 성형외과 원장
                      </li>
                    </ul>
                  </div>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      <li className={styles.credentialItem}>
                        • 국제모발이식학회 (ISHRS) 정회원
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한성형외과학회 (KSPRS) 종신회원
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한미용성형외과학회 (KSAPS) 재무위원
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한성형외과학회 모발성형연구회 정회원
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한모발이식학회 (KSHRS) 정회원
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.doctorQuote1}>
                <div className={styles.doctorQuoteText1}>
                  <img
                    src="/doctors/profile/double-quotation-start.svg"
                    alt="따옴표 시작"
                    className={styles.quotationStart}
                  />
                  <p className={styles.doctorQuoteTextParagraph}>
                    첫 수술부터 순서와 방법을 잘 정해야 합니다.
                    <br />
                    순서가 뒤바뀌면 최선의 결과를 놓칠 수도 있습니다.
                  </p>
                  <img
                    src="/doctors/profile/double-quotation-end.svg"
                    alt="따옴표 끝"
                    className={styles.quotationEnd}
                  />
                </div>
              </div>

              <div className={styles.doctorSubImage}>
                <img
                  src="/doctors/profile/doctors-profile-1.png"
                  alt="의료진 소개 인트로 2"
                  className={styles.doctorSubImg}
                />
              </div>
              <div className={styles.doctorSubImage2}>
                <img
                  src="/doctors/profile/doctors-profile-2.png"
                  alt="신승규 원장 서브 이미지 2"
                  className={styles.doctorSubImg}
                />
              </div>

              <div className={styles.doctorImageContainer}>
                <img
                  src="/main/person/doctor-shinseunggyu.png"
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
                    <h2 className={styles.doctorMobileName2}>
                      Park
                      <br />
                      Soo Ho
                    </h2>
                    <p className={styles.doctorMobilePosition}>
                      성형외과 전문의
                      <br />
                      미국 모발이식외과 자격의
                      <br />
                      (ABHRS)
                    </p>
                    <p className={styles.doctorMobileNameBold}>
                      대표원장 박 수호
                    </p>
                  </div>
                </div>
                {/* 명언 섹션 - 이미지로 대체 */}
                <div className={styles.doctorMobileQuoteSection}>
                  <img
                    src="/doctors/mobile/doctor-parksoohyo-mobile-talk.png"
                    alt="박수호 원장 명언"
                    className={styles.doctorMobileQuoteImage}
                  />
                </div>
              </div>
              <div className={styles.doctorMobileCredentials}>
                <ul className={styles.doctorMobileCredentialList}>
                  <li className={styles.doctorMobileCredentialItem}>
                    현) 바람부는날에도 성형외과 대표원장
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    전) 모제림성형외과 여성센터 대표원장
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    국제모발이식학회 (ISHRS) 정회원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한성형외과학회 (KSPRS) 종신회원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한미용성형외과학회 (KSAPS) 학술위원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한성형외과학회 모발성형연구회 정회원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한모발이식학회 (KSHRS) 상임 학술이사
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            /* 데스크탑 컨텐츠 */
            <div className={styles.doctorContentReversed}>
              <div className={styles.doctorName2}>
                <h3 className={styles.doctorNameText}>
                  Park
                  <br />
                  Soo Ho
                </h3>
              </div>

              <div className={styles.doctorTitle2}>
                <p className={styles.doctorSpecialty}>
                  성형외과 전문의
                  <br />
                  미국 모발이식외과 자격의 (ABHRS)
                </p>
                <h4 className={styles.doctorPosition}>대표원장 박 수호</h4>
              </div>

              <div className={styles.doctorInfo2}>
                <div className={styles.doctorCredentials}>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      <li className={styles.credentialItem}>
                        • 현) 바람부는날에도 성형외과 대표원장
                      </li>
                      <li className={styles.credentialItem}>
                        • 전) 모제림성형외과 여성센터 대표원장
                      </li>
                    </ul>
                  </div>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      <li className={styles.credentialItem}>
                        • 국제모발이식학회 (ISHRS) 정회원
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한성형외과학회 (KSPRS) 종신회원
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한미용성형외과학회 (KSAPS) 학술위원
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한성형외과학회 모발성형연구회 정회원
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한모발이식학회 (KSHRS) 상임 학술이사
                      </li>
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
                    가장 중요한 건 환자가 원하는 거예요.
                    <br />
                    의사가 원하는 대로만 하면 결국 두 번 수술을 하게 됩니다.
                  </p>
                  <img
                    src="/doctors/profile/double-quotation-end.svg"
                    alt="따옴표 끝"
                    className={styles.quotationEnd}
                  />
                </div>
              </div>

              <div className={styles.doctorSubImagePark1}>
                <img
                  src="/doctors/profile/doctors-profile-3.png"
                  alt="박수호 원장 서브 이미지 1"
                  className={styles.doctorSubImg}
                />
              </div>
              <div className={styles.doctorSubImagePark2}>
                <img
                  src="/doctors/profile/doctors-profile-4.png"
                  alt="박수호 원장 서브 이미지 2"
                  className={styles.doctorSubImg}
                />
              </div>

              <div className={styles.doctorImageContainer2}>
                <img
                  src="/main/person/doctor-parksooho.png"
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
                    <h2 className={styles.doctorMobileName}>
                      Kim
                      <br />
                      Narae
                    </h2>
                    <p className={styles.doctorMobilePosition}>
                      성형외과 전문의
                    </p>
                    <p className={styles.doctorMobileNameBold}>
                      대표원장 김 나래
                    </p>
                  </div>
                </div>
                <div className={styles.doctorMobileQuoteSection}>
                  <img
                    src="/doctors/mobile/doctor-kimnarae-mobile-talk.png"
                    alt="김나래 원장 quote"
                    className={styles.doctorMobileQuoteImage}
                  />
                </div>
              </div>
              <div className={styles.doctorMobileCredentials}>
                <ul className={styles.doctorMobileCredentialList}>
                  <li className={styles.doctorMobileCredentialItem}>
                    현) 바람부는날에도 성형외과 대표원장
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    전) 다나 성형외과 여성 대표원장
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한모발이식학회 정회원
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    국제모발이식학회(ISHRS) 펜딩멤버
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    대한비만미용학회(KOAT) 학술이사
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    경희대학교 의과대학 졸업
                  </li>
                  <li className={styles.doctorMobileCredentialItem}>
                    경희의료원 전문의 수료
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            /* 데스크탑 컨텐츠 */
            <div className={styles.doctorContent}>
              <div className={styles.doctorName3}>
                <h3 className={styles.doctorNameText}>
                  Kim
                  <br />
                  Narae
                </h3>
              </div>

              <div className={styles.doctorTitle3}>
                <p className={styles.doctorSpecialty}>성형외과 전문의</p>
                <h4 className={styles.doctorPosition}>대표원장 김 나래</h4>
              </div>

              <div className={styles.doctorInfo}>
                <div className={styles.doctorCredentials}>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      <li className={styles.credentialItem}>
                        • 현) 바람부는날에도 성형외과 대표원장
                      </li>
                      <li className={styles.credentialItem}>
                        • 전) 다나 성형외과 여성 대표원장
                      </li>
                    </ul>
                  </div>
                  <div className={styles.credentialColumn}>
                    <ul className={styles.credentialList}>
                      <li className={styles.credentialItem}>
                        • 대한모발이식학회 정회원
                      </li>
                      <li className={styles.credentialItem}>
                        • 국제모발이식학회(ISHRS) 펜딩멤버
                      </li>
                      <li className={styles.credentialItem}>
                        • 대한비만미용학회(KOAT) 학술이사
                      </li>
                      <li className={styles.credentialItem}>
                        • 경희대학교 의과대학 졸업
                      </li>
                      <li className={styles.credentialItem}>
                        • 경희의료원 전문의 수료
                      </li>
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
                    자연스러운 아름다움과 얼굴의 조화를 중요하게 생각합니다.
                    <br />
                    환자 한 분 한 분에게
                    <br />
                    언제나 정직하고 세심한 시술을 지향합니다.
                  </p>
                  <img
                    src="/doctors/profile/double-quotation-end.svg"
                    alt="따옴표 끝"
                    className={styles.quotationEnd}
                  />
                </div>
              </div>

              <div className={styles.doctorSubImageKim1}>
                <img
                  src="/doctors/profile/doctors-profile-5.png"
                  alt="김나래 원장 서브 이미지 1"
                  className={styles.doctorSubImg}
                />
              </div>
              <div className={styles.doctorSubImageKim2}>
                <img
                  src="/doctors/profile/doctors-profile-6.png"
                  alt="김나래 원장 서브 이미지 2"
                  className={styles.doctorSubImg}
                />
              </div>

              <div className={styles.doctorImageContainer3}>
                <img
                  src="/main/person/doctor-kimnarae.png"
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
              의료진 학술활동
              <br />
              연구목록.
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
                  {getSelectedYearActivities().length > 0 ? (
                    getSelectedYearActivities().map((activity, index) => {
                      const isFirst = index === 0;
                      const isLast =
                        index === getSelectedYearActivities().length - 1;

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
                      );
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
                        해당 연도의 학술활동이 없습니다.
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
  );
}
