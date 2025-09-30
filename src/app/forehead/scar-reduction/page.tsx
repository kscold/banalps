"use client";

import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";
import ProcessSection from "./ProcessSection";
import { useScarReductionTranslations } from "@/hooks/useAllPagesTranslations";

export default function ScarReductionPage() {
  const t = useScarReductionTranslations();
  const layoutData = {
    heroTitle: (
      <>
        {t.hero.titleLine1}
        <br />
        {t.hero.titleLine2}
      </>
    ),
    heroTitleMobile: (
      <>
        {t.hero.titleLine1}
        <br />
        {t.hero.titleLine2}
      </>
    ),
    heroIllustration: "/forehead/hero-illustration.svg",
    heroIllustrationMobile: "/forehead/mobile/hero-illustration.svg",
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
      titleMarginBottom: 120, // 120px (데스크탑에서는 vw로 변환)
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
      images: {
        main: "/forehead/scar-reduction/scar-reduction-1.jpg",
      },
      imagesSize: {
        main: {
          width: 950,
          height: 660,
        },
      },
      imagesPosition: {
        main: {
          top: 0,
        },
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
      descriptionMarginBottom: 0, // Remove margin bottom on mobile
      sectionPaddingBottom: 0, // Remove padding bottom on mobile
      images: {
        main: "/forehead/scar-reduction/scar-reduction-8.png",
      },
      imagesSize: {
        main: {
          width: 950,
          height: 660,
        },
      },
    },

    beforeAfterData: {
      category: t.beforeAfter.category,
      title: t.beforeAfter.title,
      beforeImage: "/forehead/scar-reduction/slide/before.jpg",
      afterImage: "/forehead/scar-reduction/slide/after.jpg",
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
          {card.title.split("\n").map((line, cardIndex) => (
            <span key={cardIndex}>
              {line}
              {cardIndex < card.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      ),
    })),
  };

  return (
    <HairTransplantLayout
      {...layoutData}
      scarReduction={true}
      customMiddleSection={<ProcessSection />}
    />
  );
}
