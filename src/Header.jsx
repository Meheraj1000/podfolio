import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/skill">Skills</Link></li>
      <li><Link to="/project">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            {links}
          </ul>
        </div>
        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="/src/assets/download (1).jpeg" alt="Logo" className="w-10 h-10 rounded-full" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Resume Button */}
      <div className="navbar-end">
        <a
          href="/assets/MD Meherajul Karim1.pdf"
          target="_blank"
          className="btn btn-outline btn-sm"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
