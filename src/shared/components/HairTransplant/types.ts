import React from 'react';

export interface Section {
  number: number;
  title: React.ReactNode;
  titleMobile?: React.ReactNode;
  titleMobileSize?: {
    // Optional custom size for mobile title
    width?: number; // mvw units
    height?: number; // mvw units
  };
  titleMobileMinHeight?: number; // Optional minimum height for mobile title (mvw units) - useful for long Japanese text
  titleMarginBottom?: number; // margin-bottom for title (px units)
  mobileHeight?: number; // height for mobile section (mvw units - 375 based)
  numberPosition?: {
    // Responsive position for section number
    mobile?: {
      top?: number; // mvw units from top (mobile)
      right?: number; // mvw units from right (mobile)
      bottom?: number; // mvw units from bottom (mobile)
      left?: number; // mvw units from left (mobile)
    };
    desktop?: {
      top?: number; // vw units from top (desktop)
      right?: number; // vw units from right (desktop)
      bottom?: number; // vw units from bottom (desktop)
      left?: number; // vw units from left (desktop)
    };
  };
  description?: React.ReactNode;
  descriptionMobile?: React.ReactNode;
  descriptionWidth?: number; // Optional width for description (vw units)
  descriptionMarginBottom?: number; // Optional margin-bottom for description (0 to remove margin on mobile)
  sectionPaddingBottom?: number; // Optional padding-bottom for section (0 to remove padding on mobile)
  quote?: React.ReactNode;
  quoteMobile?: React.ReactNode;
  conclusion?: React.ReactNode;
  illustration?: string;
  illustrationSize?: {
    width: number;
    height: number;
  };
  illustrationPosition?: {
    // Optional absolute positioning for desktop
    top?: number; // vw units from top
    right?: number; // vw units from right
    bottom?: number; // vw units from bottom
    left?: number; // vw units from left
  };
  illustrationMobile?: string; // Mobile-specific illustration for section 1
  illustrationMobileSize?: {
    // Optional custom size for mobile illustration
    width?: number; // mvw units
    height?: number; // mvw units
    fullWidth?: boolean; // If true, takes full viewport width (100vw)
  };
  illustrationMobileMargin?: {
    // Optional margins for mobile illustration
    top?: number; // mvw units
    right?: number; // mvw units
    bottom?: number; // mvw units
    left?: number; // mvw units
  };
  images?: {
    main?: string;
    secondary?: string;
  };
  imagesSize?: {
    // Optional size configuration for desktop images
    main?: {
      width: number; // vw units
      height: number; // vw units
    };
    secondary?: {
      width: number; // vw units
      height: number; // vw units
    };
  };
  imagesPosition?: {
    // Optional absolute positioning for images
    main?: {
      top?: number; // vw units
      right?: number; // vw units
      bottom?: number; // vw units
      left?: number; // vw units
    };
    secondary?: {
      top?: number; // vw units
      right?: number; // vw units
      bottom?: number; // vw units
      left?: number; // vw units
    };
  };
  section1RightSize?: {
    // Optional size for section1Right container
    width?: number; // vw units
    height?: number; // vw units
  };
  imagesMobile?: {
    // Mobile-specific images
    main?: string;
    secondary?: string;
  };
  imagesMobileSize?: {
    // Customizable size for mobile images
    mainMaxWidth?: boolean; // true = 100vw for main image, false/undefined = 100% (default)
    secondaryMaxWidth?: boolean; // true = 100vw for secondary image, false/undefined = 100% (default)
    height?: number; // mvw units (applies to both if specific heights not set)
    mainHeight?: number; // Specific height for main image
    secondaryHeight?: number; // Specific height for secondary image
  };
  mobileIllustration?: string;
  svgElements?: {
    container?: string; // SVG in container between title and description
    absolute?: string; // Absolute positioned SVG
  };
  svgElementsSize?: {
    container?: {
      width: number; // vw units
      height: number; // vw units
    };
    absolute?: {
      width: number; // vw units
      height: number; // vw units
    };
  };
  svgElementsPosition?: {
    absolute?: {
      top?: number; // vw units
      right?: number; // vw units
      bottom?: number; // vw units
      left?: number; // vw units
    };
  };
  mobileImages?: {
    illustration?: string | string[]; // Mobile-specific illustration(s)
    illustrationSize?: {
      // Optional custom size for mobile illustration
      width: number; // mvw units
      height: number; // mvw units
    };
  };
}

export interface BeforeAfterData {
  category: string;
  title?: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface BeforeAfterButton {
  text: string;
  href?: string;
  onClick?: () => void;
  width?: number | string; // Optional width for desktop version
}

export interface FeatureCard {
  icon: string; // SVG image path
  title: React.ReactNode; // Support for line breaks
}

export interface SidePreviewData {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
}

export interface ButtonCard {
  image: string;
  alt: string;
  title?: string;
  href?: string; // Optional link URL
  onClick?: () => void; // Optional click handler
}

export interface HairTransplantLayoutProps {
  heroTitle: React.ReactNode;
  heroTitleMobile?: React.ReactNode; // Mobile-specific hero title
  language?: 'KR' | 'JP'; // 언어 정보 추가
  isCrown?: boolean; // Crown 페이지 여부
  isHairline?: boolean; // Hairline 페이지 여부
  isHairTransplant?: boolean; // Hair Transplant 페이지 여부 (일본어일 때 section1Left 높이 894px)
  heroDotPosition?: {
    absolute?: boolean; // Use absolute positioning for dot
    top?: number; // vw units from top (desktop)
    right?: number; // vw units from right (desktop)
    bottom?: number; // vw units from bottom (desktop)
    left?: number; // vw units from left (desktop)
    // Mobile-specific positioning
    mobileTop?: number; // mvw units from top (mobile)
    mobileRight?: number; // mvw units from right (mobile)
    mobileBottom?: number; // mvw units from bottom (mobile)
    mobileLeft?: number; // mvw units from left (mobile)
  };
  heroIllustration?: string;
  heroIllustrationMobile?: string;
  heroIllustrationSize?: {
    width: number; // px units for desktop
    height: number; // px units for desktop
  };
  heroIllustrationPosition?: {
    left?: number; // px units from left for desktop
    right?: number; // px units from right for desktop
  };
  section1: Section;
  section2: Section;
  section3?: Section; // Optional for scarReduction mode
  beforeAfterData: BeforeAfterData;
  beforeAfterButton?: BeforeAfterButton; // Optional button for before/after section
  featuresTitle?: React.ReactNode;
  featuresTitleMobile?: React.ReactNode;
  featureCards?: FeatureCard[];
  sidePreviewData?: SidePreviewData;
  buttonCards?: ButtonCard[]; // Optional button cards section
  scarReduction?: boolean; // Special mode for scar reduction pages
  customMiddleSection?: React.ReactNode; // Custom section between section1 and section2
}
