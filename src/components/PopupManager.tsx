'use client';

import { useEffect, useState } from 'react';
import PopupModal from '@/shared/components/PopupModal/PopupModal';

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

const POPUP_CLOSE_PREFIX = 'popup_close_'; // localStorage key prefix

// 새로고침하면 초기화되는 메모리 저장소 (window 객체 사용)
declare global {
  interface Window {
    __popupClosedIds?: Set<number>;
  }
}

// 세션 내에서 닫힌 팝업 ID 저장 (새로고침하면 초기화)
if (typeof window !== 'undefined' && !window.__popupClosedIds) {
  window.__popupClosedIds = new Set<number>();
}

export default function PopupManager() {
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopups();
  }, []);

  const fetchPopups = async () => {
    try {
      const response = await fetch('/api/popup?activeOnly=true');
      const data = await response.json();

      if (data.success && data.data) {
        const activePopups = data.data.filter((popup: PopupData) => {
          // localStorage 체크 (오늘 하루 동안 보지 않기)
          const closeKey = `${POPUP_CLOSE_PREFIX}${popup.id}`;
          const closedDate = localStorage.getItem(closeKey);
          if (closedDate) {
            const today = new Date().toDateString();
            const savedDate = new Date(closedDate).toDateString();
            if (today === savedDate) {
              return false; // 오늘 이미 "오늘 하루 동안 보지 않기" 클릭함
            }
            // 날짜가 다르면 localStorage에서 삭제
            localStorage.removeItem(closeKey);
          }

          // window 메모리 체크 (이번 세션에서 닫기 클릭, 새로고침하면 초기화)
          if (window.__popupClosedIds?.has(popup.id)) {
            return false; // 이번 세션에서 이미 닫기 클릭함
          }

          return true;
        });

        setPopups(activePopups);
      }
    } catch (error) {
      console.error('팝업 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (popupId: number) => {
    // window 메모리에 저장 (새로고침하면 초기화, 페이지 이동 시에는 유지)
    if (window.__popupClosedIds) {
      window.__popupClosedIds.add(popupId);
    }

    // 팝업 목록에서 제거
    setPopups((prev) => prev.filter((p) => p.id !== popupId));
  };

  const handleCloseToday = (popupId: number) => {
    // localStorage에 저장 (오늘 하루 동안 안 뜸)
    const closeKey = `${POPUP_CLOSE_PREFIX}${popupId}`;
    localStorage.setItem(closeKey, new Date().toISOString());

    // window 메모리에도 저장 (현재 세션에서도 안 뜨게)
    if (window.__popupClosedIds) {
      window.__popupClosedIds.add(popupId);
    }

    // 팝업 목록에서 제거
    setPopups((prev) => prev.filter((p) => p.id !== popupId));
  };

  if (loading || popups.length === 0) {
    return null;
  }

  // 위치별로 팝업 그룹화하고 order 순으로 정렬
  const groupedPopups = popups.reduce(
    (acc, popup) => {
      if (!acc[popup.position]) {
        acc[popup.position] = [];
      }
      acc[popup.position].push(popup);
      return acc;
    },
    {} as Record<string, PopupData[]>
  );

  // 각 그룹 내에서 order 순으로 정렬
  Object.keys(groupedPopups).forEach((position) => {
    groupedPopups[position].sort((a, b) => a.order - b.order);
  });

  return (
    <>
      {Object.entries(groupedPopups).map(([position, positionPopups]) => (
        <PopupModal
          key={position}
          popups={positionPopups}
          position={position as PopupPosition}
          onClose={handleClose}
          onCloseToday={handleCloseToday}
        />
      ))}
    </>
  );
}
