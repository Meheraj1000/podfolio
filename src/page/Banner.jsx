import React from 'react';
import resumePDF from '../assets/MD Meherajul Karim1.pdf';
import { TypeAnimation } from 'react-type-animation';
import { site } from '../site';

const offers = [
  {
    title: 'Web products',
    text: 'React screens, login, and the data behind them, ready to hand to someone else.',
  },
  {
    title: 'Mobile',
    text: 'React Native and Android, with the same care for layout as the web work.',
  },
  {
    title: 'AI features',
    text: 'An API or assistant inside a product, not a demo sitting off to the side.',
  },
];

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

        <aside className="offer-card">
          <p className="offer-status"><span>Available</span> Remote from Dhaka</p>
          <h2>Tell me the product. I’ll build the part people actually use.</h2>
          <ol>
            {offers.map((offer, index) => (
              <li key={offer.title}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{offer.title}</strong>
                  <p>{offer.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="offer-foot">
            <p>A short note is enough: the product, the timeline, and what done looks like.</p>
            <a className="action action-solid" href="#contact">Start with a note</a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Banner;
