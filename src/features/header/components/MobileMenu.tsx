"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as styles from "../../../widgets/Header/HeaderDesign.css"
import { NAVIGATION_ITEMS } from "../../../shared/constants/navigation"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  if (!isOpen) return null

  // 현재 페이지가 해당 네비게이션 항목에 속하는지 확인
  const isCurrentPage = (href: string) => {
    if (!pathname) return false
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenuContent}>
        {/* 네비게이션 메뉴 아이템 */}
        <nav className={styles.mobileMenuNavigation}>
          {NAVIGATION_ITEMS.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  isCurrentPage(item.href) ? styles.mobileNavLinkActive : ""
                }`}
                onClick={onClose}
              >
                {item.title}
              </Link>
              {/* 서브메뉴가 있는 경우 */}
              {item.submenu && (
                <div className={styles.mobileSubmenu}>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={styles.mobileSubmenuItem}
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

        {/* 액션 버튼들 */}
        <div className={styles.mobileActions}>
          <button className={styles.mobileLoginButton}>LOGIN</button>
          <button className={styles.mobileConsultButton}>상담신청</button>
        </div>
      </div>
    </div>
  )
}