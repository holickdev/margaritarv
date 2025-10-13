import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logo from "./../assets/img/logo.webp";
import { Button } from "./ui/button";


export function Footer() {
  return (
    <footer id="contacto" className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-extrabold text-[#00A99D]">Margarita RV</h3>
                <p className="text-sm text-gray-600">Tu guía confiable en la Isla de Margarita</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Grupo Inmobiliario Margarita RV transforma la búsqueda de propiedad en una experiencia humana, segura y memorable. Te acompañamos en cada paso para que encuentres el lugar donde crearás recuerdos.
            </p>

            <div className="flex items-center space-x-3">
              <a href="https://www.instagram.com/margaritarvinmobiliaria" className="text-[#00A99D] hover:text-[#007f72]">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-[#F4F4F4] rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#00A99D]" />
                <a href="tel:+584120378660" className="hover:underline">+58 (412) 037-8660</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#00A99D]" />
                <a href="mailto:margaritarvinmobiliaria@gmail.com" className="hover:underline">margaritarvinmobiliaria@gmail.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#00A99D] mt-1" />
                <span>
                  Isla de Margarita<br />
                  Estado Nueva Esparta<br />
                  Venezuela
                </span>
              </div>

              <Button><a href="https://wa.me/584120378660" className="block mt-2 text-center bg-[#00A99D] text-white px-4 py-2 rounded-md font-semibold">Enviar mensaje</a></Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">© 2024 Grupo Inmobiliario Margarita RV. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}