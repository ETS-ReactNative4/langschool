import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';

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
      </div>
    );
  }
}

export default App;
