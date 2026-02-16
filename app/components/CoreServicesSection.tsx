"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type ServiceCard = {
  title: string;
  href: string;
  imageSrc: string;
};

type SlideDirection = "next" | "prev";

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "低龄留学",
    href: "/services/junior-high-study",
    imageSrc: "/HomePage Resources/低龄留学.jpg",
  },
  {
    title: "升学规划",
    href: "/services/academic-planning",
    imageSrc: "/HomePage Resources/升学规划.jpg",
  },
  {
    title: "人生规划第一课",
    href: "/services/life-planning-first-class",
    imageSrc: "/HomePage Resources/人生规划第一课.jpg",
  },
  {
    title: "海外8大守护",
    href: "/services/overseas-8-support",
    imageSrc: "/HomePage Resources/海外8大守护.jpg",
  },
  {
    title: "夏令营",
    href: "/services/summer-camp",
    imageSrc: "/HomePage Resources/tegan-mierle-fDostElVhN8-unsplash.jpg",
  },
];

function Card({ card }: { card: ServiceCard }) {
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

export default function CoreServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>("next");
  const total = SERVICE_CARDS.length;
  const nextIndex = useMemo(() => (activeIndex + 1) % total, [activeIndex, total]);

  const handlePrev = () => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleGoTo = (targetIndex: number) => {
    if (targetIndex === activeIndex) return;
    setDirection(targetIndex > activeIndex ? "next" : "prev");
    setActiveIndex(targetIndex);
  };

  return (
    <section className="bg-[#f3f4f6] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[320px_1fr]">
        <div className="lg:pt-8">
          <p className="text-5xl font-light leading-tight text-[#12285f] md:text-6xl">核心服务</p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            从低龄留学到升学规划，提供长期陪跑式支持，让每一步都可执行、可落地。
          </p>
        </div>

        <div>
          <div
            key={`${activeIndex}-${direction}`}
            className={`grid gap-5 md:grid-cols-2 service-cards-enter ${
              direction === "next" ? "service-cards-enter-next" : "service-cards-enter-prev"
            }`}
          >
            <Card card={SERVICE_CARDS[activeIndex]} />
            <div className="hidden md:block">
              <Card card={SERVICE_CARDS[nextIndex]} />
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous service"
              onClick={handlePrev}
              className="h-11 w-11 rounded-full border border-zinc-200 bg-white text-2xl text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-900"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {SERVICE_CARDS.map((card, index) => (
                <button
                  key={card.title}
                  type="button"
                  aria-label={`Go to ${card.title}`}
                  onClick={() => handleGoTo(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeIndex ? "w-8 bg-violet-500" : "w-2.5 bg-zinc-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next service"
              onClick={handleNext}
              className="h-11 w-11 rounded-full border border-zinc-200 bg-white text-2xl text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-900"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
