import React, { Component } from 'react';
import { arrowRight, arrowLeft } from './arrow';
import Photo from '../images/profile.jpg';

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
            <div className="social-container">
              <a
                className="btn"
                href="https://github.com/Zaknefeinn"
                target="_blank"
              >
                <div className="icon-box">
                  <span className="icon">
                    <i className="fab fa-github" />
                  </span>
                  <span className="icon-text">GitHub</span>
                </div>
              </a>
              <a
                className="btn"
                href="https://www.linkedin.com/in/elhutchison/"
                target="_blank"
              >
                <div className="icon-box">
                  <span className="icon">
                    <i className="fab fa-linkedin-in" />
                  </span>
                  <span className="icon-text">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <a href="#projects">{arrowRight}</a>
        <a href="#landing">{arrowLeft}</a>
      </div>
    );
  }
}
