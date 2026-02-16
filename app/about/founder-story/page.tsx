import Link from "next/link";

const storyHighlights = [
  "从一线咨询到系统化规划，持续打磨“结果导向”服务模型。",
  "用跨文化沟通能力连接中加教育差异，帮助家庭少走弯路。",
  "坚持长期陪伴，不以一次申请结束服务关系。",
];

const mediaText = [
  "在中西教育体系差异背景下，许多家庭面临“信息很多、决策很难”的现实困境。",
  "创始团队提出“规划先行、证据沉淀、长期护航”的路径，统一短期录取目标与长期成长能力。",
  "服务不只关注学校层级，更关注孩子的方向感、行动力与未来适配性。",
];

const mediaLogos = [
  "CCTV",
  "Local Education Media",
  "Community Forum",
  "WeChat Official Accounts",
  "School Partner Events",
  "Parent Community Channels",
];

export default function FounderStoryPage() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7f2542] via-[#9f2f46] to-[#12285f]" />
        <div className="relative mx-auto max-w-7xl rounded-[30px] border border-white/20 bg-white/10 p-8 backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Founder Story</p>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">2.2 创始人故事</h1>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
            品牌真正的差异，不在于“说了什么”，而在于“长期做成了什么”。这一路径，构成了爱思加的方法论与执行标准。
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-14 md:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black text-[#12285f]">1. 人生故事短视频</h2>
          <div className="mt-5 flex h-60 items-center justify-center rounded-2xl border border-zinc-300 bg-gradient-to-br from-[#e8ecfa] to-[#f7f9ff]">
            <p className="text-sm font-semibold text-zinc-700">视频占位区（可替换 Bilibili / 腾讯视频链接）</p>
          </div>
          <p className="mt-3 text-sm text-zinc-600">建议用于展示创始人教育理念、关键经历与服务初心。</p>
        </article>

        <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black text-[#12285f]">2. 人生故事公众号文章</h2>
          <p className="mt-5 text-sm leading-relaxed text-zinc-700 md:text-base">
            适合承载完整叙事与案例细节，可作为深度阅读与品牌信任入口。
          </p>
          <div className="mt-5 rounded-2xl border border-[#f0d2d7] bg-[#fff7f8] p-4 text-sm text-[#7f2542]">
            内容位预留：后续可接飞书文档或公众号文章链接。
          </div>
          <a href="#" className="mt-5 inline-flex rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900">
            预留：公众号文章链接
          </a>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black text-[#12285f]">3. 媒体文字版（可复制粘贴）</h2>
          <div className="mt-6 space-y-3">
            {mediaText.map((item) => (
              <p key={item} className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {item}
              </p>
            ))}
          </div>

          <h3 className="mt-9 text-lg font-bold text-zinc-900">创始人方法论摘要</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 md:text-base">
            {storyHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7f2542]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">其他媒体 Logo（占位）</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {mediaLogos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-zinc-300 bg-white px-4 py-6 text-center text-sm font-bold tracking-wide text-zinc-700"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/about/media-coverage" className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c3d8d]">
            查看媒体与资质
          </Link>
          <Link
            href="/contact-assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#12285f]"
          >
            预约创始人团队咨询
          </Link>
        </div>
      </section>
    </main>
  );
}

