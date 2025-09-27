"use client";

import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";

export default function HairlinePage() {
  const layoutData = {
    heroTitle: (
      <>
        헤어라인
        <br />
        교정
      </>
    ),
    heroDotPosition: {
      absolute: true,
      // 데스크탑 위치
      left: 120,
      bottom: 12,
      // 모바일 위치 (다른 값 설정 가능)
      mobileLeft: 80,
      mobileBottom: 8,
    },
    section1: {
      number: 1,
      title: (
        <>
          얼굴 윤곽의 완성은
          <br />
          헤어라인입니다.
        </>
      ),
      titleMobile: (
        <>
          얼굴 윤곽의 완성은
          <br />
          헤어라인입니다.
        </>
      ),
      description: (
        <>
          헤어라인을 결정할 때는
          <br />
          모발이식과 이마축소 두 방법 중
          <br />
          <br />
          이마의 모양과 비율에 가장 알맞은 방법으로 얼굴의 마지막 윤곽을
          완성합니다.
        </>
      ),
      descriptionMobile: (
        <>
          헤어라인을 결정할 때는
          <br />
          모발이식과 이마축소 두 방법 중
          <br />
          <br />
          이마의 모양과 비율에 가장 알맞은 방법으로 얼굴의 마지막 윤곽을
          완성합니다.
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
          top: 60,
        },
        secondary: {
          bottom: 0,
          left: 0,
        },
      },
      section1RightSize: {
        width: 1085, // section1Right 컨테이너 너비 800 vw 단위
        height: 810, // section1Right 컨테이너 높이 700 vw 단위
      },
    },
    section2: {
      number: 2,
      title: (
        <>
          빼곡하고
          <br />
          자연스럽게.
        </>
      ),
      titleMobile: (
        <>
          빼곡하고
          <br />
          자연스럽게.
        </>
      ),
      description: (
        <>
          자연스러움 을 만드는 일은 어렵습니다.
          <br />
          어색하지 않아야 하며 결과는 1년을 기다려야 합니다.
          <b>
            "헤어라인 교정만 10년을 하면서
            <br />
            자연스럽게 만드는 최적의 접점을 찾았습니다."
          </b>
          <br />
          <br />
          이제 빼곡하면서 자연스러운 헤어라인도 불가능하지 않습니다.
        </>
      ),
      descriptionMobile: (
        <>
          자연스러움 을 만드는 일은 어렵습니다.
          <br />
          어색하지 않아야 하며 결과는 1년을 기다려야 합니다.
          <b>
            "헤어라인 교정만 10년을 하면서
            <br />
            자연스럽게 만드는 최적의 접점을 찾았습니다."
          </b>
          <br />
          <br />
          이제 빼곡하면서 자연스러운 헤어라인도
          <br />
          불가능하지 않습니다.
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
        top: -40, // 위에서 50px (데스크탑: vw로 변환, 모바일: mvw로 변환)
        left: 540, // 왼쪽에서 100px
        // right, bottom도 설정 가능
      },
      title: (
        <>
          결국,
          <br />
          고객이 원하는 디자인이
          <br />
          좋은 디자인입니다.
        </>
      ),
      titleMobile: (
        <>
          결국,
          <br />
          고객이 원하는 디자인이
          <br />
          좋은 디자인입니다.
        </>
      ),
      description: (
        <>
          의사만 만족하는 디자인은
          <br />
          결국 두 번 수술을 하게 됩니다.
          <br />
          <br />
          고객이 불편해 하는 부분을
          <br />
          진심으로 공감하고 고민하며
          <br />
          <br />
          바날의 헤어라인 디자인은 발전합니다.
        </>
      ),
      descriptionMobile: (
        <>
          의사만 만족하는 디자인은
          <br />
          결국 두 번 수술을 하게 됩니다.
          <br />
          <br />
          고객이 불편해 하는 부분을
          <br />
          진심으로 공감하고 고민하며
          <br />
          <br />
          바날의 헤어라인 디자인은 발전합니다.
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
      category: "헤어라인",
      title: "3400모(여)_1년경과",
      beforeImage: "/hair-transplant/hairline/slide/before.jpg",
      afterImage: "/hair-transplant/hairline/slide/after.jpg",
      beforeAlt: "헤어라인 수술 전",
      afterAlt: "헤어라인 수술 후",
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
        독보적인 기술력과
        <br />
        사후 관리까지
        <br />
        <br />
        바날은 고객에
        <br />
        진심을 다합니다.
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

  return <HairTransplantLayout {...layoutData} />;
}
