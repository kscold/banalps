'use client';

import { Suspense } from 'react';
import HairTransplantLayout from '@/shared/components/HairTransplant/HairTransplantLayout';
import { useIncisionTranslations } from '@/hooks/useAllPagesTranslations';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import { useSlides } from '@/hooks/useSlides';

function IncisionContent() {
  const t = useIncisionTranslations();
  const { language } = useLanguageStore();
  const { slides } = useSlides('hair-transplant/incision');
  const layoutData = {
    heroTitle: <>{t.hero.title}</>,
    heroTitleMobile: (
      <>
        {t.hero.titleMobile.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < t.hero.titleMobile.split('\n').length - 1 && <br />}
          </span>
        ))}
      </>
    ),
    section1: {
      number: 1,
      title: (
        <>
          {t.section1.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      titleMobile: (
        <>
          {t.section1.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      titleMobileSize: {
        height: 106,
      },
      titleMobileMinHeight: language === 'JP' ? 216 : undefined, // 일본어 긴 타이틀을 위한 최소 높이 (24mvw * 1.5 * 6줄 = 216mvw)
      description: (
        <>
          {t.section1.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      descriptionMobile: (
        <>
          {t.section1.descriptionMobile.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.descriptionMobile.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      illustration:
        language === 'JP'
          ? '/hair-transplant/incision/illustration-1-jp.svg'
          : '/hair-transplant/incision/illustration-1.svg',
      illustrationSize: {
        width: 459,
        height: 190,
      },
      illustrationMobile:
        language === 'JP'
          ? '/hair-transplant/incision/mobile/illustration-1-mobile-jp.svg'
          : '/hair-transplant/incision/mobile/illustration-1-mobile.svg',
      illustrationMobileSize: {
        width: 324,
        height: 252,
      },
      images: {
        main: '/hair-transplant/incision/incision-1.png',
        secondary: '/hair-transplant/incision/incision-2.png',
      },
      imagesSize: {
        main: {
          width: 600,
          height: 660,
        },
        secondary: {
          width: 350,
          height: 315,
        },
      },
      imagesPosition: {
        main: {
          top: 0,
        },
        secondary: {
          bottom: 0,
          left: 0,
        },
      },
      imagesMobile: {
        main: '/hair-transplant/incision/mobile/incision-1.jpg',
        secondary: '/hair-transplant/incision/mobile/incision-2.jpg',
      },
      imagesMobileSize: {
        mainMaxWidth: false,
        secondaryMaxWidth: true,
        mainHeight: 305,
        secondaryHeight: 382,
      },
      section1RightSize: {
        width: 1085, // section1Right 컨테이너 너비 800 vw 단위
        height: 767, // section1Right 컨테이너 높이 700 vw 단위
      },
    },
    section2: {
      number: 2,
      title: (
        <>
          {t.section2.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section2.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      titleMobile: 'titleMobile' in t.section2 ? t.section2.titleMobile : t.section2.title,
      titleMobileSize: {
        height: 76,
      },
      titleMobileMinHeight: language === 'JP' ? 152 : undefined, // 일본어 긴 타이틀을 위한 최소 높이 (24mvw * 1.5 * 3줄 = 108mvw)
      titleMarginBottom: 120,
      description: (
        <>
          {t.section2.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section2.description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      descriptionMobile: (
        <>
          {t.section2.descriptionMobile.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section2.descriptionMobile.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      images: {
        main: '/hair-transplant/incision/incision-3.png',
      },
      illustration: '/hair-transplant/incision/illustration-2.svg',
      illustrationSize: {
        width: 566,
        height: 326,
      },
      illustrationPosition: {
        // Optional: absolute positioning for desktop
        bottom: -120, // Position at the bottom
        right: -200, // Position at the right
      },
      illustrationMobile: '/hair-transplant/incision/mobile/illustration-2-mobile.svg',
      illustrationMobileSize: {
        width: 375,
        height: 336,
        fullWidth: true,
      },
      imagesMobile: {
        main: '/hair-transplant/incision/mobile/incision-3.jpg',
      },
      imagesMobileSize: {
        mainMaxWidth: false,
        mainHeight: 305,
      },
    },
    section3: {
      number: 3,
      title: (
        <>
          {t.section3.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section3.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      titleMobile: (
        <>
          {t.section3.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section3.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      description: (
        <>
          {t.section3.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section3.description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      descriptionMobile: (
        <>
          {t.section3.descriptionMobile.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section3.descriptionMobile.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      illustration: '/hair-transplant/incision/illustration-3.svg',
      illustrationSize: {
        width: 745,
        height: 331,
      },
      illustrationPosition: {
        // Absolute positioning for section 3 desktop
        top: 420, // Position from top
        left: -170, // Position from left
      },
      illustrationMobile: '/hair-transplant/incision/mobile/illustration-3-mobile.svg',
      illustrationMobileSize: {
        width: 375,
        height: 336,
      },
      images: {
        main: '/hair-transplant/incision/incision-4.png',
      },
      imagesSize: {
        main: {
          width: 610,
          height: 550,
        },
      },
      imagesMobile: {
        main: '/hair-transplant/incision/mobile/incision-4.jpg',
      },
      imagesMobileSize: {
        mainMaxWidth: false,
        mainHeight: 305,
      },
    },
    beforeAfterData: {
      category: t.beforeAfter.category,
      title: t.beforeAfter.title,
      beforeImage: slides[0]?.beforeImage || '/hair-transplant/incision/slide/before.jpg',
      afterImage: slides[0]?.afterImage || '/hair-transplant/incision/slide/after.jpg',
      beforeAlt: t.beforeAfter.beforeAlt,
      afterAlt: t.beforeAfter.afterAlt,
      imageScale: slides[0]?.scale || 1.0,
      imageOffsetX: slides[0]?.offsetX || 0,
      imageOffsetY: slides[0]?.offsetY || 0,
    },
    beforeAfterButton: {
      text: t.beforeAfter.buttonText,
      href: '/before-after',
      width: 269, // 데스크탑에서 버튼 너비 설정 (기본값: 224)
    },
    featuresTitle: (
      <>
        {t.features.title.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < t.features.title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </>
    ),
    featuresTitleMobile: (
      <>
        {t.features.titleMobile.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < t.features.titleMobile.split('\n').length - 1 && <br />}
          </span>
        ))}
      </>
    ),
    featureCards: t.features.cards.map((card, index) => ({
      icon: `/hair-transplant/feature-${index + 1}.svg`,
      title: (
        <>
          {card.title.split('\n').map((line, lineIndex) => (
            <span key={lineIndex}>
              {line}
              {lineIndex < card.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
    })),
  };

  return <HairTransplantLayout {...layoutData} language={language} isIncision={true} />;
}

export default function IncisionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IncisionContent />
    </Suspense>
  );
}
