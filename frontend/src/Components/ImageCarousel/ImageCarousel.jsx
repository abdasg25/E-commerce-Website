import React, { useState } from 'react';
import './ImageCarousel.css';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gv8Z8pZACtaxc9DGeBq3goAVJ4U6OLMXSA&s',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
