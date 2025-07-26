import React from 'react';
import myPhoto from '../assets/IMG_3836.JPG';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-4 sm:px-6 md:px-10 py-10">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
        {/* Profile Image with animation */}
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={myPhoto}
          className="w-40 sm:w-60 md:w-72 lg:max-w-sm rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
          alt="Profile"
        />

        {/* Text section with animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
            Hi, I'm Meheraj
          </h1>

          <p className="text-base sm:text-lg italic text-secondary mt-1">
            Turning ideas into interactive web experiences.
          </p>

          <h2 className="text-lg sm:text-xl mt-2 text-secondary">
            React Developer | Problem Solver
          </h2>

          <p className="py-6 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            I'm a frontend-focused web developer with expertise in creating responsive and interactive user interfaces using technologies like React.js, Next.js, Tailwind CSS, HTML5, CSS3, and Bootstrap.
            <br /><br />
            On the backend, I work with tools like MongoDB and Firebase to handle data storage, user authentication, and real-time updates. My goal is to build full-stack applications that are not only functional but also optimized and scalable.
          </p>

          {/* Resume & Hire Me buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
            <a
              href="/src/assets/Meherajul_Karim_Resume.pdf" // ✅ Ensure file is renamed & exists
              download
              className="btn btn-primary"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline btn-secondary">
              Hire Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 text-2xl mb-4">
            <a
              href="https://github.com/meherajdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/meheraj-karim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Location/Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-2 text-sm italic text-gray-500"
          >
            📍 Based in Dhaka, Bangladesh | Available for remote work
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
