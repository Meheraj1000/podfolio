import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { id: 'home', label: 'Home', hash: '#home', to: '/' },
  { id: 'about', label: 'About', hash: '#about', to: '/about' },
  { id: 'skills', label: 'Skills', hash: '#skills', to: '/skill' },
  { id: 'projects', label: 'Projects', hash: '#projects', to: '/project' },
];

const routeToSection = {
  '/': 'home',
  '/about': 'about',
  '/skill': 'skills',
  '/project': 'projects',
  '/contact': 'contact',
};

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const [active, setActive] = useState(routeToSection[pathname] || 'home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setActive(routeToSection[pathname] || 'home');
      return undefined;
    }

    const onScroll = () => {
      let current = 'home';
      [...navItems, { id: 'contact' }].forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 140) {
          current = item.id;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomePage, pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const itemClass = (id) => `nav-link${active === id ? ' is-active' : ''}`;

  const links = navItems.map((item) => (
    isHomePage ? (
      <a key={item.id} href={item.hash} className={itemClass(item.id)} onClick={() => setOpen(false)}>
        {item.label}
      </a>
    ) : (
      <Link key={item.id} to={item.to} className={itemClass(item.id)} onClick={() => setOpen(false)}>
        {item.label}
      </Link>
    )
  ));

  const contact = isHomePage ? (
    <a href="#contact" className={`nav-cta${active === 'contact' ? ' is-active' : ''}`} onClick={() => setOpen(false)}>
      Contact
    </a>
  ) : (
    <Link to="/contact" className={`nav-cta${active === 'contact' ? ' is-active' : ''}`} onClick={() => setOpen(false)}>
      Contact
    </Link>
  );

  return (
    <header className="nav">
      <Link to="/" className="wordmark" aria-label="Go to home">
        <span>M</span>
        Meheraj
      </Link>

      <nav className="nav-desktop" aria-label="Primary">
        {links}
        {contact}
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {open && (
        <div className="nav-drawer">
          {links}
          {contact}
        </div>
      )}
    </header>
  );
};

export default Header;
