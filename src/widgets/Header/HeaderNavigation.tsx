"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as styles from "./HeaderDesign.css"
import { NAVIGATION_ITEMS } from "../../shared/constants/navigation"

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const pathname = usePathname()

  const handleMenuToggle = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    console.log("[HeaderNavigation/메뉴토글] 모바일 메뉴 상태 변경:", newState)
  }

  const handleHeaderMouseEnter = () => {
    setIsHeaderHovered(true)
    console.log("[HeaderNavigation/헤더호버] 헤더 호버 시작")
  }

  const handleHeaderMouseLeave = () => {
    setIsHeaderHovered(false)
    console.log("[HeaderNavigation/헤더호버] 헤더 호버 종료")
  }

  // 현재 페이지가 해당 네비게이션 항목에 속하는지 확인
  const isCurrentPage = (href: string) => {
    if (!pathname) return false
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <>
      {/* 메인 헤더 - 네비게이션 바 */}
      <header
        className={styles.header}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* 로고 영역 */}
            <div className={styles.logoWrapper}>
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/main/logo/logo.svg"
                  alt="바날 성형외과 로고"
                  className={styles.logoImage}
                  onLoad={() => {
                    console.log(
                      "[HeaderNavigation/로고로드] 로고 SVG 이미지 로드 성공"
                    )
                  }}
                  onError={(e) => {
                    console.error(
                      "[HeaderNavigation/로고에러] 로고 SVG 이미지 로드 실패:",
                      e
                    )
                  }}
                />
              </Link>
            </div>

            {/* 데스크톱 네비게이션 */}
            <nav className={styles.desktopNav}>
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.title} className={styles.navItemWrapper}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isCurrentPage(item.href)}`}
                  >
                    {item.title}
                  </Link>
                  {/* 각 네비게이션 아이템 바로 아래에 드롭다운 */}
                  {isHeaderHovered && item.submenu && (
                    <div 
                      className={styles.dropdownContent}
                      style={{
                        opacity: 1,
                        visibility: "visible",
                        transform: "translateX(-50%) translateY(0px)",
                        pointerEvents: "auto"
                      }}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className={`${styles.dropdownItem} ${
                            pathname === subItem.href
                              ? styles.dropdownItemActive
                              : ""
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* 액션 버튼들 */}
            <div className={styles.actionButtons}>
              <button className={styles.loginButton}>LOGIN</button>

              {/* 언어 선택 버튼 */}
              <button className={styles.consultButton}>
                <span>KR</span>
                <span className={styles.dropdownArrow}>▾</span>
              </button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className={styles.mobileMenuButton}>
              <button
                className={styles.menuToggle}
                onClick={handleMenuToggle}
                aria-label="메뉴 열기"
              >
                <svg
                  className={styles.menuIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
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
          </div>
        </div>
      </header>

      {/* 드롭다운 배경 커튼 (헤더 호버시 나타남) */}
      {isHeaderHovered && (
        <div
          className={styles.headerCurtain}
          style={{
            height: "440px",
            opacity: 1,
            visibility: "visible",
            pointerEvents: "auto",
          }}
          onMouseEnter={() => setIsHeaderHovered(true)}
          onMouseLeave={() => {
            console.log("[HeaderNavigation/커튼] 커튼 영역 벗어남")
            setIsHeaderHovered(false)
          }}
        />
      )}

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`${styles.mobileNavLink} ${isCurrentPage(
                  item.href
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className={styles.mobileActions}>
              <button className={styles.mobileLoginButton}>LOGIN</button>
              <button className={styles.mobileConsultButton}>상담신청</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
