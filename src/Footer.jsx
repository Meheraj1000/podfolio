import React from 'react';
import { site } from './site';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-quote">“Make the interface obvious. Leave the code easy to change.”</p>
        <div className="footer-row">
          <p>MD Meherajul Karim · Dhaka</p>
          <div className="footer-social">
            <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
