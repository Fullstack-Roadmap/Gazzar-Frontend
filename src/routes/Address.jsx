import React from "react";
import mySvg from "../assets/Size6.jpg";

// Ready to take your business to the next level?
const Address = ({ id }) => {
  return (
    <div
      className="text-white p-16 flex flex-col w-[50vw] h-screen justify-between font-bold text-3xl box-border bg-blue
    "
    >
      <header className="flex justify-start items-center gap-1">
        <span className="rounded-sm aspect-square h-6 bg-[#FFB722]"></span>
        <p>Gazzar</p>
      </header>
      <div className="flex justify-center">
        <img className="w-60" src={mySvg} alt="" />
      </div>
      {id === "1" && (
        <section className="text-3xl">Manage your business digitally.</section>
      )}
      {id === "2" && (
        <section className="text-3xl">Setup your store website.</section>
      )}
      {id === "3" && (
        <section className="text-3xl">Business analytics.</section>
      )}
      {id === "4" && (
        <section className="text-3xl">
          Ready to take your business to the next level?
        </section>
      )}
      {id === "5" && (
        <section className="text-3xl">You’re all ready to go! </section>
      )}
      {id === "1" && (
        <p className="text-base font-thin">
          Save yourself the stress of manually documenting various aspects of
          your business. Customers, sales and store products can be managed with
          Gazzar.
        </p>
      )}
      {id === "2" && (
        <p className="text-base font-thin">
          Having a customized website makes your business stand out as a
          professional, and it also make it easier for your customers to see all
          your products.
        </p>
      )}
      {id === "3" && (
        <p className="text-lg font-thin">
          See simplified metrics of how your business is performing and tips on
          how to improve your sales.
        </p>
      )}
      <div></div>
    </div>
  );
};

export default Address;
