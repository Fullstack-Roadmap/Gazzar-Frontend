import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => {
    setIsHover((current) => !current);
  };
  const blue = "#083167";

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
        <Button
          text="Get Started"
          hasArrow={true}
          buttonColor={blue}
          textLarge={true}
        />
      </Link>
    </div>
  );
};

export default Hero;
