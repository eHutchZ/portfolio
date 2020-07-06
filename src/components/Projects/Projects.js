import React, { Component } from 'react';

import MakerMade3D from '../../images/MakerMade3D.png';
import Makerverse from '../../images/Makerverse.png';
import ChinguTabs from '../../images/ChinguTabs.jpg';

import Card from './Card';

const Projects = () => (
  <div className="projects" id="projects">
    <div className="title">
      <h1>Projects</h1>
    </div>
    <div className="projectContainer">
      <Card
        title="Makerverse"
        description="A UI built to send G-Code commands to CNC controllers."
        skills={['HTML', 'CSS', 'ES6', 'ReactJS', 'Node', 'Electron']}
        image={Makerverse}
        live="http://www.makerverse.com/"
      />
      <Card
        title="MakerMade3D"
        description="An e-commerce portal that deals with selling of 3D printers while offering assembly and software support."
        skills={['HTML', 'CSS', 'ES6', 'ReactJS', 'Node']}
        image={MakerMade3D}
        live="http://www.makermade3d.com/"
      />
      <Card
        title="ChinguTabs"
        description="A remote team project based off the popular chrome extension, Momentum."
        skills={['HTML', 'CSS', 'ES6', 'ReactJS', 'Node', 'Express', 'MongoDB']}
        image={ChinguTabs}
        live="https://chrome.google.com/webstore/search/chingutabs"
        github="https://github.com/chingu-voyage4/Bears-Team-13"
      />
    </div>
  </div>
);

export default Projects;
