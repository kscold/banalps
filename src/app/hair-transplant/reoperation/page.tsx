"use client";

import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";

export default function ReoperationPage() {
  const layoutData = {
    heroTitle: (
      <>
        재수술과
        <br />
        흉터이식
      </>
    ),
    section1: {
      number: 1,
      title: (
        <>
          재수술, 흉터 수술의
          <br />
          추가 비용을
          <br />
          받지 않습니다.
        </>
      ),
      description: (
        <>
          재수술과 흉터이식은 힘든 수술입니다.
          <br />
          두피는 딱딱하고, 뒷머리는 부족하고,
          <br />
          헤어라인의 모발 방향이 잘못 되어 있기도 합니다.
          <br />
          생착률도 높이기 어렵죠.
          <br />
          <br />
          그럼에도 불구하고
          <br />
          고맙다는 진심어린 말씀의 보람값이라 생각하고
          <br />
          재수술, 흉터 수술의 추가 비용을 더 받지 않습니다
        </>
      ),
      descriptionMobile: (
        <>
          재수술과 흉터이식은 힘든 수술입니다.
          <br />
          두피는 딱딱하고, 뒷머리는 부족하고,
          <br />
          헤어라인의 모발 방향이 잘못 되어 있기도
          <br />
          합니다. 생착률도 높이기 어렵죠.
          <br />
          <br />
          그럼에도 불구하고
          <br />
          고맙다는 진심어린 말씀의 보람값이라
          <br />
          생각하고 재수술, 흉터 수술의
          <br />
          추가 비용을 더 받지 않습니다
        </>
      ),
      images: {
        main: "/hair-transplant/reoperation/reoperation-2.png",
        secondary: "/hair-transplant/reoperation/reoperation-1.png",
      },
      imagesMobile: {
        main: "/hair-transplant/reoperation/reoperation-2.png",
        secondary: "/hair-transplant/reoperation/reoperation-1.png",
      },
      imagesMobileSize: {
        width: 324,
        height: 252,
      },
    },
    section2: {
      number: 2,
      title: (
        <>
          밀도를 낮춰야
          <br />
          생착률은 높아집니다.
        </>
      ),
      description: (
        <>
          흉터에는 혈관이 부족해서 생착률이 떨어지기 때문에
          <br />
          밀도를 많이 낮춰서 심는게 좋습니다.
          <br />
          <br />
          오랜 경험과 시간으로
          <br />
          밀도있는 모발을 만들어 드릴 수 있게 되었으니
          <br />
          이제 안심하셔도 됩니다.
        </>
      ),
      mobileIllustration: "/hair-transplant/reoperation/illustration-1.svg",
      images: {
        main: "/hair-transplant/reoperation/reoperation-3.png",
      },
    },
    section3: {
      number: 3,
      title: (
        <>
          수술 경험을 쌓는 건
          <br />
          오래 걸립니다.
        </>
      ),
      description: (
        <>
          재수술과 흉터 이식은 매일 할 수 있는 수술이 아닙니다.
          <br />
          그만큼 경험이 쌓이는 데 오래 걸리죠.
          <br />
          <br />
          지금의 모습보다 반드시 나아질 수 있다는
          <br />
          자신감으로 재수술과 흉터 수술을 해왔습니다.
          <br />
          <br />
          가리고 싶은 모습 때문에 오랜 시간 힘들어했던 분들이
          <br />
          좋아해 주시는 모습을 보면 밥을 안 먹어도 배부릅니다.
          <br />
          <br />더 활짝 웃으시는모습을 위해 자만하지 않고 항상 노력하겠습니다.
        </>
      ),
      images: {
        main: "/hair-transplant/reoperation/reoperation-4.png",
      },
    },
    beforeAfterData: {
      category: "재수술",
      title: "3100모(남)_10개월경과",
      beforeImage: "/hair-transplant/reoperation/slide/before.jpg",
      afterImage: "/hair-transplant/reoperation/slide/after.jpg",
      beforeAlt: "재수술 전",
      afterAlt: "재수술 후",
    },
    featuresTitle: (
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
