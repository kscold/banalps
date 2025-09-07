"use client"

import * as styles from "./DoctorsPage.css"

export default function DoctorsPage() {
  console.log("[DoctorsPage] 의료진 소개 페이지 렌더링")

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

          {/* 타임라인 레이아웃 */}
          <div className={styles.timelineLayout}>
            {/* 상단 타임라인 - 2011년 */}
            <div className={styles.timelineRow}>
              {/* 2011년 그룹 */}
              <div className={styles.year2011Group}>
                <div className={styles.yearLabel2011}>2011</div>
                <div className={styles.year2011Content}>
                  <p className={styles.year2011Text}>바람부는날에도 성형외과 개원</p>
                  <p className={styles.year2011Text}>모발이식 전문 클리닉 시작</p>
                </div>
              </div>
              
              {/* 화살표 */}
              <div className={styles.timelineArrow}>
                <svg className={styles.timelineArrowSvg} width="335" height="165" viewBox="0 0 335 165" fill="none">
                  <path d="M2 82.5L333 82.5M333 82.5L283 32.5M333 82.5L283 132.5" stroke="#14AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* 2011년 흰색 프레임 */}
              <div className={styles.whiteFrame2011}>
                <div className={styles.frameContent}>
                  <h4 className={styles.frameTitle}>개원 초기</h4>
                  <p className={styles.frameText}>전문성을 바탕으로 한<br />모발이식 클리닉 개원</p>
                </div>
              </div>
            </div>

            {/* 하단 타임라인 - 2024년 */}
            <div className={styles.timelineRow}>
              {/* 2024년 흰색 프레임 */}
              <div className={styles.whiteFrame2024}>
                <div className={styles.frameContent}>
                  <h4 className={styles.frameTitle}>현재</h4>
                  <p className={styles.frameText}>15년간의 경험과 노하우<br />최첨단 시설과 기술</p>
                </div>
              </div>
              
              {/* 원형 아이콘 그룹 */}
              <div className={styles.circleIconGroup}>
                <div className={styles.circleIcon}>
                  <svg className={styles.circleIconSvg} width="154" height="139" viewBox="0 0 154 139" fill="none">
                    <circle cx="77" cy="69.5" r="77" fill="#14AEFF"/>
                    <path d="M77 25L95 43H59L77 25Z" fill="white"/>
                    <rect x="65" y="43" width="24" height="52" fill="white"/>
                    <rect x="50" y="95" width="54" height="8" fill="white"/>
                  </svg>
                </div>
              </div>
              
              {/* 2024년 그룹 */}
              <div className={styles.year2024Group}>
                <div className={styles.yearLabel2024}>2024</div>
                <div className={styles.year2024Content}>
                  <p className={styles.year2024Text}>국제적 수준의 모발이식 클리닉</p>
                  <p className={styles.year2024Text}>지속적인 연구와 학술활동</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
