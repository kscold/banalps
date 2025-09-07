"use client"

import * as styles from "./DoctorsPage.css"
import { useHistoryData } from "../../shared/hooks/useHistoryData"

export default function DoctorsPage() {
  console.log("[DoctorsPage] 의료진 소개 페이지 렌더링")

  const { selectedYear, availableYears, currentData, handleYearSelect } =
    useHistoryData()

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
            <img
              src="/doctors/intro/doctors-intro-1.png"
              alt="의료진 소개 인트로 1"
              className={styles.doctorsIntroImage1}
            />

            <div className={styles.medicalTeamHeroSection}>
              <div className={styles.medicalTeamHeroText}>
                <h2 className={styles.medicalTeamHeroTitle}>
                  Banal
                  <br />
                  Medical Team
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* 신승규 원장 */}
        <div className={styles.doctorSection}>
          <div className={styles.doctorContent}>
            <div className={styles.doctorImageContainer}>
              <img
                src="/main/person/대표원장_신승규.png"
                alt="신승규 원장"
                className={styles.doctorMainImage}
              />
            </div>

            <div className={styles.doctorTextSection}>
              <div className={styles.doctorName}>
                <h3 className={styles.doctorNameText}>
                  Shin
                  <br />
                  Seung gyu
                </h3>
              </div>
            </div>

            <div className={styles.doctorSubImages}>
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
              <div className={styles.doctorQuote1}>
                <p className={styles.doctorQuoteText1}>
                  첫 수술부터 순서와 방법을 잘 정해야 합니다.
                  <br />
                  순서가 뒤바뀌면 최선의 결과를 놓칠 수도 있습니다.
                </p>
              </div>

              <div className={styles.doctorInfo}>
                <div className={styles.doctorTitle}>
                  <p className={styles.doctorSpecialty}>성형외과 전문의</p>
                  <h4 className={styles.doctorPosition}>대표원장 신 승규</h4>
                </div>

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
            </div>
          </div>
        </div>

        {/* 박수호 원장 */}
        <div className={styles.doctorSection}>
          <div className={styles.doctorContentReversed}>
            <div className={styles.doctorTextSection2}>
              <div className={styles.doctorName}>
                <h3 className={styles.doctorNameText}>
                  Park
                  <br />
                  Soo Ho
                </h3>
              </div>

              <div className={styles.doctorInfo2}>
                <div className={styles.doctorTitle}>
                  <p className={styles.doctorSpecialty}>
                    성형외과 전문의
                    <br />
                    미국 모발이식외과 자격의 (ABHRS)
                  </p>
                  <h4 className={styles.doctorPosition}>대표원장 박 수호</h4>
                </div>

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

              <div className={styles.doctorQuote}>
                <p className={styles.doctorQuoteText}>
                  가장 중요한 건 환자가 원하는 거예요.
                  <br />
                  의사가 원하는 대로만 하면 결국 두 번 수술을 하게 됩니다.
                </p>
              </div>
            </div>

            <div className={styles.doctorImageContainer2}>
              <img
                src="/main/person/대표원장_박수호.png"
                alt="박수호 원장"
                className={styles.doctorMainImage}
              />
            </div>

            <div className={styles.doctorSubImages2}>
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
            </div>
          </div>
        </div>

        {/* 김나래 원장 */}
        <div className={styles.doctorSection}>
          <div className={styles.doctorContent}>
            <div className={styles.doctorImageContainer3}>
              <img
                src="/main/person/대표원장_김나래.png"
                alt="김나래 원장"
                className={styles.doctorMainImage}
              />
            </div>

            <div className={styles.doctorTextSection3}>
              <div className={styles.doctorName}>
                <h3 className={styles.doctorNameText}>
                  Kim
                  <br />
                  Narae
                </h3>
              </div>

              <div className={styles.doctorInfo3}>
                <div className={styles.doctorTitle}>
                  <p className={styles.doctorSpecialty}>성형외과 전문의</p>
                  <h4 className={styles.doctorPosition}>대표원장 김 나래</h4>
                </div>

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

              <div className={styles.doctorQuote}>
                <p className={styles.doctorQuoteText}>
                  가장 중요한 건 환자가 원하는 거예요.
                  <br />
                  의사가 원하는 대로만 하면 결국 두 번 수술을 하게 됩니다.
                </p>
              </div>
            </div>

            <div className={styles.doctorSubImages3}>
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
            </div>
          </div>
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

          {/* 연도 선택 부분 */}
          <div className={styles.yearSelection}>
            <div className={styles.yearButtons}>
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className={`${styles.yearButton} ${
                    selectedYear === year ? styles.yearButtonActive : ""
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* 학회 발표 및 논문 콘텐츠 */}
          <div className={styles.historyContent}>
            <div className={styles.historyGrid}>
              {/* 왼쪽: 학회 발표 */}
              <div className={styles.presentationSection}>
                <h3 className={styles.sectionTitle}>학회 발표</h3>
                <div className={styles.presentationList}>
                  {currentData.presentations.map((presentation, index) => (
                    <div key={index} className={styles.presentationItem}>
                      <div className={styles.presentationDate}>
                        {presentation.date}
                      </div>
                      <div className={styles.presentationContent}>
                        <h4 className={styles.presentationTitle}>
                          {presentation.title}
                        </h4>
                        <p className={styles.presentationDescription}>
                          {presentation.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 논문 */}
              <div className={styles.paperSection}>
                <h3 className={styles.sectionTitle}>논문</h3>
                <div className={styles.paperList}>
                  {currentData.papers.map((paper, index) => (
                    <div key={index} className={styles.paperItem}>
                      <div className={styles.paperDate}>{paper.date}</div>
                      <div className={styles.paperContent}>
                        <h4 className={styles.paperTitle}>{paper.title}</h4>
                        <p className={styles.paperJournal}>{paper.journal}</p>
                        <p className={styles.paperAuthors}>{paper.authors}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
