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
          절개와 비절개 어느 한쪽이 더 우수한 방법이 아닙니다.
          <br />
          상황에 따라 더 효율적인 방법을 제시할 수 있어야 합니다.
          <br />
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
        width: 340,
        height: 260,
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
          절개라는 이름 때문에
          <br />
          거부감을 가지시는 경우가 있습니다.
          <br />
          <br />
          정확하고 세심하게 디자인된 최소절개 방법과
          <br />
          뒷머리만 짧게 깎는 비절개 방법을 시행하고 있습니다.
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
          1000모든 5000모든,
          <br />
          숫자가 아닌 머리카락을
          <br />
          대하는 태도가 중요합니다.
        </>
      ),
      titleMobile: (
        <>
          1000모든 5000모든,
          <br />
          숫자가 아닌 머리카락을
          <br />
          대하는 태도가 중요합니다.
        </>
      ),
      description: (
        <>
          고민하는 시간도, 머리카락이
          <br />
          자라는 시간도 길기에
          <br />
          <br />
          상담 때부터 최종 결과가 나올 때까지
          <br />
          고객과 소통하는 마음가짐과
          <br />
          <br />
          세심함이 다른 수술입니다.
        </>
      ),
      descriptionMobile: (
        <>
          고민하는 시간도,
          <br />
          머리카락이 자라는 시간도 길기에
          <br />
          <br />
          상담 때부터
          <br />
          최종 결과가 나올 때까지
          <br />
          고객과 소통하는 마음가짐과
          <br />
          <br />
          세심함이 다른 수술입니다.
        </>
      ),
      illustration: "/hair-transplant/incision/illustration-2.svg",
      illustrationSize: {
        width: 275,
        height: 223,
      },
      images: {
        main: "/hair-transplant/incision/incision-4.png",
      },
    },
    beforeAfterData: {
      category: "절개",
      title: "3200모(남)_1년경과",
      beforeImage: "/hair-transplant/incision/slide/before.jpg",
      afterImage: "/hair-transplant/incision/slide/after.jpg",
      beforeAlt: "절개 수술 전",
      afterAlt: "절개 수술 후",
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
