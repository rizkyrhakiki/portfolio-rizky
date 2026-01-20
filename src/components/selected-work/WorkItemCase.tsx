import type { WorkItem } from '@/data/selectedWork';

type CaseItem = Extract<WorkItem, { type: 'case' }>;

export default function WorkItemCase({ item }: { item: CaseItem }) {
  return (
    <div className="rounded-[24px] p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 text-md font-semibold">
          {item.number}
        </span>
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-start">
        {/* Image */}
        <div className="rounded-2xl bg-black/30">
          <img
            src={item.image}
            alt={item.title}
            className="w-full rounded-xl"
          />
        </div>

        {/* Text */}
        <div>
          <div className="text-md font-semibold">{item.briefTitle}</div>
          <p className="mt-2 text-md text-white/80">{item.brief}</p>

          <div className="mt-4 text-md font-semibold">Goals:</div>
          <ul className="mt-2 space-y-2 text-md text-white/80">
            {item.goals.map((g, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                <span>{g}</span>
              </li>
            ))}
          </ul>

          {typeof item.satisfaction === 'number' ? (
            <div className="mt-4 text-md text-white/80">
              <span className="font-semibold">Satisfaction score:</span>{' '}
              <span className="font-extrabold">{item.satisfaction}</span>
            </div>
          ) : null}

          {item.ctaHref ? (
            <a
              href={item.ctaHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm hover:bg-white/10 transition"
            >
              {item.ctaLabel ?? 'Project Details'} <span aria-hidden>↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
