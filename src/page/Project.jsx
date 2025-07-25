import React from 'react';
import Header from '../Header';

const projects = [
  {
    title: 'Electronic Notional',
    description: 'An e-commerce website for buying electronic gadgets. Includes cart, wishlist, and secure login.',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'MongoDB'],
    live: 'https://assignment-11-food-client.vercel.app/',
    github: 'https://github.com/yourusername/electronic-notional'
  },
  {
    title: 'Eco Adventure',
    description: 'Blog platform for eco-friendly travel experiences. Includes user login, adventure pages, and profile.',
    tech: ['React', 'Firebase Auth', 'Tailwind', 'JSON Data'],
    live: 'https://eco-adventure.netlify.app',
    github: 'https://github.com/yourusername/eco-adventure'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio to showcase skills and projects using React, animations, and responsive design.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://yourportfolio.netlify.app',
    github: 'https://github.com/yourusername/portfolio'
  }
];

const Project = () => {
  return (
    <>
      <Header />
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-500">Tech:</span>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((tech, index) => (
                    <li key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
