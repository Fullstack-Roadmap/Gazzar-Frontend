import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// <Link to="register"> Register Business </Link>
// <Link to="signin"> Sign In </Link>

const LandingPage = () => {
  const blue = "#083167";

  return (
    <div className="flex justify-center h-[3600px] text-blue font-bold text-xl">
      <nav className="sticky flex items-center mt-10 p-5 rounded-2xl h-fit w-full shadow-custom justify-between mx-10">
        <header className="text-3xl flex justify-center items-center gap-1 h-fit">
          <span className="mr-1 rounded-sm aspect-square h-6 bg-[#FFB722]"></span>
          <p>Gazzar.</p>
        </header>
        <section className="flex gap-10 items-center">
          <p>Features</p>
          <p>Company</p>
          <p>Pricing</p>
          <p>Learn</p>
        </section>
        <section className="flex gap-2 items-center">
          <div>
            <Button text="Login" buttonColor={blue} />
          </div>
          <div>
            <Button text="Get Started" buttonColor={blue}/>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default LandingPage;
