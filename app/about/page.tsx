import Link from "next/link";

const aboutModules = [
  {
    id: "2.1",
    title: "总部所在",
    href: "/about/headquarters",
    desc: "总部介绍、教育局 ISP 资源、央视访谈与媒体露出。",
  },
  {
    id: "2.2",
    title: "创始人故事",
    href: "/about/founder-story",
    desc: "人生故事短视频、公众号长文、媒体文字版与品牌轨迹。",
  },
  {
    id: "2.3",
    title: "为什么是我们",
    href: "/about/why-us",
    desc: "系统化方法、本地资源深度、结果导向的服务差异化。",
  },
  {
    id: "2.4",
    title: "央视背书",
    href: "/about/media-coverage",
    desc: "核心资质、媒体合作、真实家长评价与信任证据。",
  },
];

const certifications = [
  "加拿大本地教育服务机构合规运营",
  "国际认证青少年生涯规划师团队",
  "加拿大多地教育局/学校合作通道",
  "中加双语跨文化升学顾问体系",
  "升学规划与海外守护双闭环服务",
];

const mediaExposure = [
  "央视相关访谈内容露出",
  "加拿大教育局与 ISP 资源链接",
  "本地学校与合作机构联合活动",
  "家长社群与公开讲座持续输出",
];

const testimonials = [
  "关于孩子出国留学，我们家庭做得最正确的一件事，就是选择您做我们的留学顾问。您非常有爱心、做事又清晰、条理，阅历又非常好，未来几年还请你们继续对学业、生活等予以引导、规划、鼓励！",
  "收到爱普比通知书非常惊喜！很感谢你们团队的帮助，整个过程所体现的专业性和热情，让我们全家表示由衷的赞叹！🌹🌹🌹",
  "最难得的是你们不只关注录取结果，还一直在帮助孩子建立长期成长能力和自我方向感。",
];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-rose-50 via-white to-blue-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-rose-100 bg-white/90 p-8 shadow-[0_25px_90px_-45px_rgba(190,24,93,0.35)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-600">About IS-Canada</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">2.0 关于我们</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            我们相信：留学不只是一次申请，而是一个家庭的长期教育投资。
            爱思加以“规划 + 申请 + 海外守护”一体化方式，帮助孩子在国际教育中持续成长。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact-assessment"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              预约咨询
            </Link>
            <Link
              href="/assessment"
              className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
            >
              先做评估
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">关于我们模块</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {aboutModules.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(24,24,27,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-45px_rgba(37,99,235,0.35)]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-rose-600">{item.id}</p>
                <Link
                  href={item.href}
                  className="rounded-lg border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-700 transition group-hover:border-zinc-900"
                >
                  查看详情
                </Link>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-900 p-6 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-300">2.4 央视背书（底部摘要）</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">信任来自可验证的硬证据</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-700 bg-zinc-800/70 p-5">
              <h3 className="text-lg font-bold">资质 / 认证</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                {certifications.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-zinc-800/70 p-5">
              <h3 className="text-lg font-bold">媒体 / 合作露出</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                {mediaExposure.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-zinc-800/70 p-5">
              <h3 className="text-lg font-bold">真实客户评价</h3>
              <div className="mt-3 space-y-3 text-sm text-zinc-200">
                {testimonials.map((quote) => (
                  <blockquote key={quote} className="rounded-xl border border-zinc-700 bg-zinc-900/60 p-3 leading-relaxed">
                    “{quote}”
                  </blockquote>
                ))}
              </div>
            </article>
          </div>

          <Link
            href="/about/media-coverage"
            className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            查看央视背书完整页
          </Link>
        </div>
      </section>
    </main>
  );
}
