import type { ServiceOutcome } from "../data";

type ServicesOutcomesSectionProps = {
  outcomes: ServiceOutcome[];
};

export default function ServicesOutcomesSection({ outcomes }: ServicesOutcomesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
      <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <h2 className="text-3xl font-black text-[#12285f] md:text-4xl">结果导向的 4 个核心价值</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {outcomes.map((item) => (
            <article key={item.title} className="rounded-2xl border border-zinc-200 bg-[#fafbff] p-5">
              <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
