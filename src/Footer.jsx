import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        {/* Left Section */}
        <div>
          <h4 className="text-xl font-bold mb-2">MD Meherajul Karim</h4>
          <p className="text-sm text-gray-400">Web Developer | React & MERN Stack Enthusiast</p>
        </div>

        {/* Center Section: Social Links */}
        <div className="flex justify-center gap-4 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/meherajul-karim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/meherajul-karim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Right Section */}
        <div className="text-sm text-gray-400 md:text-right">
          <p>© {new Date().getFullYear()} Meherajul Karim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
