import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import './App.css';

class App extends Component {
  mainPage = () => {
    return (
      <div>
        <Landing />
        <Projects />
      </div>
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={this.mainPage} />
          <Route exact path="/resume" component={Resume} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
