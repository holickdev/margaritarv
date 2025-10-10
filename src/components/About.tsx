import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visión */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl text-primary mb-6">
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
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1649769425782-8cdb757da2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwaG9tZXxlbnwxfHx8fDE3NTkxODg4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hogar de lujo"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Misión */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1652878530627-cc6f063e3947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwY29uc3VsdGF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NTkxODg4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Consultoría inmobiliaria"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl text-primary mb-6">
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