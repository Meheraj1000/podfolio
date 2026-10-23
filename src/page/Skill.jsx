import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaAndroid,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiBootstrap,
  SiRedux,
  SiVite,
  SiVercel,
} from 'react-icons/si';
import Header from '../Header';

const groups = [
  {
    title: 'Frontend',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'React.js',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI (MUI)',
      'DaisyUI',
      'Redux',
      'React Router',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Firebase', 'LocalStorage'],
  },
  {
    title: 'Authentication',
    items: ['Firebase Authentication', 'JWT', 'Cookie-based authentication'],
  },
  {
    title: 'Mobile',
    items: ['Android app development', 'React Native'],
  },
  {
    title: 'Development tools',
    items: ['VS Code', 'Git', 'GitHub', 'npm', 'Vite', 'Postman'],
  },
  {
    title: 'Deployment',
    items: ['Vercel', 'Firebase Hosting', 'Environment variables (.env)'],
  },
  {
    title: 'UI / UX',
    items: ['Figma', 'PSD to React conversion', 'Pixso to React conversion', 'Responsive web design'],
  },
  {
    title: 'Libraries',
    items: ['Lucide React', 'React Icons', 'SweetAlert2'],
  },
  {
    title: 'AI',
    items: ['AI API integration', 'AI assistant integration', 'AI-based web apps'],
  },
];

const marquee = [
  { name: 'React', icon: <FaReact />, hue: 'hue-cyan' },
  { name: 'JavaScript', icon: <FaJs />, hue: 'hue-gold' },
  { name: 'Tailwind', icon: <SiTailwindcss />, hue: 'hue-mint' },
  { name: 'Node.js', icon: <FaNodeJs />, hue: 'hue-mint' },
  { name: 'Express', icon: <SiExpress />, hue: 'hue-violet' },
  { name: 'MongoDB', icon: <SiMongodb />, hue: 'hue-green' },
  { name: 'Firebase', icon: <SiFirebase />, hue: 'hue-gold' },
  { name: 'React Native', icon: <FaReact />, hue: 'hue-cyan' },
  { name: 'Redux', icon: <SiRedux />, hue: 'hue-violet' },
  { name: 'Bootstrap', icon: <SiBootstrap />, hue: 'hue-blue' },
  { name: 'HTML', icon: <FaHtml5 />, hue: 'hue-rose' },
  { name: 'CSS', icon: <FaCss3Alt />, hue: 'hue-blue' },
  { name: 'Git', icon: <FaGitAlt />, hue: 'hue-rose' },
  { name: 'Vite', icon: <SiVite />, hue: 'hue-gold' },
  { name: 'Vercel', icon: <SiVercel />, hue: 'hue-violet' },
  { name: 'Figma', icon: <FaFigma />, hue: 'hue-rose' },
  { name: 'Android', icon: <FaAndroid />, hue: 'hue-green' },
];

const Skill = ({ showHeader = true }) => {
  const loop = [...marquee, ...marquee];

  return (
    <>
      {showHeader && <Header />}
      <section id="skills" className={showHeader ? 'with-nav-offset' : ''}>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {loop.map((item, index) => (
              <span key={`${item.name}-${index}`} className={item.hue}>
                {item.icon}
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="band">
          <div className="wrap">
            <p className="eyebrow">Tools</p>
            <h2>What I am working with now.</h2>
            <p className="lede">
              Web, mobile, auth, and the AI integrations I am building at the moment.
            </p>
            <div className="tool-groups">
              {groups.map((group, index) => (
                <article key={group.title} className="tool-group">
                  <p>{String(index + 1).padStart(2, '0')}</p>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
