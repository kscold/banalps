"use client";

import React, { useState, useRef } from "react";
import BeforeAfterSlider from "@/shared/ui/BeforeAfterSlider/BeforeAfterSlider";
import SidePreviewSlider from "@/shared/ui/SidePreviewSlider/SidePreviewSlider";
import * as styles from "./BeforeAfterPage.css";

// 카테고리 타입 정의
type Category =
  | "이마축소"
  | "흉터&재수술"
  | "헤어라인(남성)"
  | "헤어라인(여성)"
  | "정수리";

// 수술 전후 데이터 타입
interface BeforeAfterItem {
  id: number;
  category: Category;
  title?: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
}

// 더미 데이터
const beforeAfterData: BeforeAfterItem[] = [
  // 이마축소
  {
    id: 1,
    category: "이마축소",
    title: "이마축소(여)_1년경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  {
    id: 2,
    category: "이마축소",
    title: "이마축소(여)_6개월경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  {
    id: 3,
    category: "이마축소",
    title: "이마축소(여)_3개월경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  // 흉터&재수술
  {
    id: 4,
    category: "흉터&재수술",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  {
    id: 5,
    category: "흉터&재수술",
    title: "흉터재수술 6개월경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  // 헤어라인(여성)
  {
    id: 6,
    category: "헤어라인(여성)",
    title: "3400모(여)_1년경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  // 헤어라인(남성)
  {
    id: 7,
    category: "헤어라인(남성)",
    title: "4000모(남)_1년경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  {
    id: 8,
    category: "헤어라인(남성)",
    title: "3500모(남)_8개월경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  {
    id: 9,
    category: "헤어라인(남성)",
    title: "3000모(남)_6개월경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  // 정수리
  {
    id: 10,
    category: "정수리",
    title: "5500모(남)_8개월 경과",
    description: "",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
];

// 카테고리별 캐러셀 컴포넌트
function CategoryCarousel({
  category,
  items,
}: {
  category: string;
  items: BeforeAfterItem[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Get previous and next indices for side images
  const getPrevIndex = (index: number) =>
    index === 0 ? items.length - 1 : index - 1;
  const getNextIndex = (index: number) =>
    index === items.length - 1 ? 0 : index + 1;

  return (
    <div className={styles.carouselSection}>
      <div className={styles.carouselHeader}>
        <span className={styles.categoryBadge}>{category}</span>
        {items[currentIndex]?.title && (
          <span className={styles.itemTitle}>{items[currentIndex].title}</span>
        )}
      </div>

      <div className={styles.carouselContainer}>
        {/* Left side preview */}
        <div className={`${styles.sidePreview} ${styles.sidePreviewLeft}`}>
          <SidePreviewSlider
            beforeImage={items[getPrevIndex(currentIndex)].beforeImage}
            afterImage={items[getPrevIndex(currentIndex)].afterImage}
            showBefore={false} // After 쪽만 보여줌
            onClick={handlePrevious}
          />
        </div>

        {/* Arrow Left */}
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          onClick={handlePrevious}
          aria-label="이전"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Main carousel viewport */}
        <div className={styles.carouselViewport} ref={carouselRef}>
          <div className={styles.mainSlide}>
            <BeforeAfterSlider
              beforeImage={items[currentIndex].beforeImage}
              afterImage={items[currentIndex].afterImage}
              beforeAlt={`${items[currentIndex].title} - Before`}
              afterAlt={`${items[currentIndex].title} - After`}
            />
          </div>
        </div>

        {/* Arrow Right */}
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          onClick={handleNext}
          aria-label="다음"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Right side preview */}
        <div className={`${styles.sidePreview} ${styles.sidePreviewRight}`}>
          <SidePreviewSlider
            beforeImage={items[getNextIndex(currentIndex)].beforeImage}
            afterImage={items[getNextIndex(currentIndex)].afterImage}
            showBefore={true} // Before 쪽만 보여줌
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterPage() {
  // 카테고리별로 그룹화
  const groupedData = beforeAfterData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<Category, BeforeAfterItem[]>);

  // 카테고리 순서 정의
  const categoryOrder: Category[] = [
    "이마축소",
    "흉터&재수술",
    "헤어라인(남성)",
    "헤어라인(여성)",
    "정수리",
  ];

  return (
    <div className={styles.beforeAfterPage}>
      <section className={styles.BeforeAfterHeroSection}>
        <div className={styles.BeforeAfterHeroContainer}>
          {/* Hero Title - 중앙에 배치 */}
          <div className={styles.BeforeAfterHeroTitleWrapper}>
            <div className={styles.BeforeAfterHeroTitleContainer}>
              <h1 className={styles.BeforeAfterHeroTitle}>
                <span>
                  헤어라인
                  <br />
                  교정
                  <div className={styles.BeforeAfterHeroTitleDot} />
                </span>
              </h1>
            </div>
          </div>
          {/* Hero Illustration - 왼쪽에 붙도록 */}
          <div className={styles.BeforeAfterHeroIllustration}>
            <img
              src="/hair-transplant/hero-illustration.svg"
              alt="헤어라인 모발이식 일러스트"
              className={styles.BeforeAfterHeroIllustrationImage}
            />
          </div>
        </div>
        <img
          src="/hair-transplant/mobile/hero-illustration-mobile.svg"
          alt="헤어라인 모발이식 일러스트"
          className={styles.BeforeAfterHeroIllustrationImageMobile}
        />
      </section>
      {/* 전후 사진 캐러셀 섹션들 */}
      <section className={styles.mainSection}>
        <div className={styles.mainContainer}>
          {categoryOrder.map(
            (category) =>
              groupedData[category] && (
                <CategoryCarousel
                  key={category}
                  category={category}
                  items={groupedData[category]}
                />
              )
          )}
        </div>
      </section>
    </div>
  );
}
