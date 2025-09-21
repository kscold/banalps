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
        두피의 탄력을 진단합니다.
        <br />
        머리카락이 아니라
        <br />
        두피가 무리없이 움직여야 합니다.
      </>
    ),
    description: (
      <>
        두피의 탄력을 제대로 파악하지 못하면 예상한 만큼 이마를 줄이지 못하거나
        무리해서 당기면 흉터가 넓어지고, 전두부 모발이 빠지는 동반탈락 현상이 생깁니다.
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
        이마 축소는 맨 앞 모발라인에
        <br />
        따라 절개합니다.
        <br />
        이마의 모양이 반듯해지도록
        <br />
        중앙부를 더 낮춥니다.
      </>
    ),
    description: (
      <>
        이마축소술 후 모발이식이 필요할지, 잔머리는 얼마나 살릴지, 기존
        모발 사이에 흉터는 어떻게 숨길지, 모발의 방향과 두께도 고려해서,
        절개선을 디자인합니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-3.png",
  },
  {
    number: "3",
    category: "절개",
    title: (
      <>
        모발라인 앞 머리를 절개합니다.
        <br />
        절개 시 모낭 손상이 없도록
        <br />
        모낭 뒤쪽 각도와 평행하게 절개합니다.
      </>
    ),
    description: (
      <>
        모낭을 다치지 않게 절개하는 것이 중요합니다.
        모낭이 손상되면 절개선 주변의 모발이 빠질 수 있습니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-4.png",
  },
  {
    number: "4",
    category: "건막절개",
    title: (
      <>
        헤어라인 부위와 5cm 후방 위치에서
        <br />
        건막을 절개합니다. 두피 내 장력을
        <br />
        없애고 두피가 자유로워집니다.
      </>
    ),
    description: (
      <>
        건막을 절개하면 두피의 움직임이 자유로워집니다.
        이렇게 하면 봉합 시 장력이 줄어들어 흉터가 작아집니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-5.png",
  },
  {
    number: "5",
    category: "고정",
    title: (
      <>
        당겨진 두피가
        <br />
        뒤로 돌아가지 않도록
        <br />
        중요한 몇 군데를 잡아줍니다.
      </>
    ),
    description: (
      <>
        두피를 고정하는 것은 매우 중요합니다.
        고정이 제대로 되지 않으면 시간이 지나면서 두피가 다시 올라갈 수 있습니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-6.png",
  },
  {
    number: "6",
    category: "봉합",
    title: (
      <>
        하부층을 흡수사로 봉합합니다.
        <br />
        장력이 피부에 전달되지 않기 때문에
        <br />
        피부층의 봉합 시 장력이 걸리지 않습니다.
      </>
    ),
    description: (
      <>
        겹겹이 봉합하여 피부에 걸리는 장력을 없애줍니다.
        이렇게 하면 대부분의 흉터는 가느다란 실선으로 남습니다.
      </>
    ),
    image: "/forehead/scar-reduction/scar-reduction-7.png",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.scarProcessSection}>
      <div className={styles.scarProcessContent}>
        {processSteps.map((step) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });

          return (
            <motion.div
              key={step.number}
              ref={ref}
              className={styles.processStepOdd}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.stepNumber}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumberText}>{step.number}</div>
                  <div className={styles.stepCategory}>{step.category}</div>
                </div>
                <img
                  src={step.image}
                  alt={`${step.category} 단계`}
                  className={styles.stepImage}
                />
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}