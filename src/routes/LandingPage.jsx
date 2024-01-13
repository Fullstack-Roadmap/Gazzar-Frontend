import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
// <Link to="register"> Register Business </Link>
// <Link to="signin"> Sign In </Link>

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center h-[3600px] font-semibold text-xl  mx-20">
      <Navbar />
      <Hero />
    </div>
  );
};

export default LandingPage;
