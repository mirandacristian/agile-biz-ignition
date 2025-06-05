
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Constructor MVP</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Transformando ideas de negocio en MVPs listos para el mercado para emprendedores ambiciosos y PYMEs innovadoras.
            </p>
            <div className="text-sm text-slate-400">
              <p>🚀 Desarrollo MVP en 2 Semanas</p>
              <p>🎯 Paquete de Negocio Completo</p>
              <p>📈 Metodología Lean Startup</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Desarrollo MVP</li>
              <li>Páginas de Aterrizaje</li>
              <li>Curso Lean</li>
              <li>Consultoría de Negocios</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-slate-300">
              <li>hola@constructormvp.com</li>
              <li>+34 91 123 4567</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 Constructor MVP. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
