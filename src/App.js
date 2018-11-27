import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import About from './components/About/About';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <Banner />
        <About />
      </div>
    );
  }
}

export default App;
