"use client"

import { useState, useMemo } from "react"

// 연도별 데이터 타입 정의
export interface PresentationItem {
  date: string
  title: string
  description: string
}

export interface PaperItem {
  date: string
  title: string
  journal: string
  authors: string
}

export interface YearData {
  presentations: PresentationItem[]
  papers: PaperItem[]
}

// 연도별 데이터 - 실제로는 API에서 가져올 수 있음
const HISTORY_DATA: Record<string, YearData> = {
  "2024": {
    presentations: [
      {
        date: "2024.03",
        title: "국제모발이식학회 (ISHRS) 정기 학회",
        description: '"Advanced FUE Techniques for Asian Hair Transplant"'
      },
      {
        date: "2024.06", 
        title: "대한성형외과학회 춘계 학술대회",
        description: '"모발이식 후 관리의 중요성과 최신 동향"'
      },
      {
        date: "2024.09",
        title: "대한모발이식학회 정기 학술대회", 
        description: '"여성 탈모 치료의 새로운 접근법"'
      }
    ],
    papers: [
      {
        date: "2024.02",
        title: "Hair Transplantation in Asian Patients: A Comprehensive Review",
        journal: "Journal of Cosmetic Dermatology, Vol. 23, Issue 2",
        authors: "신승규, 박수호, 김나래 외"
      },
      {
        date: "2024.07",
        title: "Minimally Invasive Hairline Correction: Long-term Follow-up Results",
        journal: "Aesthetic Plastic Surgery, Vol. 48, Issue 4", 
        authors: "박수호, 신승규 외"
      }
    ]
  },
  "2023": {
    presentations: [
      {
        date: "2023.05",
        title: "아시아태평양 모발이식학회 연례대회",
        description: '"Hairline Design Principles for Asian Patients"'
      },
      {
        date: "2023.08",
        title: "대한성형외과학회 하계 심포지엄",
        description: '"모발이식의 최신 트렌드와 기법"'
      },
      {
        date: "2023.11", 
        title: "국제모발이식학회 (ISHRS) 워크샵",
        description: '"Robotic Hair Transplantation: Current Status"'
      }
    ],
    papers: [
      {
        date: "2023.04",
        title: "Comparative Analysis of FUE vs FUT in Asian Population",
        journal: "Dermatologic Surgery, Vol. 49, Issue 4",
        authors: "김나래, 박수호, 신승규"
      },
      {
        date: "2023.10",
        title: "Post-operative Care Protocol for Hair Transplant Patients",
        journal: "International Journal of Dermatology, Vol. 62, Issue 10",
        authors: "신승규, 김나래 외"
      }
    ]
  },
  "2022": {
    presentations: [
      {
        date: "2022.03",
        title: "World Congress of Hair Restoration Surgery",
        description: '"Innovation in Follicular Unit Extraction"'
      },
      {
        date: "2022.07",
        title: "대한모발이식학회 정기총회",
        description: '"모발이식 결과 최적화를 위한 전략"'
      }
    ],
    papers: [
      {
        date: "2022.06",
        title: "Long-term Survival Rate of Transplanted Hair Follicles",
        journal: "Hair Transplant Forum International, Vol. 32, Issue 3",
        authors: "박수호, 신승규, 김나래"
      },
      {
        date: "2022.12",
        title: "Scalp Micropigmentation as Adjuvant Therapy",
        journal: "Journal of Cosmetic and Laser Therapy, Vol. 24, Issue 8",
        authors: "김나래, 신승규 외"
      }
    ]
  },
  "2021": {
    presentations: [
      {
        date: "2021.04",
        title: "대한성형외과학회 정기학술대회",
        description: '"COVID-19 시대의 안전한 모발이식 프로토콜"'
      },
      {
        date: "2021.09",
        title: "Virtual ISHRS Annual Meeting",
        description: '"Density Optimization in Hair Transplantation"'
      }
    ],
    papers: [
      {
        date: "2021.03",
        title: "Safety Protocols for Hair Transplant During Pandemic",
        journal: "Plastic and Reconstructive Surgery Global Open, Vol. 9, Issue 3",
        authors: "신승규, 박수호, 김나래"
      }
    ]
  },
  "2020": {
    presentations: [
      {
        date: "2020.02",
        title: "대한모발이식학회 창립 기념 심포지엄",
        description: '"한국인 모발이식의 과거, 현재, 미래"'
      },
      {
        date: "2020.10",
        title: "ISHRS Virtual Workshop Series",
        description: '"Graft Preservation and Storage Techniques"'
      }
    ],
    papers: [
      {
        date: "2020.05",
        title: "Establishing Standards for Hair Transplant in Korea", 
        journal: "Korean Journal of Dermatology, Vol. 58, Issue 5",
        authors: "박수호, 김나래, 신승규 외"
      },
      {
        date: "2020.11",
        title: "Patient Selection Criteria for Optimal Results",
        journal: "Facial Plastic Surgery, Vol. 36, Issue 6",
        authors: "김나래, 신승규, 박수호"
      }
    ]
  }
}

/**
 * 연혁 데이터와 상태를 관리하는 커스텀 훅
 */
export function useHistoryData() {
  console.log("[useHistoryData] 연혁 데이터 훅 초기화")
  
  const [selectedYear, setSelectedYear] = useState("2024")
  
  // 사용 가능한 연도 목록
  const availableYears = useMemo(() => {
    const years = Object.keys(HISTORY_DATA).sort((a, b) => parseInt(b) - parseInt(a))
    console.log("[useHistoryData/가능한연도] 연도 목록:", years)
    return years
  }, [])
  
  // 현재 선택된 연도의 데이터
  const currentData = useMemo(() => {
    const data = HISTORY_DATA[selectedYear] || { presentations: [], papers: [] }
    console.log(`[useHistoryData/현재데이터] ${selectedYear}년 데이터:`, data)
    return data
  }, [selectedYear])
  
  // 연도 선택 핸들러
  const handleYearSelect = (year: string) => {
    console.log(`[useHistoryData/연도선택] ${selectedYear} -> ${year}`)
    setSelectedYear(year)
  }
  
  return {
    selectedYear,
    availableYears,
    currentData,
    handleYearSelect,
  }
}