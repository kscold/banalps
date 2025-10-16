'use client';

import { Suspense } from 'react';
import HairTransplantLayout from '@/shared/components/HairTransplant/HairTransplantLayoutClient';
import { useReoperationTranslations } from '@/hooks/useAllPagesTranslations';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import { useSlides } from '@/hooks/useSlides';

function ReoperationContent() {
  const t = useReoperationTranslations();
  const { language } = useLanguageStore();
  const { slides } = useSlides('hair-transplant/reoperation');
  const layoutData = {
    heroTitle: (
      <>
        {t.hero.titleLine1}
        <br />
        {t.hero.titleLine2}
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
      titleMarginBottom: 120,
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
      images: {
        main: '/hair-transplant/reoperation/reoperation-2.png',
        secondary: '/hair-transplant/reoperation/reoperation-1.png',
      },
      imagesMobile: {
        main: '/hair-transplant/reoperation/mobile/reoperation-2.svg',
        secondary: '/hair-transplant/reoperation/mobile/reoperation-1.svg',
      },
      imagesMobileSize: {
        mainMaxWidth: false, // main 이미지는 100vw
        secondaryMaxWidth: true, // secondary 이미지도 100vw
        mainHeight: 305,
        secondaryHeight: 382,
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
      titleMobile: (
        <>
          {t.section2.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section2.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
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
      svgElements: {
        container: '/hair-transplant/reoperation/illustration-1.svg',
        absolute: '/hair-transplant/reoperation/illustration-2.svg',
      },
      // 각 SVG 요소의 크기 설정
      svgElementsSize: {
        container: {
          width: 418, // vw 단위로 변환됨
          height: 188, // vw 단위로 변환됨
        },
        absolute: {
          width: 232, // vw 단위로 변환됨
          height: 259, // vw 단위로 변환됨
        },
      },
      // absolute SVG의 위치 설정 (section2Content 기준)
      svgElementsPosition: {
        absolute: {
          bottom: language === 'JP' ? -40 : 0,
          right: language === 'JP' ? -30 : -30,
        },
      },
      images: {
        main: '/hair-transplant/reoperation/reoperation-3.jpg',
      },
      imagesSize: {
        main: {
          width: 830,
          height: 600,
        },
      },
      mobileImages: {
        illustration: ['/hair-transplant/reoperation/mobile-3.svg'],
      },
      imagesMobile: {
        main: '/hair-transplant/reoperation/mobile/reoperation-3.svg',
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
      images: {
        main: '/hair-transplant/reoperation/reoperation-4.png',
      },
      imagesMobile: {
        main: '/hair-transplant/reoperation/mobile/reoperation-4.svg',
      },
    },
    beforeAfterData: {
      category: t.beforeAfter.category,
      title: t.beforeAfter.title,
      beforeImage: slides[0]?.beforeImage || '/hair-transplant/reoperation/slide/before.png',
      afterImage: slides[0]?.afterImage || '/hair-transplant/reoperation/slide/after.png',
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

  return <HairTransplantLayout {...layoutData} language={language} />;
}

export default function ReoperationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReoperationContent />
    </Suspense>
  );
}
