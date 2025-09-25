"use client";

import HairTransplantLayout from "@/shared/components/HairTransplant/HairTransplantLayout";

export default function ForeheadHairTransplantPage() {
  const layoutData = {
    heroTitle: (
      <>
        이마축소와
        <br />
        모발이식
      </>
    ),
    heroTitleMobile: (
      <>
        이마축소와
        <br />
        모발이식
      </>
    ),

    heroDotPosition: {
      absolute: true,
      // 데스크탑 위치
      left: 235,
      bottom: 12,
      // 모바일 위치 (다른 값 설정 가능)
      mobileLeft: 157,
      mobileBottom: 8,
    },
    heroIllustration: "/forehead/hero-illustration.svg",
    heroIllustrationSize: {
      width: 1760,
      height: 660,
    },
    heroIllustrationPosition: {
      left: 0, // Stick to the far left
    },

    heroDotAbsolute: true, // Use absolute positioned dot for this page
    section1: {
      number: 1,
      title: (
        <>
          새로운 헤어라인은
          <br />
          이마축소술과 모발이식의
          <br />
          순서와 방법을 정하고
          <br />
          디자인합니다.
        </>
      ),
      titleMarginBottom: 120, // 120px (데스크탑에서는 vw로 변환)
      titleMobile: (
        <>
          새로운 헤어라인은
          <br />
          이마축소술과 모발이식의
          <br />
          순서와 방법을 정하고
          <br />
          디자인합니다.
        </>
      ),
      description: (
        <>
          이마축소술과 모발이식, 어느 한쪽을 포기할 필요가 없습니다.
          <br />
          이마의 높이와 넓이에 따라서 더 알맞은 방법이 있습니다.
          <br />
          <br />
          풀과 테이프에 비유할 수 있겠습니다.
          <br />
          붙인다는 행위는 같지만, 풀로 붙이는 게 더 좋을 때가 있고,
          <br />
          테이프를 써야만 붙일 수 있는 경우가 있는 것처럼요.
          <br />
          <br />
          상황에 따라 필요한 방법이 다를 뿐입니다.
        </>
      ),
      descriptionWidth: 530, // section1Description 너비 600 vw 단위
      descriptionMobile: (
        <>
          이마축소술과 모발이식, 어느 한쪽을
          <br />
          포기할 필요가 없습니다.
          <br />
          이마의 높이와 넓이에 따라서
          <br />
          더 알맞은 방법이 있습니다.
          <br />
          <br />
          풀과 테이프에 비유할 수 있겠습니다.
          <br />
          붙인다는 행위는 같지만, 풀로 붙이는 게
          <br />
          더 좋을 때가 있고, 테이프를 써야만
          <br />
          붙일 수 있는 경우가 있는 것처럼요.
          <br />
          <br />
          상황에 따라 필요한 방법이 다를 뿐입니다.
        </>
      ),
      images: {
        main: "/forehead/hair-transplant/hair-transplant-2.png",
        secondary: "/forehead/hair-transplant/hair-transplant-1.png",
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
          top: 50,
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
          이마가 아주 높을 때는
          <br />
          이마축소술을
          <br />
          먼저 해야 합니다.
        </>
      ),
      titleMarginBottom: 120, // 120px (데스크탑에서는 vw로 변환)
      titleMobile: (
        <>
          이마가 아주 높을 때는
          <br />
          이마축소술을
          <br />
          먼저 해야 합니다.
        </>
      ),
      description: (
        <>
          여성들의 가르마는 정면에서 봤을 때
          <br />
          눈에 잘 띄는 곳에 있습니다.
          <br />
          <br />
          가르마에서는 머리카락들이 겹치지 않고
          <br />
          갈라져서 같은 밀도라도 두피가 잘 비쳐 보입니다.
          <br />
          <br />
          모발이식으로 높이를 많이 내리면
          <br />
          가르마 부위의 밀도가 떨어져 보이고
          <br />
          두피가 비쳐 보일 가능성이 높습니다.
          <br />
          <br /> 몇 번을 보강해도 여전히 비어 보이는 경우도 있습니다.
          <br />
          <br />
          이럴 때는 이마축소로 먼저 높이를
          <br />
          줄여주는 게 좋습니다.
        </>
      ),
      descriptionMobile: (
        <>
          여성들의 가르마는 정면에서 봤을 때
          <br />
          눈에 잘 띄는 곳에 있습니다.
          <br />
          가르마에서는 머리카락들이 겹치지 않고
          <br />
          갈라져서 같은 밀도라도 두피가 잘 비쳐 보입니다.
          <br />
          <br />
          모발이식으로 높이를 많이 내리면
          <br />
          가르마 부위의 밀도가 떨어져 보이고
          <br />
          두피가 비쳐 보일 가능성이 높습니다.
          <br />
          몇 번을 보강해도 여전히 비어 보이는 경우도 있습니다.
          <br />
          <br />
          이럴 때는 이마축소로 먼저 높이를
          <br />
          줄여주는 게 좋습니다.
        </>
      ),
      images: {
        main: "/forehead/hair-transplant/hair-transplant-3.png",
      },
    },
    section3: {
      number: 3,
      title: (
        <>
          이마축소술을 권하지
          <br />
          않을 때도 많습니다.
        </>
      ),
      titleMobile: (
        <>
          이마축소술을 권하지
          <br />
          않을 때도 많습니다.
        </>
      ),
      description: (
        <>
          이마의 높이가 아니라 M자가 깊거나
          <br />
          측면이 넓으면 모발이식이 더 좋습니다.
          <br />
          <br />
          두피의 탄력이 부족하거나,
          <br />
          정수리의 밀도가 낮거나,
          <br />
          두피가 얇거나,
          <br /> 피부색이 짙으면
          <br /> 이마축소술을 권하지 않습니다.
        </>
      ),
      descriptionMobile: (
        <>
          이마의 높이가 아니라 M자가 깊거나
          <br />
          측면이 넓으면 모발이식이 더 좋습니다.
          <br />
          <br />
          두피의 탄력이 부족하거나,
          <br />
          정수리의 밀도가 낮거나,
          <br />
          두피가 얇거나, 피부색이 짙으면
          <br />
          이마축소술을 권하지 않습니다.
        </>
      ),
      images: {
        main: "/forehead/hair-transplant/hair-transplant-4.png",
      },
    },
    beforeAfterData: {
      category: "이마축소",
      title: "전후사진 보기",
      beforeImage: "/forehead/hair-transplant/slide/before.jpg",
      afterImage: "/forehead/hair-transplant/slide/after.jpg",
      beforeAlt: "이마축소 이식 전",
      afterAlt: "이마축소 이식 후",
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
