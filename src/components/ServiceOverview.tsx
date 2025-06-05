
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Globe, GraduationCap } from "lucide-react";

const ServiceOverview = () => {
  const services = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "MVP Development",
      description: "Complete minimum viable product built with modern technologies, ready for user testing and market validation.",
      features: ["Custom development", "Modern tech stack", "Mobile responsive", "User-ready interface"]
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Landing Page",
      description: "Professional, conversion-optimized landing page designed to attract and convert your target audience.",
      features: ["Conversion optimized", "SEO ready", "Analytics setup", "Professional design"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Lean Running Course",
      description: "Comprehensive course teaching lean startup methodology to maximize your chances of success.",
      features: ["Expert guidance", "Practical frameworks", "Case studies", "Ongoing support"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Launch Successfully
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive package includes all the essential components to take your business idea from concept to market-ready product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-slate-50 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
