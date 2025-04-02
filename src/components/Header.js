"use client";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full py-6 sm:py-4 px-4 sm:px-8 flex justify-between items-center sm:flex-row">
      {/* Main Text (Left-Aligned) */}
      <h1 className="text-xl font-bold">My Place</h1>

      {/* Hamburger Button (Mobile Only) - Positioned on the Right */}
      <button
        className="sm:hidden text-gray-600 hover:text-gray-900 ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Navigation - Default for Desktop, Column Layout for Mobile */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row sm:items-center sm:justify-evenly w-full max-w-4xl absolute sm:static top-16 left-0 bg-white sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none`}
      >
        {/* Links Section - Adjusted padding/margin for Mobile */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-left sm:text-left mt-4 sm:mt-0 pl-4 sm:pl-0">
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900 py-2 sm:py-0">My Portfolio</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900 py-2 sm:py-0">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 py-2 sm:py-0">Contact</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 py-2 sm:py-0">About Me</a>
        </div>

        {/* Icons Section - Centered on mobile */}
        <div className="flex justify-center space-x-6 mt-6 sm:mt-0">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
