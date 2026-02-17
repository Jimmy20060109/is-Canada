"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ZoomableImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ZoomableImage({ src, alt, caption }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full text-left"
          aria-label={`View image: ${alt}`}
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </button>
        {caption && <figcaption className="px-4 py-3 text-base font-medium text-zinc-700">{caption}</figcaption>}
      </figure>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] bg-black/88"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-lg border border-white/40 bg-black/20 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/40"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <div
              className="flex h-full w-full items-center justify-center p-4 md:p-10"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-full w-full max-h-[88vh] max-w-6xl">
                <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" priority />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
