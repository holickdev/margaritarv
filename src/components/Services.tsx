import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Home, Search, Key, TrendingUp, FileText, Users } from "lucide-react";

export function Services() {
  // Static service blocks for better SEO and crawlability

  return (
    <section id="servicios" className="py-20 bg-white reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#00A99D] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada servicio está diseñado para ser un puente hacia el valor y la recreación que la Isla de Margarita 
            tiene para ofrecer, haciendo que la experiencia sea tan placentera como vivir en este paraíso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#00A99D] to-[#D4AF37] overflow-hidden reveal" style={{ transitionDelay: '0ms' }}>
            <Card className="h-full bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 border-transparent">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#E6FFFB] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00A99D]" />
                </div>
                <CardTitle className="text-xl">Asesoramiento y Valoración</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Brindamos una tasación precisa de la propiedad, basada en un análisis exhaustivo del mercado local, para asegurar que el precio de venta sea justo y competitivo.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 2 */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#00A99D] to-[#D4AF37] overflow-hidden reveal" style={{ transitionDelay: '80ms' }}>
            <Card className="h-full bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 border-transparent">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#E6FFFB] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#00A99D]" />
                </div>
                <CardTitle className="text-xl">Promoción y Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Creamos y gestionamos la promoción de la propiedad a través de canales digitales de alto alcance y métodos de marketing tradicionales.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 3 */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#00A99D] to-[#D4AF37] overflow-hidden reveal" style={{ transitionDelay: '160ms' }}>
            <Card className="h-full bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 border-transparent">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#E6FFFB] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-[#00A99D]" />
                </div>
                <CardTitle className="text-xl">Gestión de Visitas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Coordinamos y acompañamos a los potenciales compradores en las visitas a la propiedad, destacando las mejores cualidades.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 4 */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#00A99D] to-[#D4AF37] overflow-hidden reveal" style={{ transitionDelay: '240ms' }}>
            <Card className="h-full bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 border-transparent">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#E6FFFB] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-[#00A99D]" />
                </div>
                <CardTitle className="text-xl">Negociación y Cierre</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Representamos y asesoramos al cliente durante el proceso de negociación y guiamos todos los trámites legales hasta la firma final.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 5 */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#00A99D] to-[#D4AF37] overflow-hidden reveal" style={{ transitionDelay: '320ms' }}>
            <Card className="h-full bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 border-transparent">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#E6FFFB] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-[#00A99D]" />
                </div>
                <CardTitle className="text-xl">Búsqueda Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Escuchamos los sueños y necesidades del cliente para encontrar la propiedad que se ajuste perfectamente a sus deseos y presupuesto.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 6 */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#00A99D] to-[#D4AF37] overflow-hidden reveal" style={{ transitionDelay: '400ms' }}>
            <Card className="h-full bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 border-transparent">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#E6FFFB] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Key className="w-6 h-6 text-[#00A99D]" />
                </div>
                <CardTitle className="text-xl">Alquiler y Administración</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Ayudamos a encontrar inquilinos responsables y nos encargamos de la gestión completa del inmueble, garantizando tranquilidad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Servicios Adicionales */}
        <div className="mt-16">
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#00A99D] to-[#D4AF37] overflow-hidden reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl text-[#00A99D] mb-6 text-center accent-underline">
                Servicios Adicionales
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg mb-3 text-gray-900">Asesoría Legal y Financiera</h4>
                  <p className="text-gray-600">Ofrecemos orientación sobre los aspectos legales y las opciones financieras para cada tipo de transacción.</p>
                </div>
                <div className="rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg mb-3 text-gray-900">Inversiones Inmobiliarias</h4>
                  <p className="text-gray-600">Asesoramos a quienes buscan invertir en el mercado de Margarita, identificando oportunidades con alto potencial de crecimiento y rentabilidad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}