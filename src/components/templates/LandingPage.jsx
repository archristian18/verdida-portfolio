import Header from "../organisms/Header.jsx";
import HeroSection from "../organisms/HeroSection.jsx";
import ServiceSection from "../organisms/ServiceSection.jsx";
import ContactSection from "../organisms/ContactSection.jsx";
import Footer from "../organisms/Footer.jsx";
import Seo from "../atoms/Seo.jsx";
import { pageSeo } from "../../data/seoContent.js";

export default function LandingPage() {
  return (
    <>
      <Seo page={pageSeo.home} />
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
