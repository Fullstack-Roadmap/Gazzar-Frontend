import Button from "../components/Button";
import storeFrontHeroPic from "../assets/storeFrontHeroPic.png";
import profilePic from "../assets/profilePic.png";
import ellipses from "../assets/svgs/ellipses.svg";
import search from "../assets/svgs/search.svg";
import Product from "../components/Product";
import { useState } from "react";

const StoreFront = () => {
  var products = [...Array(8).keys()];
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };
  const [navLinkState, setNavLinkState] = useState(0);
  const toggleNavLink = (id) => {
    setNavLinkState(id);
  };
  const [categoryState, setCategoryState] = useState(0);
  const toggleCategory = (id) => {
    setCategoryState(id);
  };

  return (
    <body className="overflow-hidden">
      {menuState && (
        <div
          className="z-30 w-screen h-screen backdrop-blur-sm absolute lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
      <nav className="flex justify-between items-center lg:mx-36 md:mx-20 sm:my-6 md:my-6 lg:my-0 font-semibold text-black/50 sm:justify-around">
        <img
          src={profilePic}
          className="w-14  cursor-pointer"
          alt="profilePic"
        />

        <ul
          className={`sm:flex-col md:flex-col lg:flex-row fixed lg:static flex justify-center items-center lg:gap-7 lg:bg-transparent bg-slate-200 top-0 right-0 p-10 w-3/4 lg:h-fit h-screen z-30 lg:text-base text-3xl sm:text-xl gap-16 transition-all duration-300 ease-in-out ${
            !menuState &&
            "sm:translate-x-[80vw] md:translate-x-[80vw] lg:translate-x-0"
          }`}
        >
          <li
            className="lg:hidden cursor-pointer p-5 rounded-full top-5 right-5 absolute text-blue"
            onClick={toggleMenu}
          >
            X
          </li>
          <li
            className={`${
              navLinkState == 0 && "text-blue font-bold "
            } cursor-pointer`}
            onClick={() => {
              toggleNavLink(0);
            }}
          >
            Home
          </li>
          <li
            className={`${
              navLinkState == 1 && "text-blue font-bold "
            } cursor-pointer`}
            onClick={() => {
              toggleNavLink(1);
            }}
          >
            Products
          </li>
          <li
            className={`${
              navLinkState == 2 && "text-blue font-bold "
            } cursor-pointer`}
            onClick={() => {
              toggleNavLink(2);
            }}
          >
            Categories
          </li>
        </ul>
        <section className="flex justify-center items-center gap-3">
          <div className="bg-[#DFDFDF]/30 flex h-fit justify-start items-center py-3 px-5 rounded-lg gap-3 border-[1px] border-black/10 w-[300px] sm:w-[200px]">
            <img src={search} alt="search" className="w-5 cursor-pointer" />
            <input
              type="text"
              placeholder="Search or type"
              className="bg-transparent w-[150px] sm:w-[120px] md:w-[250px] focus:outline-none placeholder:text-sm text-black"
            />
          </div>
          <div
            className="rounded-full h-[3.25rem] aspect-square flex justify-center items-center border-[1px] border-gray cursor-pointer"
            onClick={toggleMenu}
          >
            <img src={ellipses} alt="dots" />
          </div>
        </section>
      </nav>
      <section className="flex flex-col justify-center items-start text-white lg:h-[520px] md:h-[480px] sm:h-[320px] overflow-hidden relative gap-10 sm:gap-5">
        <p className="lg:mx-36 md:mx-20 sm:mx-10 z-20 lg:text-6xl md:text-5xl sm:text-3xl font-extrabold lg:w-[53%] sm:w-3/4 md:w-3/4 leading-[1.4]">
          I sell shoes, clothes, bags and other clothing accessories.
        </p>
        <div className="lg:mx-36 md:mx-20 sm:mx-10 z-20">
          <Button
            text="Shop Now"
            borderWhite={true}
            customClasses="md:px-14 md:py-4 md:text-lg lg:px-16 lg:py-4 lg:text-xl"
          />
        </div>

        <div className="flex justify-center z-10 absolute bg-green-500 sm:h-80 md:h-[30rem] lg:h-fit">
          <img src={storeFrontHeroPic} alt="heroPic" className="object-cover" />
        </div>
      </section>
      <ul className="justify-start flex-wrap flex lg:mx-36 md:mx-20 sm:mx-10 sm:mt-[4.5rem] md:mt-12 lg:mt-20 gap-3 text-xs font-medium">
        <li
          className={`${
            categoryState == 0
              ? "bg-blue text-white"
              : "bg-[#DFDFDF] text-black/60"
          } px-6 py-4 rounded-lg cursor-pointer transition-all ease-in-out`}
          onClick={() => {
            toggleCategory(0);
          }}
        >
          All (74)
        </li>
        <li
          className={`${
            categoryState == 1
              ? "bg-blue text-white"
              : "bg-[#DFDFDF] text-black/60"
          } bg-[#DFDFDF] px-6 py-4 rounded-lg cursor-pointer ease-in-out`}
          onClick={() => {
            toggleCategory(1);
          }}
        >
          Shoes
        </li>
        <li
          className={`${
            categoryState == 2
              ? "bg-blue text-white"
              : "text-black/60 bg-[#DFDFDF]"
          } bg-[#DFDFDF] px-6 py-4 rounded-lg cursor-pointer ease-in-out`}
          onClick={() => {
            toggleCategory(2);
          }}
        >
          Clothes
        </li>
        <li
          className={`${
            categoryState == 3
              ? "bg-blue text-white"
              : "bg-[#DFDFDF] text-black/60"
          } bg-[#DFDFDF] px-6 py-4  rounded-lg cursor-pointer ease-in-out`}
          onClick={() => {
            toggleCategory(3);
          }}
        >
          Bags
        </li>
      </ul>
      <ul className="flex flex-wrap justify-center items-center gap-10 w-full mt-12 mb-24 px-10">
        {products.map(() => (
          <li>
            <Product />
          </li>
        ))}
      </ul>
    </body>
  );
};

export default StoreFront;
