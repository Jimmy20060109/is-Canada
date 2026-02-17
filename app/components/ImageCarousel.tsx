"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type CarouselSlide = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageCarouselProps = {
  slides: CarouselSlide[];
};

export default function ImageCarousel({ slides }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const current = useMemo(() => slides[index], [slides, index]);

  if (total === 0) {
    return null;
  }

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm md:p-4">
      <div className="relative overflow-hidden rounded-xl">
        <div className="relative aspect-[16/9] w-full bg-zinc-100">
          <Image src={current.src} alt={current.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 900px" />
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/70"
              aria-label="Previous image"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/70"
              aria-label="Next image"
            >
              Next
            </button>
          </>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-sm text-zinc-700 md:text-base">{current.caption || current.alt}</p>
        <p className="text-xs font-semibold text-zinc-500">
          {index + 1} / {total}
        </p>
      </div>

      {total > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {slides.map((slide, dotIndex) => (
            <button
              type="button"
              key={slide.src}
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-[#12285f]" : "bg-zinc-300 hover:bg-zinc-400"}`}
              aria-label={`Go to image ${dotIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
