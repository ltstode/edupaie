
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { PricingSection } from "../components/PricingSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
