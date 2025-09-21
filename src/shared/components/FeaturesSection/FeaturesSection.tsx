"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as styles from "./FeaturesSection.css";

interface FeatureCard {
  icon: string;
  title: React.ReactNode;
}

interface FeaturesSectionProps {
  featuresTitle: React.ReactNode;
  featuresTitleMobile?: React.ReactNode;
  featureCards: FeatureCard[];
  isMobile?: boolean;
}

export default function FeaturesSection({
  featuresTitle,
  featuresTitleMobile,
  featureCards,
  isMobile = false,
}: FeaturesSectionProps) {
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContent}>
        <div className={styles.featuresHeader}>
          <img
            src="/hair-transplant/double-quotation-start.svg"
            alt="따옴표 시작"
            className={styles.quotationStart}
          />
          <h2 className={styles.featuresMainTitle}>
            {isMobile && featuresTitleMobile
              ? featuresTitleMobile
              : featuresTitle}
          </h2>
          <img
            src="/hair-transplant/double-quotation-end.svg"
            alt="따옴표 끝"
            className={styles.quotationEnd}
          />
        </div>
        <motion.div
          ref={featuresRef}
          className={styles.featuresGrid}
          initial={{ opacity: 0, y: 80 }}
          animate={
            featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 80 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
              }
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className={styles.featureIconContainer}>
                <div className={styles.featureIcon}>
                  <img
                    src={card.icon}
                    alt={`특징 ${index + 1}`}
                    className={styles.featureIconImg}
                  />
                </div>
              </div>
              <h3 className={styles.featureTitle}>{card.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
