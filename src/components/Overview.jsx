import cart from "../assets/svgs/cart.svg";
import checkmark from "../assets/svgs/checkmark.svg";
import productsOverview from "../assets/svgs/products-overview.svg";
import customersOverview from "../assets/svgs/customers-overview.svg";
import graph from "../assets/svgs/graph1.svg";
import pageVisits from "../assets/svgs/page-visits.svg";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Overview = () => {
  const topSellingProducts = [...Array(5).keys()];
  const pendingOrders = [
    {
      name: "Sleek nike shorts",
      qty: 10,
      status: "Completed",
      totalAmount: "N7,000",
    },
    {
      name: "Sleek nike shorts",
      qty: 5,
      status: "Completed",
      totalAmount: "N7,000",
    },
    {
      name: "Sleek nike shorts",
      qty: 23,
      status: "Completed",
      totalAmount: "N21,000",
    },
    {
      name: "Sleek nike shorts",
      qty: 12,
      status: "Completed",
      totalAmount: "N7,000",
    },
    {
      name: "Sleek nike shorts",
      qty: 16,
      status: "Completed",
      totalAmount: "N13,500",
    },
  ];
  const pendingOrdersColumns = ["Qty", "Status", "Total amount"];
  const overviewList = [
    { title: "No. of orders", svg: cart, amount: 17 },
    { title: "Products sold", svg: productsOverview, amount: 17 },
    { title: "New customers", svg: customersOverview, amount: 17 },
    { title: "Page visits", svg: pageVisits, amount: 17 },
  ];
  const [registrationComplete, setRegistrationComplete] = useState(false);
  return (
    <>
      {!registrationComplete && (
        <div className="flex justify-between items-center px-5 py-3 m-6 bg-blue/20 rounded-xl border-2 border-blue/40">
          <div className="flex gap-3 font-semibold items-center">
            <img src={checkmark} alt="checkmark" />
            <div className="text-blue">
              You're a few steps away from finishing.
            </div>
          </div>
          <button className="bg-blue text-white py-4 px-10 rounded-lg font-semibold">
            Complete account setup.
          </button>
        </div>
      )}
      <div className="m-7">
        <ul className="flex justify-between gap-4">
          {overviewList.map((item) => (
            <li className="border-[1px] rounded-xl border-gray px-8 py-6 flex gap-3">
              <img src={item.svg} alt="cart" />
              <div>
                <p className="font-bold">{item.title}</p>
                <h1 className="text-4xl font-bold">{item.amount}</h1>
              </div>
            </li>
          ))}
        </ul>
        <section className="my-6 flex gap-3">
          <div className="flex flex-col gap-2 w-3/5 p-7 border-gray border-[1px] rounded-lg font-semibold">
            <p className="font-bold text-lg">Amount made</p>
            <h2 className="text-blue font-bold text-3xl">N72,500</h2>
            <div className="flex justify-between items-center">
              <p className="text-black/50">20 February 2022</p>
              <div className="flex gap-2 border-[1px] border-gray rounded-md overflow-hidden text-xs">
                <span className="py-3 px-4 text-black/50">Filter</span>
                <span className="flex justify-center items-center gap-1 py-3 px-4 bg-blue/20 text-blue">
                  Weekly
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <img src={graph} alt="graph" className="mt-4" />
          </div>
          <div className="flex flex-col gap-5 w-2/5 py-8 px-12 border-gray border-[1px] rounded-lg font-semibold text-xs">
            <h2 className="text-lg font-bold">Top selling products</h2>
            {topSellingProducts.map((index) => (
              <div
                className={`p-2 flex gap-3 justify-between ${
                  index !== topSellingProducts.length - 1 &&
                  " border-b-[1px] border-gray"
                }`}
              >
                <div className="flex gap-3 justify-center items-center">
                  <img src={cart} alt="pfp" className="h-10" />
                  <div>
                    <h3 className="font-bold">Super cool shirt</h3>
                    <p className=" text-sm text-black/50">N5,000</p>
                  </div>
                </div>
                <h3 className="font-extrabold">12pcs</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="h-full p-7 border-gray border-[1px] rounded-lg font-bold text-xl">
          Pending orders
          <div className="mt-7">
            <ul className="flex font-bold text-base bg-gray/50 p-3 rounded-md">
              <li className="w-full ml-3">Name</li>
              {pendingOrdersColumns.map((columnName) => (
                <li className="w-full text-center">{columnName}</li>
              ))}
            </ul>
            <ul>
              {pendingOrders.map((item, index) => (
                <li className="text-sm font-medium">
                  <ul
                    className={`h-16 flex items-center px-5 py-3 w-full ${
                      index !== pendingOrders.length - 1 &&
                      "border-b-[1px] border-gray"
                    }`}
                  >
                    <li className="w-full">{item.name}</li>
                    <li className="w-full text-center">{item.qty}</li>
                    <li className="w-full text-center">{item.status}</li>
                    <li className="w-full text-center">{item.totalAmount}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Overview;
