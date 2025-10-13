import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4F4F4] rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#00A99D] mb-2">Contacto</h2>
          <p className="text-gray-700 mb-6">Estamos aquí para ayudarte. Escríbenos o envíanos un WhatsApp y responderemos lo antes posible.</p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#00A99D]" />
                <a href="https://wa.me/584120378660" className="text-gray-800 font-medium">+58 (412) 037-8660</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#00A99D]" />
                <a href="mailto:margaritarvinmobiliaria@gmail.com" className="text-gray-800">margaritarvinmobiliaria@gmail.com</a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#00A99D] mt-1" />
                <div className="text-gray-800">
                  Isla de Margarita<br />
                  Estado Nueva Esparta<br />
                  Venezuela
                </div>
              </div>

              <div>
                <a href="https://wa.me/584120378660" className="inline-block bg-[#00A99D] text-white px-4 py-2 rounded-md font-semibold">Enviar WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
