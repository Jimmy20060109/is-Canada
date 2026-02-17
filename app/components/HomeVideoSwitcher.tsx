"use client";

import { useMemo, useState } from "react";

type VideoOption = {
  id: "full" | "short";
  label: string;
  embedUrl?: string;
  openUrl?: string;
};

const VIDEO_OPTIONS: VideoOption[] = [
  {
    id: "full",
    label: "20 分钟完整版",
  },
  {
    id: "short",
    label: "10 分钟精编版",
    embedUrl: "https://player.bilibili.com/player.html?bvid=BV1EZkPBEEwZ&page=1&autoplay=0",
    openUrl: "https://www.bilibili.com/video/BV1EZkPBEEwZ/",
  },
];

export default function HomeVideoSwitcher() {
  const [activeId, setActiveId] = useState<VideoOption["id"]>("short");

  const activeVideo = useMemo(
    () => VIDEO_OPTIONS.find((option) => option.id === activeId) ?? VIDEO_OPTIONS[1],
    [activeId],
  );

  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:p-6">
      <div className="flex flex-wrap gap-2">
        {VIDEO_OPTIONS.map((option) => {
          const isActive = option.id === activeId;
          return (
            <button
              type="button"
              key={option.id}
              onClick={() => setActiveId(option.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                isActive
                  ? "border border-[#b3362f] bg-[#b3362f] text-white"
                  : "border border-[#b3362f] bg-transparent text-[#b3362f] hover:bg-[#fff2f0]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {activeVideo.embedUrl ? (
        <>
          <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <div className="aspect-video w-full">
              <iframe
                src={activeVideo.embedUrl}
                title="CCTV 大国匠心合作视频"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {activeVideo.openUrl && (
            <div className="mt-4">
              <a
                href={activeVideo.openUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-[#12285f] hover:text-[#12285f]"
              >
                在 Bilibili 打开视频
              </a>
            </div>
          )}
        </>
      ) : (
        <div className="mt-4 flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white text-center">
          <div>
            <p className="text-lg font-semibold text-zinc-800">{activeVideo.label}</p>
            <p className="mt-2 text-sm text-zinc-500">链接待补充</p>
          </div>
        </div>
      )}
    </div>
  );
}
