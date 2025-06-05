
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Comparison = () => {
  const features = [
    "Desarrollo Completo de MVP",
    "Página de Aterrizaje Profesional",
    "Curso de Startup Lean",
    "Entrega en 2 Semanas",
    "Soporte Continuo",
    "Framework de Validación de Mercado",
    "Configuración de Analytics",
    "Diseño Responsive Móvil"
  ];

  const competitors = [
    {
      name: "Nuestro Paquete Completo",
      price: "€4,990",
      isOurs: true,
      features: [true, true, true, true, true, true, true, true]
    },
    {
      name: "Agencias Tradicionales",
      price: "€15,000+",
      isOurs: false,
      features: [true, true, false, false, false, false, true, true]
    },
    {
      name: "Desarrolladores Freelance",
      price: "€3,000+",
      isOurs: false,
      features: [true, false, false, false, false, false, false, true]
    },
    {
      name: "Soluciones DIY",
      price: "€500+",
      isOurs: false,
      features: [false, false, false, false, false, false, false, false]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            ¿Por Qué Elegir Nuestro Paquete Completo?
          </h2>
          <p className="text-xl text-slate-600">
            Compara nuestra solución todo incluido con las alternativas
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {competitors.map((competitor, index) => (
                <Card key={index} className={`${competitor.isOurs ? 'ring-2 ring-blue-600 bg-blue-50' : 'bg-white'} border shadow-lg`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className={`text-lg ${competitor.isOurs ? 'text-blue-600' : 'text-slate-900'}`}>
                      {competitor.name}
                    </CardTitle>
                    <div className={`text-2xl font-bold ${competitor.isOurs ? 'text-blue-600' : 'text-slate-900'}`}>
                      {competitor.price}
                    </div>
                    {competitor.isOurs && (
                      <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        MEJOR VALOR
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          {competitor.features[featureIndex] ? (
                            <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                          )}
                          <span className={competitor.features[featureIndex] ? 'text-slate-700' : 'text-slate-400 line-through'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
