import ImageCarousel from "@/app/components/ImageCarousel";
import ZoomableImage from "@/app/components/ZoomableImage";

const locationHighlights = [
  "总部位于安省荷顿地区，处于 GTA 西部教育与生活核心圈。",
  "距多伦多市中心及皮尔逊国际机场约 30 分钟车程，通勤高效。",
  "距尼亚加拉大瀑布与美加边境约 1 小时车程，周末出行便捷。",
  "核心服务覆盖奥克维尔、伯灵顿、米尔顿与荷顿山四大城市。",
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

const universityPlaceholderSlides = [
  {
    src: "/Universities/ABUIABACGAAglOLrkAYomrLl8wYwsgU48gI.jpg",
    alt: "University placeholder photo 1",
    caption: "样板图 01：可替换为学校或校园活动实拍",
  },
  {
    src: "/Universities/OIP.webp",
    alt: "University placeholder photo 2",
    caption: "样板图 02：可替换为课堂或城市学习场景",
  },
  {
    src: "/Universities/R.jpg",
    alt: "University placeholder photo 3",
    caption: "样板图 03：可替换为校园设施或团队活动",
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

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-12 md:pt-14">
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
            <ZoomableImage
              src="/about us resources/town_of_oakville_cover.jpg"
              alt="奥克维尔城市景观"
              caption="奥克维尔城市景观"
            />
            <ZoomableImage
              src="/about us resources/Burlington_Aerial_view_2024.jpg"
              alt="伯灵顿航拍景观"
              caption="伯灵顿航拍景观"
            />
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

          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold text-zinc-700">校园场景轮播（示例）</p>
            <ImageCarousel slides={universityPlaceholderSlides} />
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

          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold text-zinc-700">城市与活动轮播（示例）</p>
            <ImageCarousel slides={universityPlaceholderSlides} />
          </div>
        </div>
      </section>

    </main>
  );
}




