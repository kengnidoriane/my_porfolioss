import React from 'react'

const NavLinks = ({ mobile }) => {
    const links = [
        { href: "#accueil", text: "Home" },
        { href: "#aboutme", text: "About Me" },
        { href: "#competences", text: "Skills" },
        { href: "#projets", text: "Projects" },
        { href: "#certifications", text: "Certifications" },
        { href: "#contact", text: "Contact Me" }
      ];
    
      return (
        <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
      );
}

export default NavLinks