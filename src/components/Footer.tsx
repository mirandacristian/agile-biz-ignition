
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">MVP Builder</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Transforming business ideas into market-ready MVPs for ambitious entrepreneurs and innovative SMEs.
            </p>
            <div className="text-sm text-slate-400">
              <p>🚀 2-Week MVP Development</p>
              <p>🎯 Complete Business Package</p>
              <p>📈 Lean Startup Methodology</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>MVP Development</li>
              <li>Landing Pages</li>
              <li>Lean Course</li>
              <li>Business Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li>hello@mvpbuilder.com</li>
              <li>+31 20 123 4567</li>
              <li>Amsterdam, Netherlands</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 MVP Builder. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
