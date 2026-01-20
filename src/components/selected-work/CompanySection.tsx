import type { CompanyWork, CompanyBlock } from '@/data/selectedWork';
import CompanyOverview from './CompanyOverview';
import WorkItemCase from './WorkItemCase';
import WorkItemGallery from './WorkItemGallery';

export default function CompanySection({ company }: { company: CompanyWork }) {
  return (
    <div className="space-y-8 pb-12">
      {company.blocks.map((b, idx) => (
        <BlockRenderer key={idx} block={b} />
      ))}
      <div className="mt-12 dashed-divider" />
    </div>
  );
}

function BlockRenderer({ block }: { block: CompanyBlock }) {
  if (block.type === 'overview') {
    return <CompanyOverview company={block} />;
  }

  if (block.type === 'caseList') {
    return (
      <div className="space-y-6">
        {block.items.map((it) => (
          <WorkItemCase key={it.id} item={it} />
        ))}
      </div>
    );
  }

  if (block.type === 'galleryRow') {
    const hasFull = block.items.some(
      (it) => it.span === 'full' || it.span === 2
    );
    const count = block.items.length;

    // ✅ dynamic columns
    const cols = hasFull ? 2 : count === 1 ? 1 : count === 2 ? 2 : 3;

    return (
      <>
        {/* Mobile: horizontal scroll */}
        <div className="-mx-4 sm:-mx-6 md:hidden">
          <div className="flex gap-6 overflow-x-auto px-4 sm:px-6 pb-2 scrollbar-hide">
            {block.items.map((it) => (
              <WorkItemGallery key={it.id} item={it} />
            ))}
          </div>
        </div>

        {/* Desktop: grid (dynamic cols + span support) */}
        <div
          className={[
            'hidden md:grid gap-8',
            cols === 1 ? 'md:grid-cols-1' : '',
            cols === 2 ? 'md:grid-cols-2' : '',
            cols === 3 ? 'md:grid-cols-3' : '',
          ].join(' ')}
        >
          {block.items.map((it) => (
            <div
              key={it.id}
              className={
                it.span === 'full'
                  ? 'md:col-span-full'
                  : it.span === 2
                    ? 'md:col-span-2'
                    : 'md:col-span-1'
              }
            >
              <WorkItemGallery item={it} variant="grid" />
            </div>
          ))}
        </div>
      </>
    );
  }

  return null;
}
