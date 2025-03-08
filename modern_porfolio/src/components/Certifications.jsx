import React from 'react';
import {
  ExternalLink
} from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      organization: "FreeCodeCamp",
      date: "2024",
      credential: "Credential ID: ABC123",
      link: "#"
    },
    {
      title: "React - The Complete Guide",
      organization: "Udemy",
      date: "2023",
      credential: "Credential ID: XYZ789",
      link: "#"
    },
    {
      title: "MongoDB Developer",
      organization: "MongoDB University",
      date: "2023",
      credential: "Credential ID: MDB456",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.organization}</p>
              <p className="text-gray-500 text-sm mb-2">{cert.date}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.credential}</p>
              <a
                href={cert.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le certificat <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications