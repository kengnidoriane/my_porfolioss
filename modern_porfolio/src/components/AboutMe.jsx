import React from 'react';
import { Database, Server, Layout, Code } from 'lucide-react';

const AboutMe = () => {

  //   {
  //     category: "Frontend Development",
  //     technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  //     icon: <Layout className="w-6 h-6" />,
  //   },
  //   {
  //     category: "Backend Development",
  //     technologies: ["Node.js", "Express.js", "RESTful APIs"],
  //     icon: <Server className="w-6 h-6" />,
  //   },
  //   {
  //     category: "Database",
  //     technologies: ["MongoDB", "Mongoose", "SQL Basics"],
  //     icon: <Database className="w-6 h-6" />,
  //   },
  //   {
  //     category: "Tools & Methods",
  //     technologies: ["Git", "GitHub", "VS Code", "Agile"],
  //     icon: <Code className="w-6 h-6" />,
  //   },
  // ];

  return (
    <section id="aboutme" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            About Me
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Hello! I'm a passionate Full-Stack Developer who thrives on turning complex problems 
              into elegant solutions. With a strong foundation in both frontend and backend technologies, 
              I create seamless web applications that deliver exceptional user experiences.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              My journey in web development has equipped me with a comprehensive understanding of 
              the modern web ecosystem. I'm constantly learning and adapting to new technologies 
              to ensure I deliver the best solutions for every project.
            </p>

            <p className="text-lg text-gray-700">
              I believe in writing clean, maintainable code and following best practices to create 
              scalable applications that stand the test of time.
            </p>
          </div>

          {/* <h3 className="text-2xl font-bold text-center mb-8">
            Technical Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-lg">
                    {skill.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;