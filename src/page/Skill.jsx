import React, { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import Header from '../Header';

const Skill = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const frontendSkills = [
    { icon: <FaReact />, name: 'React.js', level: 90 },
    { icon: <SiTailwindcss />, name: 'Tailwind', level: 85 },
    { icon: <FaHtml5 />, name: 'HTML5', level: 95 },
    { icon: <FaCss3Alt />, name: 'CSS3', level: 90 },
    { icon: <FaBootstrap />, name: 'Bootstrap', level: 80 },
    { icon: <FaJs />, name: 'JavaScript', level: 92 },
  ];

  const backendSkills = [
    { icon: <SiFirebase />, name: 'Firebase', level: 80 },
    { icon: <SiMongodb />, name: 'MongoDB', level: 70 },
    { icon: <FaNodeJs />, name: 'Node.js', level: 65 },
  ];

  const handleHover = (name) => {
    setAnimatedSkills((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const renderSkillCard = (skill, color) => {
    const isAnimated = animatedSkills[skill.name] === true;

    return (
      <div
        key={skill.name}
        onMouseEnter={() => handleHover(skill.name)}
        className={`bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transform transition duration-300 border-t-4 ${color.border} ${color.bg}`}
      >
        <div className="flex justify-center text-4xl mb-2 text-gray-700">
          {skill.icon}
        </div>
        <h4 className="text-center text-lg font-semibold text-gray-800">
          {skill.name}
        </h4>
        <div className="mt-2">
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className={`${color.progress} h-2 rounded transition-all duration-700`}
              style={{
                width: isAnimated ? `${skill.level}%` : '0%',
              }}
            ></div>
          </div>
          <p className="text-right text-xs mt-1 text-gray-500">
            {isAnimated ? `${skill.level}%` : '0%'}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <section id="skills" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          My Skills
        </h2>

        {/* Frontend Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Frontend Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {frontendSkills.map((skill) =>
              renderSkillCard(skill, {
                bg: 'bg-blue-100',
                border: 'border-blue-500',
                progress: 'bg-blue-500',
              })
            )}
          </div>
        </div>

        {/* Backend Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-purple-600">
            Backend Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {backendSkills.map((skill) =>
              renderSkillCard(skill, {
                bg: 'bg-purple-100',
                border: 'border-purple-500',
                progress: 'bg-purple-500',
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
