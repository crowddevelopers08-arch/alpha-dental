import DentalThemeHero from "@/components/DentalThemeHero";
import DentalWellnessAbout from "@/components/DentalWellnessAbout";
import AlphaDifferenceSection from "@/components/AlphaDifferenceSection";
import DentalServicesSection from "@/components/DentalServicesSection";
import DentalCareGridSection from "@/components/DentalCareGridSection";
import PageNavbar from "@/components/PageNavbar";

export default function Home() {
  return (
    <main>
      <PageNavbar />
      <DentalThemeHero />
      <DentalWellnessAbout />
      <AlphaDifferenceSection />
      <DentalServicesSection />
      <DentalCareGridSection />
    </main>
  );
}
