import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogPost from "@/components/old/BlogPost";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seo.metaTitle || post.title,
    description: post.seo.metaDescription || post.description,
    keywords: post.seo.keywords || post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return <BlogPost post={post} relatedPosts={relatedPosts} />;
}