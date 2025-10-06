import { useState, useRef } from 'react';

export const useHeaderState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    console.log('[useHeaderState/메뉴토글] 모바일 메뉴 상태 변경:', newState);
  };

  const handleHeaderMouseEnter = () => {
    // 이전 타이머가 있으면 취소
    if (submenuTimerRef.current) {
      clearTimeout(submenuTimerRef.current);
    }

    setIsHeaderHovered(true);

    // 커튼 애니메이션 후에 서브메뉴 표시 (커튼보다 늦게)
    submenuTimerRef.current = setTimeout(() => {
      setShowSubmenu(true);
    }, 150); // 커튼 애니메이션(500ms)의 중간 정도에 표시

    console.log('[useHeaderState/헤더호버] 헤더 호버 시작');
  };

  const handleHeaderMouseLeave = () => {
    // 타이머 취소
    if (submenuTimerRef.current) {
      clearTimeout(submenuTimerRef.current);
    }

    // 지연을 두고 체크하여 커튼이나 서브메뉴로 이동한 경우 유지
    submenuTimerRef.current = setTimeout(() => {
      // 헤더나 커튼 영역에 마우스가 없을 때만 숨김
      const headerEl = document.querySelector('[class*="header"]');
      const curtainEl = document.querySelector('[class*="headerCurtain"]');

      if (!headerEl?.matches(':hover') && !curtainEl?.matches(':hover')) {
        setShowSubmenu(false); // 서브메뉴 먼저 즉시 숨김
        setIsHeaderHovered(false); // 커튼도 즉시 숨김
        console.log('[useHeaderState/헤더호버] 헤더 호버 종료');
      }
    }, 50); // 더 짧은 지연으로 빠른 반응
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    console.log('[useHeaderState/메뉴닫기] 모바일 메뉴 닫기');
  };

  return {
    isMenuOpen,
    isHeaderHovered,
    showSubmenu,
    handleMenuToggle,
    handleHeaderMouseEnter,
    handleHeaderMouseLeave,
    closeMenu,
  };
};
