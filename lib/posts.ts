import fs from "node:fs";
import path from "node:path"
import matter from "gray-matter"
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostMeta = { slug: string; title: string; date: string; summary?: string };

export function getAllPosts(): PostMeta[] {
  return fs.readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(postsDir, file), "utf8"))
      return { slug: file.replace(/\.md$/, ""), title: data.title, date: data.date, summary: data.summary };
    })
    .sort((a, b) => a.date < b.date ? 1 : -1 )
}

export async function getPost(slug: string) {
  const file = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const result = await remark().use(html).process(content);
  return { title: data.title as string, date: data.date as string, html: result.toString()}
}