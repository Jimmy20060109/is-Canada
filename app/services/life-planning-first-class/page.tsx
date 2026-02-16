import Link from "next/link";

const painPoints = [
  "孩子学习没动力、没方向，目标感弱。",
  "孩子偏科，心理压力大，越学越焦虑。",
  "不清楚自己的优势与喜好，对未来很迷茫。",
  "把考大学当唯一目标，进大学后仍陷入迷茫。",
  "在不适合的方向上消耗大量时间、精力和金钱。",
  "家长和孩子沟通困难，规划无法持续执行。",
];

const solutions = [
  "找到动力和方向：从“被动学习”走向“主动成长”。",
  "让教育规划有的放矢：每一步和长期目标对齐。",
  "探索潜在兴趣与职业方向：更早建立方向感。",
  "找到热爱，助力实现满足、坚持、幸福的人生。",
];

const misconceptions = [
  "青少年做什么生涯规划啊，太早了吧！",
  "我以前也没做过生涯规划，现在不也挺好？",
  "身边很多人没做规划，也都过得不错啊。",
  "社会变化这么快，提前规划有什么用？",
  "生涯规划是有钱人家的事，普通家庭没必要。",
  "普通家庭能考个大学就不错了，谈什么生涯。",
  "孩子成绩都一般，哪有时间搞生涯规划。",
];

const faqs = ["大学重要还是专业重要？", "什么时候开始做生涯规划更合适？"];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-teal-50 via-white to-fuchsia-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-[0_25px_90px_-45px_rgba(13,148,136,0.45)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-600">Life Planning</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">3.3 人生规划第一课</h1>
          <p className="mt-6 max-w-4xl text-xl font-bold leading-relaxed text-zinc-900 md:text-3xl">
            以生涯规划开启天赋和热爱，
            <span className="block text-teal-700">让孩子活出闪闪发光的人生。</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">痛点问题</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {painPoints.map((item, idx) => (
            <article key={item} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-bold tracking-wide text-teal-600">Pain 0{idx + 1}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 md:text-base">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">我们能解决的问题</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {solutions.map((item) => (
              <article key={item} className="rounded-2xl border border-emerald-200 bg-white p-5">
                <p className="text-sm leading-relaxed text-zinc-700 md:text-base">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">常见误区</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {misconceptions.map((item, idx) => (
            <div key={item} className="rounded-2xl border border-zinc-200 bg-white px-5 py-4">
              <p className="text-sm text-zinc-700 md:text-base">
                <span className="mr-2 font-bold text-fuchsia-600">误区 {idx + 1}</span>
                {item}
              </p>
            </div>
          ))}
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

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-900 p-6 text-white md:p-8">
          <p className="text-lg font-bold leading-relaxed md:text-2xl">
            “父母唯一应该为孩子做的，就是找到孩子的激情所在，
            鼓励 TA 全力以赴去追求，发挥得淋漓尽致。”
          </p>
          <p className="mt-3 text-sm text-zinc-300">—— 巴菲特</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact-assessment"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              预约人生规划第一课
            </Link>
            <Link
              href="/assessment"
              className="rounded-xl border border-zinc-500 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-200"
            >
              先做方向评估
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
