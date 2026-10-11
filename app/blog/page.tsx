import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog" };

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="font-medium hover:underline">{p.title}</Link>
            <p className="text-sm text-gray-500">{p.date}{p.summary && ` — ${p.summary}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}