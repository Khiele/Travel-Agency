// src/App.js

import React from 'react';
import Hero from './components/Hero/Hero';
import TravelBlog from './components/TravelBlog/TravelBlog';
import TravelData from './TravelData';
import './App.css';

const App = () => {
  return (
    <div>
      <Hero
        backgroundImage="https://example.com/hero-image.jpg"
        heading="Adventure Awaits"
        subHeading="Explore the Beauty of the World"
        pageDescription="Take a look at some of the amazing locations below!"
      />
      {TravelData.map((place, index) => (
        <TravelBlog
          key={index}
          place={place.placeHeading}
          images={place.images}
          description={place.placeDescription}
        />
      ))}
    </div>
  );
};

export default App;
