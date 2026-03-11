"use client";

import Hero from "@/components/Hero";
import SectionAudience from "@/components/SectionAudience";
import SectionHow from "@/components/SectionHow";
import SectionEquipment from "@/components/SectionEquipment";
import SectionPrices from "@/components/SectionPrices";
import SectionCTA from "@/components/SectionCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionAudience />
      <SectionHow />
      <SectionEquipment />
      <SectionPrices />
      <SectionCTA />
    </>
  );
}
