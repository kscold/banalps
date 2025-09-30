"use client";

import { Suspense } from "react";
import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";
import { useHairlineTranslations } from "@/hooks/useAllPagesTranslations";
import { useLanguageStore } from "@/shared/stores/useLanguageStore";

function HairlineContent() {
  const t = useHairlineTranslations();
  const { language } = useLanguageStore();
  const layoutData = {
    heroTitle: (
      <>
        {t.hero.titleLine1}
        <br />
        {t.hero.titleLine2}
      </>
    ),
    heroDotPosition: {
      absolute: true,
      // 데스크탑 위치
      left: language === "JP" ? 130 : 120,
      bottom: language === "JP" ? 5 : 12,
      // 모바일 위치 (다른 값 설정 가능)
      mobileLeft: 80,
      mobileBottom: 8,
    },
    section1: {
      number: 1,
      title: (
        <>
          {t.section1.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      titleMobile: (
        <>
          {t.section1.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      description: (
        <>
          {t.section1.description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      descriptionMobile: (
        <>
          {t.section1.descriptionMobile.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section1.descriptionMobile.split("\n").length - 1 && (
                <br />
              )}
            </span>
          ))}
        </>
      ),
      illustration: "/hair-transplant/hairline/illustration-1.svg",
      illustrationSize: {
        width: 537,
        height: 366,
      },
      illustrationMobile:
        "/hair-transplant/hairline/mobile/illustration-1-mobile.svg",
      illustrationMobileSize: {
        height: 290,
      },
      imagesMobile: {
        main: "/hair-transplant/hairline/mobile/hairline-2.jpg",
        secondary: "/hair-transplant/hairline/mobile/hairline-1.jpg",
      },
      imagesMobileSize: {
        mainHeight: 305,
        mainMaxWidth: false,
        secondaryMaxWidth: true,
      },
      images: {
        main: "/hair-transplant/hairline/hairline-2.png",
        secondary: "/hair-transplant/hairline/hairline-1.png",
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
        height: 770, // section1Right 컨테이너 높이 700 vw 단위
      },
    },
    section2: {
      number: 2,
      title: (
        <>
          {t.section2.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section2.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      titleMobile: (
        <>
          {t.section2.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section2.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      titleMarginBottom: 120,
      quote: t.section2.quote,
      quoteMobile: (t.section2 as any).quoteMobile || t.section2.quote,
      conclusion: t.section2.conclusion,
      description: (
        <>
          {t.section2.description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section2.description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      descriptionMobile: (
        <>
          {t.section2.descriptionMobile.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section2.descriptionMobile.split("\n").length - 1 && (
                <br />
              )}
            </span>
          ))}
        </>
      ),
      images: {
        main: "/hair-transplant/hairline/hairline-3.png",
      },
      imagesMobile: {
        main: "/hair-transplant/hairline/mobile/hairline-3.jpg",
      },
      imagesMobileSize: {
        mainHeight: 305,
      },
      illustrationMobile:
        "/hair-transplant/hairline/mobile/illustration-2-mobile.svg",
      illustrationMobileSize: {
        width: 375,
        height: 336,
        fullWidth: false,
      },
      illustrationMobileMargin: {
        top: 40,
      },
    },
    section3: {
      number: 3,
      numberPosition: {
        mobile: {
          top: -40, // 모바일에서 위에서 40px
        },
        desktop: {
          top: -40, // 데스크탑에서 위에서 40px
          left: 540, // 데스크탑에서 왼쪽에서 540px
        },
      },
      title: (
        <>
          {t.section3.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section3.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      titleMobile: (
        <>
          {t.section3.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section3.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      description: (
        <>
          {t.section3.description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section3.description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
      descriptionMobile: (
        <>
          {t.section3.descriptionMobile.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < t.section3.descriptionMobile.split("\n").length - 1 && (
                <br />
              )}
            </span>
          ))}
        </>
      ),
      illustration: "/hair-transplant/hairline/illustration-2.svg",
      illustrationSize: {
        width: 449,
        height: 286,
      },
      illustrationPosition: {
        // Absolute positioning for section 3 desktop
        top: 380, // Position from top
        left: 405, // Position from left
      },
      images: {
        main: "/hair-transplant/hairline/hairline-4.png",
      },
    },
    beforeAfterData: {
      category: t.beforeAfter.category,
      title: t.beforeAfter.title,
      beforeImage: "/hair-transplant/hairline/slide/before.jpg",
      afterImage: "/hair-transplant/hairline/slide/after.jpg",
      beforeAlt: t.beforeAfter.beforeAlt,
      afterAlt: t.beforeAfter.afterAlt,
    },
    beforeAfterButton: {
      text: t.beforeAfter.buttonText,
      href: "/before-after",
      width: 269,
    },
    featuresTitle: (
      <>
        {t.features.title.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < t.features.title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </>
    ),
    featuresTitleMobile: (
      <>
        {t.features.titleMobile.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < t.features.titleMobile.split("\n").length - 1 && <br />}
          </span>
        ))}
      </>
    ),
    featureCards: t.features.cards.map((card, index) => ({
      icon: `/hair-transplant/feature-${index + 1}.svg`,
      title: (
        <>
          {card.title.split("\n").map((line, lineIndex) => (
            <span key={lineIndex}>
              {line}
              {lineIndex < card.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
    })),
  };

  return (
    <HairTransplantLayout
      {...layoutData}
      language={language}
      isHairline={true}
      isCrown={true}
    />
  );
}

export default function HairlinePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HairlineContent />
    </Suspense>
  );
}
