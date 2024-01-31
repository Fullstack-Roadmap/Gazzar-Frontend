import { Link } from "react-router-dom";
import Button from "./Button";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const blue = "#083167";
  const lightBlue = "#1B73D326";

  return (
    <nav className="sticky flex items-center mt-16 py-6 px-8 rounded-3xl h-fit w-full shadow-custom justify-between text-lg mx-20">
      <header className="text-2xl font-extrabold flex items-center gap-2 h-fit">
        <span className="mr-1 rounded-md aspect-square h-8 bg-[#FFB722]"></span>
        <p>Gazzar.</p>
      </header>
      <section className="lg:flex gap-16 items-center mx-2 hidden">
        <p>Features</p>
        <p>Company</p>
        <p>Pricing</p>
        <p>Learn</p>
      </section>
      <section className="gap-4 items-center font-semibold flex justify-end">
        <div className="hidden lg:flex">
          <Link to="signin">
            <Button text="Login" buttonColor={lightBlue} textBlue={true} />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link to="register">
            <Button text="Get Started" buttonColor={blue} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <FaBars />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
