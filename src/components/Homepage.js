import React, { Component } from 'react';
import Hero from './components/Hero'
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SecondCta from './components/SecondCta'
import Features from './components/Features';
import Stats from './components/Stats';


const Homepage = () => {
    return ( <div className="homepage">
        <Hero/>
        <Stats />
        <Features/>
        <Newsletter/>
        <SecondCta/>
        <Footer/>
    </div> );
}
 
export default Homepage;