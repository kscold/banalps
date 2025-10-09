'use client';

import { useEffect } from 'react';
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
  popup: PopupData;
  isOpen: boolean;
  onClose: () => void;
  onCloseToday: () => void;
  index: number;
  total: number;
}

// 위치 계산 함수 (여러 팝업이 살짝 겹치게)
function getPositionStyle(position: PopupPosition, index: number, total: number) {
  const offset = total > 1 ? index * 30 : 0; // 30px씩 오프셋

  const positions: Record<PopupPosition, React.CSSProperties> = {
    'top-left': { top: `${20 + offset}px`, left: `${20 + offset}px` },
    'top-center': { top: `${20 + offset}px`, left: '50%', transform: `translateX(-50%)` },
    'top-right': { top: `${20 + offset}px`, right: `${20 + offset}px` },
    'center-left': { top: '50%', left: `${20 + offset}px`, transform: `translateY(-50%)` },
    center: {
      top: '50%',
      left: '50%',
      transform: total > 1 ? `translate(calc(-50% + ${offset}px), calc(-50% + ${offset}px))` : 'translate(-50%, -50%)',
    },
    'center-right': { top: '50%', right: `${20 + offset}px`, transform: `translateY(-50%)` },
    'bottom-left': { bottom: `${20 + offset}px`, left: `${20 + offset}px` },
    'bottom-center': { bottom: `${20 + offset}px`, left: '50%', transform: `translateX(-50%)` },
    'bottom-right': { bottom: `${20 + offset}px`, right: `${20 + offset}px` },
  };

  return positions[position];
}

export default function PopupModal({
  popup,
  isOpen,
  onClose,
  onCloseToday,
  index,
  total,
}: PopupModalProps) {
  const { language } = useLanguageStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // 언어에 따라 제목과 내용 선택
  const title = language === 'JP' && popup.titleJp ? popup.titleJp : popup.title;
  const content = language === 'JP' && popup.contentJp ? popup.contentJp : popup.content;

  const positionStyle = getPositionStyle(popup.position, index, total);

  const modalContent = (
    <motion.div
      className={styles.modal}
      style={{
        ...positionStyle,
        zIndex: 99999 + index, // 순서대로 쌓이게
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderContent}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.closeButton} onClick={onClose} aria-label="Close">
              <Image src="/main/close.svg" alt="close" width={32} height={32} />
            </button>
          </div>
        </div>

        <div className={styles.modalBody}>
          {/* 이미지가 있으면 이미지 표시 */}
          {popup.imageUrl && (
            <div className={styles.imageContainer}>
              <img src={popup.imageUrl} alt={title} className={styles.popupImage} />
            </div>
          )}

          {/* 텍스트 내용이 있으면 표시 (HTML 렌더링) */}
          {content && (
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>

      {/* 하단 버튼들 */}
      <div className={styles.modalFooter}>
        <button className={styles.closeTodayButton} onClick={onCloseToday}>
          {language === 'JP' ? '今日は表示しない' : '오늘 하루 동안 보지 않기'}
        </button>
        <button className={styles.closeNowButton} onClick={onClose}>
          {language === 'JP' ? '閉じる' : '닫기'}
        </button>
      </div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}
