import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LandingMidSection from "../components/LandingMidSection";
import CreateStoreSection from "../components/CreateStoreSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center h-[3600px] font-semibold text-xl overflow-hidden">
      <div className="flex flex-col items-center mx-20">
        <Navbar />
        <Hero />
      </div>
      <LandingMidSection />
      <CreateStoreSection />
    </div>
  );
};

export default LandingPage;
