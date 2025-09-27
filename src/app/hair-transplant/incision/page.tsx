"use client";

import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";

export default function IncisionPage() {
  const layoutData = {
    heroTitle: <>절개와 비절개</>,
    heroTitleMobile: (
      <>
        절개와
        <br />
        비절개
      </>
    ),
    section1: {
      number: 1,
      title: (
        <>
          한 가지만 고집해서
          <br />
          훌륭한 선택지 하나를
          <br />
          포기할 필요는 없습니다.
        </>
      ),
      titleMobile: (
        <>
          한 가지만 고집해서
          <br />
          훌륭한 선택지 하나를
          <br />
          포기할 필요는 없습니다.
        </>
      ),
      titleMobileSize: {
        height: 106,
      },
      description: (
        <>
          절개와 비절개
          <br />
          어느 한쪽이 더 우수한 방법이 아닙니다.
          <br />
          <br />
          상황에 따라 더 효율적인 방법을
          <br />
          제시할 수 있어야 합니다.
          <br />
          훌륭한 방법 한 가지를 포기할 필요는 없습니다.
        </>
      ),
      descriptionMobile: (
        <>
          절개와 비절개,
          <br />
          어느 한쪽이 더 우수한 방법이 아닙니다.
          <br />
          <br />
          상황에 따라 더 효율적인 방법을
          <br />
          제시할 수 있어야 합니다. 훌륭한
          <br />
          방법 한 가지를 포기할 필요는 없습니다.
        </>
      ),
      illustration: "/hair-transplant/incision/illustration-1.svg",

      illustrationSize: {
        width: 459,
        height: 190,
      },
      illustrationMobile:
        "/hair-transplant/incision/mobile/illustration-1-mobile.svg",
      illustrationMobileSize: {
        width: 324,
        height: 252,
      },
      images: {
        main: "/hair-transplant/incision/incision-1.png",
        secondary: "/hair-transplant/incision/incision-2.png",
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
        height: 800, // section1Right 컨테이너 높이 700 vw 단위
      },
    },
    section2: {
      number: 2,
      title: (
        <>
          두피의 탄력이 부족하면
          <br />
          비절개를 권합니다.
        </>
      ),
      titleMobile: (
        <>
          두피의 탄력이 부족하면
          <br />
          비절개를 권합니다.
        </>
      ),
      titleMobileSize: {
        width: 204,
        height: 76,
      },
      description: (
        <>
          ① 두피의 탄력이 부족할 때
          <br />
          ② 이미 여러 번의 절개 수술을 받았을 때
          <br />
          ③ 절개에 대한 두려움이 클 때
          <br />
          ④ 통증에 민감할 때
          <br />
          <br />
          비절개를 권합니다.
        </>
      ),
      descriptionMobile: (
        <>
          ① 두피의 탄력이 부족할 때
          <br />
          ② 이미 여러 번의 절개 수술을 받았을 때
          <br />
          ③ 절개에 대한 두려움이 클 때
          <br />
          ④ 통증에 민감할 때
          <br />
          <br />
          비절개를 권합니다.
        </>
      ),
      images: {
        main: "/hair-transplant/incision/incision-3.png",
      },
      illustration: "/hair-transplant/incision/illustration-2.svg",
      illustrationSize: {
        width: 566,
        height: 326,
      },
      illustrationPosition: {
        // Optional: absolute positioning for desktop
        bottom: -370, // Position at the bottom
        right: -190, // Position at the right
      },
      illustrationMobile:
        "/hair-transplant/incision/mobile/illustration-2-mobile.svg",
      illustrationMobileSize: {
        width: 375,
        height: 336,
      },
    },
    section3: {
      number: 3,
      title: (
        <>
          뒷머리의 숱이 적으면
          <br />
          절개를 권합니다.
        </>
      ),
      titleMobile: (
        <>
          뒷머리의 숱이 적으면
          <br />
          절개를 권합니다.
        </>
      ),
      description: (
        <>
          ① 뒷머리가 납작하거나 볼륨감이 필요할 때
          <br />
          ② 이미 여러 번의 절개 수술을 받았을 때
          <br />
          ③ 오래 엎드려 있기 어려울 때
          <br />
          ④ 비용에 부담이 있을 때
          <br />
          <br />
          절개를 더 권합니다.
        </>
      ),
      descriptionMobile: (
        <>
          ① 뒷머리가 납작하거나 볼륨감이 필요할 때
          <br />
          ② 이미 여러 번의 절개 수술을 받았을 때
          <br />
          ③ 오래 엎드려 있기 어려울 때
          <br />
          ④ 비용에 부담이 있을 때
          <br />
          <br />
          절개를 더 권합니다.
        </>
      ),
      illustration: "/hair-transplant/incision/illustration-3.svg",
      illustrationSize: {
        width: 745,
        height: 331,
      },
      illustrationPosition: {
        // Absolute positioning for section 3 desktop
        top: 500, // Position from top
        left: -170, // Position from left
      },
      illustrationMobile:
        "/hair-transplant/incision/mobile/illustration-3-mobile.svg",
      illustrationMobileSize: {
        width: 375,
        height: 336,
      },
      images: {
        main: "/hair-transplant/incision/incision-4.png",
      },
      imagesSize: {
        main: {
          width: 610,
          height: 550,
        },
      },
    },
    beforeAfterData: {
      category: "헤어라인",
      title: "3200모(여)_1년경과",
      beforeImage: "/hair-transplant/incision/slide/before.jpg",
      afterImage: "/hair-transplant/incision/slide/after.jpg",
      beforeAlt: "헤어라인 수술 전",
      afterAlt: "헤어라인 수술 후",
    },
    beforeAfterButton: {
      text: "수술전후 더보기",
      href: "/before-after",
      width: 269, // 데스크탑에서 버튼 너비 설정 (기본값: 224)
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
            모발이식과 이마축소가 동시에
            <br />
            가능한 유일한 병원입니다.
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
