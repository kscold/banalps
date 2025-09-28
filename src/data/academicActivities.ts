export interface AcademicActivity {
  date: string;
  type: "발표" | "논문";
  event: {
    ko: string;
    jp: string;
  };
  title: {
    ko: string;
    jp: string;
  };
}

// 연도별 학술활동 데이터
export const academicActivitiesByYear: Record<number, AcademicActivity[]> = {
  2025: [
    {
      date: "2025.05.11",
      type: "발표",
      event: {
        ko: "International Congress of the KSHRS 2025",
        jp: "International Congress of the KSHRS 2025"
      },
      title: {
        ko: "Hair transplantation after reduction foreheadplasty",
        jp: "額縮小術後の毛髪移植"
      }
    },
    {
      date: "2025.05.10",
      type: "발표",
      event: {
        ko: "International Congress of the KSHRS 2025",
        jp: "International Congress of the KSHRS 2025"
      },
      title: {
        ko: "Implantation",
        jp: "インプランテーション"
      }
    },
    {
      date: "2025.04.06",
      type: "발표",
      event: {
        ko: "대한모발이식학회 한올 심포지엄",
        jp: "韓国毛髪移植学会 ハノル シンポジウム"
      },
      title: {
        ko: "헤어라인 디자인",
        jp: "ヘアラインデザイン"
      }
    }
  ],
  2024: [
    {
      date: "2024.11.24",
      type: "발표",
      event: {
        ko: "대한모발이식학회",
        jp: "韓国毛髪移植学会"
      },
      title: {
        ko: "Difficult cases and Situation",
        jp: "困難な症例と状況"
      }
    },
    {
      date: "2024.11.18",
      type: "발표",
      event: {
        ko: "PRS Korea 2024",
        jp: "PRS Korea 2024"
      },
      title: {
        ko: "Forehead reduction and Hairline correction",
        jp: "額縮小とヘアライン矯正"
      }
    },
    {
      date: "2024.11.18",
      type: "발표",
      event: {
        ko: "ISHRS Denver",
        jp: "ISHRS Denver"
      },
      title: {
        ko: "Secondary reduction foreheadplasty",
        jp: "二次額縮小術"
      }
    },
    {
      date: "2024.11.17",
      type: "발표",
      event: {
        ko: "ISHRS Denver",
        jp: "ISHRS Denver"
      },
      title: {
        ko: "Secondary reduction foreheadplasty",
        jp: "二次額縮小術"
      }
    },
    {
      date: "2024.10.20",
      type: "발표",
      event: {
        ko: "2024 대한성형외과의사회",
        jp: "2024 韓国形成外科医師会"
      },
      title: {
        ko: "전공의 연수강좌",
        jp: "専攻医研修講座"
      }
    },
    {
      date: "2024.10.06",
      type: "발표",
      event: {
        ko: "대한성형외과의사회 연수강좌",
        jp: "韓国形成外科医師会研修講座"
      },
      title: {
        ko: "이마축소술의 적응증과 실전 팁",
        jp: "額縮小術の適応症と実戦ティップ"
      }
    },
    {
      date: "2024.07.29",
      type: "발표",
      event: {
        ko: "제 22차 대한모발이식학회 집담회",
        jp: "第22回韓国毛髪移植学会集談会"
      },
      title: {
        ko: "옅은 눈썹에 미녹시딜",
        jp: "薄い眉毛にミノキシジル"
      }
    },
    {
      date: "2024.06.26",
      type: "발표",
      event: {
        ko: "Kenvue Inc 임직원 사내강의",
        jp: "Kenvue Inc 役職員社内講義"
      },
      title: {
        ko: "여성탈모, 모발이식 그리고 미녹시딜",
        jp: "女性脱毛、毛髪移植そしてミノキシジル"
      }
    },
    {
      date: "2024.06.02",
      type: "발표",
      event: {
        ko: "제14차 대한모발이식학회 학술대회",
        jp: "第14回韓国毛髪移植学会学術大会"
      },
      title: {
        ko: "Consideration of Scar from Reductive Foreheadplasty",
        jp: "額縮小術による瘢痕の考慮事項"
      }
    },
    {
      date: "2024.06.01",
      type: "발표",
      event: {
        ko: "제14차 대한모발이식학회 학술대회",
        jp: "第14回韓国毛髪移植学会学術大会"
      },
      title: {
        ko: "Video session; Female hairline correction with FUSS",
        jp: "ビデオセッション; FUSSによる女性ヘアライン矯正"
      }
    }
  ],
  2023: [
    {
      date: "2023.11.19",
      type: "발표",
      event: {
        ko: "제13차 대한모발이식학회 학술대회",
        jp: "第13回韓国毛髪移植学会学術大会"
      },
      title: {
        ko: "이마축소술의 합병증과 재수술",
        jp: "額縮小術の合併症と再手術"
      }
    },
    {
      date: "2023.09.15",
      type: "논문",
      event: {
        ko: "대한성형외과학회지",
        jp: "韓国形成外科学会誌"
      },
      title: {
        ko: "모발이식술의 최신 동향",
        jp: "毛髪移植術の最新動向"
      }
    },
    {
      date: "2023.07.20",
      type: "발표",
      event: {
        ko: "아시아태평양 모발복원 심포지엄",
        jp: "アジア太平洋毛髪復元シンポジウム"
      },
      title: {
        ko: "자연스러운 헤어라인 복원 기법",
        jp: "自然なヘアライン復元技法"
      }
    },
    {
      date: "2023.05.28",
      type: "발표",
      event: {
        ko: "제21차 대한모발이식학회 집담회",
        jp: "第21回韓国毛髪移植学会集談会"
      },
      title: {
        ko: "두피 확장술과 이마축소의 병합 수술",
        jp: "頭皮拡張術と額縮小の併合手術"
      }
    }
  ],
  2022: [
    {
      date: "2022.12.10",
      type: "논문",
      event: {
        ko: "International Journal of Hair Restoration",
        jp: "International Journal of Hair Restoration"
      },
      title: {
        ko: "Advanced Techniques in Forehead Reduction Surgery",
        jp: "額縮小手術の先進技術"
      }
    },
    {
      date: "2022.10.15",
      type: "발표",
      event: {
        ko: "제12차 대한모발이식학회 학술대회",
        jp: "第12回韓国毛髪移植学会学術大会"
      },
      title: {
        ko: "미세모발이식의 생착률 향상 방법",
        jp: "微細毛髪移植の生着率向上方法"
      }
    },
    {
      date: "2022.08.22",
      type: "발표",
      event: {
        ko: "ISHRS World Congress",
        jp: "ISHRS World Congress"
      },
      title: {
        ko: "Innovative Approaches to Hairline Design",
        jp: "ヘアラインデザインの革新的アプローチ"
      }
    },
    {
      date: "2022.06.05",
      type: "발표",
      event: {
        ko: "대한성형외과학회 춘계학술대회",
        jp: "韓国形成外科学会春季学術大会"
      },
      title: {
        ko: "여성형 탈모의 수술적 치료",
        jp: "女性型脱毛の外科的治療"
      }
    }
  ]
};

// 학술활동 타입 번역
export const activityTypeTranslations = {
  발표: {
    ko: "발표",
    jp: "発表"
  },
  논문: {
    ko: "논문",
    jp: "論文"
  }
} as const;