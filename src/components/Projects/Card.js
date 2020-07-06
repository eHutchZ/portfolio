import React from 'react';
const Card = ({ skills, title, image, description, github, live }) => {
  const skillList = skills.map((skill, index) => (
    <span key={title + index} className="skill">
      {skill}
    </span>
  ));
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-h2">{title}</h2>
      </div>
      <div className="card-content">
        <div className="card-thumbnail">
          <img className="thumbnail" src={image} alt="" />
        </div>
        <div className="card-summary">
          <p className="card-description">{description}</p>
          <div className="languages">{skillList}</div>
          <div className="card-links">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn card-btn live"
            >
              <span className="icon">
                <i className="fas fa-external-link-square-alt" />
              </span>
              <span className="icon-text">Live</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn card-btn source"
              style={{ backgroundColor: github ? '#2a2a2c' : '#a40000' }}
            >
              <span className="icon">
                <i className="fab fa-github" />
              </span>
              <span className="icon-text">{github ? 'GitHub' : 'Private'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
