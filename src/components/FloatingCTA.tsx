
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} md:hidden`}>
      <Button 
        asChild
        size="lg"
        className="bg-gradient-to-r from-[#C700F2] to-[#00FFF7] hover:from-[#D1FF00] hover:to-[#C700F2] text-[#0D0D0D] px-6 py-4 rounded-lg shadow-[0_0_20px_#C700F2] hover:shadow-[0_0_30px_#00FFF7] transition-all duration-300 transform hover:scale-105 border-none font-bold"
      >
        <a href="https://calendly.com/management-z01/30min" target="_blank" rel="noopener noreferrer">
          Book Call 📞
        </a>
      </Button>
    </div>
  );
};
