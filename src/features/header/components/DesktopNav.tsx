"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as styles from "../../../widgets/Header/HeaderDesign.css"
import { NAVIGATION_ITEMS } from "../../../shared/constants/navigation"

interface DesktopNavProps {
  showSubmenu: boolean
  isHeaderHovered: boolean
  renderSubmenuOnly?: boolean
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
          {/* 커튼이 열려있으면 서브메뉴 항상 렌더링 */}
          {item.submenu && (
            <div className={styles.dropdownContent} style={{
              opacity: isHeaderHovered && showSubmenu ? 1 : 0,
              visibility: isHeaderHovered && showSubmenu ? 'visible' : 'hidden',
              transition: isHeaderHovered && showSubmenu 
                ? 'opacity 200ms ease 100ms, visibility 0ms' // 나타날 때: 부드럽게 페이드인
                : 'opacity 0ms, visibility 0ms', // 사라질 때: 즉시 사라짐
              pointerEvents: isHeaderHovered && showSubmenu ? 'auto' : 'none'
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