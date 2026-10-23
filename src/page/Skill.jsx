import React from 'react';
import {
  FaAndroid,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  LuBot,
  LuBraces,
  LuCookie,
  LuHardDrive,
  LuKeyRound,
  LuMonitorSmartphone,
  LuPenTool,
  LuPlug,
  LuShapes,
  LuSparkles,
} from 'react-icons/lu';
import {
  SiAdobephotoshop,
  SiBootstrap,
  SiDaisyui,
  SiDotenv,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiLucide,
  SiMongodb,
  SiMui,
  SiNpm,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { TbApi, TbBrandVscode } from 'react-icons/tb';
import Header from '../Header';

const tools = [
  { group: 'Frontend', name: 'HTML5', icon: FaHtml5, hue: 'hue-rose' },
  { group: 'Frontend', name: 'CSS3', icon: FaCss3Alt, hue: 'hue-blue' },
  { group: 'Frontend', name: 'JavaScript (ES6+)', icon: FaJs, hue: 'hue-gold' },
  { group: 'Frontend', name: 'React.js', icon: FaReact, hue: 'hue-cyan' },
  { group: 'Frontend', name: 'Tailwind CSS', icon: SiTailwindcss, hue: 'hue-mint' },
  { group: 'Frontend', name: 'Bootstrap', icon: SiBootstrap, hue: 'hue-blue' },
  { group: 'Frontend', name: 'Material UI (MUI)', icon: SiMui, hue: 'hue-blue' },
  { group: 'Frontend', name: 'DaisyUI', icon: SiDaisyui, hue: 'hue-gold' },
  { group: 'Frontend', name: 'Redux', icon: SiRedux, hue: 'hue-violet' },
  { group: 'Frontend', name: 'React Router', icon: SiReactrouter, hue: 'hue-rose' },
  { group: 'Backend', name: 'Node.js', icon: FaNodeJs, hue: 'hue-mint' },
  { group: 'Backend', name: 'Express.js', icon: SiExpress, hue: 'hue-violet' },
  { group: 'Backend', name: 'REST API', icon: TbApi, hue: 'hue-accent' },
  { group: 'Database', name: 'MongoDB', icon: SiMongodb, hue: 'hue-green' },
  { group: 'Database', name: 'Firebase', icon: SiFirebase, hue: 'hue-gold' },
  { group: 'Database', name: 'LocalStorage', icon: LuHardDrive, hue: 'hue-accent' },
  { group: 'Authentication', name: 'Firebase Authentication', icon: LuKeyRound, hue: 'hue-gold' },
  { group: 'Authentication', name: 'JWT', icon: SiJsonwebtokens, hue: 'hue-violet' },
  { group: 'Authentication', name: 'Cookie-based authentication', icon: LuCookie, hue: 'hue-accent' },
  { group: 'Mobile', name: 'Android app development', icon: FaAndroid, hue: 'hue-green' },
  { group: 'Mobile', name: 'React Native', icon: FaReact, hue: 'hue-cyan' },
  { group: 'Development tools', name: 'VS Code', icon: TbBrandVscode, hue: 'hue-blue' },
  { group: 'Development tools', name: 'Git', icon: FaGitAlt, hue: 'hue-rose' },
  { group: 'Development tools', name: 'GitHub', icon: FaGithub, hue: 'hue-violet' },
  { group: 'Development tools', name: 'npm', icon: SiNpm, hue: 'hue-rose' },
  { group: 'Development tools', name: 'Vite', icon: SiVite, hue: 'hue-gold' },
  { group: 'Development tools', name: 'Postman', icon: SiPostman, hue: 'hue-rose' },
  { group: 'Deployment', name: 'Vercel', icon: SiVercel, hue: 'hue-violet' },
  { group: 'Deployment', name: 'Firebase Hosting', icon: SiFirebase, hue: 'hue-gold' },
  { group: 'Deployment', name: 'Environment variables (.env)', icon: SiDotenv, hue: 'hue-green' },
  { group: 'UI / UX', name: 'Figma', icon: FaFigma, hue: 'hue-rose' },
  { group: 'UI / UX', name: 'PSD to React conversion', icon: SiAdobephotoshop, hue: 'hue-blue' },
  { group: 'UI / UX', name: 'Pixso to React conversion', icon: LuPenTool, hue: 'hue-accent' },
  { group: 'UI / UX', name: 'Responsive web design', icon: LuMonitorSmartphone, hue: 'hue-accent' },
  { group: 'Libraries', name: 'Lucide React', icon: SiLucide, hue: 'hue-violet' },
  { group: 'Libraries', name: 'React Icons', icon: LuShapes, hue: 'hue-cyan' },
  { group: 'Libraries', name: 'SweetAlert2', icon: LuSparkles, hue: 'hue-gold' },
  { group: 'AI', name: 'AI API integration', icon: LuPlug, hue: 'hue-accent' },
  { group: 'AI', name: 'AI assistant integration', icon: LuBot, hue: 'hue-accent' },
  { group: 'AI', name: 'AI-based web apps', icon: LuBraces, hue: 'hue-accent' },
];

const shortNames = {
  'JavaScript (ES6+)': 'JavaScript',
  'Material UI (MUI)': 'Material UI',
  'Cookie-based authentication': 'Cookies',
  'Android app development': 'Android',
  'Environment variables (.env)': '.env',
  'PSD to React conversion': 'PSD to React',
  'Pixso to React conversion': 'Pixso to React',
  'Responsive web design': 'Responsive',
  'AI API integration': 'AI APIs',
  'AI assistant integration': 'Assistant',
  'AI-based web apps': 'AI apps',
  'Firebase Authentication': 'Firebase auth',
  'Firebase Hosting': 'Firebase host',
};

const caption = (name) => shortNames[name] || name.replace(/\.js$/, '').replace(' CSS', '');

const groups = tools.reduce((list, tool) => {
  const current = list.find((group) => group.title === tool.group);
  if (current) current.items.push(tool);
  else list.push({ title: tool.group, items: [tool] });
  return list;
}, []);

const ToolMark = ({ tool }) => {
  const Icon = tool.icon;
  return (
    <span className={`tool-mark ${tool.hue}`} title={tool.name}>
      <i aria-hidden="true"><Icon /></i>
      <span>{caption(tool.name)}</span>
    </span>
  );
};

const Skill = ({ showHeader = true }) => {
  const loop = [...tools, ...tools];

  return (
    <>
      {showHeader && <Header />}
      <section id="skills" className={showHeader ? 'with-nav-offset' : ''}>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {loop.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <span key={`${tool.name}-${index}`} className={tool.hue}>
                  <Icon />
                </span>
              );
            })}
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
              {groups.map((group) => (
                <article key={group.title} className="tool-group">
                  <h3>{group.title}</h3>
                  <div className="tool-icon-row">
                    {group.items.map((tool) => (
                      <ToolMark key={tool.name} tool={tool} />
                    ))}
                  </div>
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
