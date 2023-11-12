// src/components/TravelBlog/TravelBlog.js

import React from 'react';
import './TravelBlog.css';

const TravelBlog = ({ place, images, description }) => {
    return (
        <div className="travel-blog">
            <h3 className="place-header">{place}</h3>
            <div className="image-container">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${place} ${index + 1}`} className="place-image" />
                ))}
            </div>
            <p className="place-description">{description}</p>
        </div>
    );
};

export default TravelBlog;
