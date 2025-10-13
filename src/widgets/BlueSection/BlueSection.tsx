'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import * as styles from './BlueSection.css';
import { ArrowButton } from '../../shared/ui/ArrowButton';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useBlueTranslations } from '@/hooks/useAllPagesTranslations';

interface BlueSectionProps {
  isActive?: boolean;
  onTransitionToVideo?: () => void;
}

export default function BlueSection({ isActive = false }: BlueSectionProps) {
  const [isVisible] = useState(isActive);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const blue = useBlueTranslations();

  useEffect(() => {
    // 컴포넌트 마운트 로직 (필요시 추가)
  }, []);

  // 바날 로컬 서비스 항목들 - JSON에서 가져오기
  const localServices = blue.localServices.map((service, index) => ({
    ...service,
    href: ['/doctors', '/before-after', '/doctors', '/reservation', '/pricing', '/before-after'][index],
  }));

  return (
    <section className={`${styles.blueSection} ${isVisible || isActive ? styles.visible : ''}`}>
      {/* 이미지 카드 섹션 - Figma 정확 반영 */}
      <div className={styles.imageCardsSection}>
        {/* 이미지 카드 1 */}
        <motion.div
          className={styles.imageCard1}
          initial={{ opacity: 0, y: isMobile ? 30 : 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
            margin: '0px',
          }}
          transition={{
            duration: 0.6,
            delay: 0,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {isMobile ? (
            <img src="/main/shot/mobile/shot1-mobile.svg" alt="Shin Seung gyu" className={styles.cardImage} />
          ) : (
            <img src="/main/shot/shot1.png" alt="Shin Seung gyu" className={styles.cardImage} />
          )}
        </motion.div>

        {/* 이미지 카드 2 */}
        <motion.div
          className={styles.imageCard2}
          initial={{ opacity: 0, y: isMobile ? 30 : 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
            margin: '0px',
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {isMobile ? (
            <img src="/main/shot/mobile/shot2-mobile.svg" alt="Park Soo Ho" className={styles.cardImage} />
          ) : (
            <img src="/main/shot/shot2.png" alt="Park Soo Ho" className={styles.cardImage} />
          )}
        </motion.div>

        {/* 이미지 카드 3 */}
        <motion.div
          className={styles.imageCard3}
          initial={{ opacity: 0, y: isMobile ? 30 : 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
            margin: '0px',
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {isMobile ? (
            <img src="/main/shot/mobile/shot3-mobile.svg" alt="Kim Narae" className={styles.cardImage} />
          ) : (
            <img src="/main/shot/shot3.png" alt="Kim Narae" className={styles.cardImage} />
          )}
        </motion.div>

        {/* 이미지 카드 4 */}
        <motion.div
          className={styles.imageCard4}
          initial={{ opacity: 0, y: isMobile ? 30 : 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
            margin: '0px',
          }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {isMobile ? (
            <img src="/main/shot/mobile/shot4-mobile.svg" alt="의료진 4" className={styles.cardImage} />
          ) : (
            <img src="/main/shot/shot4.png" alt="의료진 4" className={styles.cardImage} />
          )}
        </motion.div>
      </div>

      {/* RE.YOU 텍스트 섹션 */}
      <div className={styles.reYouSection}>
        {/* 텍스트 콘텐츠 */}
        <h2 className={styles.reYouTitle}>{blue.reYou.title}</h2>
        <p className={styles.reYouSubtitle}>{blue.reYou.subtitle}</p>

        {/* 그래피티 배경 이미지 - 데스크톱용 */}
        <img src="/main/banal_graffiti.svg" alt="Banal Graffiti" className={styles.graffitiBackground} />

        {/* 그래피티 배경 이미지 - 모바일용 */}
        <img
          src="/about/mobile/banal-graffiti-mobile.svg"
          alt="Banal Graffiti Mobile"
          className={styles.graffitiBackgroundMobile}
        />
      </div>

      {/* 바날 로컬 섹션 */}
      <div className={styles.whatBanalSection}>
        {/* 모바일에서 제목 먼저 표시 */}
        <h2 className={styles.whatBanalTitleMobile}>
          {blue.whatBanal.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < blue.whatBanal.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* 모바일에서 제목 바로 아래 표시되는 설명 텍스트 */}
        <div className={styles.whatBanalMobileTop}>
          <p className={styles.whatBanalSubDescription1Mobile}>
            {blue.whatBanal.subDescription1Mobile.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < blue.whatBanal.subDescription1Mobile.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className={styles.whatBanalDescriptionMobile}>{blue.whatBanal.description}</p>
          <p className={styles.whatBanalSubDescription2Mobile}>
            {blue.whatBanal.subDescription2Mobile.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < blue.whatBanal.subDescription2Mobile.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.whatBanalContent}>
          {/* 왼쪽 텍스트 영역 */}
          <div className={styles.whatBanalText}>
            <h2 className={styles.whatBanalTitleDesktop}>
              {blue.whatBanal.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < blue.whatBanal.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className={styles.whatBanalSubDescription1}>{blue.whatBanal.subDescription1}</p>
            <p className={styles.whatBanalDescription}>{blue.whatBanal.description}</p>
            <p className={styles.whatBanalSubDescription2}>
              {blue.whatBanal.subDescription2.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < blue.whatBanal.subDescription2.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className={styles.whatBanalButtonDesktop}>
              <ArrowButton
                size="medium"
                variant="primary"
                fontSize={22}
                fontSizeMobile={16}
                height={44}
                width={180}
                paddingLeft={16}
                paddingTop={10}
                paddingBottom={10}
                onClick={() => router.push('/doctors')}
              >
                {blue.whatBanal.viewMore}
              </ArrowButton>
            </div>
          </div>

          {/* 오른쪽 6개 항목 리스트 */}
          <div className={styles.featuresList}>
            {localServices.map((service, index) => {
              const delayClass = [
                styles.featureItemDelay1,
                styles.featureItemDelay2,
                styles.featureItemDelay3,
                styles.featureItemDelay4,
                styles.featureItemDelay5,
                styles.featureItemDelay6,
              ][index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`${styles.featureItem} ${styles.featureItemAnimated} ${delayClass}`}>
                    <div className={styles.featureNumber}>{service.number}</div>
                    <div className={styles.featureContent}>
                      <h3 className={styles.featureTitle}>
                        {isMobile && 'titleMobile' in service && service.titleMobile
                          ? service.titleMobile
                          : service.title}
                      </h3>
                      <p className={styles.featureDescription}>
                        {isMobile && 'descriptionMobile' in service && service.descriptionMobile
                          ? service.descriptionMobile
                          : service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 모바일에서만 보이는 버튼 - featuresList 다음에 위치 */}
        <div className={styles.whatBanalButtonMobile}>
          <ArrowButton
            size="medium"
            variant="primary"
            fontSizeMobile={16}
            paddingVertical={16}
            width="100%"
            textAlign="center"
            className={styles.fullWidthButton}
            onClick={() => router.push('/doctors')}
          >
            {blue.doctors.viewMore}
          </ArrowButton>
        </div>
      </div>

      {/* 의료진 소개 섹션 - 피그마 디자인 기반 */}
      <div className={styles.doctorsSection}>
        {/* 모바일 상단 텍스트 영역 */}
        <div className={styles.doctorsMobileHeader}>
          <h2 className={styles.doctorsMobileTitle}>
            {blue.doctors.title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < blue.doctors.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        {/* 모바일 의료진 전체 화면 리스트 */}
        <div className={styles.doctorsMobileCards}>
          {/* 신승규 원장 */}
          <div className={styles.doctorMobileFullCard}>
            <img
              src="/main/person/doctor-shinseunggyu.png"
              alt="신승규 원장"
              className={styles.doctorMobileFullImage}
            />
            <div className={styles.doctorMobileOverlay}>
              <h3 className={`${styles.doctorMobileFullNameFirst} english-name`}>
                Shin
                <br />
                Seung
                <br />
                gyu
              </h3>
              <p className={styles.doctorMobileFullKorean}>{blue.doctors.doctorName}</p>
            </div>
          </div>

          {/* 박수호 원장 */}
          <div className={styles.doctorMobileFullCard}>
            <img src="/main/person/doctor-parksooho.png" alt="박수호 원장" className={styles.doctorMobileFullImage} />
            <div className={styles.doctorMobileOverlay}>
              <h3 className={`${styles.doctorMobileFullNameSecond} english-name`}>
                Park
                <br />
                Soo Ho
              </h3>
              <p className={styles.doctorMobileFullKorean}>{blue.doctors.doctorPark}</p>
            </div>
          </div>

          {/* 김나래 원장 */}
          <div className={styles.doctorMobileFullCard}>
            <img src="/main/person/doctor-kimnarae.png" alt="김나래 원장" className={styles.doctorMobileFullImage} />
            <div className={styles.doctorMobileOverlay}>
              <h3 className={`${styles.doctorMobileFullNameThird} english-name`}>
                Kim
                <br />
                Narae
              </h3>
              <p className={styles.doctorMobileFullKorean}>{blue.doctors.doctorKim}</p>
            </div>
          </div>
        </div>

        {/* 모바일 하단 설명 텍스트 */}
        <div className={styles.doctorsMobileBottom}>
          <p className={styles.doctorsMobileDescription}>{blue.doctors.subTitleMobile}</p>
          <p className={styles.doctorsMobileSubDescription}>
            {blue.doctors.mobileDescription.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < blue.doctors.mobileDescription.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          {/* 모바일 View More 버튼 (하단) */}
          <div className={styles.doctorsMobileButtonBottom}>
            <ArrowButton
              size="medium"
              variant="primary"
              fontSizeMobile={16}
              paddingVertical={16}
              width="100%"
              textAlign="center"
              className={styles.fullWidthButton}
              onClick={() => router.push('/doctors')}
            >
              {blue.whatBanal.viewMore}
            </ArrowButton>
          </div>
        </div>

        {/* 데스크탑 버전 (기존 코드) */}
        <div className={styles.doctorsContent}>
          {/* 좌측 텍스트 영역 */}
          <div className={styles.doctorsTextSection}>
            <h2 className={styles.doctorsMainTitle}>
              {blue.doctors.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < blue.doctors.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className={styles.doctorsSubTitle}>{blue.doctors.subTitle}</p>
            <p className={styles.doctorsDescription}>
              {blue.doctors.desktopDescription.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < blue.doctors.desktopDescription.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            <ArrowButton
              size="medium"
              variant="primary"
              fontSize={22}
              fontSizeMobile={16}
              height={44}
              width={180}
              paddingLeft={16}
              paddingTop={10}
              paddingBottom={10}
              onClick={() => router.push('/doctors')}
            >
              {blue.doctors.viewMore}
            </ArrowButton>
          </div>

          {/* 우측 의료진 이미지 섹션 - 겹쳐진 레이아웃 */}
          <div className={styles.doctorsImageGrid}>
            {/* 이미지들 */}
            <div className={styles.doctorCard1}>
              <img src="/main/person/doctor-shinseunggyu.png" alt="신승규 원장" className={styles.doctorImage1} />
            </div>

            <div className={styles.doctorCard2}>
              <img src="/main/person/doctor-parksooho.png" alt="박수호 원장" className={styles.doctorImage2} />
            </div>

            <div className={styles.doctorCard3}>
              <img src="/main/person/doctor-kimnarae.png" alt="김나래 원장" className={styles.doctorImage3} />
            </div>

            {/* 구분선들 - 신승규, 박수호 사진 아래 */}
            <div className={styles.doctorDivider1} />
            <div className={styles.doctorDivider2} />

            {/* 모든 텍스트 오버레이 - 그리드 컨테이너 기준 absolute */}
            <div className={styles.doctorNameOverlay1}>
              <h3 className={`${styles.doctorEnglishName1} english-name`}>
                Shin
                <br />
                Seung gyu
              </h3>
            </div>

            <div className={styles.doctorKoreanNameContainer1}>
              <p className={styles.doctorKoreanName}>{blue.doctors.doctorName}</p>
            </div>

            <div className={styles.doctorNameOverlay2}>
              <h3 className={`${styles.doctorEnglishName2} english-name`}>
                Park
                <br />
                Soo Ho
              </h3>
            </div>

            <div className={styles.doctorKoreanNameContainer2}>
              <p className={styles.doctorKoreanName}>{blue.doctors.doctorPark}</p>
            </div>

            <div className={styles.doctorNameOverlay3}>
              <h3 className={`${styles.doctorEnglishName3} english-name`}>
                Kim
                <br />
                Narae
              </h3>
            </div>

            <div className={styles.doctorKoreanNameContainer3}>
              <p className={styles.doctorKoreanName}>{blue.doctors.doctorKim}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
