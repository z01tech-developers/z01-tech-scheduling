
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web & App Development",
    description: "Custom websites and applications built with modern frameworks for maximum performance and user experience.",
    icon: "💻"
  },
  {
    title: "Cross-Platform Mobile Builds",
    description: "Native-quality mobile apps that work seamlessly across iOS and Android platforms.",
    icon: "📱"
  },
  {
    title: "Backend & DevOps Systems",
    description: "Scalable server infrastructure, APIs, and deployment pipelines that grow with your business.",
    icon: "⚙️"
  },
  {
    title: "Social Media & Growth Campaigns",
    description: "Data-driven marketing strategies and social media campaigns that convert visitors into customers.",
    icon: "📈"
  },
  {
    title: "AI & Blockchain Integration",
    description: "Cutting-edge AI solutions and blockchain integrations to future-proof your digital presence.",
    icon: "🤖"
  }
];

export const Services = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services That Scale
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From MVP to market leader — we build the digital foundation your startup needs to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white rounded-2xl"
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
