import Link from "next/link";
import MediaLogoMarquee from "@/app/components/MediaLogoMarquee";

const storyHighlights = [
  "以结果为导向：从目标拆解到阶段执行，每一步都有明确标准。",
  "以跨文化为桥梁：把中加教育差异转化为可理解、可选择的路径。",
  "以长期陪伴为承诺：从申请到在加成长，持续跟进关键节点。",
];

const mediaText = [
  "面对中西教育体系差异，许多家庭并不缺信息，真正缺的是可落地的判断框架与执行路径。",
  "基于多年一线实践，创始团队形成“规划先行、证据驱动、长期护航”的服务方法，帮助家庭在关键节点做出更稳妥决策。",
  "我们关注的不只是录取结果，更是孩子在学习能力、适应能力与长期发展方向上的持续成长。",
];

const wechatArticles = [
  {
    name: "Lily Xu 许立",
    title: "创始人教育理念与留学方法论",
    meta: "人物专访",
    url: "#",
  },
  {
    name: "创始团队访谈",
    title: "从咨询到陪跑：团队协作模式",
    meta: "团队故事",
    url: "#",
  },
  {
    name: "教育方法论解读",
    title: "规划先行、证据驱动、长期护航",
    meta: "方法论",
    url: "#",
  },
  {
    name: "家长案例实录",
    title: "关键节点决策与结果复盘",
    meta: "案例",
    url: "#",
  },
];

const mediaReports = [
  { name: "网易", url: "https://www.163.com/dy/article/KKPANAQ6055619ZC.html?referFrom=", src: "/媒体logo/images.png", scale: 1.6 },
  { name: "腾讯网", url: "https://page.om.qq.com/page/Od0Z9o4m0qiobnbz8bPUqZ4w0", src: "/媒体logo/unnamed.png", scale: 1.6 },
  { name: "搜狐网", url: "https://www.sohu.com/a/983497613_120985304", src: "/媒体logo/Sohu_logo.png", scale: 1.6 },
  { name: "新京报", url: "https://www.bjnews.com.cn/detail/1770038250129335.html", src: "/媒体logo/images.jpg", scale: 1.6 },
  { name: "北方网", url: "http://economy.enorth.com.cn/system/2026/02/03/059126343.shtml", src: "/媒体logo/北方网.jpg", scale: 1.6 },
  { name: "新浪网", url: "https://k.sina.com.cn/article_723885242_1af789f7a00101bots.html", src: "/媒体logo/Sina-News-新浪新闻-Logo.png", scale: 1.6 },
  { name: "凤凰网", url: "https://hebei.ifeng.com/c/8qREt2xSlyW", src: "/媒体logo/IFENG.COM-凤凰网-Logo.png", scale: 1.6 },
  { name: "中华网", url: "https://life.china.com/2026-02/02/content_539775.html", src: "/媒体logo/中华网.jpg", scale: 1.6 },
  { name: "中国财经时报网", url: "http://life.3news.cn/tly/2026/0202/1150703.html", src: "/媒体logo/财报网.png", scale: 1.6 },
  { name: "大众网", url: "https://www.dzwww.com/wsms/202602/t20260204_17395966.htm", src: "/媒体logo/CCTV.png", scale: 1.05 },
];

const founderBio = [
  "Lily Xu（许立）早年独自赴英国留学，先后取得英国 University of Hertfordshire 人力资源硕士、厦门大学会计硕士、兰州大学现当代文学硕士。",
  "在专注国际学生教育服务行业之前，她曾任加拿大观澜湖风险投资亚洲区总经理，并在国内知名投资机构深圳东方富海从事投资管理工作。",
  "长期关注教育赛道与国际学生成长议题，持续研究中西教育差异及可落地的升学支持路径。",
];

export default function FounderStoryPage() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7f2542] via-[#9f2f46] to-[#12285f]" />
        <div className="relative mx-auto max-w-7xl rounded-[30px] border border-white/20 bg-white/10 p-8 backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Founder Story</p>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">2.2 创始人故事</h1>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
            品牌真正的差异，不在于“说了什么”，而在于“长期做成了什么”。这一路径，构成了爱思加的方法论与执行标准。
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pt-10 pb-14 md:pt-14 md:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black text-[#12285f]">1. 人生故事短视频</h2>
          <div className="mt-5 flex h-60 items-center justify-center rounded-2xl border border-zinc-300 bg-gradient-to-br from-[#e8ecfa] to-[#f7f9ff]">
            <p className="text-sm font-semibold text-zinc-700">视频占位区（可替换 Bilibili / 腾讯视频链接）</p>
          </div>
          <p className="mt-3 text-sm text-zinc-600">建议用于展示创始人教育理念、关键经历与服务初心。</p>
        </article>

        <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black text-[#12285f]">2. 创始人简介</h2>
          <div className="mt-5 space-y-3">
            {founderBio.map((item) => (
              <p key={item} className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {item}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-9">
          <div className="grid gap-7 lg:grid-cols-[0.68fr_0.32fr]">
            <div>
              <h2 className="text-2xl font-black text-[#12285f]">3. 品牌故事文字版</h2>
              <div className="mt-6 space-y-3">
                {mediaText.map((item) => (
                  <p key={item} className="text-sm leading-relaxed text-zinc-700 md:text-base">
                    {item}
                  </p>
                ))}
              </div>

              <h3 className="mt-9 text-lg font-bold text-zinc-900">方法论要点</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 md:text-base">
                {storyHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7f2542]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-[#d9e1f0] bg-[#f8fafe] p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7f2542]">Wechat Articles</p>
              <h3 className="mt-2 text-lg font-black text-[#12285f]">微信文章目录</h3>
              <p className="mt-2 text-xs text-zinc-600">点击条目进入原文</p>

              <div className="mt-3 space-y-2">
                {wechatArticles.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg border border-[#e4e8f2] bg-white px-3 py-2.5 transition hover:border-[#12285f] hover:bg-[#fdfefe]"
                  >
                    <p className="text-[11px] font-semibold tracking-wide text-[#7f2542]">{item.meta}</p>
                    <p className="mt-1 text-sm font-bold text-[#12285f]">{item.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">{item.title}</p>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">报道媒体</h2>
        <p className="mt-3 text-sm text-zinc-600 md:text-base">滚动 Logo 均可点击，直达对应报道链接。</p>

        <MediaLogoMarquee logos={mediaReports} />

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/about/media-coverage" className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c3d8d]">
            查看媒体与资质
          </Link>
          <Link
            href="/contact-assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#12285f]"
          >
            预约创始人团队咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
