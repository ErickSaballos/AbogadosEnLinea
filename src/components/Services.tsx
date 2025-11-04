import { Building2, FileText, Users, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Derecho Empresarial",
    description: "Asesoría integral para empresas en constitución, contratos mercantiles, fusiones y adquisiciones, cumplimiento normativo y protección corporativa.",
  },
  {
    icon: FileText,
    title: "Derecho Civil",
    description: "Representación en contratos, bienes raíces, herencias, sucesiones, daños y perjuicios. Protegemos tus intereses personales y patrimoniales.",
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    description: "Defensa de derechos laborales, contratos de trabajo, despidos injustificados, demandas laborales y asesoría en relaciones obrero-patronales.",
  },
  {
    icon: Briefcase,
    title: "Derecho Penal Corporativo",
    description: "Prevención y defensa en delitos económicos, fraudes, compliance penal, investigaciones corporativas y responsabilidad empresarial.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Áreas de Práctica
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios legales especializados con un enfoque estratégico y personalizado para cada cliente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
