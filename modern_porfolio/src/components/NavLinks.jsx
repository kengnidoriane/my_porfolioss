import React from 'react'
import { useActiveSection } from './hooks/useActiveSection';

const NavLinks = ({ mobile, closeMenu }) => {
  const activeSection = useActiveSection();
  const links = [
    { href: "#home", text: "Home" },
    { href: "#aboutme", text: "About Me" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#certifications", text: "Certifications" },
    { href: "#contact", text: "Contact Me" }
  ];
  
  const handleClick = () => {
    if (mobile && closeMenu) {
      closeMenu();
    }
  };
  
  return (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={handleClick}
          className={`transition-colors ${
            activeSection === link.href.substring(1)
              ? 'text-blue-600 font-semibold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default NavLinks