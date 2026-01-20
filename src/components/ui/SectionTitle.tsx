export default function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <div className="text-xs tracking-widest uppercase text-white/50">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-2 text-xl sm:text-4xl font-semibold text-center">
        {title}
      </h2>
    </div>
  );
}
