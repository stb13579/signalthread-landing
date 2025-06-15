import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ContactForm } from "@/components/ContactForm";
import { SocialProofSection } from "@/components/SocialProofSection";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ContactForm />
      <SocialProofSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
