"use client"

import { useState, useEffect } from "react"
import FloatingButton from "./FloatingButton"
import * as styles from "./FloatingButtonGroup.css"

export interface FloatingButtonGroupProps {
  className?: string
  onButtonClick?: (variant: string) => void
}

export default function FloatingButtonGroup({
  className,
  onButtonClick,
}: FloatingButtonGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAboveFooter, setIsAboveFooter] = useState(false)

  // 스크롤 위치에 따른 푸터와의 충돌 감지
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      console.log('[FloatingButtonGroup/푸터감지] footer 요소:', footer)
      
      if (!footer) {
        console.log('[FloatingButtonGroup/푸터감지] footer 요소를 찾을 수 없음, isAboveFooter를 false로 설정')
        setIsAboveFooter(false)
        return
      }

      const footerRect = footer.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      console.log('[FloatingButtonGroup/푸터감지] footerRect.top:', footerRect.top, 'windowHeight:', windowHeight)
      
      // 푸터가 화면에 보이기 시작하면 플로팅 버튼을 푸터 위로 이동
      const shouldMoveAboveFooter = footerRect.top < windowHeight - 100 // 100px 버퍼
      console.log('[FloatingButtonGroup/푸터감지] shouldMoveAboveFooter:', shouldMoveAboveFooter)
      setIsAboveFooter(shouldMoveAboveFooter)
    }

    window.addEventListener('scroll', handleScroll)
    
    // 초기 위치 설정을 지연시켜서 DOM이 완전히 렌더링된 후 실행
    setTimeout(() => {
      handleScroll()
    }, 100)
    
    // 추가로 DOM 변경사항을 감지하는 MutationObserver 설정
    const observer = new MutationObserver(() => {
      setTimeout(() => {
        handleScroll()
      }, 50)
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleButtonClick = (variant: string) => {
    console.log(`[FloatingButtonGroup] ${variant} 버튼 클릭됨`)
    
    if (variant === "close") {
      setIsExpanded(false)
    } else if (variant === "brand") {
      setIsExpanded(!isExpanded)
    }
    
    onButtonClick?.(variant)
  }

  return (
    <div 
      className={`${styles.floatingButtonContainer} ${isAboveFooter ? styles.aboveFooter : ''} ${className || ""}`}
      style={{
        bottom: isAboveFooter ? 'calc(200px + 40px)' : '40px', // 푸터 높이 + 여백 또는 기본 40px
        transition: 'bottom 300ms ease-in-out'
      }}
    >
      {/* 확장 가능한 버튼 리스트 */}
      <div className={`${styles.expandableList} ${isExpanded ? styles.visibleButtons : styles.hiddenButtons}`}>
        {/* 소셜 미디어 버튼들 */}
        <FloatingButton
          variant="navercalender"
          onClick={() => handleButtonClick("navercalender")}
        />
        <FloatingButton
          variant="kakao"
          onClick={() => handleButtonClick("kakao")}
        />
        <FloatingButton
          variant="naverBlog"
          onClick={() => handleButtonClick("naverBlog")}
        />
        <FloatingButton
          variant="youtube"
          onClick={() => handleButtonClick("youtube")}
        />
        <FloatingButton
          variant="line"
          onClick={() => handleButtonClick("line")}
        />
        <FloatingButton
          variant="instagram"
          isActive={true}
          onClick={() => handleButtonClick("instagram")}
        />
      </div>

      {/* 메인 토글 버튼 (Brand 또는 Close) - 항상 흰색 배경 */}
      <FloatingButton
        variant={isExpanded ? "close" : "brand"}
        isActive={false}  // 항상 false로 설정하여 흰색 배경 유지
        onClick={() => handleButtonClick(isExpanded ? "close" : "brand")}
      />
    </div>
  )
}
