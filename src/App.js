import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import StaffCardsHolder from './components/StaffCardsHolder/StaffCardsHolder';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import SeasonCardHolder from './components/SeasonCardHolder/SeasonCardHolder';
<<<<<<< HEAD
import Form from './components/Form/Form';
=======
import SideBarCaller from './components/SideBarCaller/SideBarCaller';
import SideBar from './components/SideBar/SideBar';
>>>>>>> 49002edc675ae99126a24b587e29cdefe50d6495

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
        <Form />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
