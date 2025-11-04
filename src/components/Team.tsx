import teamWinston from "@/assets/team-winston.png";

const Team = () => {
  return (
    <section id="equipo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales comprometidos con la excelencia y el servicio a nuestros clientes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={teamWinston} 
              alt="Equipo Abogados en Línea" 
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="mb-4">
                <div className="w-16 h-1 bg-accent mb-4"></div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  Alejandra Blanco
                </h3>
                <p className="font-inter text-primary font-semibold mb-3">
                  Socia Fundadora | Especialista en Derecho Civil
                </p>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Más de 20 años de experiencia en derecho civil, patrimonial y sucesiones. Licenciada en Derecho con especialización en Derecho de Familia y Contratos.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="mb-4">
                <div className="w-16 h-1 bg-accent mb-4"></div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  Winston Díaz
                </h3>
                <p className="font-inter text-primary font-semibold mb-3">
                  Socio | Especialista en Derecho Empresarial
                </p>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Experto en derecho corporativo, mercantil y laboral con amplia trayectoria asesorando empresas nacionales e internacionales en Nicaragua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
