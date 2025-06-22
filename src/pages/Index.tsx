import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustSection } from "@/components/TrustSection";
import { Contact } from "@/components/Contact";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#101018]">
      <Hero />
      <Services />
      <TrustSection />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
