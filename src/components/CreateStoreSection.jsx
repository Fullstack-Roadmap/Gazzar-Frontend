import React from "react";
import Button from "./Button";

const CreateStoreSection = () => {
  return (
    <div className="h-screen w-5/6 shadow-custom my-40 flex justify-between items-center p-8 pr-0 rounded-2xl">
      <div className="w-[110vw] h-full bg-blue rounded-2xl"></div>
      <div className="p-20 flex justify-center items-start flex-col gap-12">
        <header className="text-6xl font-bold leading-normal">
          Create <p>Your Own Online Store</p>
        </header>
        <p className="text-2xl font-medium leading-normal">
          Create an online store for your business, so users can easily see what
          you sell and buy products from you.
        </p>
        <Button
          text="Get Started"
          hasArrow={true}
          buttonColor=""
          hasBorder={true}
          textBlue={true}
          textLarge={true}
        />
      </div>
    </div>
  );
};

export default CreateStoreSection;
