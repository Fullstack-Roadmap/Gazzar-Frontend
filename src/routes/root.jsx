import React from "react";
import { Link } from "react-router-dom";

const Root = (props) => {
  return (
    <div className="flex justify-center items-center h-screen gap-[20vw] text-blue font-bold text-2xl">
      <Link to="register"> Register Business </Link>
      <Link to="signin"> Sign In </Link>
    </div>
  );
};

export default Root;
