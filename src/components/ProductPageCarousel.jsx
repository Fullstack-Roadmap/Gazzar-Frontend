import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

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
    <div className="">
      <div className="relative flex justify-center items-center z-20 lg:translate-y-12 md:translate-y-10 sm:translate-y-8">
        <div
          className="absolute -left-4  bg-blue rounded-full flex p-1"
          onClick={handlePrevious}
        >
          <IoIosArrowBack color="white" />
        </div>
        <div
          className="absolute -right-4 bg-blue rounded-full flex p-1"
          onClick={handleNext}
        >
          <IoIosArrowForward color="white" />
        </div>
      </div>
      <div className="flex relative overflow-hidden">
        <div className="lg:h-24 md:h-20 sm:h-16 flex gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`object-cover w-full h-full ${
                currentIndex === index ? "opacity-100" : "opacity-35"
              }`}
              onClick={handleNext}
            />
          ))}
        </div>

        <div className="flex">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPageCarousel;
