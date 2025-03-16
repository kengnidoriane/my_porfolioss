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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent md:bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">
            FKD
          </span>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white">
            <NavLinks mobile closeMenu={closeMenu} />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header