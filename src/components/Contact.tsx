
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Something Amazing?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your project and explore how we can help you scale faster and smarter.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Primary CTA */}
            <Card className="border-2 border-gradient-to-r from-blue-200 to-purple-200 shadow-lg rounded-2xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  🚀 Book Your Free Strategy Call
                </CardTitle>
                <p className="text-gray-600">
                  30-minute consultation to discuss your project and explore possibilities
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="https://calendly.com/yourname/strategy-call" target="_blank" rel="noopener noreferrer">
                    Schedule Call Now →
                  </a>
                </Button>
                <p className="text-sm text-gray-500 mt-3">Available Mon-Fri, 10 AM - 6 PM IST</p>
              </CardContent>
            </Card>

            {/* Email option */}
            <Card className="shadow-lg rounded-2xl bg-white">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  📧 Prefer Email?
                </CardTitle>
                <p className="text-gray-600">
                  Send us your project details and we'll get back within 24 hours
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  <a href="mailto:hello@z01.tech">
                    hello@z01.tech
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600 bg-white px-6 py-3 rounded-full shadow-md">
            <span className="text-2xl">📍</span>
            <span className="font-medium">Based in Bangalore, India • Serving Global Startups</span>
          </div>
        </div>
      </div>
    </section>
  );
};
