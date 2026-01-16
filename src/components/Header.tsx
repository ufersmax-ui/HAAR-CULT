import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onBookingClick: () => void;
}

export default function Header({ onBookingClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
              HAAR-CULT
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('bewertungen')}
              className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium"
            >
              Bewertungen
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium"
            >
              Kontakt
            </button>
            <button
              onClick={onBookingClick}
              className="bg-[#FF6600] text-white px-6 py-2.5 rounded-lg hover:bg-[#E55A00] transition-all shadow-md hover:shadow-lg font-medium"
            >
              Termin buchen
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('bewertungen')}
                className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium text-left"
              >
                Bewertungen
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium text-left"
              >
                Kontakt
              </button>
              <button
                onClick={onBookingClick}
                className="bg-[#FF6600] text-white px-6 py-2.5 rounded-lg hover:bg-[#E55A00] transition-all shadow-md font-medium"
              >
                Termin buchen
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
