import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of Project 1.',
    link: '#',
    image: 'https://placehold.co/600x400', // Replace with actual image URLs
  },
  {
    title: 'Project 2',
    description: 'This is a description of Project 2.',
    link: '#',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'Project 3',
    description: 'This is a description of Project 3.',
    link: '#',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'Project 4',
    description: 'This is a description of Project 4.',
    link: '#',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'Project 5',
    description: 'This is a description of Project 5.',
    link: '#',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'Project 6',
    description: 'This is a description of Project 6.',
    link: '#',
    image: 'https://placehold.co/600x400',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="w-full bg-white px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:blur-sm transition duration-300"
            />

            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;