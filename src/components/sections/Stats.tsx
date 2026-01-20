import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects", value: "10+" },
  { label: "Screens Designed", value: "300+" },
];

export default function Stats() {
  return (
    <section className="mt-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl glass p-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2 px-3 py-2">
              <Badge>{s.value}</Badge>
              <div className="text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}