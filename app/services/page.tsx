import Link from "next/link";

const outcomes = [
  {
    title: "路径清晰",
    desc: "从“想出国”到“怎么做”，每一步可执行、可追踪。",
  },
  {
    title: "成本可控",
    desc: "更早规划，减少试错，让时间和预算花在关键节点。",
  },
  {
    title: "成长有证据",
    desc: "学术能力与履历能力同步沉淀，不只看一次考试表现。",
  },
  {
    title: "家庭更安心",
    desc: "家长在国内也能了解进度、风险与解决方案。",
  },
];

const services = [
  {
    id: "3.1",
    title: "低龄留学",
    href: "/services/junior-high-study",
    summary: "从教育体系、英语过渡到择校申请，打造孩子的留学起跑优势。",
    points: ["困扰诊断", "四步落地路径", "常见问题与案例"],
  },
  {
    id: "3.2",
    title: "升学规划",
    href: "/services/academic-planning",
    summary: "不止拿到 Offer，更要找到长期适配的人生与专业方向。",
    points: ["幸福树双主干", "OSSD/课程策略", "大学申请路径"],
  },
  {
    id: "3.3",
    title: "人生规划第一课",
    href: "/services/life-planning-first-class",
    summary: "以生涯规划开启天赋和热爱，帮助孩子建立内驱力与方向感。",
    points: ["痛点拆解", "误区澄清", "行动化成长方案"],
  },
  {
    id: "3.4",
    title: "海外 8 大守护",
    href: "/services/overseas-8-support",
    summary: "孩子在海外有人托底、有人沟通、有人守护，家长放心。",
    points: ["合规与安全", "生活与住宿", "学校与成长支持"],
  },
  {
    id: "3.5",
    title: "夏令营",
    href: "/services/summer-camp",
    summary: "用短期沉浸体验，验证方向、激发动力、建立国际化适应力。",
    points: ["能力导向营程", "安全闭环", "可延展成长成果"],
  },
];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-rose-50 via-white to-sky-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pb-14 md:pt-20">
        <div className="rounded-3xl border border-rose-100 bg-white/90 p-8 shadow-[0_20px_80px_-35px_rgba(157,23,77,0.35)] backdrop-blur md:p-12">
          <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-4 py-1 text-sm font-semibold text-rose-700">
            Core Services
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">
            3.0 核心服务
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            我们把留学服务从“流程导向”升级为“结果导向”：不只是办申请，而是帮助孩子找到适合的成长赛道，
            让每一次投入都转化为长期竞争力与幸福感。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact-assessment"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              预约评估
            </Link>
            <Link
              href="/assessment"
              className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
            >
              填写评估表
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:pb-14">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">结果导向的 4 个核心价值</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {outcomes.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_16px_50px_-35px_rgba(24,24,27,0.45)]"
            >
              <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">服务矩阵</h2>
        <p className="mt-3 text-zinc-600">从低龄阶段到大学申请、从方向探索到海外托底，形成一体化闭环。</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-40px_rgba(190,24,93,0.35)] md:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold tracking-wide text-rose-600">{service.id}</p>
                <Link
                  href={service.href}
                  className="rounded-lg border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-700 transition group-hover:border-zinc-900 group-hover:text-zinc-900"
                >
                  查看详情
                </Link>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-zinc-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">{service.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
