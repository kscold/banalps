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

          <div className={styles.modalBody}>
            {modalView === "login" ? (
              <>
                <div className={styles.loginSection}>
                  <h3 className={styles.loginTitle}>
                    회원가입
                    <button
                      className={styles.iconButton}
                      onClick={() => setModalView("signup")}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 5v10M5 10h10"
                          stroke="#272727"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="10"
                          cy="10"
                          r="9"
                          stroke="#272727"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  </h3>

                  <div className={styles.socialButtons}>
                    <button
                      className={styles.socialButton}
                      style={{ backgroundColor: "#FEE500" }}
                    >
                      <span className={styles.kakaoIcon}>💬</span>
                      <span className={styles.socialText}>카카오톡 로그인</span>
                    </button>

                    <button
                      className={styles.socialButton}
                      style={{ backgroundColor: "#03C75A" }}
                    >
                      <span className={styles.naverIcon}>N</span>
                      <span className={styles.socialText}>네이버 로그인</span>
                    </button>

                    <button
                      className={styles.socialButton}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #DADCE0",
                      }}
                    >
                      <span className={styles.googleIcon}>G</span>
                      <span className={styles.socialText}>구글 로그인</span>
                    </button>
                  </div>
                </div>

                <div className={styles.illustrationSection}>
                  <svg viewBox="0 0 400 400" className={styles.illustration}>
                    {/* 구름 */}
                    <ellipse cx="320" cy="80" rx="40" ry="20" fill="#E8F4FD" />
                    <ellipse cx="350" cy="85" rx="30" ry="15" fill="#E8F4FD" />

                    {/* 태양 */}
                    <circle
                      cx="60"
                      cy="340"
                      r="25"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                    />
                    <path
                      d="M60 310 L60 370 M30 340 L90 340 M40 320 L80 360 M80 320 L40 360"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* 얼굴 윤곽 */}
                    <path
                      d="M150 200 Q130 180 140 150 Q150 120 180 110 Q210 105 240 115 Q265 125 270 150 Q275 180 260 200"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* 머리카락 */}
                    <path
                      d="M160 150 Q155 130 165 120"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M180 145 Q175 125 185 115"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M200 145 Q195 125 205 115"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* 병원 건물 */}
                    <rect
                      x="280"
                      y="280"
                      width="80"
                      height="100"
                      fill="none"
                      stroke="#CCCCCC"
                      strokeWidth="2"
                    />
                    <rect
                      x="290"
                      y="295"
                      width="15"
                      height="20"
                      fill="none"
                      stroke="#CCCCCC"
                      strokeWidth="1"
                    />
                    <rect
                      x="315"
                      y="295"
                      width="15"
                      height="20"
                      fill="none"
                      stroke="#CCCCCC"
                      strokeWidth="1"
                    />
                    <rect
                      x="335"
                      y="295"
                      width="15"
                      height="20"
                      fill="none"
                      stroke="#CCCCCC"
                      strokeWidth="1"
                    />

                    {/* 나무 */}
                    <ellipse
                      cx="100"
                      cy="320"
                      rx="30"
                      ry="40"
                      fill="#90EE90"
                      opacity="0.3"
                    />
                    <rect
                      x="95"
                      y="340"
                      width="10"
                      height="40"
                      fill="#8B4513"
                      opacity="0.3"
                    />

                    {/* 점선 원 */}
                    <circle
                      cx="200"
                      cy="280"
                      r="60"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.5"
                    />

                    {/* 작은 원 장식 */}
                    <circle
                      cx="80"
                      cy="180"
                      r="15"
                      fill="#14AEFF"
                      opacity="0.2"
                    />
                    <circle
                      cx="320"
                      cy="220"
                      r="20"
                      fill="#14AEFF"
                      opacity="0.2"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
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

                <div className={styles.illustrationSection}>
                  <svg viewBox="0 0 400 400" className={styles.illustration}>
                    {/* 구름 */}
                    <ellipse cx="320" cy="80" rx="40" ry="20" fill="#E8F4FD" />
                    <ellipse cx="350" cy="85" rx="30" ry="15" fill="#E8F4FD" />

                    {/* 태양 */}
                    <circle
                      cx="60"
                      cy="340"
                      r="25"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                    />
                    <path
                      d="M60 310 L60 370 M30 340 L90 340 M40 320 L80 360 M80 320 L40 360"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* 얼굴 윤곽 */}
                    <path
                      d="M150 200 Q130 180 140 150 Q150 120 180 110 Q210 105 240 115 Q265 125 270 150 Q275 180 260 200"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* 머리카락 */}
                    <path
                      d="M160 150 Q155 130 165 120"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M180 145 Q175 125 185 115"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M200 145 Q195 125 205 115"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* 병원 건물 */}
                    <rect
                      x="280"
                      y="280"
                      width="80"
                      height="100"
                      fill="none"
                      stroke="#CCCCCC"
                      strokeWidth="2"
                    />
                    <rect
                      x="290"
                      y="295"
                      width="15"
                      height="20"
                      fill="none"
                      stroke="#CCCCCC"
                      strokeWidth="1"
                    />
                    <rect
                      x="315"
                      y="295"
                      width="15"
                      height="20"
                      fill="none"
                      stroke="#CCCCCC"
                      strokeWidth="1"
                    />
                    <rect
                      x="335"
                      y="295"
                      width="15"
                      height="20"
                      fill="none"
                      stroke="#CCCCCC"
                      strokeWidth="1"
                    />

                    {/* 나무 */}
                    <ellipse
                      cx="100"
                      cy="320"
                      rx="30"
                      ry="40"
                      fill="#90EE90"
                      opacity="0.3"
                    />
                    <rect
                      x="95"
                      y="340"
                      width="10"
                      height="40"
                      fill="#8B4513"
                      opacity="0.3"
                    />

                    {/* 점선 원 */}
                    <circle
                      cx="200"
                      cy="280"
                      r="60"
                      fill="none"
                      stroke="#14AEFF"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.5"
                    />

                    {/* 작은 원 장식 */}
                    <circle
                      cx="80"
                      cy="180"
                      r="15"
                      fill="#14AEFF"
                      opacity="0.2"
                    />
                    <circle
                      cx="320"
                      cy="220"
                      r="20"
                      fill="#14AEFF"
                      opacity="0.2"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
