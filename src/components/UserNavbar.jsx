import React from "react";
import profilePic from "../assets/profilePic.png";
import ellipses from "../assets/svgs/ellipses.svg";
import search from "../assets/svgs/search.svg";
import { useState } from "react";

const UserNavbar = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };
  const [navLinkState, setNavLinkState] = useState(0);
  const toggleNavLink = (id) => {
    setNavLinkState(id);
  };
  return (
    <div>
      {menuState && (
        <div
          className="z-30 w-screen h-screen backdrop-blur-sm absolute lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
      <nav className="flex justify-between items-center lg:mx-[9.75rem] md:mx-20 sm:my-6 md:my-6 lg:my-0 font-semibold text-black/50 sm:justify-around">
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
      <span className="w-full bg-gray h-[1px] flex"></span>
    </div>
  );
};

export default UserNavbar;
