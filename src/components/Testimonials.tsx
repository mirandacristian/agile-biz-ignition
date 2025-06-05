
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Solutions",
      company: "PYME Manufacturera Tradicional",
      content: "El MVP fue entregado exactamente a tiempo y superó nuestras expectativas. El curso lean nos ayudó a evitar errores costosos y enfocarnos en lo que realmente importa a nuestros clientes.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Weber",
      role: "Fundador",
      company: "Startup FinTech",
      content: "De idea a producto funcionando en 2 semanas parecía imposible, pero lo lograron. La página de aterrizaje generó más de 200 leads en el primer mes, y el curso de metodología lean fue invaluable.",
      rating: 5,
      avatar: "MW"
    },
    {
      name: "Elena Rodriguez",
      role: "Directora de Innovación",
      company: "Cadena Retail (500+ empleados)",
      content: "Como empresa tradicional buscando innovar, este paquete nos dio todo lo necesario para probar nuestra idea de producto digital rápida y profesionalmente. El ROI fue claro en 6 semanas.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Confiado por Emprendedores Ambiciosos
          </h2>
          <p className="text-xl text-slate-600">
            Descubre qué dicen nuestros clientes sobre su viaje MVP
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
