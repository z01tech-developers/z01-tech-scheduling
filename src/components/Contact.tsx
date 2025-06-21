
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            Ready to Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C700F2] via-[#00FFF7] to-[#D1FF00]"> Something Amazing?</span>
          </h2>
          <p className="text-xl text-[#F5F5F5] max-w-3xl mx-auto">
            Let's discuss your project and explore how we can help you scale faster and smarter.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Primary CTA */}
            <Card className="border-2 border-[#D1FF00] shadow-[0_0_30px_#C700F2] rounded-lg bg-[#0D0D0D]">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-[#F5F5F5]">
                  🚀 Book Your Free Strategy Call
                </CardTitle>
                <p className="text-[#F5F5F5]">
                  30-minute consultation to discuss your project and explore possibilities
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#C700F2] to-[#00FFF7] hover:from-[#D1FF00] hover:to-[#C700F2] text-[#0D0D0D] py-6 text-lg font-bold rounded-lg shadow-[0_0_20px_#C700F2] hover:shadow-[0_0_30px_#00FFF7] transition-all duration-300 border-none"
                >
                  <a href="https://calendly.com/management-z01/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Call Now →
                  </a>
                </Button>
                <p className="text-sm text-[#00FFF7] mt-3">Available Mon-Fri, 10 AM - 6 PM IST</p>
              </CardContent>
            </Card>

            {/* Email option */}
            <Card className="shadow-[0_0_20px_#D1FF00] rounded-lg bg-[#0D0D0D] border-2 border-[#00FFF7]">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-[#F5F5F5]">
                  📧 Prefer Email?
                </CardTitle>
                <p className="text-[#F5F5F5]">
                  Send us your project details and we'll get back within 24 hours
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-[#D1FF00] hover:border-[#C700F2] text-[#F5F5F5] hover:text-[#0D0D0D] hover:bg-gradient-to-r hover:from-[#D1FF00] hover:to-[#00FFF7] py-6 text-lg font-bold rounded-lg transition-all duration-300 bg-transparent"
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
          <div className="inline-flex items-center space-x-2 text-[#F5F5F5] bg-gradient-to-r from-[#0D0D0D] to-[#1a1a1a] px-6 py-3 rounded-lg shadow-[0_0_20px_#C700F2] border border-[#D1FF00]">
            <span className="text-2xl">📍</span>
            <span className="font-medium">Based in Bangalore, India • Serving Global Startups</span>
          </div>
        </div>
      </div>
    </section>
  );
};
