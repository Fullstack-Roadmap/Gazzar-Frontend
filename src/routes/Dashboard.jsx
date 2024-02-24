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
const Dashboard = () => {
  const [active, setActive] = useState("overview")
  const setNavActive = (navItem) => {
    setActive(navItem)
  }
  return (
    <div className="flex h-full">
      <section className="h-full border-r-[1px] border-b-[1px] rounded-md border-gray">
        <header className="text-[1.375rem] font-extrabold flex items-center gap-2 mx-16 my-14 -translate-x-5">
          <span className="mr-1 rounded-md aspect-square h-8 bg-[#FFB722] "></span>
          <p>Gazzar.</p>
        </header>
        <ul className="flex flex-col gap-1 items-start h-full px-4">
          <li className="relative flex items-center gap-2 pl-7 py-4 w-full text-blue text-sm font-bold bg-slate-200 rounded-lg">
            <div
              className="absolute left-0 rounded-full h-3/4 bg-blue w-1 flex"
              onClick={() => setNavActive("overview")}
            ></div>
            <img src={overview} alt="" />
            Overview
          </li>
          <li
            className="relative flex items-center gap-2 pl-7 py-5 w-full rounded-lg text-black/70 text-sm font-semibold"
            onClick={() => setNavActive("statistics")}
          >
            <img src={statistics} alt="" />
            Statistics
          </li>
          <li
            className="relative flex items-center gap-2 pl-7 py-5 w-full rounded-lg text-black/70 text-sm font-semibold"
            onClick={() => setNavActive("products")}
          >
            <img src={products} alt="" />
            Products
          </li>
          <li
            className="relative flex items-center gap-2 pl-7 py-5 w-full rounded-lg text-black/70 text-sm font-semibold"
            onClick={() => setNavActive("customers")}
          >
            <img src={customers} alt="" />
            Customers
          </li>
          <li
            className="relative flex items-center gap-2 pl-7 py-5 w-full rounded-lg text-black/70 text-sm font-semibold"
            onClick={() => setNavActive("feedback")}
          >
            <img src={feedback} alt="" />
            Feedback
          </li>
          <li
            className="relative flex items-center gap-2 pl-7 py-5 w-full rounded-lg text-black/70 text-sm font-semibold"
            onClick={() => setNavActive("orders")}
          >
            <img src={orders} alt="" />
            Orders
          </li>
          <li
            className="relative flex items-center gap-2 pl-7 py-5 w-full rounded-lg text-black/70 text-sm font-semibold"
            onClick={() => setNavActive("store")}
          >
            <img src={store} alt="" />
            Store
          </li>
          <li
            className="relative flex items-center gap-2 pl-7 py-5 w-full rounded-lg text-black/70 text-sm font-semibold"
            onClick={() => setNavActive("profile")}
          >
            <img src={profile} alt="" />
            Profile
          </li>
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
