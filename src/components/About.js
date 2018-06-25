import React, { Component } from 'react';
import Photo from '../images/profile.jpg';
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Me</h1>
        <img src={Photo} alt="" />
        <p>
          A forward-thinking developer dedicated to creating and improving next
          generation applications. Completed multiple web applications, as well
          as lead a development team in completing a chrome extension. Actively
          seeking a position as a developer to further my talents and aid in
          generating cutting edge technologies.
        </p>
      </div>
    );
  }
}
