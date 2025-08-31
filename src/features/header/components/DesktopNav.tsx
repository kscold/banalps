"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as styles from "../../../widgets/Header/HeaderDesign.css"
import { NAVIGATION_ITEMS } from "../../../shared/constants/navigation"

interface DesktopNavProps {
  showSubmenu: boolean
  isHeaderHovered: boolean
}

export default function DesktopNav({ showSubmenu, isHeaderHovered }: DesktopNavProps) {
  const pathname = usePathname()

  return (
    <nav className={styles.desktopNav}>
      {NAVIGATION_ITEMS.map((item) => (
        <div key={item.title} className={styles.navItemWrapper}>
          <Link href={item.href} className={styles.navLink}>
            {item.title}
          </Link>
          {/* 커튼이 열리고 서브메뉴가 준비되었을 때만 표시 */}
          {isHeaderHovered && showSubmenu && item.submenu && (
            <div className={styles.dropdownContent} style={{
              opacity: showSubmenu ? 1 : 0,
              transition: 'opacity 100ms ease', // 더 빠른 트랜지션
              pointerEvents: showSubmenu ? 'auto' : 'none'
            }}>
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