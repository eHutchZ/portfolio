import React from 'react';
import Divider from '../images/divider.png';

const Landing = () => (
  <div className="landing" id="landing">
    <div className="text-box">
      <h1 className="heading-primary">Eric Hutchison</h1>
      <div className="divider-container">
        <img className="divider" alt="divider" src={Divider} />
      </div>
      <div className="jobTitle">
        <h1>Full Stack Developer</h1>
      </div>
    </div>
  </div>
);
export default Landing;
