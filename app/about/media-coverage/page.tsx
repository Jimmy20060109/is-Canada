import Link from "next/link";
import MediaLogoMarquee from "@/app/components/MediaLogoMarquee";
import FeedbackCarousel from "@/app/components/FeedbackCarousel";

const hardCerts = [
  "国际认证青少年生涯规划师团队",
  "加拿大本地教育服务合规运营",
  "多家优质私校与教育局合作通道",
  "中加双语跨文化升学指导体系",
  "申请规划 + 海外守护双闭环机制",
];

const mediaPartners = [
  "央视相关栏目合作与报道",
  "加拿大教育局 ISP 信息资源协作",
  "本地学校开放日/讲座活动合作",
  "家长社群媒体与教育栏目协同",
  "合作机构联合传播与品牌共建",
  "校方与社区活动现场记录",
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

const userQuotes = [
  "流程清晰、节奏稳，家长和孩子都更有方向感。",
  "团队专业且细致，关键节点都有明确支持。",
  "不仅帮助录取，更帮助孩子建立长期竞争力。",
];

export default function MediaCoveragePage() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#12285f] via-[#1c3a87] to-[#7f2542]" />
        <div className="relative mx-auto max-w-7xl rounded-[30px] border border-white/20 bg-white/10 p-8 backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Media & Trust</p>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">2.4 媒体与资质</h1>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
            我们把信任建立在“可验证”之上：提供可核验的资质证据、真实的服务口碑与长期合作记录。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-14 md:pt-14">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-[#d9e1f0] bg-[#f8fafe] p-7 md:p-8">
            <h2 className="text-2xl font-black text-[#12285f]">资质 / 认证</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              {hardCerts.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#12285f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#f0d2d7] bg-[#fff7f8] p-7 md:p-8">
            <h2 className="text-2xl font-black text-[#7f2542]">媒体 / 合作报道</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              {mediaPartners.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#b3362f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">媒体 Logo 墙</h2>
        <p className="mt-3 text-sm text-zinc-600 md:text-base">滚动 Logo 均可点击，直达对应报道链接。</p>
        <MediaLogoMarquee logos={mediaReports} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <h2 className="text-2xl font-black text-[#12285f] md:text-3xl">真实客户评价（节选）</h2>
        <p className="mt-3 text-sm text-zinc-600 md:text-base">左右滑动查看，每一页一条反馈。</p>
        <FeedbackCarousel quotes={userQuotes} />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#12285f]"
          >
            返回关于我们
          </Link>
          <Link href="/contact-assessment" className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c3d8d]">
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
