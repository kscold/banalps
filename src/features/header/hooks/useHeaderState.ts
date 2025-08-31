import { useState } from "react"

export const useHeaderState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)

  const handleMenuToggle = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    console.log("[useHeaderState/메뉴토글] 모바일 메뉴 상태 변경:", newState)
  }

  const handleHeaderMouseEnter = () => {
    setIsHeaderHovered(true)
    // 커튼 애니메이션 완료 후 서브메뉴 표시 (300ms delay)
    setTimeout(() => {
      setShowSubmenu(true)
    }, 300)
    console.log("[useHeaderState/헤더호버] 헤더 호버 시작")
  }

  const handleHeaderMouseLeave = () => {
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