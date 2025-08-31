"use client"

import { useState } from "react"
import FloatingButton from "./FloatingButton"
import * as buttonStyles from "./FloatingButton.css"
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
    <div className={`${styles.floatingButtonContainer} ${className || ""}`}>
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
