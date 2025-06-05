
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                De Idea a
                <span className="text-blue-600"> MVP en Vivo</span>
                <br />
                en Solo 2 Semanas
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Desarrollo completo de MVP, página de aterrizaje profesional y curso de metodología lean para emprendedores ambiciosos y PYMEs innovadoras.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-3xl font-bold text-slate-900">€4,990</div>
              <div className="text-sm text-slate-500">
                <div>Paquete todo incluido</div>
                <div>Sin costos ocultos</div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Desarrollo Completo de MVP",
                "Página de Aterrizaje Profesional",
                "Acceso al Curso Lean Running"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Inicia tu Viaje MVP
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Ver Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                <div className="h-32 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg"></div>
                <div className="flex space-x-2">
                  <div className="h-8 bg-blue-500 rounded flex-1"></div>
                  <div className="h-8 bg-slate-200 rounded flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
