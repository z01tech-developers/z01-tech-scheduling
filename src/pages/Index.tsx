
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustSection } from "@/components/TrustSection";
import { Contact } from "@/components/Contact";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <TrustSection />
      <Contact />
      <FloatingCTA />
    </div>
  );
};

export default Index;
