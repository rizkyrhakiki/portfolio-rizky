import Container from '@/components/ui/Container';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Product Built' },
  { value: '30+', label: 'Feature Designed' },
];

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative">
            {/* back shape */}

            <img
              src="/avatar.png"
              alt="Rizky avatar"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name + Role */}
          <h1 className="mt-7 text-4xl sm:text-5xl tracking-tight">
            Rizky Rahmat Hakiki
          </h1>

          <p className="mt-3 text-xl sm:text-3xl font-bold">
            Product Designer <span className="text-white/70">|</span> UI/UX
            Designer
          </p>

          {/* Social */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <a
              href="https://linkedin.com/in/rizkyrahmathakiki/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center">
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="h-4 w-4"
                />
              </span>
              linkedin.com/in/rizkyrahmathakiki/
            </a>

            <span className="hidden sm:inline text-white/30">•</span>

            <a
              href="https://dribbble.com/rizkyrhakiki"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded">
                <img
                  src="/icons/dribbble.svg"
                  alt="LinkedIn"
                  className="h-4 w-4"
                />
              </span>
              dribbble.com/rizkyrhakiki
            </a>
          </div>

          {/* Big Card */}
          <div className="mt-10 w-full max-w-4xl rounded-[32px] border border-white/20 bg-black/40 px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="text-2xl sm:text-2xl font-semibold leading-tight">
              Designing Functional Solutions that
              <br className="hidden sm:block" />
              Connect Users and Businesses Seamlessly
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base text-lg leading-relaxed text-white/70">
              Hi, I&apos;m Rizky, a designer who excels in creating functional,
              innovative solutions that meet both user and business needs. With
              experience in fintech, HRIS, B2B, and more, I&apos;m a quick
              learner who easily adapts to diverse industries. My strong
              communication skills ensure effective collaboration, bringing
              ideas to life seamlessly.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl sm:text-6xl font-extrabold text-emerald-400">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm tracking-wide text-white/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
