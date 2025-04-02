import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white w-full py-10 px-8  text-center">
      <p className='text-gray-600 hover:text-gray-900'>© {currentYear} All rights reserved.</p>
    </footer>
  );
};

export default Footer;