
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    idea: "",
    timeline: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    toast({
      title: "¡Registro Enviado!",
      description: "Te contactaremos dentro de 24 horas para discutir tu proyecto MVP.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      idea: "",
      timeline: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            ¿Listo para Construir tu MVP?
          </h2>
          <p className="text-xl text-slate-600">
            Cuéntanos sobre tu idea y comencemos tu viaje de 2 semanas
          </p>
        </div>

        <Card className="border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-slate-900">Registro de Proyecto</CardTitle>
            <p className="text-slate-600">Obtén una propuesta detallada del proyecto en 24 horas</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@empresa.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa/Organización</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Tu Empresa S.L."
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Tu Cargo</Label>
                  <Select onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecciona tu cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="founder">Fundador/CEO</SelectItem>
                      <SelectItem value="entrepreneur">Emprendedor</SelectItem>
                      <SelectItem value="manager">Gerente/Director</SelectItem>
                      <SelectItem value="professional">Profesional de Negocios</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="idea">Cuéntanos sobre tu idea de negocio *</Label>
                <Textarea
                  id="idea"
                  placeholder="Describe tu idea de negocio, mercado objetivo y qué problema estás resolviendo..."
                  value={formData.idea}
                  onChange={(e) => handleInputChange("idea", e.target.value)}
                  required
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">¿Cuándo quieres empezar?</Label>
                <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecciona cronograma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Inmediatamente</SelectItem>
                    <SelectItem value="1-2weeks">En 1-2 semanas</SelectItem>
                    <SelectItem value="1month">En 1 mes</SelectItem>
                    <SelectItem value="3months">En 3 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg"
                >
                  Enviar Registro y Obtener Propuesta
                </Button>
                <p className="text-sm text-slate-500 text-center mt-3">
                  Sin compromiso • Consulta gratuita • Tiempo de respuesta 24 horas
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;
