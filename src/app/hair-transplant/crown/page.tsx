"use client";

import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";

export default function CrownPage() {
  const layoutData = {
    heroTitle: (
      <>
        정수리
        <br />
        모발이식
      </>
    ),
    section1: {
      number: 1,
      title: (
        <>
          정수리 탈모는
          <br />
          처음 치료 계획이
          <br />
          중요합니다.
        </>
      ),
      titleMobile: (
        <>
          정수리 탈모는
          <br />
          처음 치료 계획이
          <br />
          중요합니다.
        </>
      ),
      description: (
        <>
          모발이식은 수술로 좋아지는 경우와
          <br />
          약물치료가 더 효과적인 때가 있습니다.
          <br />
          <br />
          잘못된 계획으로 수술 후 후회하시거나
          <br />
          약물치료 시기를 놓쳐 안타까워하시는 분들이 많습니다.
        </>
      ),
      descriptionMobile: (
        <>
          모발이식은 수술로 좋아지는 경우와
          <br />
          약물치료가 더 효과적인 때가 있습니다.
          <br />
          <br />
          잘못된 계획으로
          <br />
          수술 후 후회하시거나
          <br />
          약물치료 시기를 놓쳐
          <br />
          안타까워하시는 분들이 많습니다.
        </>
      ),
      illustration: "/hair-transplant/crown/illustration-1.svg",
      images: {
        main: "/hair-transplant/crown/crown-2.png",
        secondary: "/hair-transplant/crown/crown-1.png",
      },
    },
    section2: {
      number: 2,
      title: (
        <>
          바날 정수리 모발이식의
          <br />
          핵심은 뻗침성에 있습니다.
        </>
      ),
      titleMobile: (
        <>
          바날 정수리 모발이식의
          <br />
          핵심은 뻗침성에 있습니다.
        </>
      ),
      description: (
        <>
          정수리는 '뻗침성이 좋은 모발'을 선택하는 것이
          <br />
          가장 중요하며 정수리와 같은 방향으로
          <br />
          누워서 심는 것이 매우 어렵습니다.
          <br />
          <br />
          헤어라인에 비해 결과가 떨어지는 이유는
          <br />
          심기가 까다롭기 때문입니다.
        </>
      ),
      descriptionMobile: (
        <>
          정수리는 '뻗침성이 좋은 모발'을
          <br />
          선택하는 것이 가장 중요하며
          <br />
          정수리와 같은 방향으로
          <br />
          누워서 심는 것이 매우 어렵습니다.
          <br />
          <br />
          헤어라인에 비해
          <br />
          결과가 떨어지는 이유는
          <br />
          심기가 까다롭기 때문입니다.
        </>
      ),
      svgElements: {
        container: "/hair-transplant/crown/illustration-2.svg",
        absolute: "/hair-transplant/crown/illustration-3.svg",
      },
      mobileIllustration: "/hair-transplant/crown/illustration-3.svg",
      images: {
        main: "/hair-transplant/crown/crown-3.png",
      },
    },
    section3: {
      number: 3,
      title: (
        <>
          최소한의 모낭으로
          <br />
          최대한의 효과를
        </>
      ),
      titleMobile: (
        <>
          최소한의 모낭으로
          <br />
          최대한의 효과를
        </>
      ),
      illustration: "/hair-transplant/crown/illustration-4.svg",
      illustrationSize: {
        width: 275,
        height: 223,
      },
      description: (
        <>
          정수리 탈모가 있으면 뒷머리의 숱도 줄고
          <br />
          빈 곳을 모두 채우기에 모발은 부족합니다.
          <br />
          <br />
          더 중요한 곳을 잘 구분해야
          <br />
          최소한의 모발로 최대한희 효과를 낼 수 있습니다.
        </>
      ),
      descriptionMobile: (
        <>
          정수리 탈모가 있으면
          <br />
          뒷머리의 숱도 줄고
          <br />
          빈 곳을 모두 채우기에
          <br />
          모발은 부족합니다.
          <br />
          <br />
          더 중요한 곳을 잘 구분해야
          <br />
          최소한의 모발로
          <br />
          최대한희 효과를 낼 수 있습니다.
        </>
      ),

      images: {
        main: "/hair-transplant/crown/crown-4.png",
      },
    },
    beforeAfterData: {
      category: "정수리",
      title: "2800모(남)_8개월경과",
      beforeImage: "/hair-transplant/crown/slide/before.jpg",
      afterImage: "/hair-transplant/crown/slide/after.jpg",
      beforeAlt: "정수리 수술 전",
      afterAlt: "정수리 수술 후",
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
