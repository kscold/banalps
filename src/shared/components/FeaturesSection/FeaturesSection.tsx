'use client';

import { motion } from 'framer-motion';
import * as styles from './FeaturesSection.css';

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
  // Check if desktop (not mobile)
  const isDesktop = !isMobile;

  // Helper function to render title with line breaks
  const renderTitle = (title: React.ReactNode, cardIndex?: number) => {
    if (typeof title === 'string') {
      console.log(`[Card ${cardIndex}] Title type: string, value:`, title);
      const lines = title.split('\n');
      console.log(`[Card ${cardIndex}] Lines after split:`, lines);
      return (
        <>
          {lines.map((line, index) => (
            <span key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </>
      );
    }
    console.log(`[Card ${cardIndex}] Title type: ReactNode`);
    return title;
  };

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContent}>
        <div className={styles.featuresHeader}>
          <img src="/hair-transplant/double-quotation-start.svg" alt="따옴표 시작" className={styles.quotationStart} />
          <h2 className={styles.featuresMainTitle}>
            {isMobile && featuresTitleMobile ? featuresTitleMobile : featuresTitle}
          </h2>
          <img src="/hair-transplant/double-quotation-end.svg" alt="따옴표 끝" className={styles.quotationEnd} />
        </div>

        {/* 데스크탑: 순차적 카드 애니메이션 */}
        {isDesktop ? (
          <div className={styles.featuresGrid}>
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className={styles.featureIconContainer}>
                  <div className={styles.featureIcon}>
                    <img
                      src={card.icon}
                      alt={`특징 ${index + 1}`}
                      className={
                        index === 0
                          ? styles.featureIconFirst
                          : index === 1
                            ? styles.featureIconSecond
                            : index === 2
                              ? styles.featureIconThird
                              : styles.featureIconFourth
                      }
                    />
                  </div>
                </div>
                <h3 className={styles.featureTitle}>{renderTitle(card.title, index)}</h3>
              </motion.div>
            ))}
          </div>
        ) : (
          /* 모바일: 순차적 카드 애니메이션 */
          <div className={styles.featuresGrid}>
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: '-50px 0px -50px 0px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className={styles.featureIconContainer}>
                  <div className={styles.featureIcon}>
                    <img
                      src={card.icon}
                      alt={`특징 ${index + 1}`}
                      className={
                        index === 0
                          ? styles.featureIconFirst
                          : index === 1
                            ? styles.featureIconSecond
                            : index === 2
                              ? styles.featureIconThird
                              : styles.featureIconFourth
                      }
                    />
                  </div>
                </div>
                <h3 className={styles.featureTitle}>{renderTitle(card.title, index)}</h3>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
