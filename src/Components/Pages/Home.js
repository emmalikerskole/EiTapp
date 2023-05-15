import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Tabellgreie from '../Tabellgreie';
import Barometer from '../Barometer';


function Home () {
    return (
        <>
            <Barometer   />
            <HeroSection />
            <Tabellgreie />
        </>
    );
}

export default Home;