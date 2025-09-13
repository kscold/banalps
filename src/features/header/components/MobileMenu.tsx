"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as styles from "../../../widgets/Header/MobileMenuStyles.css"
import { NAVIGATION_ITEMS } from "../../../shared/constants/navigation"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState("KR")
  const [hasOpened, setHasOpened] = useState(false)

  // 한 번이라도 열렸는지 추적
  if (isOpen && !hasOpened) {
    setHasOpened(true)
  }

  // 메뉴 아이템 토글
  const toggleMenuItem = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    )
  }

  // 메인 메뉴 클릭 핸들러
  const handleMainMenuClick = (e: React.MouseEvent, item: typeof NAVIGATION_ITEMS[0]) => {
    e.preventDefault()
    if (item.submenu) {
      toggleMenuItem(item.title)
    } else if (item.href) {
      // 서브메뉴가 없고 href가 있으면 링크로 이동
      window.location.href = item.href
      onClose()
    }
    // href가 없는 경우 아무것도 하지 않음
  }

  // 언어 선택 핸들러
  const handleLangSelect = (lang: string) => {
    setSelectedLang(lang)
    setIsLangOpen(false)
  }

  // 언어 옵션들
  const languages = ["KR", "JP"]

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className={styles.mobileMenuOverlay}
        onClick={onClose}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* 메뉴 패널 */}
      <div 
        className={styles.mobileMenuPanel}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          visibility: hasOpened ? 'visible' : 'hidden', // 초기 렌더링 시 숨김
        }}
      >
        <div className={styles.mobileMenuContent}>
          {/* 상단 영역 - LOGIN과 X 버튼 */}
          <div className={styles.mobileMenuHeader}>
            <button className={styles.mobileLoginBtn}>LOGIN</button>
            <button
              className={styles.mobileCloseBtn}
              onClick={onClose}
              aria-label="메뉴 닫기"
            >
              ✕
            </button>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className={styles.mobileNav}>
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.title} className={styles.mobileNavItem}>
                {/* 메인 메뉴 - 클릭 가능 */}
                <div
                  className={styles.mobileNavMain}
                  onClick={(e) => handleMainMenuClick(e, item)}
                  style={{ cursor: "pointer" }}
                >
                  <span className={styles.mobileNavMainText}>{item.title}</span>
                </div>

                {/* 서브메뉴 - 토글로 표시/숨김 */}
                {item.submenu && expandedItems.includes(item.title) && (
                  <div className={styles.mobileNavSub}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className={`${styles.mobileNavSubLink} ${
                          pathname === subItem.href
                            ? styles.mobileNavSubLinkActive
                            : ""
                        }`}
                        onClick={onClose}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 하단 언어 선택 */}
          <div className={styles.mobileMenuFooter}>
            <div className={styles.mobileLangContainer}>
              <button
                className={styles.mobileLangBtn}
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <span>{selectedLang}</span>
                <span
                  className={styles.mobileLangArrow}
                  style={{
                    transform: isLangOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▴
                </span>
              </button>
              {isLangOpen && (
                <div className={styles.mobileLangDropdown}>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className={`${styles.mobileLangOption} ${
                        selectedLang === lang
                          ? styles.mobileLangOptionActive
                          : ""
                      }`}
                      onClick={() => handleLangSelect(lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
