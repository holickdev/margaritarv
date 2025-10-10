import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl mb-4">Margarita RV</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Grupo Inmobiliario Margarita RV, tu aliado de confianza para encontrar el hogar de tus sueños 
              en la mágica Isla de Margarita. Ayudamos a las personas a encontrar no solo una propiedad, 
              sino el lugar al que siempre han llamado hogar en su corazón.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/margaritarvinmobiliaria" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="https://wa.me/584120378660" className="text-gray-300 hover:text-white transition-colors">+58 (412) 037-8660</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:margaritarvinmobiliaria@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  margaritarvinmobiliaria@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Isla de Margarita<br />
                  Estado Nueva Esparta<br />
                  Venezuela
                </span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-gray-300 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#nosotros" className="block text-gray-300 hover:text-white transition-colors">
                Nosotros
              </a>
              <a href="#servicios" className="block text-gray-300 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="block text-gray-300 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Grupo Inmobiliario Margarita RV. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}