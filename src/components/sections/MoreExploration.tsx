import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { ReactNode } from 'react';

// 1. Definisikan Tipe Data
type ExplorationItem = {
  title: string;
  desc: ReactNode; // Pakai ReactNode biar bisa nge-bold text di dalam
  image: string;
  ctaLink: string;
};

// 2. Data Dummy (Sesuai Teks di Gambar)
const items: ExplorationItem[] = [
  {
    title: 'Photo Editor Apps',
    image: '/images/photo-editor.png', // Ganti dengan path gambarmu
    ctaLink:
      'https://dribbble.com/shots/14620271-Minimilasim-and-Simple-Photo-Editor-Apps',
    desc: (
      <>
        This is the design result of the challenge from the community that I
        participate in. The goals I want to achieve in this design are
        minimalist exploration, simple, clean design, and of course a good user
        experience. This design reach{' '}
        <strong className="text-white">35,9k views</strong> on dribbble.
      </>
    ),
  },
  {
    title: 'Beauty and Spa Web Profile',
    image: '/images/beauty-spa.png', // Ganti dengan path gambarmu
    ctaLink: 'https://dribbble.com/shots/15898011-Beauty-and-Spa-Web-Profile',
    desc: (
      <>
        This design is a design with the purpose of exploring web profile design
        and structure. The goals I want to achieve in this design are minimalist
        exploration, simple, clean design. This design reach{' '}
        <strong className="text-white">29,3k views</strong> on dribbble.
      </>
    ),
  },
  {
    title: 'Money Management Apps',
    image: '/images/money-app.png', // Ganti dengan path gambarmu
    ctaLink: 'https://dribbble.com/shots/14361350-Money-Manager-Design-Concept',
    desc: (
      <>
        This is the design result of the challenge from the community that I
        participate in. This challenge trains me to think about and explore the
        theme given. The goals I want to achieve in this design are an
        exploration of color gradations, layouts, and a good user experience.
        This design reach <strong className="text-white">19k views</strong> on
        dribbble.
      </>
    ),
  },
];

export default function MoreExploration() {
  return (
    <section className="py-20">
      <Container>
        {/* Title Section (Centered) */}
        <div className="mb-16 text-center">
          <SectionTitle title="More Exploration" />
        </div>

        {/* List Items */}
        <div className="flex flex-col gap-24">
          {items.map((item, index) => {
            // Logika Zig-Zag: Jika index ganjil (1, 3, dst), balik posisinya
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-8 md:gap-16 lg:gap-24 ${
                  isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Text Content Side */}
                <div className="flex-1 space-y-6 text-left">
                  <h3 className="text-2xl font-bold text-white md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-white/60">{item.desc}</p>

                  <div>
                    <a
                      href={item.ctaLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#6355FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5649E0] underline"
                    >
                      Check on dribbble
                      {/* Arrow Icon SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="-mt-0.5"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full flex-1">
                  <div className="relative overflow-hidden rounded-2xl bg-[#1C1C21]">
                    {/* Placeholder img, ganti src sesuai data */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 dashed-divider" />
      </Container>
    </section>
  );
}
