"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as styles from "../../../widgets/Header/HeaderDesign.css";
import { NAVIGATION_ITEMS } from "../../../shared/constants/navigation";

interface DesktopNavProps {
  showSubmenu: boolean;
  isHeaderHovered: boolean;
  renderSubmenuOnly?: boolean;
}

export default function DesktopNav({
  showSubmenu,
  isHeaderHovered,
}: DesktopNavProps) {
  const pathname = usePathname();

  // 현재 경로가 네비게이션 아이템에 속하는지 확인
  const isActive = (item: typeof NAVIGATION_ITEMS[0]) => {
    if (item.href && pathname === item.href) return true;
    if (item.submenu) {
      return item.submenu.some(sub => pathname === sub.href);
    }
    return false;
  };

  return (
    <nav className={styles.desktopNav}>
      {NAVIGATION_ITEMS.map((item) => (
        <div key={item.title} className={styles.navItemWrapper}>
          {item.href ? (
            <Link
              href={item.href}
              className={`${styles.navLink} ${isActive(item) ? styles.navLinkActive : ''}`}
            >
              <span className={styles.navLinkText}>{item.title}</span>
            </Link>
          ) : (
            <span className={`${styles.navLink} ${isActive(item) ? styles.navLinkActive : ''}`}>
              <span className={styles.navLinkText}>{item.title}</span>
            </span>
          )}
          {/* 커튼이 열려있으면 서브메뉴 항상 렌더링 */}
          {item.submenu && (
            <div
              className={styles.dropdownContent}
              style={{
                opacity: isHeaderHovered && showSubmenu ? 1 : 0,
                visibility:
                  isHeaderHovered && showSubmenu ? "visible" : "hidden",
                transition:
                  isHeaderHovered && showSubmenu
                    ? "opacity 200ms ease 100ms, visibility 0ms" // 나타날 때: 부드럽게 페이드인
                    : "opacity 0ms, visibility 0ms", // 사라질 때: 즉시 사라짐
                pointerEvents: isHeaderHovered && showSubmenu ? "auto" : "none",
              }}
            >
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
  );
}
