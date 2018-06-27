import React, { Component } from 'react';
// import StockMarket from '../images/stock-market.png';
// import Momentum from '../images/momentum.png';
// import VoteCo from '../images/vote-co.png';
// import RogueLike from '../images/rogue-like.png';
// import NightLife from '../images/nightlife.png';
// import RecipeList from '../images/recipes.png';
import Card from './Card';
export default class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="projectContainer">
          <Card
            title="ChinguTabs"
            description="A team project based off the popular chrome extension, Momentum."
            skills={[
              'HTML',
              'CSS',
              'ES6',
              'ReactJS',
              'Node',
              'Express',
              'MongoDB'
            ]}
            live="https://chrome.google.com/webstore/search/chingutabs"
            github="https://github.com/chingu-voyage4/Bears-Team-13"
          />
          <Card
            title="VoteCo"
            description="An application that allows users to add polls to be voted on, and shows a visual display of the outcome."
            skills={[
              'HTML',
              'CSS',
              'JavaScript',
              'EJS',
              'Node',
              'Express',
              'MongoDB'
            ]}
            live="https://vote-co-20853.herokuapp.com/"
            github="https://github.com/Zaknefeinn/voting-app"
          />
          <Card
            title="Chart the Stock Market"
            description="Check a visual chart of your stocks, add and remove stocks, all in real time using socket.io"
            skills={['HTML', 'CSS', 'JavaScript', 'React', 'Node']}
            live="https://thawing-plateau-12593.herokuapp.com/"
            github="https://github.com/Zaknefeinn/chart-the-stock-market"
          />
          <Card
            title="Dungeon Crawler"
            description="One of my earlier projects with React. With my knowledge now, it could be optimized, but it was a fun and exciting experience to create!"
            skills={[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Node',
              'Express',
              'MongoDB',
              'socket.io'
            ]}
            live="https://rogue-like-93413.herokuapp.com/"
            github="https://github.com/Zaknefeinn/Dungeon-Crawler"
          />
        </div>
      </div>
    );
  }
}
