import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/Panoramic_of_Juan_Griego_45.jpg"
          alt="Isla de Margarita"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-shadow-lg/50 shadow-black text-4xl md:text-6xl text-white mb-4 font-extrabold">
            El hogar de tus sueños en el paraíso
          </h1>

          <p className="text-shadow-lg/50 shadow-black text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
            En Margarita RV te acompañamos con empatía y experiencia para encontrar no solo una propiedad, sino el lugar donde tu vida y tus recuerdos crecerán.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[#00A99D] hover:brightness-70 text-white p-6 shadow-lg text-xl">
              <a href="https://wa.me/584120378660">Comienza Ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}