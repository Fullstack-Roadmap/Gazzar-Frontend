import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="text-lg translate-y-28">{location.state.name}</div>
      <div className="flex justify-center items-center h-screen gap-[20vw] text-blue font-bold text-2xl">
        <Link to="register"> Register Business </Link>
        <Link to="signin"> Sign In </Link>
      </div>
    </div>
  );
};

export default Root;
