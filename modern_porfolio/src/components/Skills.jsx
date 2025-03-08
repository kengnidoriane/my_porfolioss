import React from 'react';
import {
  ChevronRight,
  Code,
  Database,
  Layout,
  Server
} from 'lucide-react';

const Skills = () => {
    const skills = [
        {
          icon: <Layout className="w-8 h-8 text-blue-600" />,
          title: "Front-end",
          items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
          icon: <Server className="w-8 h-8 text-green-600" />,
          title: "Back-end",
          items: ["Node.js", "Express.js", "REST API", "GraphQL"]
        },
        {
          icon: <Database className="w-8 h-8 text-purple-600" />,
          title: "Base de données",
          items: ["MongoDB", "PostgreSQL", "Firebase"]
        },
        {
          icon: <Code className="w-8 h-8 text-red-600" />,
          title: "Outils",
          items: ["Git", "Docker", "Jest", "Webpack"]
        }
      ];
    
      return (
        <section id="competences" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Mes Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold ml-3">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Skills