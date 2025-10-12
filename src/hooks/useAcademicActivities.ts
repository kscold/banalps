import { useState, useEffect } from 'react';
import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import { activityTypeTranslations } from '@/data/academicActivities';

export interface LocalizedAcademicActivity {
  date: string;
  type: string;
  event: string;
  title: string;
}

interface AcademicActivityFromDB {
  id: number;
  year: number;
  date: string;
  type: '발표' | '논문' | '저널' | '수상' | '연구' | '역서';
  event: {
    ko: string;
    jp: string;
  };
  title: {
    ko: string;
    jp: string;
  };
  order: number;
}

export function useAcademicActivities() {
  const { language } = useLanguageStore();
  const currentLang = language === 'JP' ? 'jp' : 'ko';
  const [activities, setActivities] = useState<AcademicActivityFromDB[]>([]);
  const [loading, setLoading] = useState(true);

  // DB에서 데이터 가져오기
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('/api/admin/academic-activity');
        const data = await response.json();
        if (data.success) {
          setActivities(data.data);
        }
      } catch (error) {
        console.error('[useAcademicActivities] 데이터 조회 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  // 모든 연도의 활동을 가져와서 날짜순으로 정렬
  const getAllActivities = (): LocalizedAcademicActivity[] => {
    if (loading || activities.length === 0) return [];

    const allActivities: LocalizedAcademicActivity[] = activities.map((activity) => ({
      date: activity.date,
      type: activityTypeTranslations[activity.type][currentLang],
      event: activity.event[currentLang],
      title: activity.title[currentLang],
    }));

    // 날짜순으로 정렬 (최신순)
    return allActivities.sort((a, b) => {
      // 날짜 파싱: "2014.05.11" -> "2014-05-11", "2014" -> "2014-01-01"
      const parseDate = (dateStr: string) => {
        if (dateStr.includes('.')) {
          return new Date(dateStr.replace(/\./g, '-'));
        }
        // 연도만 있는 경우 1월 1일로 처리
        return new Date(`${dateStr}-01-01`);
      };

      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  };

  // 특정 연도의 활동만 가져오기
  const getActivitiesByYear = (year: number): LocalizedAcademicActivity[] => {
    if (loading || activities.length === 0) return [];

    const yearActivities = activities.filter((activity) => activity.year === year);
    return yearActivities.map((activity) => ({
      date: activity.date,
      type: activityTypeTranslations[activity.type][currentLang],
      event: activity.event[currentLang],
      title: activity.title[currentLang],
    }));
  };

  // 사용 가능한 연도 목록
  const getAvailableYears = (): number[] => {
    if (loading || activities.length === 0) return [];

    const years = Array.from(new Set(activities.map((activity) => activity.year)));
    return years.sort((a, b) => b - a); // 최신 연도부터
  };

  return {
    getAllActivities,
    getActivitiesByYear,
    getAvailableYears,
    currentLanguage: currentLang,
    loading,
  };
}
