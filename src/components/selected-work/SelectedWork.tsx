import Container from '@/components/ui/Container';
import { selectedWorks } from '@/data/selectedWork';
import CompanySection from './CompanySection';

export default function SelectedWork() {
  return (
    <section className="mt-14 sm:mt-20">
      <Container>
        <h2 className="text-center text-3xl sm:text-3xl font-semibold">
          Selected Work
        </h2>

        <div className="mt-8 space-y-12">
          {selectedWorks.map((c) => (
            <CompanySection key={c.id} company={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
