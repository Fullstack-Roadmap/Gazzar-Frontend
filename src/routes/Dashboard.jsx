import book from "../assets/svgs/book.svg";
import ellipses from "../assets/svgs/ellipses.svg";
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
import { useState } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const setNavActive = (navItem) => {
    setActive(navItem);
  };
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
  return (
    <div className="flex h-full">
      <section className="h-full border-r-[1px] border-b-[1px] rounded-md border-gray">
        <header
          className="text-[1.375rem] font-extrabold flex items-center gap-2 mx-16 mb-14 mt-16 -translate-x-5 cursor-pointer"
          onClick={() => navigate("/storefront")}
        >
          <span className="mr-1 rounded-md aspect-square h-8 bg-[#FFB722] "></span>
          <p>Gazzar.</p>
        </header>
        <ul className="flex flex-col gap-1 items-start h-full px-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer relative flex items-center gap-2 pl-7 py-4 w-full rounded-lg text-sm  ${
                active === item.name
                  ? "font-bold bg-slate-200 text-blue"
                  : "font-semibold text-black/70"
              }`}
              onClick={() => setNavActive(item.name)}
            >
              <div
                className={`absolute left-0 rounded-full bg-blue w-1 flex transition-all duration-200 ease-in-out ${
                  active === item.name ? "h-3/4" : "h-0"
                }`}
              />
              <img src={item.svg} alt="" className="" />
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full">
        <nav className="flex justify-between items-center border-b-[1px] border-gray px-10 py-6">
          <span className="font-extrabold text-3xl">Overview</span>
          <nav className="flex gap-4">
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={book} alt="dots" />
            </div>
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={link} alt="dots" />
            </div>
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={bell} alt="dots" />
            </div>
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={shop} alt="dots" />
            </div>
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={ellipses} alt="dots" />
            </div>
          </nav>
        </nav>
        <section className="h-full"></section>
      </section>
    </div>
  );
};

export default Dashboard;
