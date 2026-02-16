import Link from "next/link";

const hardCerts = [
  "国际认证青少年生涯规划师团队",
  "加拿大本地教育服务合规运营",
  "多家优质私校与教育局合作通道",
  "中加双语跨文化升学指导体系",
  "申请规划 + 海外守护双闭环机制",
];

const mediaPartners = [
  "央视相关栏目内容露出",
  "加拿大教育局 ISP 信息资源联动",
  "本地学校开放日/讲座活动合作",
  "家长社群媒体与教育栏目联动",
  "合作机构品牌联合传播",
  "校方与社区活动现场报道",
];

const logoWall = ["CCTV", "HDSB ISP", "School Partner", "Community Media", "Education Forum", "Parent Voices"];

const userQuotes = [
  "流程清晰、节奏稳，家长和孩子都更有方向感。",
  "团队专业且细致，关键节点都有明确支持。",
  "不仅帮助录取，更帮助孩子建立长期竞争力。",
];

export default function MediaCoveragePage() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#12285f] via-[#1c3a87] to-[#7f2542]" />
        <div className="relative mx-auto max-w-7xl rounded-[30px] border border-white/20 bg-white/10 p-8 backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Media & Trust</p>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">2.4 媒体与资质</h1>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
            我们把信任建立在“可验证”之上：提供可核验的资质证据、真实的服务口碑与长期合作记录。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-[#d9e1f0] bg-[#f8fafe] p-7 md:p-8">
            <h2 className="text-2xl font-black text-[#12285f]">资质 / 认证</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              {hardCerts.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#12285f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#f0d2d7] bg-[#fff7f8] p-7 md:p-8">
            <h2 className="text-2xl font-black text-[#7f2542]">媒体 / 合作露出</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              {mediaPartners.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#b3362f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">媒体 Logo 墙（占位）</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {logoWall.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-zinc-300 bg-white px-4 py-6 text-center text-sm font-bold tracking-wide text-zinc-700"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">真实客户评价（截句）</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {userQuotes.map((quote) => (
            <blockquote key={quote} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <p className="text-sm leading-relaxed text-zinc-700">“{quote}”</p>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#12285f]"
          >
            返回关于我们
          </Link>
          <Link href="/contact-assessment" className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c3d8d]">
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
