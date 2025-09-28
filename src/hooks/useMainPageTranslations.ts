import { useLanguageStore } from "@/shared/stores/useLanguageStore";
import translations from "@/locales/allPages.json";

type Language = "ko" | "ja";

export function useMainPageTranslations() {
  const { language } = useLanguageStore();
  const currentLang = (language === "JP" ? "ja" : "ko") as Language;

  return {
    hero: translations[currentLang].mainPage.hero,
    blue: translations[currentLang].mainPage.blue,
    white: translations[currentLang].mainPage.white,
    currentLanguage: currentLang
  };
}