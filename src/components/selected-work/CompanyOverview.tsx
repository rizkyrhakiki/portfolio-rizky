import type { CompanyOverview as OverviewBlock } from '@/data/selectedWork';

export default function CompanyOverview({
  company,
}: {
  company: OverviewBlock;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px]">
      {/* watermark */}
      {company.bgMark ? (
        <img
          src={company.bgMark}
          alt=""
          className="pointer-events-none absolute -left-4 top-1/2 hidden -translate-y-1/2 md:block -z-10"
        />
      ) : null}

      <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <img src={company.logo} alt={company.name} className="h-9 w-9" />
            <div className="text-lg font-semibold">{company.name}</div>
          </div>

          <p className="mt-4 text-white/80 font-medium">{company.headline}</p>

          <ul className="mt-4 space-y-3 text-md text-white/80">
            {company.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image */}
        <div className="rounded-2xl p-4">
          <img
            src={company.overviewImage}
            alt={`${company.name} overview`}
            className="w-full rounded-xl object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  );
}
