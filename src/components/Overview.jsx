import cart from "../assets/svgs/cart.svg";
import checkmark from "../assets/svgs/checkmark.svg";
import productsOverview from "../assets/svgs/products-overview.svg";
import customersOverview from "../assets/svgs/customers-overview.svg";
import pageVisits from "../assets/svgs/page-visits.svg";
import { useState } from "react";

const Overview = () => {
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
              You're a few steps away from finishing
            </div>
          </div>
          <button className="bg-blue text-white py-4 px-10 rounded-lg font-semibold">
            Complete account setup
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
        <section className="my-6">
          <div>Amount made</div>
          <div>Top selling products</div>
        </section>
        <section>pending orders</section>
      </div>
    </>
  );
};

export default Overview;
