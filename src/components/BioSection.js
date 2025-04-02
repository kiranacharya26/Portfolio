import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa'; // Import icons
import { SiShopify, SiRedux, SiNextdotjs, SiTailwindcss, SiMysql } from 'react-icons/si'; // Import more icons

const techStack = [
  { icon: <FaReact size={40} className="text-blue-500" />, name: 'React' },
  { icon: <FaHtml5 size={40} className="text-orange-500" />, name: 'HTML' },
  { icon: <FaCss3Alt size={40} className="text-blue-400" />, name: 'CSS' },
  { icon: <FaJs size={40} className="text-yellow-500" />, name: 'JavaScript' },
  { icon: <SiShopify size={40} className="text-green-500" />, name: 'Shopify' },
  { icon: <SiTailwindcss size={40} className="text-teal-500" />, name: 'Tailwind' },
  { icon: <SiRedux size={40} className="text-purple-600" />, name: 'Redux' },
  { icon: <SiNextdotjs size={40} className="text-black" />, name: 'Next.js' },
  { icon: <FaNodeJs size={40} className="text-green-600" />, name: 'Node.js' },
  { icon: <SiMysql size={40} className="text-blue-600" />, name: 'SQL' },
];

const BioSection = () => {
  return (
    <section className="w-full h-[90vh] flex flex-col lg:flex-row items-center bg-gray-100 px-8 py-16">
      {/* Left Side: Text */}
      <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
        <p className="text-4xl lg:text-6xl font-light mb-4">Hello, I'm</p>
        <p className="text-4xl lg:text-6xl font-bold mb-4"> Kiran Acharya,</p>
        <p className="text-4xl lg:text-6xl font-light">Web Developer</p>
      </div>

      {/* Right Side: Tech Stack */}
      <div className="w-full lg:w-1/2 flex flex-wrap justify-center items-center gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gradient-to-r from-white to-transparent bg-opacity-40 border border-white rounded-full shadow-lg flex justify-center items-center
                    w-12 h-12 sm:w-20 sm:h-20" // Smaller on mobile, larger on desktop
            style={{
                backdropFilter: 'blur(5px)', // Adds a glassy effect
            }}
            initial={{ y: 0 }}
            animate={{
                y: [0, -10, 0], // Floating animation
            }}
            transition={{
                duration: 3 + index * 0.2, // Slight delay for each bubble
                repeat: Infinity,
                repeatType: 'reverse',
            }}
        >
            {tech.icon}
        </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BioSection;