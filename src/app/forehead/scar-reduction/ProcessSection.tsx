"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import * as styles from "./ProcessSection.css";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { useScarReductionTranslations } from "@/hooks/useAllPagesTranslations";


// 별도의 컴포넌트로 분리하여 Hook 규칙 준수
function ProcessStep({ step, index }: { step: any; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <div ref={ref} className={styles.processStepOdd}>
      <div className={styles.stepNumber}>
        {/* 데스크탑용 헤더 */}
        <div className={styles.stepHeader}>
          <div className={styles.stepNumberText}>{index + 1}</div>
        </div>
        {/* 모바일용 헤더 */}
        <div className={styles.stepHeaderMobile}>
          <div className={styles.stepNumberText}>{index + 1}</div>
          <div className={styles.stepCategory}>{step.category}</div>
        </div>
        <motion.img
          src={`/forehead/scar-reduction/scar-reduction-${index + 2}.png`}
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

        <h3 className={styles.stepTitle}>
          {isMobile && step.titleMobile ? (
            <>
              {step.titleMobile.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < step.titleMobile.split('\n').length - 1 && <br />}
                </span>
              ))}
            </>
          ) : (
            <>
              {step.title.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < step.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </>
          )}
        </h3>
        <p className={styles.stepDescription}>
          {isMobile && step.descriptionMobile ? (
            <>
              {step.descriptionMobile.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < step.descriptionMobile.split('\n').length - 1 && <br />}
                </span>
              ))}
            </>
          ) : (
            <>
              {step.description.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < step.description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const t = useScarReductionTranslations();

  return (
    <section className={styles.scarProcessSection}>
      <div className={styles.scarProcessContent}>
        {t.process.map((step, index) => (
          <ProcessStep key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
