<<<<<<< HEAD
import Image from "next/image";
import graphQLClient from "@/lib/graphql-client";
import { GET_HOME_PAGE_FALLBACK, GET_HOME_PAGE_WITH_ACF } from "@/lib/queries";
import type { HomePageFallbackResponse, HomePageWithAcfResponse } from "@/lib/types";

const HOME_URI = process.env.NEXT_PUBLIC_HOME_URI || "/home/";
const HERO_BG_IMAGE = "/HomePage Resources/national-cancer-institute-N_aihp118p8-unsplash.jpg";
const HERO_LOGO_IMAGE = "/HomePage Resources/red logo.png";

type HomeText = {
  title: string;
  subtitle: string;
};

async function loadHomeText(): Promise<HomeText> {
  try {
    const acfData = await graphQLClient.request<HomePageWithAcfResponse>(GET_HOME_PAGE_WITH_ACF, {
      uri: HOME_URI,
    });

    if (acfData.pageBy) {
      return {
        title: acfData.pageBy.homePageTest?.heroTitle || "专注10–17岁加拿大初高中留学",
        subtitle: acfData.pageBy.homePageTest?.heroSubtitle || "",
      };
    }
  } catch {
    // Fallback query is handled below.
  }

  try {
    const fallbackData = await graphQLClient.request<HomePageFallbackResponse>(
      GET_HOME_PAGE_FALLBACK,
      { uri: HOME_URI }
    );

    if (fallbackData.pageBy) {
      return {
        title: "专注10–17岁加拿大初高中留学",
        subtitle: "",
      };
    }
  } catch {
    // Ignore and use hardcoded fallback.
  }

  return {
    title: "专注10–17岁加拿大初高中留学",
    subtitle: "",
  };
}

export default async function Home() {
  const home = await loadHomeText();

  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src={HERO_BG_IMAGE}
          alt="Classroom background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/72" />
        <div className="absolute top-[16vh] h-20 w-full bg-zinc-400/25" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            <div className="relative h-[200px] w-[200px] md:h-[420px] md:w-[420px]">
              <Image src={HERO_LOGO_IMAGE} alt="IS Canada logo" fill priority className="object-contain" />
            </div>
            <h1 className="text-6xl font-black leading-none tracking-tight text-[#b3362f] md:text-[180px]">
              爱思加
            </h1>
          </div>

          <p className="mt-8 text-3xl font-bold tracking-wide text-[#12285f] md:text-[72px]">
            {home.title}
          </p>

          {home.subtitle ? (
            <p className="mt-5 text-lg font-medium text-[#12285f]/85 md:text-3xl">{home.subtitle}</p>
          ) : null}
        </div>
      </section>
    </main>
=======
import Link from "next/link";
import graphQLClient from "@/lib/graphql-client";
import { GET_ALL_POSTS, GET_SITE_SETTINGS } from "@/lib/queries";
import type { PostsResponse, SiteSettingsResponse } from "@/lib/types";

export default async function Home() {
  // 从 WordPress 获取文章和站点信息
  let posts = [];
  let siteTitle = "IS Canada";
  let error = null;

  try {
    const [postsData, siteData] = await Promise.all([
      graphQLClient.request<PostsResponse>(GET_ALL_POSTS),
      graphQLClient.request<SiteSettingsResponse>(GET_SITE_SETTINGS),
    ]);

    posts = postsData.posts.nodes;
    siteTitle = siteData.generalSettings.title;
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch data";
    console.error("Error fetching WordPress data:", err);
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* 头部 */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            {siteTitle}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Powered by WordPress + Next.js
          </p>
        </header>

        {/* 错误提示 */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">
              <strong>错误：</strong> {error}
            </p>
            <p className="text-sm text-red-500 mt-2">
              请确保：
              <br />
              1. WordPress 已安装 WPGraphQL 插件
              <br />
              2. .env.local 文件配置正确
              <br />
              3. WordPress 站点正在运行
            </p>
          </div>
        )}

        {/* 文章列表 */}
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
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
                    <span>{post.author.node.name}</span>
                    <time>{new Date(post.date).toLocaleDateString("zh-CN")}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          !error && (
            <div className="text-center py-12">
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                暂无文章
              </p>
              <p className="text-sm text-zinc-500 mt-2">
                请在 WordPress 后台创建一些文章
              </p>
            </div>
          )
        )}
      </main>
    </div>
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35
  );
}
