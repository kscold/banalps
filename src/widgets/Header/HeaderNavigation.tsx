'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import * as styles from './HeaderDesign.css';
import { useHeaderState } from '../../features/header/hooks/useHeaderState';
import { useAuthStore } from '@/shared/stores/useAuthStore';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import DesktopNav from '../../features/header/components/DesktopNav';
import MobileMenu from '../../features/header/components/MobileMenu';
import MenuToggleButton from '../../features/header/components/MenuToggleButton';
import { useHeaderTranslations } from '@/hooks/useAllPagesTranslations';

export default function HeaderNavigation() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
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
  const { language, setLanguage } = useLanguageStore();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const t = useHeaderTranslations();

  // 클라이언트 사이드 렌더링 확인
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = async () => {
    await signOut({ redirect: false });
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (lang: 'KR' | 'JP') => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  // 외부 클릭 감지하여 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  return (
    <>
      {/* 메인 헤더 - 네비게이션 바 */}
      <header
        className={styles.header}
        data-header="true"
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* 로고 영역 */}
            <div className={styles.logoWrapper}>
              <Link
                href="/"
                className={styles.logoLink}
                onClick={(e) => {
                  // 메인 페이지에서 클릭 시 새로고침
                  if (pathname === '/') {
                    e.preventDefault();
                    window.location.reload();
                  }
                }}
              >
                <img
                  src={language === 'JP' ? '/main/logo/logo-jp.svg' : '/main/logo/logo.svg'}
                  alt="바람부는날에도"
                  className={styles.logoImage}
                />
              </Link>
            </div>

            {/* 데스크톱 네비게이션 */}
            <DesktopNav showSubmenu={showSubmenu} isHeaderHovered={isHeaderHovered} />

            {/* 액션 버튼들 */}
            <div className={styles.actionButtons}>
              {!isClient ? (
                <button className={styles.loginButton} disabled>
                  {t.login}
                </button>
              ) : status === 'loading' ? (
                <button className={styles.loginButton} disabled>
                  {t.login}
                </button>
              ) : session ? (
                <button className={styles.loginButton} onClick={handleLogout}>
                  {t.logout}
                </button>
              ) : (
                <button className={styles.loginButton} onClick={openLoginModal}>
                  {t.login}
                </button>
              )}

              {/* 언어 선택 버튼 */}
              <div className={styles.languageButtonWrapper} ref={languageDropdownRef}>
                <button className={styles.consultButton} onClick={toggleLanguageDropdown}>
                  <span>{!isClient ? 'KR' : language === 'KR' ? 'KR' : 'JP'}</span>
                  <span
                    className={`${styles.dropdownArrow} ${isLanguageDropdownOpen ? styles.dropdownArrowRotated : ''}`}
                  >
                    ▼
                  </span>
                </button>

                {/* 언어 드롭다운 */}
                <div
                  className={`${styles.languageDropdownContainer} ${
                    isLanguageDropdownOpen ? styles.languageDropdownActive : ''
                  }`}
                >
                  <button
                    className={`${styles.languageOption} ${
                      !isClient ? styles.languageOptionActive : language === 'KR' ? styles.languageOptionActive : ''
                    }`}
                    onClick={() => selectLanguage('KR')}
                  >
                    <span>KR</span>
                  </button>
                  <button
                    className={`${styles.languageOption} ${
                      !isClient ? '' : language === 'JP' ? styles.languageOptionActive : ''
                    }`}
                    onClick={() => selectLanguage('JP')}
                  >
                    <span>JP</span>
                  </button>
                </div>
              </div>
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
                height: 'auto',
                maxHeight: '410px',
                opacity: 1,
                visibility: 'visible',
                pointerEvents: 'auto',
              }
            : {
                height: '0',
                maxHeight: '0',
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
