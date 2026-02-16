import Link from "next/link";

const supportGroups = [
  {
    title: "合规与安全",
    desc: "确保孩子在海外的身份、监护和应急机制完整可执行。",
    items: ["监护合规与法律文件", "签证/身份状态跟进", "应急响应与风险处置"],
    color: "emerald",
  },
  {
    title: "生活与住宿",
    desc: "从落地安置到住宿匹配，降低初到海外的不确定性。",
    items: ["接机安置与入境协同", "住宿匹配与生活支持"],
    color: "sky",
  },
  {
    title: "学校与成长",
    desc: "保持校方与家庭信息同步，支持学业、适应和成长节奏。",
    items: ["校方沟通与问题跟进", "学业支持与节奏管理", "适应支持与心理关怀"],
    color: "violet",
  },
] as const;

const testimonials = [
  {
    name: "Rebecca 家长",
    quote: "孩子刚到加拿大时我们最担心生活和安全，这套守护体系让我们始终心里有底。",
  },
  {
    name: "Tammy 家长",
    quote: "每次遇到突发情况都有人第一时间响应，沟通非常透明，家长真正放心。",
  },
];

const supportCount = [
  "1 对 1 家长沟通窗口",
  "24h 紧急联络机制",
  "月度学习与生活回访",
  "关键节点预警与复盘",
];

const colorMap = {
  emerald: "border-emerald-200 bg-emerald-50",
  sky: "border-sky-200 bg-sky-50",
  violet: "border-violet-200 bg-violet-50",
};

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_90px_-45px_rgba(15,23,42,0.5)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Overseas Safeguard</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">3.4 海外 8 大守护</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            家长在国内也能放心：孩子在海外有人托底，有人沟通，有人守护。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">海外 8 守护结构</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {supportGroups.map((group) => (
            <article
              key={group.title}
              className={`rounded-3xl border p-6 shadow-[0_16px_50px_-38px_rgba(24,24,27,0.45)] ${colorMap[group.color]}`}
            >
              <h3 className="text-xl font-bold text-zinc-900">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{group.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">服务机制</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {supportCount.map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">家长感言</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">“{item.quote}”</p>
              <footer className="mt-4 text-sm font-bold text-zinc-900">—— {item.name}</footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact-assessment"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            咨询海外守护方案
          </Link>
          <Link
            href="/assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
          >
            先做风险评估
          </Link>
        </div>
      </section>
    </main>
  );
}
