import Link from "next/link";

const introPoints = [
  "总部位于加拿大安省，长期服务多伦多及周边核心学区家庭。",
  "团队熟悉本地公校、私校、教育局与升学政策变化。",
  "以“规划 + 申请 + 守护”模式，帮助家庭跨越中西教育差异。",
  "坚持长期陪伴，不把服务止于录取通知书。",
];

const mediaTags = [
  "CCTV 访谈内容露出",
  "本地教育活动合作",
  "家长公开讲座分享",
  "学校交流活动记录",
  "社区媒体报道",
  "合作机构联合发布",
];

const cctvFrames = [
  "央视访谈现场 01",
  "央视访谈现场 02",
  "央视访谈现场 03",
  "央视访谈现场 04",
  "央视访谈现场 05",
  "央视访谈现场 06",
];

export default function Page() {
  const rollingFrames = [...cctvFrames, ...cctvFrames];

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-zinc-50">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-[0_25px_90px_-45px_rgba(14,116,144,0.35)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-600">Headquarters</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">2.1 总部所在</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
            从加拿大本地视角出发，结合中国家庭教育诉求，我们把复杂留学决策拆解为可执行、可复盘、可持续优化的成长路径。
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-10 md:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_16px_50px_-35px_rgba(24,24,27,0.45)] md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900">旧网站核心介绍（整理版）</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
            {introPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_16px_50px_-35px_rgba(24,24,27,0.45)] md:p-8">
          <h2 className="text-2xl font-extrabold text-zinc-900">教育局 ISP 参考资源</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            你提到的教育局国际生项目入口如下，可用于展示政策透明度和官方信息来源。
          </p>
          <a
            href="https://www.hdsb.ca/academics-resources/international-student-program-isp-fee-paying/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            打开 HDSB ISP 页面
          </a>
          <p className="mt-3 text-xs text-zinc-500 break-all">
            https://www.hdsb.ca/academics-resources/international-student-program-isp-fee-paying/
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">央视访谈照片滚动</h2>
        <p className="mt-3 text-sm text-zinc-600 md:text-base">当前先放占位卡片。你给我图片文件路径后，我会替换成真实访谈照片。可左右滑动查看。</p>
        <div className="mt-5 overflow-x-auto rounded-3xl border border-zinc-200 bg-white py-5">
          <div className="flex w-max gap-4 px-4">
            {rollingFrames.map((label, idx) => (
              <div
                key={`${label}-${idx}`}
                className="flex h-40 w-64 shrink-0 items-end rounded-2xl border border-zinc-300 bg-gradient-to-br from-zinc-200 to-zinc-100 p-3"
              >
                <p className="rounded bg-zinc-900/75 px-2 py-1 text-xs font-semibold text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">媒体介绍</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {mediaTags.map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about/media-coverage"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            查看更多媒体背书
          </Link>
          <Link
            href="/contact-assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
          >
            咨询总部顾问团队
          </Link>
        </div>
      </section>
    </main>
  );
}
