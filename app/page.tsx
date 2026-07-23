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
import DentalVideoRow from "@/components/DentalVideoRow";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import PatientVideoCarousel from "@/components/PatientVideoCarousel";

export default function Home() {
  return (
    <main>
      <PageNavbar />
      <DentalThemeHero />
      <DentalVideoRow />
      <BeforeAfterCarousel />
      <DentalWellnessAbout />
      <AlphaDifferenceSection />
      <PatientVideoCarousel />
      <DentalServicesSection />
      <DentalCareGridSection />
      <ClientTestimonialsSection />
      <SmileCtaBanner />
      <SiteFooter />
      <ConsultationModal />
    </main>
  );
}
