"use client";

import Image from "next/image";

type MediaLogo = {
  name: string;
  url: string;
  src?: string;
  scale?: number;
};

type MediaLogoMarqueeProps = {
  logos: MediaLogo[];
};

export default function MediaLogoMarquee({ logos }: MediaLogoMarqueeProps) {
  return (
    <div className="mt-7 space-y-4">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4">
        <div className="media-marquee-track flex w-max gap-4">
          {[...logos, ...logos].map((logo, index) => (
            <a
              key={`${logo.name}-${index}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-24 w-56 items-center justify-center rounded-xl border border-zinc-200 bg-white p-3 transition hover:border-[#12285f]"
            >
              {logo.src ? (
                <div className="relative h-14 w-44">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="180px"
                    style={{ transform: `scale(${logo.scale ?? 1})` }}
                  />
                </div>
              ) : (
                <span className="text-base font-bold text-[#12285f]">{logo.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4">
        <div className="media-marquee-track-reverse flex w-max gap-4">
          {[...logos, ...logos].map((logo, index) => (
            <a
              key={`reverse-${logo.name}-${index}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-24 w-56 items-center justify-center rounded-xl border border-zinc-200 bg-white p-3 transition hover:border-[#7f2542]"
            >
              {logo.src ? (
                <div className="relative h-14 w-44">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="180px"
                    style={{ transform: `scale(${logo.scale ?? 1})` }}
                  />
                </div>
              ) : (
                <span className="text-base font-bold text-[#12285f]">{logo.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
