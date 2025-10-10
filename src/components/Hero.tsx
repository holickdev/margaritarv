import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1697562601152-676344ba1c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBpc2xhbmQlMjB2ZW5lenVlbGElMjBiZWFjaHxlbnwxfHx8fDE3NTkxODg4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Isla de Margarita"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            El corazón de los sueños en la 
            <span className="block text-blue-300">Isla de Margarita</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Más que vender propiedades, nos dedicamos a encontrar el lugar donde las risas de la familia resuenen, 
            donde el aroma a mar se cuele por la ventana, y donde cada atardecer pinte un nuevo recuerdo en el lienzo de la vida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Encuentra tu hogar
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              Conoce más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}