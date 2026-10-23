import React from 'react';
import profilePic from '../assets/IMG_3836.JPG';
import Header from '../Header';

const stats = [
  { value: '20+', label: 'Projects shipped' },
  { value: '500+', label: 'Problems solved' },
  { value: 'Remote', label: 'Based in Dhaka' },
];

const services = [
  {
    title: 'Web products',
    text: 'React interfaces with Tailwind, Material UI, and DaisyUI, plus the Node and MongoDB behind them.',
  },
  {
    title: 'Mobile apps',
    text: 'React Native and Android screens, with the same care for layout and login as the web work.',
  },
  {
    title: 'AI integrations',
    text: 'API and assistant features I am building into web apps right now.',
  },
];

const About = ({ showHeader = true }) => {
  return (
    <>
      {showHeader && <Header />}
      <section id="about" className={`band${showHeader ? ' with-nav-offset' : ''}`}>
        <div className="wrap about-grid">
          <div className="about-photo">
            <img src={profilePic} alt="MD Meherajul Karim" />
          </div>
          <div>
            <p className="eyebrow">About</p>
            <h2>You can call me Meheraj.</h2>
            <p className="lede">
              I am a software developer. I build responsive web apps with React, Firebase, and
              MongoDB, and I am also working on React Native, Android, and AI-backed features.
              The part I enjoy most is the last stretch: spacing, empty states, and a flow that
              still feels calm when someone uses it for real.
            </p>
            <p className="lede">
              On the backend I use Node, Express, JWT, cookies, and Firebase to keep login and
              data straightforward. I also spend time on algorithms, with 500+ problems solved
              on LeetCode and Codeforces.
            </p>
            <div className="stat-row">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wrap service-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
