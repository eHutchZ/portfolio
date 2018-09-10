import React, { Component } from 'react';
export default class Card extends Component {
  render() {
    const skills = this.props.skills.map((skill, index) => (
      <span key={this.props.title + index} className="skill">
        {skill}
      </span>
    ));
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="card-h2">{this.props.title}</h2>
        </div>
        <div className="card-content">
          <div className="card-thumbnail">
            <img className="thumbnail" src={this.props.image} alt="" />
          </div>
          <div className="card-summary">
            <p className="card-description">{this.props.description}</p>
            <div className="languages">{skills}</div>
            <div className="card-links">
              <a
                href={this.props.live}
                target="_blank"
                className="btn card-btn live"
              >
                <span className="icon">
                  <i className="fas fa-external-link-square-alt" />
                </span>
                <span className="icon-text">Live</span>
              </a>
              <a
                href={this.props.github}
                target="_blank"
                className="btn card-btn source"
              >
                <span className="icon">
                  <i className="fab fa-github" />
                </span>
                <span className="icon-text">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
