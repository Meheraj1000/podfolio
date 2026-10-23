import React from 'react';
import myPhoto from '../assets/IMG_3836.JPG';
import resumePDF from '../assets/MD Meherajul Karim1.pdf';
import { TypeAnimation } from 'react-type-animation';
import { site } from '../site';

const Banner = () => {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Dhaka · open to remote work</p>
          <h1>Meheraj</h1>
          <p className="hero-line">
            <span>I build</span>
            <TypeAnimation
              sequence={[
                'web products.',
                1800,
                'mobile apps.',
                1800,
                'AI-backed tools.',
                1800,
              ]}
              wrapper="strong"
              speed={45}
              repeat={Infinity}
              cursor={false}
            />
          </p>
          <p className="hero-body">
            Software developer in Dhaka. I build web and mobile products with React,
            Node, Firebase, and the AI tools I am working with now.
          </p>
          <div className="hero-actions">
            <a className="action action-solid" href={resumePDF} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="action action-ghost" href="#contact">
              Contact
            </a>
            <a className="text-link" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-frame">
          <div className="hero-portrait">
            <img src={myPhoto} alt="MD Meherajul Karim" />
          </div>
          <div className="portrait-note">
            <strong>Available</strong>
            <span>Remote · Dhaka</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
