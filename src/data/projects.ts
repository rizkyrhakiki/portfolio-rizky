export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  role?: string;
  year?: string;
  tags: string[];
  cover: string; // taruh image di /public/projects/...
  description: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'brimo',
    title: 'Rework Receipt and Smart Recommendation',
    subtitle: 'Dashboard & reporting system',
    role: 'Product Designer (UI/UX)',
    year: '2025',
    tags: ['Dashboard', 'Fintech/Banking', 'Design System'],
    cover: '/projects/ereport-cover.png',
    description:
      'Ringkas tentang project ini. Nanti kamu bisa ganti sesuai case study versi kamu.',
    links: [{ label: 'Behance', href: 'https://www.behance.net/' }],
  },
];
