import React, { Component } from 'react';
import Divider from '../images/divider.png';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing" id="landing">
        <div className="text-box">
          <h1 className="heading-primary">Eric Hutchison</h1>
          <div className="divider-container">
            <img className="divider" src={Divider} />
          </div>
          <div className="jobTitle">
            <h1>Full Stack Developer</h1>
          </div>
        </div>
      </div>
    );
  }
}
