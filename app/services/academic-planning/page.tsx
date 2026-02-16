import Link from "next/link";

const painPoints = [
  "选课踩坑，GPA 不稳，努力很多但结果不理想。",
  "规划启动太晚，11 年级才开始，关键机会已经错过。",
  "只盯学校排名，不清楚专业方向与未来职业匹配。",
];

const academicTrunk = [
  "OSSD 选课与学分策略",
  "语言能力与写作表达",
  "学习方法与学术习惯",
  "研究能力与项目叙事",
];

const profileTrunk = [
  "兴趣探索与持续项目",
  "成果沉淀与证据化表达",
  "跨学科能力迁移",
  "个人品牌与申请叙事",
];

const ossdPoints = [
  "9-10 年级：打基础，建立学科能力与学习节奏",
  "11 年级：明确方向，围绕目标专业做课程布局",
  "12 年级：冲刺申请，平衡成绩、文书与活动成果",
  "避免“只看简单课”或“盲目堆高难课”两类极端",
];

const faqs = [
  "什么时候开始升学规划最合适？",
  "为什么越早规划越省钱、省心？",
  "8 年级要不要做规划？会不会太早？",
  "OSSD 选课如何决定专业可能性？",
  "专业方向和学校排名冲突时怎么取舍？",
  "你们和常规留学机构最大的不同是什么？",
];

const universities = [
  "University of Toronto",
  "University of Waterloo",
  "McGill University",
  "University of British Columbia",
  "Queen's University",
  "Western University",
  "York University",
  "Toronto Metropolitan University",
  "McMaster University",
  "University of Alberta",
];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-indigo-50 via-white to-cyan-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-[0_25px_90px_-45px_rgba(67,56,202,0.45)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-600">Academic Planning</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">3.2 升学规划</h1>
          <p className="mt-6 max-w-4xl text-xl font-bold leading-relaxed text-zinc-900 md:text-3xl">
            真正好的留学规划，不只获得名校“录取通知书”，
            <span className="block text-indigo-700">更要找到“人生使用说明书”。</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">家长秒懂的 3 个痛点</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {painPoints.map((item, idx) => (
            <article key={item} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-bold tracking-wide text-indigo-600">0{idx + 1}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 md:text-base">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-amber-50 p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">幸福树模型 · 双主干</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-700 md:text-base">
            我们把升学规划拆成两条互相支撑的主干：一条保障学术竞争力，一条沉淀长期履历竞争力。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-white p-5">
              <h3 className="text-lg font-bold text-emerald-700">学术主干</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {academicTrunk.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-white p-5">
              <h3 className="text-lg font-bold text-amber-700">履历主干</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {profileTrunk.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">学业规划与选课（OSSD 策略）</h2>
        <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
          <ul className="space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
            {ossdPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">常见问题</h2>
        <div className="mt-6 grid gap-3">
          {faqs.map((faq, idx) => (
            <div key={faq} className="rounded-2xl border border-zinc-200 bg-white px-5 py-4">
              <p className="text-sm font-semibold text-zinc-800 md:text-base">{idx + 1}. {faq}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">申请大学（方向示例）</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {universities.map((uni) => (
            <span key={uni} className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
              {uni}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact-assessment"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            获取升学路径建议
          </Link>
          <Link
            href="/assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
          >
            先做规划诊断
          </Link>
        </div>
      </section>
    </main>
  );
}
