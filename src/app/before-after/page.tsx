"use client";

import React, { useState, useEffect } from "react";
import BeforeAfterSlider from "@/shared/ui/BeforeAfterSlider/BeforeAfterSlider";
import * as styles from "./BeforeAfterPage.css";

// 카테고리 타입 정의
type Category = "모발이식" | "눈" | "코" | "얼굴윤곽" | "가슴" | "지방이식" | "쁘띠" | "기타";

// 수술 전후 데이터 타입
interface BeforeAfterItem {
  id: number;
  category: Category;
  title: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
}

// 더미 데이터 (실제 데이터로 교체 필요)
const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 1,
    category: "모발이식",
    title: "M자 탈모 개선",
    description: "3,000모 이식",
    beforeImage: "/before-after/hair-transplant-1-before.jpg",
    afterImage: "/before-after/hair-transplant-1-after.jpg",
  },
  {
    id: 2,
    category: "모발이식",
    title: "정수리 탈모 개선",
    description: "2,500모 이식",
    beforeImage: "/before-after/hair-transplant-2-before.jpg",
    afterImage: "/before-after/hair-transplant-2-after.jpg",
  },
  {
    id: 3,
    category: "눈",
    title: "쌍꺼풀 수술",
    description: "자연스러운 인아웃 라인",
    beforeImage: "/before-after/eye-1-before.jpg",
    afterImage: "/before-after/eye-1-after.jpg",
  },
  {
    id: 4,
    category: "코",
    title: "콧대 + 코끝 성형",
    description: "자연스러운 라인",
    beforeImage: "/before-after/nose-1-before.jpg",
    afterImage: "/before-after/nose-1-after.jpg",
  },
  // 더 많은 데이터 추가 가능
];

export default function BeforeAfterPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "전체">("전체");
  const [filteredData, setFilteredData] = useState<BeforeAfterItem[]>(beforeAfterData);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === "전체") {
      setFilteredData(beforeAfterData);
    } else {
      setFilteredData(beforeAfterData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories: (Category | "전체")[] = [
    "전체",
    "모발이식",
    "눈",
    "코",
    "얼굴윤곽",
    "가슴",
    "지방이식",
    "쁘띠",
    "기타"
  ];

  return (
    <div className={styles.beforeAfterPage}>
      {/* 헤더 섹션 */}
      <section className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <h1 className={styles.pageTitle}>수술 전후</h1>
          <p className={styles.pageSubtitle}>
            바람부는날에도의 실제 수술 전후 사진을 확인해보세요
          </p>
        </div>
      </section>

      {/* 카테고리 탭 */}
      <section className={styles.categorySection}>
        <div className={styles.categoryContainer}>
          <div className={styles.categoryTabs}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryTab} ${
                  selectedCategory === category ? styles.categoryTabActive : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 전후 사진 그리드 */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.beforeAfterGrid}>
            {filteredData.map((item) => (
              <div key={item.id} className={styles.beforeAfterCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardCategory}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  {item.description && (
                    <p className={styles.cardDescription}>{item.description}</p>
                  )}
                </div>
                <div className={styles.sliderWrapper}>
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    beforeAlt={`${item.title} - 수술 전`}
                    afterAlt={`${item.title} - 수술 후`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className={styles.loadMoreContainer}>
            <button className={styles.loadMoreButton}>
              더보기
            </button>
          </div>
        </div>
      </section>

      {/* 상담 예약 CTA 섹션 */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            만족스러운 결과를 원하신다면<br />
            바람부는날에도와 함께하세요
          </h2>
          <button className={styles.ctaButton}>
            상담 예약하기
          </button>
        </div>
      </section>
    </div>
  );
}