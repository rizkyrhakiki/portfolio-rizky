import { ReactNode } from 'react';

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
  description?: ReactNode;
  span?: 'full' | 2;
};

export type WorkItem = CaseItem | GalleryItem;

export type CompanyOverview = {
  type: 'overview';
  name: string;
  logo: string;
  background?: string;
  bgMark?: string;
  overviewImage: string;
  headline: ReactNode;
  bullets: ReactNode[];
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
        logo: '/companies/bri/logo.png',
        background: '/companies/bri/bg.png',
        bgMark: '/companies/bri/mark.svg',
        overviewImage: '/companies/bri/overview.png',
        headline: (
          <>
            Revamp existing features to{' '}
            <strong className="text-white">catch up</strong> and explore new
            features to{' '}
            <strong className="text-white">create a competitive edge</strong>.
          </>
        ),

        bullets: [
          <>
            <strong className="text-white">Revamp 3 features </strong>that will
            have an{' '}
            <strong className="text-white">
              impact on increasing user acquisition and improving user
              retention.
            </strong>
          </>,
          <>
            <strong className="text-white">Build 3 new features </strong>that
            will have an impact on{' '}
            <strong className="text-white">
              increasing user acquisition, boosting transactions, and enhancing
              user retention.
            </strong>
          </>,
          <>
            <strong className="text-white">
              Explore more than 5 new features{' '}
            </strong>
            that can assist the product and business teams in{' '}
            <strong className="text-white">
              developing innovative solutions to gain a competitive edge.
            </strong>
          </>,
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
            description: (
              <>
                Contribute to Bank BRI{' '}
                <strong className="text-white">retain CASA</strong> by
                redirecting transfers that would otherwise go to other banks to
                stay with Bank BRI if the user holds an account with them.
              </>
            ),
          },
          {
            type: 'gallery',
            id: 'brimo-pocket',
            number: 3,
            title: 'BRImo Pocket',
            image: '/companies/bri/work-3.png',
            description: (
              <>
                Contribute to Bank BRI{' '}
                <strong className="text-white">
                  retaining CASA, increasing user acquisition, and personalizing
                  user experiences
                </strong>{' '}
                through the creation of specialized accounts for customer needs
                or budgeting.
              </>
            ),
          },
          {
            type: 'gallery',
            id: 'rapor-keuangan',
            number: 3,
            title: 'Rapor Keuangan',
            image: '/companies/bri/work-4.png',
            description: (
              <>
                Contribute to Bank BRI{' '}
                <strong className="text-white">
                  increasing user acquisition
                </strong>{' '}
                through Financial Reports. These reports are financial records
                of BRImo users over a specific period that can be shared on
                customers' social media.
              </>
            ),
          },
        ],
      },
    ],
  },

  // ✅ Company tanpa case study sama sekali:
  {
    id: 'bri-merchant',
    blocks: [
      {
        type: 'overview',
        name: 'BRImerchant',
        logo: '/companies/bri-merchant/logo.png',
        overviewImage: '/companies/bri-merchant/overview.png',
        headline:
          'Revamp and rebranding BRImerchant. Improve all experience and business needs.',
        bullets: [
          <>
            <strong className="text-white">Revamp the homepage </strong> to
            include essential features that represent changes in BRImerchant and
            address user issues with the information presented on the homepage.
          </>,
          <>
            <strong className="text-white">
              Design a new dynamic QRIS feature
            </strong>{' '}
            to help{' '}
            <strong className="text-white">increase user acquisition </strong>
            for QRIS merchants (currently more than 3 million users).
          </>,
          <>
            <strong className="text-white">Explore new features </strong> that
            can help the merchant team{' '}
            <strong className="text-white">
              achieve differentiation from competitors.
            </strong>
          </>,
        ],
      },
      {
        type: 'galleryRow',
        items: [
          {
            type: 'gallery',
            id: 'qris-dinamis',
            number: 1,
            title: 'QRIS Dinamis',
            image: '/companies/bri-merchant/work-1.png',
          },
          {
            type: 'gallery',
            id: 'pos-katalog',
            number: 2,
            title: 'POS & Katalog',
            image: '/companies/bri-merchant/work-2.png',
          },
        ],
      },
    ],
  },
  {
    id: 'telkomsel',
    blocks: [
      {
        type: 'overview',
        name: 'Telkomsel',
        logo: '/companies/telkomsel/logo.png',
        bgMark: '/companies/telkomsel/mark.svg',
        overviewImage: '/companies/telkomsel/overview.png',
        headline:
          'Contributing to the advancement of digitalization and automation within Telkomsel business and organizational processes',
        bullets: [
          <>
            <strong className="text-white">
              Digitize Telkomsel's internal business processes{' '}
            </strong>{' '}
            to ensure that all business processes and log histories are
            effectively stored and managed.
          </>,
          <>
            <strong className="text-white">Contribute to automating</strong>{' '}
            manual business processes to{' '}
            <strong className="text-white">
              enhance workflow efficiency and increase processing speed.
            </strong>
          </>,
          <>
            <strong className="text-white">Revamp</strong> tthe existing app{' '}
            <strong className="text-white">
              to enhance visual design and improve user experience.
            </strong>
          </>,
        ],
      },
      {
        type: 'galleryRow',
        items: [
          {
            type: 'gallery',
            id: 'portal',
            number: 1,
            title: 'PORTAL',
            image: '/companies/telkomsel/work-1.png',
          },
          {
            type: 'gallery',
            id: 'vsm',
            number: 2,
            title: 'Visitor Management System',
            image: '/companies/telkomsel/work-2.png',
          },
          {
            type: 'gallery',
            id: 'building+',
            number: 3,
            title: 'Building+',
            image: '/companies/telkomsel/work-3.png',
            span: 'full',
          },
        ],
      },
    ],
  },
  {
    id: 'wlb',
    blocks: [
      {
        type: 'overview',
        name: 'WorkLifeAndBeyond',
        logo: '/companies/wlb/logo.png',
        bgMark: '/companies/wlb/mark.svg',
        overviewImage: '/companies/wlb/overview.png',
        headline:
          'Designing and build one stop solution HC Ecosystem products on web and mobile platforms.',
        bullets: [
          <>
            <strong className="text-white">Build a flagship product </strong>{' '}
            that attracts clients and investors, leading to the company's{' '}
            <strong className="text-white">acquisition by ESQ Group </strong>and
            securing acquisition by the government specifically the{' '}
            <strong className="text-white">
              Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi
              Republik Indonesia
            </strong>
          </>,

          <>
            <strong className="text-white">Lead Design System</strong> creation
          </>,
        ],
      },
      {
        type: 'galleryRow',
        items: [
          {
            type: 'gallery',
            id: 'learning',
            number: 1,
            title: 'Learning',
            image: '/companies/wlb/work-1.png',
          },
          {
            type: 'gallery',
            id: 'performance',
            number: 2,
            title: 'Performance Management',
            image: '/companies/wlb/work-2.png',
          },
          {
            type: 'gallery',
            id: 'design-system',
            number: 3,
            title: 'Design System',
            image: '/companies/wlb/work-3.png',
            span: 'full',
          },
        ],
      },
    ],
  },
];
