import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Language = "KR" | "JP";

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "KR",
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => {
        // SSR 환경에서는 임시 storage 사용
        if (typeof window === "undefined") {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
          };
        }
        return localStorage;
      }),
    }
  )
);