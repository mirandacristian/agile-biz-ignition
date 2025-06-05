
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ve Nuestro Proceso en Acción
          </h2>
          <p className="text-xl text-slate-300">
            Observa cómo transformamos ideas en MVPs listos para el mercado en solo 2 semanas
          </p>
        </div>

        <Card className="border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-purple-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full w-20 h-20"
                  onClick={() => console.log("Reproducir demo de video")}
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">Proceso de Desarrollo MVP</h3>
                  <p className="text-sm text-white/80">Desde la validación del concepto hasta el despliegue del producto en vivo</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Semana 1</div>
            <div className="text-white font-semibold mb-1">Descubrimiento y Desarrollo</div>
            <div className="text-sm text-slate-300">Recopilación de requisitos, diseño y desarrollo central</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Semana 2</div>
            <div className="text-white font-semibold mb-1">Pruebas y Lanzamiento</div>
            <div className="text-sm text-slate-300">Pruebas finales, configuración de página de aterrizaje y puesta en marcha</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Continuo</div>
            <div className="text-white font-semibold mb-1">Soporte y Curso</div>
            <div className="text-sm text-slate-300">Entrenamiento en metodología lean y soporte técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
