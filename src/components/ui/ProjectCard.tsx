import Link from "next/link";
import Badge from "./Badge";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block overflow-hidden rounded-2xl glass hover:border-white/20 transition"
    >
      <div className="aspect-[16/10] w-full bg-white/5">
        {/* Simple image: nanti upgrade pakai next/image */}
        <img
          src={p.cover}
          alt={p.title}
          className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="text-sm text-white/70">{p.role}</div>
        <div className="mt-1 text-lg font-semibold">{p.title}</div>
        {p.subtitle && <div className="mt-1 text-sm text-white/60">{p.subtitle}</div>}

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}