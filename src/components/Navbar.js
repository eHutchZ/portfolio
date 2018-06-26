import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a className="btn btn-nav" href="#landing">
          Home
        </a>
        <a className="btn btn-nav" href="#about">
          About
        </a>
        <a className="btn btn-nav" href="#projects">
          Projects
        </a>
      </div>
    );
  }
}
