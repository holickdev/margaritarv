import { useState } from "react";
import logo from "./../assets/img/logo.webp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="backdrop-blur-sm sticky top-0 z-50 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#inicio" className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-[#00A99D] font-extrabold text-lg leading-tight">Margarita RV</h1>
                <p className="text-gray-600 text-xs -mt-1">Isla de Margarita · Tu hogar en el paraíso</p>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#inicio" className="text-gray-700 hover:text-[#00A99D] transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-[#00A99D] transition-colors">
              Nosotros
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-[#00A99D] transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-[#00A99D] transition-colors">
              Contacto
            </a>
          </nav>

          

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#00A99D]"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white/95 border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#inicio" className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50">Inicio</a>
            <a href="#nosotros" className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50">Nosotros</a>
            <a href="#servicios" className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50">Servicios</a>
            <a href="#contacto" className="block px-3 py-2 rounded-md text-white bg-[#00A99D] text-center font-semibold">Contacto</a>
            <p className="text-xs text-gray-500 mt-2 px-3">Margarita RV — Te ayudamos a encontrar el hogar donde tu alma florezca.</p>
          </div>
        </div>
      )}
    </header>
  );
}