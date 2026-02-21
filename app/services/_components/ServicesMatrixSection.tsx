import Link from "next/link";
import type { ServiceItem } from "../data";

type ServicesMatrixSectionProps = {
  services: ServiceItem[];
};

export default function ServicesMatrixSection({ services }: ServicesMatrixSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
      <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black text-[#12285f] md:text-4xl">服务矩阵</h2>
          <p className="text-sm font-medium text-zinc-500">点击卡片进入对应页面</p>
        </div>
        <p className="mb-6 text-sm text-zinc-600 md:text-base">从低龄阶段到大学申请、从方向探索到海外托底，形成一体化闭环。</p>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="rounded-2xl border border-zinc-200 bg-[#fafbff] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-bold tracking-wide text-[#12285f]">{service.id}</p>
                <Link
                  href={service.href}
                  className="rounded-xl border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 transition hover:border-[#12285f]"
                >
                  查看详情
                </Link>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-zinc-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 md:text-base">{service.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-[#d9e1f0] bg-white px-4 py-2 text-sm font-semibold text-[#12285f]"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
