import React from 'react';
import '../../App.js';
import Cards from '../Cards.js';
import Footer from '../Footer.js';
import HeroSection from '../HeroSection';

function Home(){
    return(
        <>
            <HeroSection/>
            <Cards/>
            <Footer />
        </>
    )
}

export default Home;