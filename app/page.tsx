import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesPreview } from "@/components/sections/features-preview";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturesPreview />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
