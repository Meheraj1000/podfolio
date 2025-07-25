import React from 'react';
import myPhoto from '../assets/IMG_3836.JPG';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Profile Image with animation */}
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={myPhoto}
          className="max-w-sm rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
          alt="Profile"
        />

        {/* Text section with animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Hi, I'm Meheraj
          </h1>

          <p className="text-lg italic text-secondary mt-1">
            Turning ideas into interactive web experiences.
          </p>

          <h2 className="text-xl mt-2 text-secondary">
            React Developer | Problem Solver
          </h2>

          <p className="py-6 max-w-xl">
            I'm a frontend-focused web developer with expertise in creating responsive and interactive user interfaces using technologies like React.js, Next.js, Tailwind CSS, HTML5, CSS3, and Bootstrap. I enjoy building clean, modern UIs that offer a smooth user experience across devices.
            <br /><br />
            On the backend, I work with tools like MongoDB and Firebase to handle data storage, user authentication, and real-time updates. My goal is to build full-stack applications that are not only functional but also optimized and scalable.
          </p>

          {/* Resume & Hire Me buttons */}
          <div className="flex gap-4 flex-wrap mb-4">
            <a
              href="/src/assets/MD Meherajul Karim1.pdf"
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
          <div className="flex gap-4 text-2xl">
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

          {/* Optional: Location or status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-4 text-sm italic text-gray-500 text-center lg:text-left"
          >
            📍 Based in Dhaka, Bangladesh | Available for remote work
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
