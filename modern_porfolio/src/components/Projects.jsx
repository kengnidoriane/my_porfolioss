import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "CuisineConnect",
      description: "Discover recipes from around the world, tailored to your dietary preferences.",
      image: "/images/cuisineconnect.jpg",
      tags: ["ReactJs", "Tailwind CSS"],
      link: "https://food-recipe-app-blush-nine.vercel.app/",
      github: "https://github.com/yourusername/cuisineconnect"
    },
    {
      title: "Orée Restaurant Site",
      description: "Responsive web site for a restaurant",
      image: "/images/oree.jpg",
      tags: ["HTML5", "Bootstrap", "Javascript"],
      link: "https://responsive-restaurant-webpage-omega.vercel.app/",
      github: "https://github.com/yourusername/oree-restaurant"
    },
    {
      title: "e-plantShopping",
      description: "Plant shopping project. the backend is still in progress",
      image: "/images/e-plantshopping.jpg",
      tags: ["ReactJs", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/yourusername/e-plantshopping"
    }
  ];

  return (
    <section id="projects" className="py-20" role="region" aria-label="My Projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label={`Visit live site of ${project.title}`}
                  >
                    <ExternalLink size={20} />
                    <span>Live Site</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;