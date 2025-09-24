"use client";

import { Suspense } from "react";
import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";

function CrownContent() {
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
          심하지 않다면
          <br />
          약물치료부터 어떨까요?
        </>
      ),
      titleMobile: (
        <>
          심하지 않다면
          <br />
          약물치료부터 어떨까요?
        </>
      ),
      description: (
        <>
          심하지 않은 탈모는 약물치료만으로
          <br />
          충분한 효과를 볼 수 있습니다.
          <br />
          <br />
          정수리 탈모는 계속 진행하기 때문에
          <br />
          수술을 하든 안 하든 약물치료는 반드시 필요하며
          <br />더 건강해진 모발 상태로 수술 받을 수 있습니다.
        </>
      ),
      descriptionMobile: (
        <>
          심하지 않은 탈모는 약물치료만으로
          <br />
          충분한 효과를 볼 수 있습니다.
          <br />
          <br />
          정수리 탈모는 계속 진행하기 때문에
          <br />
          수술을 하든 안 하든 약물치료는 반드시
          <br /> 필요하며 더 건강해진 모발 상태로 수술 받을 수 있습니다.
        </>
      ),
      svgElements: {
        container: "/hair-transplant/crown/illustration-2.svg",
        absolute: "/hair-transplant/crown/illustration-3.svg",
      },
      // 각 SVG 요소의 크기 설정
      svgElementsSize: {
        container: {
          width: 285, // vw 단위로 변환됨
          height: 135, // vw 단위로 변환됨
        },
        absolute: {
          width: 279, // vw 단위로 변환됨
          height: 258, // vw 단위로 변환됨
        },
      },
      // absolute SVG의 위치 설정
      svgElementsPosition: {
        absolute: {
          top: 0, // 상단에서 50vw
          right: -50, // 오른쪽에서 100vw
          // bottom과 left도 선택적으로 설정 가능
        },
      },
      mobileImages: {
        illustration: [
          "/hair-transplant/crown/illustration-2.svg",
          "/hair-transplant/crown/illustration-3.svg",
        ],
        illustrationSize: {
          width: 375,
          height: 336,
        },
      },
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
      illustrationMobile: "/hair-transplant/crown/illustration-4.svg",
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

export default function CrownPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CrownContent />
    </Suspense>
  );
}
