"use client";

import * as styles from "./FloatingButton.css";

export interface FloatingButtonProps {
  variant?:
    | "brand"
    | "navercalender"
    | "kakao"
    | "naverBlog"
    | "youtube"
    | "line"
    | "instagram"
    | "close";
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  isAnimating?: boolean;
}

export default function FloatingButton({
  variant = "brand",
  isActive = false,
  onClick,
  className,
  isAnimating = false,
}: FloatingButtonProps) {
  // 메인 버튼인지 확인 (brand 또는 close)
  const isMainButton = variant === "brand" || variant === "close";

  return (
    <button
      className={`${styles.floatingButton} ${
        isActive ? styles.floatingButtonActive : ""
      } ${isMainButton ? styles.spinCloseButton : ""} ${className || ""}`}
      onClick={onClick}
      aria-label={`${variant} 플로팅 버튼`}
    >
      {/* 메인 버튼일 때 아이콘 처리 */}
      {isMainButton ? (
        <div
          className={`${styles.iconContainer} ${
            isAnimating && variant === "close" ? styles.closeIconRotate : ""
          } ${
            isAnimating && variant === "brand" ? styles.brandIconRotate : ""
          }`}
        >
          {variant === "brand" && (
            <img
              src="/main/floating-button/wave.svg"
              alt="Brand"
              width={30}
              height={30}
            />
          )}
          {variant === "close" && (
            <img
              src="/main/floating-button/cancel.svg"
              alt="Close"
              width={20}
              height={20}
            />
          )}
        </div>
      ) : (
        <div className={styles.iconContainer}>
          {/* 일반 소셜 아이콘들 */}
          {variant === "navercalender" && (
            <img
              src="/main/floating-button/navercalender.svg"
              alt="Naver"
              width={30}
              height={30}
            />
          )}

          {variant === "kakao" && (
            <img
              src="/main/floating-button/kakao.svg"
              alt="Kakao"
              width={30}
              height={30}
            />
          )}

          {variant === "naverBlog" && (
            <img
              src="/main/floating-button/naverblog.svg"
              alt="Naver Blog"
              width={30}
              height={30}
            />
          )}

          {variant === "youtube" && (
            <img
              src="/main/floating-button/youtube.svg"
              alt="YouTube"
              width={30}
              height={30}
            />
          )}

          {variant === "line" && (
            <img
              src="/main/floating-button/line.svg"
              alt="Line"
              width={30}
              height={30}
            />
          )}

          {variant === "instagram" && (
            <img
              src="/main/floating-button/instargram.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
          )}
        </div>
      )}
    </button>
  );
}
