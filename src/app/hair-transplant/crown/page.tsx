'use client';

import { Suspense } from 'react';
import HairTransplantLayout from '@/shared/components/HairTransplant/HairTransplantLayout';
import { useCrownTranslations } from '@/hooks/useAllPagesTranslations';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';

function CrownContent() {
  const t = useCrownTranslations();
  const { language } = useLanguageStore();

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
          ? '/hair-transplant/crown/illustration-1-jp.svg'
          : '/hair-transplant/crown/illustration-1.svg',
      illustrationSize: {
        width: 459,
        height: 114,
      },
      illustrationMobile:
        language === 'JP'
          ? '/hair-transplant/crown/mobile/illustration-1-mobile-jp.svg'
          : '/hair-transplant/crown/mobile/illustration-1-mobile.svg',
      images: {
        main: '/hair-transplant/crown/crown-2.png',
        secondary: '/hair-transplant/crown/crown-1.png',
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
        main: '/hair-transplant/crown/mobile/crown-2-mobile.svg',
        secondary: '/hair-transplant/crown/mobile/crown-1-mobile.svg',
      },
      imagesMobileSize: {
        mainMaxWidth: false, // main 이미지는 100vw
        secondaryMaxWidth: true, // secondary 이미지도 100vw
        mainHeight: 305,
        secondaryHeight: 382,
      },

      section1RightSize: {
        width: 1085,
        height: 767,
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
        container: '/hair-transplant/crown/illustration-2.svg',
        absolute:
          language === 'JP'
            ? '/hair-transplant/crown/illustration-3-jp.svg'
            : '/hair-transplant/crown/illustration-3.svg',
      },
      svgElementsSize: {
        container: {
          width: 285,
          height: 135,
        },
        absolute: {
          width: 279,
          height: 258,
        },
      },
      svgElementsPosition: {
        absolute: {
          bottom: language === 'JP' ? 270 : 90,
          right: language === 'JP' ? 0 : 0,
        },
      },
      mobileImages: {
        illustration: [
          '/hair-transplant/crown/illustration-2.svg',
          language === 'JP'
            ? '/hair-transplant/crown/illustration-3-jp.svg'
            : '/hair-transplant/crown/illustration-3.svg',
        ],
        illustrationSize: {
          width: 375,
          height: 336,
        },
      },
      images: {
        main: '/hair-transplant/crown/crown-3.png',
      },
      imagesMobile: {
        main: '/hair-transplant/crown/mobile/crown-3-mobile.svg',
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
      illustration: '/hair-transplant/crown/illustration-4.svg',
      illustrationSize: {
        width: 275,
        height: 223,
      },
      illustrationMobile: '/hair-transplant/crown/illustration-4.svg',
      illustrationMobileSize: {
        width: 278,
        height: 226,
      },
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
        main: '/hair-transplant/crown/crown-4.png',
      },
      imagesMobile: {
        main: '/hair-transplant/crown/mobile/crown-4-mobile.svg',
      },
      imagesMobileSize: {
        mainMaxWidth: false,
        mainHeight: 305,
      },
    },
    beforeAfterData: {
      category: t.beforeAfter.category,
      title: t.beforeAfter.title,
      beforeImage: '/hair-transplant/crown/slide/before.png',
      afterImage: '/hair-transplant/crown/slide/after.png',
      beforeAlt: t.beforeAfter.beforeAlt,
      afterAlt: t.beforeAfter.afterAlt,
    },
    beforeAfterButton: {
      text: t.beforeAfter.buttonText,
      href: '/before-after',
      width: 269,
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

  return <HairTransplantLayout {...layoutData} language={language} isCrown={true} />;
}

export default function CrownPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CrownContent />
    </Suspense>
  );
}
