import Image from "next/image";
import Link from "next/link";
import graphQLClient from "@/lib/graphql-client";
import { GET_HOME_PAGE_FALLBACK, GET_HOME_PAGE_WITH_ACF } from "@/lib/queries";
import type { HomePageFallbackResponse, HomePageWithAcfResponse } from "@/lib/types";
import CoreServicesSection from "./components/CoreServicesSection";
import HomeVideoSwitcher from "./components/HomeVideoSwitcher";

const HOME_URI = process.env.NEXT_PUBLIC_HOME_URI || "/home/";
const HERO_BG_IMAGE = "/HomePage Resources/national-cancer-institute-N_aihp118p8-unsplash.jpg";
const HERO_LOGO_IMAGE = "/HomePage Resources/red logo.png";
const FOUNDER_PORTRAIT_IMAGE = "/HomePage Resources/创世人照片.jpg";

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

const REASON_LIST = [
  "官方授权代理多家优质私校 & 教育局项目",
  "国际认证青少年生涯规划 & 优势教练体系",
  "中加教育背景：国内 3 硕士，定居加拿大 16 年",
  "深耕加拿大教育 10 年+",
  "累计指导家庭 1000+，升学成功率 98%",
];

const METRICS = [
  { label: "服务家庭", value: "1000+" },
  { label: "升学成功率", value: "98%" },
  { label: "本地深耕", value: "10+ 年" },
  { label: "监护督导", value: "200+" },
];

export default async function Home() {
  const home = await loadHomeText();

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="absolute inset-0">
          <Image src={HERO_BG_IMAGE} alt="Classroom background" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[#0f1d4c]/62" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a45]/88 via-[#15285f]/72 to-[#a7353a]/35" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 p-2 md:p-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-white/80 md:text-base">IS CANADA</p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">{home.title}</h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 md:text-xl">
                {home.subtitle || "专注10–17岁加拿大初高中，长期陪跑式升学规划。"}
              </p>
            </div>

            <div className="mx-auto w-full max-w-sm p-2 md:p-3">
              <div className="relative mx-auto h-44 w-44 md:h-60 md:w-60">
                <Image src={HERO_LOGO_IMAGE} alt="IS Canada logo" fill priority className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-3xl font-black leading-tight text-[#12285f] md:text-5xl">
              为什么加拿大初高中，不能“等到申请再说”？
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-[#d9e1f0] bg-[#f8fafe] p-6">
                <p className="text-lg font-semibold leading-relaxed text-zinc-800">
                  选课走错，GPA 与方向会被提前锁定。
                </p>
              </article>
              <article className="rounded-2xl border border-[#d9e1f0] bg-[#f8fafe] p-6">
                <p className="text-lg font-semibold leading-relaxed text-zinc-800">
                  11 年级才开始规划，时间和选择都会被压缩。
                </p>
              </article>
              <article className="rounded-2xl border border-[#d9e1f0] bg-[#f8fafe] p-6">
                <p className="text-lg font-semibold leading-relaxed text-zinc-800">
                  只看学校排名，容易忽视专业与孩子匹配度。
                </p>
              </article>
            </div>

            <div className="mt-8 rounded-2xl border border-[#f0c7cb] bg-gradient-to-r from-[#b3362f] to-[#7f2542] p-7 text-white md:p-8">
              <p className="text-xl font-bold leading-relaxed md:text-2xl">
                这正是爱思加长期陪跑式升学规划存在的原因。
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/90 md:text-lg">每一步都可执行、可落地。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-3xl font-black leading-tight text-[#12285f] md:text-5xl">被 1000+ 家庭选择的原因</h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {METRICS.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[#d9e1f0] bg-[#f8fafe] px-5 py-4">
                  <p className="text-sm font-medium text-zinc-500">{metric.label}</p>
                  <p className="mt-1 text-2xl font-black text-[#12285f]">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              {REASON_LIST.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base font-medium text-zinc-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-zinc-200 bg-gradient-to-b from-[#12285f] to-[#1d2d69] p-5 shadow-sm md:p-6">
            <div className="flex h-full flex-col p-1">
              <div className="relative min-h-[440px] flex-1 overflow-hidden rounded-2xl border border-white/25 bg-white/10">
                <Image
                  src={FOUNDER_PORTRAIT_IMAGE}
                  alt="创始人肖像"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="rounded-2xl border border-[#d9e1f0] bg-gradient-to-b from-[#f8fafe] to-[#eef3ff] p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7f2542]">Media Feature</p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-[#12285f] md:text-3xl">
                CCTV《大国匠心》
                <br />
                合作伙伴专题
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
                通过视频内容展示团队方法论、真实案例与长期服务成果。
                视频支持版本切换，后续可继续追加更多媒体素材。
              </p>
              <div className="mt-5 inline-flex rounded-full border border-[#b3362f]/30 bg-[#fff3f2] px-3 py-1 text-xs font-semibold text-[#b3362f]">
                视频模块
              </div>
            </div>

            <HomeVideoSwitcher />
          </div>
        </div>
      </section>

      <CoreServicesSection />
      <section className="bg-[#12285f] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-lg text-white/85 md:text-xl">准备开始下一步？</p>
          <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">联系我们</h2>
          <Link
            href="/contact-assessment"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-[#12285f] transition hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            立即联系与评估
          </Link>
        </div>
      </section>
    </main>
  );
}

