import Link from "next/link";

const painToSolution = [
  {
    pain: "只做申请流程，缺少长期成长规划",
    solution: "建立“目标-路径-执行”三层规划，把短期录取与长期成长同步推进。",
  },
  {
    pain: "信息很多但碎片化，家长难以判断先后顺序",
    solution: "采用阶段化里程碑管理，明确每个阶段的关键动作、截止时间和验收标准。",
  },
  {
    pain: "缺少本地支持，遇到问题响应慢",
    solution: "加拿大本地团队长期跟进，提供 7×24 紧急响应与在地协同处置。",
  },
  {
    pain: "只看学校排名，忽视专业与孩子匹配",
    solution: "结合兴趣、学科能力、职业方向，构建“适配优先”的择校与选专业策略。",
  },
  {
    pain: "中西教育差异大，沟通成本高",
    solution: "双语跨文化顾问体系，把政策、课程与学校要求转换为家长可执行方案。",
  },
  {
    pain: "海外阶段缺乏持续守护与反馈闭环",
    solution: "双导师机制（英文导师 + 双语导师）+ 8 大守护，形成学习与生活双闭环支持。",
  },
];

const keyAssurances = [
  "双导师机制：每位学生配备英文导师与中英双语导师",
  "7×24 紧急响应：覆盖学习、生活与突发事件联动",
  "本地资源网络：教育局/学校/社区多端协同支持",
];

const systemPlanning = ["择校申请", "兴趣活动", "选课选科", "专业方向", "大学保录"];

const overseasGuard = ["初到安置", "紧急救援", "官方监管", "沟通反馈", "学业帮助", "个人成长", "住宿家庭", "文化适应"];

const explorationDirections = ["向内挖掘：立足天赋优势", "向外探索：接触真实社会", "面向未来：科学生涯规划"];

export default function WhyUsPage() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#12285f] via-[#1a367f] to-[#7f2542]" />
        <div className="relative mx-auto max-w-7xl rounded-[30px] border border-white/20 bg-white/10 p-8 backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Why IS-Canada</p>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">2.3 为什么是我们</h1>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
            我们不做“流水线申请”，而是把孩子当长期成长项目，提供从方向、策略到执行的系统化支持。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-14 md:pt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">核心差异对比：先看痛点，再看解决方案</h2>
            <p className="mt-3 text-sm text-zinc-600 md:text-base">默认展示核心结论，点开可查看具体方法。</p>
          </div>
          <div className="rounded-full border border-[#d9e1f0] bg-[#f8fafe] px-4 py-2 text-xs font-semibold text-[#12285f]">
            已覆盖 {painToSolution.length} 类核心痛点
          </div>
        </div>

        <div className="mt-7 grid gap-4">
          {painToSolution.map((item, idx) => (
            <article key={item.pain} className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-[0.44fr_0.56fr] md:items-start">
                <div className="rounded-xl border border-[#f0d2d7] bg-[#fff7f8] p-4">
                  <p className="text-xs font-bold tracking-[0.1em] text-[#7f2542]">痛点 {idx + 1}</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-zinc-800 md:text-base">{item.pain}</p>
                </div>
                <div className="rounded-xl border border-[#d9e1f0] bg-[#f8fafe] p-4">
                  <p className="text-xs font-bold tracking-[0.1em] text-[#12285f]">我们的解决方案</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#12285f] md:text-base">{item.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {keyAssurances.map((item) => (
            <div key={item} className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl border border-[#f0d2d7] bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">留学幸福成长系统</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">
            我们把复杂服务拆成 3 个模块：系统规划、海外守护、成长探索。先看摘要，再按需展开细项。
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-[#d9e1f0] bg-[#f8fafe] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#12285f]">Module A</p>
              <h3 className="mt-2 text-lg font-bold text-[#12285f]">5 大系统规划</h3>
              <p className="mt-2 text-sm text-zinc-600">覆盖申请、选课、专业与大学路径。</p>
              <ul className="mt-4 grid gap-2 text-sm font-semibold text-[#12285f] sm:grid-cols-2">
                {systemPlanning.map((item) => (
                  <li key={item} className="rounded-lg border border-[#c6d4f3] bg-white px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#7f2542]">Module B</p>
              <h3 className="mt-2 text-lg font-bold text-zinc-900">8 大海外守护</h3>
              <p className="mt-2 text-sm text-zinc-600">学习、生活、应急与融入全链条支持。</p>
              <ul className="mt-4 grid gap-2 text-sm font-semibold text-zinc-700 sm:grid-cols-2">
                {overseasGuard.map((item) => (
                  <li key={item} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#7f2542]">Module C</p>
              <h3 className="mt-2 text-lg font-bold text-[#7f2542]">3 大探索方向</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {explorationDirections.map((item) => (
                  <li key={item} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 md:pb-24">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">我们的承诺</h2>
          <p className="mt-5 max-w-5xl text-sm leading-relaxed text-zinc-700 md:text-base">
            我们坚持以加拿大本地视角和华人家庭沟通方式，帮助学生在学业表现、生活适应、社会融入与长期职业发展上同步成长。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-assessment" className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c3d8d]">
              获取专属方案
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#12285f]"
            >
              查看核心服务
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

