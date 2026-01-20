import type { WorkItem } from '@/data/selectedWork';

type GalleryItem = Extract<WorkItem, { type: 'gallery' }>;

export default function WorkItemGallery({
  item,
  variant = 'scroll',
}: {
  item: GalleryItem;
  variant?: 'scroll' | 'grid';
}) {
  return (
    <div
      className={[
        'rounded-[24px]',
        variant === 'scroll' ? 'w-[340px] shrink-0' : 'w-full',
      ].join(' ')}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 text-sm font-semibold">
          {item.number}
        </span>
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>

      {/* image area: dibuat konsisten & fill */}
      <div className="mt-5 rounded-2xl bg-black/30">
        <img
          src={item.image}
          alt={item.title}
          className="w-full rounded-xl object-cover"
        />
      </div>

      {item.description ? (
        <p className="mt-4 text-md leading-relaxed text-white/70">
          {item.description}
        </p>
      ) : null}
    </div>
  );
}
