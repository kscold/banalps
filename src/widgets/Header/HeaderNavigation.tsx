"use client";

import Link from "next/link";
import * as styles from "./HeaderDesign.css";
import { useHeaderState } from "../../features/header/hooks/useHeaderState";
import { useAuthStore } from "@/shared/stores/useAuthStore";
import DesktopNav from "../../features/header/components/DesktopNav";
import MobileMenu from "../../features/header/components/MobileMenu";
import MenuToggleButton from "../../features/header/components/MenuToggleButton";

export default function HeaderNavigation() {
  const {
    isMenuOpen,
    isHeaderHovered,
    showSubmenu,
    handleMenuToggle,
    handleHeaderMouseEnter,
    handleHeaderMouseLeave,
    closeMenu,
  } = useHeaderState();

  const { openLoginModal } = useAuthStore();

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
              <Link href="/" className={styles.logoLink}>
                <span className={styles.logoText}>바람부는날에도</span>
              </Link>
            </div>

            {/* 데스크톱 네비게이션 */}
            <DesktopNav
              showSubmenu={showSubmenu}
              isHeaderHovered={isHeaderHovered}
            />

            {/* 액션 버튼들 */}
            <div className={styles.actionButtons}>
              <button className={styles.loginButton} onClick={openLoginModal}>LOGIN</button>

              {/* 언어 선택 버튼 */}
              <button className={styles.consultButton}>
                <span>KR</span>
                <span className={styles.dropdownArrow}>▾</span>
              </button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <MenuToggleButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
          </div>
        </div>
      </header>

      {/* 드롭다운 배경 커튼 (헤더 호버시 나타남) */}
      <div
        className={styles.headerCurtain}
        style={
          isHeaderHovered
            ? {
                height: "auto",
                maxHeight: "410px",
                opacity: 1,
                visibility: "visible",
                pointerEvents: "auto",
              }
            : {
                height: "0",
                maxHeight: "0",
              }
        }
        onMouseEnter={() => handleHeaderMouseEnter()}
        onMouseLeave={() => handleHeaderMouseLeave()}
      >
        {/* 서브메뉴 컨테이너 - 5열 그리드 */}
        <div className={styles.submenuContainer} />
      </div>

      {/* 모바일 메뉴 */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
