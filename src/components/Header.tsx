import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoWinston from "@/assets/logo-winston.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoWinston} alt="Winston Abogados" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="font-playfair text-xl font-bold text-primary">Winston Abogados</h1>
            <p className="text-xs text-muted-foreground font-inter">Nicaragua</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("inicio")} className="font-inter text-sm hover:text-primary transition-colors">
            Inicio
          </button>
          <button onClick={() => scrollToSection("nosotros")} className="font-inter text-sm hover:text-primary transition-colors">
            Nosotros
          </button>
          <button onClick={() => scrollToSection("servicios")} className="font-inter text-sm hover:text-primary transition-colors">
            Servicios
          </button>
          <button onClick={() => scrollToSection("equipo")} className="font-inter text-sm hover:text-primary transition-colors">
            Equipo
          </button>
          <button onClick={() => scrollToSection("contacto")} className="font-inter text-sm hover:text-primary transition-colors">
            Contacto
          </button>
          <Button onClick={() => scrollToSection("contacto")} variant="default" className="font-inter">
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("inicio")} className="font-inter text-left hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="font-inter text-left hover:text-primary transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection("servicios")} className="font-inter text-left hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection("equipo")} className="font-inter text-left hover:text-primary transition-colors">
              Equipo
            </button>
            <button onClick={() => scrollToSection("contacto")} className="font-inter text-left hover:text-primary transition-colors">
              Contacto
            </button>
            <Button onClick={() => scrollToSection("contacto")} variant="default" className="font-inter w-full">
              Agendar Consulta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
