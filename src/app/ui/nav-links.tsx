'use-client'

import { useState } from "react";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="relative z-40 flex justify-center">
        {/* Przycisk hamburgera */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed z-50 top-4 p-2 text-yellow-300/90 bg-black/50 rounded-md shadow-md"
          aria-label="Toggle menu"
        >
          <Menu className="lg:w-6 lg:h-6
            w-5 h-5" />
        </button>
      )}

      {/* Tło (kliknięcie zamyka menu) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
        />
      )}

      {/* Menu wysuwane */}
      <div
        className={`fixed top-0 left-0 w-full bg-black/30 shadow-md transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center py-8 space-y-6 text-lg">
          <a href="#home" onClick={() => setIsOpen(false)}>Strona główna</a>
          <a href="/galeria" onClick={() => setIsOpen(false)}>Galeria</a>
          <a href="#oferta" onClick={() => setIsOpen(false)}>Oferta</a>
          <a href="#kontakt" onClick={() => setIsOpen(false)}>Kontakt</a>
        </nav>
      </div>
    </div>
  );
}