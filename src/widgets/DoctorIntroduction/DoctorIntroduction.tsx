"use client";

import React from "react";
import * as styles from "./DoctorIntroduction.css";

// 의료진 데이터 타입 정의
interface Doctor {
  id: string;
  nameEn: string;
  nameKo: string;
  title: string;
  subtitle?: string;
  quote1: string;
  quote2: string;
  credentials: string[];
  imageUrl: string;
}

// 의료진 데이터
const doctors: Doctor[] = [
  {
    id: "shin-seung-gyu",
    nameEn: "Shin\nSeung\ngyu",
    nameKo: "신 승규",
    title: "성형외과 전문의",
    subtitle: "대표원장",
    quote1: "첫 수술부터\n순서와 방법을 잘 정해야 합니다.",
    quote2: "순서가 뒤바뀌면\n최선의 결과를 놓칠 수도 있습니다.",
    credentials: [
      "• 현) 바람부는날에도 성형외과 대표원장",
      "• 전) 모제림성형외과 여성센터 전담원장",
      "• 전) 브라운 성형외과 원장",
      "• 국제모발이식학회 (ISHRS) 정회원",
      "• 대한성형외과학회 (KSPRS) 종신회원",
      "• 대한미용성형외과학회 (KSAPS) 재무위원",
      "• 대한성형외과학회 모발성형연구회 정회원",
      "• 대한모발이식학회 (KSHRS) 정회원",
    ],
    imageUrl: "/doctors/mobile/doctor-shinseunggyu-mobile.png",
  },
  {
    id: "park-soo-ho",
    nameEn: "Park\nSoo Ho",
    nameKo: "박 수호",
    title: "성형외과 전문의",
    subtitle: "미국 모발이식외과 자격의\n(ABHRS)\n대표원장",
    quote1: "가장 중요한 건 환자가 원하는 거예요.",
    quote2: "의사가 원하는 대로만 하면 결국 두 번 수술을 하게 됩니다.",
    credentials: [
      "• 현) 바람부는날에도 성형외과 대표원장",
      "• 전) 모제림성형외과 여성센터 전담원장",
      "• 국제모발이식학회 (ISHRS) 정회원",
      "• 대한성형외과학회 (KSPRS) 종신회원",
      "• 대한미용성형외과학회 (KSAPS) 학술위원",
      "• 대한성형외과학회 모발성형연구회 정회원",
      "• 대한모발이식학회 (KSHRS) 상임 학술이사",
    ],
    imageUrl: "/doctors/park-soo-ho.jpg",
  },
  {
    id: "kim-narae",
    nameEn: "Kim\nNarae",
    nameKo: "김 나래",
    title: "성형외과 전문의",
    subtitle: "대표원장",
    quote1: "가장 중요한 건 환자가 원하는 거예요.",
    quote2: "의사가 원하는 대로만 하면 결국 두 번 수술을 하게 됩니다.",
    credentials: [
      "• 현) 바람부는날에도 성형외과 대표원장",
      "• 전) 다나 성형외과 여성 대표원장",
      "• 대한모발이식학회 정회원",
      "• 국제모발이식학회(ISHRS) 펜딩멤버",
      "• 대한비만미용학회(KOAT) 학술이사",
      "• 경희대학교 의과대학 졸업",
      "• 경희의료원 전문의 수료",
    ],
    imageUrl: "/doctors/kim-narae.jpg",
  },
];

// 논문 발표 데이터 타입
interface Publication {
  id: string;
  type: "발표" | "수상";
  date: string;
  conference: string;
  title: string;
}

// 논문 발표 데이터
const publications: Publication[] = [
  {
    id: "1",
    type: "발표",
    date: "2021. 12. 4",
    conference: "2021 제10차 대한모발이식\n학회 학술대회",
    title:
      "모발이식 수술 후 나타나는\n꼬인 모발(kinky hair)의\n원인에 대한 조직학적 분석",
  },
  {
    id: "2",
    type: "발표",
    date: "2021. 12. 4",
    conference: "ISHRS 29th World\nCongress, Lisbon, Portugal",
    title: "Best Methodology CSI\nPresentation Award",
  },
  {
    id: "3",
    type: "발표",
    date: "2021. 12. 4",
    conference: "제16회 부산미용성형심포지엄\n(BAPS)",
    title: "FUE(모낭단위채취술)을 이용한\n여성환자의 이마라인 교정",
  },
  {
    id: "4",
    type: "발표",
    date: "2021. 12. 4",
    conference: "Aesthetic Plastic Surgery 2021",
    title: "Changing the Direction of\nHair in Hairline Correction",
  },
  {
    id: "5",
    type: "수상",
    date: "2021. 12. 4",
    conference: "제14차 대한모발이식학회\n학술대회",
    title: "최우수발표상",
  },
];

export default function DoctorIntroduction() {
  console.log("[DoctorIntroduction/렌더링] 의료진 소개 페이지 렌더링 시작");

  return (
    <main className={styles.doctorIntroductionPage}>
      {/* 타이틀 섹션 */}
      <section className={styles.titleSection}>
        <h1 className={styles.mainTitle}>모발이식 15년 전문의.</h1>
      </section>

      {/* 의료진 섹션 */}
      <section className={styles.doctorsSection}>
        {doctors.map((doctor, index) => (
          <div key={doctor.id} className={styles.doctorCard}>
            {/* 모바일에서 첫 번째 카드에만 타이틀 표시 */}
            {index === 0 && (
              <div className={styles.mobileTitle}>
                <h2 className={styles.mobileTitleText}>
                  모발이식
                  <br />
                  15년 전문의.
                </h2>
              </div>
            )}
            {/* 의료진 프로필 */}
            <div className={styles.doctorProfile}>
              {/* 이미지 영역 */}
              <div className={styles.doctorImageArea}>
                <img
                  src={doctor.imageUrl}
                  alt={`${doctor.nameKo} 원장`}
                  className={styles.doctorImage}
                />
              </div>

              {/* 정보 영역 */}
              <div className={styles.doctorInfo}>
                <h2 className={styles.doctorNameEn}>{doctor.nameEn}</h2>
                <div className={styles.doctorDetails}>
                  <p className={styles.doctorTitle}>{doctor.title}</p>
                  {doctor.subtitle && (
                    <p className={styles.doctorSubtitle}>{doctor.subtitle}</p>
                  )}
                  <p className={styles.doctorNameKo}>
                    대표원장 {doctor.nameKo}
                  </p>
                </div>
              </div>
            </div>

            {/* 명언 섹션 - 이미지로 대체 */}
            <div className={styles.quoteSection}>
              <img
                src="/doctors/mobile/doctor-shinseunggyu-mobile-talk.png"
                alt={`${doctor.nameKo} 명언`}
                className={styles.quoteSectionImage}
              />
            </div>

            {/* 경력 섹션 */}
            <div className={styles.credentialsSection}>
              {doctor.credentials.map((credential, credentialIndex) => (
                <p key={credentialIndex} className={styles.credential}>
                  {credential}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 학술활동 섹션 */}
      <section className={styles.academicSection}>
        <h2 className={styles.academicTitle}>의료진 학술활동 연구목록.</h2>

        {/* 연도별 활동 표시 영역 - 추후 구현 */}
        <div className={styles.academicTimeline}>
          {/* 2011, 2024 등의 연도별 활동들 */}
        </div>
      </section>

      {/* 논문 발표 섹션 */}
      <section className={styles.publicationSection}>
        <h2 className={styles.publicationTitle}>학회 발표 및 논문</h2>

        <div className={styles.publicationList}>
          {publications.map((publication) => (
            <div key={publication.id} className={styles.publicationCard}>
              <div className={styles.publicationLeft}>
                <div className={styles.publicationBadge}>
                  <span className={styles.publicationBadgeText}>
                    {publication.type}
                  </span>
                </div>
                <p className={styles.publicationDate}>{publication.date}</p>
              </div>

              <div className={styles.publicationRight}>
                <h3 className={styles.publicationConference}>
                  {publication.conference}
                </h3>
                <p className={styles.publicationTitle}>{publication.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
