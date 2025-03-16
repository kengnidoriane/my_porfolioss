import React, { useEffect, useState} from 'react'
import NavLinks from './NavLinks';
import { 
  Menu,
  X,
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent md:bg-transparent'
      }`}
      role="banner"
      aria-label="Site header"
    >
      <nav className="container mx-auto px-6 py-4" role="navigation">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">
            <a href="#home">FKD</a>
          </span>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none transition-transform duration-200 ease-in-out hover:scale-110"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 bg-white">
            <NavLinks mobile closeMenu={closeMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header