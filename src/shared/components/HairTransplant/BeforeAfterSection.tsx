'use client';

import React from 'react';
import Link from 'next/link';
import BeforeAfterSlider from '@/shared/ui/BeforeAfterSlider/BeforeAfterSlider';
import ArrowButton from '@/shared/ui/ArrowButton/ArrowButton';
import * as styles from './HairTransplantLayout.css';
import { mvw } from '@/shared/styles/responsive.utils';
import { BeforeAfterData, BeforeAfterButton } from './types';

interface BeforeAfterSectionProps {
  beforeAfterData: BeforeAfterData;
  beforeAfterButton?: BeforeAfterButton;
  language: 'KR' | 'JP';
  isMobile: boolean;
}

export default function BeforeAfterSection({
  beforeAfterData,
  beforeAfterButton,
  language,
  isMobile,
}: BeforeAfterSectionProps) {
  return (
    <section className={styles.beforeAfterSection}>
      <div className={styles.beforeAfterContent}>
        <div className={styles.beforeAfterHeader}>
          <div className={styles.beforeAfterCategory}>{beforeAfterData.category}</div>
          <div className={styles.beforeAfterTitle}>{beforeAfterData.title}</div>
        </div>
        <div className={styles.beforeAfterSliderWrapper}>
          <BeforeAfterSlider
            beforeImage={beforeAfterData.beforeImage}
            afterImage={beforeAfterData.afterImage}
            beforeAlt={beforeAfterData.beforeAlt}
            afterAlt={beforeAfterData.afterAlt}
            className={styles.beforeAfterSlider}
          />
        </div>
        {beforeAfterButton && (
          <div className={styles.beforeAfterActions}>
            <Link href={beforeAfterButton.href || '/before-after'} className={styles.beforeAfterLink}>
              {isMobile ? (
                <div style={{ fontSize: mvw(16) }}>
                  <ArrowButton
                    variant="primary"
                    color="blue"
                    size="medium"
                    textAlign="center"
                    width={mvw(224)}
                    height={mvw(44)}
                  >
                    {beforeAfterButton.text}
                  </ArrowButton>
                </div>
              ) : (
                <ArrowButton
                  variant="primary"
                  color="blue"
                  size="medium"
                  height={66}
                  paddingTop={12}
                  paddingBottom={10}
                  paddingRight={10}
                  paddingLeft={language === 'JP' ? 35 : 28}
                  fontSize={24}
                  iconSize={44}
                  width={language === 'JP' ? 352 : beforeAfterButton.width || 224}
                  textAlign="left"
                >
                  {beforeAfterButton.text}
                </ArrowButton>
              )}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
