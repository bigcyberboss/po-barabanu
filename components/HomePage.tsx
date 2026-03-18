"use client";

import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionAudience from "@/components/SectionAudience";
import SectionHow from "@/components/SectionHow";
import SectionEquipment from "@/components/SectionEquipment";
import SectionPrices from "@/components/SectionPrices";
import SectionCTA from "@/components/SectionCTA";

interface PriceItem {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
}

export default function HomePage({ prices }: { prices: PriceItem[] }) {
  return (
    <>
      <Hero />
      <SectionAbout />
      <SectionAudience />
      <SectionHow />
      <SectionEquipment />
      <SectionPrices prices={prices} />
      <SectionCTA />
    </>
  );
}
