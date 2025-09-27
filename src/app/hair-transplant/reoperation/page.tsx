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
      titleMarginBottom: 120,
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
        main: "/hair-transplant/reoperation/mobile/reoperation-2.jpg",
        secondary: "/hair-transplant/reoperation/mobile/reoperation-1.jpg",
      },
      imagesMobileSize: {
        mainMaxWidth: false, // main 이미지는 100vw
        secondaryMaxWidth: true, // secondary 이미지도 100vw
        mainHeight: 305,
        secondaryHeight: 382,
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
      descriptionMobile: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "2rem" }}>
            흉터에는 혈관이 부족해서 생착률이
            <br />
            떨어지기 때문에 밀도를 많이 낮춰서 심는게
            <br />
            좋습니다.
          </div>
          <div>
            오랜 경험과 시간으로 밀도있는 모발을
            <br />
            만들어드릴 수 있게 되었으니
            <br />
            이제 안심하셔도 됩니다.
          </div>
        </div>
      ),
      svgElements: {
        container: "/hair-transplant/reoperation/illustration-1.svg",
        absolute: "/hair-transplant/reoperation/illustration-2.svg",
      },
      // 각 SVG 요소의 크기 설정
      svgElementsSize: {
        container: {
          width: 418, // vw 단위로 변환됨
          height: 188, // vw 단위로 변환됨
        },
        absolute: {
          width: 232, // vw 단위로 변환됨
          height: 259, // vw 단위로 변환됨
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
        illustration: ["/hair-transplant/reoperation/mobile-3.svg"],
      },
      images: {
        main: "/hair-transplant/reoperation/mobile-2.png",
      },
      imagesMobile: {
        main: "/hair-transplant/reoperation/mobile/reoperation-3.jpg",
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
      descriptionMobile: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "2rem" }}>
            재수술과 흉터 이식은 매일 할 수 있는
            <br />
            수술이 아닙니다
            <br />
            그만큼 경험이 쌓이는 데 오래 걸리죠.
          </div>
          <div style={{ marginBottom: "2rem" }}>
            지금의 모습보다 반드시 나아질 수 있다는
            <br />
            자신감으로 재수술과 흉터 수술을
            <br />
            해왔습니다.
          </div>
          <div style={{ marginBottom: "2rem" }}>
            가리고 싶은 모습 때문에 오랜 시간
            <br />
            힘들어했던 분들이 좋아해 주시는 모습을
            <br />
            보면 밥을 안 먹어도 배부릅니다.
          </div>
          <div>
            더 활짝 웃으시는 모습을 위해 자만하지 않고
            <br />
            항상 노력하겠습니다.
          </div>
        </div>
      ),
      images: {
        main: "/hair-transplant/reoperation/reoperation-4.png",
      },
    },
    beforeAfterData: {
      category: "재수술",
      beforeImage: "/hair-transplant/reoperation/slide/before.jpg",
      afterImage: "/hair-transplant/reoperation/slide/after.jpg",
      beforeAlt: "재수술 전",
      afterAlt: "재수술 후",
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
