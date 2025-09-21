"use client";

import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";
import ProcessSection from "./ProcessSection";

export default function ScarReductionPage() {
  const layoutData = {
    heroTitle: (
      <>
        이마축소
        <br />
        흉터 줄이는 법
      </>
    ),
    heroTitleMobile: (
      <>
        이마축소
        <br />
        흉터 줄이는 법
      </>
    ),
    section1: {
      number: 1,
      title: (
        <>
          흉터를 줄이려면
          <br />
          장력을 줄여야 합니다.
        </>
      ),
      titleMobile: (
        <>
          흉터를 줄이려면
          <br />
          장력을 줄여야 합니다.
        </>
      ),
      description: (
        <>
          이마축소 후 흉터선이 넓어지는 가장 큰 이유는
          <br />
          절개 부위에 걸리는 장력이 크기 때문입니다.
          <br />
          <br />
          즉, 두피가 다시 뒤로 돌아가려는 힘이 클수록
          <br />
          흉터가 넓어질 가능성이 커집니다.
          <br />
          <br />
          장력을 줄이기 위해서진단에서부터 봉합까지
          <br />
          신경써야 할 것이 많습니다.
        </>
      ),
      descriptionMobile: (
        <>
          이마축소 후 흉터선이 넓어지는
          <br />
          가장 큰 이유는 절개 부위에 걸리는
          <br />
          장력이 크기 때문입니다.
          <br />
          <br />
          즉, 두피가 다시 뒤로 돌아가려는 힘이 클수록
          <br />
          흉터가 넓어질 가능성이 커집니다.
          <br />
          <br />
          장력을 줄이기 위해서
          <br />
          진단에서부터 봉합까지
          <br />
          신경써야 할 것이 많습니다.
        </>
      ),
      images: {
        main: "/forehead/scar-reduction/scar-reduction-1.png",
      },
      imagesSize: {
        main: {
          width: 950,
          height: 660,
        },
      },
    },
    section2: {
      number: 2,
      title: (
        <>
          겉과 속의 흉터 모두
          <br />
          적어야 합니다.
        </>
      ),
      titleMobile: (
        <>
          겉과 속의 흉터 모두
          <br />
          적어야 합니다.
        </>
      ),
      description: (
        <>
          흉터를 최소화하기 위한
          <br />
          체계적인 접근이 필요합니다.
        </>
      ),
      descriptionMobile: (
        <>
          흉터를 최소화하기 위한
          <br />
          체계적인 접근이 필요합니다.
        </>
      ),
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
      category: "흉터이식",
      title: "모발이식 3000모",
      beforeImage: "/forehead/scar-reduction/slide/before.jpg",
      afterImage: "/forehead/scar-reduction/slide/after.jpg",
      beforeAlt: "흉터축소 전",
      afterAlt: "흉터축소 후",
    },
    beforeAfterButton: {
      text: "수술전후 더보기",
      href: "/before-after",
      width: 269,
    },
    featuresTitle: (
      <>
        독보적인 기술력과 사후 관리까지
        <br />
        바날은 고객에 진심을 다합니다.
      </>
    ),
    featuresTitleMobile: (
      <>
        독보적인 기술력과 사후 관리까지
        <br />
        바날은 고객에 진심을 다합니다.
      </>
    ),
    featureCards: [
      {
        icon: "/hair-transplant/feature-1.svg",
        title: (
          <>
            모발이식과 이마축소가 동시에
            <br />
            가능한 유일한 병원입니다.
          </>
        ),
      },
      {
        icon: "/hair-transplant/feature-2.svg",
        title: (
          <>
            고객이 원하는 디자인을
            <br />
            최우선으로 생각합니다.
          </>
        ),
      },
      {
        icon: "/hair-transplant/feature-3.svg",
        title: (
          <>
            모발이식 경력 10년 이상의
            <br />
            전문의들이 진료합니다.
          </>
        ),
      },
      {
        icon: "/hair-transplant/feature-4.svg",
        title: (
          <>
            10년 이상 손발을 맞춰온
            <br />
            수술팀이 함께합니다.
          </>
        ),
      },
    ],
  };

  return (
    <HairTransplantLayout
      {...layoutData}
      scarReduction={true}
      customMiddleSection={<ProcessSection />}
    />
  );
}
