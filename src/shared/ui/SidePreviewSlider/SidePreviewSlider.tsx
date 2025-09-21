"use client"

import React from "react"
import * as styles from "./SidePreviewSlider.css"

interface SidePreviewSliderProps {
  beforeImage: string
  afterImage: string
  showBefore?: boolean // true면 Before 쪽을 보여줌 (오른쪽 프리뷰용)
  beforeAlt?: string
  afterAlt?: string
  onClick?: () => void
  className?: string
  isBlueBackground?: boolean
}

export default function SidePreviewSlider({
  beforeImage,
  afterImage,
  showBefore = false,
  beforeAlt = "수술 전",
  afterAlt = "수술 후",
  onClick,
  className,
  isBlueBackground = false,
}: SidePreviewSliderProps) {
  // showBefore가 true면 Before 라벨, false면 After 라벨
  const displayLabel = showBefore ? "Before" : "After"

  return (
    <div className={`${isBlueBackground ? styles.containerBlue : styles.container} ${className || ""}`} onClick={onClick}>
      {/* 이미지 컨테이너 */}
      <div className={styles.imageContainer}>
        {/* showBefore가 true면 Before 이미지 전체, false면 After 이미지 전체 표시 */}
        {showBefore ? (
          <img src={beforeImage} alt={beforeAlt} className={styles.fullImage} />
        ) : (
          <img src={afterImage} alt={afterAlt} className={styles.fullImage} />
        )}
      </div>

      {/* Before/After 라벨 - 이미지 아래 */}
      <div className={isBlueBackground ? styles.labelsContainerBlue : styles.labelsContainer}>
        <div className={styles.label}>{displayLabel}</div>
      </div>
    </div>
  )
}