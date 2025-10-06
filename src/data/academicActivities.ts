export interface AcademicActivity {
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
}

// 연도별 학술활동 데이터
export const academicActivitiesByYear: Record<number, AcademicActivity[]> = {
  2025: [
    {
      date: '2025.05.11',
      type: '발표',
      event: {
        ko: 'International Congress of the KSHRS 2025',
        jp: 'International Congress of the KSHRS 2025',
      },
      title: {
        ko: 'Hair transplantation after reduction foreheadplasty',
        jp: 'Hair transplantation after reduction foreheadplasty',
      },
    },
    {
      date: '2025.05.10',
      type: '발표',
      event: {
        ko: 'International Congress of the KSHRS 2025',
        jp: 'International Congress of the KSHRS 2025',
      },
      title: {
        ko: 'Implantation',
        jp: 'Implantation',
      },
    },
    {
      date: '2025.04.06',
      type: '발표',
      event: {
        ko: '대한모발이식학회 한올 심포지엄',
        jp: '大韓毛髪移植学会 ハンオルシンポジウム',
      },
      title: {
        ko: '헤어라인 디자인',
        jp: 'ヘアラインデザイン',
      },
    },
  ],
  2024: [
    {
      date: '2024.11.24',
      type: '발표',
      event: {
        ko: '대한모발이식학회',
        jp: '大韓毛髪移植学会',
      },
      title: {
        ko: 'Difficult cases and Situation',
        jp: 'Difficult cases and Situation',
      },
    },
    {
      date: '2024.11.18',
      type: '발표',
      event: {
        ko: 'PRS Korea 2024',
        jp: 'PRS Korea 2024',
      },
      title: {
        ko: 'Forehead reduction and Hairline correction',
        jp: 'Forehead reduction and Hairline correction',
      },
    },
    {
      date: '2024.11.17',
      type: '발표',
      event: {
        ko: 'ISHRS Denver',
        jp: 'ISHRS Denver',
      },
      title: {
        ko: 'Secondary reduction foreheadplasty,\nAnalysis about the scar after reduction foreheadplasty',
        jp: 'Secondary reduction foreheadplasty,\nAnalysis about the scar after reduction foreheadplasty',
      },
    },
    {
      date: '2024.10.20',
      type: '발표',
      event: {
        ko: '2024 대한성형외과의사회\n전공의 연수강좌',
        jp: '2024 大韓整形外科医師会 専攻医研修講座',
      },
      title: {
        ko: '탈모 치료와 모발이식',
        jp: '脱毛治療と毛髪移植',
      },
    },
    {
      date: '2024.10.06',
      type: '발표',
      event: {
        ko: '대한성형외과의사회 연수강좌',
        jp: '大韓整形外科医師会研修講座',
      },
      title: {
        ko: '이마축소술의 적응증과 실전 팁',
        jp: '額縮小術の適応症と実践のコツ',
      },
    },
    {
      date: '2024.07.29',
      type: '발표',
      event: {
        ko: '제 22차 대한모발이식학회 집담회',
        jp: '第22回大韓毛髪移植学会集談会',
      },
      title: {
        ko: '옅은 눈썹에 미녹시딜',
        jp: '薄い眉毛にミノキシジル',
      },
    },
    {
      date: '2024.06.26',
      type: '발표',
      event: {
        ko: 'Kenvue Inc 임직원 사내강의',
        jp: 'Kenvue Inc 役員を対象に社内講演会実施',
      },
      title: {
        ko: '여성탈모, 모발이식 그리고 미녹시딜',
        jp: '女性脱毛症、毛髪移植、そしてミノキシジル',
      },
    },
    {
      date: '2024.06.02',
      type: '발표',
      event: {
        ko: '제14차 대한모발이식학회 학술대회',
        jp: '第14次大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: 'Consideration of Scar from Reductive Foreheadplasty',
        jp: 'Consideration of Scar from Reductive Foreheadplasty',
      },
    },
    {
      date: '2024.06.01',
      type: '발표',
      event: {
        ko: '제14차 대한모발이식학회 학술대회',
        jp: '第14次大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: 'Video session; Female hairline correction with FUSS',
        jp: 'Video session; Female hairline correction with FUSS',
      },
    },
  ],
  2023: [
    {
      date: '2023.11.19',
      type: '발표',
      event: {
        ko: '제13차 대한모발이식학회 학술대회',
        jp: '第13次大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: '저온 플라즈마 소독기, 수술방에서 MZ 되기',
        jp: '低温プラズマ消毒器、手術室でMZされる',
      },
    },
    {
      date: '2023.11.12',
      type: '발표',
      event: {
        ko: 'PRS Korea 2023',
        jp: 'PRS Korea 2023',
      },
      title: {
        ko: 'Does Hair Transplant Surgery Really Need Trichophytic Sutures?',
        jp: 'Does Hair Transplant Surgery Really Need Trichophytic Sutures?',
      },
    },
    {
      date: '2023.10.29',
      type: '발표',
      event: {
        ko: '영성회 심포지엄',
        jp: '霊性会シンポジウム',
      },
      title: {
        ko: 'Female hairline correction',
        jp: 'Female hairline correction',
      },
    },
    {
      date: '2023.05.14',
      type: '발표',
      event: {
        ko: '제12차 대한모발이식학회 학술대회',
        jp: '第12次 大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: 'Video (Panel Discussion) – Clinical pearls to achieve best results and happy patients:',
        jp: 'Video (Panel Discussion) – Clinical pearls to achieve best results and happy patients:',
      },
    },
  ],
  2022: [
    {
      date: '2022.11.13',
      type: '발표',
      event: {
        ko: 'PRS Korea 2022',
        jp: 'PRS Korea 2022',
      },
      title: {
        ko: 'The Correlation between the Diameter of the FUE Punch Tip and the Scar',
        jp: 'The Correlation between the Diameter of the FUE Punch Tip and the Scar',
      },
    },
    {
      date: '2022.08.11',
      type: '발표',
      event: {
        ko: '제11차 대한모발이식학회 학술대회',
        jp: '第11次 大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: 'Surgical Assistant Program, 동영상강의 - 이마축소',
        jp: 'Surgical Assistant Program, 動画講座－額縮小術',
      },
    },
    {
      date: '2022.08.11',
      type: '발표',
      event: {
        ko: '제11차 대한모발이식학회 학술대회',
        jp: '第11次 大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: 'Single hair preparation: FUE vs FUSS',
        jp: 'Single hair preparation: FUE vs FUSS',
      },
    },
    {
      date: '2022.08.11',
      type: '저널',
      event: {
        ko: 'Histological Analysis for the Cause of Kinky Hair after Hair Transplantation',
        jp: 'Histological Analysis for the Cause of Kinky Hair after Hair Transplantation',
      },
      title: {
        ko: "Hair Transplant Forum Int'l.",
        jp: "Hair Transplant Forum Int'l.",
      },
    },
    {
      date: '2022.02.20',
      type: '발표',
      event: {
        ko: '대한성형외과학회 최소침습연구회\n(MIPS)',
        jp: '大韓整形外科学会 最小侵襲研究会\n(MIPS)',
      },
      title: {
        ko: 'International Aesthetic Joint Conference\nFemale hairline correction with hair implanter',
        jp: 'International Aesthetic Joint Conference\nFemale hairline correction with hair implanter',
      },
    },
  ],
  2021: [
    {
      date: '2021.12.04',
      type: '발표',
      event: {
        ko: '2021 Asia Pacific Anti-Aging Conference',
        jp: '2021 Asia Pacific Anti-Aging Conference',
      },
      title: {
        ko: 'Histological Analysis for the Cause of Kinky Hair after Hair Transplantation',
        jp: 'Histological Analysis for the Cause of Kinky Hair after Hair Transplantation',
      },
    },
    {
      date: '2021.12.04',
      type: '발표',
      event: {
        ko: '2021 제10차 대한모발이식학회 학술대회',
        jp: '2021 第10次 大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: '모발이식 수술 후 나타나는 꼬인 모발 (kinky hair)의 원인에 대한\n조직학적 분석',
        jp: '植毛後に現れる縮れっ毛の原因に関する組織学的分析',
      },
    },
    {
      date: '2021.10.23',
      type: '수상',
      event: {
        ko: 'ISHRS 29th World Congress, Lisbon, Portugal',
        jp: 'ISHRS 29th World Congress, Lisbon, Portugal',
      },
      title: {
        ko: 'Best Methodology CSI Presentation Award',
        jp: 'Best Methodology CSI Presentation Award',
      },
    },
    {
      date: '2021.10.21',
      type: '발표',
      event: {
        ko: 'ISHRS 29th World Congress, Lisbon, Portugal',
        jp: 'ISHRS 29th World Congress, Lisbon, Portugal',
      },
      title: {
        ko: 'Histological Analysis for the Cause of Kinky Hair after Hair Transplantation',
        jp: 'Histological Analysis for the Cause of Kinky Hair after Hair Transplantation',
      },
    },
    {
      date: '2021.10.10',
      type: '발표',
      event: {
        ko: '제16회 부산미용성형심포지엄 (BAPS)',
        jp: '第16回 釜山美容整形シンポジウム(BAPS)',
      },
      title: {
        ko: 'FUE(모낭단위채취술)을 이용한 여성환자의 이마라인 교정',
        jp: 'FUE(毛包単位採取術)を用いた女性患者のヘアライン矯正',
      },
    },
    {
      date: '2021.07.11',
      type: '발표',
      event: {
        ko: 'Aesthetic Plastic Surgery\n2021',
        jp: 'Aesthetic Plastic Surgery\n2021',
      },
      title: {
        ko: 'Changing the Direction of Hair in Hairline Correction',
        jp: 'Changing the Direction of Hair in Hairline Correction',
      },
    },
    {
      date: '2021.06.02',
      type: '수상',
      event: {
        ko: '제14차 대한모발이식학회 학술대회',
        jp: '第14回大韓毛髪移植学会学術大会',
      },
      title: {
        ko: '최우수발표상',
        jp: '最優秀発表賞',
      },
    },
  ],
  2019: [
    {
      date: '2019.05.19',
      type: '발표',
      event: {
        ko: 'International Congress of the KSHRS 2019',
        jp: 'International Congress of the KSHRS 2019',
      },
      title: {
        ko: 'Tips to Make Natural Hairline on Design and Implantation',
        jp: 'Tips to Make Natural Hairline on Design and Implantation',
      },
    },
    {
      date: '2019.04.07',
      type: '발표',
      event: {
        ko: 'Aesthetic Plastic Surgery 2019',
        jp: 'Aesthetic Plastic Surgery 2019',
      },
      title: {
        ko: 'How to design a female hairline',
        jp: 'How to design a female hairline',
      },
    },
  ],
  2018: [
    {
      date: '2018.03.06',
      type: '발표',
      event: {
        ko: '대한성형외과학회 항노화성형연구회\n세미나',
        jp: '大韓整形外科学会 抗老化整形研究会セミナー',
      },
      title: {
        ko: '이상적인 헤어라인 디자인',
        jp: '理想的なヘアラインのデザイン',
      },
    },
  ],
  2017: [
    {
      date: '2017.11.11',
      type: '발표',
      event: {
        ko: 'PRS Korea 2017',
        jp: 'PRS Korea 2017',
      },
      title: {
        ko: 'Female hairline correction with FUE',
        jp: 'Female hairline correction with FUE',
      },
    },
    {
      date: '2017.10.15',
      type: '발표',
      event: {
        ko: '2017년 제16회 대한성형외과의사회 추계 연수강좌',
        jp: '2017年 第16回大韓整形外科医会 秋季研修講座',
      },
      title: {
        ko: 'Female hairline correction',
        jp: 'Female hairline correction',
      },
    },
    {
      date: '2017.10.06',
      type: '발표',
      event: {
        ko: 'ISHRS 2017 25th World Congress, Prague, The Czech Republic',
        jp: 'ISHRS 2017 25th World Congress, Prague, The Czech Republic',
      },
      title: {
        ko: 'Simultaneous Correction of Female Hairline Using Supraorbital Nerve Sparing Reduction Foreheadplasty with FUE Hair Transplantation',
        jp: 'Simultaneous Correction of Female Hairline Using Supraorbital Nerve Sparing Reduction Foreheadplasty with FUE Hair Transplantation',
      },
    },
    {
      date: '2017.05.20',
      type: '발표',
      event: {
        ko: 'The 9th Daegu Oriental Blepharoplasty and Periocular Cosmetic Surgery Symposium',
        jp: 'The 9th Daegu Oriental Blepharoplasty and Periocular Cosmetic Surgery Symposium',
      },
      title: {
        ko: 'Hairline Lowering with Reduction Foreheadplasty\n(Live surgery)',
        jp: 'Hairline Lowering with Reduction Foreheadplasty\n(Live surgery)',
      },
    },
  ],
  2016: [
    {
      date: '2016.11.18',
      type: '발표',
      event: {
        ko: 'PRS KOREA 2016(대한성형외과학\n회 창립 50주년 기념학술대회)',
        jp: 'PRS KOREA 2016 (大韓整形外科学会創立50周年記念学術集会)',
      },
      title: {
        ko: 'Female hairline correction with hair transplantation and reduction foreheadplasty (simultaneously or separately)',
        jp: 'Female hairline correction with hair transplantation and reduction foreheadplasty (simultaneously or separately)',
      },
    },
    {
      date: '2016.10.24',
      type: '발표',
      event: {
        ko: '제8회 대한성형외과학회 모발성형연구회 심포지움',
        jp: '第8回大韓整形外科学会 毛髪整形研究会シンポジウム',
      },
      title: {
        ko: 'Reduction foreheadplasty sparing deep branch of supraorbital nerve; hair transplantation at the same time',
        jp: 'Reduction foreheadplasty sparing deep branch of supraorbital nerve; hair transplantation at the same time',
      },
    },
    {
      date: '2016.09.19',
      type: '발표',
      event: {
        ko: '제19차 모발이식학회 집담회',
        jp: '第19回毛髪移植学会集談会',
      },
      title: {
        ko: '이마축소술과 모발이식 동시 시행의 득과 실',
        jp: '額縮小術と植毛同時に行うことでの失得',
      },
    },
    {
      date: '2016.03.13',
      type: '발표',
      event: {
        ko: 'Aesthetic Plastic Surgery 2016',
        jp: 'Aesthetic Plastic Surgery 2016',
      },
      title: {
        ko: 'Simultaneous hairline correction with reduction foreheadplasty and FUE hair transplantation',
        jp: 'Simultaneous hairline correction with reduction foreheadplasty and FUE hair transplantation',
      },
    },
  ],
  2015: [
    {
      date: '2015.09.09',
      type: '저널',
      event: {
        ko: 'Post-traumatic neuroma after hair transplantation',
        jp: 'Post-traumatic neuroma after hair transplantation',
      },
      title: {
        ko: 'Dermatol Surg',
        jp: 'Dermatol Surg',
      },
    },
    {
      date: '2015.05.10',
      type: '발표',
      event: {
        ko: '제5차 모발이식학회 학술대회',
        jp: '第5次 毛髪移植学会 学術集会',
      },
      title: {
        ko: 'Surgical assistant program - 모낭분리와 저장 및 삽입과정',
        jp: 'Surgical assistant program - 毛包分離と保存及び挿入過程',
      },
    },
    {
      date: '2015.03.29',
      type: '발표',
      event: {
        ko: 'Aesthetic Plastic Surgery 2015',
        jp: 'Aesthetic Plastic Surgery 2015',
      },
      title: {
        ko: 'Female hairline lowering with hair transplantation',
        jp: 'Female hairline lowering with hair transplantation',
      },
    },
  ],
  2014: [
    {
      date: '2014.11.09',
      type: '발표',
      event: {
        ko: '2014 KSPRS International',
        jp: '2014 KSPRS International',
      },
      title: {
        ko: 'Reconstruction of shifted sideburns after face lift',
        jp: 'Reconstruction of shifted sideburns after face lift',
      },
    },
    {
      date: '2014.10.11',
      type: '발표',
      event: {
        ko: 'ISHRS 22th Annual Scientific Meeting, Kuala Lumpur, Malaysia',
        jp: 'ISHRS 22th Annual Scientific Meeting, Kuala Lumpur, Malaysia',
      },
      title: {
        ko: 'Various Cases of Secondary Female Hairline Corrections for Unsatisfied Results',
        jp: 'Various Cases of Secondary Female Hairline Corrections for Unsatisfied Results',
      },
    },
    {
      date: '2014.09.29',
      type: '발표',
      event: {
        ko: '대한모발이식학회 제12차 모발이식연구회',
        jp: '大韓毛髪移植学会 第12次毛髪移植研究会',
      },
      title: {
        ko: 'Journal Review - Are hair transplants permanent?',
        jp: 'Journal Review - Are hair transplants permanent?',
      },
    },
    {
      date: '2014.05.11',
      type: '발표',
      event: {
        ko: '제4차 대한모발이식학회 학술대회',
        jp: '第4次 大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: 'Surgical Assistant Program - 모낭삽입과정',
        jp: 'Surgical Assistant Program - 毛包挿入過程',
      },
    },
    {
      date: '2014.04.26',
      type: '발표',
      event: {
        ko: 'Aesthetic Plastic Surgery 2014',
        jp: 'Aesthetic Plastic Surgery 2014',
      },
      title: {
        ko: 'Hair: Facial Contouring by Hair Transplantation Session - Solutions for complications',
        jp: 'Hair: Facial Contouring by Hair Transplantation Session - Solutions for complications',
      },
    },
    {
      date: '2014.01.27',
      type: '발표',
      event: {
        ko: '대한모발이식학회 제9차 모발이식연구회',
        jp: '大韓毛髪移植学会 第９次毛髪移植研究会',
      },
      title: {
        ko: '2013 ISHRS Morbidity & Mortality Conference Review',
        jp: '2013 ISHRS Morbidity & Mortality Conference Review',
      },
    },
    {
      date: '2014',
      type: '저널',
      event: {
        ko: 'Comparison between the survival rate of original single follicular units and single follicles divided from two or three-hair units',
        jp: 'Comparison between the survival rate of original single follicular units and single follicles divided from two or three-hair units',
      },
      title: {
        ko: "Hair Transplant Forum Int'l.",
        jp: "Hair Transplant Forum Int'l.",
      },
    },
  ],
  2013: [
    {
      date: '2013.10.23',
      type: '발표',
      event: {
        ko: 'ISHRS 21th Annual Scientific Meeting, San Francisco, USA',
        jp: 'ISHRS 21th Annual Scientific Meeting, San Francisco, USA',
      },
      title: {
        ko: 'Using single follicles divided from multi-hair follicular unit for natural result in Asians',
        jp: 'Using single follicles divided from multi-hair follicular unit for natural result in Asians',
      },
    },
    {
      date: '2013.05',
      type: '발표',
      event: {
        ko: '제3차 대한모발이식학회 학술대회',
        jp: '第3次 大韓毛髪移植学会 学術集会',
      },
      title: {
        ko: '환자와 의료인 모두의 안전을 위한 수술 전 감염검사\nPreoperative laboratory testing for detecting infectious diseases',
        jp: '患者と医療関係者の両方の安全のための手術前の感染検査\nPreoperative laboratory testing for detecting infectious diseases',
      },
    },
    {
      date: '2013.03',
      type: '발표',
      event: {
        ko: '2013년 대한외과학회 울산외과지회 - 초청강연',
        jp: '2013年大韓外科学会 蔚山外科支会- 招請講演',
      },
      title: {
        ko: '매력발산은 모(毛)에서부터',
        jp: '魅力の発散は毛から',
      },
    },
    {
      date: '2013',
      type: '저널',
      event: {
        ko: "How I do it: Handy tips for slit depth control Hair Transplant Forum Int'l",
        jp: "How I do it: Handy tips for slit depth control Hair Transplant Forum Int'l",
      },
      title: {
        ko: '',
        jp: '',
      },
    },
  ],
  2012: [
    {
      date: '2012.09',
      type: '발표',
      event: {
        ko: '제6회 대한성형외과학회 모발성형연구회 정기 심포지움',
        jp: '第６回大韓整形外科学会 毛髪整形研究会 定期シンポジウム',
      },
      title: {
        ko: '자연스러운 결과를 위해 2,3개 모발 FU를 단일모로 분리하여 이식한 사례들에 대한 고찰 Using single follicles divided from multi-hair FU for natural result',
        jp: '自然な結果のために2、3個の毛髪FUを単一毛に分離して移植する事例に対する考察 Using single follicles divided from multi-hair FU for natural result',
      },
    },
    {
      date: '2012',
      type: '연구',
      event: {
        ko: 'ISHRS (International Society of Hair Restoration Surgery) Research Grant',
        jp: 'ISHRS (International Society of Hair Restoration Surgery) Research Grant',
      },
      title: {
        ko: 'Comparison between the survival rate of original single follicular units and single follicles divided from two or three-hair units',
        jp: 'Comparison between the survival rate of original single follicular units and single follicles divided from two or three-hair units',
      },
    },
    {
      date: '2012',
      type: '역서',
      event: {
        ko: "Unger's 모발이식 Hair Transplantation 5th edition 가본의학",
        jp: 'Unger‘s毛髪移植 Hair Transplantation 5thedition GABON MEDICAL BOOK',
      },
      title: {
        ko: '',
        jp: '',
      },
    },
  ],
  2011: [
    {
      date: '2011.11',
      type: '발표',
      event: {
        ko: '제69차 대한성형외과학회 학술대회',
        jp: '第69次 大韓整形外科学会 学術集会',
      },
      title: {
        ko: '모발이식을 시행한 후 발생한 부자연스러운 헤어라인을 제모레이저를 이용하여 교정하는 방법\nCorrection of unnatural hairline from hair transplantation surgery using a hair removal laser',
        jp: '植毛後に発生した不自然なヘアラインを除毛レーザーを用いて矯正する方法\nCorrection of unnatural hairline from hair transplantation surgery using a hair removal laser',
      },
    },
  ],
};

// 학술활동 타입 번역
export const activityTypeTranslations = {
  발표: { ko: '발표', jp: '発表' },
  논문: { ko: '논문', jp: '論文' },
  저널: { ko: '저널', jp: 'ジャ\nーナル' },
  수상: { ko: '수상', jp: '受賞' },
  연구: { ko: '연구', jp: '研究' },
  역서: { ko: '역서', jp: '暦書' },
} as const;
