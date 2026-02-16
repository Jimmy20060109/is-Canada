import Link from "next/link";

const storyHighlights = [
  "从一线咨询到系统化教育规划，持续打磨“结果导向”服务模型。",
  "以跨文化沟通能力连接中加教育差异，帮助家庭少走弯路。",
  "坚持长期陪伴，不以一次申请结束服务关系。",
];

const mediaText = [
  "在中西教育体系差异背景下，很多家庭面临“信息过载却决策焦虑”的困境。",
  "创始团队提出“规划先行、证据沉淀、长期护航”的路径，将短期录取目标与长期成长能力统一。",
  "服务不仅关注学校层级，更重视孩子的方向感、行动力和未来适配性。",
];

const mediaLogos = [
  "CCTV",
  "Local Education Media",
  "Community Forum",
  "WeChat Official Accounts",
  "School Partner Events",
  "Parent Community Channels",
];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-amber-50 via-white to-rose-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-[0_25px_90px_-45px_rgba(180,83,9,0.35)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">Founder Story</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">2.2 创始人故事</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            一个品牌真正的差异，不是说了什么，而是持续做了什么。创始人故事，记录爱思加从理念到方法、从方法到结果的形成过程。
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-10 md:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900">1. 人生故事短视频</h2>
          <div className="mt-4 flex h-60 items-center justify-center rounded-2xl border border-zinc-300 bg-gradient-to-br from-zinc-200 to-zinc-100">
            <p className="text-sm font-semibold text-zinc-700">视频占位区（可替换为 Bilibili/腾讯视频链接）</p>
          </div>
          <p className="mt-3 text-sm text-zinc-600">可在此嵌入创始人访谈视频，讲述教育理念和关键转折。</p>
        </article>

        <article className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900">2. 人生故事公众号文章</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">
            支持放置公众号长文导流入口，适合展示完整叙事与案例细节。
          </p>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            This content is only supported in a Feishu Docs
          </div>
          <a
            href="#"
            className="mt-4 inline-flex rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
          >
            预留：公众号文章链接
          </a>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900">3. 媒体文字版（可复制粘贴）</h2>
          <div className="mt-5 space-y-3">
            {mediaText.map((item) => (
              <p key={item} className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {item}
              </p>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-bold text-zinc-900">创始人方法论摘要</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 md:text-base">
            {storyHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">其他媒体 Logo（占位）</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {mediaLogos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-6 text-center text-sm font-bold tracking-wide text-zinc-700"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about/media-coverage"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            查看媒体背书
          </Link>
          <Link
            href="/contact-assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
          >
            预约创始人团队咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
