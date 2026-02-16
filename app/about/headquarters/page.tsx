import Image from "next/image";
import Link from "next/link";

const locationHighlights = [
  "总部位于安省南部荷顿地区（Halton Region），属大多伦多地区（GTA）。",
  "距多伦多市中心与皮尔逊国际机场约 30 分钟车程。",
  "距尼亚加拉大瀑布与美加边境约 1 小时车程。",
  "核心覆盖城市：奥克维尔（Oakville）、伯灵顿（Burlington）、米尔顿（Milton）、荷顿山（Halton Hills）。",
];

const educationHighlights = [
  "荷顿地区拥有丰富且高质量的公私立教育资源。",
  "公立中小学由荷顿天主教公立教育局与荷顿公立教育局管理。",
  "区域内学校整体学术表现稳定，优质学校分布密集。",
  "本地英语环境浓度高，国际学生中文比例相对较低。",
];

const universityReach = [
  "30 分钟内：多伦多大学、麦克马斯特大学、约克大学等优质高校资源圈。",
  "1–3 小时：滑铁卢大学、皇后大学、西安大略大学等重点院校。",
];

const livingHighlights = [
  "社区环境成熟，湖滨、绿地、步道与运动场地资源丰富。",
  "奥克维尔与伯灵顿市中心具欧陆风格，生活设施完善。",
  "全年大型活动密集：节庆巡游、音乐节、体育赛事、水上活动等。",
  "居民运动参与度高，冬季可快速抵达周边滑雪场。",
];

const economyHighlights = [
  "区域产业结构多元，涵盖服务业、汽车、制造、医药、ICT、建筑等。",
  "超 260 家国家与国际企业在该区域设立机构。",
  "为学生长期发展与职业探索提供稳定且多样化环境。",
];

const imageSlots = [
  {
    title: "学校与学生实拍",
    note: "建议提供布莱斯、麦克拉克伦、圣洛约拉、曼特学校学生场景",
    ratio: "4:3，建议 2000×1500",
  },
  {
    title: "体育与城市活动图",
    note: "建议提供奥克维尔成长的皮划艇冠军 Adam / 加拿大公开赛球场等",
    ratio: "16:9，建议 2400×1350",
  },
];

export default function HeadquartersPage() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10235a] via-[#17306f] to-[#b3362f]" />
        <div className="relative mx-auto max-w-7xl rounded-[30px] border border-white/20 bg-white/10 p-8 backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Headquarters</p>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">2.1 总部所在</h1>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
            我们的总部与合作学校网络深耕于荷顿地区（Halton Region），
            以高质量教育资源、稳定社区环境与强本地连接，为国际学生家庭提供长期陪跑式支持。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-3xl font-black text-[#12285f] md:text-4xl">区位与城市覆盖</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {locationHighlights.map((item) => (
              <li key={item} className="rounded-xl border border-[#d9e1f0] bg-[#f8fafe] px-4 py-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="relative aspect-[16/10] w-full">
                <Image src="/about us resources/town_of_oakville_cover.jpg" alt="奥克维尔城市景观" fill className="object-cover" />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-zinc-700">奥克维尔城市景观</figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="relative aspect-[16/10] w-full">
                <Image src="/about us resources/Burlington_Aerial_view_2024.jpg" alt="伯灵顿航拍景观" fill className="object-cover" />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-zinc-700">伯灵顿航拍景观</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-3xl font-black text-[#12285f] md:text-4xl">教育资源与学习环境</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {educationHighlights.map((item) => (
              <li key={item} className="rounded-xl border border-[#d9e1f0] bg-[#f8fafe] px-4 py-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-black text-[#12285f]">名校可达性</h3>
          <ul className="mt-4 space-y-2">
            {universityReach.map((item) => (
              <li key={item} className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-4 md:p-5">
            <p className="text-sm font-semibold text-zinc-700">图片预留位 02：学校与学生实拍</p>
            <p className="mt-1 text-xs text-zinc-500">建议内容：布莱斯、麦克拉克伦、圣洛约拉、曼特学校学生场景；比例 4:3（2000×1500）</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-3xl font-black text-[#12285f] md:text-4xl">生活方式与社区生态</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {livingHighlights.map((item) => (
              <li key={item} className="rounded-xl border border-[#d9e1f0] bg-[#f8fafe] px-4 py-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-black text-[#12285f]">区域经济与职业环境</h3>
          <ul className="mt-4 space-y-2">
            {economyHighlights.map((item) => (
              <li key={item} className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-4 md:p-5">
            <p className="text-sm font-semibold text-zinc-700">图片预留位 03：体育与城市活动</p>
            <p className="mt-1 text-xs text-zinc-500">建议内容：奥运皮划艇冠军 Adam、加拿大公开赛球场、社区活动；比例 16:9（2400×1350）</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-3xl font-black text-[#12285f] md:text-4xl">图片素材清单（待你提供）</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {imageSlots.map((slot) => (
              <article key={slot.title} className="rounded-2xl border border-zinc-200 bg-[#fafbff] p-5">
                <p className="text-base font-bold text-zinc-900">{slot.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{slot.note}</p>
                <p className="mt-2 text-xs font-medium text-zinc-500">{slot.ratio}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about/media-coverage"
              className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c3d8d]"
            >
              查看媒体与资质
            </Link>
            <Link
              href="/contact-assessment"
              className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#12285f]"
            >
              咨询总部顾问团队
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
