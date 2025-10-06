'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import * as styles from '../../../widgets/Header/MobileMenuStyles.css';
import { NAVIGATION_ITEMS } from '../../../shared/constants/navigation';
import { useAuthStore } from '@/shared/stores/useAuthStore';
import { useAllPagesTranslations } from '@/hooks/useAllPagesTranslations';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { openLoginModal } = useAuthStore();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const [hasOpened, setHasOpened] = useState(false);
  const t = useAllPagesTranslations();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    onClose();
  };

  // 번역 키로부터 실제 텍스트를 가져오는 함수
  const getTranslation = (key: string) => {
    const keys = key.split('.');
    let translation: any = t;
    for (const k of keys) {
      translation = translation?.[k];
    }
    return translation || key;
  };

  // 한 번이라도 열렸는지 추적
  if (isOpen && !hasOpened) {
    setHasOpened(true);
  }

  // 메뉴 아이템 토글 - 한 번에 하나의 대메뉴만 열리도록 수정
  const toggleMenuItem = (titleKey: string) => {
    setExpandedItems(
      (prev) =>
        prev.includes(titleKey)
          ? [] // 현재 열려있는 메뉴를 클릭하면 닫기
          : [titleKey], // 다른 메뉴를 클릭하면 기존 메뉴 닫고 새 메뉴만 열기
    );
  };

  // 메인 메뉴 클릭 핸들러
  const handleMainMenuClick = (e: React.MouseEvent, item: (typeof NAVIGATION_ITEMS)[0]) => {
    e.preventDefault();
    if (item.submenu) {
      toggleMenuItem(item.titleKey);
    } else if (item.href) {
      // 서브메뉴가 없고 href가 있으면 링크로 이동
      window.location.href = item.href;
      onClose();
    }
    // href가 없는 경우 아무것도 하지 않음
  };

  // 언어 선택 핸들러
  const handleLangSelect = (lang: 'KR' | 'JP') => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  // 언어 옵션들
  const languages: ('KR' | 'JP')[] = ['KR', 'JP'];

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className={styles.mobileMenuOverlay}
        onClick={onClose}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          pointerEvents: isOpen ? 'auto' : 'none',
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
          {/* 상단 영역 - LOGIN/LOGOUT과 X 버튼 */}
          <div className={styles.mobileMenuHeader}>
            {session ? (
              <button className={styles.mobileLoginBtn} onClick={handleLogout}>
                {t.header.logout}
              </button>
            ) : (
              <button
                className={styles.mobileLoginBtn}
                onClick={() => {
                  openLoginModal();
                  onClose();
                }}
              >
                {t.header.login}
              </button>
            )}
            <img
              src="/main/close.svg"
              alt="Close"
              className={styles.mobileCloseBtn}
              onClick={onClose}
              aria-label={t.accessibility.menuClose}
            />
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className={styles.mobileNav}>
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.titleKey} className={styles.mobileNavItem}>
                {/* 메인 메뉴 - 클릭 가능 */}
                <div
                  className={styles.mobileNavMain}
                  onClick={(e) => handleMainMenuClick(e, item)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className={styles.mobileNavMainText}>{getTranslation(item.titleKey)}</span>
                </div>

                {/* 서브메뉴 - 토글로 표시/숨김 */}
                {item.submenu && expandedItems.includes(item.titleKey) && (
                  <div className={styles.mobileNavSub}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.titleKey}
                        href={subItem.href}
                        className={`${styles.mobileNavSubLink} ${
                          pathname === subItem.href ? styles.mobileNavSubLinkActive : ''
                        }`}
                        onClick={onClose}
                      >
                        {getTranslation(subItem.titleKey)}
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
              <button className={styles.mobileLangBtn} onClick={() => setIsLangOpen(!isLangOpen)}>
                <span>{language}</span>
                <span
                  className={styles.mobileLangArrow}
                  style={{
                    transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)',
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
                      className={`${styles.mobileLangOption} ${language === lang ? styles.mobileLangOptionActive : ''}`}
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
  );
}
