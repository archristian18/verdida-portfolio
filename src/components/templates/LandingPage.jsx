import Header from "../organisms/Header.jsx";
import HeroSection from "../organisms/HeroSection.jsx";
import AboutSection from "../organisms/AboutSection.jsx";
import ContactSection from "../organisms/ContactSection.jsx";
import Footer from "../organisms/Footer.jsx";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
