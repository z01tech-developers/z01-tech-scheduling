
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white opacity-60"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Z01<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">.tech</span>
          </h1>
          <p className="text-sm text-gray-600 font-medium tracking-wide">BANGALORE DIGITAL AGENCY</p>
        </div>

        {/* Main headline */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            We Build Scalable
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Apps & Websites
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4">
              for Bangalore Startups
            </span>
          </h2>
        </div>

        {/* Subheadline */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Z01.tech is a dev team helping Indian startups and SMBs launch fast, scale smart, 
            and avoid costly mistakes. <span className="font-semibold text-gray-900">No fluff — just real builds that work.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="https://calendly.com/yourname/strategy-call" target="_blank" rel="noopener noreferrer">
              Book Free Strategy Call →
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-4">30 minutes • No commitments • Free insights</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
