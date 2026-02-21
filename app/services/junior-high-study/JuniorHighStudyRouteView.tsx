import Link from "next/link";

const troubles = [
  "成绩优异，但缺少目标感和动力，未来迷茫？",
  "中考/高考压力过大，是否考虑换一条赛道？",
  "成绩一般或偏科，想“弯道超车”却找不到正确路径？",
  "留学信息混乱，公校私校、课程体系看不懂？",
  "担心孩子在国外的适应、安全与长期发展方向？",
  "不了解未来就业趋势，怕专业和赛道选错？",
  "如何兼顾出国后的安全、健康和学业成长？",
];

const pathSteps = [
  {
    title: "预评",
    heading: "全方位洞察孩子留学潜能",
    points: ["家庭教育与资源盘点", "学术与英语能力评估", "留学适应力测评"],
  },
  {
    title: "择校",
    heading: "量身定制“冲刺 + 保底 + 目标”策略",
    points: ["深度解析公私校与课程体系", "定制个性化选校计划", "锁定适配成长环境"],
  },
  {
    title: "申请",
    heading: "全程陪伴，严格关键节点",
    points: ["文书与面试个性化指导", "标化成绩规划", "多轮申请跟进与录取建议"],
  },
  {
    title: "行前",
    heading: "一站式无忧启航",
    points: ["签证与入境指导", "住宿与监护安排", "行李准备与接机协同"],
  },
];

const mustKnow = [
  { title: "教育体系", desc: "安省 K-12 与 OSSD 要求、学分体系及升学路径。" },
  { title: "英语过渡", desc: "ESL 分级与主课衔接节奏，避免“语言卡关”。" },
  { title: "费用结构", desc: "学费、住宿、保险、监护等预算与阶段性投入。" },
  { title: "陪读与监护", desc: "家长陪读可行性、未成年监护合规与责任边界。" },
  { title: "签证规则", desc: "学习许可、续签、入境材料与常见拒签风险。" },
  { title: "公校 vs 私校", desc: "入学门槛、管理风格、资源特点与适配人群。" },
  { title: "完整流程", desc: "从定校到入学落地的时间轴与关键里程碑。" },
];

const faqs = [
  "低龄留学最晚什么时候开始准备？",
  "孩子英语一般，是否可以先出去再适应？",
  "公校和私校到底怎么选，差别在哪里？",
  "未成年监护和住宿，家长最该关注什么？",
  "申请流程中最容易踩坑的环节有哪些？",
  "如何判断孩子是否真的适合低龄留学？",
];

const testimonials = [
  {
    name: "谢铭涵家长",
    quote:
      "最打动我们的是方案非常具体。每一步都有人跟进，孩子适应比我们预期快很多。",
  },
  {
    name: "K 同学家长",
    quote: "从选校到落地，团队把复杂问题讲得很清楚，我们家长真正安心了。",
  },
  {
    name: "徐雷家长",
    quote: "孩子在新环境里很快找到节奏，也明确了接下来的学习方向。",
  },
];

const schoolTags = [
  "Toronto District School Board",
  "York Region DSB",
  "Upper Canada District SB",
  "Waterloo Catholic DSB",
  "St. Michael's College School",
  "Appleby College",
  "Havergal College",
  "Branksome Hall",
];

export default function Page() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#7f2542]">Study Abroad Path</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#12285f] md:text-6xl">3.1 低龄留学</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            出国前规划，打造专属留学路径。我们关注的不只是“申请成功”，更是孩子的适应力、学业节奏与长期发展。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">你和孩子是否遇到这些困扰？</h2>
        <div className="mt-6 grid gap-3">
          {troubles.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800"
            >
              <span className="mt-0.5 text-lg font-black leading-none text-[#b3362f]">×</span>
              <p className="text-sm font-medium md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">四步打造留学路径</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {pathSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="inline-flex rounded-full bg-[#12285f] px-3 py-1 text-xs font-bold text-white">{step.title}</p>
              <h3 className="mt-3 text-xl font-bold text-zinc-900">{step.heading}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {step.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#12285f]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">低龄留学必须知道</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mustKnow.map((item) => (
            <article key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">常见问题</h2>
        <div className="mt-6 grid gap-3">
          {faqs.map((faq, index) => (
            <div key={faq} className="rounded-2xl border border-zinc-200 bg-white px-5 py-4">
              <p className="text-sm font-semibold text-zinc-800 md:text-base">{index + 1}. {faq}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">成功案例 / 家长证言</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-zinc-700">“{item.quote}”</p>
              <footer className="mt-4 text-sm font-bold text-zinc-900">—— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">申请中学（合作方向）</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {schoolTags.map((school) => (
            <span
              key={school}
              className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700"
            >
              {school}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact-assessment"
            className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1a3a86]"
          >
            获取专属低龄留学方案
          </Link>
          <Link
            href="/assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#12285f]"
          >
            先做留学适配评估
          </Link>
        </div>
      </section>
    </main>
  );
}
