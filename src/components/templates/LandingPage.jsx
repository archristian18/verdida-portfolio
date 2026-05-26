import Header from "../organisms/Header.jsx";
import HeroSection from "../organisms/HeroSection.jsx";
import MissionVisionSection from "../organisms/MissionVisionSection.jsx";
import ServiceSection from "../organisms/ServiceSection.jsx";
import ContactSection from "../organisms/ContactSection.jsx";
import Footer from "../organisms/Footer.jsx";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MissionVisionSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
