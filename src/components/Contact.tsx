import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-6">
            Ready to Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23233b] via-[#6e6e8e] to-[#bfc0d2]"> Something Amazing?</span>
          </h2>
          <p className="text-xl text-[#d6d6e7] max-w-3xl mx-auto">
            Let's discuss your project and explore how we can help you scale faster and smarter.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Primary CTA */}
            <Card className="border border-[#bfc0d2] shadow-none rounded-lg bg-[#181824]">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-[#F5F5F7]">
                  🚀 Book Your Free Strategy Call
                </CardTitle>
                <p className="text-[#d6d6e7]">
                  30-minute consultation to discuss your project and explore possibilities
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#23233b] via-[#6e6e8e] to-[#bfc0d2] hover:from-[#bfc0d2] hover:to-[#23233b] text-[#23233b] py-6 text-lg font-bold rounded-lg shadow-none hover:shadow-none transition-all duration-300 border-none"
                >
                  <a href="https://calendly.com/management-z01/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Call Now →
                  </a>
                </Button>
                <p className="text-sm text-[#6e6e8e] mt-3">Available Mon-Fri, 10 AM - 6 PM IST</p>
              </CardContent>
            </Card>

            {/* Email option */}
            <Card className="shadow-none rounded-lg bg-[#181824] border border-[#bfc0d2]">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-[#F5F5F7]">
                  📧 Prefer Email?
                </CardTitle>
                <p className="text-[#d6d6e7]">
                  Send us your project details and we'll get back within 24 hours
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border border-[#bfc0d2] text-[#23233b] bg-gradient-to-r from-[#6e6e8e] to-[#bfc0d2] hover:from-[#bfc0d2] hover:to-[#6e6e8e] py-6 text-lg font-bold rounded-lg transition-all duration-300"
                >
                  <a href="mailto:management@z01.tech">
                    management@z01.tech
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-[#F5F5F7] bg-[#181824] px-6 py-3 rounded-lg border border-[#bfc0d2]">
            <span className="text-2xl">📍</span>
            <span className="font-medium">Based in Bangalore, India • Serving Global Startups</span>
          </div>
        </div>
      </div>
    </section>
  );
};
