'use client';

import HairTransplantLayout from '@/shared/components/HairTransplant/HairTransplantLayout';
import { useForeheadHairTransplantTranslations } from '@/hooks/useAllPagesTranslations';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import { useSlides } from '@/hooks/useSlides';

export default function ForeheadHairTransplantPage() {
  const t = useForeheadHairTransplantTranslations();
  const { language } = useLanguageStore();
  const { slides } = useSlides('forehead/hair-transplant');
  const layoutData = {
    heroTitle: (
      <>
        {(t.hero as any).titleLine1 || t.hero.title.split('\n')[0]}
        <br />
        {(t.hero as any).titleLine2 || t.hero.title.split('\n')[1]}
      </>
    ),
    heroTitleMobile: (
      <>
        {t.hero.title.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < t.hero.title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </>
    ),
    heroDotAbsolute: true, // Use absolute positioned dot for this page
    heroDotPosition: {
      absolute: true,
      // 언어에 따른 데스크탑 위치
      left: language === 'JP' ? 365 : 235,
      bottom: language === 'JP' ? 6 : 12,
      // 언어에 따른 모바일 위치
      mobileLeft: language === 'JP' ? 243 : 155,
      mobileBottom: language === 'JP' ? 2 : 6,
    },
    heroIllustration: '/forehead/hero-illustration.svg',
    heroIllustrationMobile: '/forehead/mobile/hero-illustration.svg',
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
      titleMarginBottom: 120, // 120px (데스크탑에서는 vw로 변환)
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
      descriptionWidth: 530, // section1Description 너비 600 vw 단위
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
        main: '/forehead/hair-transplant/hair-transplant-2.png',
        secondary: '/forehead/hair-transplant/hair-transplant-1.png',
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
        main: '/forehead/hair-transplant/mobile/hair-transplant-1-mobile.svg',
        secondary: '/forehead/hair-transplant/mobile/hair-transplant-2-mobile.svg',
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
      title: t.section2.title,
      titleMarginBottom: 120, // 120px (데스크탑에서는 vw로 변환)
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
        main: '/forehead/hair-transplant/hair-transplant-3.png',
      },
      imagesMobile: {
        main: '/forehead/hair-transplant/mobile/hair-transplant-3-mobile.svg',
      },
      imagesMobileSize: {
        mainMaxWidth: false,
        mainHeight: 305,
      },
    },
    section3: {
      number: 3,
      numberPosition: {
        mobile: {
          top: language === 'JP' ? 0 : -40, // 필요시 추가
        },
        desktop: {
          right: 0, // 필요시 추가
        },
      },
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
        main: '/forehead/hair-transplant/hair-transplant-4.png',
      },
      imagesMobile: {
        main: '/forehead/hair-transplant/mobile/hair-transplant-4-mobile.svg',
      },
      imagesMobileSize: {
        mainMaxWidth: false,
        mainHeight: 305,
      },
    },
    beforeAfterData: {
      category: t.beforeAfter.category,
      title: t.beforeAfter.title,
      beforeImage: slides[0]?.beforeImage || '/forehead/hair-transplant/slide/before.jpg',
      afterImage: slides[0]?.afterImage || '/forehead/hair-transplant/slide/after.jpg',
      beforeAlt: t.beforeAfter.beforeAlt,
      afterAlt: t.beforeAfter.afterAlt,
      imageScale: slides[0]?.scale || 1.0,
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
          {card.title.split('\n').map((line, cardIndex) => (
            <span key={cardIndex}>
              {line}
              {cardIndex < card.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </>
      ),
    })),
    language: language,
  };

  return <HairTransplantLayout {...layoutData} isCrown={true} isHairTransplant={true} />;
}
