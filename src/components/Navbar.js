import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-contact">
      <div className="btn btn-nav">
        <span>Contact Me!</span>
      </div>
      <div className="contact-container">
        <p>Eric Hutchison</p>
        <p>
          <a className="contact-anchor" href="mailto:ehutc00f@gmail.com">
            ehutc00f@gmail.com
          </a>
        </p>
        <p>Bella Vista, AR</p>
        <p>(479) 800-8269</p>
      </div>
    </div>
    <div className="navbar-full-screen">
      <NavLink className="btn btn-nav" to="/#landing">
        <span>Home</span>
      </NavLink>
      <NavLink className="btn btn-nav" to="/#projects">
        <span>Projects</span>
      </NavLink>
      <a
        className="btn btn-nav"
        href="https://github.com/eHutchZ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>GitHub</span>
      </a>
      <NavLink className="btn btn-nav" to="/resume">
        <span>Resume</span>
      </NavLink>
      <a
        className="btn btn-nav"
        href="https://www.linkedin.com/in/elhutchison/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>LinkedIn</span>
      </a>
    </div>
    <div className="navbar-mobile">
      <span className="hamburger">
        <i className="fas fa-bars" />
      </span>
      <div className="dropdown-content">
        <NavLink className="btn btn-nav" to="/#landing">
          <span>Home</span>
        </NavLink>
        <NavLink className="btn btn-nav" to="/#projects">
          <span>Projects</span>
        </NavLink>
        <a
          className="btn btn-nav"
          href="https://github.com/eHutchZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>
        </a>
        <NavLink className="btn btn-nav" to="/resume">
          <span>Resume</span>
        </NavLink>
        <a
          className="btn btn-nav"
          href="https://www.linkedin.com/in/elhutchison/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
);
export default Navbar;
