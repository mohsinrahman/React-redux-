// Packages
import React, { Component } from 'react';
import {connect} from "react-redux";
// StyleSheet
import './App.css';
//Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Kunder from './components/Kunder';
import OmOss from './components/OmOss';
import Filosofi from './components/Filosofi';
import Karriar from './components/Karriar';
import KvalitetMiljo from './components/KvalitetMiljo';
import Aktuellt from './components/Aktuellt';
import KontaktaOss from './components/KontaktaOss';

// Action Creators

import {getData} from "./actionCreator/actionCreator.js";


class App extends Component {
  componentDidMount(){
    //console.log(this.props.getData());
    this.props.getData();
    //console.log(this.props.getData());
  }
  render() {
    const {isLoading} = this.props;

    return (

  <div>

    <Header />
    <HeroSection />
    <Services />
    <Kunder />
    <OmOss />
    <Filosofi />
    <Karriar />
    <KvalitetMiljo />
    <Aktuellt />
    <KontaktaOss />


  </div>

    );
  }
}

const mapStateToProps = (kmit) => {
  console.log(kmit);
  return {
    kmit
  };
};

export default connect(mapStateToProps,{getData})(App);
