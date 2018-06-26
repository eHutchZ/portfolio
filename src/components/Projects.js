import React, { Component } from 'react';
import StockMarket from '../images/stock-market.png';
import Momentum from '../images/momentum.png';
import VoteCo from '../images/vote-co.png';
import RogueLike from '../images/rogue-like.png';
import NightLife from '../images/nightlife.png';
import RecipeList from '../images/recipes.png';
import { arrowLeft } from './arrow';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="projectContainer">
          <div className="card">
            <div className="card-img">
              <img src={Momentum} alt="" />
            </div>
            <div className="card-title">
              <span>Momentum Clone</span>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={VoteCo} alt="" />
            </div>
            <div className="card-title">
              <span>VoteCo</span>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={RogueLike} alt="" />
            </div>
            <div className="card-title">
              <span>RogueLike Dungeon Crawler</span>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={StockMarket} alt="" />
            </div>
            <div className="card-title">
              <span>Chart the Stock Market</span>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={NightLife} alt="" />
            </div>
            <div className="card-title">
              <span>NightLife</span>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={RecipeList} alt="" />
            </div>
            <div className="card-title">
              <span>Recipe List</span>
            </div>
          </div>
        </div>
        <a href="#about">{arrowLeft}</a>
      </div>
    );
  }
}
