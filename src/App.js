import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Landing from './components/Landing';
import Projects from './components/Projects/Projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Projects />
      </div>
    );
  }
}

export default App;
