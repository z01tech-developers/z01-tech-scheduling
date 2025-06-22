import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-[#F5F5F5] py-16 px-4 border-t border-[#D1FF00]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/530e52a9-3129-4d7f-9391-31714efd67ae.png" 
                alt="Z01.tech Logo" 
                className="w-8 h-8"
              />
            </div>
            <p className="text-[#F5F5F5] mb-6 max-w-md">
              Building scalable apps and websites for Bangalore startups. 
              Fast, smart, and future-ready digital solutions.
            </p>
            <div className="flex items-center space-x-2 text-[#00FFF7]">
              <span className="text-xl">📍</span>
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D1FF00]">Services</h4>
            <ul className="space-y-2 text-[#F5F5F5]">
              <li>Web & App Development</li>
              <li>Mobile Applications</li>
              <li>Backend & DevOps</li>
              <li>Growth Campaigns</li>
              <li>AI & Blockchain</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D1FF00]">Get In Touch</h4>
            <div className="space-y-3 text-[#F5F5F5]">
              <div>
                <a 
                  href="mailto:management@z01.tech" 
                  className="hover:text-[#00FFF7] transition-colors"
                >
                  management@z01.tech
                </a>
              </div>
              <div>
                <a 
                  href="https://calendly.com/management-z01/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#C700F2] transition-colors"
                >
                  Book Strategy Call →
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-[#D1FF00] mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#F5F5F5] text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Z01.tech. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span>Serving Global Startups</span>
            <span className="text-[#00FFF7]">•</span>
            <span>Made in Bangalore</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
