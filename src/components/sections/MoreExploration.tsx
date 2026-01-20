import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function MoreExploration() {
  return (
    <section className="mt-12 sm:mt-16">
      <Container>
        <SectionTitle title="More Exploration" />
        <div className="grid gap-5 md:grid-cols-3">
          {["Photo Editor Apps", "Beauty and Spa Web Profile", "Money Management Apps"].map((t) => (
            <div key={t} className="rounded-2xl glass p-5">
              <div className="font-semibold">{t}</div>
              <p className="mt-2 text-sm text-white/60">
                Deskripsi singkat. Nanti kita samain dengan Figma.
              </p>
              <a
                className="mt-4 inline-flex rounded-full bg-indigo-500/90 px-4 py-2 text-sm font-medium hover:bg-indigo-500 transition"
                href="#"
              >
                Check on Behance →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}