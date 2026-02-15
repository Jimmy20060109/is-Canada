<<<<<<< HEAD
﻿import { notFound } from "next/navigation";
import Link from "next/link";
import graphQLClient from "@/lib/graphql-client";
import { GET_POST_BY_SLUG, GET_ALL_POSTS } from "@/lib/queries";
import type { Post, PostResponse, PostsResponse } from "@/lib/types";

=======
import { notFound } from "next/navigation";
import Link from "next/link";
import graphQLClient from "@/lib/graphql-client";
import { GET_POST_BY_SLUG, GET_ALL_POSTS } from "@/lib/queries";
import type { PostResponse, PostsResponse } from "@/lib/types";

// 生成静态路径
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35
export async function generateStaticParams() {
  try {
    const data = await graphQLClient.request<PostsResponse>(GET_ALL_POSTS);
    return data.posts.nodes.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
<<<<<<< HEAD
  let post: Post | null = null;
=======
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35

  try {
    const data = await graphQLClient.request<PostResponse>(GET_POST_BY_SLUG, {
      slug,
    });
<<<<<<< HEAD
    post = data.post;
=======

    if (!data.post) {
      notFound();
    }

    const post = data.post;

    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* 返回按钮 */}
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            ← 返回首页
          </Link>

          {/* 特色图片 */}
          {post.featuredImage && (
            <div className="aspect-video bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden mb-8">
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* 标题 */}
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            {post.title}
          </h1>

          {/* 元信息 */}
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2">
              {post.author.node.avatar && (
                <img
                  src={post.author.node.avatar.url}
                  alt={post.author.node.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <span>{post.author.node.name}</span>
            </div>
            <span>•</span>
            <time>{new Date(post.date).toLocaleDateString("zh-CN")}</time>
          </div>

          {/* 文章内容 */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-zinc-900 dark:prose-headings:text-zinc-50
              prose-p:text-zinc-700 dark:prose-p:text-zinc-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50
              prose-code:text-zinc-900 dark:prose-code:text-zinc-50
              prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    );
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }
<<<<<<< HEAD

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← 返回首页
        </Link>

        {post.featuredImage && (
          <div className="aspect-video bg-zinc-200 dark:bg-zinc-700 rounded-lg overflow-hidden mb-8">
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center gap-2">
            {post.author.node.avatar && (
              <img
                src={post.author.node.avatar.url}
                alt={post.author.node.name}
                className="w-10 h-10 rounded-full"
              />
            )}
            <span>{post.author.node.name}</span>
          </div>
          <span>•</span>
          <time>{new Date(post.date).toLocaleDateString("zh-CN")}</time>
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-zinc-900 dark:prose-headings:text-zinc-50
            prose-p:text-zinc-700 dark:prose-p:text-zinc-300
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50
            prose-code:text-zinc-900 dark:prose-code:text-zinc-50
            prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
=======
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35
}
