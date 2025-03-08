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
  
    return (
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4 bg-red">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-800">
              Marie.dev
            </span>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
  
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </div>
          </div>
  
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <NavLinks mobile />
            </div>
          )}
        </nav>
      </header>
    );
}

export default Header