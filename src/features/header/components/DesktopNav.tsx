"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as styles from "../../../widgets/Header/HeaderDesign.css"
import { NAVIGATION_ITEMS } from "../../../shared/constants/navigation"

interface DesktopNavProps {
  showSubmenu: boolean
}

export default function DesktopNav({ showSubmenu }: DesktopNavProps) {
  const pathname = usePathname()

  return (
    <nav className={styles.desktopNav}>
      {NAVIGATION_ITEMS.map((item) => (
        <div key={item.title} className={styles.navItemWrapper}>
          <Link href={item.href} className={styles.navLink}>
            {item.title}
          </Link>
          {/* 각 네비게이션 아이템 아래에 개별 드롭다운 */}
          {showSubmenu && item.submenu && (
            <div className={styles.dropdownContent}>
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  className={`${styles.dropdownItem} ${
                    pathname === subItem.href ? styles.dropdownItemActive : ""
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
  )
}