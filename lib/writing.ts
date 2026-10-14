import { getAllPosts } from "@/lib/posts";
import { externalWriting } from "@/data/writing";

export type WritingItem = {
  title: string;
  date: string;
  summary?: string;
  href: string;
  outlet?: string;
  external: boolean;
};

export function getAllWriting(): WritingItem[] {
  const local: WritingItem[] = getAllPosts().map((p) => ({
    title: p.title,
    date: p.date,
    summary: p.summary,
    href: `/writing/${p.slug}`,
    external: false,
  }));

  const external: WritingItem[] = externalWriting.map((w) => ({
    title: w.title,
    date: w.date,
    summary: w.summary,
    href: w.url,
    outlet: w.outlet,
    external: true,
  }));

  return [...local, ...external].sort((a, b) => (a.date < b.date ? 1 : -1));
}
