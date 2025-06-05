
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Globe, GraduationCap } from "lucide-react";

const ServiceOverview = () => {
  const services = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Desarrollo de MVP",
      description: "Producto mínimo viable completo construido con tecnologías modernas, listo para pruebas de usuario y validación de mercado.",
      features: ["Desarrollo personalizado", "Stack tecnológico moderno", "Responsive móvil", "Interfaz lista para usuarios"]
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Página de Aterrizaje",
      description: "Página de aterrizaje profesional optimizada para conversión, diseñada para atraer y convertir tu audiencia objetivo.",
      features: ["Optimizada para conversión", "Lista para SEO", "Configuración de analytics", "Diseño profesional"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Curso Lean Running",
      description: "Curso integral que enseña metodología lean startup para maximizar tus posibilidades de éxito.",
      features: ["Guía experta", "Marcos prácticos", "Casos de estudio", "Soporte continuo"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Todo lo que Necesitas para Lanzar con Éxito
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nuestro paquete integral incluye todos los componentes esenciales para llevar tu idea de negocio desde el concepto hasta un producto listo para el mercado.
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
