import { ComplianceStrip } from "@/components/ComplianceStrip";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { DispatchTimeline } from "@/components/DispatchTimeline";
import { FinalCta } from "@/components/FinalCta";
import { FleetSection } from "@/components/FleetSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { RoutesSection } from "@/components/RoutesSection";
import { SpecializationGrid } from "@/components/SpecializationGrid";
import { StatsBar } from "@/components/StatsBar";
import { TechnologySection } from "@/components/TechnologySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <FleetSection />
        <WhyChooseUs />
        <SpecializationGrid />
        <TechnologySection />
        <RoutesSection />
        <DispatchTimeline />
        <ComplianceStrip />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
