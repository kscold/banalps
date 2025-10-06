import { useLanguageStore } from '@/shared/stores/useLanguageStore';
import translations from '@/locales/allPages.json';

type Language = 'ko' | 'ja';

export function useAllPagesTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;

  return {
    login: translations[currentLang].login,
    about: translations[currentLang].about,
    doctors: translations[currentLang].doctors,
    treatmentGuide: translations[currentLang].treatmentGuide,
    hairTransplant: translations[currentLang].hairTransplant,
    forehead: translations[currentLang].forehead,
    scalpTreatment: translations[currentLang].scalpTreatment,
    beforeAfter: translations[currentLang].beforeAfter,
    header: translations[currentLang].header,
    footer: translations[currentLang].footer,
    metadata: translations[currentLang].metadata,
    banalIntro: translations[currentLang].banalIntro,
    navigation: translations[currentLang].navigation,
    accessibility: translations[currentLang].accessibility,
    imageAlt: translations[currentLang].imageAlt,
    doctorTitles: translations[currentLang].doctorTitles,
    mainPage: translations[currentLang].mainPage,
    currentLanguage: currentLang,
  };
}

// 개별 페이지 훅
export function useAboutTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].about;
}

export function useDoctorsTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].doctors;
}

export function useTreatmentGuideTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].treatmentGuide;
}

export function useHairTransplantTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].hairTransplant;
}

export function useForeheadTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].forehead;
}

export function useScalpTreatmentTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].scalpTreatment;
}

export function useBeforeAfterTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].beforeAfter;
}

export function useHeaderTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].header;
}

export function useFooterTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].footer;
}

export function useLoginTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].login;
}

export function useMetadataTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].metadata;
}

export function useBanalIntroTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].banalIntro;
}

export function useCrownTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].hairTransplant.crown;
}

export function useHairlineTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].hairTransplant.hairline;
}

export function useIncisionTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].hairTransplant.incision;
}

export function useReoperationTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].hairTransplant.reoperation;
}

export function useBlueTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].mainPage.blue;
}

export function useWhiteTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].mainPage.white;
}

export function useHeroTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return {
    ...translations[currentLang].mainPage.hero,
    currentLanguage: currentLang,
  };
}

export function useForeheadHairTransplantTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].forehead.hairTransplant;
}

export function useScarReductionTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === 'JP' ? 'ja' : 'ko') as Language;
  return translations[currentLang].forehead.scarReduction;
}
