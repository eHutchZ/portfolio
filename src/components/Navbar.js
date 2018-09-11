import React, { Component } from 'react';
// import { Document } from 'react-pdf';
import Resume from '../static/Eric-Hutchison-Resume.pdf';
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-contact">
          <a className="btn btn-nav">
            <span>Contact Me!</span>
          </a>
          <div className="contact-container">
            <p>Eric Hutchison</p>
            <p>
              <a className="contact-anchor" href="mailto:ehutc00f@gmail.com">
                ehutc00f@gmail.com
              </a>
            </p>
            <p>Centerton, AR</p>
            <p>(479) 800-8269</p>
          </div>
        </div>
        <div className="navbar-full-screen">
          <a className="btn btn-nav" href="#landing">
            <span>Home</span>
          </a>
          <a className="btn btn-nav" href="#projects">
            <span>Projects</span>
          </a>
          <a
            className="btn btn-nav"
            href="https://github.com/Zaknefeinn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
          </a>
          <a className="btn btn-nav" href={Resume}>
            <span>Resume</span>
          </a>
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
            <a className="btn btn-nav" href="#landing">
              <span>Home</span>
            </a>
            <a className="btn btn-nav" href="#projects">
              <span>Projects</span>
            </a>
            <a
              className="btn btn-nav"
              href="https://github.com/Zaknefeinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
            </a>
            <a className="btn btn-nav" href={Resume}>
              <span>Resume</span>
            </a>
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
  }
}
