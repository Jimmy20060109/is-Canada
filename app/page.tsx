import Image from "next/image";
import graphQLClient from "@/lib/graphql-client";
import { GET_HOME_PAGE_FALLBACK, GET_HOME_PAGE_WITH_ACF } from "@/lib/queries";
import type { HomePageFallbackResponse, HomePageWithAcfResponse } from "@/lib/types";

const HOME_URI = process.env.NEXT_PUBLIC_HOME_URI || "/home/";
const HERO_BG_IMAGE = "/HomePage Resources/national-cancer-institute-N_aihp118p8-unsplash.jpg";
const HERO_LOGO_IMAGE = "/HomePage Resources/red logo.png";

type HomeText = {
  title: string;
  subtitle: string;
};

async function loadHomeText(): Promise<HomeText> {
  try {
    const acfData = await graphQLClient.request<HomePageWithAcfResponse>(GET_HOME_PAGE_WITH_ACF, {
      uri: HOME_URI,
    });

    if (acfData.pageBy) {
      return {
        title: acfData.pageBy.homePageTest?.heroTitle || "专注10–17岁加拿大初高中留学",
        subtitle: acfData.pageBy.homePageTest?.heroSubtitle || "",
      };
    }
  } catch {
    // Fallback query is handled below.
  }

  try {
    const fallbackData = await graphQLClient.request<HomePageFallbackResponse>(
      GET_HOME_PAGE_FALLBACK,
      { uri: HOME_URI }
    );

    if (fallbackData.pageBy) {
      return {
        title: "专注10–17岁加拿大初高中留学",
        subtitle: "",
      };
    }
  } catch {
    // Ignore and use hardcoded fallback.
  }

  return {
    title: "专注10–17岁加拿大初高中留学",
    subtitle: "",
  };
}

export default async function Home() {
  const home = await loadHomeText();

  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src={HERO_BG_IMAGE}
          alt="Classroom background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/72" />
        <div className="absolute top-[16vh] h-20 w-full bg-zinc-400/25" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            <div className="relative h-[200px] w-[200px] md:h-[420px] md:w-[420px]">
              <Image src={HERO_LOGO_IMAGE} alt="IS Canada logo" fill priority className="object-contain" />
            </div>
            <h1 className="text-6xl font-black leading-none tracking-tight text-[#b3362f] md:text-[180px]">
              爱思加
            </h1>
          </div>

          <p className="mt-8 text-3xl font-bold tracking-wide text-[#12285f] md:text-[72px]">
            {home.title}
          </p>

          {home.subtitle ? (
            <p className="mt-5 text-lg font-medium text-[#12285f]/85 md:text-3xl">{home.subtitle}</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
