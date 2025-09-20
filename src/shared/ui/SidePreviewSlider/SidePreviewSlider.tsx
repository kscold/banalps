"use client"

import React from "react"
import * as styles from "./SidePreviewSlider.css"

interface SidePreviewSliderProps {
  beforeImage: string
  afterImage: string
  showBefore?: boolean // true면 Before 쪽을 보여줌
  beforeAlt?: string
  afterAlt?: string
  onClick?: () => void
  className?: string
}

export default function SidePreviewSlider({
  beforeImage,
  afterImage,
  showBefore = false,
  beforeAlt = "수술 전",
  afterAlt = "수술 후",
  onClick,
  className,
}: SidePreviewSliderProps) {
  // showBefore가 true면 Before만, false면 After만 보여줌
  const displayImage = showBefore ? beforeImage : afterImage
  const displayAlt = showBefore ? beforeAlt : afterAlt
  const displayLabel = showBefore ? "Before" : "After"

  return (
    <div className={`${styles.container} ${className || ""}`} onClick={onClick}>
      {/* 이미지 컨테이너 */}
      <div className={styles.imageContainer}>
        <img
          src={displayImage}
          alt={displayAlt}
          className={styles.image}
          style={{
            objectPosition: showBefore ? "0 0" : "100% 0",
            width: "200%",
            maxWidth: "200%",
            transform: showBefore ? "translateX(0)" : "translateX(-50%)"
          }}
        />
      </div>

      {/* Before/After 라벨 - 이미지 아래 */}
      <div className={styles.labelsContainer}>
        <div className={styles.label}>{displayLabel}</div>
      </div>
    </div>
  )
}