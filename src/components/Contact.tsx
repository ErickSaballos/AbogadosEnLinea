import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success("Mensaje enviado", {
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Agenda tu Consulta
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para defender tus intereses. Contáctanos hoy mismo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="font-inter text-muted-foreground">+505 8888-8888</p>
                    <p className="font-inter text-muted-foreground">+505 7777-7777</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground mb-1">Email</h3>
                    <p className="font-inter text-muted-foreground">contacto@winstonabogados.com</p>
                    <p className="font-inter text-muted-foreground">info@winstonabogados.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground mb-1">Dirección</h3>
                    <p className="font-inter text-muted-foreground">
                      Centro Comercial Managua<br />
                      Oficina 304, Managua, Nicaragua
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground mb-1">Horario</h3>
                    <p className="font-inter text-muted-foreground">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="font-inter text-muted-foreground">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-inter text-sm font-medium text-foreground block mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                    className="font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-inter text-sm font-medium text-foreground block mb-2">
                    Correo Electrónico *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@example.com"
                    className="font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-inter text-sm font-medium text-foreground block mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+505 8888-8888"
                    className="font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-inter text-sm font-medium text-foreground block mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos sobre tu caso..."
                    rows={5}
                    className="font-inter"
                  />
                </div>

                <Button type="submit" className="w-full font-inter" size="lg">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
