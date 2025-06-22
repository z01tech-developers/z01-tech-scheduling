import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[#101018]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#23233b] via-[#3a3a5a] to-[#6e6e8e] opacity-40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/530e52a9-3129-4d7f-9391-31714efd67ae.png" 
              alt="Z01.tech Logo" 
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F5F7] mb-6 leading-tight">
            We Build Scalable
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#23233b] via-[#6e6e8e] to-[#bfc0d2]">
              Apps & Websites
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-[#F5F5F7]">
              for Bangalore Startups
            </span>
          </h2>
        </div>

        {/* Subheadline */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-[#d6d6e7] max-w-4xl mx-auto leading-relaxed">
            Z01.tech is a dev team helping Indian startups and SMBs launch fast, scale smart, 
            and avoid costly mistakes. <span className="font-semibold text-[#bfc0d2]">No fluff — just real builds that work.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#23233b] via-[#6e6e8e] to-[#bfc0d2] hover:from-[#bfc0d2] hover:to-[#23233b] text-[#23233b] px-12 py-6 text-lg font-bold rounded-lg shadow-none hover:shadow-none transition-all duration-300 transform hover:scale-105 border-none"
          >
            <a href="https://calendly.com/management-z01/30min" target="_blank" rel="noopener noreferrer">
              Book Free Strategy Call →
            </a>
          </Button>
          <p className="text-sm text-[#6e6e8e] mt-4">30 minutes • No commitments • Free insights</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#23233b] to-[#6e6e8e] rounded-full opacity-20 animate-fade-in"></div>
      <div className="absolute bottom-20 right-10 w-44 h-44 bg-gradient-to-r from-[#6e6e8e] to-[#bfc0d2] rounded-full opacity-10 animate-fade-in" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
