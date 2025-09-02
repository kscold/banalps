"use client"

import * as styles from "./ArrowButton.css"

interface ArrowButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  disabled?: boolean
  className?: string
}

export default function ArrowButton({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
}: ArrowButtonProps) {
  // 화살표 컨테이너 스타일 결정
  const getArrowContainerStyle = () => {
    let containerStyle = styles.arrowContainer

    if (variant === "secondary") {
      containerStyle += ` ${styles.secondaryArrowContainer}`
    }

    if (size === "small") {
      containerStyle += ` ${styles.smallArrowContainer}`
    } else if (size === "large") {
      containerStyle += ` ${styles.largeArrowContainer}`
    }

    return containerStyle
  }

  // 화살표 아이콘 스타일 결정
  const getArrowIconStyle = () => {
    let iconStyle = styles.arrowIcon

    if (size === "small") {
      iconStyle += ` ${styles.smallArrowIcon}`
    } else if (size === "large") {
      iconStyle += ` ${styles.largeArrowIcon}`
    }

    return iconStyle
  }

  return (
    <button
      className={`${styles.arrowButton} ${styles[variant]} ${styles[size]} ${
        className || ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.buttonText}>{children}</span>
      <div
        className={`${getArrowContainerStyle()} ${styles.arrowContainerHover}`}
      >
        <svg
          className={getArrowIconStyle()}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  )
}
