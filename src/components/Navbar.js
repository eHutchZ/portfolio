import React, { Component } from 'react';
// import { Document } from 'react-pdf';
import Test from '../static/Eric-Hutchison-Resume.pdf';
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
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
          >
            <span>GitHub</span>
          </a>
          <a className="btn btn-nav" href={Test}>
            <span>Resume</span>
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
            >
              <span>GitHub</span>
            </a>
            <a className="btn btn-nav" href={Test}>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
