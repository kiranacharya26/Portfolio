import React from 'react';

const AboutMeSection = () => {
  return (
    <section id="about" className="w-full bg-black px-8 py-16 flex items-center justify-center">
      <div className="max-w-3xl text-left sm:text-center">
        <h2 className="text-3xl sm:text-4xl text-white font-bold mb-6">About Me</h2>
        <p className="text-base sm:text-lg text-white leading-relaxed">
          Experienced Senior Frontend Developer proficient in React, CSS,
          JavaScript, Shopify storefront, Liquid, Jest, and Node.js with 5 years of industry
          experience. Specializes in crafting intuitive web interfaces and translating
          design concepts into functional code. Passionate about creating engaging
          user experiences and driven by a commitment to excellence.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;