import Link from "next/link";

const highlights = [
  "真实校园与城市情境沉浸，提升语言与跨文化沟通能力",
  "以“任务 + 复盘”替代纯观光，让成长结果可见",
  "小班制带队与全程陪伴，兼顾安全、体验与学习产出",
  "结合兴趣探索，帮助孩子验证未来学习与发展方向",
  "营后输出个人成长档案，支持后续升学规划",
  "家长可同步获取阶段反馈与建议",
];

const suitableFor = [
  "计划未来 1-3 年赴海外读书的家庭",
  "希望提前适应国际课堂与生活节奏的学生",
  "想验证兴趣方向、建立目标感和行动力的孩子",
  "希望孩子在“安全 + 成长”之间取得平衡的家长",
];

const schedule = [
  {
    phase: "第 1-3 天",
    content: "破冰与适应：城市熟悉、课堂互动、学习目标设定",
  },
  {
    phase: "第 4-7 天",
    content: "能力提升：项目任务、小组协作、表达与汇报训练",
  },
  {
    phase: "第 8-11 天",
    content: "深度体验：校园访问、职业探索、文化与社会观察",
  },
  {
    phase: "第 12-14 天",
    content: "成果沉淀：个人展示、导师反馈、营后行动计划",
  },
];

const faqs = [
  "孩子英语基础一般，也可以参加吗？",
  "住宿和出行安全如何保障？",
  "夏令营结束后会有什么可延续成果？",
  "家长是否可以实时了解孩子状态？",
  "和普通游学相比，核心差异是什么？",
];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-amber-50 via-white to-lime-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-[0_25px_90px_-45px_rgba(217,119,6,0.45)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">Summer Camp</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">3.5 夏令营</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            爱普比夏令营以“能力成长”为核心，不做流水式打卡。让孩子在真实场景里建立方向感、行动力与国际化适应力。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">适合哪些家庭</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {suitableFor.map((item) => (
            <article key={item} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">项目亮点</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <article key={item} className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">示例营程（14 天）</h2>
        <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
          <div className="grid gap-3">
            {schedule.map((item) => (
              <div key={item.phase} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                <p className="text-sm font-bold text-zinc-900">{item.phase}</p>
                <p className="mt-1 text-sm text-zinc-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">常见问题</h2>
        <div className="mt-6 grid gap-3">
          {faqs.map((faq, idx) => (
            <div key={faq} className="rounded-2xl border border-zinc-200 bg-white px-5 py-4">
              <p className="text-sm font-semibold text-zinc-800 md:text-base">{idx + 1}. {faq}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact-assessment"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            领取夏令营计划
          </Link>
          <Link
            href="/assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
          >
            评估是否适合参加
          </Link>
        </div>
      </section>
    </main>
  );
}
