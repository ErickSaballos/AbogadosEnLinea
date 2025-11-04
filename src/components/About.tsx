import { Scale, Shield, Target, Award } from "lucide-react";
import officeInterior from "@/assets/office-interior.jpg";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={officeInterior} 
              alt="Oficina Winston Abogados" 
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
              <p className="font-playfair text-4xl font-bold">20+</p>
              <p className="font-inter text-sm">Años de Experiencia</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Winston Abogados
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos un bufete de abogados con más de dos décadas de experiencia defendiendo los intereses de nuestros clientes con integridad y profesionalismo. Nuestro compromiso es brindar asesoría jurídica de excelencia, adaptada a las necesidades específicas de cada caso.
            </p>
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Especializados en derecho empresarial, civil y laboral, trabajamos con empresas e individuos que buscan protección legal estratégica y resultados tangibles.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-foreground mb-1">Justicia</h3>
                  <p className="font-inter text-sm text-muted-foreground">Defendemos con equidad</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-foreground mb-1">Confianza</h3>
                  <p className="font-inter text-sm text-muted-foreground">Relaciones duraderas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-foreground mb-1">Precisión</h3>
                  <p className="font-inter text-sm text-muted-foreground">Soluciones efectivas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-foreground mb-1">Excelencia</h3>
                  <p className="font-inter text-sm text-muted-foreground">Estándares superiores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
