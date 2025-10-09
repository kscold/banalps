'use client';

import React, { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import BeforeAfterSlider from '@/shared/ui/BeforeAfterSlider/BeforeAfterSlider';
import SidePreviewSlider from '@/shared/ui/SidePreviewSlider/SidePreviewSlider';
import HeroSection from '@/shared/components/HairTransplant/HeroSection';
import * as styles from './BeforeAfterPage.css';
import { useAuthStore } from '@/shared/stores/useAuthStore';
import { useBeforeAfterTranslations } from '@/hooks/useAllPagesTranslations';

// 카테고리 타입 정의
type Category = '이마축소' | '흉터&재수술' | '헤어라인(남성)' | '헤어라인(여성)' | '정수리';

// 수술 전후 데이터 타입
interface BeforeAfterItem {
  id: number;
  category: Category;
  title?: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
}

// 실제 데이터
const beforeAfterData: BeforeAfterItem[] = [
  // 이마축소
  {
    id: 1,
    category: '이마축소',
    title: '이마축소(여)_1년경과',
    beforeImage: '/before-after/이마축소/1-1.jpg',
    afterImage: '/before-after/이마축소/1-2.jpg',
  },
  {
    id: 2,
    category: '이마축소',
    title: '이마축소(여)_6개월경과',
    beforeImage: '/before-after/이마축소/10-1 이마축소(여) _ 6개월경과.jpg',
    afterImage: '/before-after/이마축소/10-2 이마축소(여) _ 6개월경과.jpg',
  },
  {
    id: 3,
    category: '이마축소',
    title: '이마축소(남)_6개월경과',
    beforeImage: '/before-after/이마축소/11-1 이마축소(남) _ 6개월경과.jpg',
    afterImage: '/before-after/이마축소/11-2 이마축소(남) _ 6개월경과.jpg',
  },
  {
    id: 4,
    category: '이마축소',
    title: '이마축소(여)_6개월경과',
    beforeImage: '/before-after/이마축소/12-1 이마축소(여) _ 6개월경과.jpg',
    afterImage: '/before-after/이마축소/12-2 이마축소(여) _ 6개월경과.jpg',
  },
  {
    id: 5,
    category: '이마축소',
    title: '이마축소(여)_6개월경과',
    beforeImage: '/before-after/이마축소/13-1 이마축소(여) _ 6개월경과.jpg',
    afterImage: '/before-after/이마축소/13-2 이마축소(여) _ 6개월경과.jpg',
  },
  {
    id: 6,
    category: '이마축소',
    title: '이마축소(여)_6개월경과',
    beforeImage: '/before-after/이마축소/14-1 이마축소(여) _ 6개월경과.jpg',
    afterImage: '/before-after/이마축소/14-2 이마축소(여) _ 6개월경과.jpg',
  },
  {
    id: 7,
    category: '이마축소',
    title: '이마축소(여)_6개월경과',
    beforeImage: '/before-after/이마축소/15-1 이마축소(여) _ 6개월경과.jpg',
    afterImage: '/before-after/이마축소/15-2 이마축소(여) _ 6개월경과.jpg',
  },
  {
    id: 8,
    category: '이마축소',
    title: '이마축소(여)_6개월경과',
    beforeImage: '/before-after/이마축소/16-1 이마축소(여) _ 6개월경과.jpg',
    afterImage: '/before-after/이마축소/16-2 이마축소(여) _ 6개월경과.jpg',
  },
  {
    id: 9,
    category: '이마축소',
    title: '이마축소(남)_1년경과',
    beforeImage: '/before-after/이마축소/17-1 이마축소(남) _ 1년경과.jpg',
    afterImage: '/before-after/이마축소/17-2 이마축소(남) _ 1년경과.jpg',
  },
  {
    id: 10,
    category: '이마축소',
    title: '이마축소(남)_6개월경과',
    beforeImage: '/before-after/이마축소/18-1 이마축소(남) _ 6개월경과.jpg',
    afterImage: '/before-after/이마축소/18-2 이마축소(남) _ 6개월경과.jpg',
  },

  // 흉터&재수술
  {
    id: 11,
    category: '흉터&재수술',
    title: '흉터재수술',
    beforeImage: '/before-after/흉터&재수술/1-1.jpg',
    afterImage: '/before-after/흉터&재수술/1-2.jpg',
  },
  {
    id: 12,
    category: '흉터&재수술',
    title: '흉터재수술',
    beforeImage: '/before-after/흉터&재수술/10-1.jpg',
    afterImage: '/before-after/흉터&재수술/10-2.jpg',
  },
  {
    id: 13,
    category: '흉터&재수술',
    title: '흉터재수술',
    beforeImage: '/before-after/흉터&재수술/11-1.jpg',
    afterImage: '/before-after/흉터&재수술/11-2.jpg',
  },
  {
    id: 14,
    category: '흉터&재수술',
    title: '흉터재수술',
    beforeImage: '/before-after/흉터&재수술/12-1.jpg',
    afterImage: '/before-after/흉터&재수술/12-2.jpg',
  },
  {
    id: 15,
    category: '흉터&재수술',
    title: '흉터재수술',
    beforeImage: '/before-after/흉터&재수술/13-1.jpg',
    afterImage: '/before-after/흉터&재수술/13-2.jpg',
  },

  // 헤어라인(남성)
  {
    id: 21,
    category: '헤어라인(남성)',
    title: '4000모(남)_1년경과',
    beforeImage: '/before-after/헤어라인(남성)/1-1 4000모(남) _ 1년경과.jpg',
    afterImage: '/before-after/헤어라인(남성)/1-2 4000모(남) _ 1년경과.jpg',
  },
  {
    id: 22,
    category: '헤어라인(남성)',
    title: '2800모(남)_1년경과',
    beforeImage: '/before-after/헤어라인(남성)/10-1 2800모(남) _ 1년경과.jpg',
    afterImage: '/before-after/헤어라인(남성)/10-2 2800모(남) _ 1년경과.jpg',
  },
  {
    id: 23,
    category: '헤어라인(남성)',
    title: '2900모(남)_1년경과',
    beforeImage: '/before-after/헤어라인(남성)/11-1 2900모(남) _ 1년경과.jpg',
    afterImage: '/before-after/헤어라인(남성)/11-2 2900모(남) _ 1년경과.jpg',
  },
  {
    id: 24,
    category: '헤어라인(남성)',
    title: '2600모(남)_1년경과',
    beforeImage: '/before-after/헤어라인(남성)/12-1 2600모(남) _ 1년경과.jpg',
    afterImage: '/before-after/헤어라인(남성)/12-2 2600모(남) _ 1년경과.jpg',
  },
  {
    id: 25,
    category: '헤어라인(남성)',
    title: '2900모(남)_1년경과',
    beforeImage: '/before-after/헤어라인(남성)/13-1 2900모(남) _ 1년경과.jpg',
    afterImage: '/before-after/헤어라인(남성)/13-2 2900모(남) _ 1년경과.jpg',
  },

  // 헤어라인(여성)
  {
    id: 31,
    category: '헤어라인(여성)',
    title: '헤어라인(여)',
    beforeImage: '/before-after/헤어라인(여성)/1-1.jpg',
    afterImage: '/before-after/헤어라인(여성)/1-2.jpg',
  },
  {
    id: 32,
    category: '헤어라인(여성)',
    title: '헤어라인(여)',
    beforeImage: '/before-after/헤어라인(여성)/10-1.jpg',
    afterImage: '/before-after/헤어라인(여성)/10-2.jpg',
  },
  {
    id: 33,
    category: '헤어라인(여성)',
    title: '헤어라인(여)',
    beforeImage: '/before-after/헤어라인(여성)/11-1.jpg',
    afterImage: '/before-after/헤어라인(여성)/11-2.jpg',
  },
  {
    id: 34,
    category: '헤어라인(여성)',
    title: '헤어라인(여)',
    beforeImage: '/before-after/헤어라인(여성)/12-1.jpg',
    afterImage: '/before-after/헤어라인(여성)/12-2.jpg',
  },
  {
    id: 35,
    category: '헤어라인(여성)',
    title: '헤어라인(여)',
    beforeImage: '/before-after/헤어라인(여성)/13-1.jpg',
    afterImage: '/before-after/헤어라인(여성)/13-2.jpg',
  },

  // 정수리
  {
    id: 41,
    category: '정수리',
    beforeImage: '/before-after/정수리 /1-1.jpg',
    afterImage: '/before-after/정수리 /1-2.jpg',
  },
  {
    id: 42,
    category: '정수리',
    title: '5500모(남)_8개월경과',
    beforeImage: '/before-after/정수리 /2-1 5500모(남) _ 8개월 경과.jpg',
    afterImage: '/before-after/정수리 /2-2 5500모(남) _ 8개월 경과.jpg',
  },
  {
    id: 43,
    category: '정수리',
    beforeImage: '/before-after/정수리 /10-1.jpg',
    afterImage: '/before-after/정수리 /10-2.jpg',
  },
  {
    id: 44,
    category: '정수리',
    beforeImage: '/before-after/정수리 /11-1.jpg',
    afterImage: '/before-after/정수리 /11-2.jpg',
  },
  {
    id: 45,
    category: '정수리',
    beforeImage: '/before-after/정수리 /12-1.jpg',
    afterImage: '/before-after/정수리 /12-2.jpg',
  },
];

// 카테고리별 캐러셀 컴포넌트
function CategoryCarousel({
  category,
  items,
  index,
  isLoggedIn,
  onLoginClick,
  translations,
  translateTitle,
}: {
  category: string;
  items: BeforeAfterItem[];
  index: number;
  isLoggedIn: boolean;
  onLoginClick: () => void;
  translations: any;
  translateTitle: (title: string | undefined, category: Category) => string;
}) {
  const isBlueBackground = index % 2 === 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 핸들러 함수들 - useCallback으로 메모이제이션
  const handlePrevious = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  // Get previous and next indices for side images - useMemo로 메모이제이션
  const getPrevIndex = React.useCallback(
    (index: number) => (index === 0 ? items.length - 1 : index - 1),
    [items.length],
  );
  const getNextIndex = React.useCallback(
    (index: number) => (index === items.length - 1 ? 0 : index + 1),
    [items.length],
  );

  // Check if mobile
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      style={{
        padding: isMobile ? '40px 0 60px' : '160px 0px',
        backgroundColor: isBlueBackground ? '#D5FEFF' : '#FFFDF7',
        width: '100%',
      }}
    >
      <div className={items[currentIndex]?.title ? styles.carouselHeader : styles.carouselHeaderNoSubtitle}>
        <span className={styles.categoryBadge}>{category}</span>
        {items[currentIndex]?.title && (
          <span className={styles.itemTitle}>
            {translateTitle(items[currentIndex]?.title, items[currentIndex]?.category)}
          </span>
        )}
      </div>

      <div className={styles.carouselContainer}>
        {/* Left side preview */}
        <div
          className={`${styles.sidePreview} ${isBlueBackground ? styles.sidePreviewLeftBlue : styles.sidePreviewLeft}`}
        >
          <SidePreviewSlider
            beforeImage={items[getPrevIndex(currentIndex)].beforeImage}
            afterImage={items[getPrevIndex(currentIndex)].afterImage}
            showBefore={false} // After 쪽만 보여줌
            onClick={handlePrevious}
            isBlueBackground={isBlueBackground}
            isLoggedIn={isLoggedIn}
          />
        </div>

        {/* Arrow Left */}
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          onClick={handlePrevious}
          aria-label={translations.navigation.prev}
        >
          <img src="/before-after/arrow-left.svg" alt="Previous" />
        </button>

        {/* Main carousel viewport */}
        <div className={styles.carouselViewport} ref={carouselRef}>
          <div className={styles.mainSlide}>
            <BeforeAfterSlider
              beforeImage={items[currentIndex].beforeImage}
              afterImage={items[currentIndex].afterImage}
              beforeAlt={`${
                translateTitle(items[currentIndex].title, items[currentIndex].category) || category
              } - Before`}
              afterAlt={`${
                translateTitle(items[currentIndex].title, items[currentIndex].category) || category
              } - After`}
              isBlueBackground={isBlueBackground}
              className={styles.customSliderHeight}
              isLoggedIn={isLoggedIn}
              onLoginClick={onLoginClick}
              loginOverlayText={translations.loginOverlay.text}
            />
          </div>
        </div>

        {/* Arrow Right */}
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          onClick={handleNext}
          aria-label={translations.navigation.next}
        >
          <img src="/before-after/arrow-right.svg" alt="Next" />
        </button>

        {/* Right side preview */}
        <div
          className={`${styles.sidePreview} ${
            isBlueBackground ? styles.sidePreviewRightBlue : styles.sidePreviewRight
          }`}
        >
          <SidePreviewSlider
            beforeImage={items[getNextIndex(currentIndex)].beforeImage}
            afterImage={items[getNextIndex(currentIndex)].afterImage}
            showBefore={true} // Before 쪽만 보여줌
            onClick={handleNext}
            isBlueBackground={isBlueBackground}
            isLoggedIn={isLoggedIn}
          />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterPage() {
  // 번역 훅 사용
  const t = useBeforeAfterTranslations();

  // 세션 및 인증 상태 확인
  const { data: session, status } = useSession();
  const { openLoginModal } = useAuthStore();

  // 로그인 상태 확인
  const isLoggedIn = status === 'authenticated' && !!session;

  // 화면 크기 체크
  const [isMobile, setIsMobile] = React.useState(false);
  const [isDesktopLarge, setIsDesktopLarge] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1023);
      setIsDesktopLarge(window.innerWidth >= 1920);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 카테고리별로 그룹화 - useMemo로 메모이제이션
  const groupedData = React.useMemo(() => {
    return beforeAfterData.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      },
      {} as Record<Category, BeforeAfterItem[]>,
    );
  }, []);

  // 카테고리 순서 정의 (번역 키로 매핑) - useMemo로 메모이제이션
  const categoryOrder: Category[] = React.useMemo(
    () => ['이마축소', '흉터&재수술', '헤어라인(남성)', '헤어라인(여성)', '정수리'],
    [],
  );

  // 카테고리 번역 매핑 - useCallback으로 메모이제이션
  const getCategoryName = React.useCallback(
    (category: Category): string => {
      switch (category) {
        case '이마축소':
          return t.categories.foreheadReduction;
        case '흉터&재수술':
          return t.categories.scarRevision;
        case '헤어라인(남성)':
          return t.categories.hairlineMale;
        case '헤어라인(여성)':
          return t.categories.hairlineFemale;
        case '정수리':
          return t.categories.crown;
        default:
          return category;
      }
    },
    [t.categories],
  );

  // 타이틀 번역 함수 - 모든 조합 자동 번역
  const translateTitle = React.useCallback(
    (title: string | undefined, _category: Category): string => {
      if (!title) return '';

      // 한국어가 아닌 경우 그대로 반환 (yearsAgo가 "년 전"이면 한국어)
      const language = t.cases.yearsAgo;
      if (language === '년 전' || !language) {
        // 한국어는 번역 안 함
        return title;
      }

      let translatedTitle = title;

      // 1. 기간 번역 (긴 패턴부터 먼저 처리)
      translatedTitle = translatedTitle.replace(/(\d+)년경과/g, '$1年経過');
      translatedTitle = translatedTitle.replace(/(\d+)개월경과/g, '$1カ月経過');

      // 2. 수술 타입 번역 (단어별로 쪼개기)
      translatedTitle = translatedTitle.replace(/이마/g, '額');
      translatedTitle = translatedTitle.replace(/축소/g, '縮小');
      translatedTitle = translatedTitle.replace(/흉터/g, '傷跡');
      translatedTitle = translatedTitle.replace(/재수술/g, '再手術');
      translatedTitle = translatedTitle.replace(/헤어라인/g, 'ヘアライン');
      translatedTitle = translatedTitle.replace(/정수리/g, '頭頂部');
      translatedTitle = translatedTitle.replace(/경과/g, '経過');

      // 3. 모(毛) 번역 - 숫자 + 모 패턴
      translatedTitle = translatedTitle.replace(/(\d+)모/g, '$1毛');

      // 4. 성별 번역
      translatedTitle = translatedTitle.replace(/\(남\)/g, '（男）');
      translatedTitle = translatedTitle.replace(/\(여\)/g, '（女）');

      // 5. 구분자 번역 (언더스코어는 전각으로)
      translatedTitle = translatedTitle.replace(/_/g, '＿');

      return translatedTitle;
    },
    [t.cases],
  );

  return (
    <div className={styles.beforeAfterPage}>
      {/* Hero Section */}
      <HeroSection
        heroTitle={t.hero.title}
        heroIllustration="/before-after/hero-illustration.svg"
        heroIllustrationMobile="/before-after/mobile/hero-illustration-mobile.svg"
        isMobile={isMobile}
        isDesktopLarge={isDesktopLarge}
      />
      {/* 전후 사진 캐러셀 섹션들 */}
      <div className={styles.carouselSection}>
        {categoryOrder.map(
          (category, index) =>
            groupedData[category] && (
              <CategoryCarousel
                key={category}
                category={getCategoryName(category)}
                items={groupedData[category]}
                index={index}
                isLoggedIn={isLoggedIn}
                onLoginClick={openLoginModal}
                translations={t}
                translateTitle={translateTitle}
              />
            ),
        )}
      </div>
    </div>
  );
}
