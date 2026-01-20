export type CaseItem = {
  type: 'case';
  id: string;
  number: number;
  title: string;
  image: string;
  briefTitle: string;
  brief: string;
  goals: string[];
  satisfaction?: number;
  ctaLabel?: string;
  ctaHref?: string;
};

export type GalleryItem = {
  type: 'gallery';
  id: string;
  number: number;
  title: string;
  image: string;
  description?: string;
};

export type WorkItem = CaseItem | GalleryItem;

export type CompanyOverview = {
  type: 'overview';
  name: string;
  logo: string;
  background?: string;
  bgMark?: string;
  overviewImage: string;
  headline: string;
  bullets: string[];
};

export type CaseListBlock = {
  type: 'caseList';
  items: CaseItem[];
};

export type GalleryRowBlock = {
  type: 'galleryRow';
  items: GalleryItem[];
};

export type CompanyBlock = CompanyOverview | CaseListBlock | GalleryRowBlock;

export type CompanyWork = {
  id: string;
  blocks: CompanyBlock[];
};

export const selectedWorks: CompanyWork[] = [
  {
    id: 'bri',
    blocks: [
      {
        type: 'overview',
        name: 'BRImo',
        logo: '/companies/bri/logo.svg',
        background: '/companies/bri/bg.png',
        bgMark: '/companies/bri/mark.svg',
        overviewImage: '/companies/bri/overview.png',
        headline:
          'Revamp existing features to catch up and explore new features to create a competitive edge.',
        bullets: [
          'Revamp 3 features that will have an impact on increasing user acquisition and improving user retention.',
          'Build 3 new features that will have an impact on increasing user acquisition, boosting transactions, and enhancing user retention.',
          'Explore >5 new features that can assist the product and business teams in developing innovative solutions to gain a competitive edge.',
        ],
      },
      {
        type: 'caseList',
        items: [
          {
            type: 'case',
            id: 'receipt-smart-reco',
            number: 1,
            title: 'Rework Receipt and Smart Recommendation',
            image: '/companies/bri/work-1.png',
            briefTitle: 'Project Brief:',
            brief:
              'To drive product promotion and increase repeat transactions, the business team plans to add a smart recommendation feature on the receipt page.',
            goals: [
              'Increase the number of repeat transactions',
              'Enhance user acquisition for a product (e.g., account openings, investments)',
            ],
            satisfaction: 88,
            ctaLabel: 'Project Details',
            ctaHref: '/projects/receipt-smart-reco',
          },
        ],
      },
      {
        type: 'galleryRow',
        items: [
          {
            type: 'gallery',
            id: 'alih-transfer',
            number: 2,
            title: 'Alih Transfer',
            image: '/companies/bri/work-2.png',
            description: 'Contribute to Bank BRI retain CASA...',
          },
          {
            type: 'gallery',
            id: 'brimo-pocket',
            number: 3,
            title: 'BRImo Pocket',
            image: '/companies/bri/work-3.png',
            description: 'Contribute by retaining CASA...',
          },
          {
            type: 'gallery',
            id: 'rapor-keuangan',
            number: 3,
            title: 'Rapor Keuangan',
            image: '/companies/bri/work-4.png',
            description:
              'Increase user acquisition through Financial Reports...',
          },
        ],
      },
    ],
  },

  // ✅ Company tanpa case study sama sekali:
  {
    id: 'company-no-case',
    blocks: [
      {
        type: 'overview',
        name: 'BRImerchant',
        logo: '/companies/bri-merchant/logo.png',
        overviewImage: '/companies/bri-merchant/overview.png',
        headline: 'Short overview headline...',
        bullets: ['Point 1', 'Point 2'],
      },
      {
        type: 'galleryRow',
        items: [
          {
            type: 'gallery',
            id: 'x-1',
            number: 1,
            title: 'Feature A',
            image: '/companies/bri-merchant/work-1.png',
          },
          {
            type: 'gallery',
            id: 'x-2',
            number: 2,
            title: 'Feature B',
            image: '/companies/bri-merchant/work-2.png',
          },
        ],
      },
    ],
  },
];
