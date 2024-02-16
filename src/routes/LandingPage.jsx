import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LandingMidSection from "../components/LandingMidSection";
import CreateStoreSection from "../components/CreateStoreSection";
import { useLocation } from "react-router";

const LandingPage = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center h-[3600px] font-semibold text-xl overflow-hidden">
      <div className="flex flex-col items-center mx-20">
        <div className="w-full text-center text-green-700 text-xs mt-5">{location.state?.status}</div>
        <Navbar />
        <Hero />
      </div>
      <LandingMidSection />
      <CreateStoreSection />
    </div>
  );
};

export default LandingPage;
