import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import logoWinston from "@/assets/logo-winston.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoWinston} alt="Abogados en Línea" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="font-playfair text-xl font-bold">Abogados en Línea</h3>
                <p className="text-xs opacity-90 font-inter">Nicaragua</p>
              </div>
            </div>
            <p className="font-inter text-sm opacity-90 leading-relaxed max-w-md">
              Bufete de abogados especializado en derecho empresarial, civil y laboral. 
              Más de 20 años defendiendo tus intereses con experiencia y compromiso profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <button onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("equipo")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  Equipo
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contacto@abogadosenlinea.com" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="font-inter text-sm opacity-90">
              contacto@abogadosenlinea.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm opacity-90">
              © {currentYear} Abogados en Línea. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 font-inter text-sm">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                Aviso Legal
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
