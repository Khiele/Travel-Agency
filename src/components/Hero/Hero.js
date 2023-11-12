// src/components/Hero/Hero.js

import React from 'react';
import './hero.css';

const Hero = ({ backgroundImage, heading, subHeading, pageDescription }) => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className="hero" style={heroStyle}>
            <div className="hero-content">
                <h1>{heading}</h1>
                <h2>{subHeading}</h2>
                <p>{pageDescription}</p>
            </div>
        </div>
    );
};

export default Hero;
