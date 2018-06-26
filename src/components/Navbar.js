import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a className="btn btn-nav" href="#landing">
          <span>Home</span>
        </a>
        <a className="btn btn-nav" href="#about">
          <span>About</span>
        </a>
        <a className="btn btn-nav" href="#projects">
          <span>Projects</span>
        </a>
      </div>
    );
  }
}
