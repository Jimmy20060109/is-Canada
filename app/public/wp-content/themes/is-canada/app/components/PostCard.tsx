import Link from "next/link";
import type { Post } from "@/lib/types";

interface PostCardProps {
  post: Post;
}

// 文章卡片组件 - 可复用
export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* 特色图片 */}
      {post.featuredImage && (
        <div className="aspect-video bg-zinc-200 dark:bg-zinc-700">
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        {/* 标题 */}
        <h2 className="text-2xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">
          <Link
            href={`/posts/${post.slug}`}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {post.title}
          </Link>
        </h2>

        {/* 摘要 */}
        {post.excerpt && (
          <div
            className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        )}

        {/* 元信息 */}
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-500">
          <span className="font-medium">{post.author.node.name}</span>
          <time>{new Date(post.date).toLocaleDateString("zh-CN")}</time>
        </div>
      </div>
    </article>
  );
}
