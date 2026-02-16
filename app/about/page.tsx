import Link from "next/link";

const aboutModules = [
  {
    id: "2.1",
    title: "总部所在",
    href: "/about/headquarters",
    desc: "了解总部位置、本地教育网络与官方项目资源。",
    tone: "from-[#b3362f] to-[#7f2542]",
  },
  {
    id: "2.2",
    title: "创始人故事",
    href: "/about/founder-story",
    desc: "认识创始团队经历，以及方法论如何形成与落地。",
    tone: "from-[#1f3c88] to-[#12285f]",
  },
  {
    id: "2.3",
    title: "为什么是我们",
    href: "/about/why-us",
    desc: "查看我们与常规留学服务在策略与执行上的差异。",
    tone: "from-[#3f2b96] to-[#1b2f6e]",
  },
  {
    id: "2.4",
    title: "媒体与资质",
    href: "/about/media-coverage",
    desc: "集中展示媒体报道、专业资质与家长口碑。",
    tone: "from-[#a7374a] to-[#12285f]",
  },
];

const certifications = [
  "加拿大本地教育服务机构合规运营",
  "国际认证青少年生涯规划顾问团队",
  "加拿大多地教育局/学校合作通道",
  "中加双语跨文化升学顾问体系",
  "升学规划与海外守护一体化服务",
];

const mediaExposure = [
  "央视栏目采访与内容露出",
  "教育局 ISP 官方资源对接",
  "本地学校与合作机构联合活动",
  "家长社群公开讲座持续输出",
];

const testimonials = [
  "从择校到落地，每一步都清晰可执行。",
  "团队专业且响应及时，让家长真正省心。",
  "不仅关注录取，更关注孩子的长期成长。",
];

const successFactors = [
  "孩子主动乐观的成长心态",
  "家庭持续且稳定的支持",
  "本地专业团队长期陪跑",
];

const nineServices = [
  "求学准备",
  "初到安置",
  "官方监护",
  "沟通反馈",
  "学业帮助",
  "融入西方",
  "紧急救援",
  "交通接送",
  "个人成长",
];

export default function AboutPage() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10235a] via-[#182f73] to-[#8e2f4f]" />
        <div className="absolute -right-20 top-8 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#ff8aa2]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl rounded-[32px] border border-white/20 bg-white/10 p-8 backdrop-blur-md md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">About Us</p>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">2.0 关于我们</h1>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
            留学不只是一次申请，而是一个家庭的长期教育决策。爱思加以“规划 + 申请 + 海外守护”一体化模式，
            帮助学生稳步成长、帮助家长放心托付。
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact-assessment"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#12285f] transition hover:bg-zinc-100"
            >
              预约咨询
            </Link>
            <Link
              href="/assessment"
              className="rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              先做评估
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7f2542]">品牌主张</p>
            <h2 className="mt-3 text-3xl font-black text-[#12285f] md:text-4xl">
              以跨文化理解为基础，用本地化执行支持长期成长
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-700 md:text-lg">
              面对语言、课程、生活与社交的多重挑战，我们坚持用“规划 + 申请 + 守护”闭环服务，
              把复杂问题拆成可执行步骤，让每个阶段都有人负责、有人跟进、有人托底。
            </p>
          </div>

          <div className="my-8 h-px w-full bg-zinc-200" />

          <div>
            <p className="text-xl font-black text-[#b3362f] md:text-2xl">国际学生成功的关键是什么？</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {successFactors.map((item) => (
                <article key={item} className="rounded-2xl border border-zinc-200 bg-[#fafbff] p-5">
                  <p className="text-base font-semibold leading-relaxed text-zinc-800">{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="my-8 h-px w-full bg-zinc-200" />

          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-black text-[#12285f] md:text-4xl">九大境外教育服务</h2>
              <Link
                href="/services/overseas-8-support"
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-[#12285f]"
              >
                查看完整服务页
              </Link>
            </div>
            <p className="mt-4 text-sm text-zinc-600 md:text-base">
              从入学准备到在加成长，覆盖学习、生活、监护与融入的关键节点。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nineServices.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#d9e1f0] bg-[#f8fafe] px-4 py-3 text-base font-semibold text-[#12285f]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-18">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black text-[#12285f] md:text-4xl">关于我们 · 四个部分</h2>
          <p className="text-sm font-medium text-zinc-500">点击卡片进入对应页面</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {aboutModules.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${item.tone}`} />
              <div className="p-7 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <p className="rounded-full bg-[#f1f4fb] px-3 py-1 text-xs font-bold text-[#12285f]">{item.id}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition group-hover:border-[#12285f] group-hover:text-[#12285f]"
                  >
                    查看详情
                  </Link>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
            <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">机构说明</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">
              IS-Canada（International Students Canada）是在加拿大正规注册运营的教育服务机构，
              长期服务计划就读初高中的国际学生家庭。我们致力于为学生解决海外学习、生活与融入中的真实问题。
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
            <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">宗旨与愿景</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">
              我们以关爱、尊重、专业与责任为服务底层，帮助学生在安全前提下快速适应新环境，
              建立学习能力、社交能力与长期发展方向，让留学经历真正成为受益终生的成长资产。
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 md:pb-24">
        <div className="rounded-[32px] border border-zinc-200 bg-white p-7 shadow-sm md:p-11">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7f2542]">2.4 媒体与资质</p>
              <h2 className="mt-3 text-3xl font-black text-[#12285f] md:text-4xl">信任来自可验证的证据</h2>
            </div>
            <Link
              href="/about/media-coverage"
              className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1a3a86]"
            >
              查看完整介绍
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#d9e1f0] bg-[#f8fafe] p-5">
              <h3 className="text-lg font-bold text-[#12285f]">资质 / 认证</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {certifications.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#12285f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#f0d2d7] bg-[#fff8f9] p-5">
              <h3 className="text-lg font-bold text-[#7f2542]">媒体 / 合作露出</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {mediaExposure.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#b3362f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="text-lg font-bold text-zinc-900">家长反馈</h3>
              <div className="mt-3 space-y-3 text-sm text-zinc-700">
                {testimonials.map((quote) => (
                  <blockquote key={quote} className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 leading-relaxed">
                    “{quote}”
                  </blockquote>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

