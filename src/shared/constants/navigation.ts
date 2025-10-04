export interface NavigationItem {
  titleKey: string; // 번역 키로 변경
  href?: string;
  submenu?: Array<{
    titleKey: string; // 번역 키로 변경
    href: string;
  }>;
}

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    titleKey: 'navigation.about.title',
    submenu: [
      { titleKey: 'navigation.about.items.banalIntro', href: '/about' },
      { titleKey: 'navigation.about.items.doctorsIntro', href: '/doctors' },
      {
        titleKey: 'navigation.about.items.treatmentGuide',
        href: '/treatment-guide',
      },
    ],
  },
  {
    titleKey: 'navigation.hairTransplant.title',
    submenu: [
      {
        titleKey: 'navigation.hairTransplant.items.hairline',
        href: '/hair-transplant/hairline',
      },
      {
        titleKey: 'navigation.hairTransplant.items.reoperation',
        href: '/hair-transplant/reoperation',
      },
      {
        titleKey: 'navigation.hairTransplant.items.crown',
        href: '/hair-transplant/crown',
      },
      {
        titleKey: 'navigation.hairTransplant.items.incision',
        href: '/hair-transplant/incision',
      },
    ],
  },
  {
    titleKey: 'navigation.forehead.title',
    submenu: [
      {
        titleKey: 'navigation.forehead.items.withHairTransplant',
        href: '/forehead/hair-transplant',
      },
      {
        titleKey: 'navigation.forehead.items.scarReduction',
        href: '/forehead/scar-reduction',
      },
    ],
  },
  {
    titleKey: 'navigation.scalpTreatment.title',
    href: '/scalp-treatment',
  },
  {
    titleKey: 'navigation.beforeAfter.title',
    href: '/before-after',
  },
];
