import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Home, Search, Key, TrendingUp, FileText, Users } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Asesoramiento y Valoración",
      description: "Brindamos una tasación precisa de la propiedad, basada en un análisis exhaustivo del mercado local, para asegurar que el precio de venta sea justo y competitivo."
    },
    {
      icon: Users,
      title: "Promoción y Marketing",
      description: "Creamos y gestionamos la promoción de la propiedad a través de canales digitales de alto alcance y métodos de marketing tradicionales."
    },
    {
      icon: Home,
      title: "Gestión de Visitas",
      description: "Coordinamos y acompañamos a los potenciales compradores en las visitas a la propiedad, destacando las mejores cualidades."
    },
    {
      icon: FileText,
      title: "Negociación y Cierre",
      description: "Representamos y asesoramos al cliente durante el proceso de negociación y guiamos todos los trámites legales hasta la firma final."
    },
    {
      icon: Search,
      title: "Búsqueda Personalizada",
      description: "Escuchamos los sueños y necesidades del cliente para encontrar la propiedad que se ajuste perfectamente a sus deseos y presupuesto."
    },
    {
      icon: Key,
      title: "Alquiler y Administración",
      description: "Ayudamos a encontrar inquilinos responsables y nos encargamos de la gestión completa del inmueble, garantizando tranquilidad."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada servicio está diseñado para ser un puente hacia el valor y la recreación que la Isla de Margarita 
            tiene para ofrecer, haciendo que la experiencia sea tan placentera como vivir en este paraíso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Servicios Adicionales */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-primary mb-6 text-center">
            Servicios Adicionales
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg mb-3 text-gray-900">
                Asesoría Legal y Financiera
              </h4>
              <p className="text-gray-600">
                Ofrecemos orientación sobre los aspectos legales y las opciones financieras para cada tipo de transacción.
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-3 text-gray-900">
                Inversiones Inmobiliarias
              </h4>
              <p className="text-gray-600">
                Asesoramos a quienes buscan invertir en el mercado de Margarita, identificando oportunidades con alto potencial de crecimiento y rentabilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}