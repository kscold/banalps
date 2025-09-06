"use client"

import React, { useState, useRef, useCallback } from "react"
import * as styles from "./BeforeAfterSlider.css"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "수술 전",
  afterAlt = "수술 후",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50) // 50% 기본 위치
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const position = ((clientX - rect.left) / rect.width) * 100
    const clampedPosition = Math.max(0, Math.min(100, position))
    setSliderPosition(clampedPosition)
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true
      updateSliderPosition(e.clientX)
    },
    [updateSliderPosition]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current) return
      updateSliderPosition(e.clientX)
    },
    [updateSliderPosition]
  )

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      isDragging.current = true
      const touch = e.touches[0]
      updateSliderPosition(touch.clientX)
    },
    [updateSliderPosition]
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging.current) return
      const touch = e.touches[0]
      updateSliderPosition(touch.clientX)
    },
    [updateSliderPosition]
  )

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false
  }, [])

  // 글로벌 마우스 이벤트 리스너
  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <div className={`${styles.container} ${className || ""}`}>
      {/* 이미지 컨테이너 */}
      <div
        ref={containerRef}
        className={styles.imageContainer}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* After 이미지 (전체) */}
        <div className={styles.afterImageWrapper}>
          <img src={afterImage} alt={afterAlt} className={styles.image} />
        </div>

        {/* Before 이미지 (클립 마스크) */}
        <div
          className={styles.beforeImageWrapper}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={beforeImage} alt={beforeAlt} className={styles.image} />
        </div>

        {/* 슬라이더 라인 */}
        <div className={styles.sliderLine} style={{ left: `${sliderPosition}%` }}>
          <div className={styles.sliderHandle}>
            <svg width="38" height="16" viewBox="0 0 38 16" fill="none">
              <polygon
                points="8,2 2,8 8,14"
                fill="#FFFFFF"
              />
              <polygon
                points="30,14 36,8 30,2"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Before/After 라벨 - 이미지 아래 */}
      <div className={styles.labelsContainer}>
        <div className={styles.label}>Before</div>
        <div className={styles.label}>After</div>
      </div>
    </div>
  )
}
