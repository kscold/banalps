import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import { academicActivitiesByYear, activityTypeTranslations, type AcademicActivity } from '@/data/academicActivities';

export interface LocalizedAcademicActivity {
  date: string;
  type: string;
  event: string;
  title: string;
}

export function useAcademicActivities() {
  const { language } = useLanguageStore();
  const currentLang = language === 'JP' ? 'jp' : 'ko';

  // 모든 연도의 활동을 가져와서 날짜순으로 정렬
  const getAllActivities = (): LocalizedAcademicActivity[] => {
    const allActivities: LocalizedAcademicActivity[] = [];

    // 모든 연도의 데이터를 수집
    Object.keys(academicActivitiesByYear)
      .sort((a, b) => parseInt(b) - parseInt(a)) // 최신 연도부터
      .forEach((year) => {
        const yearActivities = academicActivitiesByYear[parseInt(year)];
        yearActivities.forEach((activity) => {
          allActivities.push({
            date: activity.date,
            type: activityTypeTranslations[activity.type][currentLang],
            event: activity.event[currentLang],
            title: activity.title[currentLang],
          });
        });
      });

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
    const activities = academicActivitiesByYear[year] || [];
    return activities.map((activity) => ({
      date: activity.date,
      type: activityTypeTranslations[activity.type][currentLang],
      event: activity.event[currentLang],
      title: activity.title[currentLang],
    }));
  };

  // 사용 가능한 연도 목록
  const getAvailableYears = (): number[] => {
    return Object.keys(academicActivitiesByYear)
      .map((year) => parseInt(year))
      .sort((a, b) => b - a); // 최신 연도부터
  };

  return {
    getAllActivities,
    getActivitiesByYear,
    getAvailableYears,
    currentLanguage: currentLang,
  };
}
