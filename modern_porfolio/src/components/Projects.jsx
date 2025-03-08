import React from 'react';
import { 
  ExternalLink,
} from 'lucide-react';

const Projects = () => {
    const projects = [
        {
          title: "E-commerce Platform",
          description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes",
          image: "https://via.placeholder.com/400x300",
          tags: ["React", "Node.js", "MongoDB", "Stripe"],
          link: "#"
        },
        {
          title: "Dashboard Analytics",
          description: "Tableau de bord avec visualisation de données en temps réel",
          image: "https://via.placeholder.com/400x300",
          tags: ["React", "D3.js", "Socket.io"],
          link: "#"
        },
        {
          title: "Social Media App",
          description: "Application de réseau social avec messagerie instantanée",
          image: "https://via.placeholder.com/400x300",
          tags: ["React", "Firebase", "WebSocket"],
          link: "#"
        }
      ];
    
      return (
        <section id="projets" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le projet <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Projects