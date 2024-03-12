import book from "../assets/svgs/book.svg";
import ellipses from "../assets/svgs/ellipses.svg";
import ex from "../assets/svgs/ex.svg";
import star from "../assets/svgs/star.svg";
import link from "../assets/svgs/link.svg";
import bell from "../assets/svgs/bell.svg";
import shop from "../assets/svgs/shop.svg";
import overview from "../assets/svgs/overview.svg";
import statistics from "../assets/svgs/statistics.svg";
import products from "../assets/svgs/products.svg";
import customers from "../assets/svgs/customers.svg";
import feedback from "../assets/svgs/feedbacks.svg";
import orders from "../assets/svgs/orders.svg";
import store from "../assets/svgs/store.svg";
import profile from "../assets/svgs/profile.svg";
import arrowDown from "../assets/svgs/arrowDown.svg";
import exit from "../assets/svgs/exit.svg";
import profilePic from "../assets/profilePic.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import Overview from "../components/Overview";

const Dashboard = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const setNavActive = (navItem) => {
    setActive(navItem);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Overview", svg: overview },
    { name: "Statistics", svg: statistics },
    { name: "Products", svg: products },
    { name: "Customers", svg: customers },
    { name: "Feedback", svg: feedback },
    { name: "Orders", svg: orders },
    { name: "Store", svg: store },
    { name: "Profile", svg: profile },
  ];
  const topNavItems = [
    {
      name: "book",
      svg: book,
    },
    { name: "link", svg: link },
    { name: "bell", svg: bell },
    {
      name: "shop",
      svg: shop,
    },
    { name: "ellipses", svg: ellipses },
  ];
  const capitalize = (word) => {
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
  };
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const user = [
    { businessName: "Omo Ope Ventures", email: "omoope01@gmail.com" },
  ];
  return (
    <div className="flex h-full">
      {menuOpen && (
        <div
          className="absolute z-10 w-screen h-screen"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
      <section
        className={`w-[22%] lg:-translate-x-0 h-full bg-white border-r-[1px] border-b-[1px] border-gray z-20 transition-all delay-300 duration-[400ms] ease-in-out ${
          menuOpen ? "" : "sm:-translate-x-full md:-translate-x-full"
        }`}
      >
        <header
          className="text-[1.375rem] font-extrabold flex items-center gap-2 mx-16 mb-14 mt-16 -translate-x-5 cursor-pointer"
          onClick={() => navigate("/storefront")}
        >
          <span className="mr-1 rounded-md aspect-square h-8 bg-[#FFB722]"></span>
          <p>Gazzar.</p>
        </header>
        <ul
          className={`flex flex-col gap-1 items-start h-full px-4 transition-all delay-200 duration-300 ease-in-out ${
            menuOpen
              ? "lg:translate-x-0"
              : "sm:-translate-x-full md:-translate-x-full lg:translate-x-0"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer relative flex items-center gap-2 pl-7 py-4 w-full rounded-lg text-sm  ${
                active === item.name.toLowerCase()
                  ? "font-bold bg-slate-200 text-blue"
                  : "font-semibold text-black/70"
              }`}
              onClick={() => setNavActive(item.name.toLowerCase())}
            >
              <div
                className={`absolute left-0 rounded-full bg-blue w-1 flex transition-all duration-300 ease-in-out ${
                  active === item.name.toLowerCase() ? "h-3/4" : "h-0"
                }`}
              />
              <img src={item.svg} alt={item.name} />
              {item.name}
            </li>
          ))}
          {!registrationComplete && (
            <div className="bg-blue flex flex-col gap-3 p-3 my-5 rounded-md items-center">
              <button className="absolute left-7">
                <img src={ex} alt="remove" className="h-5" />
              </button>
              <img src={star} alt="gold star" className="h-8" />
              <p className="font-medium text-white flex text-center text-[0.7rem] w-4/5">
                Upgrade to Gazzar pro to unlock more features today!
              </p>
              <button className="text-blue text-[0.7rem] font-bold flex justify-center bg-white py-2 rounded-md w-full">
                Upgrade Now
              </button>
            </div>
          )}
          {loggedIn && (
            <div className="w-full">
              <div className="py-4 px-2 flex justify-between items-center border-gray border-t-2 w-full">
                <img
                  src={profilePic}
                  alt="profile pic"
                  className="h-10 aspect-auto"
                />
                <div>
                  <h1 className="text-xs text-blue font-bold mb-1">
                    {user[0].businessName}
                  </h1>
                  <p className="text-[0.65rem] text-black/50">
                    {user[0].email}
                  </p>
                </div>
                <img src={arrowDown} alt="arrow" />
              </div>
              <button className="flex gap-3 text-red bg-red-600/20 rounded-md px-7 py-4 mb-10 font-semibold text-red-600 w-full">
                <img src={exit} alt="log out" />
                Logout
              </button>
            </div>
          )}
        </ul>
      </section>
      <section className="w-full sm:absolute md:absolute lg:static">
        <nav className="flex justify-between items-center border-b-[1px] border-gray px-10 sm:pr-6 py-6">
          <IoIosArrowForward
            className="z-20 absolute lg:hidden -translate-x-6 scale-125 cursor-pointer"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
          <span
            className="font-extrabold text-3xl sm:text-xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {capitalize(active)}
          </span>
          <nav className="flex gap-4 sm:gap-2">
            {topNavItems.map((item, index) => (
              <div
                key={index}
                className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer sm:h-8"
              >
                <img src={item.svg} alt="dots" className="sm:scale-[65%]" />
              </div>
            ))}
          </nav>
        </nav>
        {active === "overview" ? (
          <Overview />
        ) : (
          active === "statistics" && <Overview />
        )}
      </section>
    </div>
  );
};

export default Dashboard;
