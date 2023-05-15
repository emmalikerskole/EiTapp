import React from "react";
import './HeroSection.css';
import '../App.css';

function HeroSection () {
   return (
      <div className='hero-container'>
         <h1>Vår Produsent</h1>
         <p>Bjarte Bjartesen</p>
         <img src='/gris.jpg' alt='pig' autoPlay loop muted />
      </div>

   );
} 

export default HeroSection;