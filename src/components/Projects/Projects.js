import React, { Component } from 'react';

import VoteCo from '../../images/VoteCo.jpg';
import ChinguTabs from '../../images/ChinguTabs.jpg';
import StockMarket from '../../images/StockMarket.jpg';
import DungeonCrawler from '../../images/DungeonCrawler.jpg';
import D3Projects from '../../images/D3Projects.jpg';

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
            description="A remote team project based off the popular chrome extension, Momentum."
            skills={[
              'HTML',
              'CSS',
              'ES6',
              'ReactJS',
              'Node',
              'Express',
              'MongoDB'
            ]}
            image={ChinguTabs}
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
            image={VoteCo}
            live="https://vote-co-20853.herokuapp.com/"
            github="https://github.com/Zaknefeinn/voting-app"
          />

          <Card
            title="Chart the Stock Market"
            description="Check a visual chart of your stocks, add and remove stocks, all in real time using socket.io"
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
            image={StockMarket}
            live="https://thawing-plateau-12593.herokuapp.com/"
            github="https://github.com/Zaknefeinn/chart-the-stock-market"
          />
          <Card
            title="Dungeon Crawler"
            description="A mini-game based off the classic Roguelike genre. Gather health, weapons, fight enemies, and progress through the levels to the final boss"
            skills={['HTML', 'CSS', 'JavaScript', 'React', 'Node']}
            image={DungeonCrawler}
            live="https://rogue-like-93413.herokuapp.com/"
            github="https://github.com/Zaknefeinn/Dungeon-Crawler"
          />
          <Card
            title="Data-Visualization"
            description="Multiple projects working with D3.js to chart several different data sets, ranging from heat maps to world maps.  "
            skills={['HTML', 'CSS', 'JavaScript', 'D3', 'TopoJSON', 'Node']}
            image={D3Projects}
            live="https://zaknefeinn.github.io/Data-Vizualization/"
            github="https://github.com/Zaknefeinn/Data-Vizualization"
          />
        </div>
      </div>
    );
  }
}
