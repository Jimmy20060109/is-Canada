"use client";

import Image from "next/image";
import Link from "next/link";
import type { ServiceCard } from "./core-services-data";

type CoreServiceCardProps = {
  card: ServiceCard;
};

export default function CoreServiceCard({ card }: CoreServiceCardProps) {
  return (
    <Link
      href={card.href}
      className="group block overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-[320px] md:h-[470px]">
        <Image src={card.imageSrc} alt={card.title} fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/5" />

        <div className="absolute left-6 top-6 z-20 inline-block rounded-full bg-white/90 px-4 py-1 text-xs font-semibold tracking-wide text-zinc-700">
          核心服务
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between rounded-2xl bg-white/95 px-6 py-5 shadow-md backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-[#12285f]">{card.title}</h3>
          <span className="text-3xl text-zinc-500 transition group-hover:translate-x-1 group-hover:text-[#12285f]">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
