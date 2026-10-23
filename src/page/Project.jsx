import React from 'react';
import { FaBus, FaHome, FaLeaf, FaLaptopCode, FaUtensils } from 'react-icons/fa';
import Header from '../Header';
import { site } from '../site';

const projects = [
  {
    title: 'Nirapad Transit',
    category: 'Transport',
    tone: 'transit',
    icon: <FaBus />,
    description: 'A final-year platform for public transport: role-based dashboards, a live map, and a GPS simulator. The data is a demo, not a government deployment.',
    results: ['Seven-role login', 'Live map and alerts', 'Flutter passenger and driver apps'],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Flutter'],
    github: 'https://github.com/Meheraj1000/BTRC',
  },
  {
    title: 'LifeOS',
    category: 'Product',
    tone: 'life',
    icon: <FaHome />,
    description: 'A home for documents, bills, family tasks, and an in-app assistant, shaped around services people use in Bangladesh.',
    results: ['Document vault', 'Bills and budgets', 'Assistant chat'],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/Meheraj1000/LifeOS',
  },
  {
    title: 'Food Sharing',
    category: 'Product',
    tone: 'food',
    icon: <FaUtensils />,
    description: 'A restaurant site for browsing menus, ordering food, and keeping a cart and favorites behind login.',
    results: ['Menu, cart, and favorites', 'Secure login', 'Live on Vercel'],
    tech: ['React', 'Tailwind', 'Firebase', 'MongoDB'],
    live: 'https://assignment-11-food-client.vercel.app/',
    github: 'https://github.com/Meheraj1000/Assignment-11-client',
  },
  {
    title: 'Eco Adventure',
    category: 'Travel',
    tone: 'eco',
    icon: <FaLeaf />,
    description: 'A journal for eco-friendly trips, with accounts, adventure pages, and a profile.',
    results: ['Adventure pages', 'User login and profile', 'Live on Netlify'],
    tech: ['React', 'Firebase', 'Tailwind'],
    live: 'https://eco-adventure.netlify.app',
    github: 'https://github.com/Meheraj1000/Travel-website',
  },
  {
    title: 'Portfolio',
    category: 'Identity',
    tone: 'folio',
    icon: <FaLaptopCode />,
    description: 'This site. A place to show the work, the stack, and a direct way to start a conversation.',
    results: ['Responsive layout', 'Working contact form', 'Live portfolio'],
    tech: ['React', 'Tailwind', 'Motion'],
    live: site.portfolio,
    github: 'https://github.com/Meheraj1000/podfolio',
  },
];

const Project = ({ showHeader = true }) => {
  return (
    <>
      {showHeader && <Header />}
      <section id="projects" className={`band${showHeader ? ' with-nav-offset' : ''}`}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Builds you can open.</h2>
            </div>
            <p className="lede">The two newest are on GitHub. Food Sharing, Eco Adventure, and this site are already on the web.</p>
          </div>

          <div className="work-grid">
            {projects.map((project, index) => (
              <article key={project.title} className={`work-card tone-${project.tone}`}>
                <div className="work-main">
                  <div className="work-title">
                    <i aria-hidden="true">{project.icon}</i>
                    <div>
                      <p className="project-category">{String(index + 1).padStart(2, '0')} · {project.category}</p>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <ul className="result-list">
                    {project.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                  <div className="tech-row">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.live && (
                    <a className="action action-solid" href={project.live} target="_blank" rel="noreferrer">Live</a>
                  )}
                  <a className="action action-ghost" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
