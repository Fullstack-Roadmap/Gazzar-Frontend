import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LandingMidSection from "../components/LandingMidSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center h-[3600px] font-semibold text-xl mx-20">
      <Navbar />
      <Hero />
      <LandingMidSection/>
    </div>
  );
};

export default LandingPage;
