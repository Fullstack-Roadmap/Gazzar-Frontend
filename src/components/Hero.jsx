import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const blue = "#083167";
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => {
    setIsHover((current) => !current);
  };

  return (
    <div className="m-20 ">
      <h1 className="mt-10 text-6xl font-bold w-2/3 leading-normal">
        Manage your business more efficiently.
      </h1>
      <p className="my-5 text-2xl font-medium w-2/3 leading-relaxed">
        Gazzar helps you analyze and keep track of your business growth. Setup
        your online store in just 3 minutes.
      </p>
      <Link to="register">
        <button
          onMouseOver={toggleHover}
          onMouseOut={toggleHover}
          className="mt-8 px-8 py-5 rounded-xl flex items-center gap-3 bg-blue text-white text-2xl"
        >
          <span>Get Started</span>
          <div
            className={`transition-all duration-300 ${
              isHover && "translate-x-2"
            }`}
          >
            <IoIosArrowForward />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Hero;
