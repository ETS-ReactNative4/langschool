import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import StaffCardsHolder from './components/StaffCardsHolder/StaffCardsHolder';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import SeasonCardHolder from './components/SeasonCardHolder/SeasonCardHolder';
import SideBarCaller from './components/SideBarCaller/SideBarCaller';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <SideBarCaller />
        <SideBar />
        <Banner />
        <About />
        <SeasonCardHolder />
        <StaffCardsHolder />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
