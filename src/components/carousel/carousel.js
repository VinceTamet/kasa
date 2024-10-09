import React, {useState} from 'react';
import './carousel.scss';

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0); 
  
    const prevImg = () => {
      const newIndex = (currentIndex === 0) ? pictures.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
        const nextImg = () => {
      const newIndex = (currentIndex === pictures.length - 1) ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="carousel-container">
        <button className="carousel-button prev-button" onClick={prevImg}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img
          src={pictures[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-button next-button" onClick={nextImg}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        <div className="carousel-indicator">
                {currentIndex + 1}/{pictures.length}
            </div>
      </div>
    );
  }
  

export default Carousel;
