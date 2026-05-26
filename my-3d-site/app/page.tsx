import ClientEffects from './components/ClientEffects';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[--bg-primary]">
      {/* Client-only global effects (particles + cursor) */}
      <ClientEffects />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
