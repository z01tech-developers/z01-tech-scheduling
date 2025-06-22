
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[#0D0D0D]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C700F2] via-[#00FFF7] to-[#D1FF00] opacity-20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/58b7896d-2f53-4508-b4f0-9b5609021a0f.png" 
              alt="Z01.tech Logo" 
              className="w-48 h-auto md:w-56 md:h-auto lg:w-64 lg:h-auto"
            />
          </div>
          <p className="text-sm text-[#00FFF7] font-medium tracking-wide">BANGALORE DIGITAL AGENCY</p>
        </div>

        {/* Main headline */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F5F5] mb-6 leading-tight">
            We Build Scalable
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C700F2] via-[#00FFF7] to-[#D1FF00]">
              Apps & Websites
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4">
              for Bangalore Startups
            </span>
          </h2>
        </div>

        {/* Subheadline */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-[#F5F5F5] max-w-4xl mx-auto leading-relaxed">
            Z01.tech is a dev team helping Indian startups and SMBs launch fast, scale smart, 
            and avoid costly mistakes. <span className="font-semibold text-[#D1FF00]">No fluff — just real builds that work.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#C700F2] to-[#00FFF7] hover:from-[#D1FF00] hover:to-[#C700F2] text-[#0D0D0D] px-12 py-6 text-lg font-bold rounded-lg shadow-[0_0_20px_#C700F2] hover:shadow-[0_0_30px_#00FFF7] transition-all duration-300 transform hover:scale-105 border-none"
          >
            <a href="https://calendly.com/management-z01/30min" target="_blank" rel="noopener noreferrer">
              Book Free Strategy Call →
            </a>
          </Button>
          <p className="text-sm text-[#00FFF7] mt-4">30 minutes • No commitments • Free insights</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#C700F2] to-[#00FFF7] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#00FFF7] to-[#D1FF00] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
