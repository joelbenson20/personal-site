import type { Repo, Tag } from "@/data/code";

const tagStyles: Record<Tag, { label: string; className: string }> = {
  software: { label: "Software", className: "bg-indigo-50 text-indigo-700" },
  "data-science": { label: "Data Science", className: "bg-violet-50 text-violet-700" },
  "data-analysis": { label: "Data Analysis", className: "bg-emerald-50 text-emerald-700" },
  web: { label: "Web", className: "bg-amber-50 text-amber-800" },
  research: { label: "Research", className: "bg-rose-50 text-rose-700" },
};

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="rounded-xl border border-gray-200 p-5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-xl font-semibold">{repo.title}</h2>
        <span className="font-mono text-sm text-gray-500">{repo.years}</span>
      </div>

      {repo.links.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
          {repo.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-indigo-700 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <p className="my-3">{repo.description}</p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {repo.stack.map((s) => (
          <span key={s} className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-600">
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {repo.tags.map((t) => (
          <span
            key={t}
            className={`rounded-full px-2.5 py-0.5 font-mono text-[0.68rem] ${tagStyles[t].className}`}
          >
            {tagStyles[t].label}
          </span>
        ))}
      </div>
    </article>
  );
}
