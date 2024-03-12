import Button from "../components/Button";
import storeFrontHeroPic from "../assets/storeFrontHeroPic.png";
import Product from "../components/Product";
import { useState } from "react";
import UserNavbar from "../components/UserNavbar";

const StoreFront = () => {
  var products = [...Array(8).keys()];
  const [categoryState, setCategoryState] = useState(0);
  const toggleCategory = (id) => {
    setCategoryState(id);
  };

  return (
    <body className="overflow-hidden">
      <UserNavbar/>
      
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
