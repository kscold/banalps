import { useState, useRef } from "react"

export const useHeaderState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const submenuTimerRef = useRef<NodeJS.Timeout | null>(null)

  const handleMenuToggle = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    console.log("[useHeaderState/메뉴토글] 모바일 메뉴 상태 변경:", newState)
  }

  const handleHeaderMouseEnter = () => {
    setIsHeaderHovered(true)
    // 이전 타이머가 있으면 취소
    if (submenuTimerRef.current) {
      clearTimeout(submenuTimerRef.current)
    }
    // 커튼 애니메이션 중간에 서브메뉴 표시 (250ms delay로 감소)
    submenuTimerRef.current = setTimeout(() => {
      // 호버 상태일 때만 서브메뉴 표시
      if (isHeaderHovered || document.querySelector('[class*="header"]:hover')) {
        setShowSubmenu(true)
      }
    }, 250)
    console.log("[useHeaderState/헤더호버] 헤더 호버 시작")
  }

  const handleHeaderMouseLeave = () => {
    // 타이머 취소
    if (submenuTimerRef.current) {
      clearTimeout(submenuTimerRef.current)
      submenuTimerRef.current = null
    }
    setIsHeaderHovered(false)
    setShowSubmenu(false) // 즉시 서브메뉴 숨김
    console.log("[useHeaderState/헤더호버] 헤더 호버 종료")
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    console.log("[useHeaderState/메뉴닫기] 모바일 메뉴 닫기")
  }

  return {
    isMenuOpen,
    isHeaderHovered,
    showSubmenu,
    handleMenuToggle,
    handleHeaderMouseEnter,
    handleHeaderMouseLeave,
    closeMenu,
  }
}