import React, { useState } from 'react';

const questions = [
  {
    q: 'Who is Meheraj?',
    a: 'MD Meherajul Karim is a software developer in Dhaka. He builds web products with React and Node, and he is currently working on mobile apps and AI integrations. He cares about clear UI, careful states, and code another person can pick up later.',
  },
  {
    q: 'What do you like to build?',
    a: 'Web products with React and Tailwind, mobile work with React Native and Android, and the auth and data behind them using Firebase, Node, Express, and MongoDB. Current work includes Nirapad Transit, a transport platform, and LifeOS, a personal dashboard with an assistant. Earlier live products include a food platform and a travel journal.',
  },
  {
    q: 'How can someone start a project with you?',
    a: 'Send a note through the contact form, or reach out on LinkedIn and GitHub. A short description of the product, the timeline, and what “done” looks like is enough to begin.',
  },
  {
    q: 'Are you available for remote work?',
    a: 'Yes. Meheraj is based in Dhaka and works with remote teams. He is open to freelance product work and roles for a software developer who can handle the interface, the backend, and mobile.',
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="band">
      <div className="wrap faq-layout">
        <div>
          <p className="eyebrow">Questions</p>
          <h2>Before you write.</h2>
          <p className="lede">A few answers people usually want before starting a conversation.</p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>0{index + 1}</span>
                  {item.q}
                  <i aria-hidden="true">{isOpen ? '–' : '+'}</i>
                </button>
                {isOpen && <p>{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
