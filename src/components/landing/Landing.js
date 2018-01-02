import React from 'react';
import About from './About';
import Hero from './Hero';
import Header from '../Header';
import Footer from '../Footer';

const Landing = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Hero/>
            <About/>
            <Footer/>
        </div>
    );
}

export default Landing;
