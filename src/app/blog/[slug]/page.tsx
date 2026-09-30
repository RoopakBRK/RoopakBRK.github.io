import Link from "next/link";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="mx-auto max-w-page px-4 pb-24 pt-16 sm:px-8">
        <Link href="/" className="link-underline mb-24 inline-block text-sm text-muted">
          Back to home
        </Link>
        <h1 className="mb-8 max-w-[20ch] font-display text-4xl font-light tracking-tight md:text-6xl">{post.title}</h1>
        <p className="max-w-[60ch] text-xl leading-relaxed text-muted">
          This article is still being written. Check back soon.
        </p>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
