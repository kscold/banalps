'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import * as styles from './PopupModal.css';
import Image from 'next/image';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';

type PopupPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface PopupData {
  id: number;
  title: string;
  titleJp?: string;
  content?: string;
  contentJp?: string;
  imageUrl?: string;
  isActive: boolean;
  order: number;
  position: PopupPosition;
}

interface PopupModalProps {
  popups: PopupData[];
  position: PopupPosition;
  onClose: (id: number) => void;
  onCloseToday: (id: number) => void;
  baseZIndex?: number; // 기본 z-index (order에 따라 설정됨)
}

// 위치 계산 함수 (모바일에서는 항상 중앙, 데스크탑에서는 위치별)
function getPositionStyle(position: PopupPosition, isMobile: boolean, zIndex: number): React.CSSProperties {
  // 모바일에서는 항상 중앙
  if (isMobile) {
    return {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: zIndex,
    };
  }

  // 데스크탑에서는 위치별 배치
  const positions: Record<PopupPosition, React.CSSProperties> = {
    'top-left': { position: 'fixed', top: '20px', left: '20px', zIndex: zIndex },
    'top-center': { position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: zIndex },
    'top-right': { position: 'fixed', top: '20px', right: '20px', zIndex: zIndex },
    'center-left': { position: 'fixed', top: '50%', left: '20px', transform: 'translateY(-50%)', zIndex: zIndex },
    center: { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: zIndex },
    'center-right': { position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)', zIndex: zIndex },
    'bottom-left': { position: 'fixed', bottom: '20px', left: '20px', zIndex: zIndex },
    'bottom-center': { position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: zIndex },
    'bottom-right': { position: 'fixed', bottom: '20px', right: '20px', zIndex: zIndex },
  };

  return positions[position];
}

// containerstyle 속성을 style 속성으로 변환하는 함수
function processImageStyles(html: string): string {
  if (!html) return html;

  // containerstyle 속성을 가진 img 태그를 찾아서 style 속성으로 변환
  return html.replace(
    /<img([^>]*?)containerstyle="([^"]*)"([^>]*?)>/gi,
    (match, before, containerStyle, after) => {
      // 기존 style 속성이 있는지 확인
      const styleMatch = (before + after).match(/style="([^"]*)"/i);
      const existingStyle = styleMatch ? styleMatch[1] : '';

      // containerstyle에서 margin 값만 추출
      const marginMatch = containerStyle.match(/margin:\s*([^;]+);?/i);
      const marginValue = marginMatch ? marginMatch[1] : '';

      // 새로운 style 속성 생성
      let newStyle = existingStyle;
      if (marginValue) {
        // 기존 margin 제거
        newStyle = newStyle.replace(/margin:\s*[^;]+;?/gi, '');
        newStyle = newStyle.replace(/margin-left:\s*[^;]+;?/gi, '');
        newStyle = newStyle.replace(/margin-right:\s*[^;]+;?/gi, '');
        // 새 margin 추가
        newStyle += ` margin: ${marginValue};`;
      }
      newStyle += ' display: block;';

      // style 속성 제거
      let cleanedAttrs = (before + after).replace(/style="[^"]*"/gi, '');
      // containerstyle은 제거됨 (replace에서 제외)

      return `<img${cleanedAttrs} style="${newStyle.trim()}">`;
    }
  );
}

export default function PopupModal({ popups, position, onClose, onCloseToday, baseZIndex = 99999 }: PopupModalProps) {
  const { language } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (popups.length === 0) return null;

  const currentPopup = popups[currentIndex];
  const title = language === 'JP' && currentPopup.titleJp ? currentPopup.titleJp : currentPopup.title;
  const rawContent = language === 'JP' && currentPopup.contentJp ? currentPopup.contentJp : currentPopup.content;
  const content = processImageStyles(rawContent || '');

  const handleNext = () => {
    if (currentIndex < popups.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClose = () => {
    onClose(currentPopup.id);
    // 다음 팝업이 있으면 이동
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleCloseToday = () => {
    onCloseToday(currentPopup.id);
    // 다음 팝업이 있으면 이동
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const positionStyle = getPositionStyle(position, isMobile, baseZIndex);

  const modalContent = (
    <div style={positionStyle}>
      {/* 책처럼 겹친 배경 팝업들 */}
      {popups.length > 1 &&
        popups.slice(currentIndex + 1).map((popup, idx) => (
          <div
            key={popup.id}
            style={{
              position: 'absolute',
              top: `${(idx + 1) * 8}px`,
              left: `${(idx + 1) * 8}px`,
              right: `${-(idx + 1) * 8}px`,
              height: '100%',
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              zIndex: -(idx + 1),
            }}
          />
        ))}

      {/* 현재 팝업 */}
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', zIndex: 0 }}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderContent}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
              <Image src="/main/close.svg" alt="close" width={32} height={32} />
            </button>
          </div>
        </div>

        <div className={styles.modalBody}>
          {/* 이미지가 있으면 이미지 표시 */}
          {currentPopup.imageUrl && (
            <div className={styles.imageContainer}>
              <img src={currentPopup.imageUrl} alt={title} className={styles.popupImage} />
            </div>
          )}

          {/* 텍스트 내용이 있으면 표시 (HTML 렌더링) */}
          {content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />}
        </div>

        {/* 하단 버튼들 */}
        <div className={styles.modalFooter}>
          <button className={styles.closeTodayButton} onClick={handleCloseToday}>
            {language === 'JP' ? '今日は表示しない' : '오늘 하루 동안 보지 않기'}
          </button>

          <button className={styles.closeNowButton} onClick={handleClose}>
            {language === 'JP' ? '閉じる' : '닫기'}
          </button>
        </div>
      </motion.div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
