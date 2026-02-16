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

const logoWall = [
  "CCTV",
  "HDSB ISP",
  "School Partner",
  "Community Media",
  "Education Forum",
  "Parent Voices",
];

const userQuotes = [
  "关于孩子出国留学，我们家庭做得最正确的一件事，就是选择您做我们的留学顾问。您非常有爱心、做事又清晰、条理，阅历又非常好，未来几年还请你们继续对学业、生活等予以引导、规划、鼓励！",
  "收到爱普比通知书非常惊喜！很感谢你们团队的帮助，整个过程所体现的专业性和热情，让我们全家表示由衷的赞叹！🌹🌹🌹",
  "你们不是只把孩子送出去，而是在每一个关键节点都有人负责、有人沟通、有人托底，这让我们非常安心。",
];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-zinc-100 via-white to-blue-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-zinc-300 bg-white p-8 shadow-[0_25px_90px_-45px_rgba(24,24,27,0.5)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-600">Media & Credentials</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">2.4 央视背书</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            我们把信任建立在“可验证”之上：只放最硬的资质证据、最真实的服务口碑、最长期的合作记录。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-zinc-900">资质 / 认证（硬证据）</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              {hardCerts.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-zinc-900">媒体 / 合作露出</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              {mediaPartners.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">媒体 Logo 墙（占位）</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {logoWall.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-6 text-center text-sm font-bold tracking-wide text-zinc-700"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">真实客户评价（截句）</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {userQuotes.map((quote) => (
            <blockquote
              key={quote}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_16px_50px_-40px_rgba(24,24,27,0.45)]"
            >
              <p className="text-sm leading-relaxed text-zinc-700">“{quote}”</p>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
          >
            返回关于我们
          </Link>
          <Link
            href="/contact-assessment"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
