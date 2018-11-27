import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import StaffCardsHolder from './components/StaffCardsHolder/StaffCardsHolder';

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
        <StaffCardsHolder />
      </div>
    );
  }
}

export default App;
