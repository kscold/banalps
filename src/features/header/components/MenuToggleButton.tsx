"use client"

import * as styles from "../../../widgets/Header/HeaderDesign.css"

interface MenuToggleButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function MenuToggleButton({
  isOpen,
  onClick,
}: MenuToggleButtonProps) {
  return (
    <div className={styles.mobileMenuButton}>
      <button
        onClick={onClick}
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            className={styles.menuIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <img
            src="/main/logo/menu-mobile.svg"
            alt="메뉴"
            className={styles.menuIcon}
          />
        )}
      </button>
    </div>
  )
}
