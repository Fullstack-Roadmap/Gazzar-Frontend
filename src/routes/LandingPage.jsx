import React from "react";
import Navbar from "./Navbar";
// <Link to="register"> Register Business </Link>
// <Link to="signin"> Sign In </Link>

const LandingPage = () => {
  return (
    <div className="flex justify-center h-[3600px] text-blue font-semibold text-xl">
      <Navbar />
    </div>
  );
};

export default LandingPage;
