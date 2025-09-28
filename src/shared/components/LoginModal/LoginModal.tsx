"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useAuthStore } from "@/shared/stores/useAuthStore";
import { useLoginTranslations } from "@/hooks/useAllPagesTranslations";
import * as styles from "./LoginModal.css";

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, modalView } = useAuthStore();
  const t = useLoginTranslations();

  const handleSocialLogin = async (provider: string) => {
    try {
      // 로그인 시도 전에 localStorage에 플래그 설정
      localStorage.setItem("loginInProgress", "true");

      // NextAuth의 기본 동작 사용 (리다이렉트 허용)
      await signIn(provider, {
        callbackUrl: window.location.pathname || "/",
      });
    } catch (error) {
      console.error("로그인 오류:", error);

      localStorage.removeItem("loginInProgress");
    }
  };

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
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <div className={styles.headerContent}>
              <h2 className={styles.title}>LOGIN</h2>
            </div>
            <button className={styles.closeButton} onClick={closeLoginModal}>
              <img src="/login/close.svg" alt="Close" />
            </button>
          </div>

          <div className={styles.modalBody}>
            {modalView === "login" ? (
              <>
                {/* 상단 로그인 섹션 */}
                <div className={styles.loginSection}>
                  <h3 className={styles.loginTitle}>
                    <span>{t.title}</span>
                    <img
                      src="/login/user.svg"
                      alt="User"
                      className={styles.userIcon}
                    />
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
                      <button
                        className={styles.loginButton}
                        onClick={() => handleSocialLogin("kakao")}
                      >
                        <span className={styles.socialText}>
                          {t.kakao}
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
                      <button
                        className={styles.loginButton}
                        onClick={() => handleSocialLogin("naver")}
                      >
                        <span className={styles.socialText}>{t.naver}</span>
                      </button>
                    </div>

                    <div className={styles.loginRow}>
                      <div
                        className={styles.iconSquare}
                        style={{ backgroundColor: "#D6D6D6" }}
                      >
                        <img
                          src="/login/google.svg"
                          alt="Google"
                          className={styles.iconImage}
                        />
                      </div>
                      <button
                        className={styles.loginButton}
                        onClick={() => handleSocialLogin("google")}
                      >
                        <span className={styles.socialText}>{t.google}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 하단 일러스트레이션 섹션 */}
                <div className={styles.illustrationSection}>
                  <img
                    src="/login/login-illustration.svg"
                    alt="Login Illustration"
                    className={styles.illustrationImage}
                  />
                </div>
              </>
            ) : modalView === "signup-complete" ? (
              <>
                {/* 상단 가입 완료 섹션 */}
                <div className={styles.signupSection}>
                  <h3 className={styles.signupTitle}>{t.signupComplete}</h3>
                  <div className={styles.signupText}>
                    {t.welcome}
                    <br />
                    {t.enjoyWindyDays}
                  </div>
                </div>

                {/* 하단 일러스트레이션 섹션 */}
                <div className={styles.illustrationSection}>
                  {/* 일러스트레이션은 나중에 추가할 예정 */}
                  <div className={styles.illustrationPlaceholder}>
                    일러스트레이션 영역
                  </div>
                </div>
              </>
            ) : modalView === "login-complete" ? (
              <>
                {/* 상단 로그인 완료 섹션 */}
                <div className={styles.signupSection}>
                  <h3 className={styles.signupTitle}>{t.signupComplete}</h3>
                  <div className={styles.signupText}>
                    {t.welcome}
                    <br />
                    {t.enjoyWindyDays}
                  </div>
                </div>
                {/* 하단 일러스트레이션 섹션 */}
                <div className={styles.illustrationSection}>
                  <img
                    src="/login/login-illustration.svg"
                    alt="Login Illustration"
                    className={styles.illustrationImage}
                  />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
