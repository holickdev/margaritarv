import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import handshake from './../assets/img/handshake-house.jpg';
import familyfun from './../assets/img/family-fun.jpg';

export function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visión */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl text-[#00A99D] mb-6 accent-underline">
              Nuestra Visión
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ser el corazón de los sueños en la Isla de Margarita, la mano amiga que guía a cada persona 
                hacia el hogar donde su alma florezca.
              </p>
              <p>
                Para nosotros, una casa no es solo un edificio; es el nido donde se construyen los capítulos 
                más hermosos de una historia, el refugio que abraza los momentos de paz y el escenario donde 
                los sueños se hacen realidad.
              </p>
              <p>
                Nos convertiremos en la brújula que, con empatía y calidez, orienta a nuestros clientes a 
                descubrir ese espacio que les susurra al oído: "aquí perteneces".
              </p>
            </div>
          </div>
          <div className="relative reveal">
            <div className="overflow-hidden rounded-lg">
              <ImageWithFallback
                src={familyfun}
                alt="Hogar de lujo"
                className="w-full object-cover about-image"
              />
            </div>
          </div>
        </div>

        {/* Misión */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
          <div className="order-2 lg:order-1 reveal">
            <div className="overflow-hidden rounded-lg">
              <ImageWithFallback
                src={handshake}
                alt="Consultoría inmobiliaria"
                className="w-full object-cover about-image"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <h2 className="text-3xl md:text-4xl text-[#00A99D] mb-6 accent-underline">
              Nuestra Misión
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Guiar a cada cliente, con empatía, honestidad y profundo conocimiento del mercado local, 
                en la búsqueda y adquisición de su propiedad ideal en la Isla de Margarita.
              </p>
              <p>
                Nos comprometemos a brindar un servicio personalizado y transparente que ponga las necesidades 
                y sueños de nuestros clientes en el centro de cada transacción.
              </p>
              <p>
                A través de un trato humano y cercano, buscamos construir relaciones duraderas basadas en la 
                confianza y el respeto, creando experiencias inolvidables desde la primera consulta hasta la 
                entrega de las llaves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}