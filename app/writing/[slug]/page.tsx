import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post?.title };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug);
  if (!post) notFound();
  return (
    <article>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}