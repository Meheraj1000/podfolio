import React from 'react';
import { FaLaptopCode, FaRocket, FaTrophy } from 'react-icons/fa';
import Header from '../Header';
import profilePic from '../assets/IMG_3836.JPG';
import resumePDF from '../assets/MD Meherajul Karim1.pdf';

const About = () => {
  return (
    <>
      <Header />
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16 lg:py-20 bg-gradient-to-b from-white to-purple-50 min-h-screen"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* ✅ Profile Card */}
          <div className="w-full lg:w-1/3 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out">
            <img
              src={profilePic}
              alt="Meherajul Karim"
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-purple-400 shadow-lg hover:scale-105 transition duration-300"
            />
            <h3 className="text-2xl font-bold mt-4 text-gray-800">
              MD Meherajul Karim
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Web Developer · React Specialist
            </p>

            <div className="flex justify-center gap-6 text-purple-600 mt-3 text-lg">
              <FaLaptopCode title="Developer" className="hover:text-purple-800 transition" />
              <FaRocket title="Fast Learner" className="hover:text-purple-800 transition" />
              <FaTrophy title="Achiever" className="hover:text-purple-800 transition" />
            </div>

            <div className="mt-6">
              <a
                href={resumePDF}
                target="_blank"
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* ✅ About Details Section */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg mb-4 leading-relaxed text-gray-700">
              I'm a passionate web developer focused on building responsive, interactive,
              and accessible websites using modern technologies like React, Firebase, and MongoDB.
              I thrive on problem-solving and clean UI/UX experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-5 bg-white border rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Frontend Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>HTML5 & CSS3</li>
                </ul>
              </div>

              <div className="p-5 bg-white border rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Backend Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Firebase (Auth, Firestore, Hosting)</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>JWT Auth</li>
                </ul>
              </div>
            </div>

            <div className="text-sm text-gray-600 mt-6">
              <span role="img" aria-label="star">⭐</span>{' '}
              <strong>Achievements:</strong> Solved 500+ DSA problems on LeetCode & Codeforces.
              Built multiple full-stack MERN projects and contributed to open-source tools.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
