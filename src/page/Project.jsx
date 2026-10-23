import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Header from '../Header';
import { site } from '../site';
import transitCover from '../assets/nirapad-transit.jpg';
import lifeCover from '../assets/lifeos-cover.jpg';
import foodCover from '../assets/food-sharing.jpg';
import ecoCover from '../assets/eco-adventure.jpg';
import folioCover from '../assets/portfolio-cover.jpg';

const projects = [
  {
    title: 'Nirapad Transit',
    tone: 'transit',
    image: transitCover,
    imageAlt: 'A city bus on a tree-lined road',
    description: 'A final-year platform for public transport: role-based dashboards, a live map, and a GPS simulator. The data is a demo, not a government deployment.',
    results: ['Seven-role login', 'Live map and alerts', 'Flutter passenger and driver apps'],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Flutter'],
    github: 'https://github.com/Meheraj1000/BTRC',
  },
  {
    title: 'LifeOS',
    tone: 'life',
    image: lifeCover,
    imageAlt: 'Papers, a notebook, tea, and a plant on a desk',
    description: 'A home for documents, bills, family tasks, and an in-app assistant, shaped around services people use in Bangladesh.',
    results: ['Document vault', 'Bills and budgets', 'Assistant chat'],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/Meheraj1000/LifeOS',
  },
  {
    title: 'Food Sharing',
    tone: 'food',
    image: foodCover,
    imageAlt: 'A shared meal of grilled food, herbs, and chili',
    description: 'A restaurant site for browsing menus, ordering food, and keeping a cart and favorites behind login.',
    results: ['Menu, cart, and favorites', 'Secure login', 'Live on Vercel'],
    tech: ['React', 'Tailwind', 'Firebase', 'MongoDB'],
    live: 'https://assignment-11-food-client.vercel.app/',
    github: 'https://github.com/Meheraj1000/Assignment-11-client',
  },
  {
    title: 'Eco Adventure',
    tone: 'eco',
    image: ecoCover,
    imageAlt: 'A forest trail above misty mountains',
    description: 'A journal for eco-friendly trips, with accounts, adventure pages, and a profile.',
    results: ['Adventure pages', 'User login and profile', 'Live on Netlify'],
    tech: ['React', 'Firebase', 'Tailwind'],
    live: 'https://eco-adventure.netlify.app',
    github: 'https://github.com/Meheraj1000/Travel-website',
  },
  {
    title: 'Portfolio',
    tone: 'folio',
    image: folioCover,
    imageAlt: 'An open notebook and a laptop on a quiet desk',
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
            {projects.map((project) => {
              const shownTech = project.tech.slice(0, 3);
              const extraTech = project.tech.length - shownTech.length;

              return (
                <article key={project.title} className={`work-card tone-${project.tone}`}>
                  <div className="work-frame">
                    <div className="work-chrome" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="work-visual">
                      <img src={project.image} alt={project.imageAlt} />
                    </div>
                  </div>
                  <div className="work-main">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="work-label">Tech stack</p>
                    <div className="tech-row">
                      {shownTech.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                      {extraTech > 0 && <span className="tech-more">+{extraTech}</span>}
                    </div>
                    <p className="work-label">Key results</p>
                    <ul className="result-list">
                      {project.results.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <a className="work-more" href={project.live || project.github} target="_blank" rel="noreferrer">
                        {project.live ? 'View live' : 'View on GitHub'}
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                      {project.live && (
                        <a className="work-side" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
