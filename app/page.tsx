import DentalThemeHero from "@/components/DentalThemeHero";
import DentalWellnessAbout from "@/components/DentalWellnessAbout";
import AlphaDifferenceSection from "@/components/AlphaDifferenceSection";
import DentalServicesSection from "@/components/DentalServicesSection";
import DentalCareGridSection from "@/components/DentalCareGridSection";
import ClientTestimonialsSection from "@/components/ClientTestimonialsSection";
import SmileCtaBanner from "@/components/SmileCtaBanner";
import PageNavbar from "@/components/PageNavbar";
import SiteFooter from "@/components/SiteFooter";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  return (
    <main>
      <PageNavbar />
      <DentalThemeHero />
      <DentalWellnessAbout />
      <AlphaDifferenceSection />
      <DentalServicesSection />
      <DentalCareGridSection />
      <ClientTestimonialsSection />
      <SmileCtaBanner />
      <SiteFooter />
      <ConsultationModal />
    </main>
  );
}
