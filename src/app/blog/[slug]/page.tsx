import { Navbar } from "@/components/Navbar";
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
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container px-6 mx-auto pt-40 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{post.title}</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-white/50 text-xl leading-relaxed">
            This is a placeholder for the article &quot;{post.title}&quot;. Full content coming soon.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
