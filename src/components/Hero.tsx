import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroOffice} 
          alt="Oficina Abogados en Línea" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Defendemos tus intereses con experiencia y compromiso
          </h1>
          <p className="font-inter text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Más de dos décadas brindando soluciones legales estratégicas en derecho empresarial, civil y laboral para proteger lo que más valoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="font-inter text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
            >
              Agenda tu Consulta
            </Button>
            <Button 
              onClick={() => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })} 
              size="lg" 
              variant="outline"
              className="font-inter text-base border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Conoce Nuestro Equipo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-foreground" />
      </div>
    </section>
  );
};

export default Hero;
