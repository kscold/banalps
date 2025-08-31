"use client"

import * as styles from "./FloatingButton.css"

export interface FloatingButtonProps {
  variant?:
    | "brand"
    | "navercalender"
    | "kakao"
    | "naverBlog"
    | "youtube"
    | "line"
    | "instagram"
    | "close"
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export default function FloatingButton({
  variant = "brand",
  isActive = false,
  onClick,
  className,
}: FloatingButtonProps) {
  return (
    <button
      className={`${styles.floatingButton} ${
        isActive ? styles.floatingButtonActive : ""
      } ${className || ""}`}
      onClick={onClick}
      aria-label={`${variant} 플로팅 버튼`}
    >
      <div className={styles.iconContainer}>
        {/* SVG 아이콘 이미지 */}
        {variant === "brand" && (
          <img
            src="/main/floating-button/wave.svg"
            alt="Brand"
            width={30}
            height={30}
          />
        )}

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

        {variant === "close" && (
          <img
            src="/main/floating-button/cancel.svg"
            alt="Close"
            width={30}
            height={30}
          />
        )}
      </div>
    </button>
  )
}
