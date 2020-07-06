import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="social-container">
        <a
          className="btn"
          href="https://github.com/eHutchZ"
          target="_blank"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
        >
          <div className="icon-box">
            <span className="icon">
              <i className="fab fa-linkedin-in" />
            </span>
            <span className="icon-text">LinkedIn</span>
          </div>
        </a>
      </div>

      <div className="footer-bottom">
        ©2020 - Eric Hutchison. All Rights Reserved.
      </div>
    </div>
  </div>
);

export default Footer;
