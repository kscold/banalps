"use client"

import { useState } from "react"
import Link from "next/link"
import * as styles from "./HeaderDesign.css"

const NAVIGATION_ITEMS = [
  {
    title: "바날소개",
    href: "#about",
    submenu: [
      { title: "의료진소개", href: "#doctors" },
      { title: "병원시설", href: "#facilities" },
      { title: "오시는길", href: "#location" },
    ],
  },
  {
    title: "모발이식",
    href: "#hair-transplant",
    submenu: [
      { title: "FUE 모발이식", href: "#fue" },
      { title: "FUT 모발이식", href: "#fut" },
      { title: "여성 모발이식", href: "#women-hair" },
      { title: "눈썹 이식", href: "#eyebrow" },
    ],
  },
  {
    title: "이마축소",
    href: "#forehead",
    submenu: [
      { title: "이마축소술", href: "#forehead-reduction" },
      { title: "헤어라인 교정", href: "#hairline-correction" },
      { title: "동시수술", href: "#combined-surgery" },
    ],
  },
  {
    title: "두피치료",
    href: "#scalp-treatment",
    submenu: [
      { title: "두피 스케일링", href: "#scalp-scaling" },
      { title: "PRP 치료", href: "#prp-treatment" },
      { title: "약물치료", href: "#medication" },
    ],
  },
  {
    title: "수술전후",
    href: "#before-after",
    submenu: [
      { title: "모발이식 전후", href: "#hair-before-after" },
      { title: "이마축소 전후", href: "#forehead-before-after" },
      { title: "후기", href: "#reviews" },
    ],
  },
] as const

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    console.log("[HeaderNavigation/메뉴토글] 모바일 메뉴 상태 변경:", newState)
  }

  return (
    <>
      <header className={styles.header}>
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
                  console.log(
                    "[HeaderNavigation/로고에러] 로고 SVG 이미지 로드 실패, 텍스트로 대체"
                  )
                  // 이미지 로드 실패시 텍스트로 대체
                  e.currentTarget.style.display = "none"
                  const textLogo = e.currentTarget
                    .nextElementSibling as HTMLElement
                  if (textLogo) textLogo.style.display = "inline-block"
                }}
              />
              <span className={styles.logoText} style={{ display: "none" }}>
                바날성형외과
              </span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className={styles.desktopNav}>
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={styles.navLink}
              >
                {item.title}
              </Link>
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
              onClick={handleMenuToggle}
              className={styles.menuToggle}
              aria-label="메뉴 열기"
            >
              <svg
                className={styles.menuIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => {
                    setIsMenuOpen(false)
                    console.log(
                      "[HeaderNavigation/모바일메뉴] 메뉴 항목 클릭:",
                      item.title
                    )
                  }}
                >
                  {item.title}
                </Link>
              ))}
              <div className={styles.mobileActions}>
                <button className={styles.mobileLoginButton}>로그인</button>
                <button className={styles.mobileConsultButton}>상담예약</button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* 헤더 뒤쪽 흰색 커튼 효과 */}
      <div className={styles.headerCurtain} />
    </>
  )
}
