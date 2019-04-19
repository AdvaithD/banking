import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SecondCta from './components/SecondCta'
import Features from './components/Features';
import Stats from './components/Stats';
class App extends Component {
  render() {
    return (
      <div className="App code">
      {/* <StickyNav /> */}
        <Hero/>
        <Stats />
        <Features/>
        <Newsletter/>
        <SecondCta/>
        <Footer/>
      </div>
    );
  }
}

export default App;
