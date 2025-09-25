"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import * as styles from "./ProcessSection.css";

const processSteps = [
  {
    number: "1",
    category: "진단",
    title: (
      <>
        두피의 특성을 정확히 파악해야
        <br />몇 cm를 내일지 예상할 수 있어요.
      </>
    ),
    description: (
      <>
        두피의 탄력을 제대로 파악하지 못하면
        <br />
        예상한 만큼 이마를 줄이지 못하거나 무리해서 당기면 흉터가 넓어지고,
        <br />
        전두부 모발이 빠지는 동반탈락 현상이 생깁니다.
        <br />
        <br />
        성공적인 이마축소를 위해선 두피의 특성을 파악하는 것이 중요합니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-2.png",
  },
  {
    number: "2",
    category: "디자인",
    title: (
      <>
        단순히 이마를 줄이는 것보다
        <br />
        최종적인 헤어라인을 생각해야 합니
        <br />
        다.
      </>
    ),
    description: (
      <>
        이마축소술 후 모발이식이 필요할지,
        <br />
        잔머리는 얼마나 살릴지, 기존 모발 사이에 흉터는 어떻게 숨길지,
        <br />
        <br />
        모발의 방향과 두께도 고려해서, 절개선을 디자인합니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-3.png",
  },
  {
    number: "3",
    category: "절개",
    title: (
      <>
        흉터는 남습니다.
        <br />
        얼마나 잘 숨기는지가 중요하죠.
      </>
    ),
    description: (
      <>
        가느다란 실선으로 남은 흉터는
        <br />
        기존의 모발과 잔머리를 이용하면 더 잘 숨길 수 있습니다.
        <br />
        <br />
        기본 모발과 잔머지를 고려한 절개선의 위치 선정이 중요합니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-4.png",
  },
  {
    number: "4",
    category: "건막절개",
    title: (
      <>
        건막절개술은
        <br />
        이마축소의 핵심입니다.
      </>
    ),
    description: (
      <>
        건막절개술은 단단한 건막에 일정한 간격으로
        <br />
        절개선을 넣어 두피가 충분히 늘어나도록 해주는 과정입니다.
        <br />
        <br />
        건막절개 없는 단순한 이마축소 보다
        <br />
        이마 높이를 1cm 이상 더 줄일 수 있습니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-5.png",
  },
  {
    number: "5",
    category: "고정",
    title: (
      <>
        엔도타인은 가격 말고 단점이
        <br />
        없는 것 같아요.
      </>
    ),
    description: (
      <>
        당겨진 두피가 다시 올라가지 않도록
        <br />
        뼈에 단단히 고정해야 합니다.
        <br />
        <br />
        엔도타인이 두피를 최대한 당겨서 걸어줄 수 있고,
        <br />
        고정력도 더 뛰어나다고 생각해서 엔도타인 방식을 고집합니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-6.png",
  },
  {
    number: "6",
    category: "봉합",
    title: (
      <>
        피부봉합은
        <br />
        그냥 거들 뿐
      </>
    ),
    description: (
      <>
        피하 봉합이 끝나면, 아직 피부 봉합은 하지도 않았는데
        <br />
        절개선의 피부면이 이미 딱 붙어있습니다.
        <br />
        <br />
        피부에는 장력이 전혀 걸리지 않는 거죠.
        <br />
        이제 피부의 가장자리를 매끈하게 맞춰 주기만 합니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-7.png",
  },
];

// 별도의 컴포넌트로 분리하여 Hook 규칙 준수
function ProcessStep({ step }: { step: (typeof processSteps)[0] }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={styles.processStepOdd}
    >
      <div className={styles.stepNumber}>
        {/* 데스크탑용 헤더 */}
        <div className={styles.stepHeader}>
          <div className={styles.stepNumberText}>{step.number}</div>
        </div>
        {/* 모바일용 헤더 */}
        <div className={styles.stepHeaderMobile}>
          <div className={styles.stepNumberText}>{step.number}</div>
          <div className={styles.stepCategory}>{step.category}</div>
        </div>
        <motion.img
          src={step.image}
          alt={`${step.category} 단계`}
          className={styles.stepImage}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <div className={styles.stepContent}>
        <div className={styles.stepContentDesktop}>
          <div className={styles.stepCategory}>{step.category}</div>
        </div>

        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDescription}>{step.description}</p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className={styles.scarProcessSection}>
      <div className={styles.scarProcessContent}>
        {processSteps.map((step) => (
          <ProcessStep key={step.number} step={step} />
        ))}
      </div>
    </section>
  );
}
