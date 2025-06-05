
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            See Our Process in Action
          </h2>
          <p className="text-xl text-slate-300">
            Watch how we transform ideas into market-ready MVPs in just 2 weeks
          </p>
        </div>

        <Card className="border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-purple-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full w-20 h-20"
                  onClick={() => console.log("Play video demo")}
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">MVP Development Process</h3>
                  <p className="text-sm text-white/80">From concept validation to live product deployment</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Week 1</div>
            <div className="text-white font-semibold mb-1">Discovery & Development</div>
            <div className="text-sm text-slate-300">Requirements gathering, design, and core development</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Week 2</div>
            <div className="text-white font-semibold mb-1">Testing & Launch</div>
            <div className="text-sm text-slate-300">Final testing, landing page setup, and go-live</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Ongoing</div>
            <div className="text-white font-semibold mb-1">Support & Course</div>
            <div className="text-sm text-slate-300">Lean methodology training and technical support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
