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
    const count = block.items.length;

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

        {/* Desktop: dynamic grid */}
        <div
          className={[
            'hidden md:grid gap-8',
            count === 1 ? 'md:grid-cols-1' : '',
            count === 2 ? 'md:grid-cols-2' : '',
            count >= 3 ? 'md:grid-cols-3' : '',
          ].join(' ')}
        >
          {block.items.map((it) => (
            <WorkItemGallery key={it.id} item={it} variant="grid" />
          ))}
        </div>
      </>
    );
  }

  return null;
}
