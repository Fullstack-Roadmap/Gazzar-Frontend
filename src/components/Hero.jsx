import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  const blue = "#083167";

  return (
    <div className="mid:m-20 mx-16 my-20 mt-[12rem] mid:mt-[14rem]">
      <h1 className="mid:mt-10 mid:mb-0 mb-16 mid:text-6xl mid:text-left font-bold lrg:w-2/3 leading-normal text-5xl text-center">
        Manage your business more efficiently.
      </h1>
      <p className="my-8 text-2xl font-normal mid:w-2/3 mid:text-left leading-relaxed">
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
