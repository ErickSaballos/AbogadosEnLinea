import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Gutiérrez",
    role: "Director General, Empresa Construcción",
    content: "Excelente atención y profesionalismo. Winston Abogados nos asesoró en un proceso complejo de adquisición empresarial con total dedicación y resultados excepcionales.",
    rating: 5,
  },
  {
    name: "Ana Patricia Rivas",
    role: "Empresaria",
    content: "La mejor decisión fue confiar en su equipo para resolver un conflicto laboral. Su conocimiento del derecho y su estrategia fueron clave para obtener un resultado favorable.",
    rating: 5,
  },
  {
    name: "Miguel Ángel Torres",
    role: "Propietario",
    content: "Gracias a Winston Abogados pude resolver un problema de herencia que se prolongaba por años. Su experiencia y dedicación marcaron la diferencia.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-inter font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
