import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LandingMidSection from "../components/LandingMidSection";
import CreateStoreSection from "../components/CreateStoreSection";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const location = useLocation();
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center h-[3600px] font-semibold text-xl overflow-hidden">
      <div className="flex flex-col items-center mx-20">
        {showDiv && (
          <div className={`w-full text-center text-green-600 text-xs mt-5`}>
            {location.state?.status}
          </div>
        )}
        <Navbar />
        <Hero />
      </div>
      <LandingMidSection />
      <CreateStoreSection />
    </div>
  );
};

export default LandingPage;
