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
        <svg
          className={styles.menuIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  )
}
