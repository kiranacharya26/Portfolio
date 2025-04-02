import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites tailored to your needs.',
  },
  {
    title: 'App Development',
    description: 'Creating user-friendly mobile applications for iOS and Android.',
  },
  {
    title: 'Graphic Design',
    description: 'Designing visually appealing graphics for branding and marketing.',
  },
  {
    title: '3D Art Development',
    description: 'Crafting stunning 3D models and animations for various projects.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-gray-100 px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;