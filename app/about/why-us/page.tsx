import Link from "next/link";

const strengths = [
  "深耕加拿大教育与升学规划 10+ 年",
  "累计服务家庭 1000+，长期跟进学生 200+",
  "国际认证青少年生涯规划师 + 青少年天赋优势教练",
  "深度理解加拿大教育全貌，一手资讯对接名校录取路径",
  "多家优质私校与教育局合作资源",
  "五维成长系统规划：兴趣、学科、专业、择校、教育路径",
];

const commonProblems = [
  "经验以“申请流程”为主，缺少长期成长规划",
  "信息碎片化，难形成完整教育路径",
  "缺乏本地深度资源与持续跟进机制",
  "常见“只看排名”建议，忽略专业适配与职业方向",
  "无法提供海外生活守护与闭环反馈",
  "对中西教育差异缺少可执行解决方案",
];

const systemPlanning = [
  "择校申请",
  "兴趣活动",
  "选课选科",
  "专业方向",
  "大学保录",
];

const overseasGuard = ["初到安置", "紧急救援", "官方监管", "沟通反馈", "学业帮助", "个人成长", "住宿家庭", "文化适应"];

const explorationDirections = ["向内挖掘：立足天赋优势", "向外探索：接触真实社会", "面向未来：科学生涯规划"];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-stone-100 via-white to-red-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_25px_90px_-45px_rgba(120,53,15,0.35)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">Why IS-Canada</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">2.3 为什么是我们</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            我们不做“流水线申请”。我们做的是：把孩子当成长期成长项目，提供从方向、策略到落地执行的系统化支持。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">核心差异对比</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-xl font-bold text-amber-800">IS-Canada 做法</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-800 md:text-base">
              {strengths.map((item, idx) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-zinc-300 bg-zinc-100 p-6">
            <h3 className="text-xl font-bold text-zinc-700">常见服务痛点</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 md:text-base">
              {commonProblems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-red-200 bg-gradient-to-b from-red-50 to-white p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">维放力 · 留学幸福成长系统</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700 md:text-base">
            一套规划，成就名校与幸福人生双飞跃。核心是把“申请结果”和“人生方向”放在同一张路线图里推进。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-red-200 bg-white p-5 md:col-span-2">
              <h3 className="text-lg font-bold text-red-700">出国后 5 大系统规划</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {systemPlanning.map((item) => (
                  <span key={item} className="rounded-full border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                    {item}
                  </span>
                ))}
              </div>

              <h4 className="mt-6 text-base font-bold text-zinc-900">海外 8 大守护</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {overseasGuard.map((item) => (
                  <span key={item} className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-red-200 bg-white p-5">
              <h3 className="text-lg font-bold text-red-700">3 大探索方向</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
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

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">我们的承诺</h2>
          <p className="mt-4 max-w-5xl text-sm leading-relaxed text-zinc-700 md:text-base">
            西人尚进取、华人尚协和。我们坚持用加拿大本地视角和华人家庭沟通方式，帮助学生在“学业表现、生活适应、社会融入、长期职业发展”四条线上同步成长。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact-assessment"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              获取专属方案
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
            >
              查看核心服务
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
