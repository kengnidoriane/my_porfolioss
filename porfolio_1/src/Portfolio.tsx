import React from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// Components
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-800">Portfolio</span>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#intro" className="text-gray-600 hover:text-gray-900">Introduction</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projets</a>
            <a href="#certifications" className="text-gray-600 hover:text-gray-900">Certifications</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#intro" className="text-gray-600 hover:text-gray-900">Introduction</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projets</a>
              <a href="#certifications" className="text-gray-600 hover:text-gray-900">Certifications</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Introduction = () => (
  <section id="intro" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-purple-50 to-white">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Développeuse Front-end Passionnée
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Spécialisée dans la création d'expériences web modernes et intuitives
          avec React, TypeScript et les dernières technologies front-end.
        </p>
        {/* <div className="flex space-x-4">
          <Button variant="default">
            Voir mes projets
          </Button>
          <Button variant="outline">
            Me contacter
          </Button>
        </div> */}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, tags, link }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-purple-600 hover:text-purple-800"
    >
      Voir le projet <ExternalLink size={16} className="ml-1" />
    </a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce React",
      description: "Une plateforme e-commerce moderne construite avec React et Redux",
      tags: ["React", "Redux", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Interface d'administration avec visualisation de données",
      tags: ["React", "TypeScript", "Recharts"],
      link: "#"
    },
    {
      title: "Application de Chat",
      description: "Application de messagerie en temps réel",
      tags: ["React", "WebSocket", "Firebase"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "Front End Development Libraries",
      platform: "FreeCodeCamp",
      date: "2024",
      link: "#"
    },
    {
      title: "React Specialization",
      platform: "Coursera",
      date: "2023",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.platform}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 inline-flex items-center"
              >
                Voir le certificat <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            {/* <Button type="submit" className="w-full">
              Envoyer
            </Button> */}
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-gray-300">© 2025 Portfolio. Tous droits réservés.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Introduction />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;