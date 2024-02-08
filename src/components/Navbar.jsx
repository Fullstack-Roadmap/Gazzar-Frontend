import { Link } from "react-router-dom";
import Button from "./Button";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const blue = "#083167";
  const lightBlue = "#1B73D326";

  const toggleNav = () => {
    const navList = document.getElementById("options");
    const close = document.getElementById("close");
    const bars = document.getElementById("bars");
    navList.classList.toggle("hidden");
    close.classList.toggle("hidden");
    bars.classList.toggle("hidden");
    navList.classList.toggle("flex");
  };  

  return (
    <nav className="sticky lg:flex items-center mid:mt-16 mt-2 py-6 px-8 mid:rounded-3xl rounded-none shadow-none border-b border-[#EAECF0] h-fit w-full mid:shadow-custom justify-between text-lg sml:mx-20 mx-12">
      <section className="flex justify-between items-center">
        <header className="text-2xl font-extrabold flex items-center gap-2 h-fit">
          <span className="mr-1 rounded-md aspect-square h-8 bg-[#FFB722]"></span>
          <p>Gazzar.</p>
        </header>
        <div className="flex lg:hidden">
          <FaBars size={28} onClick={toggleNav} id="bars"/>
          <FaX size={26} className="hidden" onClick={toggleNav} id="close"/>
        </div>
      </section>
      <section className="lg:flex lg:flex-row lg:border-0 lg:mx-2 lg:mt-0 lg:pt-0 gap-6 mt-4 pt-4 border-t border-[#EAECF0] items-center justify-center hidden flex-col" id="options">
        <p>Features</p>
        <p>Company</p>
        <p>Pricing</p>
        <p>Learn</p>
      </section>
      <section className="gap-4 items-center font-semibold flex justify-end">
        <div className="hidden lg:flex">
          <Link to="signin">
            <Button text="Login" buttonColor={lightBlue} textBlue={true} hasBorder=
              { false} />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link to="register">
            <Button text="Get Started" buttonColor={blue} />
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
