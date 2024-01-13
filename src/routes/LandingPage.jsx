import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// <Link to="register"> Register Business </Link>
// <Link to="signin"> Sign In </Link>

const LandingPage = () => {
  const blue = "#083167";

  return (
    <div className="flex justify-center h-[3600px] text-blue font-bold text-2xl">
      <nav className="top-10 sticky">
        <header className="flex justify-start items-center gap-1">
          <span className="rounded-sm aspect-square h-6 bg-[#FFB722]"></span>
          <p>Gazzar.</p>
        </header>
        <section>
          <p>Features</p>
          <p>Company</p>
          <p>Pricing</p>
          <p>Learn</p>
        </section>
        <section>
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
