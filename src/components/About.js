import React, { Component } from 'react';
import { arrowRight, arrowLeft } from './arrow';
import Photo from '../images/profile.jpg';
// var FontAwesome = require('react-fontawesome');

export default class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="title">
          <h1>About</h1>
        </div>
        <div className="about-container">
          <div className="image-container">
            <img className="profile-image" src={Photo} alt="" />
          </div>
          <div className="about-container">
            <h2>
              Hello! My name is Eric Hutchison and I am a Full-Stack Developer.
            </h2>
            <p>I hav</p>
          </div>
        </div>
        <a href="#projects">{arrowRight}</a>
        <a href="#landing">{arrowLeft}</a>
      </div>
    );
  }
}
