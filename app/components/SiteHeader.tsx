"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href?: string;
    isSection?: boolean;
  }>;
};

const navItems: NavItem[] = [
  {
    label: "首页 Home",
    href: "/",
  },
  {
    label: "关于我们",
    href: "/about",
    children: [
      { label: "2.0 关于我们", href: "/about" },
      { label: "2.1 总部所在", href: "/about/headquarters" },
      { label: "2.2 创始人故事", href: "/about/founder-story" },
      { label: "2.3 为什么是我们", href: "/about/why-us" },
      { label: "2.4 媒体与资质", href: "/about/media-coverage" },
    ],
  },
  {
    label: "核心服务",
    href: "/services",
    children: [
      { label: "3.0 核心服务", href: "/services" },
      { label: "3.1 低龄留学", href: "/services/junior-high-study" },
      { label: "常见问题", isSection: true },
      { label: "成功案例/家长证言", isSection: true },
      { label: "申请中学 Logo", isSection: true },
      { label: "3.2 升学规划", href: "/services/academic-planning" },
      { label: "学业规划与选课", isSection: true },
      { label: "常见问题", isSection: true },
      { label: "申请大学的 Logo", isSection: true },
      { label: "3.3 人生规划第一课", href: "/services/life-planning-first-class" },
      { label: "3.4 海外8大守护", href: "/services/overseas-8-support" },
      { label: "3.5 夏令营", href: "/services/summer-camp" },
    ],
  },
  {
    label: "精选资源",
    href: "/resources",
  },
  {
    label: "联系与评估",
    href: "/contact-assessment",
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/HomePage Resources/red logo.png"
            alt="IS Canada logo"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-bold tracking-wide text-zinc-900">爱思加 IS Canada</span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100"
              >
                {item.label}
                {item.children && <span className="ml-1 text-xs text-zinc-500">▼</span>}
              </Link>

              {item.children && (
                <div className="invisible absolute left-0 top-full w-72 pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
                    {item.children
                      .filter((child) => !child.isSection)
                      .map((child) => (
                        <Link
                          key={child.label}
                          href={child.href || "#"}
                          className="block rounded-md px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex items-center rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-800 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          菜单
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-3 lg:hidden">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const expanded = openGroup === item.label;

              return (
                <div key={item.label} className="rounded-lg border border-zinc-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex flex-1 items-center px-3 py-2 text-sm font-medium text-zinc-800"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                      {hasChildren && <span className="ml-1 text-xs text-zinc-500">▼</span>}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setOpenGroup(expanded ? null : item.label)}
                        className="px-3 py-2 text-xs text-zinc-500"
                      >
                        {expanded ? "收起" : "展开"}
                      </button>
                    )}
                  </div>

                  {hasChildren && expanded && (
                    <div className="border-t border-zinc-100 px-2 py-2">
                      {item.children
                        ?.filter((child) => !child.isSection)
                        .map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || "#"}
                            className="block rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
