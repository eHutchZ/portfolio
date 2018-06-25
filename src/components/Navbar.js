import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="nav-ul">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </div>
    );
  }
}
