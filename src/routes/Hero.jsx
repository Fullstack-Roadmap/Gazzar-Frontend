import React from "react";
import Button from "./Button";

const Hero = () => {
     const blue = "#083167";

  return (
    <div className="m-20 ">
      <h1 className="mt-10 text-6xl font-bold w-2/3 leading-relaxed">
        Manage your business more efficiently.
      </h1>
      <p className="my-5 text-2xl font-medium w-2/3 leading-relaxed">
        Gazzar helps you analyze and keep track of your business growth. Setup
        your online store in just 3 minutes.
        </p>
        <Button text="Get Started" buttonColor={blue} hasArrow={ true} />
    </div>
  );
};

export default Hero;
