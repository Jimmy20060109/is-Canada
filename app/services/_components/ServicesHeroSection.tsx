import Link from "next/link";

export default function ServicesHeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-16 md:pb-16 md:pt-20">
      <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7f2542]">Core Services</p>
        <h1 className="mt-3 text-3xl font-black text-[#12285f] md:text-4xl">3.0 核心服务</h1>
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
          我们把留学服务从“流程导向”升级为“结果导向”：不只是办申请，而是帮助孩子找到适合的成长赛道，让每一次投入都转化为长期竞争力与幸福感。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact-assessment"
            className="rounded-xl bg-[#12285f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1a3a86]"
          >
            预约评估
          </Link>
          <Link
            href="/assessment"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-[#12285f]"
          >
            填写评估表
          </Link>
        </div>
      </div>
    </section>
  );
}
