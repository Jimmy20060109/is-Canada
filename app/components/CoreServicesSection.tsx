"use client";

import { useMemo, useState } from "react";
import CoreServiceCard from "./CoreServiceCard";
import { SERVICE_CARDS } from "./core-services-data";

type SlideDirection = "next" | "prev";

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
            <CoreServiceCard card={SERVICE_CARDS[activeIndex]} />
            <div className="hidden md:block">
              <CoreServiceCard card={SERVICE_CARDS[nextIndex]} />
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
