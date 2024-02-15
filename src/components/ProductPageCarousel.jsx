import React from "react";
import { useState } from "react";

const ProductPageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="flex">
      <img key={currentIndex} src={images[currentIndex]} />
      <div className="slide_direction">
        <div className="bg-blue rounded-full flex p-2" onClick={handlePrevious}>
          arrow
        </div>
        <div className="bg-blue rounded-full flex p-2" onClick={handleNext}>
          arrow
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductPageCarousel;
