import React, { Component } from 'react';
import ResumePhoto from '../../images/Resume_picture.jpg';
import ResumePDF from '../../static/Eric-Hutchison-Resume.pdf';
import ResumeHeader from './ResumeHeader';
import ResumeSubheader from './ResumeSubheader';
import resumeJson from '../../resume.json';

import './Resume.css';
export default class Resume extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="resume" className="resume-container">
        <div
          className="resume-download"
          style={{ alignSelf: 'flex-start', fontSize: '16px' }}
        >
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <button>Download My Resume</button>
          </a>
        </div>
        <ResumeHeader />
        <ResumeCategory cat="EXPERIENCE" />
        {resumeJson.experience.map(item => {
          return (
            <React.Fragment>
              <ResumeSubheader
                main={item.title}
                sub={item.location}
                style={{ marginBottom: '12px', fontSize: '20px' }}
              />
              {item.position.map(pos => (
                <ResumeSubheader main={pos.title} sub={pos.date} />
              ))}
              <ul>
                {item.bullets.map(bullet => (
                  <li>{bullet}</li>
                ))}
              </ul>
            </React.Fragment>
          );
        })}
        <ResumeCategory cat="TECHNICAL SKILLS" />
        <ul className="resume-skills">
          {resumeJson.skills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
        <ResumeCategory cat="EDUCATION" />
        {resumeJson.education.map(ed => {
          return (
            <React.Fragment>
              <ResumeSubheader
                main={ed.title}
                sub={ed.date}
                style={{ marginBottom: '12px', fontSize: '20px' }}
              />
              <ul>
                {ed.description && ed.description.map(desc => <li>{desc}</li>)}
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

const ResumeCategory = ({ cat }) => (
  <h3 className="resume-category-header">{cat}</h3>
);
