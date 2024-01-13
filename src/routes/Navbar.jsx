import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const blue = "#083167";
  const lightBlue = "#1B73D326";

  return (
    <nav className="sticky flex items-center mt-16 py-6 px-8 rounded-3xl h-fit w-full shadow-custom justify-between mx-20 text-lg">
      <header className="text-2xl font-extrabold flex justify-center items-center gap-2 h-fit">
        <span className="mr-1 rounded-md aspect-square h-8 bg-[#FFB722]"></span>
        <p>Gazzar.</p>
      </header>
      <section className="flex gap-16 items-center mx-2">
        <p>Features</p>
        <p>Company</p>
        <p>Pricing</p>
        <p>Learn</p>
      </section>
      <section className="flex gap-4 items-center font-semibold">
        <div>
          <Button text="Login" textColor={blue} buttonColor={lightBlue} />
        </div>
        <div>
          <Button text="Get Started" buttonColor={blue} />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
