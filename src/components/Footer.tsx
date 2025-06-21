
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Z01.tech
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Building scalable apps and websites for Bangalore startups. 
              Fast, smart, and future-ready digital solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-xl">📍</span>
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web & App Development</li>
              <li>Mobile Applications</li>
              <li>Backend & DevOps</li>
              <li>Growth Campaigns</li>
              <li>AI & Blockchain</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <a 
                  href="mailto:hello@z01.tech" 
                  className="hover:text-purple-400 transition-colors"
                >
                  hello@z01.tech
                </a>
              </div>
              <div>
                <a 
                  href="https://calendly.com/yourname/strategy-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Book Strategy Call →
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Z01.tech. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span>Serving Global Startups</span>
            <span>•</span>
            <span>Made in Bangalore</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
