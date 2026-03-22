import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
