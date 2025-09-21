"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/shared/stores/useAuthStore";
import * as styles from "./LoginModal.css";

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, modalView, setModalView } =
    useAuthStore();

  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoginModalOpen]);

  if (!isLoginModalOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={closeLoginModal} />
      <div
        className={`${styles.modalContainer} ${
          isLoginModalOpen ? styles.slideIn : ""
        }`}
      >
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <div className={styles.headerContent}>
              <h2 className={styles.title}>LOGIN</h2>
            </div>
            <button className={styles.closeButton} onClick={closeLoginModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.modalBody}>
            {modalView === "login" ? (
              <>
                {/* 상단 로그인 섹션 */}
                <div className={styles.loginSection}>
                  <h3 className={styles.loginTitle}>
                    <span>로그인 하기</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={styles.userIcon}
                    >
                      <path
                        d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z"
                        stroke="#272727"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18"
                        stroke="#272727"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </h3>

                  <div className={styles.socialButtons}>
                    <div className={styles.loginRow}>
                      <div
                        className={styles.iconSquare}
                        style={{ backgroundColor: "#FFE03C" }}
                      >
                        <img
                          src="/login/kakao.svg"
                          alt="KakaoTalk"
                          className={styles.iconImage}
                        />
                      </div>
                      <button className={styles.loginButton}>
                        <span className={styles.socialText}>
                          카카오톡 로그인
                        </span>
                      </button>
                    </div>

                    <div className={styles.loginRow}>
                      <div
                        className={styles.iconSquare}
                        style={{ backgroundColor: "#339F40" }}
                      >
                        <img
                          src="/login/naver.svg"
                          alt="Naver"
                          className={styles.iconImage}
                        />
                      </div>
                      <button className={styles.loginButton}>
                        <span className={styles.socialText}>네이버 로그인</span>
                      </button>
                    </div>

                    <div className={styles.loginRow}>
                      <div
                        className={styles.iconSquare}
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <img
                          src="/login/google.svg"
                          alt="Google"
                          className={styles.iconImage}
                        />
                      </div>
                      <button className={styles.loginButton}>
                        <span className={styles.socialText}>구글 로그인</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 하단 일러스트레이션 섹션 */}
                <div className={styles.illustrationSection}>
                  <img
                    src="/login/lㅁogin-illustration.svg"
                    alt="Login Illustration"
                    className={styles.illustrationImage}
                  />
                </div>
              </>
            ) : (
              <>
                {/* 상단 가입 완료 섹션 */}
                <div className={styles.signupSection}>
                  <h3 className={styles.signupTitle}>가입 완료</h3>
                  <div className={styles.signupText}>
                    고객님 반가워요!
                    <br />
                    이제 바람 부는 날도
                    <br />
                    즐겁게 거예요.
                  </div>
                  <button
                    className={styles.backButton}
                    onClick={() => setModalView("login")}
                  >
                    로그인으로 돌아가기
                  </button>
                </div>

                {/* 하단 일러스트레이션 섹션 */}
                <div className={styles.illustrationSection}>
                  {/* 일러스트레이션은 나중에 추가할 예정 */}
                  <div className={styles.illustrationPlaceholder}>
                    일러스트레이션 영역
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
