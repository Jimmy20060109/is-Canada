import Link from "next/link";

const strengths = [
  "深耕加拿大教育与升学规划 10+ 年",
  "累计服务家庭 1000+，长期跟进学生 200+",
  "国际认证青少年生涯规划师 + 青少年优势教练",
  "深度理解加拿大教育体系，掌握一手升学资讯",
  "多家优质私校与教育局官方合作资源",
  "五维成长系统：兴趣、学科、专业、择校、教育路径",
];

const commonProblems = [
  "只做申请流程，缺少长期成长规划",
  "信息碎片化，难形成完整教育路径",
  "本地资源浅，缺乏持续跟进机制",
  "只看排名，忽略专业适配与职业方向",
  "缺少海外生活守护与闭环反馈",
  "对中西教育差异缺少可执行方案",
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

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">核心差异对比</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-[#d9e1f0] bg-[#f8fafe] p-7">
            <h3 className="text-xl font-bold text-[#12285f]">IS-Canada 做法</h3>
            <ul className="mt-5 space-y-2 text-sm text-zinc-800 md:text-base">
              {strengths.map((item, idx) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#12285f] text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-zinc-300 bg-white p-7">
            <h3 className="text-xl font-bold text-zinc-700">常见服务痛点</h3>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700 md:text-base">
              {commonProblems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#b3362f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl border border-[#f0d2d7] bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">留学幸福成长系统</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">一套规划，同时推进“申请结果”与“人生方向”。</p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-[#d9e1f0] bg-[#f8fafe] p-6 md:col-span-2">
              <h3 className="text-lg font-bold text-[#12285f]">出国后 5 大系统规划</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {systemPlanning.map((item) => (
                  <span key={item} className="rounded-full border border-[#c6d4f3] bg-white px-3 py-1 text-xs font-semibold text-[#12285f]">
                    {item}
                  </span>
                ))}
              </div>

              <h4 className="mt-7 text-base font-bold text-zinc-900">海外 8 大守护</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {overseasGuard.map((item) => (
                  <span key={item} className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-bold text-[#7f2542]">3 大探索方向</h3>
              <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                {explorationDirections.map((item) => (
                  <li key={item} className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
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

