export interface NavigationItem {
  title: string
  href?: string // href를 선택적으로 만들어서 메인 메뉴는 클릭 불가능하게
  submenu?: Array<{
    title: string
    href: string
  }>
}

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    title: "바날소개",
    // href 없음 - 클릭 불가능, 서브메뉴만 사용
    submenu: [
      { title: "바날소개", href: "/about" },
      { title: "의료진소개", href: "/doctors" },
      { title: "진료안내", href: "/treatment-guide" },
    ],
  },
  {
    title: "모발이식",
    // href 없음 - 클릭 불가능, 서브메뉴만 사용
    submenu: [
      { title: "헤어라인", href: "/hair-transplant/hairline" },
      { title: "재수술과 흉터이식", href: "/hair-transplant/reoperation" },
      { title: "정수리 모발이식", href: "/hair-transplant/crown" },
      { title: "절개와 비절개", href: "/hair-transplant/incision" },
    ],
  },
  {
    title: "이마축소",
    // href 없음 - 클릭 불가능, 서브메뉴만 사용
    submenu: [
      { title: "이마축소와 모발이식", href: "/forehead/hair-transplant" },
      { title: "이마축소 흉터 줄이는 법", href: "/forehead/scar-reduction" },
    ],
  },
  {
    title: "두피치료",
    href: "/scalp-treatment",
    // 서브메뉴 없음 - 직접 클릭 가능
  },
  {
    title: "수술전후",
    href: "/before-after",
    // 서브메뉴 없음 - 직접 클릭 가능
  },
]
