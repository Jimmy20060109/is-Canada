"use client";

import { useState } from "react";

type FeedbackCarouselProps = {
  quotes: string[];
};

export default function FeedbackCarousel({ quotes }: FeedbackCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const total = quotes.length;

  if (total === 0) {
    return null;
  }

  const goPrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + total) % total);
  };
  const goNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative mt-7">
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous feedback"
        className="absolute -left-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-[#12285f] hover:text-[#12285f] md:inline-flex"
      >
        ←
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next feedback"
        className="absolute -right-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-[#12285f] hover:text-[#12285f] md:inline-flex"
      >
        →
      </button>

      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <div
          key={index}
          className={`grid gap-6 md:grid-cols-[0.55fr_0.45fr] md:items-stretch transition duration-300 ${
            direction === "next" ? "animate-[slideInRight_300ms_ease]" : "animate-[slideInLeft_300ms_ease]"
          }`}
        >
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-500">家长反馈</p>
              <p className="mt-3 text-base leading-relaxed text-zinc-800 md:text-lg">“{quotes[index]}”</p>
            </div>
            <span className="text-xs text-zinc-500">
              {index + 1} / {total}
            </span>
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-[#f8fafe] p-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-zinc-700">家长真实照片位</p>
              <p className="mt-2 text-xs text-zinc-500">后续替换为图片</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
