import ServicesHeroSection from "./_components/ServicesHeroSection";
import ServicesMatrixSection from "./_components/ServicesMatrixSection";
import ServicesOutcomesSection from "./_components/ServicesOutcomesSection";
import { outcomes, services } from "./data";

export default function Page() {
  return (
    <main className="bg-[#f3f4f6] text-zinc-900">
      <ServicesHeroSection />
      <ServicesOutcomesSection outcomes={outcomes} />
      <ServicesMatrixSection services={services} />
    </main>
  );
}
